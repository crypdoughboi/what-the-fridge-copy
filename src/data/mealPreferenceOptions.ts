import {
  CookingMethodPreference,
  CuisinePreference,
  EffortPreference,
  FlexibilityPreference,
  MealPreferences,
} from '../types';

export const effortOptions: EffortPreference[] = ['Anything easy', 'Bare minimum', 'Easy', 'Normal', 'I feel like cooking'];

export const cookingMethodOptions: CookingMethodPreference[] = [
  'Any method',
  'Air fryer',
  'Sheet pan',
  'One-pan',
  'One-pot',
  'Stovetop',
  'Oven',
  'Grill',
  'No-cook',
  'Slow cooker',
  'Instant Pot',
];

export const restrictionOptions: string[] = [
  'No restrictions',
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Dairy-free',
  'Nut-free',
  'Peanut-free',
  'Tree nut-free',
  'Egg-free',
  'Soy-free',
  'Shellfish-free',
  'Fish-free',
  'Sesame-free',
  'Low-carb',
  'Keto',
  'Paleo',
  'Halal',
  'Kosher',
];

export const cuisineOptions: CuisinePreference[] = [
  'Any cuisine',
  'American',
  'Italian',
  'Mexican',
  'Mediterranean',
  'Chinese',
  'Japanese',
  'Korean',
  'Thai',
  'Indian',
  'Middle Eastern',
  'Tex-Mex',
];

export const flexibilityOptions: FlexibilityPreference[] = [
  'Only what I have',
  'Missing 1 item is okay',
  'A few missing items are okay',
  "I'm shopping anyway",
];

export const defaultMealPreferences: MealPreferences = {
  effort: 'Anything easy',
  cookingMethod: 'Any method',
  restrictions: ['No restrictions'],
  vibe: 'Surprise me',
  mainIngredient: 'Use what makes sense',
  cuisine: 'Any cuisine',
  flexibility: 'Missing 1 item is okay',
};

// The seed catalog only carries onboarding-style food styles. Map them to the
// richer restriction options so the preference screen starts from what we know.
export function restrictionsFromProfile(dietaryPreferences: string[]): string[] {
  const mapped = dietaryPreferences
    .map((preference) => {
      if (restrictionOptions.includes(preference)) return preference;
      if (preference === 'Lower carb') return 'Low-carb';
      return null;
    })
    .filter((value): value is string => Boolean(value));
  const unique = Array.from(new Set(mapped));
  return unique.length ? unique : ['No restrictions'];
}

