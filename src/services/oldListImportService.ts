import { GroceryListEntry } from '../types';
import { categorizeGroceryItem, normalizeReceiptItemName, sectionForCategory } from '../utils/groceryLogic';

export async function importOldGroceryList(text: string): Promise<GroceryListEntry[]> {
  // Future integration points:
  // - Notes, Reminders, screenshots, email, and text import.
  // - OCR for screenshot lists.
  // - Deduping against existing household grocery memory.
  await wait(700);
  return parseOldListText(text);
}

export function parseOldListText(text: string): GroceryListEntry[] {
  return text
    .split(/\n|,|;/)
    .map((line) => normalizeReceiptItemName(line))
    .filter(Boolean)
    .filter((item, index, all) => all.findIndex((other) => other.toLowerCase() === item.toLowerCase()) === index)
    .map((name) => {
      const category = categorizeGroceryItem(name);
      return {
        id: `import-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name,
        category,
        section: sectionForCategory(category),
        reason: 'Imported from an old list.',
        source: 'import',
        priority: 66,
      };
    });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
