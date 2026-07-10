import {
  Category,
  DeckMeal,
  MealIdea,
  MealMode,
  MealPreferences,
  MealSource,
  RecipeStep,
  SeedMealIngredient,
} from '../types';
import { categorizeGroceryItem, normalizeIngredientKey, sectionForCategory } from '../utils/groceryLogic';
import { describeInventoryForPrompt } from '../utils/ingredientIntelligence';
import { isSupabaseConfigured, supabase } from './supabaseClient';

// AI layer for the swipe deck. The static template deck always renders first;
// this service decides when that deck is weak for the user's inventory, asks the
// `generate-meal-feed` Edge Function (Claude) for structured meal cards, validates
// everything, and maps the results into the same MealIdea/DeckMeal shapes the rest
// of the app already understands — so saving, cooking, and grocery-list diffing
// work on AI meals with zero special cases.

export type AiMealCard = {
  name: string;
  description: string;
  whyItFits: string;
  coreIngredients: string[];
  optionalIngredients: string[];
  pantryIngredients: string[];
  substitutionNotes: string[];
  steps: string[];
  effort: string;
  cuisine: string;
  cookingMethod: string;
  tags: string[];
  timeMinutes: number;
  servings: number;
  confidence: number;
  source: MealSource;
  basedOnStaticId: string;
};

export type DeckStrength = {
  weak: boolean;
  reasons: string[];
};

export type AiFeedResult = {
  cards: AiMealCard[];
  // True when the Edge Function call itself failed (network, 4xx/5xx, bad
  // output) — distinct from a successful call that produced nothing new.
  failed: boolean;
};

export const isAiFeedAvailable = isSupabaseConfigured;

/**
 * Decide whether the deterministic deck is weak enough to bring in AI.
 * Pure so it's directly testable. Inventory mode looks at match quality against
 * the user's items; scratch mode only flags a thin deck (a narrow cuisine or
 * method combination the static library can't cover).
 */
export function assessDeckStrength({
  deck,
  inventory,
  expiringSoon = [],
  mode,
}: {
  deck: DeckMeal[];
  inventory: string[];
  expiringSoon?: string[];
  mode: MealMode;
}): DeckStrength {
  if (mode === 'scratch') {
    return deck.length < 8 ? { weak: true, reasons: ['thin_scratch_deck'] } : { weak: false, reasons: [] };
  }
  if (inventory.length === 0) return { weak: false, reasons: [] };

  const reasons: string[] = [];
  const strongMatches = deck.filter((entry) => entry.missingCount <= 1).length;
  if (deck.length < 4) reasons.push('few_matches');
  if (strongMatches < 3) reasons.push('few_high_confidence_matches');

  const top = deck.slice(0, 10);
  const usedKeys = new Set(top.flatMap((entry) => entry.have.map(normalizeIngredientKey)));
  const inventoryKeys = Array.from(new Set(inventory.map(normalizeIngredientKey)));
  const unusedKeys = inventoryKeys.filter((key) => !usedKeys.has(key));
  if (inventoryKeys.length >= 5 && unusedKeys.length / inventoryKeys.length > 0.5) reasons.push('underused_inventory');

  const expiringKeys = expiringSoon.map(normalizeIngredientKey);
  if (expiringKeys.length) {
    const topFiveKeys = new Set(deck.slice(0, 5).flatMap((entry) => entry.have.map(normalizeIngredientKey)));
    if (!expiringKeys.some((key) => topFiveKeys.has(key))) reasons.push('expiring_items_uncovered');
  }

  return { weak: reasons.length > 0, reasons };
}

/**
 * Validate raw Edge Function output into typed cards. Never trusts the model:
 * wrong shapes are dropped, strings clamped, enums coerced, duplicates (against
 * `avoidNameKeys` and within the batch) removed.
 */
export function normalizeAiMealCards(raw: unknown, avoidNameKeys: Set<string> = new Set()): AiMealCard[] {
  if (!Array.isArray(raw)) return [];
  const seen = new Set<string>();
  return raw.flatMap((entry): AiMealCard[] => {
    if (!entry || typeof entry !== 'object') return [];
    const record = entry as Record<string, unknown>;
    const name = cleanString(record.name, 80);
    const coreIngredients = cleanStringList(record.coreIngredients, 16);
    const steps = cleanStringList(record.steps, 10, 400);
    if (!name || coreIngredients.length < 2 || steps.length < 2) return [];
    const nameKey = normalizeIngredientKey(name);
    if (seen.has(nameKey) || avoidNameKeys.has(nameKey)) return [];
    seen.add(nameKey);
    const source: MealSource = record.source === 'ai_reranked' ? 'ai_reranked' : 'ai_generated';
    const confidence = typeof record.confidence === 'number' ? Math.max(0, Math.min(1, record.confidence)) : 0.5;
    return [
      {
        name,
        description: cleanString(record.description, 240),
        whyItFits: cleanString(record.whyItFits, 240),
        coreIngredients,
        optionalIngredients: cleanStringList(record.optionalIngredients, 8),
        pantryIngredients: cleanStringList(record.pantryIngredients, 10),
        substitutionNotes: cleanStringList(record.substitutionNotes, 6, 160),
        steps,
        effort: ['Very easy', 'Easy', 'Medium'].includes(record.effort as string) ? (record.effort as string) : 'Easy',
        cuisine: cleanString(record.cuisine, 40) || 'Any',
        cookingMethod: cleanString(record.cookingMethod, 40) || 'skillet',
        tags: cleanStringList(record.tags, 8, 30).map((tag) => tag.toLowerCase()),
        timeMinutes: typeof record.timeMinutes === 'number' && record.timeMinutes > 0 ? Math.min(180, Math.round(record.timeMinutes)) : 30,
        servings: typeof record.servings === 'number' && record.servings > 0 ? Math.min(12, Math.round(record.servings)) : 2,
        confidence,
        source,
        basedOnStaticId: cleanString(record.basedOnStaticId, 80),
      },
    ];
  });
}

