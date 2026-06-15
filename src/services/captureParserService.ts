import { fridgeScanItems, receiptExtraction } from '../data/mockData';
import {
  CaptureMethod,
  InventoryItemState,
  ParsedGroceryItem,
  ParsedGroceryResult,
  ReceiptExtraction,
  ScanConfidence,
  StorageLocation,
  VisionItem,
} from '../types';
import { categorizeGroceryItem, normalizeIngredientKey, normalizeReceiptItemName, parseManualItemNames, sectionForCategory } from '../utils/groceryLogic';

type ParseGroceryCaptureInput = {
  method: CaptureMethod;
  file?: File | null;
  text?: string;
  fallbackState?: InventoryItemState;
};

const methodLabels: Record<CaptureMethod, string> = {
  receipt_photo: 'Receipt photo',
  fridge_photo: 'Fridge photo',
  grocery_photo: 'Grocery photo',
  voice_add: 'Voice add',
  pasted_receipt: 'Pasted receipt',
  manual_add: 'Manual add',
};

export async function parseGroceryCapture(input: ParseGroceryCaptureInput): Promise<ParsedGroceryResult> {
  await wait(input.file ? 650 : 220);
  const capturedAt = new Date().toISOString();
  const fallbackState = input.fallbackState ?? defaultInventoryStateForMethod(input.method);

  if (input.method === 'receipt_photo') {
    return {
      method: input.method,
      sourceLabel: methodLabels[input.method],
      capturedAt,
      store: receiptExtraction.store,
      date: receiptExtraction.date,
      total: receiptExtraction.total,
      items: receiptExtraction.items.map((item) =>
        parsedItem({
          rawName: item.rawName,
          normalizedName: item.normalizedName,
          price: item.price,
          confidenceScore: 0.94,
          inventoryState: 'confirmed_have',
          note: 'Purchased from receipt.',
        }),
      ),
    };
  }

  if (input.method === 'fridge_photo') {
    return {
      method: input.method,
      sourceLabel: methodLabels[input.method],
      capturedAt,
      items: fridgeScanItems.map((item) =>
        parsedItem({
          rawName: item.name,
          normalizedName: item.name,
          confidenceScore: confidenceScoreFromScan(item.confidence),
          inventoryState: inventoryStateFromScan(item.confidence),
          note: item.note,
          storageLocation: storageFromCategory(item.category),
        }),
      ),
    };
  }

  if (input.method === 'grocery_photo') {
    return {
      method: input.method,
      sourceLabel: methodLabels[input.method],
      capturedAt,
      items: receiptExtraction.items.slice(0, 6).map((item) =>
        parsedItem({
          rawName: item.rawName,
          normalizedName: item.normalizedName,
          price: item.price,
          confidenceScore: 0.84,
          inventoryState: 'confirmed_have',
          note: 'Seen in a grocery photo.',
        }),
      ),
    };
  }

  const names = namesFromText(input.text ?? '', input.method);
  return {
    method: input.method,
    sourceLabel: methodLabels[input.method],
    capturedAt,
    items: names.map((name, index) =>
      parsedItem({
        idSuffix: `${index}`,
        rawName: name,
        normalizedName: name,
        confidenceScore: input.method === 'manual_add' ? 0.98 : input.method === 'voice_add' ? 0.76 : 0.88,
        inventoryState: fallbackState,
        note: noteForTextCapture(input.method, fallbackState),
      }),
    ),
  };
}

export function parsedResultToReceiptExtraction(result: ParsedGroceryResult): ReceiptExtraction {
  const items = result.items.map((item) => ({
    id: item.id,
    rawName: item.rawName,
    normalizedName: item.normalizedName,
    category: item.category,
    section: item.section,
    price: item.price ?? 0,
    isGrocery: item.isGrocery,
    confidenceScore: item.confidenceScore,
  }));

  return {
    store: result.store ?? 'Other',
    date: result.date ?? result.capturedAt.slice(0, 10),
    total: result.total ?? Number(items.reduce((sum, item) => sum + item.price, 0).toFixed(2)),
    itemCount: items.length,
    items,
  };
}

