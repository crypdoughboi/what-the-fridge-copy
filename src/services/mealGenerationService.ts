import { mealSuggestions } from '../data/mockData';
import { ChefMode, GroceryList, GroceryMemoryItem, MealSuggestion, OnboardingProfile } from '../types';

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

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
