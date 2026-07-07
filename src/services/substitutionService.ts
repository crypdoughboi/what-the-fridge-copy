import { SubstitutionRequest, SubstitutionSuggestion, SubstitutionType } from '../types';
import { normalizeIngredientKey } from '../utils/groceryLogic';
import { deterministicCoverageIsStrong, getDeterministicSubstitutions, sortSubstitutions } from '../utils/substitutionLogic';
import { isSupabaseConfigured, supabase } from './supabaseClient';

// Smart substitutions: "store is out" or "use what I have instead".
// The deterministic table answers the obvious swaps instantly and for free; the
// `suggest-substitutions` Edge Function (Claude) only runs when coverage is thin
// or the context needs judgment (baking, unusual ingredients).

const SUBSTITUTION_TYPES: SubstitutionType[] = ['direct', 'close', 'stretch', 'not_recommended'];

export async function getSubstitutions(request: SubstitutionRequest, options: { forceAi?: boolean } = {}): Promise<SubstitutionSuggestion[]> {
  const deterministic = getDeterministicSubstitutions(request);
  const needsAi = options.forceAi || !deterministicCoverageIsStrong(deterministic, request);
  if (!needsAi || !isSupabaseConfigured || !supabase) return deterministic;

  try {
    const { data, error } = await supabase.functions.invoke('suggest-substitutions', {
      body: {
        ingredient: request.ingredient,
        recipeContext: request.recipeContext ?? '',
        otherIngredients: request.otherIngredients ?? [],
        inventory: request.inventory,
        restrictions: request.restrictions,
        useCase: request.useCase,
      },
    });
    if (error) throw error;
    const aiSuggestions = normalizeAiSubstitutions(data?.substitutions, request);
    return mergeSubstitutions(deterministic, aiSuggestions);
  } catch (error) {
    console.error('AI substitutions failed; using deterministic suggestions.', error);
    return deterministic;
  }
}

/**
 * Validate raw Edge Function output. `userHasIt` is always recomputed against the
 * real inventory — the model's claim is never trusted.
 */
export function normalizeAiSubstitutions(raw: unknown, request: SubstitutionRequest): SubstitutionSuggestion[] {
  if (!Array.isArray(raw)) return [];
  const inventoryKeys = new Set(request.inventory.map(normalizeIngredientKey));
  const originalKey = normalizeIngredientKey(request.ingredient);
  return raw.flatMap((entry): SubstitutionSuggestion[] => {
    if (!entry || typeof entry !== 'object') return [];
    const record = entry as Record<string, unknown>;
    const substitute = typeof record.substitute === 'string' ? record.substitute.trim().slice(0, 80) : '';
    if (!substitute || normalizeIngredientKey(substitute) === originalKey) return [];
    const type = SUBSTITUTION_TYPES.includes(record.type as SubstitutionType) ? (record.type as SubstitutionType) : 'stretch';
    return [
      {
        original: request.ingredient,
        substitute,
        type,
        ratio: typeof record.ratio === 'string' ? record.ratio.trim().slice(0, 120) : 'Adjust to taste',
        explanation: typeof record.explanation === 'string' ? record.explanation.trim().slice(0, 240) : '',
        recipeImpact: typeof record.recipeImpact === 'string' ? record.recipeImpact.trim().slice(0, 240) : '',
        confidence: typeof record.confidence === 'number' ? Math.max(0, Math.min(1, record.confidence)) : 0.5,
        warnings: Array.isArray(record.warnings)
          ? record.warnings.filter((warning): warning is string => typeof warning === 'string').map((warning) => warning.trim().slice(0, 160))
          : [],
        shouldBuyOriginal: Boolean(record.shouldBuyOriginal),
        userHasIt: inventoryKeys.has(normalizeIngredientKey(substitute)),
        source: 'ai',
      },
    ];
  });
}

/** Dedupe by substitute; the deterministic entry wins a collision (curated beats generated). */
export function mergeSubstitutions(deterministic: SubstitutionSuggestion[], ai: SubstitutionSuggestion[]): SubstitutionSuggestion[] {
  const byKey = new Map<string, SubstitutionSuggestion>();
  [...deterministic, ...ai].forEach((suggestion) => {
    const key = normalizeIngredientKey(suggestion.substitute);
    if (!byKey.has(key)) byKey.set(key, suggestion);
  });
  return sortSubstitutions(Array.from(byKey.values())).slice(0, 6);
}
