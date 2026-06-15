import { mealSuggestions } from '../data/mockData';
import { seedMealIdeas } from '../data/mealIdeas';
import {
  ChefMode,
  DeckMeal,
  GroceryList,
  GroceryMemoryItem,
  MealIdea,
  MealMode,
  MealPreferences,
  MealSuggestion,
  OnboardingProfile,
} from '../types';
import { normalizeIngredientKey } from '../utils/groceryLogic';
import {
  cookingMethodHints,
  cuisineKeywords,
  dairyFalsePositivePhrases,
  landMeatKeywords,
  mainIngredientKeywords,
  paleoKeywords,
  restrictionRules,
  seafoodFishKeywords,
  seafoodShellfishKeywords,
  veganDairyKeywords,
  veganEggKeywords,
  veganMeatKeywords,
  vegetarianProteinKeywords,
  vibeHints,
} from '../data/mealPreferenceOptions';

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
  selectedLanes?: string[];
  skippedMealIds?: string[];
  savedMealIds?: string[];
  plannedMealIds?: string[];
  madeMealIds?: string[];
  likedTags?: string[];
  dislikedTags?: string[];
}): MealIdea[] {
  const knownKeys = new Set(knownIngredients.map(normalizeIngredientKey));
  const selectedLaneSet = new Set(selectedLanes);
  const hiddenMealIds = new Set([...skippedMealIds, ...savedMealIds, ...plannedMealIds, ...madeMealIds]);
  const likedSet = new Set(likedTags);
  const dislikedSet = new Set(dislikedTags);

  return mealIdeas
    .filter((meal) => !hiddenMealIds.has(meal.id))
    .map((meal, index) => {
      const mealIngredientKeys = getCoreMealIngredientKeys(meal);
      const ingredientHits = mealIngredientKeys.filter((key) => knownKeys.has(key)).length;
      const missingCount = Math.max(0, mealIngredientKeys.length - ingredientHits);
      const laneHits = meal.dinnerLanes.filter((lane) => selectedLaneSet.has(lane)).length;
      const likedHits = meal.tags.filter((tag) => likedSet.has(tag)).length;
      const dislikedHits = meal.tags.filter((tag) => dislikedSet.has(tag)).length;
      const hasIngredientMatch = knownKeys.size > 0 && ingredientHits > 0;
      const variety = index % 4;

      return {
        meal,
        score:
          ingredientHits * 28 -
          missingCount * (knownKeys.size > 0 ? 3 : 0) +
          (hasIngredientMatch ? 18 : 0) +
          laneHits * 22 +
          likedHits * 6 -
          dislikedHits * 8 +
          variety,
      };
    })
    .sort((a, b) => b.score - a.score)
    .map(({ meal }) => meal);
}

export function getMealIdeaById(id: string, mealIdeas: MealIdea[] = seedMealIdeas): MealIdea | undefined {
  return mealIdeas.find((meal) => meal.id === id);
}

export type GenerateDeckParams = {
  mode: MealMode;
  preferences: MealPreferences;
  mealIdeas?: MealIdea[];
  inventory?: string[];
  expiringSoon?: string[];
  likedTags?: string[];
  dislikedTags?: string[];
  skippedMealIds?: string[];
  savedMealIds?: string[];
  plannedMealIds?: string[];
  madeMealIds?: string[];
};

