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
  madeMealIds = [],
  likedTags = [],
  dislikedTags = [],
}: {
  mealIdeas?: MealIdea[];
  knownIngredients: string[];
  selectedLanes?: string[];
  skippedMealIds?: string[];
  savedMealIds?: string[];
  madeMealIds?: string[];
  likedTags?: string[];
  dislikedTags?: string[];
}): MealIdea[] {
  const knownKeys = new Set(knownIngredients.map(normalizeIngredientKey));
  const selectedLaneSet = new Set(selectedLanes);
  const skippedSet = new Set(skippedMealIds);
  const savedSet = new Set(savedMealIds);
  const madeSet = new Set(madeMealIds);
  const likedSet = new Set(likedTags);
  const dislikedSet = new Set(dislikedTags);

  return mealIdeas
    .filter((meal) => !skippedSet.has(meal.id))
    .map((meal, index) => {
      const ingredientHits = meal.ingredients.filter((ingredient) => knownKeys.has(normalizeIngredientKey(ingredient))).length;
      const missingCount = meal.ingredients.length - ingredientHits;
      const laneHits = meal.dinnerLanes.filter((lane) => selectedLaneSet.has(lane)).length;
      const likedHits = meal.tags.filter((tag) => likedSet.has(tag)).length;
      const dislikedHits = meal.tags.filter((tag) => dislikedSet.has(tag)).length;
      const variety = index % 4;

      return {
        meal,
        score:
          ingredientHits * 18 -
          missingCount * (knownKeys.size > 0 ? 2 : 0) +
          laneHits * 22 +
          likedHits * 6 -
          dislikedHits * 8 +
          (savedSet.has(meal.id) ? 4 : 0) +
          (madeSet.has(meal.id) ? 2 : 0) +
          variety,
      };
    })
    .sort((a, b) => b.score - a.score)
    .map(({ meal }) => meal);
}

export function getMealIdeaById(id: string, mealIdeas: MealIdea[] = seedMealIdeas): MealIdea | undefined {
  return mealIdeas.find((meal) => meal.id === id);
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
