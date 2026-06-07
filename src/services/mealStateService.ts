import { MealFeedback, MealIdea, ReviewedIngredient } from '../types';
import { templateToMealIdea } from '../data/mealIdeas';
import { SeedMealTemplate } from '../types';
import { categorizeGroceryItem, normalizeIngredientKey, normalizeReceiptItemName, sectionForCategory } from '../utils/groceryLogic';
import { isSupabaseConfigured, supabase } from './supabaseClient';

type MealTemplateRow = {
  id: string;
  slug: string;
  name: string;
  category: string | null;
  description: string | null;
  dinner_lanes: string[] | null;
  cuisine_influence: string[] | null;
  format: string | null;
  time_minutes: number | null;
  effort: string | null;
  servings: number | null;
  tags: string[] | null;
  chef_note: string | null;
  why_it_works: string | null;
  meal_ingredients?: MealIngredientRow[];
};

type MealIngredientRow = {
  raw_name: string;
  canonical_name: string;
  quantity: number | null;
  unit: string | null;
  section: string | null;
  is_optional: boolean | null;
  is_pantry: boolean | null;
  grocery_category: string | null;
  sort_order: number | null;
};

export type RemoteUserState = {
  savedMealIds: string[];
  plannedMealIds: string[];
  cookedMealIds: string[];
  skippedMealIds: string[];
  alreadyHaveNames: string[];
  needToBuyNames: string[];
  usedForMeals: Record<string, string[]>;
};

export async function fetchRemoteMealIdeas(): Promise<MealIdea[] | null> {
  if (!isSupabaseConfigured || !supabase) return null;

  const { data, error } = await supabase
    .from('meal_templates')
    .select(
      `
      id,
      slug,
      name,
      category,
      description,
      dinner_lanes,
      cuisine_influence,
      format,
      time_minutes,
      effort,
      servings,
      tags,
      chef_note,
      why_it_works,
      meal_ingredients (
        raw_name,
        canonical_name,
        quantity,
        unit,
        section,
        is_optional,
        is_pantry,
        grocery_category,
        sort_order
      )
    `,
    )
    .eq('status', 'active')
    .order('name', { ascending: true });

  if (error || !data?.length) return null;
  return (data as MealTemplateRow[]).map(rowToMealIdea);
}

export async function fetchRemoteUserState(userId: string, mealIdeas: MealIdea[]): Promise<RemoteUserState | null> {
  if (!isSupabaseConfigured || !supabase) return null;

  const [{ data: meals, error: mealsError }, { data: userIngredients, error: ingredientsError }, { data: groceryItems, error: groceryError }] =
    await Promise.all([
      supabase.from('user_meals').select('meal_id, status').eq('user_id', userId),
      supabase.from('user_ingredients').select('display_name').eq('user_id', userId),
      supabase.from('grocery_items').select('display_name, used_for_meal_ids, status').eq('user_id', userId).eq('status', 'need'),
    ]);

  if (mealsError || ingredientsError || groceryError) return null;

  const state: RemoteUserState = {
    savedMealIds: [],
    plannedMealIds: [],
    cookedMealIds: [],
    skippedMealIds: [],
    alreadyHaveNames: (userIngredients ?? []).map((item) => item.display_name),
    needToBuyNames: (groceryItems ?? []).map((item) => item.display_name),
    usedForMeals: {},
  };

  (meals ?? []).forEach((meal) => {
    if (meal.status === 'saved') state.savedMealIds.push(meal.meal_id);
    if (meal.status === 'planned') state.plannedMealIds.push(meal.meal_id);
    if (meal.status === 'made') state.cookedMealIds.push(meal.meal_id);
    if (meal.status === 'skipped') state.skippedMealIds.push(meal.meal_id);
  });

  const mealNameById = new Map(mealIdeas.map((meal) => [meal.id, meal.name]));
  (groceryItems ?? []).forEach((item) => {
    const key = normalizeIngredientKey(item.display_name);
    state.usedForMeals[key] = (item.used_for_meal_ids ?? []).map((mealId: string) => mealNameById.get(mealId)).filter(Boolean) as string[];
  });

  return state;
}

export async function upsertUserMealStatus(
  userId: string | undefined,
  meal: MealIdea,
  status: 'saved' | 'planned' | 'made' | 'skipped',
  feedback?: MealFeedback,
): Promise<void> {
  if (!userId || !isSupabaseConfigured || !supabase || !isUuid(meal.id)) return;
  const now = new Date().toISOString();
  const row = {
    user_id: userId,
    meal_id: meal.id,
    status,
    saved_at: status === 'saved' ? now : null,
    planned_at: status === 'planned' ? now : null,
    made_at: status === 'made' ? now : null,
    rating: feedback?.rating ?? null,
    notes: feedback?.chips.join(', ') ?? null,
  };
  const { error } = await supabase.from('user_meals').upsert(row, { onConflict: 'user_id,meal_id,status' });
  if (error) console.warn('Could not sync meal status', error.message);
}

