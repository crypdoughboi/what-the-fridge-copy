// AI meal-library generator (offline content pipeline).
//
// Generates new, original recipe templates with Claude, validates and dedupes
// them against the existing library, and appends the survivors to
// src/data/expansionMealTemplates.ts. Run it locally; the app and the Supabase
// seeder pick the new recipes up automatically.
//
// Usage:
//   ANTHROPIC_API_KEY=sk-ant-... node scripts/generateMealTemplates.mjs --count 40
// Options:
//   --count N    how many NEW valid recipes to add (default 24)
//   --batch N    recipes requested per API call (default 8)
//   --dry-run    generate + validate but do not write the file
// Env:
//   MODEL        override the model id (default claude-sonnet-5)
//
// No new npm dependency: talks to the Anthropic Messages API over fetch and uses
// a forced tool call for structured output.
import fs from 'node:fs';
import {
  loadAllTemplates,
  loadExpansionTemplates,
  validateTemplate,
  templateKey,
  slugSet,
  expansionFilePath,
  enums,
} from './lib/mealTemplates.mjs';

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('Missing ANTHROPIC_API_KEY.');
  process.exit(1);
}

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const target = Number(getArg('--count', '24'));
const batchSize = Number(getArg('--batch', '8'));
const dryRun = args.includes('--dry-run');
const model = process.env.MODEL || 'claude-sonnet-5';
const MAX_BATCHES = Math.ceil((target / batchSize) * 3) + 2; // headroom for rejects

const existing = loadAllTemplates();
const knownSlugs = slugSet(existing);
const knownKeys = new Set(existing.map(templateKey));
const existingNames = existing.map((t) => t.name);

const INGREDIENT_SCHEMA = {
  type: 'object',
  required: ['rawName', 'canonicalName', 'section', 'isOptional', 'isPantry', 'groceryCategory', 'sortOrder'],
  properties: {
    rawName: { type: 'string' },
    canonicalName: { type: 'string', description: 'singular base ingredient, e.g. "chicken", "rice", "bell pepper", "black bean"' },
    quantity: { type: ['number', 'null'] },
    unit: { type: ['string', 'null'] },
    displayQuantity: { type: 'string' },
    prep: { type: 'string' },
    importance: { type: 'string', enum: enums.IMPORTANCE },
    section: { type: 'string', enum: enums.SECTIONS },
    isOptional: { type: 'boolean' },
    isPantry: { type: 'boolean' },
    groceryCategory: { type: 'string', enum: enums.CATEGORIES },
    sortOrder: { type: 'integer' },
  },
};

const STEP_SCHEMA = {
  type: 'object',
  required: ['stepNumber', 'title', 'body'],
  properties: {
    stepNumber: { type: 'integer' },
    title: { type: 'string' },
    body: { type: 'string' },
    timeMinutes: { type: 'integer' },
    temperature: { type: 'string' },
    visualCue: { type: 'string' },
    component: { type: 'string', enum: enums.COMPONENTS },
  },
};

const RECIPE_TEMPLATE_SCHEMA = {
  type: 'object',
  required: ['slug', 'name', 'category', 'description', 'dinnerLanes', 'cuisineInfluence', 'format', 'timeMinutes', 'effort', 'servings', 'tags', 'chefNote', 'whyItWorks', 'equipment', 'ingredients', 'recipe'],
  properties: {
    slug: { type: 'string', description: 'lowercase-kebab, unique' },
    name: { type: 'string' },
    category: { type: 'string' },
    description: { type: 'string' },
    dinnerLanes: { type: 'array', items: { type: 'string' } },
    cuisineInfluence: { type: 'array', items: { type: 'string' } },
    format: { type: 'string', description: 'e.g. bowl, skillet, sheet pan, curry, taco, pasta' },
    timeMinutes: { type: 'integer' },
    effort: { type: 'string', enum: ['Very easy', 'Easy', 'Medium', 'A project'] },
    servings: { type: 'integer' },
    tags: { type: 'array', items: { type: 'string' } },
    chefNote: { type: 'string' },
    whyItWorks: { type: 'string' },
    leftoversNote: { type: 'string' },
    equipment: { type: 'array', items: { type: 'string' } },
    ingredients: { type: 'array', items: INGREDIENT_SCHEMA, minItems: 4 },
    recipe: {
      type: 'object',
      required: ['activeTimeMinutes', 'totalTimeMinutes', 'steps'],
      properties: {
        activeTimeMinutes: { type: 'integer' },
        totalTimeMinutes: { type: 'integer' },
        steps: { type: 'array', items: STEP_SCHEMA, minItems: 5 },
      },
    },
  },
};

