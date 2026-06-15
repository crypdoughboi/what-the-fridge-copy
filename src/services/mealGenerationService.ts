import { mealSuggestions } from '../data/mockData';
import { seedMealIdeas } from '../data/mealIdeas';
import {
  ChefMode,
  DinnerConstraint,
  GroceryList,
  GroceryMemoryItem,
  KitchenInventoryItem,
  MealIdea,
  MealRankDetails,
  MealSuggestion,
  OnboardingProfile,
  SubstitutionMatch,
} from '../types';
import { isInventoryAvailable, normalizeIngredientKey } from '../utils/groceryLogic';
import { findSubstitutionMatch } from '../utils/ingredientSubstitutions';

export async function generateMealsFromGroceryMemory(
  _memory: GroceryMemoryItem[],
  _list: GroceryList,
  mode: ChefMode,
  _profile: OnboardingProfile,
): Promise<MealSuggestion[]> {
  // Future integration points:
  // - AI model with chef rules, not generic recipe filler.
  // - User preference profile and dietary constraints.
  // - Household purchase and list history, recent receipt data, and fridge scan data.
  // - Structured output with ingredients, steps, chef note, and missing items.
  await wait(500);
  return getMealsForMode(mode);
}

export function getMealsForMode(mode: ChefMode): MealSuggestion[] {
  const exact = mealSuggestions.filter((meal) => meal.mode === mode).sort((a, b) => b.priority - a.priority);
  const fallback = mealSuggestions.filter((meal) => meal.mode !== mode).sort((a, b) => b.priority - a.priority);
  return [...exact, ...fallback].slice(0, 5);
}

export function getRankedMealIdeas({
  mealIdeas = seedMealIdeas,
  knownIngredients,
  kitchenItems = [],
  dinnerConstraint,
  selectedLanes = [],
  skippedMealIds = [],
  savedMealIds = [],
  plannedMealIds = [],
  madeMealIds = [],
  likedTags = [],
  dislikedTags = [],
}: {
  mealIdeas?: MealIdea[];
  knownIngredients: string[];
  kitchenItems?: KitchenInventoryItem[];
  dinnerConstraint?: DinnerConstraint;
  selectedLanes?: string[];
  skippedMealIds?: string[];
  savedMealIds?: string[];
  plannedMealIds?: string[];
  madeMealIds?: string[];
  likedTags?: string[];
  dislikedTags?: string[];
}): MealIdea[] {
  const selectedLaneSet = new Set(selectedLanes);
  const hiddenMealIds = new Set([...savedMealIds, ...plannedMealIds, ...madeMealIds]);
  const likedSet = new Set(likedTags);
  const dislikedSet = new Set(dislikedTags);

  return mealIdeas
    .filter((meal) => !hiddenMealIds.has(meal.id))
    .map((meal, index) => {
      const details = getMealRankDetails(meal, {
        knownIngredients,
        kitchenItems,
        dinnerConstraint,
        likedTags,
        dislikedTags,
      });
      const laneHits = meal.dinnerLanes.filter((lane) => selectedLaneSet.has(lane)).length;
      const skipPenalty = skippedMealIds.includes(meal.id) ? 16 : 0;
      const variety = index % 4;

      return {
        meal,
        score: details.score + laneHits * 22 + likedSet.size * 0 - dislikedSet.size * 0 - skipPenalty + variety,
      };
    })
    .sort((a, b) => b.score - a.score)
    .map(({ meal }) => meal);
}

export function getMealIdeaById(id: string, mealIdeas: MealIdea[] = seedMealIdeas): MealIdea | undefined {
  return mealIdeas.find((meal) => meal.id === id);
}