export function generateMealDeck({
  mode,
  preferences,
  mealIdeas = seedMealIdeas,
  inventory = [],
  expiringSoon = [],
  likedTags = [],
  dislikedTags = [],
  skippedMealIds = [],
  savedMealIds = [],
  plannedMealIds = [],
  madeMealIds = [],
}: GenerateDeckParams): DeckMeal[] {
  const inventoryKeys = new Set(inventory.map(normalizeIngredientKey));
  const expiringKeys = new Set(expiringSoon.map(normalizeIngredientKey));
  const hiddenMealIds = new Set([...skippedMealIds, ...savedMealIds, ...plannedMealIds, ...madeMealIds]);
  const likedSet = new Set(likedTags);
  const dislikedSet = new Set(dislikedTags);
  const activeRestrictions = preferences.restrictions.filter((restriction) => restriction !== 'No restrictions');

  const scored = mealIdeas
    .filter((meal) => !hiddenMealIds.has(meal.id))
    .filter((meal) => activeRestrictions.every((restriction) => !violatesRestriction(meal, restriction)))
    .filter((meal) => matchesMainIngredient(meal, preferences.mainIngredient))
    .filter((meal) => matchesCuisine(meal, preferences.cuisine))
    .map((meal, index) => {
      const core = getCoreIngredients(meal);
      const have = core.filter((ingredient) => inventoryKeys.has(ingredient.key));
      const missing = core.filter((ingredient) => !inventoryKeys.has(ingredient.key));
      const expiringHits = core.filter((ingredient) => expiringKeys.has(ingredient.key)).length;

      let score = index % 5;
      score += effortScore(preferences.effort, meal.effort);
      score += hintScore(meal, cookingMethodHints[preferences.cookingMethod]);
      score += hintScore(meal, vibeHints[preferences.vibe]);
      score += meal.tags.filter((tag) => likedSet.has(tag)).length * 4;
      score -= meal.tags.filter((tag) => dislikedSet.has(tag)).length * 6;

      if (preferences.mainIngredient === 'Whatever expires first') score += expiringHits * 14;

      if (mode === 'inventory') {
        score += have.length * 12;
        const missingPenalty = preferences.flexibility === "I'm shopping anyway" ? 2 : 6;
        score -= missing.length * missingPenalty;
      }

      return {
        meal,
        score,
        have: have.map((ingredient) => ingredient.name),
        missing: missing.map((ingredient) => ingredient.name),
        missingCount: missing.length,
      };
    })
    .filter((entry) => (mode === 'inventory' ? withinFlexibility(entry.missingCount, preferences.flexibility) : true))
    .sort((a, b) => b.score - a.score);

  return scored.map((entry) => {
    const need = mode === 'inventory' ? entry.missing : getCoreIngredients(entry.meal).map((ingredient) => ingredient.name);
    return {
      meal: entry.meal,
      mode,
      have: mode === 'inventory' ? entry.have : [],
      need,
      pantry: entry.meal.pantryIngredients,
      missingCount: entry.missingCount,
      reason: entry.meal.whyItWorks || entry.meal.description,
    };
  });
}

export function getMealNeededNames(meal: MealIdea, inventory: string[] = []): string[] {
  const inventoryKeys = new Set(inventory.map(normalizeIngredientKey));
  return getCoreIngredients(meal)
    .filter((ingredient) => !inventoryKeys.has(ingredient.key))
    .map((ingredient) => ingredient.name);
}

export function cookingMethodLabel(meal: MealIdea): string {
  const format = meal.format.toLowerCase();
  if (format.includes('sheet pan')) return 'Sheet pan';
  if (format.includes('roast') || format.includes('bake')) return 'Oven';
  if (format.includes('skillet')) return 'Stovetop';
  if (format.includes('stew') || format.includes('braise') || format.includes('rice pot') || format.includes('simmered')) return 'One-pot';
  if (format.includes('curry')) return 'One-pot';
  if (format.includes('pasta') || format.includes('noodle')) return 'Stovetop';
  if (format.includes('taco') || format.includes('wrap') || format.includes('quesadilla')) return 'Stovetop';
  if (format.includes('salad')) return 'No-cook';
  if (format.includes('platter') || format.includes('plate')) return 'Plated';
  if (format.includes('bowl')) return 'Bowl';
  return capitalize(meal.format);
}

export function vibeLabel(meal: MealIdea): string {
  const priority = ['spicy', 'crispy', 'creamy', 'comfort', 'cozy', 'fresh', 'bright', 'herby', 'cheesy', 'healthy', 'rice bowl', 'charred', 'crunchy'];
  const match = priority.find((tag) => meal.tags.includes(tag));
  if (match) return capitalize(match);
  return meal.tags[0] ? capitalize(meal.tags[0]) : 'Weeknight';
}