const SAVE_TOOL = {
  name: 'save_recipes',
  description: 'Save a batch of original weeknight dinner recipe templates.',
  input_schema: { type: 'object', required: ['recipes'], properties: { recipes: { type: 'array', items: RECIPE_TEMPLATE_SCHEMA } } },
};

function buildPrompt(count, avoidNames) {
  return [
    `Generate ${count} original, high-quality weeknight dinner recipes as structured templates.`,
    '',
    'Rules:',
    '- Completely original wording. Do NOT copy any published recipe text.',
    '- Real, cookable, and approachable for home cooks (mostly 20-45 min).',
    '- Maximize variety across this batch and vs. the existing library: vary cuisine, main protein (incl. vegetarian/vegan/seafood), and cooking method (skillet, sheet pan, one-pot, no-cook, etc.).',
    '- 6-11 ingredients each. Mark everyday staples (oil, salt, pepper, common spices) as isPantry:true; mark garnishes/extras as isOptional:true. At least 2 core ingredients.',
    '- canonicalName must be the SINGULAR BASE ingredient so it matches a shopping list: e.g. "chicken" (not "chicken thighs"), "rice" (not "jasmine rice"), "bell pepper", "black bean", "scallion", "tomato".',
    '- 5-7 short recipe steps, each with a component from the allowed set.',
    '- slug is lowercase-kebab and unique.',
    '',
    'Avoid duplicating these existing recipes (by concept or name):',
    avoidNames.map((n) => `- ${n}`).join('\n'),
  ].join('\n');
}

function sample(array, n) {
  if (array.length <= n) return array;
  const step = Math.floor(array.length / n);
  return Array.from({ length: n }, (_, i) => array[i * step]);
}

async function requestBatch(count) {
  const avoid = sample(existingNames, 40);
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model,
      max_tokens: 8000,
      tools: [SAVE_TOOL],
      tool_choice: { type: 'tool', name: 'save_recipes' },
      messages: [{ role: 'user', content: buildPrompt(count, avoid) }],
    }),
  });
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Anthropic API ${response.status}: ${text.slice(0, 400)}`);
  }
  const data = await response.json();
  const toolUse = (data.content ?? []).find((block) => block.type === 'tool_use');
  return toolUse?.input?.recipes ?? [];
}

function writeExpansion(templates) {
  const header = [
    "import type { SeedMealTemplate } from '../types';",
    '',
    '// Library expansion. Kept separate from the original 100 curated templates in',
    '// seedMealTemplates.ts. New recipes — hand-authored or produced by the AI',
    '// generation pipeline (scripts/generateMealTemplates.mjs) — land here.',
    '// Original content only. canonicalName matches the app normalizeIngredientKey.',
    'export const expansionMealTemplates: SeedMealTemplate[] = ',
  ].join('\n');
  fs.writeFileSync(expansionFilePath, `${header}${JSON.stringify(templates, null, 2)};\n`, 'utf8');
}

async function main() {
  const accepted = [...loadExpansionTemplates()];
  const acceptedKeys = new Set(accepted.map(templateKey));
  const acceptedSlugs = new Set(accepted.map((t) => (t.slug ?? '').toLowerCase()));
  let added = 0;
  let batches = 0;

  console.log(`Model: ${model} | target: +${target} | existing library: ${existing.length}${dryRun ? ' | DRY RUN' : ''}\n`);

  while (added < target && batches < MAX_BATCHES) {
    batches += 1;
    const want = Math.min(batchSize, target - added);
    let recipes;
    try {
      recipes = await requestBatch(want);
    } catch (error) {
      console.error(`Batch ${batches} failed: ${error.message}`);
      continue;
    }

    for (const recipe of recipes) {
      const slug = (recipe?.slug ?? '').toLowerCase();
      const errors = validateTemplate(recipe, { knownSlugs });
      if (errors.length) {
        console.log(`  reject ${slug || '(no slug)'}: ${errors[0]}`);
        continue;
      }
      const key = templateKey(recipe);
      if (knownKeys.has(key) || acceptedKeys.has(key) || acceptedSlugs.has(slug)) {
        console.log(`  skip   ${slug}: duplicate`);
        continue;
      }
      accepted.push(recipe);
      acceptedKeys.add(key);
      acceptedSlugs.add(slug);
      added += 1;
      console.log(`  add    ${slug}  (${added}/${target})`);
      if (added >= target) break;
    }

    if (!dryRun) writeExpansion(accepted);
  }

  console.log(`\nDone. Added ${added} recipe(s). Expansion file now holds ${accepted.length}.`);
  if (dryRun) console.log('(dry run — nothing written)');
  else console.log('Next: npm run validate:meals && npm run build, then optionally npm run seed:meals.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