export function parseDinnerConstraint(text: string): DinnerConstraint {
  const rawText = text.trim();
  const lower = rawText.toLowerCase();
  const includeKeys = new Set<string>();
  const excludeKeys = new Set<string>();
  const cookingMethods = new Set<string>();
  const vibes = new Set<string>();
  const underMatch = lower.match(/\b(?:under|less than|within)\s+(\d{2,3})\s*(?:min|minute|minutes)?/);
  const directMinuteMatch = lower.match(/\b(\d{2,3})\s*(?:min|minute|minutes)\b/);
  const maxTimeMinutes = Number(underMatch?.[1] ?? directMinuteMatch?.[1]) || undefined;

  collectIngredientMentions(lower).forEach((key) => includeKeys.add(key));
  collectNoMentions(lower).forEach((key) => excludeKeys.add(key));

  if (lower.includes('no dairy') || lower.includes('dairy free') || lower.includes('dairy-free')) {
    ['milk', 'greek yogurt', 'yogurt', 'sour cream', 'cream', 'cheese', 'feta', 'butter'].forEach((key) => excludeKeys.add(key));
  }

  if (lower.includes('air fryer')) cookingMethods.add('air fryer');
  if (lower.includes('sheet pan') || lower.includes('sheet-pan')) cookingMethods.add('sheet pan');
  if (lower.includes('one pan') || lower.includes('one-pan')) cookingMethods.add('one pan');
  if (lower.includes('pasta')) vibes.add('pasta');
  if (lower.includes('date night')) vibes.add('date-night');
  if (lower.includes('cheap') || lower.includes('budget')) vibes.add('cheap');
  if (lower.includes('healthy')) vibes.add('healthy');
  if (lower.includes('high protein')) vibes.add('high protein');
  if (lower.includes('comfort')) vibes.add('comfort');

  return {
    rawText,
    includeKeys: Array.from(includeKeys),
    excludeKeys: Array.from(excludeKeys),
    maxTimeMinutes,
    effort: lower.includes('easy') || lower.includes('low effort') || lower.includes('quick') ? 'Easy' : undefined,
    cookingMethods: Array.from(cookingMethods),
    vibes: Array.from(vibes),
  };
}

export function getMealRankDetails(
  meal: MealIdea,
  {
    knownIngredients,
    kitchenItems = [],
    dinnerConstraint,
    likedTags = [],
    dislikedTags = [],
  }: {
    knownIngredients: string[];
    kitchenItems?: KitchenInventoryItem[];
    dinnerConstraint?: DinnerConstraint;
    likedTags?: string[];
    dislikedTags?: string[];
  },
): MealRankDetails {
  const knownKeys = new Set(knownIngredients.map(normalizeIngredientKey));
  kitchenItems.filter((item) => isInventoryAvailable(item.state)).forEach((item) => knownKeys.add(item.key));
  const useSoonKeys = new Set(kitchenItems.filter((item) => item.state === 'use_soon').map((item) => item.key));
  const coreIngredients = getCoreMealIngredients(meal);
  const ownedIngredientNames: string[] = [];
  const missingIngredientNames: string[] = [];
  const useSoonIngredientNames: string[] = [];
  const substitutionMatches: SubstitutionMatch[] = [];

  coreIngredients.forEach((ingredient) => {
    const key = ingredient.key;
    if (knownKeys.has(key)) {
      ownedIngredientNames.push(ingredient.name);
      if (useSoonKeys.has(key)) useSoonIngredientNames.push(ingredient.name);
      return;
    }

    const substitution = findSubstitutionMatch({ ingredientName: ingredient.name, ingredientKey: key, ownedKeys: knownKeys });
    if (substitution) {
      substitutionMatches.push(substitution);
      return;
    }

    missingIngredientNames.push(ingredient.name);
  });

  const likedHits = meal.tags.filter((tag) => likedTags.includes(tag)).length;
  const dislikedHits = meal.tags.filter((tag) => dislikedTags.includes(tag)).length;
  const rankReasons: string[] = [];
  let score =
    ownedIngredientNames.length * 28 +
    useSoonIngredientNames.length * 36 +
    substitutionMatches.length * 17 -
    missingIngredientNames.length * (knownKeys.size > 0 ? 9 : 2) +
    Math.max(0, 6 - missingIngredientNames.length) * 5 +
    likedHits * 7 -
    dislikedHits * 10;

  if (ownedIngredientNames.length) rankReasons.push(`${ownedIngredientNames.length} ingredient${ownedIngredientNames.length === 1 ? '' : 's'} already here`);
  if (useSoonIngredientNames.length) rankReasons.push(`uses ${useSoonIngredientNames.slice(0, 2).join(', ')} soon`);
  if (substitutionMatches.length) rankReasons.push('works with a swap');
  if (missingIngredientNames.length <= 2) rankReasons.push('short shop');

  if (dinnerConstraint?.rawText) {
    const constraintScore = scoreDinnerConstraint(meal, dinnerConstraint, coreIngredients.map((ingredient) => ingredient.key));
    score += constraintScore.score;
    rankReasons.push(...constraintScore.reasons);
  }

  return {
    score,
    ownedIngredientNames,
    missingIngredientNames,
    useSoonIngredientNames,
    substitutionMatches,
    rankReasons: Array.from(new Set(rankReasons)).slice(0, 4),
  };
}

