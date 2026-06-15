import { VisionItem } from '../types';
import { parseGroceryCapture, parsedResultToVisionItems } from './captureParserService';

export async function scanFridgeOrPantryImage(_file?: File | null): Promise<VisionItem[]> {
  const parsed = await parseGroceryCapture({ method: 'fridge_photo', file: _file });
  return parsedResultToVisionItems(parsed);
}
