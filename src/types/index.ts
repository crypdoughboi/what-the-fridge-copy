export type Tab = 'home' | 'list' | 'meals' | 'scan';

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
  | 'mealPreferences'
  | 'mealDeck'
  | 'savedMeals'
  | 'ingredientReview'
  | 'receiptScan'
  | 'receiptReview'
  | 'receiptSuccess'
  | 'fridgeScan'
  | 'fridgeResult'
  | 'recipeImport'
  | 'recipeReview'
  | 'delivery'
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
  usedForMeals?: string[];
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
  skippedMealIds: string[];
  selectedDinnerLanes: string[];
  likedTags: string[];
  dislikedTags: string[];
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

export type IngredientReviewStatus = 'alreadyHave' | 'needToBuy' | 'optional';

export type ReviewedIngredient = {
  name: string;
  canonicalName?: string;
  displayQuantity?: string;
  prep?: string;
  status: IngredientReviewStatus;
  optional?: boolean;
  pantry?: boolean;
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

export type MealMode = 'scratch' | 'inventory';

export type EffortPreference = 'Anything easy' | 'Bare minimum' | 'Easy' | 'Normal' | 'I feel like cooking';

export type CookingMethodPreference =
  | 'Any method'
  | 'Air fryer'
  | 'Sheet pan'
  | 'One-pan'
  | 'One-pot'
  | 'Stovetop'
  | 'Oven'
  | 'Grill'
  | 'No-cook'
  | 'Slow cooker'
  | 'Instant Pot';

export type VibePreference =
  | 'Surprise me'
  | 'Healthy'
  | 'Comfort food'
  | 'Rice bowl energy'
  | 'High-protein'
  | 'Meat-heavy'
  | 'Crispy'
  | 'Creamy'
  | 'Spicy'
  | 'Light'
  | 'Cheap'
  | 'Date night'
  | 'Family-friendly'
  | 'Low-cleanup';

export type MainIngredientPreference =
  | 'Use what makes sense'
  | 'Whatever expires first'
  | 'Chicken'
  | 'Beef'
  | 'Ground turkey'
  | 'Fish'
  | 'Shrimp'
  | 'Eggs'
  | 'Tofu'
  | 'Beans'
  | 'Pasta'
  | 'Rice'
  | 'Vegetables';

export type CuisinePreference =
  | 'Any cuisine'
  | 'American'
  | 'Italian'
  | 'Mexican'
  | 'Mediterranean'
  | 'Chinese'
  | 'Japanese'
  | 'Korean'
  | 'Thai'
  | 'Indian'
  | 'Middle Eastern'
  | 'Tex-Mex';

export type FlexibilityPreference = 'Only what I have' | 'Missing 1 item is okay' | 'A few missing items are okay' | "I'm shopping anyway";

export type MealPreferences = {
  effort: EffortPreference;
  cookingMethod: CookingMethodPreference;
  restrictions: string[];
  vibe: VibePreference;
  mainIngredient: MainIngredientPreference;
  cuisine: CuisinePreference;
  flexibility?: FlexibilityPreference;
};

export type DeckMeal = {
  meal: MealIdea;
  mode: MealMode;
  have: string[];
  need: string[];
  pantry: string[];
  missingCount: number;
  reason: string;
};

export type AuthProvider = 'apple' | 'gmail' | 'email' | 'guest';

export type UserAccount = {
  id: string;
  name: string;
  email: string;
  provider: AuthProvider;
  createdAt: string;
};

// Recipe import (screenshot or photo of a recipe).
export type ImportedRecipeIngredient = {
  id: string;
  rawText: string;
  name: string;
  displayQuantity?: string;
  category: Category;
  section: StoreSection;
  status: IngredientReviewStatus;
  optional: boolean;
  pantryStaple: boolean;
};

export type ImportedRecipe = {
  title: string;
  description: string;
  servings: number;
  totalTimeMinutes: number;
  ingredients: ImportedRecipeIngredient[];
  steps: string[];
  sourceNote?: string;
};

// Shopping delivery price comparison.
export type DeliveryProviderId = 'curbside' | 'instacart' | 'doordash' | 'ubereats';

export type DeliveryLineItem = {
  name: string;
  category: Category;
  basePrice: number;
  estimated: boolean;
};

export type DeliveryQuote = {
  providerId: DeliveryProviderId;
  providerName: string;
  fulfillment: string;
  itemsSubtotal: number;
  deliveryFee: number;
  serviceFee: number;
  estimatedTotal: number;
  etaMinutes: number;
  itemCount: number;
  note: string;
  url: string;
  isBestPrice: boolean;
  isFastest: boolean;
};