export function getCoreIngredients(meal: MealIdea): { name: string; key: string }[] {
  const ingredients = meal.structuredIngredients?.length
    ? meal.structuredIngredients
        .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
        .map((ingredient) => ({
          name: ingredient.rawName,
          key: ingredient.canonicalName || normalizeIngredientKey(ingredient.rawName),
        }))
    : meal.ingredients.map((ingredient) => ({ name: ingredient, key: normalizeIngredientKey(ingredient) }));

  const seen = new Set<string>();
  return ingredients.filter((ingredient) => {
    if (seen.has(ingredient.key)) return false;
    seen.add(ingredient.key);
    return true;
  });
}

function withinFlexibility(missingCount: number, flexibility: MealPreferences['flexibility']): boolean {
  if (flexibility === 'Only what I have') return missingCount === 0;
  if (flexibility === 'Missing 1 item is okay') return missingCount <= 1;
  if (flexibility === 'A few missing items are okay') return missingCount <= 3;
  return true;
}

function effortScore(preference: MealPreferences['effort'], mealEffort: string): number {
  const effort = mealEffort.toLowerCase();
  const tier = effort.includes('very easy') ? 'veryEasy' : effort.includes('easy') ? 'easy' : 'medium';
  const table: Record<MealPreferences['effort'], Record<'veryEasy' | 'easy' | 'medium', number>> = {
    'Anything easy': { veryEasy: 8, easy: 8, medium: 0 },
    'Bare minimum': { veryEasy: 12, easy: 4, medium: -8 },
    Easy: { veryEasy: 8, easy: 8, medium: -4 },
    Normal: { veryEasy: 2, easy: 4, medium: 4 },
    'I feel like cooking': { veryEasy: -4, easy: 2, medium: 8 },
  };
  return table[preference][tier];
}

function hintScore(meal: MealIdea, hint?: { tags?: string[]; lanes?: string[]; formats?: string[]; ingredients?: string[] }): number {
  if (!hint) return 0;
  let score = 0;
  const format = meal.format.toLowerCase();
  if (hint.tags) score += meal.tags.filter((tag) => hint.tags!.includes(tag)).length * 6;
  if (hint.lanes) score += meal.dinnerLanes.filter((lane) => hint.lanes!.includes(lane)).length * 6;
  if (hint.formats) score += hint.formats.some((value) => format.includes(value)) ? 6 : 0;
  if (hint.ingredients) score += mealHasIngredient(meal, hint.ingredients) ? 6 : 0;
  return score;
}

function ingredientHaystacks(meal: MealIdea): string[] {
  // Some seed meals name the protein only in the title or description (for
  // example "Carnitas tacos" / "Crispy pork tacos"), so fold that text in to
  // keep restriction filtering conservative.
  const meta = `${meal.name} ${meal.description} ${meal.whyItWorks}`.toLowerCase();
  if (meal.structuredIngredients?.length) {
    return [...meal.structuredIngredients.map((ingredient) => `${ingredient.rawName} ${ingredient.canonicalName}`.toLowerCase()), meta];
  }
  return [...meal.ingredients, ...meal.pantryIngredients, ...meal.optionalIngredients].map((name) => name.toLowerCase()).concat(meta);
}

function coreHaystacks(meal: MealIdea): string[] {
  if (meal.structuredIngredients?.length) {
    return meal.structuredIngredients
      .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
      .map((ingredient) => `${ingredient.rawName} ${ingredient.canonicalName}`.toLowerCase());
  }
  return meal.ingredients.map((name) => name.toLowerCase());
}

function matchKeyword(haystack: string, keyword: string): boolean {
  if (keyword.includes(' ')) return haystack.includes(keyword);
  return new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(haystack);
}

function haystacksMatch(haystacks: string[], keywords: string[]): boolean {
  return haystacks.some((haystack) => keywords.some((keyword) => matchKeyword(haystack, keyword)));
}

