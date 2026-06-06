import { useEffect, useMemo, useState } from 'react';
import {
  BehaviorState,
  ChefMode,
  GroceryListEntry,
  GroceryMemoryItem,
  MealFeedback,
  MealIdea,
  MealSuggestion,
  OnboardingProfile,
  ReceiptExtraction,
  ReviewedIngredient,
  ScanConfidence,
  UserAccount,
  VisionItem,
} from '../types';
import { defaultProfile, spendingInsight } from '../data/mockData';
import {
  categorizeGroceryItem,
  detectUsuals,
  generateGroceryList,
  normalizeIngredientKey,
  normalizeReceiptItemName,
  sectionForCategory,
  updateLocalStateAfterUserAction,
} from '../utils/groceryLogic';
import { getMealIdeaById, getMealsForMode, getRankedMealIdeas } from '../services/mealGenerationService';
import {
  getCurrentUserAccount,
  listenForAuthChanges,
  signInWithAppleId,
  signInWithEmailMagicLink,
  signInWithGmail,
  signOut,
} from '../services/authService';

const legacyAccountStorageKey = 'wtf.account.v1';

type PersonalizedState = {
  completedOnboarding: boolean;
  profile: OnboardingProfile;
  memory: GroceryMemoryItem[];
  behavior: BehaviorState;
  savedMealIds: string[];
  plannedMealIds: string[];
  cookedMealIds: string[];
  recommendedItems: string[];
  receiptCount: number;
  fridgeScanCount: number;
  importCount: number;
};

const emptyBehavior: BehaviorState = {
  alreadyHaveIds: [],
  alreadyHaveNames: [],
  removedIds: [],
  boughtIds: [],
  manuallyAddedNames: [],
  mealAddedNames: [],
  fridgeSeen: {},
  addCounts: {},
  deleteCounts: {},
  checkedOffEntries: [],
  usedForMeals: {},
  skippedMealIds: [],
  selectedDinnerLanes: [],
  likedTags: [],
  dislikedTags: [],
  mealFeedback: {},
};

