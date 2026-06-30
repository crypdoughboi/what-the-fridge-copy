import { createClient } from '@supabase/supabase-js';
import { loadAllTemplates } from './lib/mealTemplates.mjs';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

// The original curated 100 plus the growing expansion set.
const seedMealTemplates = loadAllTemplates();
if (!Array.isArray(seedMealTemplates) || seedMealTemplates.length === 0) {
  console.error('No seed meal templates found.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

function templateRow(template) {
  return {
    slug: template.slug,
    name: template.name,
    category: template.category,
    description: template.description,
    dinner_lanes: template.dinnerLanes,
    cuisine_influence: template.cuisineInfluence,
    format: template.format,
    time_minutes: template.timeMinutes,
    effort: template.effort,
    servings: template.servings,
    tags: template.tags,
    chef_note: template.chefNote,
    why_it_works: template.whyItWorks,
    status: 'active',
  };
}

function ingredientRow(mealId, ingredient) {
  return {
    meal_id: mealId,
    raw_name: ingredient.rawName,
    canonical_name: ingredient.canonicalName,
    quantity: ingredient.quantity,
    unit: ingredient.unit,
    display_quantity: ingredient.displayQuantity ?? null,
    prep: ingredient.prep ?? null,
    importance: ingredient.importance ?? null,
    section: ingredient.section,
    is_optional: ingredient.isOptional,
    is_pantry: ingredient.isPantry,
    grocery_category: ingredient.groceryCategory,
    sort_order: ingredient.sortOrder,
  };
}

function recipeDetailRow(mealId, template) {
  return {
    meal_id: mealId,
    servings: template.servings ?? 4,
    active_time_minutes: template.recipe?.activeTimeMinutes ?? template.timeMinutes,
    total_time_minutes: template.recipe?.totalTimeMinutes ?? template.timeMinutes,
    equipment: template.equipment ?? [],
    prep_note: null,
    chef_note: template.chefNote ?? null,
    why_it_works: template.whyItWorks ?? null,
    leftovers_note: template.leftoversNote ?? null,
  };
}

function recipeStepRow(mealId, step) {
  return {
    meal_id: mealId,
    step_number: step.stepNumber,
    title: step.title,
    body: step.body,
    time_minutes: step.timeMinutes ?? null,
    temperature: step.temperature ?? null,
    visual_cue: step.visualCue ?? null,
    component: step.component ?? null,
  };
}

for (const template of seedMealTemplates) {
  const { data: meal, error: mealError } = await supabase
    .from('meal_templates')
    .upsert(templateRow(template), { onConflict: 'slug' })
    .select('id, slug')
    .single();

  if (mealError) throw mealError;

  const rows = template.ingredients.map((ingredient) => ingredientRow(meal.id, ingredient));
  const { error: ingredientError } = await supabase
    .from('meal_ingredients')
    .upsert(rows, { onConflict: 'meal_id,canonical_name,section' });

  if (ingredientError) throw ingredientError;

  const { error: detailError } = await supabase
    .from('meal_recipe_details')
    .upsert(recipeDetailRow(meal.id, template), { onConflict: 'meal_id' });

  if (detailError) throw detailError;

  const stepRows = (template.recipe?.steps ?? []).map((step) => recipeStepRow(meal.id, step));
  const { error: stepsError } = stepRows.length
    ? await supabase.from('meal_recipe_steps').upsert(stepRows, { onConflict: 'meal_id,step_number' })
    : { error: null };

  if (stepsError) throw stepsError;
  console.log(`Seeded ${template.slug}`);
}

console.log(`Seeded ${seedMealTemplates.length} meal templates.`);
