import { MealIdea } from '../types';

/**
 * A shareable meal card built only from the app's own meal metadata — the title,
 * a short subtitle, key ingredient names, and the items still missing from the list.
 * No external or copyrighted recipe text is used.
 */
export type MealShareCard = {
  title: string;
  subtitle: string;
  keyIngredients: string[];
  missingItems: string[];
  branding: string;
};

const BRANDING = 'Made with What The Fridge — wtf should I make?';

export function buildMealShareCard(meal: MealIdea, missingItems: string[] = []): MealShareCard {
  const subtitle = [meal.effort, `${meal.timeMinutes} min`, ...meal.tags.slice(0, 2)].filter(Boolean).join(' · ');
  return {
    title: meal.name,
    subtitle,
    keyIngredients: meal.ingredients.slice(0, 6),
    missingItems: missingItems.slice(0, 6),
    branding: BRANDING,
  };
}

/** Plain-text version of the card for the native share sheet or clipboard. */
export function mealShareText(card: MealShareCard): string {
  const lines = [card.title];
  if (card.subtitle) lines.push(card.subtitle);
  lines.push('');
  if (card.keyIngredients.length) lines.push(`Key ingredients: ${card.keyIngredients.join(', ')}`);
  if (card.missingItems.length) lines.push(`Still need: ${card.missingItems.join(', ')}`);
  lines.push('', card.branding);
  return lines.join('\n');
}

export type ShareResult = 'shared' | 'copied' | 'failed';

/**
 * Share a meal card via the native share sheet when available, falling back to copying
 * the text to the clipboard. Returns what happened so the caller can show the right toast.
 */
export async function shareMealCard(card: MealShareCard): Promise<ShareResult> {
  const text = mealShareText(card);

  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({ title: card.title, text });
      return 'shared';
    } catch (error) {
      // User dismissed the share sheet — treat as a no-op rather than copying behind their back.
      if (error instanceof DOMException && error.name === 'AbortError') return 'failed';
      // Otherwise fall through to clipboard.
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return 'copied';
  } catch {
    return 'failed';
  }
}
