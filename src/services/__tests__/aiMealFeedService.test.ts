import { describe, expect, it } from 'vitest';
import { DeckMeal, MealIdea } from '../../types';
import {
  aiMealCardToDeckMeal,
  assessDeckStrength,
  buildFeedCacheKey,
  mergeAiIntoDeck,
  normalizeAiMealCards,
  type AiMealCard,
} from '../aiMealFeedService';

function rawCard(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    name: 'Chickpea kale skillet',
    description: 'Crispy chickpeas over garlicky kale.',
    whyItFits: 'Uses your chickpeas and kale before they turn.',
    coreIngredients: ['chickpeas', 'kale', 'garlic'],
    optionalIngredients: ['feta'],
    pantryIngredients: ['olive oil', 'salt'],
    substitutionNotes: ['No kale? Your spinach works.'],
    steps: ['Crisp the chickpeas.', 'Wilt the kale.', 'Combine and season.'],
    effort: 'Easy',
    cuisine: 'Mediterranean',
    cookingMethod: 'skillet',
    tags: ['Healthy', 'quick'],
    timeMinutes: 25,
    servings: 2,
    confidence: 0.85,
    source: 'ai_generated',
    basedOnStaticId: '',
    ...overrides,
  };
}

function deckMealStub(name: string, have: string[], missingCount: number): DeckMeal {
  return {
    meal: { id: `id-${name}`, name } as MealIdea,
    mode: 'inventory',
    have,
    need: [],
    pantry: [],
    missingCount,
    reason: '',
    source: 'static',
  };
}

describe('normalizeAiMealCards', () => {
  it('accepts a valid card and preserves its fields', () => {
    const cards = normalizeAiMealCards([rawCard()]);
    expect(cards).toHaveLength(1);
    expect(cards[0].name).toBe('Chickpea kale skillet');
    expect(cards[0].tags).toEqual(['healthy', 'quick']);
    expect(cards[0].source).toBe('ai_generated');
  });

  it('drops malformed entries instead of trusting the model', () => {
    const cards = normalizeAiMealCards([
      null,
      'not an object',
      rawCard({ name: '' }),
      rawCard({ coreIngredients: ['just one'] }),
      rawCard({ steps: [] }),
      rawCard({ name: 'Valid dish' }),
    ]);
    expect(cards).toHaveLength(1);
    expect(cards[0].name).toBe('Valid dish');
  });

  it('clamps confidence and coerces unknown enums to safe defaults', () => {
    const cards = normalizeAiMealCards([rawCard({ confidence: 7, source: 'made_up_source', effort: 'Herculean' })]);
    expect(cards[0].confidence).toBe(1);
    expect(cards[0].source).toBe('ai_generated');
    expect(cards[0].effort).toBe('Easy');
  });

  it('dedupes within the batch and against already-shown names', () => {
    const cards = normalizeAiMealCards([rawCard(), rawCard(), rawCard({ name: 'Shown before' })], new Set(['shown before']));
    expect(cards).toHaveLength(1);
  });
});

describe('aiMealCardToDeckMeal', () => {
  const card: AiMealCard = normalizeAiMealCards([rawCard()])[0];

  it('recomputes have/missing locally from real inventory', () => {
    const deckMeal = aiMealCardToDeckMeal(card, ['chickpeas', 'garlic cloves'], 'inventory');
    expect(deckMeal.have).toEqual(['chickpeas', 'garlic']);
    expect(deckMeal.need).toEqual(['kale']);
    expect(deckMeal.missingCount).toBe(1);
    expect(deckMeal.source).toBe('ai_generated');
  });

  it('never credits inventory the user does not have', () => {
    const deckMeal = aiMealCardToDeckMeal(card, [], 'inventory');
    expect(deckMeal.have).toEqual([]);
    expect(deckMeal.missingCount).toBe(3);
  });

  it('produces a MealIdea the existing flows can consume', () => {
    const deckMeal = aiMealCardToDeckMeal(card, [], 'inventory');
    expect(deckMeal.meal.id.startsWith('ai-')).toBe(true);
    expect(deckMeal.meal.structuredIngredients.filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)).toHaveLength(3);
    expect(deckMeal.meal.recipe.steps).toHaveLength(3);
    expect(deckMeal.meal.status).toBe('suggested');
  });
});

