import { normalizeIngredientKey } from './groceryLogic';

// Lightweight ingredient intelligence: relates ingredients that `normalizeIngredientKey`
// deliberately keeps distinct (green onion vs onion, crushed tomatoes vs tomato paste).
// Deliberately small — the deterministic scorer and the AI prompts both read from it,
// and the AI handles the long tail this table doesn't cover. Keys in every table are
// normalized keys (the output of normalizeIngredientKey), so lookups stay consistent
// with the rest of the app.

export type IngredientRelation = 'exact' | 'form' | 'category' | 'function';

export type CloseMatch = {
  inventoryName: string;
  inventoryKey: string;
  relation: IngredientRelation;
  label: string;
};

// Form/cut families: different processed forms of the same base food. Members are
// usually interchangeable with a recipe tweak (drain, simmer longer, thin out).
const ingredientFamilies: Record<string, string[]> = {
  'tomato products': ['tomato', 'canned tomato', 'crushed tomato', 'diced tomato', 'tomato sauce', 'tomato paste', 'tomato puree', 'passata', 'marinara'],
  chicken: ['chicken', 'rotisserie chicken', 'leftover chicken', 'chicken leg', 'chicken drumstick', 'chicken wing', 'whole chicken'],
  'onion family': ['onion', 'shallot', 'scallion', 'leek', 'pearl onion'],
  'rice forms': ['rice', 'leftover rice', 'day old rice', 'cooked rice', 'rice pilaf'],
  'beans (canned or dried)': ['black bean', 'pinto bean', 'kidney bean', 'cannellini bean', 'white bean', 'navy bean', 'chickpea', 'refried bean'],
  'stock and broth': ['chicken stock', 'chicken broth', 'vegetable stock', 'vegetable broth', 'beef stock', 'beef broth', 'bouillon', 'better than bouillon'],
  'ground meat': ['ground beef', 'ground pork', 'turkey', 'ground lamb', 'italian sausage', 'sausage', 'chorizo'],
};

// Category groups: different foods that play the same role on the plate.
const ingredientCategories: Record<string, string[]> = {
  'leafy greens': ['spinach', 'kale', 'chard', 'swiss chard', 'arugula', 'collard green', 'romaine', 'lettuce', 'mixed green', 'baby green', 'bok choy', 'cabbage', 'napa cabbage'],
  'fresh herbs': ['cilantro', 'parsley', 'basil', 'mint', 'dill', 'chive', 'tarragon', 'thyme', 'rosemary', 'oregano', 'sage'],
  citrus: ['lemon', 'lime', 'orange', 'grapefruit', 'lemon juice', 'lime juice'],
  'hard cheese': ['parmesan', 'pecorino', 'pecorino romano', 'grana padano', 'asiago', 'manchego', 'aged gouda'],
  'melting cheese': ['cheddar', 'mozzarella', 'monterey jack', 'jack cheese', 'gruyere', 'fontina', 'provolone', 'oaxaca cheese', 'swiss cheese'],
  'fresh soft cheese': ['feta', 'goat cheese', 'ricotta', 'queso fresco', 'cotija', 'burrata', 'fresh mozzarella'],
  grains: ['rice', 'quinoa', 'couscous', 'orzo', 'farro', 'barley', 'bulgur', 'polenta'],
  noodles: ['pasta', 'spaghetti', 'penne', 'rigatoni', 'noodle', 'rice noodle', 'ramen', 'udon', 'soba', 'egg noodle', 'linguine', 'fettuccine'],
  'beans and legumes': ['black bean', 'pinto bean', 'kidney bean', 'cannellini bean', 'white bean', 'chickpea', 'lentil', 'edamame'],
  'quick proteins': ['chicken', 'turkey', 'ground beef', 'pork', 'shrimp', 'salmon', 'tofu', 'tempeh', 'egg'],
  'crunchy vegetables': ['cucumber', 'celery', 'radish', 'carrot', 'snap pea', 'snow pea', 'jicama', 'bell pepper'],
  'roasting vegetables': ['broccoli', 'cauliflower', 'brussels sprout', 'sweet potato', 'potato', 'carrot', 'squash', 'butternut squash', 'zucchini', 'eggplant', 'green bean'],
  'creamy dairy': ['sour cream', 'greek yogurt', 'yogurt', 'creme fraiche', 'heavy cream', 'mexican crema', 'mascarpone'],
  'tortillas and flatbreads': ['tortilla', 'corn tortilla', 'flour tortilla', 'pita', 'naan', 'flatbread', 'lavash'],
  nuts: ['almond', 'walnut', 'pecan', 'cashew', 'peanut', 'pistachio', 'pine nut'],
};