export function useGroceryAppState() {
  const [account, setAccount] = useState<UserAccount | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [completedOnboarding, setCompletedOnboarding] = useState(false);
  const [profile, setProfile] = useState<OnboardingProfile>(defaultProfile);
  const [memory, setMemory] = useState<GroceryMemoryItem[]>([]);
  const [behavior, setBehavior] = useState<BehaviorState>(emptyBehavior);
  const [toast, setToast] = useState<string | null>(null);
  const [savedMealIds, setSavedMealIds] = useState<string[]>([]);
  const [plannedMealIds, setPlannedMealIds] = useState<string[]>([]);
  const [cookedMealIds, setCookedMealIds] = useState<string[]>([]);
  const [recommendedItems, setRecommendedItems] = useState<string[]>([]);
  const [receiptCount, setReceiptCount] = useState(0);
  const [fridgeScanCount, setFridgeScanCount] = useState(0);
  const [importCount, setImportCount] = useState(0);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  };

  const baseMeals = useMemo(() => getMealsForMode(profile.cookingStyle as ChefMode), [profile.cookingStyle]);
  const groceryList = useMemo(() => generateGroceryList(memory, behavior, baseMeals), [memory, behavior, baseMeals]);
  const usuals = useMemo(() => detectUsuals(memory), [memory]);
  const knownIngredientNames = useMemo(() => getKnownIngredientNames(memory, behavior), [memory, behavior]);
  const plannedMeals = useMemo(() => idsToMealIdeas(plannedMealIds), [plannedMealIds]);
  const savedMeals = useMemo(
    () => idsToMealIdeas(savedMealIds).filter((meal) => !plannedMealIds.includes(meal.id) && !cookedMealIds.includes(meal.id)),
    [savedMealIds, plannedMealIds, cookedMealIds],
  );
  const madeMeals = useMemo(() => idsToMealIdeas(cookedMealIds), [cookedMealIds]);
  const hasGroceryData = useMemo(
    () =>
      memory.length > 0 ||
      behavior.alreadyHaveNames.length > 0 ||
      behavior.manuallyAddedNames.length > 0 ||
      behavior.mealAddedNames.length > 0 ||
      Object.keys(behavior.fridgeSeen).length > 0 ||
      receiptCount > 0 ||
      fridgeScanCount > 0 ||
      importCount > 0,
    [memory, behavior.alreadyHaveNames, behavior.manuallyAddedNames, behavior.mealAddedNames, behavior.fridgeSeen, receiptCount, fridgeScanCount, importCount],
  );
  const useSoon = useMemo(
    () =>
      memory
        .filter((item) => item.perishable && item.likelyStillHave)
        .sort((a, b) => a.estimatedShelfLifeDays - b.estimatedShelfLifeDays)
        .slice(0, 4),
    [memory],
  );

  useEffect(() => {
    window.localStorage.removeItem(legacyAccountStorageKey);

    let mounted = true;

    getCurrentUserAccount()
      .then((currentAccount) => {
        if (!mounted) return;
        if (currentAccount) {
          activateAccount(currentAccount);
        }
        setAuthReady(true);
      })
      .catch((error) => {
        if (!mounted) return;
        setAuthError(error instanceof Error ? error.message : 'Could not check your account.');
        setAuthReady(true);
      });

    const unsubscribe = listenForAuthChanges((nextAccount) => {
      if (!mounted) return;
      if (nextAccount) {
        activateAccount(nextAccount);
      } else {
        setAccount(null);
        applyPersonalizedState(defaultPersonalizedState());
      }
      setAuthReady(true);
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
    // Auth subscription should be installed once for the app session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!account || account.provider === 'guest') return;
    writeStorage(personalizedStorageKey(account.id), {
      completedOnboarding,
      profile,
      memory,
      behavior,
      savedMealIds,
      plannedMealIds,
      cookedMealIds,
      recommendedItems,
      receiptCount,
      fridgeScanCount,
      importCount,
    });
  }, [
    account,
    completedOnboarding,
    profile,
    memory,
    behavior,
    savedMealIds,
    plannedMealIds,
    cookedMealIds,
    recommendedItems,
    receiptCount,
    fridgeScanCount,
    importCount,
  ]);

  async function createAccountWithApple() {
    setAuthError(null);
    await signInWithAppleId();
  }

  async function createAccountWithGmail() {
    setAuthError(null);
    await signInWithGmail();
  }

  async function createAccountWithEmail(email: string) {
    setAuthError(null);
    await signInWithEmailMagicLink(email);
    showToast('Check your email. WTF sent the sign-in link.');
  }

  function continueAsGuest() {
    setAuthError(null);
    setAccount({
      id: `guest-${Date.now()}`,
      name: 'Guest',
      email: 'Temporary session',
      provider: 'guest',
      createdAt: new Date().toISOString(),
    });
    applyPersonalizedState({
      ...defaultPersonalizedState(),
      completedOnboarding: true,
    });
    showToast('Guest mode. Nothing will save after you leave.');
  }

  async function signOutAccount() {
    if (account?.provider !== 'guest') {
      await signOut();
    }
    setAccount(null);
    setCompletedOnboarding(false);
    applyPersonalizedState(defaultPersonalizedState());
    showToast(account?.provider === 'guest' ? 'Guest session ended.' : 'Signed out. Your saved setup stays tied to your account.');
  }

  function activateAccount(nextAccount: UserAccount) {
    setAccount(nextAccount);
    const savedState = readStorage<PersonalizedState>(personalizedStorageKey(nextAccount.id));
    window.localStorage.removeItem(`wtf.personalized.${nextAccount.id}.v1`);
    if (savedState) {
      applyPersonalizedState(savedState);
      return;
    }
    applyPersonalizedState(defaultPersonalizedState());
  }

  function applyPersonalizedState(state: PersonalizedState) {
    setCompletedOnboarding(state.completedOnboarding);
    setProfile(state.profile);
    setMemory(state.memory);
    setBehavior(normalizeBehavior(state.behavior));
    setSavedMealIds(state.savedMealIds ?? []);
    setPlannedMealIds(state.plannedMealIds ?? []);
    setCookedMealIds(state.cookedMealIds ?? []);
    setRecommendedItems(state.recommendedItems ?? []);
    setReceiptCount(state.receiptCount ?? 0);
    setFridgeScanCount(state.fridgeScanCount ?? 0);
    setImportCount(state.importCount ?? 0);
  }

  function completeOnboarding(nextProfile: OnboardingProfile) {
    setProfile(nextProfile);
    setCompletedOnboarding(true);
  }

  function markEntryAlreadyHave(entry: GroceryListEntry) {
    if (entry.itemId) {
      setBehavior((current) => updateLocalStateAfterUserAction(current, 'alreadyHave', entry.itemId!));
    } else {
      const key = normalizeIngredientKey(entry.name);
      setBehavior((current) => ({
        ...current,
        alreadyHaveNames: unique([...current.alreadyHaveNames, entry.name]),
        manuallyAddedNames: current.manuallyAddedNames.filter((name) => normalizeIngredientKey(name) !== key),
        mealAddedNames: current.mealAddedNames.filter((name) => normalizeIngredientKey(name) !== key),
        fridgeSeen: { ...current.fridgeSeen, [entry.name.toLowerCase()]: 'clearlySeen' },
      }));
    }
    showToast(`${entry.name} moved to probably already have.`);
  }

  function markEntryNeedToBuy(entry: GroceryListEntry) {
    const key = normalizeIngredientKey(entry.name);
    setBehavior((current) => ({
      ...current,
      alreadyHaveIds: entry.itemId ? current.alreadyHaveIds.filter((id) => id !== entry.itemId) : current.alreadyHaveIds,
      alreadyHaveNames: current.alreadyHaveNames.filter((name) => normalizeIngredientKey(name) !== key),
      manuallyAddedNames: unique([...current.manuallyAddedNames, entry.name]),
      fridgeSeen: Object.fromEntries(Object.entries(current.fridgeSeen).filter(([name]) => normalizeIngredientKey(name) !== key)),
    }));
    showToast(`${entry.name} moved to Need to Buy.`);
  }

  function markEntryBought(entry: GroceryListEntry) {
    if (entry.itemId) {
      setBehavior((current) => addCheckedEntry(updateLocalStateAfterUserAction(current, 'bought', entry.itemId!), entry));
      setMemory((current) => current.map((item) => (item.id === entry.itemId ? updateBoughtMemoryItem(item) : item)));
    } else {
      setMemory((current) => [createMemoryItemFromName(entry.name), ...current]);
      setBehavior((current) => ({
        ...current,
        manuallyAddedNames: current.manuallyAddedNames.filter((name) => name.toLowerCase() !== entry.name.toLowerCase()),
        mealAddedNames: current.mealAddedNames.filter((name) => name.toLowerCase() !== entry.name.toLowerCase()),
        checkedOffEntries: addCheckedEntry(current, entry).checkedOffEntries,
      }));
    }
    showToast(`${entry.name} marked bought. WTF updated your list.`);
  }

  function removeEntry(entry: GroceryListEntry) {
    setBehavior((current) => {
      const next = entry.itemId
        ? updateLocalStateAfterUserAction(current, 'removed', entry.itemId)
        : {
            ...current,
            manuallyAddedNames: current.manuallyAddedNames.filter((name) => name.toLowerCase() !== entry.name.toLowerCase()),
            mealAddedNames: current.mealAddedNames.filter((name) => name.toLowerCase() !== entry.name.toLowerCase()),
          };

      return {
        ...next,
        checkedOffEntries: next.checkedOffEntries.filter(
          (checked) => checked.id !== entry.id && checked.name.toLowerCase() !== entry.name.toLowerCase(),
        ),
      };
    });
    showToast(`${entry.name} removed. WTF took the hint.`);
  }

  function addManualItem(name: string) {
    const normalized = normalizeReceiptItemName(name);
    if (!normalized) return;
    const key = normalizeIngredientKey(normalized);
    setBehavior((current) => ({
      ...current,
      manuallyAddedNames: unique([...current.manuallyAddedNames, normalized]),
      alreadyHaveNames: current.alreadyHaveNames.filter((item) => normalizeIngredientKey(item) !== key),
      checkedOffEntries: current.checkedOffEntries.filter((entry) => entry.name.toLowerCase() !== normalized.toLowerCase()),
      addCounts: {
        ...current.addCounts,
        [normalized.toLowerCase()]: (current.addCounts[normalized.toLowerCase()] ?? 0) + 1,
      },
    }));
    showToast(`${normalized} added.`);
  }

  function addAlreadyHaveItem(name: string) {
    const normalized = normalizeReceiptItemName(name);
    if (!normalized) return;
    const key = normalizeIngredientKey(normalized);
    setBehavior((current) => ({
      ...current,
      alreadyHaveNames: unique([...current.alreadyHaveNames, normalized]),
      manuallyAddedNames: current.manuallyAddedNames.filter((item) => normalizeIngredientKey(item) !== key),
      mealAddedNames: current.mealAddedNames.filter((item) => normalizeIngredientKey(item) !== key),
      checkedOffEntries: current.checkedOffEntries.filter((entry) => normalizeIngredientKey(entry.name) !== key),
      addCounts: {
        ...current.addCounts,
        [key]: (current.addCounts[key] ?? 0) + 1,
      },
    }));
    showToast(`${normalized} added to Already Have.`);
  }

  function addUsualsToList() {
    const usualNames = usuals
      .filter((item) => !behavior.alreadyHaveIds.includes(item.id))
      .slice(0, 4)
      .map((item) => item.name);
    if (usualNames.length === 0) {
      showToast('No usuals yet. Scan a receipt first.');
      return;
    }
    setBehavior((current) => ({
      ...current,
      manuallyAddedNames: unique([...current.manuallyAddedNames, ...usualNames]),
    }));
    showToast('Usuals added. Rice can still sit this one out.');
  }

  function addMealMissingItems(meal: MealSuggestion) {
    const names = meal.buy.map((item) => normalizeReceiptItemName(item.replace(', optional', '')));
    setBehavior((current) => ({
      ...current,
      mealAddedNames: unique([...current.mealAddedNames, ...names]),
      addCounts: names.reduce(
        (counts, name) => ({
          ...counts,
          [name.toLowerCase()]: (current.addCounts[name.toLowerCase()] ?? 0) + 1,
        }),
        current.addCounts,
      ),
    }));
    showToast(`Missing items added for ${meal.name}.`);
  }

  function addMealUnlockItems(entries: GroceryListEntry[]) {
    const names = entries.map((entry) => entry.name);
    setBehavior((current) => ({
      ...current,
      mealAddedNames: unique([...current.mealAddedNames, ...names]),
    }));
    showToast('Five small buys. Four dinners unlocked.');
  }

  function rebuildList() {
    setBehavior((current) => ({
      ...current,
      removedIds: [],
      checkedOffEntries: [],
    }));
    showToast(memory.length > 0 ? 'Your list is ready.' : 'Start with a receipt or old list.');
  }

  function confirmReceipt(extraction: ReceiptExtraction) {
    setMemory((current) => mergeReceiptIntoMemory(current, extraction));
    const purchasedNames = extraction.items.filter((item) => item.isGrocery).map((item) => item.normalizedName);
    setBehavior((current) => ({
      ...current,
      alreadyHaveNames: unique([...current.alreadyHaveNames, ...purchasedNames]),
      boughtIds: [],
      removedIds: [],
      checkedOffEntries: [],
    }));
    setReceiptCount((current) => current + 1);
    showToast('Receipt added. Your list knows what you bought.');
  }

  function updateListFromFridge(items: VisionItem[]) {
    const seen = items.reduce<Record<string, ScanConfidence>>((acc, item) => {
      acc[item.name.toLowerCase()] = item.confidence;
      return acc;
    }, {});
    const haveNames = items.filter((item) => item.confidence === 'clearlySeen').map((item) => item.name);
    const needNames = items.filter((item) => item.confidence === 'maybeLow').map((item) => item.name);
    const haveKeys = new Set(haveNames.map(normalizeIngredientKey));

    setBehavior((current) => ({
      ...current,
      alreadyHaveNames: unique([...current.alreadyHaveNames, ...haveNames]),
      manuallyAddedNames: unique([
        ...current.manuallyAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
        ...needNames,
      ]),
      mealAddedNames: current.mealAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
      fridgeSeen: {
        ...current.fridgeSeen,
        ...seen,
      },
    }));

    setMemory((current) =>
      mergeFridgeItemsIntoMemory(current, items).map((item) =>
        seen[item.name.toLowerCase()] === 'clearlySeen'
          ? {
              ...item,
              likelyStillHave: true,
              confidence: 'high',
            }
          : item,
      ),
    );
    setFridgeScanCount((current) => current + 1);
    showToast('List updated from your fridge photo.');
  }

  function addImportedItems(entries: GroceryListEntry[]) {
    const names = entries.map((entry) => entry.name);
    setBehavior((current) => ({
      ...current,
      manuallyAddedNames: unique([...current.manuallyAddedNames, ...names]),
      addCounts: names.reduce(
        (counts, name) => ({
          ...counts,
          [name.toLowerCase()]: (current.addCounts[name.toLowerCase()] ?? 0) + 1,
        }),
        current.addCounts,
      ),
    }));
    setImportCount((current) => current + 1);
    showToast("Old list imported. We'll use this to learn your usuals.");
  }

  function saveMeal(mealId: string) {
    setSavedMealIds((current) => unique([...current, mealId]));
    showToast('Saved. Future you gets the assist.');
  }

  function markMealCooked(mealId: string) {
    setCookedMealIds((current) => unique([...current, mealId]));
    setPlannedMealIds((current) => current.filter((id) => id !== mealId));
    showToast('Marked made. We will remember it.');
  }

  function saveMealIdea(meal: MealIdea) {
    setSavedMealIds((current) => unique([...current, meal.id]));
    setBehavior((current) => ({
      ...current,
      likedTags: unique([...current.likedTags, ...meal.tags]),
    }));
    showToast(`${meal.name} saved.`);
  }

  function skipMealIdea(meal: MealIdea) {
    setBehavior((current) => ({
      ...current,
      skippedMealIds: unique([...current.skippedMealIds, meal.id]),
    }));
    showToast('Skipped. No list changes.');
  }

  function rememberDinnerLanes(lanes: string[]) {
    setBehavior((current) => ({
      ...current,
      selectedDinnerLanes: unique([...current.selectedDinnerLanes, ...lanes]),
    }));
  }

  function planMealWithIngredients(meal: MealIdea, reviewed: ReviewedIngredient[]) {
    const needNames = reviewed.filter((item) => item.status === 'needToBuy').map((item) => normalizeReceiptItemName(item.name));
    const haveNames = reviewed.filter((item) => item.status === 'alreadyHave').map((item) => normalizeReceiptItemName(item.name));
    const haveKeys = new Set(haveNames.map(normalizeIngredientKey));

    setPlannedMealIds((current) => unique([...current, meal.id]));
    setSavedMealIds((current) => unique([...current, meal.id]));
    setBehavior((current) => {
      const nextUsedFor = { ...current.usedForMeals };
      needNames.forEach((name) => {
        const key = normalizeIngredientKey(name);
        nextUsedFor[key] = unique([...(nextUsedFor[key] ?? []), meal.name]);
      });

      return {
        ...current,
        alreadyHaveNames: unique([...current.alreadyHaveNames, ...haveNames]),
        manuallyAddedNames: current.manuallyAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
        mealAddedNames: unique([
          ...current.mealAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
          ...needNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
        ]),
        usedForMeals: nextUsedFor,
        likedTags: unique([...current.likedTags, ...meal.tags]),
      };
    });
    showToast(`${meal.name} planned. Missing ingredients added once.`);
  }

  function makeMealAgain(meal: MealIdea) {
    setPlannedMealIds((current) => unique([...current, meal.id]));
    showToast(`${meal.name} is back on This Week.`);
  }

  function rateMeal(mealId: string, feedback: MealFeedback) {
    setBehavior((current) => {
      const meal = getMealIdeaById(mealId);
      const likedTags = feedback.rating === 'Loved it' && meal ? unique([...current.likedTags, ...meal.tags]) : current.likedTags;
      const dislikedTags = feedback.rating === 'Not again' && meal ? unique([...current.dislikedTags, ...meal.tags]) : current.dislikedTags;
      return {
        ...current,
        likedTags,
        dislikedTags,
        mealFeedback: {
          ...current.mealFeedback,
          [mealId]: feedback,
        },
      };
    });
    showToast('Feedback saved.');
  }

  function rankMealIdeas(selectedLanes: string[] = []) {
    return getRankedMealIdeas({
      knownIngredients: knownIngredientNames,
      selectedLanes: selectedLanes.length ? selectedLanes : behavior.selectedDinnerLanes,
      skippedMealIds: behavior.skippedMealIds,
      savedMealIds,
      madeMealIds: cookedMealIds,
      likedTags: behavior.likedTags,
      dislikedTags: behavior.dislikedTags,
    });
  }

  function recommendItem(itemName: string) {
    setRecommendedItems((current) => unique([...current, itemName]));
    showToast(`${itemName} recommended. Spending stayed private.`);
  }

  function keepPrivate(itemName: string) {
    setRecommendedItems((current) => current.filter((item) => item !== itemName));
    showToast(`${itemName} stays private.`);
  }

  return {
    completedOnboarding,
    account,
    authReady,
    authError,
    profile,
    memory,
    groceryList,
    spendingInsight,
    hasGroceryData,
    knownIngredientNames,
    hasReceiptHistory: receiptCount > 0,
    useSoon,
    behavior,
    toast,
    showToast,
    createAccountWithApple,
    createAccountWithGmail,
    createAccountWithEmail,
    continueAsGuest,
    signOutAccount,
    savedMealIds,
    plannedMealIds,
    cookedMealIds,
    plannedMeals,
    savedMeals,
    madeMeals,
    recommendedItems,
    completeOnboarding,
    setProfile,
    markEntryAlreadyHave,
    markEntryNeedToBuy,
    markEntryBought,
    removeEntry,
    addManualItem,
    addAlreadyHaveItem,
    addUsualsToList,
    addMealMissingItems,
    addMealUnlockItems,
    rebuildList,
    confirmReceipt,
    updateListFromFridge,
    addImportedItems,
    saveMeal,
    markMealCooked,
    saveMealIdea,
    skipMealIdea,
    rememberDinnerLanes,
    planMealWithIngredients,
    makeMealAgain,
    rateMeal,
    rankMealIdeas,
    recommendItem,
    keepPrivate,
  };
}

function mergeReceiptIntoMemory(current: GroceryMemoryItem[], extraction: ReceiptExtraction): GroceryMemoryItem[] {
  const byName = new Map(current.map((item) => [item.name.toLowerCase(), item]));
  const next = [...current];

  extraction.items
    .filter((item) => item.isGrocery)
    .forEach((receiptItem) => {
      const name = receiptItem.normalizedName;
      const existing = byName.get(name.toLowerCase());
      if (existing) {
        const updated = updateBoughtMemoryItem(existing, receiptItem.price, extraction.store);
        const index = next.findIndex((item) => item.id === existing.id);
        next[index] = updated;
      } else {
        next.push(createMemoryItemFromName(name, receiptItem.price, extraction.store));
      }
    });

  return next;
}

function mergeFridgeItemsIntoMemory(current: GroceryMemoryItem[], items: VisionItem[]): GroceryMemoryItem[] {
  const existingNames = new Set(current.map((item) => item.name.toLowerCase()));
  const newItems = items
    .filter((item) => item.confidence !== 'couldNotTell' && !existingNames.has(item.name.toLowerCase()))
    .map((item) => ({
      ...createMemoryItemFromName(item.name),
      id: `vision-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
      category: item.category,
      section: item.section,
      likelyStillHave: item.confidence === 'clearlySeen',
      confidence: item.confidence === 'clearlySeen' ? ('high' as const) : ('low' as const),
      suggestionPriority: item.confidence === 'maybeLow' ? 74 : 45,
    }));

  return [...current, ...newItems];
}

function updateBoughtMemoryItem(item: GroceryMemoryItem, price = item.currentPrice, store = item.store): GroceryMemoryItem {
  return {
    ...item,
    store,
    lastBoughtDate: new Date().toISOString().slice(0, 10),
    purchaseCount: item.purchaseCount + 1,
    averagePrice: Number(((item.averagePrice + price) / 2).toFixed(2)),
    currentPrice: price,
    likelyStillHave: true,
    confidence: 'high',
    suggestionPriority: Math.min(100, item.suggestionPriority + 4),
  };
}

function createMemoryItemFromName(name: string, price = 3.99, store: GroceryMemoryItem['store'] = "Trader Joe's"): GroceryMemoryItem {
  const category = categorizeGroceryItem(name);
  return {
    id: `memory-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
    name,
    category,
    section: sectionForCategory(category),
    store,
    lastBoughtDate: new Date().toISOString().slice(0, 10),
    purchaseCount: 1,
    averageDaysBetweenPurchases: category === 'Household' ? 30 : category === 'Pantry' ? 24 : 8,
    averagePrice: price,
    currentPrice: price,
    preferredStore: store,
    isUsual: false,
    userOftenDeletes: 0,
    userOftenAddsManually: 1,
    likelyStillHave: true,
    confidence: 'medium',
    perishable: ['Produce', 'Protein', 'Dairy'].includes(category),
    estimatedShelfLifeDays: category === 'Produce' ? 6 : category === 'Protein' ? 4 : category === 'Dairy' ? 12 : 90,
    suggestionPriority: 70,
  };
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
}

function personalizedStorageKey(accountId: string): string {
  return `wtf.personalized.${accountId}.v2`;
}

function defaultPersonalizedState(): PersonalizedState {
  return {
    completedOnboarding: false,
    profile: defaultProfile,
    memory: [],
    behavior: emptyBehavior,
    savedMealIds: [],
    plannedMealIds: [],
    cookedMealIds: [],
    recommendedItems: [],
    receiptCount: 0,
    fridgeScanCount: 0,
    importCount: 0,
  };
}

function normalizeBehavior(behavior: BehaviorState): BehaviorState {
  return {
    ...emptyBehavior,
    ...behavior,
    alreadyHaveNames: behavior.alreadyHaveNames ?? [],
    usedForMeals: behavior.usedForMeals ?? {},
    skippedMealIds: behavior.skippedMealIds ?? [],
    selectedDinnerLanes: behavior.selectedDinnerLanes ?? [],
    likedTags: behavior.likedTags ?? [],
    dislikedTags: behavior.dislikedTags ?? [],
    mealFeedback: behavior.mealFeedback ?? {},
    checkedOffEntries: behavior.checkedOffEntries ?? [],
  };
}

function addCheckedEntry(behavior: BehaviorState, entry: GroceryListEntry): BehaviorState {
  const checkedEntry: GroceryListEntry = {
    ...entry,
    reason: 'Checked off while shopping.',
    priority: 0,
  };

  return {
    ...behavior,
    checkedOffEntries: [
      checkedEntry,
      ...behavior.checkedOffEntries.filter(
        (current) => current.id !== entry.id && current.name.toLowerCase() !== entry.name.toLowerCase(),
      ),
    ].slice(0, 20),
  };
}

function idsToMealIdeas(ids: string[]): MealIdea[] {
  return ids.map((id) => getMealIdeaById(id)).filter(Boolean) as MealIdea[];
}

function getKnownIngredientNames(memory: GroceryMemoryItem[], behavior: BehaviorState): string[] {
  const memoryNames = memory
    .filter(
      (item) =>
        item.likelyStillHave ||
        behavior.alreadyHaveIds.includes(item.id) ||
        behavior.fridgeSeen[item.name.toLowerCase()] === 'clearlySeen',
    )
    .map((item) => item.name);

  const scanNames = Object.entries(behavior.fridgeSeen)
    .filter(([, confidence]) => confidence === 'clearlySeen')
    .map(([name]) => name);

  const all = [
    ...memoryNames,
    ...scanNames,
    ...behavior.alreadyHaveNames,
    ...behavior.manuallyAddedNames,
    ...behavior.mealAddedNames,
  ];

  const seen = new Set<string>();
  return all.filter((name) => {
    const key = normalizeIngredientKey(name);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function readStorage<T>(key: string): T | null {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function writeStorage<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can fail in private browsing. The prototype still works in memory.
  }
}
