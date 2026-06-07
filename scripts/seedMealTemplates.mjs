import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const source = fs.readFileSync(new URL('../src/data/seedMealTemplates.ts', import.meta.url), 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;

const moduleObject = { exports: {} };
vm.runInNewContext(transpiled, {
  module: moduleObject,
  exports: moduleObject.exports,
  require: () => ({}),
});

const seedMealTemplates = moduleObject.exports.seedMealTemplates;
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
    section: ingredient.section,
    is_optional: ingredient.isOptional,
    is_pantry: ingredient.isPantry,
    grocery_category: ingredient.groceryCategory,
    sort_order: ingredient.sortOrder,
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
  console.log(`Seeded ${template.slug}`);
}

console.log(`Seeded ${seedMealTemplates.length} meal templates.`);