// Cooking-function groups: what the ingredient does in a dish. The loosest relation —
// only surfaced as a "stretch" idea, never treated as an inventory match.
const cookingFunctions: Record<string, string[]> = {
  acid: ['lemon', 'lime', 'red wine vinegar', 'white wine vinegar', 'rice vinegar', 'apple cider vinegar', 'sherry vinegar', 'vinegar', 'lemon juice', 'lime juice', 'pickle brine'],
  'cooking fat': ['olive oil', 'butter', 'vegetable oil', 'canola oil', 'avocado oil', 'coconut oil', 'ghee', 'sesame oil'],
  umami: ['soy sauce', 'fish sauce', 'worcestershire', 'miso', 'parmesan', 'anchovy', 'tomato paste', 'mushroom', 'nutritional yeast', 'oyster sauce'],
  crunch: ['panko', 'breadcrumb', 'crushed cracker', 'fried onion', 'almond', 'peanut', 'cashew', 'pepitas', 'sesame seed', 'tortilla chip'],
  binder: ['egg', 'flour', 'breadcrumb', 'panko', 'mayonnaise', 'cornstarch'],
  sweetener: ['honey', 'maple syrup', 'sugar', 'brown sugar', 'agave'],
  thickener: ['cornstarch', 'flour', 'tomato paste', 'roux', 'arrowroot'],
  'fresh heat': ['jalapeno', 'serrano', 'red pepper flake', 'chili crisp', 'sriracha', 'hot sauce', 'gochujang', 'sambal', 'cayenne'],
};

type GroupIndex = Map<string, string[]>;

function buildIndex(groups: Record<string, string[]>): GroupIndex {
  const index: GroupIndex = new Map();
  Object.entries(groups).forEach(([group, members]) => {
    members.forEach((member) => {
      const key = normalizeIngredientKey(member);
      const existing = index.get(key);
      if (existing) {
        if (!existing.includes(group)) existing.push(group);
      } else {
        index.set(key, [group]);
      }
    });
  });
  return index;
}

const familyIndex = buildIndex(ingredientFamilies);
const categoryIndex = buildIndex(ingredientCategories);
const functionIndex = buildIndex(cookingFunctions);

function groupsFor(index: GroupIndex, key: string): string[] {
  return index.get(key) ?? [];
}

function sharedGroup(index: GroupIndex, keyA: string, keyB: string): string | null {
  const groupsA = groupsFor(index, keyA);
  if (!groupsA.length) return null;
  const groupsB = groupsFor(index, keyB);
  return groupsA.find((group) => groupsB.includes(group)) ?? null;
}

export function getIngredientGroups(name: string): { families: string[]; categories: string[]; functions: string[] } {
  const key = normalizeIngredientKey(name);
  return {
    families: groupsFor(familyIndex, key),
    categories: groupsFor(categoryIndex, key),
    functions: groupsFor(functionIndex, key),
  };
}

export function relateIngredients(nameA: string, nameB: string): { relation: IngredientRelation; label: string } | null {
  const keyA = normalizeIngredientKey(nameA);
  const keyB = normalizeIngredientKey(nameB);
  if (!keyA || !keyB) return null;
  if (keyA === keyB) return { relation: 'exact', label: 'same ingredient' };
  const family = sharedGroup(familyIndex, keyA, keyB);
  if (family) return { relation: 'form', label: family };
  const category = sharedGroup(categoryIndex, keyA, keyB);
  if (category) return { relation: 'category', label: category };
  const fn = sharedGroup(functionIndex, keyA, keyB);
  if (fn) return { relation: 'function', label: fn };
  return null;
}

/**
 * Given an ingredient the user is missing, find inventory items that could stand in.
 * Ordered strongest-first: form (crushed vs diced tomatoes) beats category (kale for
 * spinach) beats cooking function (lime for vinegar).
 */
export function findCloseMatches(missingName: string, inventoryNames: string[]): CloseMatch[] {
  const rank: Record<IngredientRelation, number> = { exact: 0, form: 1, category: 2, function: 3 };
  const seen = new Set<string>();
  return inventoryNames
    .flatMap((inventoryName): CloseMatch[] => {
      const related = relateIngredients(missingName, inventoryName);
      if (!related || related.relation === 'exact') return [];
      const inventoryKey = normalizeIngredientKey(inventoryName);
      if (seen.has(inventoryKey)) return [];
      seen.add(inventoryKey);
      return [{ inventoryName, inventoryKey, relation: related.relation, label: related.label }];
    })
    .sort((a, b) => rank[a.relation] - rank[b.relation]);
}

/**
 * Compact context strings for AI prompts, e.g. "scallion (onion family; fresh herbs)".
 * Only includes items the tables actually know about, so the prompt stays short.
 */
export function describeInventoryForPrompt(inventoryNames: string[]): string[] {
  return inventoryNames.flatMap((name) => {
    const groups = getIngredientGroups(name);
    const labels = [...groups.families, ...groups.categories];
    if (!labels.length) return [];
    return [`${name} (${labels.slice(0, 2).join('; ')})`];
  });
}
