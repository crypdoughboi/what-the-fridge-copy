import { fridgeScanItems } from '../data/mockData';
import { VisionItem } from '../types';

export async function scanFridgeOrPantryImage(_file?: File | null): Promise<VisionItem[]> {
  // Future integration points:
  // - OpenAI vision with structured JSON output.
  // - Image classification tuned for grocery and pantry items.
  // - Confidence thresholds for "clearly seen", "maybe low", and "could not tell".
  // - Household grocery memory to avoid claiming perfect inventory.
  await wait(1700);
  return fridgeScanItems;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
