import { useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { LoadingState } from './components/LoadingState';
import { Toast } from './components/Toast';
import { useGroceryAppState } from './hooks/useGroceryAppState';
import { scanFridgeOrPantryImage } from './services/fridgeVisionService';
import { normalizeReceiptItems, scanReceiptImage } from './services/receiptOcrService';
import { DinnerLanePickerScreen } from './screens/DinnerLanePickerScreen';
import { FridgeResultScreen } from './screens/FridgeResultScreen';
import { FridgeScanScreen } from './screens/FridgeScanScreen';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { IngredientReviewScreen } from './screens/IngredientReviewScreen';
import { ListScreen } from './screens/ListScreen';
import { MealIdeaScreen } from './screens/MealIdeaScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { MealsScreen } from './screens/MealsScreen';
import { OnboardingScreen, OnboardingSuccessScreen } from './screens/OnboardingScreen';
import { ReceiptReviewScreen } from './screens/ReceiptReviewScreen';
import { ReceiptScanScreen } from './screens/ReceiptScanScreen';
import { ReceiptSuccessScreen } from './screens/ReceiptSuccessScreen';
import { ScanScreen } from './screens/ScanScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { SpendScreen } from './screens/SpendScreen';
import { MealIdea, ReceiptExtraction, ReviewedIngredient, Screen, Tab, VisionItem } from './types';

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
  const [ideaQueue, setIdeaQueue] = useState<MealIdea[]>([]);
  const [ideaIndex, setIdeaIndex] = useState(0);
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

  function startMealIdeas() {
    if (app.knownIngredientNames.length > 0) {
      setIdeaQueue(app.rankMealIdeas());
      setIdeaIndex(0);
      pushScreen('mealIdeas', 'meals');
      return;
    }
    pushScreen('dinnerLanePicker', 'meals');
  }

  function continueFromDinnerLanes(lanes: string[]) {
    app.rememberDinnerLanes(lanes);
    setIdeaQueue(app.rankMealIdeas(lanes));
    setIdeaIndex(0);
    pushScreen('mealIdeas', 'meals');
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
          onStartMealIdeas={startMealIdeas}
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
          onStartMealIdeas={startMealIdeas}
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
          plannedMeals={app.plannedMeals}
          savedMeals={app.savedMeals}
          madeMeals={app.madeMeals}
          onStartIdeas={startMealIdeas}
          onAddWhatIHave={() => navigateTab('scan')}
          onMakeThisWeek={openIngredientReview}
          onMarkMade={(meal) => app.markMealCooked(meal.id)}
          onMakeAgain={openIngredientReview}
          onViewRecipe={openMealDetail}
          onRateMeal={app.rateMeal}
        />
      );
    }

    if (screen === 'dinnerLanePicker') {
      return <DinnerLanePickerScreen onBack={() => goBack('meals')} onContinue={continueFromDinnerLanes} />;
    }

    if (screen === 'mealIdeas') {
      return (
        <MealIdeaScreen
          ideas={ideaQueue}
          index={ideaIndex}
          onIndexChange={setIdeaIndex}
          knownIngredients={app.knownIngredientNames}
          onBack={() => goBack('meals')}
          onSkip={app.skipMealIdea}
          onSave={app.saveMealIdea}
          onMakeThisWeek={openIngredientReview}
          onViewRecipe={openMealDetail}
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
          onBack={() => goBack('mealIdeas')}
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