export function parsedResultToVisionItems(result: ParsedGroceryResult): VisionItem[] {
  return result.items.map((item) => ({
    id: item.id,
    name: item.normalizedName,
    category: item.category,
    section: item.section,
    confidence: scanConfidenceFromInventoryState(item.inventoryState),
    confidenceScore: item.confidenceScore,
    inventoryState: item.inventoryState,
    storageLocation: item.storageLocation,
    note: `${item.note} ${Math.round(item.confidenceScore * 100)}% confidence.`,
  }));
}

function parsedItem({
  idSuffix,
  rawName,
  normalizedName,
  price,
  confidenceScore,
  inventoryState,
  note,
  storageLocation,
}: {
  idSuffix?: string;
  rawName: string;
  normalizedName: string;
  price?: number;
  confidenceScore: number;
  inventoryState: InventoryItemState;
  note: string;
  storageLocation?: StorageLocation;
}): ParsedGroceryItem {
  const cleanName = normalizeReceiptItemName(normalizedName);
  const category = categorizeGroceryItem(cleanName);
  const key = normalizeIngredientKey(cleanName);

  return {
    id: `parsed-${key.replace(/[^a-z0-9]+/g, '-')}-${idSuffix ?? Math.round(confidenceScore * 1000)}`,
    rawName,
    normalizedName: cleanName,
    canonicalName: key,
    category,
    section: sectionForCategory(category),
    quantity: null,
    unit: null,
    price,
    confidenceScore,
    inventoryState,
    storageLocation: storageLocation ?? storageFromCategory(category),
    isGrocery: category !== 'Household' || /paper|foil|soap|trash/i.test(cleanName),
    note,
  };
}

function namesFromText(text: string, method: CaptureMethod): string[] {
  const withoutReceiptPrices = text
    .split(/\n+/)
    .map((line) => line.replace(/\$?\d+(?:\.\d{2})?$/g, '').replace(/\b(total|subtotal|tax|visa|mastercard|change)\b/gi, '').trim())
    .filter(Boolean)
    .join(method === 'pasted_receipt' ? '\n' : ', ');

  const voiceCleaned = withoutReceiptPrices
    .replace(/\b(i have|we have|there is|there are|add|put|need|buy|running low on|low on)\b/gi, ',')
    .replace(/\band\b/gi, ',');

  const parsed = parseManualItemNames(method === 'voice_add' ? voiceCleaned : withoutReceiptPrices);
  if (parsed.length) return parsed;
  return method === 'pasted_receipt' ? ['chicken', 'rice', 'broccoli'] : [];
}

function noteForTextCapture(method: CaptureMethod, state: InventoryItemState): string {
  if (method === 'pasted_receipt') return 'Parsed from pasted receipt text.';
  if (method === 'voice_add') return state === 'running_low' ? 'Heard as running low.' : 'Heard as currently in the kitchen.';
  return state === 'running_low' ? 'Manual fallback, marked need to buy.' : 'Manual fallback, marked in the kitchen.';
}

function defaultInventoryStateForMethod(method: CaptureMethod): InventoryItemState {
  if (method === 'manual_add') return 'confirmed_have';
  if (method === 'voice_add') return 'confirmed_have';
  if (method === 'pasted_receipt') return 'confirmed_have';
  return 'confirmed_have';
}

function inventoryStateFromScan(confidence: ScanConfidence): InventoryItemState {
  if (confidence === 'clearlySeen') return 'confirmed_have';
  if (confidence === 'maybeLow') return 'running_low';
  return 'probably_gone';
}

function scanConfidenceFromInventoryState(state: InventoryItemState): ScanConfidence {
  if (state === 'confirmed_have' || state === 'probably_have' || state === 'use_soon') return 'clearlySeen';
  if (state === 'running_low') return 'maybeLow';
  return 'couldNotTell';
}

function confidenceScoreFromScan(confidence: ScanConfidence): number {
  if (confidence === 'clearlySeen') return 0.9;
  if (confidence === 'maybeLow') return 0.62;
  return 0.34;
}

function storageFromCategory(category: ParsedGroceryItem['category']): StorageLocation {
  if (category === 'Frozen') return 'freezer';
  if (category === 'Produce' || category === 'Protein' || category === 'Dairy') return 'fridge';
  if (category === 'Pantry' || category === 'Condiments' || category === 'Snacks' || category === 'Drinks') return 'pantry';
  return 'unknown';
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