function scoreDinnerConstraint(meal: MealIdea, constraint: DinnerConstraint, mealKeys: string[]): { score: number; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];
  const searchable = `${meal.name} ${meal.description} ${meal.tags.join(' ')} ${meal.dinnerLanes.join(' ')} ${meal.format} ${meal.equipment.join(' ')}`.toLowerCase();

  if (constraint.excludeKeys.some((key) => mealKeys.includes(key) || searchable.includes(key))) return { score: -999, reasons: ['avoids excluded item'] };

  constraint.includeKeys.forEach((key) => {
    if (mealKeys.includes(key) || searchable.includes(key)) {
      score += 42;
      reasons.push(`uses ${key}`);
    } else {
      score -= 18;
    }
  });

  if (constraint.maxTimeMinutes) {
    if (meal.timeMinutes <= constraint.maxTimeMinutes) {
      score += 28;
      reasons.push(`${meal.timeMinutes} minutes`);
    } else {
      score -= Math.min(60, (meal.timeMinutes - constraint.maxTimeMinutes) * 3);
    }
  }

  if (constraint.effort && meal.effort === constraint.effort) score += 14;

  constraint.cookingMethods.forEach((method) => {
    if (searchable.includes(method)) {
      score += 30;
      reasons.push(method);
    } else {
      score -= 10;
    }
  });

  constraint.vibes.forEach((vibe) => {
    if (searchable.includes(vibe.replace('-', ' ')) || searchable.includes(vibe)) {
      score += 24;
      reasons.push(vibe.replace('-', ' '));
    }
  });

  return { score, reasons };
}

function collectIngredientMentions(lower: string): string[] {
  const matches = lower.match(/\b(?:use|using|with)\s+([a-z][a-z\s]+?)(?:,| under| no | for |$)/g) ?? [];
  const loose = [
    'chicken',
    'broccoli',
    'rice',
    'pasta',
    'beans',
    'spinach',
    'kale',
    'tortillas',
    'pita',
    'salmon',
    'shrimp',
    'beef',
    'turkey',
  ].filter((word) => lower.includes(word));

  return [
    ...matches.map((match) => match.replace(/\b(use|using|with)\b/g, '').replace(/[,]/g, '').trim()),
    ...loose,
  ].map(normalizeIngredientKey);
}

function collectNoMentions(lower: string): string[] {
  const matches = lower.match(/\bno\s+([a-z][a-z\s]+?)(?:,| under| with | for |$)/g) ?? [];
  return matches.map((match) => normalizeIngredientKey(match.replace(/\bno\b/g, '').replace(/[,]/g, '').trim()));
}

function getCoreMealIngredients(meal: MealIdea): { name: string; key: string }[] {
  const ingredients = meal.structuredIngredients?.length
    ? meal.structuredIngredients
        .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
        .map((ingredient) => ({
          name: ingredient.rawName,
          key: ingredient.canonicalName || normalizeIngredientKey(ingredient.rawName),
        }))
    : meal.ingredients.map((ingredient) => ({
        name: ingredient,
        key: normalizeIngredientKey(ingredient),
      }));

  const seen = new Set<string>();
  return ingredients.filter((ingredient) => {
    if (seen.has(ingredient.key)) return false;
    seen.add(ingredient.key);
    return true;
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
