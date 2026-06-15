import { useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { LoadingState } from './components/LoadingState';
import { Toast } from './components/Toast';
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
import { OnboardingScreen, OnboardingSuccessScreen } from './screens/OnboardingScreen';
import { ReceiptReviewScreen } from './screens/ReceiptReviewScreen';
import { ReceiptScanScreen } from './screens/ReceiptScanScreen';
import { ReceiptSuccessScreen } from './screens/ReceiptSuccessScreen';
import { ScanScreen } from './screens/ScanScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { SpendScreen } from './screens/SpendScreen';
import { getMealNeededNames } from './services/mealGenerationService';
import { defaultMealPreferences, restrictionsFromProfile } from './data/mealPreferenceOptions';
import { DeckMeal, MealIdea, MealMode, MealPreferences, ReceiptExtraction, ReviewedIngredient, Screen, Tab, VisionItem } from './types';

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
  const [reviewMeal, setReviewMeal] = useState<MealIdea | null>(null);
  const [detailMeal, setDetailMeal] = useState<MealIdea | null>(null);
  const [receiptExtraction, setReceiptExtraction] = useState<ReceiptExtraction | null>(null);
  const [fridgeItems, setFridgeItems] = useState<VisionItem[]>([]);
  const [receiptPreviewUrl, setReceiptPreviewUrl] = useState<string | null>(null);
  const [fridgePreviewUrl, setFridgePreviewUrl] = useState<string | null>(null);
  const [receiptLoading, setReceiptLoading] = useState(false);
  const [fridgeLoading, setFridgeLoading] = useState(false);

  const needToBuyNames = useMemo(
    () => [...app.groceryList.buyNow, ...app.groceryList.maybeBuy].map((entry) => entry.name),
    [app.groceryList.buyNow, app.groceryList.maybeBuy],
  );

  function navigateTab(tab: Tab) {
    setActiveTab(tab);
    setScreen(tab);
    setScreenHistory([]);
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

  function confirmReceipt(extraction: ReceiptExtraction) {
    app.confirmReceipt(extraction);
    navigateTab('list');
  }

  function updateFromFridge(items: VisionItem[]) {
    app.updateListFromFridge(items);
    navigateTab('list');
  }

  function openMealPreferences(mode: MealMode) {
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
    if (mode === 'inventory' && app.knownIngredientNames.length === 0) {
      setDeck([]);
      setDeckLoading(false);
      return;
    }
    setDeckLoading(true);
    window.setTimeout(() => {
      setDeck(app.generateMealDeck(mode, preferences));
      setDeckIndex(0);
      setDeckLoading(false);
    }, 450);
  }

  function deckLike(deckMeal: DeckMeal) {
    app.saveMealIdea(deckMeal.meal);
  }

  function deckPass(deckMeal: DeckMeal) {
    app.skipMealIdea(deckMeal.meal);
  }

  function deckAddToShopping(deckMeal: DeckMeal) {
    app.addMealToShopping(deckMeal.meal, deckMeal.need);
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
          onApple={async () => {
            await app.createAccountWithApple();
            setScreen('onboarding');
          }}
          onGmail={async () => {
            await app.createAccountWithGmail();
            setScreen('onboarding');
          }}
          onEmail={async (email) => {
            await app.createAccountWithEmail(email);
            setScreen('onboarding');
          }}
          onGuest={() => {
            app.continueAsGuest();
            navigateTab('home');
          }}
          errorMessage={app.authError}
        />
      );
    }

    if (!app.completedOnboarding && screen !== 'onboardingSuccess') {
      return (
        <OnboardingScreen
          onComplete={(profile) => {
            app.completeOnboarding(profile);
            setScreen('onboardingSuccess');
          }}
        />
      );
    }

    if (screen === 'onboardingSuccess') {
      return <OnboardingSuccessScreen onContinue={() => navigateTab('home')} />;
    }

    if (screen === 'auth' || screen === 'home') {
      return (
        <HomeScreen
          plannedMeals={app.plannedMeals}
          list={app.groceryList}
          onStartMealIdeas={() => openMealPreferences('scratch')}
          onGoList={() => navigateTab('list')}
          onGoMeals={() => navigateTab('meals')}
          onGoScan={() => navigateTab('scan')}
          onScanReceipt={openReceiptScan}
          onCheckFridge={openFridgeScan}
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
          onAddManual={app.addManualItem}
          onRebuild={app.rebuildList}
          onScanReceipt={openReceiptScan}
          onSnapFridge={openFridgeScan}
          onGoScan={() => navigateTab('scan')}
          onStartMealIdeas={() => openMealPreferences('scratch')}
        />
      );
    }

    if (screen === 'scan') {
      return (
        <ScanScreen
          onReceiptFile={startReceiptScan}
          onFridgeFile={startFridgeScan}
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

    if (screen === 'meals') {
      return (
        <MealsScreen
          savedCount={new Set([...app.savedMealIds, ...app.cookedMealIds, ...app.shoppingMealIds]).size}
          onWtfScratch={() => openMealPreferences('scratch')}
          onUseWhatIHave={() => openMealPreferences('inventory')}
          onViewSaved={openSavedMeals}
        />
      );
    }

    if (screen === 'mealPreferences') {
      return (
        <MealPreferencesScreen
          mode={mealMode}
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
          hasInventory={app.knownIngredientNames.length > 0}
          onBack={() => goBack('mealPreferences')}
          onLike={deckLike}
          onPass={deckPass}
          onCook={(deckMeal) => openMealDetail(deckMeal.meal)}
          onAddToShopping={deckAddToShopping}
          onAddIngredients={() => navigateTab('scan')}
          onStartFromScratch={() => openMealPreferences('scratch')}
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
          onSave={app.saveMealIdea}
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
          recommendedItems={app.recommendedItems}
          onBack={() => goBack(activeTab)}
          onRecommend={app.recommendItem}
          onKeepPrivate={app.keepPrivate}
          onAddToList={app.addManualItem}
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

  const showAppChrome = Boolean(app.account) && app.completedOnboarding && screen !== 'onboardingSuccess';

  return (
    <div className="phone-shell">
      {showAppChrome ? <div className="app-scroll app-scroll-with-nav">{renderScreen()}</div> : renderScreen()}
      {showAppChrome && <BottomNav activeTab={activeTab} onTabChange={navigateTab} />}
      <Toast message={app.toast} />
    </div>
  );
}

function isTab(screen: Screen): screen is Tab {
  return screen === 'home' || screen === 'list' || screen === 'meals' || screen === 'scan';
}
