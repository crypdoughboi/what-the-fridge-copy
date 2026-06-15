export type Tab = 'deck' | 'add' | 'shop' | 'kitchen';

export type Screen =
  | 'auth'
  | 'onboarding'
  | 'onboardingSuccess'
  | 'deck'
  | 'add'
  | 'shop'
  | 'kitchen'
  | 'spend'
  | 'settings'
  | 'dinnerLanePicker'
  | 'mealIdeas'
  | 'ingredientReview'
  | 'cookedConfirmation'
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

export type InventoryItemState = 'probably_have' | 'confirmed_have' | 'running_low' | 'use_soon' | 'probably_gone' | 'gone';

export type StorageLocation = 'fridge' | 'freezer' | 'pantry' | 'counter' | 'unknown';

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
  storageLocation?: StorageLocation;
  expiresAt?: string;
  inventoryState?: InventoryItemState;
  inventoryConfidence?: number;
  lastConfirmedAt?: string;
};

export type ReceiptItem = {
  id: string;
  rawName: string;
  normalizedName: string;
  category: Category;
  section: StoreSection;
  price: number;
  isGrocery: boolean;
  confidenceScore?: number;
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
  quantityLabel?: string;
  reason: string;
  source: ListSource;
  priority: number;
  usedForMeals?: string[];
  substitutionNote?: string;
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
  alreadyHaveNames: string[];
  removedIds: string[];
  boughtIds: string[];
  manuallyAddedNames: string[];
  mealAddedNames: string[];
  fridgeSeen: Record<string, ScanConfidence>;
  addCounts: Record<string, number>;
  deleteCounts: Record<string, number>;
  checkedOffEntries: GroceryListEntry[];
  usedForMeals: Record<string, string[]>;
  listAddedAt: Record<string, string>;
  listLastAddedAt: Record<string, string>;
  listAddSources: Record<string, string>;
  ownedObservedAt: Record<string, string>;
  ownedLastObservedAt: Record<string, string>;
  ownedSources: Record<string, string>;
  inventoryStates: Record<string, InventoryItemState>;
  inventoryConfidence: Record<string, number>;
  inventoryStorage: Record<string, StorageLocation>;
  inventoryExpiresAt: Record<string, string>;
  consumedAt: Record<string, string>;
  skippedMealIds: string[];
  skippedMealCounts: Record<string, number>;
  selectedDinnerLanes: string[];
  likedTags: string[];
  dislikedTags: string[];
  savedDeckMealIds: string[];
  rightSwipedMealIds: string[];
  mealFeedback: Record<string, MealFeedback>;
};

export type MealStatus = 'suggested' | 'saved' | 'planned' | 'made';

export type SeedMealIngredient = {
  rawName: string;
  canonicalName: string;
  quantity: number | null;
  unit: string | null;
  displayQuantity?: string;
  prep?: string;
  section: StoreSection;
  isOptional: boolean;
  isPantry: boolean;
  groceryCategory: Category;
  importance?: 'core' | 'pantry' | 'optional' | 'upgrade';
  sortOrder: number;
};

export type RecipeStep = {
  stepNumber: number;
  title: string;
  body: string;
  timeMinutes?: number;
  temperature?: string;
  visualCue?: string;
  component?: 'prep' | 'sauce' | 'base' | 'protein' | 'vegetables' | 'assembly' | 'finish';
};

export type SeedMealRecipe = {
  activeTimeMinutes: number;
  totalTimeMinutes: number;
  steps: RecipeStep[];
};

export type SeedMealTemplate = {
  slug: string;
  name: string;
  category: string;
  description: string;
  dinnerLanes: string[];
  cuisineInfluence: string[];
  format: string;
  timeMinutes: number;
  effort: string;
  servings: number;
  tags: string[];
  chefNote: string;
  whyItWorks: string;
  leftoversNote?: string;
  equipment: string[];
  ingredients: SeedMealIngredient[];
  recipe: SeedMealRecipe;
};

export type MealIdea = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  dinnerLanes: string[];
  cuisineInfluence: string;
  format: string;
  timeMinutes: number;
  effort: string;
  servings: number;
  tags: string[];
  chefNote: string;
  whyItWorks: string;
  leftoversNote?: string;
  equipment: string[];
  structuredIngredients: SeedMealIngredient[];
  recipe: SeedMealRecipe;
  ingredients: string[];
  optionalIngredients: string[];
  pantryIngredients: string[];
  instructionsPreview?: string[];
  status: MealStatus;
};

export type SubstitutionMatch = {
  ingredientName: string;
  ingredientKey: string;
  substituteName: string;
  substituteKey: string;
  note: string;
  confidenceScore: number;
};

export type MealRankDetails = {
  score: number;
  ownedIngredientNames: string[];
  missingIngredientNames: string[];
  useSoonIngredientNames: string[];
  substitutionMatches: SubstitutionMatch[];
  rankReasons: string[];
};

export type DinnerConstraint = {
  rawText: string;
  includeKeys: string[];
  excludeKeys: string[];
  maxTimeMinutes?: number;
  effort?: 'Easy' | 'Medium';
  cookingMethods: string[];
  vibes: string[];
};

export type IngredientReviewStatus = 'alreadyHave' | 'needToBuy' | 'optional';

export type ReviewedIngredient = {
  name: string;
  canonicalName?: string;
  displayQuantity?: string;
  prep?: string;
  status: IngredientReviewStatus;
  optional?: boolean;
  pantry?: boolean;
  substitutionNote?: string;
};

export type MealFeedback = {
  rating: 'Loved it' | 'Good enough' | 'Not again';
  chips: string[];
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
  confidenceScore?: number;
  inventoryState?: InventoryItemState;
  storageLocation?: StorageLocation;
  note: string;
};

export type CaptureMethod = 'receipt_photo' | 'fridge_photo' | 'grocery_photo' | 'voice_add' | 'pasted_receipt' | 'manual_add';

export type ParsedGroceryItem = {
  id: string;
  rawName: string;
  normalizedName: string;
  canonicalName: string;
  category: Category;
  section: StoreSection;
  quantity: number | null;
  unit: string | null;
  price?: number;
  confidenceScore: number;
  inventoryState: InventoryItemState;
  storageLocation: StorageLocation;
  isGrocery: boolean;
  note: string;
};

export type ParsedGroceryResult = {
  method: CaptureMethod;
  sourceLabel: string;
  capturedAt: string;
  store?: Store;
  date?: string;
  total?: number;
  items: ParsedGroceryItem[];
};

export type KitchenInventoryItem = {
  key: string;
  name: string;
  category: Category;
  section: StoreSection;
  state: InventoryItemState;
  confidenceScore: number;
  storageLocation: StorageLocation;
  observedAt?: string;
  expiresAt?: string;
  daysUntilExpiration?: number;
  usedForMeals?: string[];
  prompt: string;
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

export type AuthProvider = 'apple' | 'gmail' | 'email' | 'guest';

export type UserAccount = {
  id: string;
  name: string;
  email: string;
  provider: AuthProvider;
  createdAt: string;
};