// Heuristic ingredient keyword groups. The seed meals do not carry explicit
// allergen flags, so we match on canonical and raw ingredient names. This is
// intentionally conservative: an ingredient that might violate a restriction
// removes the meal from the deck.
const MEAT_NO_FISH = [
  'chicken',
  'beef',
  'steak',
  'pork',
  'turkey',
  'sausage',
  'lamb',
  'bacon',
  'ham',
  'prosciutto',
  'chorizo',
  'pepperoni',
  'pancetta',
  'duck',
  'veal',
  'bison',
  'venison',
  'brisket',
  'pastrami',
  'ground beef',
  'thin beef',
  // Dish/cut names whose protein is not always spelled out as a plain meat word.
  'carnitas',
  'carnita',
  'barbacoa',
  'birria',
  'carne asada',
  'al pastor',
  'meatball',
  'shawarma',
  'bulgogi',
  'galbi',
  'short rib',
  'katsu',
  'kibbeh',
  'kofta',
  'kebab',
  'gyro',
  'souvlaki',
  'larb',
  'ragu',
  'merguez',
  'andouille',
  'kielbasa',
  'bratwurst',
];
const FISH = [
  'salmon',
  'fish',
  'tuna',
  'cod',
  'anchovy',
  'anchovies',
  'halibut',
  'trout',
  'branzino',
  'sea bass',
  'bass',
  'snapper',
  'tilapia',
  'mackerel',
  'sardine',
  'mahi',
  'swordfish',
  'catfish',
  'haddock',
  'pollock',
  'sole',
  'flounder',
  'barramundi',
  'bream',
];
const SHELLFISH = ['shrimp', 'prawn', 'crab', 'lobster', 'clam', 'mussel', 'scallop', 'oyster', 'squid', 'calamari', 'octopus', 'crawfish', 'crayfish'];
const VEG_PROTEIN = ['tofu', 'tempeh', 'seitan', 'edamame', 'paneer', 'halloumi', 'egg', 'bean', 'chickpea', 'lentil'];
const ALL_MEAT = [...MEAT_NO_FISH, ...FISH, ...SHELLFISH];
const DAIRY = [
  'cheese',
  'cheddar',
  'mozzarella',
  'parmesan',
  'feta',
  'yogurt',
  'butter',
  'cream',
  'crema',
  'ghee',
  'ricotta',
  'milk',
  'queso',
  'cotija',
  'gruyere',
  'halloumi',
  'mascarpone',
];
const EGG = ['egg', 'mayo', 'aioli'];
const GLUTEN = [
  'pasta',
  'spaghetti',
  'rigatoni',
  'linguine',
  'orecchiette',
  'penne',
  'noodle',
  'orzo',
  'couscous',
  'bread',
  'sourdough',
  'baguette',
  'pita',
  'naan',
  'tortilla',
  'flour',
  'breadcrumb',
  'panko',
  'bun',
  'farro',
  'freekeh',
  'barley',
  'bulgur',
  'cracker',
  'pretzel',
  'challah',
  'pappardelle',
  'soy sauce',
  'gochujang',
  'ssamjang',
  'udon',
  'ramen',
  'flatbread',
  'crouton',
];
const PEANUT = ['peanut'];
const TREE_NUT = ['almond', 'cashew', 'walnut', 'pecan', 'pistachio', 'hazelnut', 'pine nut', 'macadamia', 'brazil nut'];
const SOY = ['soy sauce', 'soy', 'tofu', 'edamame', 'miso', 'tamari', 'gochujang', 'ssamjang'];
const SESAME = ['sesame', 'tahini'];
const HIGH_CARB = [
  'rice',
  'basmati',
  'jasmine rice',
  'pasta',
  'spaghetti',
  'rigatoni',
  'linguine',
  'orecchiette',
  'penne',
  'noodle',
  'orzo',
  'couscous',
  'bread',
  'sourdough',
  'pita',
  'naan',
  'tortilla',
  'potato',
  'sweet potato',
  'corn',
  'grits',
  'sugar',
  'honey',
];
const LEGUMES = ['black bean', 'white bean', 'kidney bean', 'pinto bean', 'cannellini', 'chickpea', 'lentil', 'edamame', 'peanut', 'tofu', 'soy'];
const GRAINS = [
  'rice',
  'basmati',
  'jasmine rice',
  'pasta',
  'spaghetti',
  'rigatoni',
  'linguine',
  'orecchiette',
  'penne',
  'noodle',
  'orzo',
  'couscous',
  'bread',
  'sourdough',
  'pita',
  'naan',
  'tortilla',
  'flour',
  'breadcrumb',
  'oat',
  'grits',
  'corn',
];
const SUGAR = ['sugar', 'brown sugar', 'honey'];
const PORK = ['pork', 'bacon', 'ham', 'prosciutto', 'chorizo', 'pepperoni', 'sausage', 'pancetta', 'lard'];
const ALCOHOL = ['wine', 'vodka', 'beer', 'rum', 'sake', 'mirin', 'sherry', 'brandy', 'bourbon', 'whiskey', 'liquor'];

export type RestrictionRule =
  | { kind: 'keywords'; keywords: string[] }
  | { kind: 'dairy' }
  | { kind: 'vegan' }
  | { kind: 'paleo' };

