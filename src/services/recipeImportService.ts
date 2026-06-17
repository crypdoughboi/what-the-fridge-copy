import { ImportedRecipe, ImportedRecipeIngredient, IngredientReviewStatus } from '../types';
import { categorizeGroceryItem, normalizeReceiptItemName, sectionForCategory } from '../utils/groceryLogic';
import { isSupabaseConfigured, supabase } from './supabaseClient';

const PANTRY_STAPLES = [
  'salt',
  'pepper',
  'black pepper',
  'olive oil',
  'oil',
  'vegetable oil',
  'water',
  'sugar',
  'flour',
  'butter',
  'garlic powder',
  'onion powder',
  'baking soda',
  'baking powder',
];

/**
 * Extract a recipe from a screenshot or photo.
 *
 * Real extraction runs in the `import-recipe` Supabase Edge Function, which calls
 * Claude vision with the API key kept server-side and returns the recipe title,
 * ingredients, and steps via structured outputs. The client maps each ingredient
 * through the app's own normalization/categorization so it matches the rest of the
 * app. Falls back to a sample recipe when Supabase isn't configured, no image is
 * provided, or the call fails, so the flow still works in local/demo mode.
 */
export async function importRecipeFromImage(file?: File | null): Promise<ImportedRecipe> {
  if (!file || !isSupabaseConfigured || !supabase) {
    await wait(1300);
    return sampleImportedRecipe;
  }

  try {
    const image = await fileToBase64(file);
    const { data, error } = await supabase.functions.invoke('import-recipe', {
      body: { image, mediaType: file.type || 'image/jpeg' },
    });
    if (error) throw error;

    const recipe = normalizeRecipe(data);
    if (recipe.ingredients.length === 0) return sampleImportedRecipe;
    return recipe;
  } catch (error) {
    console.error('Recipe import failed; using sample data.', error);
    return sampleImportedRecipe;
  }
}

export function buildRecipeIngredient(
  raw: { rawText?: string; name?: string; displayQuantity?: string; optional?: boolean; pantryStaple?: boolean },
  index: number,
): ImportedRecipeIngredient | null {
  const rawText = typeof raw.rawText === 'string' ? raw.rawText.trim() : '';
  const sourceName = typeof raw.name === 'string' && raw.name.trim() ? raw.name : rawText;
  const name = normalizeReceiptItemName(sourceName);
  if (!name) return null;

  const category = categorizeGroceryItem(name);
  const pantryStaple = raw.pantryStaple ?? PANTRY_STAPLES.includes(name.toLowerCase());
  const optional = raw.optional ?? false;
  const status: IngredientReviewStatus = optional ? 'optional' : pantryStaple ? 'alreadyHave' : 'needToBuy';

  return {
    id: `recipe-ing-${index}-${name.replace(/[^a-z0-9]+/gi, '-')}`,
    rawText: rawText || sourceName,
    name,
    displayQuantity: typeof raw.displayQuantity === 'string' && raw.displayQuantity.trim() ? raw.displayQuantity.trim() : undefined,
    category,
    section: sectionForCategory(category),
    status,
    optional,
    pantryStaple,
  };
}

function normalizeRecipe(data: unknown): ImportedRecipe {
  const record = (data && typeof data === 'object' ? data : {}) as Record<string, unknown>;

  const ingredients = Array.isArray(record.ingredients)
    ? (record.ingredients
        .map((entry, index) => (entry && typeof entry === 'object' ? buildRecipeIngredient(entry as Record<string, unknown>, index) : null))
        .filter(Boolean) as ImportedRecipeIngredient[])
    : [];

  const steps = Array.isArray(record.steps)
    ? record.steps.flatMap((step) => (typeof step === 'string' && step.trim() ? [step.trim()] : []))
    : [];

  return {
    title: typeof record.title === 'string' && record.title.trim() ? record.title.trim() : 'Imported recipe',
    description: typeof record.description === 'string' ? record.description.trim() : '',
    servings: typeof record.servings === 'number' && record.servings > 0 ? Math.round(record.servings) : 0,
    totalTimeMinutes: typeof record.totalTimeMinutes === 'number' && record.totalTimeMinutes > 0 ? Math.round(record.totalTimeMinutes) : 0,
    ingredients,
    steps,
  };
}

// Fallback used when Supabase/vision isn't available so the flow still demos end to end.
export const sampleImportedRecipe: ImportedRecipe = {
  title: 'Garlic Butter Chicken with Rice',
  description: 'A fast one-pan weeknight dinner: seared chicken thighs in a garlic-lemon butter sauce over jasmine rice.',
  servings: 4,
  totalTimeMinutes: 35,
  ingredients: [
    { rawText: '1.5 lb boneless chicken thighs', name: 'chicken thighs', displayQuantity: '1.5 lb', optional: false, pantryStaple: false },
    { rawText: '2 cups jasmine rice', name: 'jasmine rice', displayQuantity: '2 cups', optional: false, pantryStaple: false },
    { rawText: '4 cloves garlic, minced', name: 'garlic', displayQuantity: '4 cloves', optional: false, pantryStaple: false },
    { rawText: '1 lemon, juiced', name: 'lemon', displayQuantity: '1', optional: false, pantryStaple: false },
    { rawText: '3 tbsp butter', name: 'butter', displayQuantity: '3 tbsp', optional: false, pantryStaple: true },
    { rawText: '2 cups baby spinach', name: 'spinach', displayQuantity: '2 cups', optional: false, pantryStaple: false },
    { rawText: 'Salt and pepper to taste', name: 'salt', optional: false, pantryStaple: true },
    { rawText: '2 tbsp olive oil', name: 'olive oil', displayQuantity: '2 tbsp', optional: false, pantryStaple: true },
    { rawText: 'Fresh parsley for garnish', name: 'parsley', optional: true, pantryStaple: false },
  ]
    .map((entry, index) => buildRecipeIngredient(entry, index))
    .filter(Boolean) as ImportedRecipeIngredient[],
  steps: [
    'Cook jasmine rice according to package directions.',
    'Season chicken thighs with salt and pepper. Sear in olive oil over medium-high heat, about 5 minutes per side.',
    'Add garlic and butter to the pan and cook until fragrant, about 1 minute.',
    'Stir in lemon juice and spinach, tossing until the spinach wilts.',
    'Serve the chicken and sauce over rice, garnished with parsley.',
  ],
  sourceNote: 'Sample recipe (demo mode). Connect Supabase + ANTHROPIC_API_KEY to read your own recipe photos.',
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const comma = result.indexOf(',');
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