export async function syncReviewedMealIngredients(userId: string | undefined, meal: MealIdea, reviewed: ReviewedIngredient[]): Promise<void> {
  if (!userId || !isSupabaseConfigured || !supabase || !isUuid(meal.id)) return;

  const alreadyHave = reviewed.filter((item) => item.status === 'alreadyHave');
  const needToBuy = reviewed.filter((item) => item.status === 'needToBuy');

  for (const item of alreadyHave) {
    await upsertUserIngredient(userId, item.name, 'ingredient_review');
  }

  for (const item of needToBuy) {
    if (item.optional) continue;
    await upsertGroceryItem(userId, item.name, meal.id);
  }
}

export async function upsertUserIngredient(userId: string | undefined, name: string, source: string): Promise<void> {
  if (!userId || !isSupabaseConfigured || !supabase) return;
  const displayName = normalizeReceiptItemName(name);
  const canonicalName = normalizeIngredientKey(displayName);
  const { error } = await supabase.from('user_ingredients').upsert(
    {
      user_id: userId,
      canonical_name: canonicalName,
      display_name: displayName,
      source,
    },
    { onConflict: 'user_id,canonical_name' },
  );
  if (error) console.warn('Could not sync user ingredient', error.message);
}

export async function upsertGroceryItem(userId: string | undefined, name: string, mealId?: string): Promise<void> {
  if (!userId || !isSupabaseConfigured || !supabase) return;
  const displayName = normalizeReceiptItemName(name);
  const canonicalName = normalizeIngredientKey(displayName);
  const category = categorizeGroceryItem(displayName);
  const existing = await supabase
    .from('grocery_items')
    .select('used_for_meal_ids')
    .eq('user_id', userId)
    .eq('canonical_name', canonicalName)
    .maybeSingle();

  const usedForMealIds = new Set<string>(existing.data?.used_for_meal_ids ?? []);
  if (mealId && isUuid(mealId)) usedForMealIds.add(mealId);

  const { error } = await supabase.from('grocery_items').upsert(
    {
      user_id: userId,
      canonical_name: canonicalName,
      display_name: displayName,
      status: 'need',
      used_for_meal_ids: Array.from(usedForMealIds),
      grocery_category: category,
    },
    { onConflict: 'user_id,canonical_name' },
  );
  if (error) console.warn('Could not sync grocery item', error.message);
}

export async function moveGroceryItemToUserIngredients(userId: string | undefined, name: string, source: string): Promise<void> {
  if (!userId || !isSupabaseConfigured || !supabase) return;
  const displayName = normalizeReceiptItemName(name);
  const canonicalName = normalizeIngredientKey(displayName);
  await upsertUserIngredient(userId, displayName, source);
  const { error } = await supabase.from('grocery_items').update({ status: 'removed' }).eq('user_id', userId).eq('canonical_name', canonicalName);
  if (error) console.warn('Could not move grocery item', error.message);
}

export async function removeUserFoodState(userId: string | undefined, name: string): Promise<void> {
  if (!userId || !isSupabaseConfigured || !supabase) return;
  const displayName = normalizeReceiptItemName(name);
  const canonicalName = normalizeIngredientKey(displayName);
  const [{ error: groceryError }, { error: ingredientError }] = await Promise.all([
    supabase.from('grocery_items').update({ status: 'removed' }).eq('user_id', userId).eq('canonical_name', canonicalName),
    supabase.from('user_ingredients').delete().eq('user_id', userId).eq('canonical_name', canonicalName),
  ]);
  if (groceryError) console.warn('Could not remove grocery item', groceryError.message);
  if (ingredientError) console.warn('Could not remove user ingredient', ingredientError.message);
}

function rowToMealIdea(row: MealTemplateRow): MealIdea {
  const template: SeedMealTemplate = {
    slug: row.slug,
    name: row.name,
    category: row.category ?? 'Dinner',
    description: row.description ?? '',
    dinnerLanes: row.dinner_lanes ?? [],
    cuisineInfluence: row.cuisine_influence ?? [],
    format: row.format ?? 'dinner',
    timeMinutes: row.time_minutes ?? 30,
    effort: row.effort ?? 'Easy',
    servings: row.servings ?? 4,
    tags: row.tags ?? [],
    chefNote: row.chef_note ?? '',
    whyItWorks: row.why_it_works ?? '',
    ingredients: (row.meal_ingredients ?? [])
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map((ingredient) => {
        const groceryCategory = ingredient.grocery_category ?? categorizeGroceryItem(ingredient.raw_name);
        return {
          rawName: ingredient.raw_name,
          canonicalName: ingredient.canonical_name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          section: sectionForCategory(groceryCategory as ReturnType<typeof categorizeGroceryItem>),
          isOptional: Boolean(ingredient.is_optional),
          isPantry: Boolean(ingredient.is_pantry),
          groceryCategory: groceryCategory as ReturnType<typeof categorizeGroceryItem>,
          sortOrder: ingredient.sort_order ?? 0,
        };
      }),
  };
  return templateToMealIdea(template, row.id);
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
