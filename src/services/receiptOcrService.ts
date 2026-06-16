import { receiptExtraction } from '../data/mockData';
import { ReceiptExtraction, Store } from '../types';
import { buildReceiptItems } from '../utils/groceryLogic';
import { isSupabaseConfigured, supabase } from './supabaseClient';

const STORES: Store[] = ["Trader Joe's", 'Whole Foods', 'Costco', 'Target', 'Walmart', 'Local grocery', 'Other'];

/**
 * Extract grocery line items from a receipt photo.
 *
 * Real OCR runs in the `scan-receipt` Supabase Edge Function, which calls Claude
 * vision with the API key kept server-side. The function returns raw line items
 * (rawName, price, isGrocery); we run them through the app's own
 * `buildReceiptItems` so normalization/categorization matches the rest of the
 * app. Falls back to sample data when Supabase isn't configured or the call
 * fails.
 */
export async function scanReceiptImage(file?: File | null): Promise<ReceiptExtraction> {
  if (!file || !isSupabaseConfigured || !supabase) {
    await wait(1200);
    return receiptExtraction;
  }

  try {
    const image = await fileToBase64(file);
    const { data, error } = await supabase.functions.invoke('scan-receipt', {
      body: { image, mediaType: file.type || 'image/jpeg' },
    });
    if (error) throw error;

    const items = buildReceiptItems(normalizeRawItems(data?.items));
    if (items.length === 0) return receiptExtraction;

    return {
      store: STORES.includes(data?.store as Store) ? (data.store as Store) : 'Other',
      date: typeof data?.date === 'string' && data.date ? data.date : new Date().toISOString().slice(0, 10),
      total: typeof data?.total === 'number' ? data.total : 0,
      itemCount: items.length,
      items,
    };
  } catch (error) {
    console.error('Receipt OCR failed; using sample data.', error);
    return receiptExtraction;
  }
}

export async function normalizeReceiptItems(extraction: ReceiptExtraction): Promise<ReceiptExtraction> {
  // Replace this with a server-side normalization service when real receipts arrive.
  await wait(400);
  return extraction;
}

function normalizeRawItems(raw: unknown): Array<{ rawName: string; price: number; isGrocery?: boolean }> {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((entry) => {
    if (!entry || typeof entry !== 'object') return [];
    const record = entry as Record<string, unknown>;
    const rawName = typeof record.rawName === 'string' ? record.rawName.trim() : '';
    if (!rawName) return [];
    return [
      {
        rawName,
        price: typeof record.price === 'number' ? record.price : 0,
        isGrocery: typeof record.isGrocery === 'boolean' ? record.isGrocery : true,
      },
    ];
  });
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const comma = result.indexOf(',');
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