export const restrictionRules: Record<string, RestrictionRule> = {
  Vegetarian: { kind: 'keywords', keywords: ALL_MEAT },
  Pescatarian: { kind: 'keywords', keywords: MEAT_NO_FISH },
  Vegan: { kind: 'vegan' },
  'Gluten-free': { kind: 'keywords', keywords: GLUTEN },
  'Dairy-free': { kind: 'dairy' },
  'Nut-free': { kind: 'keywords', keywords: [...PEANUT, ...TREE_NUT] },
  'Peanut-free': { kind: 'keywords', keywords: PEANUT },
  'Tree nut-free': { kind: 'keywords', keywords: TREE_NUT },
  'Egg-free': { kind: 'keywords', keywords: EGG },
  'Soy-free': { kind: 'keywords', keywords: SOY },
  'Shellfish-free': { kind: 'keywords', keywords: SHELLFISH },
  'Fish-free': { kind: 'keywords', keywords: FISH },
  'Sesame-free': { kind: 'keywords', keywords: SESAME },
  'Low-carb': { kind: 'keywords', keywords: HIGH_CARB },
  Keto: { kind: 'keywords', keywords: [...HIGH_CARB, ...LEGUMES] },
  Paleo: { kind: 'paleo' },
  Halal: { kind: 'keywords', keywords: [...PORK, ...ALCOHOL] },
  Kosher: { kind: 'keywords', keywords: [...PORK, ...SHELLFISH] },
};

export const veganDairyKeywords = DAIRY;
export const veganEggKeywords = EGG;
export const veganMeatKeywords = ALL_MEAT;
export const landMeatKeywords = MEAT_NO_FISH;
export const seafoodFishKeywords = FISH;
export const seafoodShellfishKeywords = SHELLFISH;
export const vegetarianProteinKeywords = VEG_PROTEIN;
export const paleoKeywords = [...GRAINS, ...LEGUMES, ...SUGAR];

// Strip non-dairy phrases before testing dairy keywords so coconut milk and
// peanut butter are not misread as dairy.
export const dairyFalsePositivePhrases = [
  'coconut milk',
  'oat milk',
  'almond milk',
  'soy milk',
  'rice milk',
  'cashew milk',
  'peanut butter',
  'almond butter',
  'cashew butter',
  'sunflower butter',
  'nut butter',
  'apple butter',
  'cocoa butter',
];

export const mainIngredientKeywords: Record<string, string[]> = {
  Chicken: ['chicken'],
  Beef: ['beef', 'steak', 'thin beef', 'ground beef'],
  'Ground turkey': ['turkey', 'ground turkey'],
  Fish: ['salmon', 'fish', 'tuna', 'cod', 'white fish', 'anchovy', 'halibut', 'trout'],
  Shrimp: ['shrimp', 'prawn'],
  Eggs: ['egg', 'fried egg'],
  Tofu: ['tofu'],
  Beans: ['black bean', 'white bean', 'kidney bean', 'pinto bean', 'cannellini', 'chickpea', 'lentil'],
  Pasta: ['pasta', 'spaghetti', 'rigatoni', 'linguine', 'orecchiette', 'penne', 'orzo', 'noodle'],
  Rice: ['rice', 'basmati', 'jasmine rice'],
};

export const cuisineKeywords: Record<string, string[]> = {
  American: ['american', 'southern', 'cajun'],
  Italian: ['italian'],
  Mexican: ['mexican', 'baja'],
  Mediterranean: ['mediterranean', 'greek', 'israeli', 'levantine', 'lebanese', 'north african', 'moroccan'],
  Chinese: ['chinese'],
  Japanese: ['japanese'],
  Korean: ['korean'],
  Thai: ['thai'],
  Indian: ['indian'],
  'Middle Eastern': ['middle eastern', 'levantine', 'israeli', 'yemeni', 'syrian', 'iraqi', 'persian'],
  'Tex-Mex': ['tex-mex'],
};

export type VibeHint = {
  tags?: string[];
  lanes?: string[];
  formats?: string[];
  ingredients?: string[];
};

