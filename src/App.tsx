import { useEffect, useMemo, useRef, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { LoadingState } from './components/LoadingState';
import { Toast } from './components/Toast';
import { ShareMealSheet } from './components/ShareMealSheet';
import { SubstitutionSheet } from './components/SubstitutionSheet';
import { track } from './services/analyticsService';
import { useGroceryAppState } from './hooks/useGroceryAppState';
import { scanFridgeOrPantryImage } from './services/fridgeVisionService';
import { normalizeReceiptItems, scanReceiptImage } from './services/receiptOcrService';
import { FridgeResultScreen } from './screens/FridgeResultScreen';
import { FridgeScanScreen } from './screens/FridgeScanScreen';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { IngredientReviewScreen } from './screens/IngredientReviewScreen';
import { ListScreen } from './screens/ListScreen';
import { MealDeckScreen } from './screens/MealDeckScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { MealPreferencesScreen } from './screens/MealPreferencesScreen';
import { MealsScreen } from './screens/MealsScreen';
import { SavedMealsScreen } from './screens/SavedMealsScreen';
import { ReceiptReviewScreen } from './screens/ReceiptReviewScreen';
import { ReceiptScanScreen } from './screens/ReceiptScanScreen';
import { ReceiptSuccessScreen } from './screens/ReceiptSuccessScreen';
import { ScanScreen } from './screens/ScanScreen';
import { RecipeImportScreen } from './screens/RecipeImportScreen';
import { RecipeReviewScreen } from './screens/RecipeReviewScreen';
import { DeliveryScreen } from './screens/DeliveryScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { SpendScreen } from './screens/SpendScreen';
import { getMealNeededNames } from './services/mealGenerationService';
import { isAiFeedAvailable, mergeAiIntoDeck } from './services/aiMealFeedService';
import { importRecipeFromImage } from './services/recipeImportService';
import { createInstacartListUrl } from './services/instacartService';
import { defaultMealPreferences, restrictionsFromProfile } from './data/mealPreferenceOptions';
import { DeckMeal, DeliveryQuote, GroceryListEntry, ImportedRecipe, MealIdea, MealMode, MealPreferences, ReceiptExtraction, ReviewedIngredient, Screen, SubstitutionSuggestion, Tab, VisionItem } from './types';

const receiptLoadingSteps = [
  'Reading the receipt...',
  'Translating grocery hieroglyphics...',
  'Cleaning up weird item names...',
  'Updating your usuals...',
];

const fridgeLoadingSteps = [
  'Checking the fridge...',
  'Looking for things you already have...',
  "Building your don't-buy list...",
  'Finding dinner in the chaos...',
];

const recipeLoadingSteps = [
  'Reading the recipe...',
  'Pulling out the ingredients...',
  'Sorting staples from groceries...',
  'Matching it to your list...',
];

const authLoadingSteps = ['Checking your account...', 'Loading your saved setup...', 'Keeping receipts private...'];

export default function App() {
  const app = useGroceryAppState();
  const [screen, setScreen] = useState<Screen>('auth');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [screenHistory, setScreenHistory] = useState<Screen[]>([]);
  const [mealMode, setMealMode] = useState<MealMode>('scratch');
  const [mealPreferences, setMealPreferences] = useState<MealPreferences>(defaultMealPreferences);
  const [deck, setDeck] = useState<DeckMeal[]>([]);
  const [deckIndex, setDeckIndex] = useState(0);
  const [deckLoading, setDeckLoading] = useState(false);
  const [aiDeckLoading, setAiDeckLoading] = useState(false);
  // When set, the deck cooks from these names (the grocery list) instead of the
  // saved kitchen inventory. Set by "Turn this list into dinner ideas".
  const [deckInventory, setDeckInventory] = useState<string[] | null>(null);
  const [swapEntry, setSwapEntry] = useState<GroceryListEntry | null>(null);
  // Guards against stale AI results landing in a deck the user has since regenerated.
  const deckGeneration = useRef(0);
  const deckIndexRef = useRef(0);
  const [reviewMeal, setReviewMeal] = useState<MealIdea | null>(null);
  const [detailMeal, setDetailMeal] = useState<MealIdea | null>(null);
  const [receiptExtraction, setReceiptExtraction] = useState<ReceiptExtraction | null>(null);
  const [fridgeItems, setFridgeItems] = useState<VisionItem[]>([]);
  const [receiptPreviewUrl, setReceiptPreviewUrl] = useState<string | null>(null);
  const [fridgePreviewUrl, setFridgePreviewUrl] = useState<string | null>(null);
  const [receiptLoading, setReceiptLoading] = useState(false);
  const [fridgeLoading, setFridgeLoading] = useState(false);
  const [recipe, setRecipe] = useState<ImportedRecipe | null>(null);
  const [recipePreviewUrl, setRecipePreviewUrl] = useState<string | null>(null);
  const [recipeLoading, setRecipeLoading] = useState(false);
  const [shareMeal, setShareMeal] = useState<MealIdea | null>(null);

  // One app_opened event per session load.
  useEffect(() => {
    track('app_opened');
  }, []);

  // AI results can land while the user is mid-swipe; the merge needs the live index
  // without re-running anything, so mirror it into a ref.
  useEffect(() => {
    deckIndexRef.current = deckIndex;
  }, [deckIndex]);

  const needToBuyNames = useMemo(
    () => [...app.groceryList.buyNow, ...app.groceryList.maybeBuy].map((entry) => entry.name),
    [app.groceryList.buyNow, app.groceryList.maybeBuy],
  );

  function navigateTab(tab: Tab) {
    setActiveTab(tab);
    setScreen(tab);
    setScreenHistory([]);
    if (tab === 'list') track('grocery_list_opened');
  }

  function openShareMeal(meal: MealIdea) {
    track('share_meal_card_clicked', { mealId: meal.id, mealName: meal.name });
    setShareMeal(meal);
  }

  function pushScreen(nextScreen: Screen, tab?: Tab) {
    setScreenHistory((current) => (screen === nextScreen ? current : [...current, screen].slice(-10)));
    if (tab) setActiveTab(tab);
    setScreen(nextScreen);
  }

  function goBack(fallback: Screen = activeTab) {
    const previous = screenHistory[screenHistory.length - 1];
    if (previous) {
      setScreenHistory((current) => current.slice(0, -1));
      setScreen(previous);
      if (isTab(previous)) setActiveTab(previous);
      return;
    }
    setScreen(fallback);
    if (isTab(fallback)) setActiveTab(fallback);
  }

  function openReceiptScan() {
    setActiveTab('scan');
    setReceiptPreviewUrl(null);
    pushScreen('receiptScan', 'scan');
  }

  function openFridgeScan() {
    setActiveTab('scan');
    setFridgePreviewUrl(null);
    pushScreen('fridgeScan', 'scan');
  }

  async function startReceiptScan(file?: File | null) {
    if (file) setReceiptPreviewUrl(URL.createObjectURL(file));
    setActiveTab('scan');
    setScreen('receiptScan');
    setReceiptLoading(true);
    const extraction = await normalizeReceiptItems(await scanReceiptImage(file));
    setReceiptExtraction(extraction);
    setReceiptLoading(false);
    pushScreen('receiptReview', 'scan');
  }

  async function startFridgeScan(file?: File | null) {
    if (file) setFridgePreviewUrl(URL.createObjectURL(file));
    setActiveTab('scan');
    setScreen('fridgeScan');
    setFridgeLoading(true);
    const items = await scanFridgeOrPantryImage(file);
    setFridgeItems(items);
    setFridgeLoading(false);
    pushScreen('fridgeResult', 'scan');
  }

  function openRecipeImport() {
    setRecipePreviewUrl(null);
    pushScreen('recipeImport', 'scan');
  }

  async function startRecipeImport(file?: File | null) {
    if (file) setRecipePreviewUrl(URL.createObjectURL(file));
    setActiveTab('scan');
    setScreen('recipeImport');
    setRecipeLoading(true);
    const imported = await importRecipeFromImage(file);
    setRecipe(imported);
    setRecipeLoading(false);
    pushScreen('recipeReview', 'scan');
  }

  function addRecipeToList(recipeTitle: string, neededNames: string[], haveNames: string[] = []) {
    app.addRecipeToList(recipeTitle, neededNames, haveNames);
    navigateTab('list');
  }

  function openDelivery() {
    pushScreen('delivery', 'list');
  }

  async function checkoutDelivery(quote: DeliveryQuote) {
    // Instacart: build a real Instacart cart from the list via the Developer Platform API
    // when an API key is configured. Without a key, fall back to copying the list to the
    // clipboard and opening Instacart so the user can add the items quickly.
    if (quote.providerId === 'instacart') {
      // Open the tab synchronously (before the await) so it isn't blocked as a popup.
      const tab = window.open('about:blank', '_blank');
      app.showToast('Building your Instacart cart…');
      const url = await createInstacartListUrl(app.deliveryLineItems);
      if (url) {
        if (tab && !tab.closed) tab.location.href = url;
        else window.location.href = url;
        app.showToast('Your Instacart cart is ready.');
        return;
      }
      // No API key configured: copy the list so it's one paste per item on Instacart.
      const copied = await copyListToClipboard(app.deliveryLineItems);
      if (tab && !tab.closed) tab.location.href = quote.url;
      else window.location.href = quote.url;
      app.showToast(copied ? 'List copied — paste each item on Instacart.' : 'Opening Instacart.');
      return;
    }
    window.open(quote.url, '_blank', 'noopener,noreferrer');
    app.showToast(`Opening ${quote.providerName} to finish your order.`);
  }

  async function copyListToClipboard(items: Array<{ name: string }>): Promise<boolean> {
    const text = items.map((item) => item.name).filter(Boolean).join('\n');
    if (!text) return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  function confirmReceipt(extraction: ReceiptExtraction) {
    app.confirmReceipt(extraction);
    navigateTab('list');
  }

  function updateFromFridge(items: VisionItem[]) {
    app.updateListFromFridge(items);
    navigateTab('list');
  }

  function openMealPreferences(mode: MealMode, inventoryOverride: string[] | null = null) {
    setDeckInventory(inventoryOverride);
    setMealMode(mode);
    setMealPreferences((current) => {
      const isDefaultRestrictions = current.restrictions.length === 1 && current.restrictions[0] === 'No restrictions';
      return { ...current, restrictions: isDefaultRestrictions ? restrictionsFromProfile(app.profile.dietaryPreferences) : current.restrictions };
    });
    pushScreen('mealPreferences', 'meals');
  }

  function openSavedMeals() {
    pushScreen('savedMeals', 'meals');
  }

  function generateDeck(mode: MealMode, preferences: MealPreferences) {
    setMealMode(mode);
    setMealPreferences(preferences);
    setDeckIndex(0);
    pushScreen('mealDeck', 'meals');
    track('meal_swipe_started', { mode });
    const activeInventory = deckInventory ?? app.knownIngredientNames;
    if (mode === 'inventory' && activeInventory.length === 0) {
      setDeck([]);
      setDeckLoading(false);
      return;
    }
    setDeckLoading(true);
    deckGeneration.current += 1;
    window.setTimeout(() => {
      const staticDeck = app.generateMealDeck(mode, preferences, deckInventory ?? undefined);
      setDeck(staticDeck);
      setDeckIndex(0);
      setDeckLoading(false);
      // The static deck always renders first; AI cards merge into the unseen tail
      // only when the deterministic matches are weak for this inventory.
      void enhanceDeckWithAi(staticDeck, mode, preferences, { force: false });
    }, 450);
  }

  async function enhanceDeckWithAi(staticDeck: DeckMeal[], mode: MealMode, preferences: MealPreferences, options: { force: boolean }) {
    if (!isAiFeedAvailable || aiDeckLoading) return;
    const generation = deckGeneration.current;
    setAiDeckLoading(true);
    try {
      const aiMeals = await app.fetchAiDeckMeals(mode, preferences, staticDeck, { ...options, inventoryOverride: deckInventory ?? undefined });
      if (generation !== deckGeneration.current) return;
      if (aiMeals.length) {
        track('ai_meals_merged', { count: aiMeals.length, forced: options.force });
        setDeck((current) => mergeAiIntoDeck(current, aiMeals, deckIndexRef.current));
        app.showToast(`Added ${aiMeals.length} smart idea${aiMeals.length === 1 ? '' : 's'} for your kitchen.`);
      } else if (options.force) {
        app.showToast('No new ideas this time — try loosening a preference.');
      }
    } finally {
      setAiDeckLoading(false);
    }
  }

  function requestSmartIdeas() {
    track('ai_meals_requested', { mode: mealMode });
    void enhanceDeckWithAi(deck, mealMode, mealPreferences, { force: true });
  }

  function openSwapSheet(entry: GroceryListEntry) {
    track('substitution_opened', { itemName: entry.name });
    setSwapEntry(entry);
  }

  function applySwap(suggestion: SubstitutionSuggestion) {
    if (!swapEntry) return;
    track('substitution_applied', { original: suggestion.original, substitute: suggestion.substitute, type: suggestion.type });
    app.swapListEntry(swapEntry, suggestion);
    setSwapEntry(null);
  }

  function deckLike(deckMeal: DeckMeal) {
    track('meal_liked', { mealId: deckMeal.meal.id, mealName: deckMeal.meal.name });
    app.saveMealIdea(deckMeal.meal);
  }

  function deckPass(deckMeal: DeckMeal) {
    app.skipMealIdea(deckMeal.meal);
  }

  function deckAddToShopping(deckMeal: DeckMeal) {
    app.addMealToShopping(deckMeal.meal, deckMeal.need);
    track('grocery_items_added_from_meal', { mealId: deckMeal.meal.id, source: 'deck', itemCount: deckMeal.need.length });
    // Jump to the list so the update is visible — the key beat of the demo flow.
    navigateTab('list');
  }

  function openIngredientReview(meal: MealIdea) {
    setReviewMeal(meal);
    pushScreen('ingredientReview', 'meals');
  }

  function openMealDetail(meal: MealIdea) {
    setDetailMeal(meal);
    pushScreen('mealDetail', 'meals');
  }

  function addReviewedIngredients(meal: MealIdea, reviewed: ReviewedIngredient[]) {
    app.planMealWithIngredients(meal, reviewed);
    const needCount = reviewed.filter((item) => item.status === 'needToBuy').length;
    track('grocery_items_added_from_meal', { mealId: meal.id, source: 'ingredient_review', itemCount: needCount });
    setReviewMeal(null);
    navigateTab('list');
  }

  function renderScreen() {
    if (!app.authReady) {
      return <LoadingState title="Opening WTF" steps={authLoadingSteps} />;
    }

    if (!app.account) {
      return (
        <AuthScreen
          onGmail={async () => {
            await app.createAccountWithGmail();
            navigateTab('home');
          }}
          onEmail={async (email) => {
            await app.createAccountWithEmail(email);
            navigateTab('home');
          }}
          onGuest={() => {
            app.continueAsGuest();
            navigateTab('home');
          }}
          errorMessage={app.authError}
        />
      );
    }

    if (screen === 'auth' || screen === 'home') {
      return (
        <HomeScreen
          onCook={() => openMealPreferences('scratch')}
          onGoList={() => navigateTab('list')}
          onGoScan={() => navigateTab('scan')}
          onInventory={openFridgeScan}
          onCompare={openDelivery}
          onSettings={() => pushScreen('settings')}
        />
      );
    }

    if (screen === 'list') {
      return (
        <ListScreen
          list={app.groceryList}
          onBought={app.markEntryBought}
          onAlreadyHave={app.markEntryAlreadyHave}
          onNeedToBuy={app.markEntryNeedToBuy}
          onRemove={app.removeEntry}
          onSwap={openSwapSheet}
          onAddManual={app.addManualItem}
          onRebuild={app.rebuildList}
          onScanReceipt={openReceiptScan}
          onSnapFridge={openFridgeScan}
          onGoScan={() => navigateTab('scan')}
          onGetDelivered={openDelivery}
          onStartMealIdeas={() => openMealPreferences('inventory', app.listIngredientNames)}
        />
      );
    }

    if (screen === 'scan') {
      return (
        <ScanScreen
          onScanFridge={openFridgeScan}
          onScanReceipt={openReceiptScan}
          onImportRecipe={openRecipeImport}
          onAddNeed={app.addManualItem}
          onAddHave={app.addAlreadyHaveItem}
        />
      );
    }

    if (screen === 'receiptScan') {
      return receiptLoading ? (
        <LoadingState title="Scanning receipt" steps={receiptLoadingSteps} />
      ) : (
        <ReceiptScanScreen previewUrl={receiptPreviewUrl} onBack={() => goBack('scan')} onFile={startReceiptScan} />
      );
    }

    if (screen === 'receiptReview' && receiptExtraction) {
      return <ReceiptReviewScreen extraction={receiptExtraction} onConfirm={confirmReceipt} onBack={() => goBack('receiptScan')} />;
    }

    if (screen === 'receiptSuccess') {
      return <ReceiptSuccessScreen onList={() => navigateTab('list')} onMeals={() => navigateTab('meals')} onScanAnother={openReceiptScan} />;
    }

    if (screen === 'fridgeScan') {
      return fridgeLoading ? (
        <LoadingState title="Checking fridge" steps={fridgeLoadingSteps} />
      ) : (
        <FridgeScanScreen previewUrl={fridgePreviewUrl} onBack={() => goBack('scan')} onFile={startFridgeScan} />
      );
    }

    if (screen === 'fridgeResult') {
      return <FridgeResultScreen items={fridgeItems} onBack={() => goBack('fridgeScan')} onUpdateList={updateFromFridge} onScanPantry={openFridgeScan} />;
    }

    if (screen === 'recipeImport') {
      return recipeLoading ? (
        <LoadingState title="Reading recipe" steps={recipeLoadingSteps} />
      ) : (
        <RecipeImportScreen previewUrl={recipePreviewUrl} onBack={() => goBack('scan')} onFile={startRecipeImport} />
      );
    }

    if (screen === 'recipeReview' && recipe) {
      return (
        <RecipeReviewScreen
          recipe={recipe}
          knownIngredients={app.knownIngredientNames}
          onBack={() => goBack('recipeImport')}
          onAddToList={addRecipeToList}
        />
      );
    }

    if (screen === 'delivery') {
      return (
        <DeliveryScreen items={app.deliveryLineItems} onBack={() => goBack('list')} onGoList={() => navigateTab('list')} onCheckout={checkoutDelivery} />
      );
    }

    if (screen === 'meals') {
      return (
        <MealsScreen
          savedCount={new Set([...app.savedMealIds, ...app.cookedMealIds, ...app.shoppingMealIds]).size}
          savedPreview={app.likedMeals}
          onWtfScratch={() => openMealPreferences('scratch')}
          onUseWhatIHave={() => openMealPreferences('inventory')}
          onViewSaved={openSavedMeals}
          onOpenMeal={openMealDetail}
        />
      );
    }

    if (screen === 'mealPreferences') {
      return (
        <MealPreferencesScreen
          mode={mealMode}
          source={deckInventory ? 'list' : 'kitchen'}
          initialPreferences={mealPreferences}
          onBack={() => goBack('meals')}
          onSubmit={(preferences) => generateDeck(mealMode, preferences)}
        />
      );
    }

    if (screen === 'mealDeck') {
      return (
        <MealDeckScreen
          deck={deck}
          index={deckIndex}
          onIndexChange={setDeckIndex}
          mode={mealMode}
          loading={deckLoading}
          hasInventory={(deckInventory ?? app.knownIngredientNames).length > 0}
          onBack={() => goBack('mealPreferences')}
          onLike={deckLike}
          onPass={deckPass}
          onCook={(deckMeal) => openMealDetail(deckMeal.meal)}
          onAddToShopping={deckAddToShopping}
          onAddIngredients={() => navigateTab('scan')}
          onStartFromScratch={() => openMealPreferences('scratch')}
          onSmartIdeas={isAiFeedAvailable ? requestSmartIdeas : undefined}
          aiLoading={aiDeckLoading}
          source={deckInventory ? 'list' : 'kitchen'}
        />
      );
    }

    if (screen === 'savedMeals') {
      return (
        <SavedMealsScreen
          liked={app.likedMeals}
          cooked={app.madeMeals}
          shopping={app.shoppingMeals}
          knownIngredients={app.knownIngredientNames}
          onBack={() => goBack('meals')}
          onBrowse={() => openMealPreferences('scratch')}
          onCook={openMealDetail}
          onAddToShopping={(meal) => app.addMealToShopping(meal, getMealNeededNames(meal, app.knownIngredientNames))}
          onShare={openShareMeal}
          onRemove={(meal) => app.removeSavedMeal(meal.id)}
        />
      );
    }

    if (screen === 'mealDetail' && detailMeal) {
      return (
        <MealDetailScreen
          meal={detailMeal}
          saved={app.savedMealIds.includes(detailMeal.id)}
          planned={app.plannedMealIds.includes(detailMeal.id)}
          made={app.cookedMealIds.includes(detailMeal.id)}
          onBack={() => goBack('meals')}
          onSave={(meal) => {
            track('meal_saved', { mealId: meal.id, mealName: meal.name });
            app.saveMealIdea(meal);
          }}
          onMakeThisWeek={openIngredientReview}
          onMarkMade={(meal) => app.markMealCooked(meal.id)}
        />
      );
    }

    if (screen === 'ingredientReview' && reviewMeal) {
      return (
        <IngredientReviewScreen
          meal={reviewMeal}
          knownIngredients={app.knownIngredientNames}
          needToBuyNames={needToBuyNames}
          onBack={() => goBack('meals')}
          onAddMissing={addReviewedIngredients}
        />
      );
    }

    if (screen === 'spend') {
      return (
        <SpendScreen
          spending={app.spendingInsight}
          hasReceiptHistory={app.hasReceiptHistory}
          onGoList={() => navigateTab('list')}
          onScanReceipt={openReceiptScan}
          onExport={() => app.showToast('Spend snapshot exported locally. Real data export is in Settings.')}
        />
      );
    }

    if (screen === 'settings') {
      return (
        <SettingsScreen
          account={app.account}
          profile={app.profile}
          profileConfigured={app.account.provider !== 'guest' && app.completedOnboarding}
          receiptCount={app.receiptCount}
          referralCode={app.referralCode}
          onEnterReferralCode={app.enterReferralCode}
          onClearReferralCode={app.clearReferralCode}
          onBack={() => goBack(activeTab)}
          onToast={app.showToast}
          onSignOut={async () => {
            await app.signOutAccount();
            setScreen('auth');
            setActiveTab('home');
          }}
        />
      );
    }

    return null;
  }

  const showAppChrome = Boolean(app.account);
  // Home provides its own scroll canvas; other signed-in screens get the standard padded one.
  const isHomeCanvas = showAppChrome && (screen === 'home' || screen === 'auth');

  return (
    <div className="phone-shell">
      {!showAppChrome || isHomeCanvas ? renderScreen() : <div className="app-scroll-inner">{renderScreen()}</div>}
      {showAppChrome && <BottomNav activeTab={activeTab} onTabChange={navigateTab} />}
      {swapEntry && (
        <SubstitutionSheet
          request={{
            ingredient: swapEntry.name,
            recipeContext: swapEntry.usedForMeals?.length ? `For ${swapEntry.usedForMeals.join(', ')}` : undefined,
            inventory: app.knownIngredientNames,
            restrictions: app.profile.dietaryPreferences,
            useCase: 'cooking',
          }}
          onApply={applySwap}
          onClose={() => setSwapEntry(null)}
        />
      )}
      {shareMeal && (
        <ShareMealSheet
          meal={shareMeal}
          missingItems={getMealNeededNames(shareMeal, app.knownIngredientNames)}
          onClose={() => setShareMeal(null)}
          onToast={app.showToast}
        />
      )}
      <Toast message={app.toast} />
    </div>
  );
}

function isTab(screen: Screen): screen is Tab {
  return screen === 'home' || screen === 'list' || screen === 'meals' || screen === 'scan';
}
