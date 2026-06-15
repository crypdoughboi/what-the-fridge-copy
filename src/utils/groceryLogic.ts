import {
  BehaviorState,
  Category,
  GroceryList,
  GroceryListEntry,
  GroceryMemoryItem,
  InventoryItemState,
  KitchenInventoryItem,
  MealIdea,
  MealSuggestion,
  ReceiptItem,
  ScanConfidence,
  SeedMealIngredient,
  SpendingInsight,
  SpendingStore,
  StorageLocation,
  StoreSection,
} from '../types';
import { getDaysSince } from './date';
import { findSubstitutionMatch } from './ingredientSubstitutions';

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

export function normalizeIngredientKey(name: string): string {
  const normalized = normalizeReceiptItemName(name)
    .toLowerCase()
    .replace(
      /\b(optional|fresh|whole|large|small|mini|quick|herby|toasted|grated|sliced|diced|chopped|organic|org|plain|ripe|bag|bunch|pack|package|pkg|carton|container|bottle|box|jar|dozen|dz|boneless|skinless|low fat|nonfat|full fat)\b/g,
      '',
    )
    .replace(/\b(cutlets|thighs|breasts)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const direct: Record<string, string> = {
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
    thighs: 'chicken',
    'chicken thighs': 'chicken',
    'chicken cutlets': 'chicken',
    'chicken breast': 'chicken',
    'chicken breasts': 'chicken',
    'ground chicken': 'chicken',
    'ground turkey': 'turkey',
    'jasmine rice': 'rice',
    'frozen jasmine rice': 'rice',
    'greek yogurt': 'greek yogurt',
    'greek yoghurt': 'greek yogurt',
    'yoghurt': 'yogurt',
    'black beans': 'black bean',
    'red onion': 'onion',
    'yellow onion': 'onion',
    'white onion': 'onion',
  };

  if (direct[normalized]) return direct[normalized];
  if (normalized.endsWith('ies') && normalized.length > 4) return `${normalized.slice(0, -3)}y`;
  if (normalized.endsWith('es') && normalized.length > 4) return normalized.slice(0, -2);
  if (normalized.endsWith('s') && normalized.length > 3 && !normalized.endsWith('ss')) return normalized.slice(0, -1);
  return normalized;
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

export function generateGroceryList(
  items: GroceryMemoryItem[],
  behavior: BehaviorState,
  mealSuggestions: MealSuggestion[],
  plannedMeals: MealIdea[] = [],
  kitchenItems: KitchenInventoryItem[] = buildKitchenInventory(items, behavior),
): GroceryList {
  const buyNow: GroceryListEntry[] = [];
  const maybeBuy: GroceryListEntry[] = [];
  const probablyAlreadyHave: GroceryListEntry[] = [];
  const availableKeys = new Set(kitchenItems.filter((item) => isInventoryAvailable(item.state)).map((item) => item.key));
  const runningLowKeys = new Set(kitchenItems.filter((item) => item.state === 'running_low').map((item) => item.key));
  const alreadyHaveKeys = new Set([...behavior.alreadyHaveNames.map(normalizeIngredientKey), ...availableKeys]);
  const usedFor = (name: string) => behavior.usedForMeals[normalizeIngredientKey(name)] ?? [];

  items.forEach((item) => {
    const wasRemoved = behavior.removedIds.includes(item.id);
    const wasBought = behavior.boughtIds.includes(item.id);
    const markedAlreadyHave = behavior.alreadyHaveIds.includes(item.id);
    const scanStatus = behavior.fridgeSeen[item.name.toLowerCase()];
    const itemKey = normalizeIngredientKey(item.name);
    if (wasRemoved || wasBought) return;
    const kitchenState = kitchenItems.find((kitchenItem) => kitchenItem.key === itemKey)?.state;

    if (kitchenState === 'gone') return;

    if (runningLowKeys.has(itemKey) || kitchenState === 'running_low' || scanStatus === 'maybeLow') {
      maybeBuy.push(entryFromMemory(item, 'Kitchen says this is running low.', 'scan', usedFor(item.name)));
      return;
    }

    if (markedAlreadyHave || alreadyHaveKeys.has(itemKey) || scanStatus === 'clearlySeen') {
      const reason =
        kitchenState === 'use_soon'
          ? 'Use soon. It still counts for dinner tonight.'
          : scanStatus === 'clearlySeen'
            ? 'Seen in your fridge check.'
            : 'Kitchen says you probably have this.';
      probablyAlreadyHave.push(entryFromMemory(item, reason, 'scan', usedFor(item.name)));
      return;
    }

    if (kitchenState === 'probably_gone') {
      maybeBuy.push(entryFromMemory(item, 'Probably gone. Confirm before dinner depends on it.', 'overbuy', usedFor(item.name)));
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
      const state = kitchenItems.find((item) => item.key === normalizeIngredientKey(name))?.state;
      if (state !== 'gone' && state !== 'probably_gone' && state !== 'running_low') {
        probablyAlreadyHave.push(entryFromName(name, 'manual', 'Marked as already have.', 75, usedFor(name)));
      }
    }
  });

  behavior.manuallyAddedNames.forEach((name) => {
    if (!alreadyHaveKeys.has(normalizeIngredientKey(name)) && !hasName(buyNow, name) && !hasName(maybeBuy, name) && !hasName(probablyAlreadyHave, name)) {
      buyNow.push(entryFromName(name, 'manual', 'Added by you.', 95, usedFor(name)));
    }
  });

  const selectedMealEntries = buildSelectedMealEntries(plannedMeals, kitchenItems);

  behavior.mealAddedNames.forEach((name) => {
    if (
      !hasName(selectedMealEntries, name) &&
      !alreadyHaveKeys.has(normalizeIngredientKey(name)) &&
      !hasName(buyNow, name) &&
      !hasName(maybeBuy, name) &&
      !hasName(probablyAlreadyHave, name)
    ) {
      buyNow.push(entryFromName(name, 'meal', 'Needed for a dinner you picked.', 90, usedFor(name)));
    }
  });

  selectedMealEntries.forEach((entry) => {
    if (!hasName(probablyAlreadyHave, entry.name) && !hasName(buyNow, entry.name) && !hasName(maybeBuy, entry.name)) {
      buyNow.push(entry);
    }
  });

  const mealUnlockNames = ['scallions', 'lemon', 'tortillas', 'romaine', 'red onion'];
  const mealUnlockItems = mealUnlockNames.map((name) => entryFromName(name, 'meal', 'Unlocks multiple quick dinners.', 70));

  const overbuyAlerts = identifyLikelyOverbuys(items, { buyNow, maybeBuy }, behavior);
  const selectedUnlockItems = dedupeEntries(selectedMealEntries);

  return {
    buyNow: dedupeEntries(sortListEntries(buyNow)).slice(0, 18),
    maybeBuy: dedupeEntries(sortListEntries(maybeBuy)).slice(0, 10),
    probablyAlreadyHave: dedupeEntries(sortListEntries(probablyAlreadyHave)).slice(0, 18),
    checkedOff: behavior.checkedOffEntries,
    mealUnlocks: {
      title: plannedMeals.length ? 'Shop once for selected dinners.' : 'Buy these 5 things to unlock 4 dinners.',
      items: plannedMeals.length ? selectedUnlockItems.slice(0, 8) : mealUnlockItems,
      meals: plannedMeals.length ? plannedMeals.map((meal) => meal.name) : mealSuggestions.slice(0, 4).map((meal) => meal.name.toLowerCase()),
    },
    overbuyAlerts,
  };
}

export function buildKitchenInventory(items: GroceryMemoryItem[], behavior: BehaviorState): KitchenInventoryItem[] {
  const byKey = new Map<string, KitchenInventoryItem>();

  items.forEach((item) => {
    const key = normalizeIngredientKey(item.name);
    const observedAt = behavior.ownedLastObservedAt[key] ?? item.lastConfirmedAt ?? item.lastBoughtDate;
    const storageLocation = behavior.inventoryStorage[key] ?? item.storageLocation ?? storageFromCategory(item.category);
    const shelfLifeDays = shelfLifeDaysFor(item, storageLocation);
    const expiresAt = behavior.inventoryExpiresAt[key] ?? item.expiresAt ?? addDays(observedAt, shelfLifeDays);
    const daysUntilExpiration = daysUntil(expiresAt);
    const confidenceScore = behavior.inventoryConfidence[key] ?? item.inventoryConfidence ?? confidenceToScore(item.confidence);
    const state = behavior.inventoryStates[key] ?? predictInventoryState(item, behavior, daysUntilExpiration, confidenceScore);

    byKey.set(key, {
      key,
      name: item.name,
      category: item.category,
      section: item.section,
      state,
      confidenceScore: clampConfidence(confidenceScore - confidenceDecay(item, observedAt)),
      storageLocation,
      observedAt,
      expiresAt,
      daysUntilExpiration,
      usedForMeals: behavior.usedForMeals[key] ?? [],
      prompt: promptForInventoryState(state, item.name, daysUntilExpiration),
    });
  });

  behavior.alreadyHaveNames.forEach((name) => {
    const key = normalizeIngredientKey(name);
    if (byKey.has(key)) return;
    const category = categorizeGroceryItem(name);
    const storageLocation = behavior.inventoryStorage[key] ?? storageFromCategory(category);
    const observedAt = behavior.ownedLastObservedAt[key] ?? new Date().toISOString();
    const fallbackItem = createFallbackMemoryForPrediction(name, category);
    const expiresAt = behavior.inventoryExpiresAt[key] ?? addDays(observedAt, shelfLifeDaysFor(fallbackItem, storageLocation));
    const state = behavior.inventoryStates[key] ?? 'confirmed_have';

    byKey.set(key, {
      key,
      name,
      category,
      section: sectionForCategory(category),
      state,
      confidenceScore: behavior.inventoryConfidence[key] ?? 0.88,
      storageLocation,
      observedAt,
      expiresAt,
      daysUntilExpiration: daysUntil(expiresAt),
      usedForMeals: behavior.usedForMeals[key] ?? [],
      prompt: promptForInventoryState(state, name, daysUntil(expiresAt)),
    });
  });

  Object.entries(behavior.fridgeSeen).forEach(([name, scanConfidence]) => {
    const key = normalizeIngredientKey(name);
    const existing = byKey.get(key);
    const state = behavior.inventoryStates[key] ?? (scanConfidence === 'clearlySeen' ? 'confirmed_have' : scanConfidence === 'maybeLow' ? 'running_low' : 'probably_gone');
    if (existing) {
      byKey.set(key, {
        ...existing,
        state,
        confidenceScore: Math.max(existing.confidenceScore, scanConfidence === 'clearlySeen' ? 0.9 : scanConfidence === 'maybeLow' ? 0.62 : 0.3),
        prompt: promptForInventoryState(state, existing.name, existing.daysUntilExpiration),
      });
      return;
    }

    const category = categorizeGroceryItem(name);
    const observedAt = behavior.ownedLastObservedAt[key] ?? new Date().toISOString();
    const fallbackItem = createFallbackMemoryForPrediction(name, category);
    const storageLocation = behavior.inventoryStorage[key] ?? storageFromCategory(category);
    const expiresAt = behavior.inventoryExpiresAt[key] ?? addDays(observedAt, shelfLifeDaysFor(fallbackItem, storageLocation));

    byKey.set(key, {
      key,
      name,
      category,
      section: sectionForCategory(category),
      state,
      confidenceScore: scanConfidence === 'clearlySeen' ? 0.9 : scanConfidence === 'maybeLow' ? 0.62 : 0.3,
      storageLocation,
      observedAt,
      expiresAt,
      daysUntilExpiration: daysUntil(expiresAt),
      usedForMeals: behavior.usedForMeals[key] ?? [],
      prompt: promptForInventoryState(state, name, daysUntil(expiresAt)),
    });
  });

  return Array.from(byKey.values()).sort((a, b) => stateSort(a.state) - stateSort(b.state) || (a.daysUntilExpiration ?? 999) - (b.daysUntilExpiration ?? 999));
}

export function isInventoryAvailable(state: InventoryItemState): boolean {
  return state === 'confirmed_have' || state === 'probably_have' || state === 'use_soon';
}

function buildSelectedMealEntries(plannedMeals: MealIdea[], kitchenItems: KitchenInventoryItem[]): GroceryListEntry[] {
  if (!plannedMeals.length) return [];
  const availableKeys = new Set(kitchenItems.filter((item) => isInventoryAvailable(item.state)).map((item) => item.key));
  const runningLowKeys = new Set(kitchenItems.filter((item) => item.state === 'running_low').map((item) => item.key));
  const entries: GroceryListEntry[] = [];

  plannedMeals.forEach((meal) => {
    getShoppingIngredients(meal).forEach((ingredient) => {
      const key = ingredient.canonicalName || normalizeIngredientKey(ingredient.rawName);
      if (availableKeys.has(key)) return;
      const substitution = findSubstitutionMatch({ ingredientName: ingredient.rawName, ingredientKey: key, ownedKeys: availableKeys });
      if (substitution) return;
      const isRunningLow = runningLowKeys.has(key);
      entries.push(entryFromIngredient(ingredient, meal.name, isRunningLow));
    });
  });

  return dedupeEntries(entries);
}

function entryFromIngredient(ingredient: SeedMealIngredient, mealName: string, runningLow: boolean): GroceryListEntry {
  const name = normalizeReceiptItemName(ingredient.rawName);
  const key = ingredient.canonicalName || normalizeIngredientKey(name);
  return {
    id: `meal-${key.replace(/[^a-z0-9]+/g, '-')}`,
    name,
    category: ingredient.groceryCategory,
    section: ingredient.section,
    quantityLabel: ingredient.displayQuantity,
    reason: runningLow
      ? `${ingredient.displayQuantity ? `${ingredient.displayQuantity}. ` : ''}Running low, needed for ${mealName}.`
      : `${ingredient.displayQuantity ? `${ingredient.displayQuantity}. ` : ''}${ingredient.isPantry ? 'Staple' : 'Needed'} for ${mealName}.`,
    source: 'meal',
    priority: ingredient.isPantry ? 86 : 98,
    usedForMeals: [mealName],
  };
}

function getShoppingIngredients(meal: MealIdea): SeedMealIngredient[] {
  return meal.structuredIngredients.filter((ingredient) => !ingredient.isOptional);
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
      quantityLabel: existing.quantityLabel ?? entry.quantityLabel,
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

function storageFromCategory(category: Category): StorageLocation {
  if (category === 'Frozen') return 'freezer';
  if (category === 'Produce' || category === 'Protein' || category === 'Dairy') return 'fridge';
  if (category === 'Pantry' || category === 'Condiments' || category === 'Snacks' || category === 'Drinks') return 'pantry';
  return 'unknown';
}

function shelfLifeDaysFor(item: Pick<GroceryMemoryItem, 'category' | 'estimatedShelfLifeDays' | 'perishable'>, storage: StorageLocation): number {
  if (storage === 'freezer') return Math.max(item.estimatedShelfLifeDays, 90);
  if (storage === 'pantry' && !item.perishable) return Math.max(item.estimatedShelfLifeDays, 120);
  if (item.category === 'Protein' && storage === 'fridge') return Math.min(item.estimatedShelfLifeDays, 4);
  if (item.category === 'Produce' && storage === 'counter') return Math.min(item.estimatedShelfLifeDays, 5);
  return item.estimatedShelfLifeDays;
}

function addDays(dateString: string, days: number): string {
  const date = new Date(`${dateString.slice(0, 10)}T12:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function daysUntil(dateString: string): number {
  const target = new Date(`${dateString.slice(0, 10)}T12:00:00`).getTime();
  const now = new Date().setHours(12, 0, 0, 0);
  return Math.ceil((target - now) / 86400000);
}

function confidenceToScore(confidence: GroceryMemoryItem['confidence']): number {
  if (confidence === 'high') return 0.9;
  if (confidence === 'medium') return 0.66;
  return 0.38;
}

function predictInventoryState(
  item: GroceryMemoryItem,
  behavior: BehaviorState,
  daysUntilExpiration: number,
  confidenceScore: number,
): InventoryItemState {
  const key = normalizeIngredientKey(item.name);
  const scanStatus = behavior.fridgeSeen[item.name.toLowerCase()];

  if (behavior.consumedAt[key]) return item.perishable ? 'probably_gone' : 'running_low';
  if (scanStatus === 'maybeLow') return 'running_low';
  if (scanStatus === 'clearlySeen') return daysUntilExpiration <= 2 && item.perishable ? 'use_soon' : 'confirmed_have';
  if (daysUntilExpiration < -2 && item.perishable) return 'gone';
  if (daysUntilExpiration < 0 && item.perishable) return 'probably_gone';
  if (daysUntilExpiration <= 2 && item.perishable) return 'use_soon';
  if (item.likelyStillHave && confidenceScore >= 0.78) return 'confirmed_have';
  if (item.likelyStillHave && confidenceScore >= 0.45) return 'probably_have';
  if (!item.perishable && getDaysSince(item.lastBoughtDate) < item.averageDaysBetweenPurchases) return 'probably_have';
  return confidenceScore < 0.4 ? 'probably_gone' : 'probably_have';
}

function confidenceDecay(item: GroceryMemoryItem, observedAt: string): number {
  const days = getDaysSince(observedAt.slice(0, 10));
  if (!item.perishable) return Math.min(0.24, Math.floor(days / 30) * 0.04);
  return Math.min(0.42, days * 0.035);
}

function clampConfidence(value: number): number {
  return Math.max(0.1, Math.min(0.99, Number(value.toFixed(2))));
}

function promptForInventoryState(state: InventoryItemState, name: string, daysUntilExpiration?: number): string {
  if (state === 'use_soon') return `${capitalize(name)} should be used soon.`;
  if (state === 'running_low') return `${capitalize(name)} is running low.`;
  if (state === 'probably_gone') return `${capitalize(name)} is probably gone.`;
  if (state === 'gone') return `${capitalize(name)} is gone.`;
  if (state === 'confirmed_have') return `${capitalize(name)} was confirmed recently.`;
  if (typeof daysUntilExpiration === 'number' && daysUntilExpiration <= 4) return `Confirm ${name} before planning around it.`;
  return `Probably have ${name}.`;
}

function createFallbackMemoryForPrediction(name: string, category: Category): Pick<GroceryMemoryItem, 'category' | 'estimatedShelfLifeDays' | 'perishable'> {
  return {
    category,
    perishable: ['Produce', 'Protein', 'Dairy'].includes(category),
    estimatedShelfLifeDays: category === 'Produce' ? 6 : category === 'Protein' ? 4 : category === 'Dairy' ? 12 : 90,
  };
}

function stateSort(state: InventoryItemState): number {
  const order: Record<InventoryItemState, number> = {
    use_soon: 1,
    running_low: 2,
    confirmed_have: 3,
    probably_have: 4,
    probably_gone: 5,
    gone: 6,
  };
  return order[state];
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
