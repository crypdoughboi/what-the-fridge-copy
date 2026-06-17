import { useEffect, useMemo, useState } from 'react';
import {
  BehaviorState,
  ChefMode,
  DeckMeal,
  GroceryList,
  GroceryListEntry,
  GroceryMemoryItem,
  MealFeedback,
  MealIdea,
  MealMode,
  MealPreferences,
  MealSuggestion,
  OnboardingProfile,
  ReceiptExtraction,
  ReviewedIngredient,
  ScanConfidence,
  UserAccount,
  VisionItem,
} from '../types';
import { defaultProfile, spendingInsight } from '../data/mockData';
import { seedMealIdeas } from '../data/mealIdeas';
import {
  categorizeGroceryItem,
  detectUsuals,
  generateGroceryList,
  normalizeIngredientKey,
  normalizeReceiptItemName,
  sectionForCategory,
  updateLocalStateAfterUserAction,
} from '../utils/groceryLogic';
import {
  generateMealDeck as buildMealDeck,
  getMealIdeaById,
  getMealsForMode,
  getRankedMealIdeas,
} from '../services/mealGenerationService';
import {
  fetchRemoteMealIdeas,
  fetchRemoteUserState,
  logUserItemEvent,
  moveGroceryItemToUserIngredients,
  removeUserFoodState,
  removeUserMealState,
  syncReviewedMealIngredients,
  upsertGroceryItem,
  upsertUserIngredient,
  upsertUserMealStatus,
} from '../services/mealStateService';
import {
  getCurrentUserAccount,
  listenForAuthChanges,
  signInWithAppleId,
  signInWithEmailMagicLink,
  signInWithGmail,
  signOut,
} from '../services/authService';
import { buildDeliveryLineItems } from '../services/deliveryComparisonService';

const legacyAccountStorageKey = 'wtf.account.v1';

