import {
  BehaviorState,
  Category,
  GroceryList,
  GroceryListEntry,
  GroceryMemoryItem,
  MealSuggestion,
  ReceiptItem,
  ScanConfidence,
  SpendingInsight,
  SpendingStore,
  StoreSection,
} from '../types';
import { getDaysSince } from './date';

const normalizationMap: Record<string, string> = {
  'BNNA ORG': 'bananas',
  'GRK YGRT': 'Greek yogurt',
  'GREEK YOGURT': 'Greek yogurt',
  'CHKN THGH': 'chicken thighs',
  'SPINACH BAG': 'spinach',
  OATMILK: 'oat milk',
  'OAT MILK': 'oat milk',
  'EGGS DZ': 'eggs',
  'JASMINE RICE': 'jasmine rice',
  ROMAINE: 'romaine',
  TORTILLAS: 'tortillas',
  CUKES: 'cucumbers',
  CUCUMBERS: 'cucumbers',
  'RDS MARINARA': "Rao's marinara",
  'FRZ JSM RICE': 'frozen jasmine rice',
  'PAPR TWLS': 'paper towels',
  'PAPER TOWELS': 'paper towels',
};

export function normalizeReceiptItemName(rawName: string): string {
  const cleaned = rawName.trim().replace(/\s+/g, ' ').toUpperCase();
  if (normalizationMap[cleaned]) return normalizationMap[cleaned];

  return rawName
    .toLowerCase()
    .replace(/\b(org|bag|dz|pkg|ea|lb)\b/g, '')
    .replace(/[^a-z0-9\s']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function parseManualItemNames(value: string): string[] {
  const seen = new Set<string>();
  return value
    .split(/[\n,;]+/)
    .map((item) => normalizeReceiptItemName(item))
    .filter((item) => {
      if (!item) return false;
      const key = normalizeIngredientKey(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

// Synonyms, regional spellings, and varietals that mean the same ingredient. Curated on
// purpose: it maps look-alikes onto a shared key (so a scan checks off the list item even
// when the words differ) WITHOUT collapsing genuinely different foods. Note the deliberate
// non-merges, e.g. "sweet potato" stays distinct from "potato" and "green onion" (a scallion)
// stays distinct from "onion".
const ingredientSynonyms: Record<string, string> = {
  // Plurals / simple forms.
  lemons: 'lemon',
  limes: 'lime',
  tomatoes: 'tomato',
  potatoes: 'potato',
  carrots: 'carrot',
  cucumbers: 'cucumber',
  scallions: 'scallion',
  onions: 'onion',
  peppers: 'pepper',
  berries: 'berry',
  eggs: 'egg',
  noodles: 'noodle',
  tortillas: 'tortilla',
  olives: 'olive',
  mushrooms: 'mushroom',
  // Proteins.
  thighs: 'chicken',
  'chicken thighs': 'chicken',
  'chicken thigh': 'chicken',
  'chicken cutlets': 'chicken',
  'chicken cutlet': 'chicken',
  'chicken breast': 'chicken',
  'chicken breasts': 'chicken',
  'chicken tenders': 'chicken',
  'chicken tender': 'chicken',
  'ground chicken': 'chicken',
  'ground turkey': 'turkey',
  'ground beef': 'ground beef',
  'minced beef': 'ground beef',
  'ground meat': 'ground beef',
  hamburger: 'ground beef',
  'hamburger meat': 'ground beef',
  prawn: 'shrimp',
  prawns: 'shrimp',
  // Produce: regional names and varietals that fold to the base ingredient.
  'green onion': 'scallion',
  'green onions': 'scallion',
  'spring onion': 'scallion',
  'spring onions': 'scallion',
  'red onion': 'onion',
  'yellow onion': 'onion',
  'white onion': 'onion',
  aubergine: 'eggplant',
  courgette: 'zucchini',
  capsicum: 'bell pepper',
  'bell peppers': 'bell pepper',
  'red bell pepper': 'bell pepper',
  'green bell pepper': 'bell pepper',
  'yellow bell pepper': 'bell pepper',
  'orange bell pepper': 'bell pepper',
  'sweet pepper': 'bell pepper',
  garbanzo: 'chickpea',
  'garbanzo bean': 'chickpea',
  'garbanzo beans': 'chickpea',
  chickpeas: 'chickpea',
  cilantro: 'cilantro',
  coriander: 'cilantro',
  'coriander leaves': 'cilantro',
  yam: 'sweet potato',
  yams: 'sweet potato',
  cremini: 'mushroom',
  'cremini mushroom': 'mushroom',
  'baby bella': 'mushroom',
  'button mushroom': 'mushroom',
  'white mushroom': 'mushroom',
  portobello: 'mushroom',
  'roma tomato': 'tomato',
  'plum tomato': 'tomato',
  'vine tomato': 'tomato',
  'cherry tomato': 'tomato',
  'grape tomato': 'tomato',
  // Pantry / dairy.
  'jasmine rice': 'rice',
  'frozen jasmine rice': 'rice',
  'basmati rice': 'rice',
  'white rice': 'rice',
  'brown rice': 'rice',
  'all purpose flour': 'flour',
  'allpurpose flour': 'flour',
  'plain flour': 'flour',
  'ap flour': 'flour',
  'kosher salt': 'salt',
  'sea salt': 'salt',
  'table salt': 'salt',
  'olive oil': 'olive oil',
  'extra virgin olive oil': 'olive oil',
  evoo: 'olive oil',
  'unsalted butter': 'butter',
  'salted butter': 'butter',
  'whole milk': 'milk',
  'skim milk': 'milk',
  '2 milk': 'milk',
  '2 percent milk': 'milk',
  'greek yogurt': 'greek yogurt',
  'greek yoghurt': 'greek yogurt',
  yoghurt: 'yogurt',
  'black beans': 'black bean',
  'cheddar cheese': 'cheddar',
  'sharp cheddar': 'cheddar',
  'parmesan cheese': 'parmesan',
  parmigiano: 'parmesan',
  'parmigiano reggiano': 'parmesan',
  'soy sauce': 'soy sauce',
  shoyu: 'soy sauce',
  'light soy sauce': 'soy sauce',
  'dark soy sauce': 'soy sauce',
};

function singularizeWord(word: string): string {
  if (word.length > 4 && word.endsWith('ies')) return `${word.slice(0, -3)}y`;
  if (word.length > 4 && (word.endsWith('oes') || word.endsWith('ses') || word.endsWith('xes') || word.endsWith('hes'))) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss') && !word.endsWith('us')) return word.slice(0, -1);
  return word;
}

function singularizeWords(value: string): string {
  return value
    .split(' ')
    .filter(Boolean)
    .map(singularizeWord)
    .join(' ');
}

export function normalizeIngredientKey(name: string): string {
  // Strip descriptors that don't change which ingredient it is (prep, size, packaging).
  // Colors and words like "sweet"/"green" are deliberately NOT stripped here — those can
  // distinguish ingredients (sweet potato, green onion) and are handled by the map above.
  const stripped = normalizeReceiptItemName(name)
    .toLowerCase()
    .replace(
      /\b(optional|fresh|whole|large|small|mini|quick|herby|toasted|grated|sliced|diced|chopped|minced|shredded|crushed|peeled|halved|cubed|crumbled|canned|jarred|frozen|thawed|baby|seedless|pitted|softened|melted|finely|coarsely|thinly|organic|org|plain|ripe|bag|bunch|pack|package|pkg|carton|container|bottle|box|jar|dozen|dz|boneless|skinless|low fat|lowfat|reduced fat|part skim|nonfat|full fat)\b/g,
      '',
    )
    .replace(/\b(cutlets|thighs|breasts)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (ingredientSynonyms[stripped]) return ingredientSynonyms[stripped];
  const singular = singularizeWords(stripped);
  if (ingredientSynonyms[singular]) return ingredientSynonyms[singular];
  return singular;
}

export function categorizingRules(name: string): Category {
  const item = name.toLowerCase();
  if (
    /(apple|apricot|artichoke|arugula|asparagus|avocado|banana|basil|bean sprout|beet|berries|berry|bok choy|broccoli|brussels|cabbage|carrot|cauliflower|celery|cilantro|corn|cucumber|eggplant|fennel|garlic|ginger|grape|green bean|herb|kale|leek|lemon|lettuce|lime|mango|melon|mushroom|okra|onion|orange|parsley|pea|peach|pear|pepper|pineapple|plum|potato|radish|romaine|scallion|shallot|spinach|squash|tomato|zucchini)/.test(
      item,
    )
  ) {
    return 'Produce';
  }
  if (/(chicken|turkey|salmon|tuna|tofu|steak|protein|fish|lamb|beef|pork|shrimp|ground meat)/.test(item)) return 'Protein';
  if (/(yogurt|egg|milk|feta|cheese|dairy)/.test(item)) return 'Dairy';
  if (/(frozen)/.test(item)) return 'Frozen';
  if (/(rice|coffee|tortilla|pasta|beans|lentil|couscous|orzo|noodle|breadcrumb|flour|sourdough|peanut butter|bread|marinara|curry block|coconut milk|tomato paste)/.test(item)) return 'Pantry';
  if (/(chip|snack|bar|cracker)/.test(item)) return 'Snacks';
  if (/(paper towel|foil|soap|trash)/.test(item)) return 'Household';
  if (/(oil|salsa|hummus|chili crisp|spread|sauce|harissa|gochujang|chipotle|tahini|olive|pickle|capers|butter|soy|sesame|spice|cumin|paprika|cinnamon|cardamom|salt|pepper)/.test(item)) return 'Condiments';
  if (/(coffee|seltzer|juice)/.test(item)) return 'Drinks';
  return 'Other';
}

export function categorizeGroceryItem(name: string): Category {
  return categorizingRules(name);
}

export function sectionForCategory(category: Category): StoreSection {
  if (category === 'Protein') return 'Meat/Protein';
  if (category === 'Condiments' || category === 'Drinks') return 'Pantry';
  if (category === 'Produce') return 'Produce';
  if (category === 'Dairy') return 'Dairy';
  if (category === 'Frozen') return 'Frozen';
  if (category === 'Snacks') return 'Snacks';
  if (category === 'Household') return 'Household';
  if (category === 'Pantry') return 'Pantry';
  return 'Other';
}

export function detectUsuals(items: GroceryMemoryItem[]): GroceryMemoryItem[] {
  return items.filter((item) => item.isUsual || item.purchaseCount >= 3 || item.userOftenAddsManually >= 2);
}

export function calculateProbablyDueSoon(item: GroceryMemoryItem): 'buyNow' | 'maybeBuy' | 'alreadyHave' | 'neutral' {
  const daysSince = getDaysSince(item.lastBoughtDate);
  const averageInterval = item.averageDaysBetweenPurchases;

  if (item.isUsual && daysSince >= averageInterval) return 'buyNow';
  if (item.isUsual && averageInterval - daysSince <= 2 && averageInterval - daysSince >= 0) return 'maybeBuy';
  if (daysSince < Math.max(averageInterval - 7, 4)) return 'alreadyHave';
  if (item.perishable && daysSince <= item.estimatedShelfLifeDays) return 'alreadyHave';
  return 'neutral';
}

function entryFromMemory(item: GroceryMemoryItem, reason: string, source: GroceryListEntry['source'], usedForMeals: string[] = []): GroceryListEntry {
  return {
    id: `list-${item.id}`,
    itemId: item.id,
    name: item.name,
    category: item.category,
    section: item.section,
    reason,
    source,
    priority: item.suggestionPriority,
    usedForMeals,
  };
}

function entryFromName(name: string, source: GroceryListEntry['source'], reason: string, priority = 80, usedForMeals: string[] = []): GroceryListEntry {
  const category = categorizeGroceryItem(name);
  return {
    id: `${source}-${normalizeIngredientKey(name).replace(/[^a-z0-9]+/g, '-')}`,
    name,
    category,
    section: sectionForCategory(category),
    reason,
    source,
    priority,
    usedForMeals,
  };
}

function hasName(entries: GroceryListEntry[], name: string): boolean {
  const key = normalizeIngredientKey(name);
  return entries.some((entry) => normalizeIngredientKey(entry.name) === key);
}

export function generateGroceryList(items: GroceryMemoryItem[], behavior: BehaviorState, mealSuggestions: MealSuggestion[]): GroceryList {
  const buyNow: GroceryListEntry[] = [];
  const maybeBuy: GroceryListEntry[] = [];
  const probablyAlreadyHave: GroceryListEntry[] = [];
  const alreadyHaveKeys = new Set(behavior.alreadyHaveNames.map(normalizeIngredientKey));
  const usedFor = (name: string) => behavior.usedForMeals[normalizeIngredientKey(name)] ?? [];

  items.forEach((item) => {
    const wasRemoved = behavior.removedIds.includes(item.id);
    const wasBought = behavior.boughtIds.includes(item.id);
    const markedAlreadyHave = behavior.alreadyHaveIds.includes(item.id);
    const scanStatus = behavior.fridgeSeen[item.name.toLowerCase()];
    const itemKey = normalizeIngredientKey(item.name);
    if (wasRemoved || wasBought) return;

    if (markedAlreadyHave || alreadyHaveKeys.has(itemKey) || scanStatus === 'clearlySeen') {
      const reason = scanStatus === 'clearlySeen' ? 'Seen in your fridge check.' : 'You marked this as already have.';
      probablyAlreadyHave.push(entryFromMemory(item, reason, 'scan', usedFor(item.name)));
      return;
    }

    if (scanStatus === 'maybeLow') {
      maybeBuy.push(entryFromMemory(item, 'Fridge scan saw it, but it looked low.', 'scan', usedFor(item.name)));
      return;
    }

    const dueState = calculateProbablyDueSoon(item);
    const daysSince = getDaysSince(item.lastBoughtDate);
    const priority = adjustSuggestionPriority(item, behavior);
    const adjusted = { ...item, suggestionPriority: priority };

    if (dueState === 'buyNow') {
      buyNow.push(entryFromMemory(adjusted, `${capitalize(item.name)} ${verbForItem(item.name)} usually due every ${item.averageDaysBetweenPurchases} days. Last bought ${daysSince} days ago.`, 'due', usedFor(item.name)));
    } else if (dueState === 'maybeBuy') {
      maybeBuy.push(entryFromMemory(adjusted, `Last bought ${daysSince} days ago. Check before committing.`, 'usual', usedFor(item.name)));
    } else if (dueState === 'alreadyHave') {
      const reason = item.perishable
        ? `${capitalize(item.name)} showed up recently and may still be around.`
        : `${capitalize(item.name)} ${pastVerbForItem(item.name)} bought recently and usually lasts.`;
      probablyAlreadyHave.push(entryFromMemory(adjusted, reason, 'overbuy', usedFor(item.name)));
    }
  });

  behavior.alreadyHaveNames.forEach((name) => {
    if (!hasName(probablyAlreadyHave, name) && !hasName(buyNow, name) && !hasName(maybeBuy, name)) {
      probablyAlreadyHave.push(entryFromName(name, 'manual', 'Marked as already have.', 75, usedFor(name)));
    }
  });

  // Anything already owned — whether flagged by name, seen in a receipt/fridge scan
  // (now living in `probablyAlreadyHave` as a memory item), or marked by hand — should
  // suppress a meal/manual item for the same ingredient so a scan checks it off even when
  // the wording differs (e.g. "jasmine rice" reconciles against an owned "rice").
  const ownedKeys = new Set<string>([...alreadyHaveKeys, ...probablyAlreadyHave.map((entry) => normalizeIngredientKey(entry.name))]);

  behavior.manuallyAddedNames.forEach((name) => {
    if (!ownedKeys.has(normalizeIngredientKey(name)) && !hasName(buyNow, name) && !hasName(maybeBuy, name) && !hasName(probablyAlreadyHave, name)) {
      buyNow.push(entryFromName(name, 'manual', 'Added by you.', 95, usedFor(name)));
    }
  });

  behavior.mealAddedNames.forEach((name) => {
    if (!ownedKeys.has(normalizeIngredientKey(name)) && !hasName(buyNow, name) && !hasName(maybeBuy, name) && !hasName(probablyAlreadyHave, name)) {
      buyNow.push(entryFromName(name, 'meal', 'Needed for a dinner you picked.', 90, usedFor(name)));
    }
  });

  const mealUnlockNames = ['scallions', 'lemon', 'tortillas', 'romaine', 'red onion'];
  const mealUnlockItems = mealUnlockNames.map((name) => entryFromName(name, 'meal', 'Unlocks multiple quick dinners.', 70));

  const overbuyAlerts = identifyLikelyOverbuys(items, { buyNow, maybeBuy }, behavior);

  return {
    buyNow: dedupeEntries(sortListEntries(buyNow)).slice(0, 18),
    maybeBuy: dedupeEntries(sortListEntries(maybeBuy)).slice(0, 10),
    probablyAlreadyHave: dedupeEntries(sortListEntries(probablyAlreadyHave)).slice(0, 18),
    checkedOff: behavior.checkedOffEntries,
    mealUnlocks: {
      title: 'Buy these 5 things to unlock 4 dinners.',
      items: mealUnlockItems,
      meals: mealSuggestions.slice(0, 4).map((meal) => meal.name.toLowerCase()),
    },
    overbuyAlerts,
  };
}

function dedupeEntries(entries: GroceryListEntry[]): GroceryListEntry[] {
  const byKey = new Map<string, GroceryListEntry>();
  entries.forEach((entry) => {
    const key = normalizeIngredientKey(entry.name);
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, entry);
      return;
    }
    byKey.set(key, {
      ...existing,
      priority: Math.max(existing.priority, entry.priority),
      usedForMeals: unique([...(existing.usedForMeals ?? []), ...(entry.usedForMeals ?? [])]),
    });
  });
  return Array.from(byKey.values());
}

export function groupListItemsByStoreSection(entries: GroceryListEntry[]): Record<StoreSection, GroceryListEntry[]> {
  const sections: StoreSection[] = ['Produce', 'Meat/Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Other'];
  return sections.reduce(
    (grouped, section) => {
      grouped[section] = entries.filter((entry) => entry.section === section);
      return grouped;
    },
    {} as Record<StoreSection, GroceryListEntry[]>,
  );
}

export function identifyLikelyOverbuys(items: GroceryMemoryItem[], list: Pick<GroceryList, 'buyNow' | 'maybeBuy'>, behavior: BehaviorState): string[] {
  const candidateNames = new Set([...list.buyNow, ...list.maybeBuy].map((entry) => normalizeIngredientKey(entry.name)));
  const alerts: string[] = [];

  items.forEach((item) => {
    const daysSince = getDaysSince(item.lastBoughtDate);
    const scanStatus = behavior.fridgeSeen[item.name.toLowerCase()];
    if (scanStatus === 'clearlySeen') {
      alerts.push(`Check ${item.name} before buying. ${seenSentenceSubject(item.name)} seen in your fridge scan.`);
      return;
    }
    if (candidateNames.has(normalizeIngredientKey(item.name)) && !item.perishable && daysSince < item.averageDaysBetweenPurchases / 2) {
      alerts.push(`Don't buy ${item.name}. You bought it ${daysSince} days ago and usually buy it every ${item.averageDaysBetweenPurchases} days.`);
    }
  });

  const rice = items.find((item) => item.name === 'rice');
  if (rice && !alerts.some((alert) => alert.includes('rice'))) {
    alerts.push(`Don't buy rice. You bought it ${getDaysSince(rice.lastBoughtDate)} days ago and usually buy it every ${rice.averageDaysBetweenPurchases} days.`);
  }

  return alerts.slice(0, 3);
}

export function calculateSpendingInsights(categorySpend: SpendingInsight['categorySpend'], storeSpend: SpendingStore[]): SpendingInsight {
  const monthlySpend = 612;
  const topStore = storeSpend.reduce((top, store) => (store.amount > top.amount ? store : top), storeSpend[0]);
  const snacks = categorySpend.find((category) => category.name === 'Snacks');
  const categoryInsight = snacks ? `Snacks are up $${Math.round(snacks.amount - snacks.previousAmount)} from last month.` : 'Produce is carrying dinner this month.';

  return {
    monthlySpend,
    topStore: topStore.store,
    topStoreShare: Math.round((topStore.amount / monthlySpend) * 100),
    categoryInsight,
    plainEnglishInsight: `You spent $${monthlySpend} this month. ${categoryInsight}`,
    categorySpend,
    storeSpend,
    repeatItems: ['oat milk', 'bananas', 'Greek yogurt', 'coffee'],
    expensiveItems: ['berries', 'olive oil', 'paper towels'],
    overbuyAlerts: [
      'You bought rice twice in 12 days. Check before rebuying.',
      'Oat milk is usually due every 6 days. Last bought 8 days ago.',
    ],
    staplesWeeklyCost: 91,
  };
}

export function updateLocalStateAfterUserAction(behavior: BehaviorState, action: 'alreadyHave' | 'bought' | 'removed', itemId: string): BehaviorState {
  if (action === 'alreadyHave') {
    return {
      ...behavior,
      alreadyHaveIds: unique([...behavior.alreadyHaveIds, itemId]),
      boughtIds: behavior.boughtIds.filter((id) => id !== itemId),
      removedIds: behavior.removedIds.filter((id) => id !== itemId),
    };
  }
  if (action === 'bought') {
    return {
      ...behavior,
      boughtIds: unique([...behavior.boughtIds, itemId]),
      alreadyHaveIds: behavior.alreadyHaveIds.filter((id) => id !== itemId),
      removedIds: behavior.removedIds.filter((id) => id !== itemId),
    };
  }
  return {
    ...behavior,
    removedIds: unique([...behavior.removedIds, itemId]),
    deleteCounts: {
      ...behavior.deleteCounts,
      [itemId]: (behavior.deleteCounts[itemId] ?? 0) + 1,
    },
  };
}

export function adjustSuggestionPriority(item: GroceryMemoryItem, behavior: BehaviorState): number {
  const deletedPenalty = (behavior.deleteCounts[item.id] ?? item.userOftenDeletes) * 8;
  const manualBoost = (behavior.addCounts[item.name.toLowerCase()] ?? item.userOftenAddsManually) * 7;
  return Math.max(1, item.suggestionPriority - deletedPenalty + manualBoost);
}

export function buildReceiptItems(rawItems: Array<{ rawName: string; price: number; isGrocery?: boolean }>): ReceiptItem[] {
  return rawItems.map((item, index) => {
    const normalizedName = normalizeReceiptItemName(item.rawName);
    const category = categorizeGroceryItem(normalizedName);
    return {
      id: `receipt-item-${index}-${normalizedName.replace(/[^a-z0-9]+/gi, '-')}`,
      rawName: item.rawName,
      normalizedName,
      category,
      section: sectionForCategory(category),
      price: item.price,
      isGrocery: item.isGrocery ?? true,
    };
  });
}

export function scanConfidenceLabel(confidence: ScanConfidence): string {
  if (confidence === 'clearlySeen') return 'Clearly seen';
  if (confidence === 'maybeLow') return 'Maybe low';
  return 'Could not tell';
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function verbForItem(value: string): 'is' | 'are' {
  const singularNames = [
    'rice',
    'coffee',
    'oat milk',
    'Greek yogurt',
    'ground turkey',
    'olive oil',
    'peanut butter',
    'hummus',
    'feta',
    'pasta',
    'spinach',
    'romaine',
    'broccoli',
    'sourdough',
    'garlic',
    'salsa',
    'chili crisp',
    "Rao's marinara",
    'frozen jasmine rice',
  ];
  return singularNames.includes(value) || value.endsWith('milk') ? 'is' : 'are';
}

function pastVerbForItem(value: string): 'was' | 'were' {
  return verbForItem(value) === 'is' ? 'was' : 'were';
}

function seenSentenceSubject(value: string): 'It was' | 'They were' {
  return verbForItem(value) === 'is' ? 'It was' : 'They were';
}

function sortListEntries(entries: GroceryListEntry[]): GroceryListEntry[] {
  return [...entries].sort((a, b) => b.priority - a.priority || a.name.localeCompare(b.name));
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}