function mealHasIngredient(meal: MealIdea, keywords: string[]): boolean {
  return haystacksMatch(ingredientHaystacks(meal), keywords);
}

function hasDairy(meal: MealIdea): boolean {
  const cleaned = ingredientHaystacks(meal).map((haystack) =>
    dairyFalsePositivePhrases.reduce((value, phrase) => value.split(phrase).join(' '), haystack),
  );
  return haystacksMatch(cleaned, veganDairyKeywords);
}

function proteinSectionHaystacks(meal: MealIdea): string[] {
  if (!meal.structuredIngredients?.length) return [];
  return meal.structuredIngredients
    .filter((ingredient) => !ingredient.isOptional && (ingredient.section === 'Meat/Protein' || ingredient.groceryCategory === 'Protein'))
    .map((ingredient) => `${ingredient.rawName} ${ingredient.canonicalName}`.toLowerCase());
}

// Any ingredient in the Protein aisle that is not an explicitly vegetarian
// protein counts as animal protein, which catches specialty cuts the keyword
// lists may not name.
function hasAnimalProtein(meal: MealIdea): boolean {
  if (mealHasIngredient(meal, veganMeatKeywords)) return true;
  return proteinSectionHaystacks(meal).some((haystack) => !vegetarianProteinKeywords.some((keyword) => matchKeyword(haystack, keyword)));
}

function hasLandMeat(meal: MealIdea): boolean {
  if (mealHasIngredient(meal, landMeatKeywords)) return true;
  return proteinSectionHaystacks(meal).some(
    (haystack) =>
      !vegetarianProteinKeywords.some((keyword) => matchKeyword(haystack, keyword)) &&
      !seafoodFishKeywords.some((keyword) => matchKeyword(haystack, keyword)) &&
      !seafoodShellfishKeywords.some((keyword) => matchKeyword(haystack, keyword)),
  );
}

function violatesRestriction(meal: MealIdea, restriction: string): boolean {
  const rule = restrictionRules[restriction];
  if (!rule) return false;
  if (rule.kind === 'dairy') return hasDairy(meal);
  if (rule.kind === 'vegan') {
    return hasAnimalProtein(meal) || hasDairy(meal) || mealHasIngredient(meal, veganEggKeywords) || mealHasIngredient(meal, ['honey']);
  }
  if (rule.kind === 'paleo') return mealHasIngredient(meal, paleoKeywords) || hasDairy(meal);
  if (restriction === 'Vegetarian') return hasAnimalProtein(meal);
  if (restriction === 'Pescatarian') return hasLandMeat(meal);
  return mealHasIngredient(meal, rule.keywords);
}

function matchesMainIngredient(meal: MealIdea, mainIngredient: MealPreferences['mainIngredient']): boolean {
  if (mainIngredient === 'Use what makes sense' || mainIngredient === 'Whatever expires first') return true;
  if (mainIngredient === 'Vegetables') return !haystacksMatch(coreHaystacks(meal), veganMeatKeywords);
  const keywords = mainIngredientKeywords[mainIngredient];
  if (!keywords) return true;
  return haystacksMatch(coreHaystacks(meal), keywords);
}

function matchesCuisine(meal: MealIdea, cuisine: MealPreferences['cuisine']): boolean {
  if (cuisine === 'Any cuisine') return true;
  const keywords = cuisineKeywords[cuisine];
  if (!keywords) return true;
  const haystack = meal.cuisineInfluence.toLowerCase();
  return keywords.some((keyword) => haystack.includes(keyword));
}

function capitalize(value: string): string {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function getCoreMealIngredientKeys(meal: MealIdea): string[] {
  const keys = meal.structuredIngredients?.length
    ? meal.structuredIngredients
        .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
        .map((ingredient) => ingredient.canonicalName || normalizeIngredientKey(ingredient.rawName))
    : meal.ingredients.map(normalizeIngredientKey);

  return Array.from(new Set(keys));
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