type PersonalizedState = {
  completedOnboarding: boolean;
  profile: OnboardingProfile;
  memory: GroceryMemoryItem[];
  behavior: BehaviorState;
  savedMealIds: string[];
  plannedMealIds: string[];
  cookedMealIds: string[];
  shoppingMealIds: string[];
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
  listAddedAt: {},
  listLastAddedAt: {},
  listAddSources: {},
  ownedObservedAt: {},
  ownedLastObservedAt: {},
  ownedSources: {},
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
  const [shoppingMealIds, setShoppingMealIds] = useState<string[]>([]);
  const [mealIdeas, setMealIdeas] = useState<MealIdea[]>(seedMealIdeas);
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
  const plannedMeals = useMemo(() => idsToMealIdeas(plannedMealIds, mealIdeas), [plannedMealIds, mealIdeas]);
  const savedMeals = useMemo(
    () => idsToMealIdeas(savedMealIds, mealIdeas).filter((meal) => !plannedMealIds.includes(meal.id) && !cookedMealIds.includes(meal.id)),
    [savedMealIds, plannedMealIds, cookedMealIds, mealIdeas],
  );
  const madeMeals = useMemo(() => idsToMealIdeas(cookedMealIds, mealIdeas), [cookedMealIds, mealIdeas]);
  const shoppingMeals = useMemo(() => idsToMealIdeas(shoppingMealIds, mealIdeas), [shoppingMealIds, mealIdeas]);
  const likedMeals = useMemo(
    () => idsToMealIdeas(savedMealIds, mealIdeas).filter((meal) => !cookedMealIds.includes(meal.id)),
    [savedMealIds, cookedMealIds, mealIdeas],
  );
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
  const remoteUserId = account?.provider === 'guest' ? undefined : account?.id;
  const useSoon = useMemo(
    () =>
      memory
        .filter((item) => item.perishable && item.likelyStillHave)
        .sort((a, b) => a.estimatedShelfLifeDays - b.estimatedShelfLifeDays)
        .slice(0, 4),
    [memory],
  );
  const useSoonNames = useMemo(() => useSoon.map((item) => item.name), [useSoon]);
  const deliveryLineItems = useMemo(
    () => buildDeliveryLineItems([...groceryList.buyNow, ...groceryList.maybeBuy], memory),
    [groceryList.buyNow, groceryList.maybeBuy, memory],
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
    let mounted = true;
    fetchRemoteMealIdeas().then((remoteMeals) => {
      if (!mounted || !remoteMeals?.length) return;
      setMealIdeas(remoteMeals);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!account || account.provider === 'guest' || !mealIdeas.length) return;
    let mounted = true;
    fetchRemoteUserState(account.id, mealIdeas).then((remoteState) => {
      if (!mounted || !remoteState) return;
      setSavedMealIds(remoteState.savedMealIds);
      setPlannedMealIds(remoteState.plannedMealIds);
      setCookedMealIds(remoteState.cookedMealIds);
      setBehavior((current) => ({
        ...current,
        skippedMealIds: remoteState.skippedMealIds,
        alreadyHaveNames: unique([...current.alreadyHaveNames, ...remoteState.alreadyHaveNames]),
        manuallyAddedNames: unique([...current.manuallyAddedNames, ...remoteState.needToBuyNames]),
        usedForMeals: {
          ...current.usedForMeals,
          ...remoteState.usedForMeals,
        },
      }));
    });
    return () => {
      mounted = false;
    };
  }, [account, mealIdeas]);

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
      shoppingMealIds,
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
    shoppingMealIds,
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
    setShoppingMealIds(state.shoppingMealIds ?? []);
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
    const key = normalizeIngredientKey(entry.name);
    const matchingMemoryIds = memoryIdsForEntry(entry);
    if (entry.itemId) {
      setBehavior((current) => {
        const cleaned = cleanupEntryByName(
          {
            ...updateLocalStateAfterUserAction(current, 'alreadyHave', entry.itemId!),
            alreadyHaveIds: unique([...current.alreadyHaveIds, ...matchingMemoryIds]),
            removedIds: current.removedIds.filter((id) => !matchingMemoryIds.includes(id)),
            boughtIds: current.boughtIds.filter((id) => !matchingMemoryIds.includes(id)),
          },
          entry,
          { keepAlreadyHave: true },
        );
        return addOwnedTracking(cleaned, [entry.name], 'marked_already_have');
      });
    } else {
      setBehavior((current) => {
        const cleaned = cleanupEntryByName(current, entry, { keepAlreadyHave: true });
        return addOwnedTracking(
          {
            ...cleaned,
            alreadyHaveNames: unique([...cleaned.alreadyHaveNames.filter((name) => normalizeIngredientKey(name) !== key), entry.name]),
            fridgeSeen: { ...removeFridgeSeenByKey(cleaned.fridgeSeen, key), [entry.name.toLowerCase()]: 'clearlySeen' },
          },
          [entry.name],
          'marked_already_have',
        );
      });
    }
    void moveGroceryItemToUserIngredients(remoteUserId, entry.name, 'marked_already_have');
    showToast(`${entry.name} moved to probably already have.`);
  }

  function markEntryNeedToBuy(entry: GroceryListEntry) {
    const key = normalizeIngredientKey(entry.name);
    const matchingMemoryIds = memoryIdsForEntry(entry);
    setBehavior((current) => {
      const cleaned = cleanupEntryByName(current, entry);
      return addListTracking(
        {
          ...cleaned,
          alreadyHaveIds: cleaned.alreadyHaveIds.filter((id) => !matchingMemoryIds.includes(id)),
          removedIds: cleaned.removedIds.filter((id) => !matchingMemoryIds.includes(id)),
          boughtIds: cleaned.boughtIds.filter((id) => !matchingMemoryIds.includes(id)),
          alreadyHaveNames: cleaned.alreadyHaveNames.filter((name) => normalizeIngredientKey(name) !== key),
          manuallyAddedNames: unique([...cleaned.manuallyAddedNames, entry.name]),
          fridgeSeen: removeFridgeSeenByKey(cleaned.fridgeSeen, key),
        },
        [entry.name],
        'marked_need_to_buy',
      );
    });
    void upsertGroceryItem(remoteUserId, entry.name, undefined, undefined, 'marked_need_to_buy');
    showToast(`${entry.name} moved to Need to Buy.`);
  }

  function markEntryBought(entry: GroceryListEntry) {
    const key = normalizeIngredientKey(entry.name);
    if (entry.itemId) {
      const matchingMemoryIds = memoryIdsForEntry(entry);
      setBehavior((current) => {
        const cleaned = cleanupEntryByName(updateLocalStateAfterUserAction(current, 'bought', entry.itemId!), entry);
        return addOwnedTracking(
          addCheckedEntry(
            {
              ...cleaned,
              boughtIds: unique([...cleaned.boughtIds, ...matchingMemoryIds]),
              alreadyHaveIds: cleaned.alreadyHaveIds.filter((id) => !matchingMemoryIds.includes(id)),
              removedIds: cleaned.removedIds.filter((id) => !matchingMemoryIds.includes(id)),
            },
            entry,
          ),
          [entry.name],
          'bought',
        );
      });
      setMemory((current) => current.map((item) => (item.id === entry.itemId ? updateBoughtMemoryItem(item) : item)));
    } else {
      setMemory((current) => [createMemoryItemFromName(entry.name), ...current]);
      setBehavior((current) => {
        const cleaned = cleanupEntryByName(current, entry);
        return addOwnedTracking(
          {
            ...cleaned,
            alreadyHaveNames: cleaned.alreadyHaveNames.filter((name) => normalizeIngredientKey(name) !== key),
            fridgeSeen: removeFridgeSeenByKey(cleaned.fridgeSeen, key),
            checkedOffEntries: addCheckedEntry(cleaned, entry).checkedOffEntries,
          },
          [entry.name],
          'bought',
        );
      });
    }
    void moveGroceryItemToUserIngredients(remoteUserId, entry.name, 'bought');
    showToast(`${entry.name} marked bought. WTF updated your list.`);
  }

  function removeEntry(entry: GroceryListEntry) {
    const key = normalizeIngredientKey(entry.name);
    const matchingMemoryIds = memoryIdsForEntry(entry);
    setBehavior((current) => {
      const removedBase = entry.itemId
        ? {
            ...updateLocalStateAfterUserAction(current, 'removed', entry.itemId),
            removedIds: unique([...current.removedIds, ...matchingMemoryIds]),
          }
        : current;
      const next = cleanupEntryByName(removedBase, entry);

      return {
        ...next,
        alreadyHaveIds: next.alreadyHaveIds.filter((id) => !matchingMemoryIds.includes(id)),
        boughtIds: next.boughtIds.filter((id) => !matchingMemoryIds.includes(id)),
        alreadyHaveNames: next.alreadyHaveNames.filter((name) => normalizeIngredientKey(name) !== key),
        fridgeSeen: removeFridgeSeenByKey(next.fridgeSeen, key),
        usedForMeals: Object.fromEntries(Object.entries(next.usedForMeals).filter(([name]) => normalizeIngredientKey(name) !== key)),
      };
    });
    void removeUserFoodState(remoteUserId, entry.name);
    showToast(`${entry.name} removed. WTF took the hint.`);
  }

  function showDuplicateToast(name: string, match: DuplicateMatch, source: string): boolean {
    const message =
      match.kind === 'exact'
        ? `Already added! ${match.name} is already in ${match.location}.`
        : `Are you sure you don't already have ${match.name}? You added this already.`;
    showToast(message);
    void logUserItemEvent(remoteUserId, name, match.kind === 'exact' ? 'duplicate_attempt' : 'related_duplicate_attempt', source, {
      canonicalName: match.key,
      displayName: match.name,
    });
    return true;
  }

  function filterNewNeedNames(names: string[]): string[] {
    const seen = new Set<string>();
    return names.filter((name) => {
      const normalized = normalizeReceiptItemName(name);
      const key = normalizeIngredientKey(normalized);
      if (!normalized || seen.has(key)) return false;
      seen.add(key);
      return !findDuplicateFoodMatch(normalized, groceryList, 'need');
    });
  }

  function addManualItem(name: string) {
    const normalized = normalizeReceiptItemName(name);
    if (!normalized) return;
    const key = normalizeIngredientKey(normalized);
    const duplicate = findDuplicateFoodMatch(normalized, groceryList, 'need');
    if (duplicate && showDuplicateToast(normalized, duplicate, 'manual_need')) return;
    setBehavior((current) => ({
      ...addListTracking(current, [normalized], 'manual'),
      manuallyAddedNames: unique([...current.manuallyAddedNames, normalized]),
      alreadyHaveNames: current.alreadyHaveNames.filter((item) => normalizeIngredientKey(item) !== key),
      mealAddedNames: current.mealAddedNames.filter((item) => normalizeIngredientKey(item) !== key),
      fridgeSeen: removeFridgeSeenByKey(current.fridgeSeen, key),
      checkedOffEntries: current.checkedOffEntries.filter((entry) => entry.name.toLowerCase() !== normalized.toLowerCase()),
      addCounts: {
        ...current.addCounts,
        [normalized.toLowerCase()]: (current.addCounts[normalized.toLowerCase()] ?? 0) + 1,
      },
    }));
    void upsertGroceryItem(remoteUserId, normalized, undefined, undefined, 'manual');
    showToast(`${normalized} added.`);
  }

  function addAlreadyHaveItem(name: string) {
    const normalized = normalizeReceiptItemName(name);
    if (!normalized) return;
    const key = normalizeIngredientKey(normalized);
    const duplicate = findDuplicateFoodMatch(normalized, groceryList, 'have');
    if (duplicate?.location === 'Already Have' && showDuplicateToast(normalized, duplicate, 'manual_have')) return;
    setBehavior((current) => ({
      ...addOwnedTracking(cleanupFoodByKey(current, key), [normalized], 'manual'),
      alreadyHaveNames: unique([...current.alreadyHaveNames, normalized]),
      manuallyAddedNames: current.manuallyAddedNames.filter((item) => normalizeIngredientKey(item) !== key),
      mealAddedNames: current.mealAddedNames.filter((item) => normalizeIngredientKey(item) !== key),
      checkedOffEntries: current.checkedOffEntries.filter((entry) => normalizeIngredientKey(entry.name) !== key),
      addCounts: {
        ...current.addCounts,
        [key]: (current.addCounts[key] ?? 0) + 1,
      },
    }));
    void upsertUserIngredient(remoteUserId, normalized, 'manual');
    showToast(`${normalized} added to Already Have.`);
  }

  function memoryIdsForEntry(entry: GroceryListEntry): string[] {
    const key = normalizeIngredientKey(entry.name);
    const ids = memory.filter((item) => normalizeIngredientKey(item.name) === key).map((item) => item.id);
    return unique(entry.itemId ? [entry.itemId, ...ids] : ids);
  }

  function addUsualsToList() {
    const usualNames = usuals
      .filter((item) => !behavior.alreadyHaveIds.includes(item.id))
      .slice(0, 4)
      .map((item) => item.name);
    const names = filterNewNeedNames(usualNames);
    if (usualNames.length === 0) {
      showToast('No usuals yet. Scan a receipt first.');
      return;
    }
    if (names.length === 0) {
      const duplicate = findDuplicateFoodMatch(usualNames[0], groceryList, 'need');
      if (duplicate) showDuplicateToast(usualNames[0], duplicate, 'usuals');
      else showToast('Usuals are already covered.');
      return;
    }
    setBehavior((current) => ({
      ...addListTracking(current, names, 'usuals'),
      manuallyAddedNames: unique([...current.manuallyAddedNames, ...names]),
    }));
    names.forEach((name) => void upsertGroceryItem(remoteUserId, name, undefined, undefined, 'usuals'));
    showToast('Usuals added. Rice can still sit this one out.');
  }

  function addMealMissingItems(meal: MealSuggestion) {
    const names = filterNewNeedNames(meal.buy.map((item) => normalizeReceiptItemName(item.replace(', optional', ''))));
    if (names.length === 0) {
      showToast('Already added! Those ingredients are already covered.');
      return;
    }
    setBehavior((current) => ({
      ...addListTracking(current, names, 'meal_missing'),
      mealAddedNames: unique([...current.mealAddedNames, ...names]),
      addCounts: names.reduce(
        (counts, name) => ({
          ...counts,
          [name.toLowerCase()]: (current.addCounts[name.toLowerCase()] ?? 0) + 1,
        }),
        current.addCounts,
      ),
    }));
    names.forEach((name) => void upsertGroceryItem(remoteUserId, name, undefined, undefined, 'meal_missing'));
    showToast(`Missing items added for ${meal.name}.`);
  }

  function addMealUnlockItems(entries: GroceryListEntry[]) {
    const names = filterNewNeedNames(entries.map((entry) => entry.name));
    if (names.length === 0) {
      showToast('Already added! Those unlock items are already covered.');
      return;
    }
    setBehavior((current) => ({
      ...addListTracking(current, names, 'meal_unlock'),
      mealAddedNames: unique([...current.mealAddedNames, ...names]),
    }));
    names.forEach((name) => void upsertGroceryItem(remoteUserId, name, undefined, undefined, 'meal_unlock'));
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
    setBehavior((current) =>
      addOwnedTracking(
        {
          ...cleanupFoodByNames(current, purchasedNames),
          alreadyHaveNames: unique([...current.alreadyHaveNames, ...purchasedNames]),
          boughtIds: [],
          removedIds: [],
          checkedOffEntries: [],
        },
        purchasedNames,
        'receipt',
      ),
    );
    setReceiptCount((current) => current + 1);
    purchasedNames.forEach((name) => void upsertUserIngredient(remoteUserId, name, 'receipt'));
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

    setBehavior((current) => {
      const ownedTracked = addOwnedTracking(cleanupFoodByNames(current, haveNames), haveNames, 'fridge_scan');
      return addListTracking(
        {
          ...ownedTracked,
          alreadyHaveNames: unique([...ownedTracked.alreadyHaveNames, ...haveNames]),
          manuallyAddedNames: unique([
            ...ownedTracked.manuallyAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
            ...needNames,
          ]),
          mealAddedNames: ownedTracked.mealAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
          fridgeSeen: {
            ...ownedTracked.fridgeSeen,
            ...seen,
          },
        },
        needNames,
        'fridge_scan_low',
      );
    });

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
    haveNames.forEach((name) => void upsertUserIngredient(remoteUserId, name, 'fridge_scan'));
    needNames.forEach((name) => void upsertGroceryItem(remoteUserId, name, undefined, undefined, 'fridge_scan_low'));
    showToast('List updated from your fridge photo.');
  }

  function addImportedItems(entries: GroceryListEntry[]) {
    const names = filterNewNeedNames(entries.map((entry) => entry.name));
    if (names.length === 0) {
      showToast('Already added! Those list items are already covered.');
      return;
    }
    setBehavior((current) => ({
      ...addListTracking(current, names, 'import'),
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
    names.forEach((name) => void upsertGroceryItem(remoteUserId, name, undefined, undefined, 'import'));
    showToast("Old list imported. We'll use this to learn your usuals.");
  }

  function addRecipeToList(recipeTitle: string, neededNames: string[]) {
    const names = filterNewNeedNames(neededNames);
    if (names.length === 0) {
      showToast(`${recipeTitle} ingredients are already on your list.`);
      return;
    }
    setBehavior((current) => {
      const nextUsedFor = { ...current.usedForMeals };
      names.forEach((name) => {
        const key = normalizeIngredientKey(name);
        nextUsedFor[key] = unique([...(nextUsedFor[key] ?? []), recipeTitle]);
      });
      return {
        ...addListTracking(current, names, 'recipe_import'),
        mealAddedNames: unique([...current.mealAddedNames, ...names]),
        usedForMeals: nextUsedFor,
        addCounts: names.reduce(
          (counts, name) => ({
            ...counts,
            [name.toLowerCase()]: (current.addCounts[name.toLowerCase()] ?? 0) + 1,
          }),
          current.addCounts,
        ),
      };
    });
    setImportCount((current) => current + 1);
    names.forEach((name) => void upsertGroceryItem(remoteUserId, name, undefined, undefined, 'recipe_import'));
    showToast(`Added ${names.length} item${names.length === 1 ? '' : 's'} from ${recipeTitle}.`);
  }

  function saveMeal(mealId: string) {
    setSavedMealIds((current) => unique([...current, mealId]));
    showToast('Saved. Future you gets the assist.');
  }

  function markMealCooked(mealId: string) {
    setCookedMealIds((current) => unique([...current, mealId]));
    setPlannedMealIds((current) => current.filter((id) => id !== mealId));
    const meal = getMealIdeaById(mealId, mealIdeas);
    if (meal) void upsertUserMealStatus(remoteUserId, meal, 'made');
    showToast('Marked made. We will remember it.');
  }

  function saveMealIdea(meal: MealIdea) {
    setSavedMealIds((current) => unique([...current, meal.id]));
    setBehavior((current) => ({
      ...current,
      likedTags: unique([...current.likedTags, ...meal.tags]),
    }));
    void upsertUserMealStatus(remoteUserId, meal, 'saved');
    showToast(`${meal.name} saved.`);
  }

  function skipMealIdea(meal: MealIdea) {
    setBehavior((current) => ({
      ...current,
      skippedMealIds: unique([...current.skippedMealIds, meal.id]),
    }));
    void upsertUserMealStatus(remoteUserId, meal, 'skipped');
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
    const needKeysByName = new Map(
      reviewed
        .filter((item) => item.status === 'needToBuy')
        .map((item) => [normalizeReceiptItemName(item.name), item.canonicalName ?? normalizeIngredientKey(item.name)]),
    );
    const haveKeys = new Set(reviewed.filter((item) => item.status === 'alreadyHave').map((item) => item.canonicalName ?? normalizeIngredientKey(item.name)));

    setPlannedMealIds((current) => unique([...current, meal.id]));
    setBehavior((current) => {
      const nextUsedFor = { ...current.usedForMeals };
      needNames.forEach((name) => {
        const key = needKeysByName.get(name) ?? normalizeIngredientKey(name);
        nextUsedFor[key] = unique([...(nextUsedFor[key] ?? []), meal.name]);
      });

      const tracked = addListTracking(addOwnedTracking(cleanupFoodByNames(current, haveNames), haveNames, 'ingredient_review'), needNames, 'meal');

      return {
        ...tracked,
        alreadyHaveNames: unique([...current.alreadyHaveNames, ...haveNames]),
        manuallyAddedNames: tracked.manuallyAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
        mealAddedNames: unique([
          ...tracked.mealAddedNames.filter((name) => !haveKeys.has(normalizeIngredientKey(name))),
          ...needNames.filter((name) => !haveKeys.has(needKeysByName.get(name) ?? normalizeIngredientKey(name))),
        ]),
        usedForMeals: nextUsedFor,
        likedTags: unique([...tracked.likedTags, ...meal.tags]),
      };
    });
    void upsertUserMealStatus(remoteUserId, meal, 'planned');
    void syncReviewedMealIngredients(remoteUserId, meal, reviewed);
    showToast(`${meal.name} planned. Missing ingredients added once.`);
  }

  function makeMealAgain(meal: MealIdea) {
    setPlannedMealIds((current) => unique([...current, meal.id]));
    void upsertUserMealStatus(remoteUserId, meal, 'planned');
    showToast(`${meal.name} is back on This Week.`);
  }

  function rateMeal(mealId: string, feedback: MealFeedback) {
    setBehavior((current) => {
      const meal = getMealIdeaById(mealId, mealIdeas);
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
    const meal = getMealIdeaById(mealId, mealIdeas);
    if (meal) void upsertUserMealStatus(remoteUserId, meal, 'made', feedback);
    showToast('Feedback saved.');
  }

  function rankMealIdeas(selectedLanes: string[] = []) {
    return getRankedMealIdeas({
      mealIdeas,
      knownIngredients: knownIngredientNames,
      selectedLanes: selectedLanes.length ? selectedLanes : behavior.selectedDinnerLanes,
      skippedMealIds: behavior.skippedMealIds,
      savedMealIds,
      plannedMealIds,
      madeMealIds: cookedMealIds,
      likedTags: behavior.likedTags,
      dislikedTags: behavior.dislikedTags,
    });
  }

  function generateMealDeck(mode: MealMode, preferences: MealPreferences): DeckMeal[] {
    return buildMealDeck({
      mode,
      preferences,
      mealIdeas,
      inventory: mode === 'inventory' ? knownIngredientNames : [],
      expiringSoon: useSoonNames,
      likedTags: behavior.likedTags,
      dislikedTags: behavior.dislikedTags,
      skippedMealIds: behavior.skippedMealIds,
      savedMealIds,
      plannedMealIds,
      madeMealIds: cookedMealIds,
    });
  }

  function addMealToShopping(meal: MealIdea, neededNames: string[]) {
    setShoppingMealIds((current) => unique([...current, meal.id]));
    const names = filterNewNeedNames(neededNames);
    if (names.length === 0) {
      showToast(`${meal.name} saved. Ingredients already on your list.`);
      return;
    }
    setBehavior((current) => {
      const nextUsedFor = { ...current.usedForMeals };
      names.forEach((name) => {
        const key = normalizeIngredientKey(name);
        nextUsedFor[key] = unique([...(nextUsedFor[key] ?? []), meal.name]);
      });
      return {
        ...addListTracking(current, names, 'meal'),
        mealAddedNames: unique([...current.mealAddedNames, ...names]),
        usedForMeals: nextUsedFor,
        addCounts: names.reduce(
          (counts, name) => ({
            ...counts,
            [name.toLowerCase()]: (current.addCounts[name.toLowerCase()] ?? 0) + 1,
          }),
          current.addCounts,
        ),
      };
    });
    names.forEach((name) => void upsertGroceryItem(remoteUserId, name, meal.id, undefined, 'meal'));
    showToast(`Added ${names.length} item${names.length === 1 ? '' : 's'} for ${meal.name}.`);
  }

  function removeSavedMeal(mealId: string) {
    setSavedMealIds((current) => current.filter((id) => id !== mealId));
    setCookedMealIds((current) => current.filter((id) => id !== mealId));
    setShoppingMealIds((current) => current.filter((id) => id !== mealId));
    void removeUserMealState(remoteUserId, mealId);
    showToast('Removed from Saved Meals.');
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
    mealIdeas,
    groceryList,
    spendingInsight,
    hasGroceryData,
    knownIngredientNames,
    hasReceiptHistory: receiptCount > 0,
    receiptCount,
    useSoon,
    deliveryLineItems,
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
    shoppingMealIds,
    plannedMeals,
    savedMeals,
    madeMeals,
    shoppingMeals,
    likedMeals,
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
    addRecipeToList,
    saveMeal,
    markMealCooked,
    saveMealIdea,
    skipMealIdea,
    rememberDinnerLanes,
    planMealWithIngredients,
    makeMealAgain,
    rateMeal,
    rankMealIdeas,
    generateMealDeck,
    addMealToShopping,
    removeSavedMeal,
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
    shoppingMealIds: [],
    recommendedItems: [],
    receiptCount: 0,
    fridgeScanCount: 0,
    importCount: 0,
  };
}

type DuplicateMatch = {
  name: string;
  key: string;
  kind: 'exact' | 'related';
  location: 'Need to Buy' | 'Already Have' | 'In Cart';
};

function findDuplicateFoodMatch(name: string, list: GroceryList, target: 'need' | 'have'): DuplicateMatch | null {
  const candidateGroups: { location: DuplicateMatch['location']; entries: GroceryListEntry[] }[] = [
    { location: 'Need to Buy', entries: [...list.buyNow, ...list.maybeBuy] },
    { location: 'Already Have', entries: list.probablyAlreadyHave },
    { location: 'In Cart', entries: list.checkedOff },
  ];

  if (target === 'have') {
    candidateGroups.sort((a, b) => (a.location === 'Already Have' ? -1 : b.location === 'Already Have' ? 1 : 0));
  }

  for (const group of candidateGroups) {
    for (const entry of group.entries) {
      const kind = matchItemName(name, entry.name);
      if (kind) {
        return {
          name: entry.name,
          key: normalizeIngredientKey(entry.name),
          kind,
          location: group.location,
        };
      }
    }
  }

  return null;
}

function matchItemName(attemptedName: string, existingName: string): DuplicateMatch['kind'] | null {
  const attemptedKey = normalizeIngredientKey(attemptedName);
  const existingKey = normalizeIngredientKey(existingName);
  if (attemptedKey !== existingKey) return null;
  return normalizeReceiptItemName(attemptedName).toLowerCase() === normalizeReceiptItemName(existingName).toLowerCase() ? 'exact' : 'related';
}

function addListTracking(behavior: BehaviorState, names: string[], source: string): BehaviorState {
  const now = new Date().toISOString();
  const listAddedAt = { ...behavior.listAddedAt };
  const listLastAddedAt = { ...behavior.listLastAddedAt };
  const listAddSources = { ...behavior.listAddSources };

  names.forEach((name) => {
    const key = normalizeIngredientKey(name);
    if (!listAddedAt[key]) listAddedAt[key] = now;
    listLastAddedAt[key] = now;
    listAddSources[key] = source;
  });

  return {
    ...behavior,
    listAddedAt,
    listLastAddedAt,
    listAddSources,
  };
}

function addOwnedTracking(behavior: BehaviorState, names: string[], source: string): BehaviorState {
  const now = new Date().toISOString();
  const ownedObservedAt = { ...behavior.ownedObservedAt };
  const ownedLastObservedAt = { ...behavior.ownedLastObservedAt };
  const ownedSources = { ...behavior.ownedSources };

  names.forEach((name) => {
    const key = normalizeIngredientKey(name);
    if (!ownedObservedAt[key]) ownedObservedAt[key] = now;
    ownedLastObservedAt[key] = now;
    ownedSources[key] = source;
  });

  return {
    ...behavior,
    ownedObservedAt,
    ownedLastObservedAt,
    ownedSources,
  };
}

function cleanupFoodByKey(behavior: BehaviorState, key: string): BehaviorState {
  return {
    ...behavior,
    manuallyAddedNames: behavior.manuallyAddedNames.filter((name) => normalizeIngredientKey(name) !== key),
    mealAddedNames: behavior.mealAddedNames.filter((name) => normalizeIngredientKey(name) !== key),
    checkedOffEntries: behavior.checkedOffEntries.filter((entry) => normalizeIngredientKey(entry.name) !== key),
    listAddedAt: omitRecordKey(behavior.listAddedAt, key),
    listLastAddedAt: omitRecordKey(behavior.listLastAddedAt, key),
    listAddSources: omitRecordKey(behavior.listAddSources, key),
  };
}

function cleanupFoodByNames(behavior: BehaviorState, names: string[]): BehaviorState {
  return names.reduce((current, name) => cleanupFoodByKey(current, normalizeIngredientKey(name)), behavior);
}

function omitRecordKey(record: Record<string, string>, key: string): Record<string, string> {
  return Object.fromEntries(Object.entries(record).filter(([recordKey]) => recordKey !== key));
}

function normalizeBehavior(behavior: BehaviorState): BehaviorState {
  return {
    ...emptyBehavior,
    ...behavior,
    alreadyHaveNames: behavior.alreadyHaveNames ?? [],
    usedForMeals: behavior.usedForMeals ?? {},
    listAddedAt: behavior.listAddedAt ?? {},
    listLastAddedAt: behavior.listLastAddedAt ?? {},
    listAddSources: behavior.listAddSources ?? {},
    ownedObservedAt: behavior.ownedObservedAt ?? {},
    ownedLastObservedAt: behavior.ownedLastObservedAt ?? {},
    ownedSources: behavior.ownedSources ?? {},
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

function cleanupEntryByName(behavior: BehaviorState, entry: GroceryListEntry, options: { keepAlreadyHave?: boolean } = {}): BehaviorState {
  const key = normalizeIngredientKey(entry.name);
  const checkedOffEntries = behavior.checkedOffEntries.filter(
    (checked) => checked.id !== entry.id && normalizeIngredientKey(checked.name) !== key,
  );

  return {
    ...behavior,
    manuallyAddedNames: behavior.manuallyAddedNames.filter((name) => normalizeIngredientKey(name) !== key),
    mealAddedNames: behavior.mealAddedNames.filter((name) => normalizeIngredientKey(name) !== key),
    alreadyHaveNames: options.keepAlreadyHave
      ? behavior.alreadyHaveNames
      : behavior.alreadyHaveNames.filter((name) => normalizeIngredientKey(name) !== key),
    fridgeSeen: options.keepAlreadyHave ? behavior.fridgeSeen : removeFridgeSeenByKey(behavior.fridgeSeen, key),
    listAddedAt: omitRecordKey(behavior.listAddedAt, key),
    listLastAddedAt: omitRecordKey(behavior.listLastAddedAt, key),
    listAddSources: omitRecordKey(behavior.listAddSources, key),
    checkedOffEntries,
  };
}

function removeFridgeSeenByKey(fridgeSeen: BehaviorState['fridgeSeen'], key: string): BehaviorState['fridgeSeen'] {
  return Object.fromEntries(Object.entries(fridgeSeen).filter(([name]) => normalizeIngredientKey(name) !== key));
}

function idsToMealIdeas(ids: string[], mealIdeas: MealIdea[]): MealIdea[] {
  return ids.map((id) => getMealIdeaById(id, mealIdeas)).filter(Boolean) as MealIdea[];
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
