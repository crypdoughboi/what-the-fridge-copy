// Expand the compact recipe rows in scripts/importedRecipes.mjs into full
// SeedMealTemplate objects and write src/data/importedMealTemplates.ts.
//
//   npm run build:imported-meals
//
// The compact format keeps authoring cheap (one small object per recipe); this
// script fills in the app-facing structure: canonical ingredient names via the
// app's real normalizeIngredientKey, grocery categories/sections via the app's
// real categorizer, plus sensible defaults for lanes, category, equipment, and
// effort. The generated file is committed — the app imports it like any other
// static template data.
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { importedRecipes } from './importedRecipes.mjs';

// Load the app's grocery logic (normalizeIngredientKey, categorizeGroceryItem,
// sectionForCategory) the same way the seeder loads TS data files.
function loadGroceryLogic() {
  const source = fs.readFileSync(new URL('../src/utils/groceryLogic.ts', import.meta.url), 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const moduleObject = { exports: {} };
  vm.runInNewContext(transpiled, { module: moduleObject, exports: moduleObject.exports, require: () => ({ getDaysSince: () => 0 }) });
  return moduleObject.exports;
}

const { normalizeIngredientKey, categorizeGroceryItem, sectionForCategory } = loadGroceryLogic();

// Ingredients treated as pantry staples ("assumes you have") unless a row
// forces them core with a '!' prefix. Keyed by canonical (normalized) name.
// Defining Asian/specialty sauces (fish sauce, gochujang, miso, curry pastes)
// stay CORE on purpose — they drive inventory matching and the grocery list.
const PANTRY = new Set([
  'oil', 'neutral oil', 'olive oil', 'vegetable oil', 'canola oil', 'sesame oil', 'annatto oil',
  'salt', 'pepper', 'black pepper', 'white pepper', 'sugar', 'brown sugar', 'rock sugar', 'palm sugar',
  'flour', 'cornstarch', 'potato starch', 'butter', 'ghee', 'mayonnaise', 'ketchup', 'honey', 'maple syrup',
  'soy sauce', 'worcestershire', 'worcestershire sauce', 'dijon mustard', 'breadcrumb', 'panko',
  'rice vinegar', 'red wine vinegar', 'white wine vinegar', 'apple cider vinegar', 'balsamic vinegar', 'vinegar',
  'chicken stock', 'chicken broth', 'beef broth', 'beef stock', 'vegetable stock', 'vegetable broth',
  'cumin', 'paprika', 'smoked paprika', 'chili powder', 'cayenne', 'garlic powder', 'onion powder',
  'oregano', 'dried oregano', 'turmeric', 'garam masala', 'curry powder', 'five spice', 'cinnamon',
  'star anise', 'bay leaf', 'chili flake', 'red pepper flake', 'sichuan peppercorn', 'coriander', 'ground coriander',
  'taco seasoning', 'cajun seasoning', 'jerk seasoning', 'shawarma seasoning', 'ranch seasoning',
  'everything bagel seasoning', 'ras el hanout', 'italian seasoning', 'furikake', 'sesame seed', 'dried chile',
]);

// categorizeGroceryItem covers common items; these fix its blind spots.
// Keyed by canonical name.
const CATEGORY_OVERRIDES = {
  cod: 'Protein', halibut: 'Protein', 'sea bass': 'Protein', porgy: 'Protein', 'mahi mahi': 'Protein',
  'white fish': 'Protein', 'whole fish': 'Protein', duck: 'Protein', 'duck leg': 'Protein', squid: 'Protein',
  ham: 'Protein', spam: 'Protein', bacon: 'Protein', sausage: 'Protein', 'italian sausage': 'Protein',
  chorizo: 'Protein', 'mexican chorizo': 'Protein', 'pork belly': 'Protein', 'pork chop': 'Protein',
  'pork loin': 'Protein', 'pork rib': 'Protein', 'pork neck bone': 'Protein', 'flank steak': 'Protein',
  'ground pork': 'Protein', 'ground lamb': 'Protein', lamb: 'Protein', paneer: 'Protein', edamame: 'Produce',
  mozzarella: 'Dairy', parmesan: 'Dairy', cheddar: 'Dairy', burrata: 'Dairy', ricotta: 'Dairy',
  cotija: 'Dairy', 'queso fresco': 'Dairy', brie: 'Dairy', muenster: 'Dairy', 'monterey jack': 'Dairy',
  'oaxaca cheese': 'Dairy', provolone: 'Dairy', fontina: 'Dairy', gruyere: 'Dairy', 'blue cheese dressing': 'Condiments',
  'heavy cream': 'Dairy', cream: 'Dairy', 'sour cream': 'Dairy', 'cream cheese': 'Dairy', 'half and half': 'Dairy',
  tomatillo: 'Produce', jalapeno: 'Produce', poblano: 'Produce', 'poblano pepper': 'Produce', serrano: 'Produce',
  'serrano pepper': 'Produce', 'anaheim pepper': 'Produce', 'thai chile': 'Produce', 'fresh chile': 'Produce',
  'shishito pepper': 'Produce', lemongrass: 'Produce', galangal: 'Produce', 'kaffir lime leaf': 'Produce',
  'perilla leaf': 'Produce', 'green papaya': 'Produce', 'long bean': 'Produce', 'chinese broccoli': 'Produce',
  'bean sprout': 'Produce', shallot: 'Produce', 'cilantro root': 'Produce', chive: 'Produce', 'garlic chive': 'Produce',
  hominy: 'Pantry', 'glass noodle': 'Pantry', 'rice vermicelli': 'Pantry', 'rice noodle': 'Pantry',
  'wide rice noodle': 'Pantry', 'egg noodle': 'Pantry', 'ramen noodle': 'Pantry', 'udon noodle': 'Pantry',
  'soba noodle': 'Pantry', 'somen noodle': 'Pantry', 'lo mein noodle': 'Pantry', 'chow mein noodle': 'Pantry',
  'yakisoba noodle': 'Pantry', gnocchi: 'Pantry', 'potato gnocchi': 'Pantry', 'pizza dough': 'Pantry',
  'puff pastry': 'Frozen', 'burger bun': 'Pantry', pita: 'Pantry', focaccia: 'Pantry', sourdough: 'Pantry',
  'fish sauce': 'Condiments', 'oyster sauce': 'Condiments', hoisin: 'Condiments', gochujang: 'Condiments',
  gochugaru: 'Condiments', miso: 'Condiments', 'miso paste': 'Condiments', mirin: 'Condiments', sake: 'Condiments',
  'shaoxing wine': 'Condiments', 'chinkiang vinegar': 'Condiments', dashi: 'Condiments', tamarind: 'Condiments',
  'red curry paste': 'Condiments', 'green curry paste': 'Condiments', 'panang curry paste': 'Condiments',
  'southern curry paste': 'Condiments', 'thai chili paste': 'Condiments', 'tom yum paste': 'Condiments',
  'shio koji': 'Condiments', 'tonkatsu sauce': 'Condiments', 'okonomiyaki sauce': 'Condiments',
  'yakisoba sauce': 'Condiments', 'teriyaki sauce': 'Condiments', 'enchilada sauce': 'Condiments',
  'salsa verde': 'Condiments', 'buffalo sauce': 'Condiments', "frank's redhot": 'Condiments',
  'barbecue sauce': 'Condiments', 'sweet chili sauce': 'Condiments', 'chipotle peppers in adobo': 'Pantry',
  'japanese curry roux': 'Pantry', 'toasted rice powder': 'Pantry', 'dried shrimp': 'Pantry',
  'dried wood ear mushroom': 'Pantry', 'bonito flake': 'Pantry', kamaboko: 'Protein', 'crispy noodle': 'Pantry',
  saffron: 'Pantry', 'curry leaf': 'Produce', 'toor dal': 'Pantry', lentil: 'Pantry', 'basmati rice': 'Pantry',
  'jasmine rice': 'Pantry', quinoa: 'Pantry', 'bamboo shoot': 'Pantry', 'thai eggplant': 'Produce',
  'coconut milk': 'Pantry', coconut: 'Pantry', 'peanut butter': 'Pantry', 'peanut sauce': 'Condiments',
  peanut: 'Pantry', 'roasted peanut': 'Pantry', pepitas: 'Pantry', 'pumpkin seed': 'Pantry',
  'sun dried tomato': 'Pantry', 'marsala wine': 'Condiments', 'white wine': 'Drinks', beer: 'Drinks',
  'kimchi juice': 'Condiments', kimchi: 'Condiments', 'pickled vegetable': 'Condiments', harissa: 'Condiments',
  tahini: 'Condiments', hummus: 'Condiments', tzatziki: 'Condiments', pesto: 'Condiments', 'basil pesto': 'Condiments',
  marinara: 'Pantry', 'marinara sauce': 'Pantry', 'calabrian chili': 'Condiments', 'sriracha mayo': 'Condiments',
  'spicy mayo': 'Condiments', sriracha: 'Condiments', 'hot sauce': 'Condiments', 'anchovy stock': 'Condiments',
  'black garlic': 'Produce', pretzel: 'Snacks', 'tortilla chip': 'Snacks', jackfruit: 'Pantry', pear: 'Produce',
  'street corn': 'Produce', chicken: 'Protein', 'chicken meatball': 'Protein', 'beef meatball': 'Protein',
  'pork meatball': 'Protein', 'leftover carnitas': 'Protein', 'thinly sliced beef': 'Protein', 'beef chuck': 'Protein',
  'chicken leg quarter': 'Protein', 'whole chicken': 'Protein', 'chicken wing': 'Protein', mint: 'Produce',
  'thai basil': 'Produce', arugula: 'Produce', 'mixed mushroom': 'Produce', 'shiitake mushroom': 'Produce',
  'shimeji mushroom': 'Produce', 'wood ear mushroom': 'Pantry', 'greek yogurt': 'Dairy', yogurt: 'Dairy',
};

const FORMAT_DEFAULTS = {
  skillet: { category: 'Skillets and stir-fries', lanes: ['Crispy, saucy, crunchy'], equipment: ['large skillet', 'chef knife', 'cutting board'] },
  'one-pot': { category: 'One-pot comfort', lanes: ['Creamy, spicy, cozy'], equipment: ['dutch oven or large pot', 'chef knife', 'cutting board'] },
  stew: { category: 'One-pot comfort', lanes: ['Creamy, spicy, cozy'], equipment: ['dutch oven or large pot', 'chef knife', 'cutting board'] },
  braise: { category: 'Slow cooker and Instant Pot', lanes: ['Creamy, spicy, cozy'], equipment: ['dutch oven, slow cooker, or pressure cooker', 'chef knife', 'cutting board'] },
  curry: { category: 'Curry night', lanes: ['Curry night', 'Creamy, spicy, cozy'], equipment: ['dutch oven or large pot', 'chef knife', 'cutting board'] },
  'noodle soup': { category: 'Soups and noodle soups', lanes: ['Creamy, spicy, cozy'], equipment: ['large pot', 'chef knife', 'cutting board'] },
  soup: { category: 'Soups and noodle soups', lanes: ['Creamy, spicy, cozy'], equipment: ['large pot', 'chef knife', 'cutting board'] },
  'noodle bowl': { category: 'Noodle night', lanes: ['Rice bowl energy'], equipment: ['large pot', 'large skillet', 'chef knife'] },
  noodles: { category: 'Noodle night', lanes: ['Crispy, saucy, crunchy'], equipment: ['wok or large skillet', 'large pot', 'chef knife'] },
  pasta: { category: 'Pasta night', lanes: ['Pasta but better'], equipment: ['large pot', 'large skillet', 'chef knife'] },
  'rice bowl': { category: 'Grain and protein bowls', lanes: ['Rice bowl energy'], equipment: ['large skillet', 'medium saucepan', 'chef knife'] },
  'rice pot': { category: 'Grain and protein bowls', lanes: ['Rice bowl energy', 'Spiced rice and slow comfort'], equipment: ['rice cooker or heavy pot', 'chef knife', 'cutting board'] },
  'sheet pan': { category: 'Sheet pan dinners', lanes: ['Weeknight roast'], equipment: ['sheet pan', 'chef knife', 'cutting board'] },
  roast: { category: 'Oven bakes', lanes: ['Weeknight roast'], equipment: ['roasting pan or sheet pan', 'chef knife', 'cutting board'] },
  bake: { category: 'Oven bakes', lanes: ['Weeknight roast'], equipment: ['baking dish', 'chef knife', 'cutting board'] },
  taco: { category: 'Tacos and handhelds', lanes: ['Tacos, wraps, and things in bread'], equipment: ['large skillet', 'chef knife', 'cutting board'] },
  quesadilla: { category: 'Tacos and handhelds', lanes: ['Tacos, wraps, and things in bread'], equipment: ['large skillet', 'chef knife', 'cutting board'] },
  burger: { category: 'Burgers and sandwiches', lanes: ['Tacos, wraps, and things in bread'], equipment: ['large skillet or grill', 'mixing bowl', 'chef knife'] },
  sandwich: { category: 'Burgers and sandwiches', lanes: ['Tacos, wraps, and things in bread'], equipment: ['large skillet', 'chef knife', 'cutting board'] },
  'salad plate': { category: 'Big salads', lanes: ['Charred, citrusy, herby'], equipment: ['large bowl', 'chef knife', 'cutting board'] },
  grill: { category: 'Grill night', lanes: ['Big platter dinner', 'Charred, citrusy, herby'], equipment: ['grill or grill pan', 'chef knife', 'cutting board'] },
  'air fryer': { category: 'Air fryer favorites', lanes: ['Crispy, saucy, crunchy'], equipment: ['air fryer', 'mixing bowl', 'chef knife'] },
  pizza: { category: 'Oven bakes', lanes: ['Weeknight roast'], equipment: ['sheet pan or pizza stone', 'chef knife', 'cutting board'] },
};

function effortFor(recipe) {
  if (recipe.e) return recipe.e;
  if (recipe.t <= 20) return 'Very easy';
  if (recipe.t <= 45) return 'Easy';
  return 'Medium';
}

function slugify(name) {
  return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function parseIngredient(row, index) {
  let raw = row;
  let optional = false;
  let forcePantry = false;
  let forceCore = false;
  if (raw.startsWith('?')) { optional = true; raw = raw.slice(1); }
  if (raw.startsWith('+')) { forcePantry = true; raw = raw.slice(1); }
  if (raw.startsWith('!')) { forceCore = true; raw = raw.slice(1); }
  const [rawName, displayQuantity, prep] = raw.split('|').map((part) => part?.trim());
  if (!rawName) throw new Error(`empty ingredient row: "${row}"`);
  const canonicalName = normalizeIngredientKey(rawName);
  const category = CATEGORY_OVERRIDES[canonicalName] ?? categorizeGroceryItem(rawName);
  const isPantry = !optional && !forceCore && (forcePantry || PANTRY.has(canonicalName));
  const ingredient = {
    rawName,
    canonicalName,
    quantity: null,
    unit: null,
    section: sectionForCategory(category),
    isOptional: optional,
    isPantry,
    groceryCategory: category,
    sortOrder: index + 1,
    importance: optional ? 'optional' : isPantry ? 'pantry' : 'core',
  };
  if (displayQuantity) ingredient.displayQuantity = displayQuantity;
  if (prep) ingredient.prep = prep;
  return ingredient;
}

function expand(recipe) {
  const defaults = FORMAT_DEFAULTS[recipe.f];
  if (!defaults) throw new Error(`unknown format "${recipe.f}" in "${recipe.n}"`);
  const lanes = recipe.lanes ?? [...defaults.lanes];
  if (recipe.c === 'Mediterranean' && !lanes.includes('Mediterranean home cooking')) lanes.push('Mediterranean home cooking');
  if (recipe.c === 'Indian' && !lanes.includes('Curry night')) lanes.push('Curry night');

  const steps = recipe.s.map(([title, body, timeMinutes], index) => {
    const step = { stepNumber: index + 1, title, body };
    if (Number.isFinite(timeMinutes)) step.timeMinutes = timeMinutes;
    return step;
  });

  return {
    slug: recipe.slug ?? slugify(recipe.n),
    name: recipe.n,
    category: recipe.cat ?? defaults.category,
    description: recipe.d,
    dinnerLanes: lanes.slice(0, 2),
    cuisineInfluence: [recipe.c],
    format: recipe.f,
    timeMinutes: Math.min(recipe.t, 240),
    effort: effortFor(recipe),
    servings: recipe.sv ?? 4,
    tags: recipe.tags,
    chefNote: recipe.note ?? '',
    whyItWorks: recipe.w ?? '',
    equipment: recipe.eq ?? defaults.equipment,
    ingredients: recipe.i.map(parseIngredient),
    recipe: {
      activeTimeMinutes: recipe.a ?? Math.min(Math.min(recipe.t, 240), Math.max(10, Math.round(recipe.t * 0.55))),
      totalTimeMinutes: Math.min(recipe.t, 240),
      steps,
    },
  };
}

const templates = importedRecipes.map(expand);

const header = `import type { SeedMealTemplate } from '../types';

// GENERATED FILE — do not edit by hand.
// Source: scripts/importedRecipes.mjs (compact, human-authored recipe rows).
// Regenerate with: npm run build:imported-meals
// These recipes were compiled from the owner's own cooking notes; all
// descriptions and steps are original text.
export const importedMealTemplates: SeedMealTemplate[] = `;

const outPath = new URL('../src/data/importedMealTemplates.ts', import.meta.url);
fs.writeFileSync(outPath, `${header}${JSON.stringify(templates, null, 2)};\n`);
console.log(`Wrote ${templates.length} templates to src/data/importedMealTemplates.ts`);
