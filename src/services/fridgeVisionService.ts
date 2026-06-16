import { Category, ScanConfidence, StoreSection, VisionItem } from '../types';
import { isSupabaseConfigured, supabase } from './supabaseClient';

const CATEGORIES: Category[] = ['Produce', 'Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Condiments', 'Drinks', 'Other'];
const SECTIONS: StoreSection[] = ['Produce', 'Meat/Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Other'];
const CONFIDENCES: ScanConfidence[] = ['clearlySeen', 'maybeLow', 'couldNotTell'];

/**
 * Detect grocery/pantry items in a fridge photo.
 *
 * Real recognition runs in the `scan-fridge` Supabase Edge Function, which calls
 * Claude vision with the API key kept server-side. When Supabase isn't
 * configured, no image is provided, or the call fails, we fall back to the
 * sample items so the flow still works in local/demo mode.
 */
export async function scanFridgeOrPantryImage(file?: File | null): Promise<VisionItem[]> {
  // TEMPORARY DIAGNOSTIC: surface the exact failure reason on-screen instead of
  // silently falling back to sample data. Revert once the pipeline is confirmed.
  if (!file) return debug('no-file', 'scan called without an image');
  if (!isSupabaseConfigured || !supabase) {
    return debug('not-configured', `url=${Boolean(import.meta.env.VITE_SUPABASE_URL)} key=${Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)}`);
  }

  try {
    const image = await fileToBase64(file);
    const { data, error } = await supabase.functions.invoke('scan-fridge', {
      body: { image, mediaType: file.type || 'image/jpeg' },
    });
    if (error) {
      const status = (error as { context?: { status?: number } })?.context?.status;
      return debug('invoke-error', `${error.message ?? String(error)}${status ? ` (status ${status})` : ''}`);
    }
    const items = normalizeItems(data?.items);
    if (items.length === 0) return debug('empty-result', JSON.stringify(data).slice(0, 140));
    return items;
  } catch (error) {
    return debug('threw', error instanceof Error ? error.message : String(error));
  }
}

function debug(reason: string, detail: string): VisionItem[] {
  return [
    {
      id: `debug-${reason}`,
      name: `DEBUG: ${reason}`,
      category: 'Other',
      section: 'Other',
      confidence: 'couldNotTell',
      note: detail,
    },
  ];
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

function normalizeItems(raw: unknown): VisionItem[] {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((entry, index): VisionItem[] => {
    if (!entry || typeof entry !== 'object') return [];
    const record = entry as Record<string, unknown>;
    const name = typeof record.name === 'string' ? record.name.trim() : '';
    if (!name) return [];
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return [
      {
        id: `vision-${index}-${slug || 'item'}`,
        name,
        category: CATEGORIES.includes(record.category as Category) ? (record.category as Category) : 'Other',
        section: SECTIONS.includes(record.section as StoreSection) ? (record.section as StoreSection) : 'Other',
        confidence: CONFIDENCES.includes(record.confidence as ScanConfidence) ? (record.confidence as ScanConfidence) : 'maybeLow',
        note: typeof record.note === 'string' ? record.note : '',
      },
    ];
  });
}
