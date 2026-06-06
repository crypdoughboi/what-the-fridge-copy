export type Tab = 'home' | 'list' | 'scan' | 'meals' | 'spend';

export type Screen =
  | 'auth'
  | 'onboarding'
  | 'onboardingSuccess'
  | 'home'
  | 'list'
  | 'scan'
  | 'meals'
  | 'spend'
  | 'settings'
  | 'receiptScan'
  | 'receiptReview'
  | 'receiptSuccess'
  | 'fridgeScan'
  | 'fridgeResult'
  | 'mealDetail';

export type Category =
  | 'Produce'
  | 'Protein'
  | 'Dairy'
  | 'Pantry'
  | 'Frozen'
  | 'Snacks'
  | 'Household'
  | 'Condiments'
  | 'Drinks'
  | 'Other';

export type StoreSection =
  | 'Produce'
  | 'Meat/Protein'
  | 'Dairy'
  | 'Pantry'
  | 'Frozen'
  | 'Snacks'
  | 'Household'
  | 'Other';

export type Store = "Trader Joe's" | 'Whole Foods' | 'Costco' | 'Target' | 'Walmart' | 'Local grocery' | 'Other';

export type Confidence = 'high' | 'medium' | 'low';

export type GroceryMemoryItem = {
  id: string;
  rawReceiptName?: string;
  name: string;
  category: Category;
  section: StoreSection;
  store: Store;
  lastBoughtDate: string;
  purchaseCount: number;
  averageDaysBetweenPurchases: number;
  averagePrice: number;
  currentPrice: number;
  preferredStore: Store;
  isUsual: boolean;
  userOftenDeletes: number;
  userOftenAddsManually: number;
  likelyStillHave: boolean;
  confidence: Confidence;
  perishable: boolean;
  estimatedShelfLifeDays: number;
  suggestionPriority: number;
};

export type ReceiptItem = {
  id: string;
  rawName: string;
  normalizedName: string;
  category: Category;
  section: StoreSection;
  price: number;
  isGrocery: boolean;
};

export type ReceiptExtraction = {
  store: Store;
  date: string;
  total: number;
  itemCount: number;
  items: ReceiptItem[];
};

export type ListSource = 'usual' | 'due' | 'manual' | 'meal' | 'scan' | 'overbuy' | 'import';

export type GroceryListEntry = {
  id: string;
  itemId?: string;
  name: string;
  category: Category;
  section: StoreSection;
  reason: string;
  source: ListSource;
  priority: number;
};

export type GroceryList = {
  buyNow: GroceryListEntry[];
  maybeBuy: GroceryListEntry[];
  probablyAlreadyHave: GroceryListEntry[];
  checkedOff: GroceryListEntry[];
  mealUnlocks: {
    title: string;
    items: GroceryListEntry[];
    meals: string[];
  };
  overbuyAlerts: string[];
};

export type BehaviorState = {
  alreadyHaveIds: string[];
  removedIds: string[];
  boughtIds: string[];
  manuallyAddedNames: string[];
  mealAddedNames: string[];
  fridgeSeen: Record<string, ScanConfidence>;
  addCounts: Record<string, number>;
  deleteCounts: Record<string, number>;
  checkedOffEntries: GroceryListEntry[];
};

export type ChefMode =
  | 'Lazy but good'
  | 'Healthy weeknight'
  | 'High protein'
  | 'Use leftovers'
  | 'Cheap dinner'
  | 'Date-night at home'
  | 'Clean out the fridge'
  | '20 minutes';

export type MealSuggestion = {
  id: string;
  name: string;
  mode: ChefMode;
  flavorFamily: string;
  time: string;
  effort: string;
  healthAngle: string;
  uses: string[];
  buy: string[];
  whyThisWorks: string;
  chefNote: string;
  steps: string[];
  substitutions: string[];
  priority: number;
};

export type ScanConfidence = 'clearlySeen' | 'maybeLow' | 'couldNotTell';

export type VisionItem = {
  id: string;
  name: string;
  category: Category;
  section: StoreSection;
  confidence: ScanConfidence;
  note: string;
};

export type SpendingCategory = {
  name: Category;
  amount: number;
  previousAmount: number;
};

export type SpendingStore = {
  store: Store;
  amount: number;
};

export type SpendingInsight = {
  monthlySpend: number;
  topStore: Store;
  topStoreShare: number;
  categoryInsight: string;
  plainEnglishInsight: string;
  categorySpend: SpendingCategory[];
  storeSpend: SpendingStore[];
  repeatItems: string[];
  expensiveItems: string[];
  overbuyAlerts: string[];
  staplesWeeklyCost: number;
};

export type OnboardingProfile = {
  householdSize: string;
  stores: Store[];
  dietaryPreferences: string[];
  foodsToAvoid: string;
  cookingStyle: string;
  weeklyGoal: string;
};

export type AuthProvider = 'apple' | 'gmail' | 'email';

export type UserAccount = {
  id: string;
  name: string;
  email: string;
  provider: AuthProvider;
  createdAt: string;
};
