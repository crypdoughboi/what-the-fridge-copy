import { ReceiptExtraction } from '../types';
import { parseGroceryCapture, parsedResultToReceiptExtraction } from './captureParserService';

export async function scanReceiptImage(_file?: File | null): Promise<ReceiptExtraction> {
  const parsed = await parseGroceryCapture({ method: 'receipt_photo', file: _file });
  return parsedResultToReceiptExtraction(parsed);
}

export async function normalizeReceiptItems(extraction: ReceiptExtraction): Promise<ReceiptExtraction> {
  await wait(400);
  return extraction;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
