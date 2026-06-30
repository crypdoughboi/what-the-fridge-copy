// Shared helpers for working with meal templates outside the app bundle:
// load them from the TypeScript data files, validate their shape, and compute a
// dedupe key. Used by both the Supabase seeder and the AI generation pipeline.
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const SECTIONS = ['Produce', 'Meat/Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Other'];
const CATEGORIES = ['Produce', 'Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Condiments', 'Drinks', 'Other'];
const IMPORTANCE = ['core', 'pantry', 'optional', 'upgrade'];
const COMPONENTS = ['prep', 'sauce', 'base', 'protein', 'vegetables', 'assembly', 'finish'];

const SEED_PATH = new URL('../../src/data/seedMealTemplates.ts', import.meta.url);
const EXPANSION_PATH = new URL('../../src/data/expansionMealTemplates.ts', import.meta.url);

// Evaluate a `.ts` data file (type-only imports, one exported const array) and
// return the named export. Mirrors how the seeder reads seedMealTemplates.ts.
function loadExport(url, exportName) {
  const source = fs.readFileSync(url, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const moduleObject = { exports: {} };
  vm.runInNewContext(transpiled, { module: moduleObject, exports: moduleObject.exports, require: () => ({}) });
  return moduleObject.exports[exportName];
}

export function loadSeedTemplates() {
  return loadExport(SEED_PATH, 'seedMealTemplates') ?? [];
}

export function loadExpansionTemplates() {
  if (!fs.existsSync(EXPANSION_PATH)) return [];
  return loadExport(EXPANSION_PATH, 'expansionMealTemplates') ?? [];
}

export function loadAllTemplates() {
  return [...loadSeedTemplates(), ...loadExpansionTemplates()];
}

export const expansionFilePath = EXPANSION_PATH;

// A stable identity for dedupe: slug plus the sorted set of core ingredient keys,
// so two recipes with the same name OR the same core ingredients collide.
export function templateKey(template) {
  const core = (template.ingredients ?? [])
    .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
    .map((ingredient) => (ingredient.canonicalName || ingredient.rawName || '').toLowerCase().trim())
    .filter(Boolean)
    .sort();
  return `${(template.slug ?? '').toLowerCase()}::${core.join('|')}`;
}

export function slugSet(templates) {
  return new Set(templates.map((template) => (template.slug ?? '').toLowerCase()));
}

// Returns an array of human-readable problems; empty means the template is valid.
export function validateTemplate(template, { knownSlugs } = {}) {
  const errors = [];
  const req = (cond, message) => {
    if (!cond) errors.push(message);
  };

  req(typeof template?.slug === 'string' && /^[a-z0-9-]+$/.test(template.slug), 'slug must be lowercase-kebab');
  if (knownSlugs && template?.slug && knownSlugs.has(template.slug.toLowerCase())) errors.push(`duplicate slug: ${template.slug}`);
  req(typeof template?.name === 'string' && template.name.length > 3, 'name missing');
  req(typeof template?.category === 'string' && template.category.length > 0, 'category missing');
  req(typeof template?.description === 'string' && template.description.length > 0, 'description missing');
  req(Array.isArray(template?.dinnerLanes), 'dinnerLanes must be an array');
  req(Array.isArray(template?.cuisineInfluence), 'cuisineInfluence must be an array');
  req(typeof template?.format === 'string' && template.format.length > 0, 'format missing');
  req(Number.isFinite(template?.timeMinutes) && template.timeMinutes > 0 && template.timeMinutes <= 240, 'timeMinutes out of range');
  req(typeof template?.effort === 'string' && template.effort.length > 0, 'effort missing');
  req(Number.isFinite(template?.servings) && template.servings > 0 && template.servings <= 12, 'servings out of range');
  req(Array.isArray(template?.tags) && template.tags.length > 0, 'tags missing');
  req(typeof template?.chefNote === 'string', 'chefNote missing');
  req(typeof template?.whyItWorks === 'string', 'whyItWorks missing');
  req(Array.isArray(template?.equipment), 'equipment must be an array');

  const ingredients = template?.ingredients;
  if (!Array.isArray(ingredients) || ingredients.length < 3) {
    errors.push('ingredients must have at least 3 entries');
  } else {
    const coreCount = ingredients.filter((i) => !i.isOptional && !i.isPantry).length;
    if (coreCount < 2) errors.push('need at least 2 core (non-pantry, non-optional) ingredients');
    ingredients.forEach((ing, idx) => {
      const at = `ingredient[${idx}] (${ing?.rawName ?? '?'})`;
      if (!ing?.rawName) errors.push(`${at}: rawName missing`);
      if (!ing?.canonicalName) errors.push(`${at}: canonicalName missing`);
      if (!SECTIONS.includes(ing?.section)) errors.push(`${at}: bad section "${ing?.section}"`);
      if (!CATEGORIES.includes(ing?.groceryCategory)) errors.push(`${at}: bad groceryCategory "${ing?.groceryCategory}"`);
      if (typeof ing?.isOptional !== 'boolean') errors.push(`${at}: isOptional must be boolean`);
      if (typeof ing?.isPantry !== 'boolean') errors.push(`${at}: isPantry must be boolean`);
      if (ing?.importance != null && !IMPORTANCE.includes(ing.importance)) errors.push(`${at}: bad importance "${ing.importance}"`);
      if (!Number.isFinite(ing?.sortOrder)) errors.push(`${at}: sortOrder must be a number`);
    });
  }

  const steps = template?.recipe?.steps;
  if (!Number.isFinite(template?.recipe?.activeTimeMinutes)) errors.push('recipe.activeTimeMinutes missing');
  if (!Number.isFinite(template?.recipe?.totalTimeMinutes)) errors.push('recipe.totalTimeMinutes missing');
  if (!Array.isArray(steps) || steps.length < 3) {
    errors.push('recipe.steps must have at least 3 steps');
  } else {
    steps.forEach((step, idx) => {
      const at = `step[${idx}]`;
      if (!Number.isFinite(step?.stepNumber)) errors.push(`${at}: stepNumber missing`);
      if (!step?.title) errors.push(`${at}: title missing`);
      if (!step?.body) errors.push(`${at}: body missing`);
      if (step?.component != null && !COMPONENTS.includes(step.component)) errors.push(`${at}: bad component "${step.component}"`);
    });
  }

  return errors;
}

export const enums = { SECTIONS, CATEGORIES, IMPORTANCE, COMPONENTS };