/** Map a validated AI card into the app's MealIdea shape so every existing flow works on it. */
export function aiMealCardToMealIdea(card: AiMealCard): MealIdea {
  const slug = `ai-${card.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  const toIngredient = (name: string, kind: 'core' | 'optional' | 'pantry', index: number): SeedMealIngredient => {
    const category = categorizeGroceryItem(name) as Category;
    return {
      rawName: name,
      canonicalName: normalizeIngredientKey(name),
      quantity: null,
      unit: null,
      section: sectionForCategory(category),
      isOptional: kind === 'optional',
      isPantry: kind === 'pantry',
      groceryCategory: category,
      importance: kind === 'core' ? 'core' : kind,
      sortOrder: index,
    };
  };
  const structuredIngredients = [
    ...card.coreIngredients.map((name, index) => toIngredient(name, 'core', index)),
    ...card.optionalIngredients.map((name, index) => toIngredient(name, 'optional', card.coreIngredients.length + index)),
    ...card.pantryIngredients.map((name, index) => toIngredient(name, 'pantry', card.coreIngredients.length + card.optionalIngredients.length + index)),
  ];
  const steps: RecipeStep[] = card.steps.map((body, index) => ({ stepNumber: index + 1, title: `Step ${index + 1}`, body }));

  return {
    id: slug,
    slug,
    name: card.name,
    category: 'Dinner',
    description: card.description,
    dinnerLanes: [],
    cuisineInfluence: card.cuisine,
    format: card.cookingMethod,
    timeMinutes: card.timeMinutes,
    effort: card.effort,
    servings: card.servings,
    tags: card.tags,
    chefNote: '',
    whyItWorks: card.whyItFits,
    equipment: [],
    structuredIngredients,
    recipe: { activeTimeMinutes: card.timeMinutes, totalTimeMinutes: card.timeMinutes, steps },
    ingredients: card.coreIngredients,
    optionalIngredients: card.optionalIngredients,
    pantryIngredients: card.pantryIngredients,
    instructionsPreview: card.steps,
    status: 'suggested',
  };
}

/**
 * Build the DeckMeal for an AI card. Have/missing are recomputed locally against
 * the real inventory — the model's own claims about what the user owns are never used.
 */
export function aiMealCardToDeckMeal(card: AiMealCard, inventory: string[], mode: MealMode): DeckMeal {
  const meal = aiMealCardToMealIdea(card);
  const inventoryKeys = new Set(inventory.map(normalizeIngredientKey));
  const seen = new Set<string>();
  const core = meal.structuredIngredients
    .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
    .filter((ingredient) => (seen.has(ingredient.canonicalName) ? false : (seen.add(ingredient.canonicalName), true)));
  const have = core.filter((ingredient) => inventoryKeys.has(ingredient.canonicalName)).map((ingredient) => ingredient.rawName);
  const missing = core.filter((ingredient) => !inventoryKeys.has(ingredient.canonicalName)).map((ingredient) => ingredient.rawName);

  return {
    meal,
    mode,
    have: mode === 'inventory' ? have : [],
    need: mode === 'inventory' ? missing : core.map((ingredient) => ingredient.rawName),
    pantry: meal.pantryIngredients,
    missingCount: missing.length,
    reason: card.whyItFits || meal.description,
    source: card.source,
    confidence: card.confidence,
    substitutionNotes: card.substitutionNotes,
  };
}

export type AiFeedParams = {
  inventory: string[];
  expiringSoon?: string[];
  preferences: MealPreferences;
  mode: MealMode;
  staticDeck: DeckMeal[];
  avoidMealNames?: string[];
  maxMeals?: number;
};

// -- Caching: never call Claude twice for the same kitchen state. ------------------

const CACHE_STORAGE_KEY = 'wtf.aiFeed.v1';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const CACHE_MAX_ENTRIES = 8;

type CacheEntry = { key: string; at: number; cards: AiMealCard[] };

export function buildFeedCacheKey(params: AiFeedParams): string {
  const material = JSON.stringify({
    inventory: Array.from(new Set(params.inventory.map(normalizeIngredientKey))).sort(),
    expiring: Array.from(new Set((params.expiringSoon ?? []).map(normalizeIngredientKey))).sort(),
    preferences: params.preferences,
    mode: params.mode,
    avoid: [...(params.avoidMealNames ?? [])].sort(),
  });
  // djb2 — cheap and stable; collisions just mean a harmless cache miss/extra hit.
  let hash = 5381;
  for (let index = 0; index < material.length; index += 1) {
    hash = ((hash << 5) + hash + material.charCodeAt(index)) | 0;
  }
  return `feed-${(hash >>> 0).toString(36)}`;
}

function readCache(key: string): AiMealCard[] | null {
  try {
    const entries: CacheEntry[] = JSON.parse(window.localStorage.getItem(CACHE_STORAGE_KEY) ?? '[]');
    const entry = entries.find((candidate) => candidate.key === key);
    if (!entry || Date.now() - entry.at > CACHE_TTL_MS) return null;
    return normalizeAiMealCards(entry.cards);
  } catch {
    return null;
  }
}

function writeCache(key: string, cards: AiMealCard[]): void {
  try {
    const entries: CacheEntry[] = JSON.parse(window.localStorage.getItem(CACHE_STORAGE_KEY) ?? '[]');
    const next = [{ key, at: Date.now(), cards }, ...entries.filter((entry) => entry.key !== key)].slice(0, CACHE_MAX_ENTRIES);
    window.localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Cache is best-effort; a full or unavailable localStorage never blocks the feed.
  }
}

// -----------------------------------------------------------------------------------

/**
 * Fetch AI meal cards for the current kitchen state. Returns [] when Supabase
 * isn't configured or the call fails — callers always have the static deck.
 * An empty inventory is allowed: the Edge Function then generates purely from
 * preferences (the thin-cuisine/scratch case).
 */
export async function fetchAiMealCards(params: AiFeedParams): Promise<AiFeedResult> {
  if (!isSupabaseConfigured || !supabase) return { cards: [], failed: false };

  const cacheKey = buildFeedCacheKey(params);
  const cached = readCache(cacheKey);
  if (cached) return { cards: cached, failed: false };

  const staticCandidates = params.staticDeck.slice(0, 10).map((entry) => ({
    id: entry.meal.id,
    name: entry.meal.name,
    description: entry.meal.description,
    coreIngredients: entry.mode === 'inventory' ? [...entry.have, ...entry.need] : entry.need,
    missing: entry.mode === 'inventory' ? entry.need : [],
  }));
  const shownNameKeys = params.staticDeck.map((entry) => entry.meal.name);

  try {
    const { data, error } = await supabase.functions.invoke('generate-meal-feed', {
      body: {
        inventory: params.inventory,
        expiringSoon: params.expiringSoon ?? [],
        preferences: {
          effort: params.preferences.effort,
          cookingMethod: params.preferences.cookingMethod,
          vibe: params.preferences.vibe,
          mainIngredient: params.preferences.mainIngredient,
          cuisine: params.preferences.cuisine,
          flexibility: params.preferences.flexibility,
        },
        restrictions: params.preferences.restrictions.filter((restriction) => restriction !== 'No restrictions'),
        mode: params.mode,
        staticCandidates,
        avoidMealNames: [...shownNameKeys.slice(0, 20), ...(params.avoidMealNames ?? [])],
        ingredientContext: describeInventoryForPrompt(params.inventory).slice(0, 25),
        maxMeals: params.maxMeals ?? 4,
      },
    });
    if (error) throw error;
    if (data?.error) throw new Error(String(data.error));
    const avoidKeys = new Set(shownNameKeys.map(normalizeIngredientKey));
    const cards = normalizeAiMealCards(data?.meals, avoidKeys);
    if (cards.length) writeCache(cacheKey, cards);
    return { cards, failed: false };
  } catch (error) {
    console.error('AI meal feed failed; keeping the static deck.', error);
    return { cards: [], failed: true };
  }
}

/**
 * Interleave AI cards into the unseen tail of the deck: never touches cards at or
 * before `currentIndex` (the user may be mid-swipe), inserts one AI card every
 * couple of static cards so smart picks surface early without taking over.
 */
export function mergeAiIntoDeck(deck: DeckMeal[], aiMeals: DeckMeal[], currentIndex: number): DeckMeal[] {
  if (!aiMeals.length) return deck;
  const existingKeys = new Set(deck.map((entry) => normalizeIngredientKey(entry.meal.name)));
  const fresh = aiMeals.filter((entry) => !existingKeys.has(normalizeIngredientKey(entry.meal.name)));
  if (!fresh.length) return deck;

  const boundary = Math.min(Math.max(currentIndex + 1, 0), deck.length);
  const seenPart = deck.slice(0, boundary);
  const tail = deck.slice(boundary);
  const merged: DeckMeal[] = [];
  const queue = [...fresh];
  tail.forEach((entry, index) => {
    if (queue.length && index % 2 === 0) merged.push(queue.shift() as DeckMeal);
    merged.push(entry);
  });
  merged.push(...queue);
  return [...seenPart, ...merged];
}

function cleanString(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function cleanStringList(value: unknown, maxItems: number, maxLength = 60): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .map((item) => item.trim().slice(0, maxLength))
    .slice(0, maxItems);
}
