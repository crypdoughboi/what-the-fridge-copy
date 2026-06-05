import { receiptExtraction } from '../data/mockData';
import { ReceiptExtraction } from '../types';

export async function scanReceiptImage(_file?: File | null): Promise<ReceiptExtraction> {
  // Future integration points:
  // - Google Vision for general OCR.
  // - AWS Textract for structured receipt extraction.
  // - Azure Form Recognizer for receipt fields and line items.
  // - OpenAI vision for messy grocery receipt cleanup.
  // - A dedicated receipt parser API for merchant-specific item normalization.
  await wait(1600);
  return receiptExtraction;
}

export async function normalizeReceiptItems(extraction: ReceiptExtraction): Promise<ReceiptExtraction> {
  // Replace this with a server-side normalization service when real receipts arrive.
  await wait(400);
  return extraction;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