export const vibeHints: Record<string, VibeHint> = {
  Healthy: { tags: ['healthy', 'bright', 'fresh', 'light', 'herby', 'lean'], lanes: ['Mediterranean home cooking'] },
  'Comfort food': {
    tags: ['comfort', 'cozy', 'cheesy', 'creamy', 'slow comfort'],
    lanes: ['Creamy, spicy, cozy', 'Spiced rice and slow comfort'],
  },
  'Rice bowl energy': { tags: ['rice bowl', 'rice', 'bowl'], lanes: ['Rice bowl energy'], formats: ['bowl', 'rice bowl', 'rice plate'] },
  'High-protein': {
    tags: ['protein', 'high-protein', 'lean'],
    ingredients: ['chicken', 'beef', 'turkey', 'salmon', 'shrimp', 'tofu', 'egg', 'steak', 'greek yogurt'],
  },
  'Meat-heavy': { tags: ['meat', 'meaty'], ingredients: ['chicken', 'beef', 'steak', 'pork', 'sausage', 'lamb', 'ground beef', 'thin beef'] },
  Crispy: { tags: ['crispy', 'crunchy', 'charred', 'crackly'], formats: ['sheet pan'] },
  Creamy: { tags: ['creamy', 'cheesy'], ingredients: ['greek yogurt', 'cream', 'crema', 'feta', 'parmesan', 'cheese', 'tahini', 'coconut milk'] },
  Spicy: {
    tags: ['spicy', 'gochujang', 'harissa', 'chili', 'hot'],
    ingredients: ['gochujang', 'harissa', 'jalapeno', 'chili crisp', 'hot sauce', 'chipotle', 'chili flake', 'chili powder'],
  },
  Light: { tags: ['light', 'bright', 'fresh', 'herby'], formats: ['salad plate', 'plate'] },
  Cheap: { tags: ['cheap', 'budget', 'pantry'], ingredients: ['egg', 'rice', 'pasta', 'black bean', 'white bean', 'chickpea', 'lentil', 'potato'] },
  'Date night': { tags: ['date', 'date night', 'fancy'], ingredients: ['salmon', 'steak', 'shrimp'], formats: ['plate', 'roast', 'platter'] },
  'Family-friendly': { tags: ['family', 'family-friendly', 'comfort', 'cheesy', 'weeknight', 'kid'] },
  'Low-cleanup': { tags: ['sheet pan', 'one-pan', 'skillet', 'one-pot'], formats: ['sheet pan', 'skillet', 'stew', 'curry', 'rice pot'] },
};

export const cookingMethodHints: Record<string, VibeHint> = {
  'Air fryer': { formats: ['sheet pan'], tags: ['crispy', 'crunchy'] },
  'Sheet pan': { formats: ['sheet pan', 'roast', 'bake'], tags: ['sheet pan', 'roasted'] },
  'One-pan': { formats: ['skillet', 'sheet pan', 'plate'], tags: ['skillet', 'one-pan'] },
  'One-pot': { formats: ['stew', 'curry', 'rice pot', 'braise', 'simmered plate'], tags: ['one-pot', 'cozy'] },
  Stovetop: { formats: ['skillet', 'tacos', 'noodle bowl', 'noodles', 'pasta', 'wraps', 'quesadilla'], tags: ['skillet', 'stovetop'] },
  Oven: { formats: ['roast', 'bake', 'sheet pan'], tags: ['roasted', 'baked'] },
  Grill: { formats: ['platter'], tags: ['grilled', 'charred'] },
  'No-cook': { formats: ['salad plate'], tags: ['no-cook', 'salad', 'fresh'] },
  'Slow cooker': { formats: ['stew', 'braise'], tags: ['slow', 'cozy', 'slow comfort'] },
  'Instant Pot': { formats: ['stew', 'curry', 'rice pot', 'braise'], tags: ['cozy'] },
};
