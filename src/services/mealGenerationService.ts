import { mealSuggestions } from '../data/mockData';
import { seedMealIdeas } from '../data/mealIdeas';
import { ChefMode, GroceryList, GroceryMemoryItem, MealIdea, MealSuggestion, OnboardingProfile } from '../types';
import { normalizeIngredientKey } from '../utils/groceryLogic';

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