describe('assessDeckStrength', () => {
  it('never flags an empty kitchen in inventory mode', () => {
    expect(assessDeckStrength({ deck: [], inventory: [], mode: 'inventory' }).weak).toBe(false);
  });

  it('flags a thin scratch deck (narrow cuisine/method combos) but not a full one', () => {
    const thin = Array.from({ length: 4 }, (_, index) => deckMealStub(`meal-${index}`, [], 0));
    expect(assessDeckStrength({ deck: thin, inventory: [], mode: 'scratch' })).toEqual({ weak: true, reasons: ['thin_scratch_deck'] });
    const full = Array.from({ length: 20 }, (_, index) => deckMealStub(`meal-${index}`, [], 0));
    expect(assessDeckStrength({ deck: full, inventory: [], mode: 'scratch' }).weak).toBe(false);
  });

  it('flags a thin deck with few high-confidence matches', () => {
    const strength = assessDeckStrength({
      deck: [deckMealStub('a', ['eggs'], 4), deckMealStub('b', ['eggs'], 5)],
      inventory: ['eggs', 'rice'],
      mode: 'inventory',
    });
    expect(strength.weak).toBe(true);
    expect(strength.reasons).toContain('few_matches');
    expect(strength.reasons).toContain('few_high_confidence_matches');
  });

  it('flags underused inventory', () => {
    const deck = Array.from({ length: 10 }, (_, index) => deckMealStub(`meal-${index}`, ['eggs'], 0));
    const strength = assessDeckStrength({
      deck,
      inventory: ['eggs', 'kimchi', 'halloumi', 'okra', 'tempeh', 'harissa'],
      mode: 'inventory',
    });
    expect(strength.reasons).toContain('underused_inventory');
  });

  it('flags expiring items uncovered by the top of the deck', () => {
    const deck = Array.from({ length: 6 }, (_, index) => deckMealStub(`meal-${index}`, ['rice'], 0));
    const strength = assessDeckStrength({ deck, inventory: ['rice', 'salmon'], expiringSoon: ['salmon'], mode: 'inventory' });
    expect(strength.reasons).toContain('expiring_items_uncovered');
  });

  it('stays quiet when the static deck is strong', () => {
    const deck = Array.from({ length: 8 }, (_, index) => deckMealStub(`meal-${index}`, ['eggs', 'rice', 'kale'], index % 2));
    const strength = assessDeckStrength({ deck, inventory: ['eggs', 'rice', 'kale'], mode: 'inventory' });
    expect(strength.weak).toBe(false);
  });
});

describe('mergeAiIntoDeck', () => {
  const staticDeck = Array.from({ length: 5 }, (_, index) => deckMealStub(`static-${index}`, [], 0));
  const aiMeals = [deckMealStub('ai-one', [], 0), deckMealStub('ai-two', [], 0)];

  it('never reorders cards the user has already seen', () => {
    const merged = mergeAiIntoDeck(staticDeck, aiMeals, 2);
    expect(merged.slice(0, 3).map((entry) => entry.meal.name)).toEqual(['static-0', 'static-1', 'static-2']);
    expect(merged).toHaveLength(7);
    expect(merged[3].meal.name).toBe('ai-one');
  });

  it('dedupes AI meals that duplicate existing deck names', () => {
    const merged = mergeAiIntoDeck(staticDeck, [deckMealStub('static-0', [], 0)], 0);
    expect(merged).toHaveLength(5);
  });

  it('appends leftover AI cards when the tail is short', () => {
    const merged = mergeAiIntoDeck(staticDeck.slice(0, 1), aiMeals, 0);
    expect(merged.map((entry) => entry.meal.name)).toContain('ai-two');
    expect(merged).toHaveLength(3);
  });
});

describe('buildFeedCacheKey', () => {
  const params = {
    inventory: ['eggs', 'kale'],
    preferences: {
      effort: 'Easy' as const,
      cookingMethod: 'Any method' as const,
      restrictions: [],
      vibe: 'Healthy' as const,
      mainIngredient: 'Use what makes sense' as const,
      cuisine: 'Any cuisine' as const,
    },
    mode: 'inventory' as const,
    staticDeck: [],
  };

  it('is stable across inventory order and duplicate-normalizing names', () => {
    const a = buildFeedCacheKey(params);
    const b = buildFeedCacheKey({ ...params, inventory: ['kale', 'Eggs', 'eggs'] });
    expect(a).toBe(b);
  });

  it('changes when the kitchen state changes', () => {
    const a = buildFeedCacheKey(params);
    expect(buildFeedCacheKey({ ...params, inventory: ['eggs'] })).not.toBe(a);
    expect(buildFeedCacheKey({ ...params, mode: 'scratch' })).not.toBe(a);
    expect(buildFeedCacheKey({ ...params, preferences: { ...params.preferences, vibe: 'Spicy' } })).not.toBe(a);
  });
});
