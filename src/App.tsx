import { useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { LoadingState } from './components/LoadingState';
import { Toast } from './components/Toast';
import { useGroceryAppState } from './hooks/useGroceryAppState';
import { scanFridgeOrPantryImage } from './services/fridgeVisionService';
import { normalizeReceiptItems, scanReceiptImage } from './services/receiptOcrService';
import { parseGroceryCapture, parsedResultToReceiptExtraction } from './services/captureParserService';
import { CookedConfirmationScreen } from './screens/CookedConfirmationScreen';
import { DinnerLanePickerScreen } from './screens/DinnerLanePickerScreen';
import { FridgeResultScreen } from './screens/FridgeResultScreen';
import { FridgeScanScreen } from './screens/FridgeScanScreen';
import { AuthScreen } from './screens/AuthScreen';
import { IngredientReviewScreen } from './screens/IngredientReviewScreen';
import { KitchenScreen } from './screens/KitchenScreen';
import { ListScreen } from './screens/ListScreen';
import { MealIdeaScreen } from './screens/MealIdeaScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
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

const captureLoadingSteps = ['Reading the capture...', 'Normalizing grocery names...', 'Updating Kitchen confidence...'];

export default function App() {
  const app = useGroceryAppState();
  const [screen, setScreen] = useState<Screen>('auth');
  const [activeTab, setActiveTab] = useState<Tab>('meals');
  const [screenHistory, setScreenHistory] = useState<Screen[]>([]);
  const [ideaQueue, setIdeaQueue] = useState<MealIdea[]>([]);
  const [ideaIndex, setIdeaIndex] = useState(0);
  const [mealConstraint, setMealConstraint] = useState('');
  const [reviewMeal, setReviewMeal] = useState<MealIdea | null>(null);
  const [detailMeal, setDetailMeal] = useState<MealIdea | null>(null);
  const [consumptionMeal, setConsumptionMeal] = useState<MealIdea | null>(null);
  const [receiptExtraction, setReceiptExtraction] = useState<ReceiptExtraction | null>(null);
  const [fridgeItems, setFridgeItems] = useState<VisionItem[]>([]);
  const [receiptPreviewUrl, setReceiptPreviewUrl] = useState<string | null>(null);
  const [fridgePreviewUrl, setFridgePreviewUrl] = useState<string | null>(null);
  const [receiptLoading, setReceiptLoading] = useState(false);
  const [fridgeLoading, setFridgeLoading] = useState(false);
  const [captureLoading, setCaptureLoading] = useState(false);

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
    setActiveTab('add');
    setReceiptPreviewUrl(null);
    pushScreen('receiptScan', 'add');
  }

  function openFridgeScan() {
    setActiveTab('add');
    setFridgePreviewUrl(null);
    pushScreen('fridgeScan', 'add');
  }

  async function startReceiptScan(file?: File | null) {
    if (file) setReceiptPreviewUrl(URL.createObjectURL(file));
    setActiveTab('add');
    setScreen('receiptScan');
    setReceiptLoading(true);
    const extraction = await normalizeReceiptItems(await scanReceiptImage(file));
    setReceiptExtraction(extraction);
    setReceiptLoading(false);
    pushScreen('receiptReview', 'add');
  }

  async function startFridgeScan(file?: File | null) {
    if (file) setFridgePreviewUrl(URL.createObjectURL(file));
    setActiveTab('add');
    setScreen('fridgeScan');
    setFridgeLoading(true);
    const items = await scanFridgeOrPantryImage(file);
    setFridgeItems(items);
    setFridgeLoading(false);
    pushScreen('fridgeResult', 'add');
  }

  async function startGroceryPhoto(file?: File | null) {
    setActiveTab('add');
    setCaptureLoading(true);
    const parsed = await parseGroceryCapture({ method: 'grocery_photo', file });
    app.applyParsedCapture(parsed);
    setCaptureLoading(false);
    refreshMeals();
    navigateTab('meals');
  }

  async function startVoiceAdd(text: string) {
    setActiveTab('add');
    setCaptureLoading(true);
    const parsed = await parseGroceryCapture({ method: 'voice_add', text });
    app.applyParsedCapture(parsed);
    setCaptureLoading(false);
    refreshMeals();
    navigateTab('meals');
  }

  async function startPastedReceipt(text: string) {
    setActiveTab('add');
    setCaptureLoading(true);
    const parsed = await parseGroceryCapture({ method: 'pasted_receipt', text });
    setReceiptExtraction(parsedResultToReceiptExtraction(parsed));
    setCaptureLoading(false);
    pushScreen('receiptReview', 'add');
  }

  async function startManualCapture(text: string, target: 'have' | 'need') {
    setActiveTab('add');
    setCaptureLoading(true);
    const parsed = await parseGroceryCapture({
      method: 'manual_add',
      text,
      fallbackState: target === 'need' ? 'running_low' : 'confirmed_have',
    });
    app.applyParsedCapture(parsed);
    setCaptureLoading(false);
    navigateTab(target === 'need' ? 'shop' : 'kitchen');
  }

  function confirmReceipt(extraction: ReceiptExtraction) {
    app.confirmReceipt(extraction);
    refreshMeals();
    navigateTab('meals');
  }

  function updateFromFridge(items: VisionItem[]) {
    app.updateListFromFridge(items);
    refreshMeals();
    navigateTab('meals');
  }

  function startMealIdeas() {
    refreshMeals();
    navigateTab('meals');
  }

  function refreshMeals() {
    setIdeaQueue(app.rankMealIdeas([], mealConstraint));
    setIdeaIndex(0);
  }

  function continueFromDinnerLanes(lanes: string[]) {
    app.rememberDinnerLanes(lanes);
    setIdeaQueue(app.rankMealIdeas(lanes, mealConstraint));
    setIdeaIndex(0);
    pushScreen('meals', 'meals');
  }

  function openIngredientReview(meal: MealIdea) {
    setReviewMeal(meal);
    pushScreen('ingredientReview', 'shop');
  }

  function openMealDetail(meal: MealIdea) {
    setDetailMeal(meal);
    pushScreen('mealDetail', activeTab);
  }

  function addReviewedIngredients(meal: MealIdea, reviewed: ReviewedIngredient[]) {
    app.planMealWithIngredients(meal, reviewed);
    setReviewMeal(null);
    navigateTab('shop');
  }

  function markCookedWithPrompt(meal: MealIdea) {
    app.markMealCooked(meal.id);
    setConsumptionMeal(meal);
    pushScreen('cookedConfirmation', 'kitchen');
  }

  function confirmCookedConsumption(meal: MealIdea) {
    app.confirmMealConsumption(meal);
    setConsumptionMeal(null);
    navigateTab('kitchen');
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
            navigateTab('meals');
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
      return <OnboardingSuccessScreen onContinue={() => navigateTab('meals')} />;
    }

    if (captureLoading) {
      return <LoadingState title="Parsing capture" steps={captureLoadingSteps} />;
    }

    if (screen === 'auth' || screen === 'meals') {
      const mealIdeas = ideaQueue.length ? ideaQueue : app.rankMealIdeas([], mealConstraint);
      return (
        <MealIdeaScreen
          ideas={mealIdeas}
          allMeals={app.mealIdeas}
          savedMeals={app.savedMeals}
          index={ideaIndex}
          onIndexChange={setIdeaIndex}
          knownIngredients={app.knownIngredientNames}
          kitchenItems={app.kitchenInventory}
          constraintText={mealConstraint}
          onConstraintTextChange={setMealConstraint}
          onRefreshMeals={refreshMeals}
          onProfile={() => pushScreen('settings')}
          onSkip={app.skipMealIdea}
          onSave={app.saveMealIdea}
          onMakeThisWeek={openIngredientReview}
          onViewRecipe={openMealDetail}
        />
      );
    }

    if (screen === 'shop') {
      return (
        <ListScreen
          list={app.groceryList}
          onBought={app.markEntryBought}
          onAlreadyHave={app.markEntryAlreadyHave}
          onNeedToBuy={app.markEntryNeedToBuy}
          onRemove={app.removeEntry}
          onRebuild={app.rebuildList}
          onGoAdd={() => navigateTab('add')}
          onStartMealIdeas={startMealIdeas}
        />
      );
    }

    if (screen === 'add') {
      return (
        <ScanScreen
          onReceiptFile={startReceiptScan}
          onFridgeFile={startFridgeScan}
          onGroceryFile={startGroceryPhoto}
          onVoiceAdd={startVoiceAdd}
          onPastedReceipt={startPastedReceipt}
          onManualAdd={startManualCapture}
        />
      );
    }

    if (screen === 'receiptScan') {
      return receiptLoading ? (
        <LoadingState title="Scanning receipt" steps={receiptLoadingSteps} />
      ) : (
        <ReceiptScanScreen previewUrl={receiptPreviewUrl} onBack={() => goBack('add')} onFile={startReceiptScan} />
      );
    }

    if (screen === 'receiptReview' && receiptExtraction) {
      return <ReceiptReviewScreen extraction={receiptExtraction} onConfirm={confirmReceipt} onBack={() => goBack('receiptScan')} />;
    }

    if (screen === 'receiptSuccess') {
      return <ReceiptSuccessScreen onList={() => navigateTab('shop')} onMeals={() => navigateTab('meals')} onScanAnother={openReceiptScan} />;
    }

    if (screen === 'fridgeScan') {
      return fridgeLoading ? (
        <LoadingState title="Checking fridge" steps={fridgeLoadingSteps} />
      ) : (
        <FridgeScanScreen previewUrl={fridgePreviewUrl} onBack={() => goBack('add')} onFile={startFridgeScan} />
      );
    }

    if (screen === 'fridgeResult') {
      return <FridgeResultScreen items={fridgeItems} onBack={() => goBack('fridgeScan')} onUpdateList={updateFromFridge} onScanPantry={openFridgeScan} />;
    }

    if (screen === 'kitchen') {
      return (
        <KitchenScreen
          items={app.kitchenInventory}
          plannedMeals={app.plannedMeals}
          madeMeals={app.madeMeals}
          onConfirmItem={app.confirmInventoryItem}
          onMarkGone={app.markInventoryGone}
          onViewRecipe={openMealDetail}
          onMarkCooked={markCookedWithPrompt}
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
          allMeals={app.mealIdeas}
          savedMeals={app.savedMeals}
          index={ideaIndex}
          onIndexChange={setIdeaIndex}
          knownIngredients={app.knownIngredientNames}
          kitchenItems={app.kitchenInventory}
          constraintText={mealConstraint}
          onConstraintTextChange={setMealConstraint}
          onRefreshMeals={refreshMeals}
          onProfile={() => pushScreen('settings')}
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
          knownIngredients={app.knownIngredientNames}
          kitchenItems={app.kitchenInventory}
          onBack={() => goBack(activeTab)}
          onSave={app.saveMealIdea}
          onMakeThisWeek={openIngredientReview}
          onMarkMade={markCookedWithPrompt}
        />
      );
    }

    if (screen === 'ingredientReview' && reviewMeal) {
      return (
        <IngredientReviewScreen
          meal={reviewMeal}
          knownIngredients={app.knownIngredientNames}
          kitchenItems={app.kitchenInventory}
          needToBuyNames={needToBuyNames}
          onBack={() => goBack('meals')}
          onAddMissing={addReviewedIngredients}
        />
      );
    }

    if (screen === 'cookedConfirmation' && consumptionMeal) {
      return (
        <CookedConfirmationScreen
          meal={consumptionMeal}
          onConfirm={confirmCookedConsumption}
          onSkip={() => {
            setConsumptionMeal(null);
            navigateTab('kitchen');
          }}
        />
      );
    }

    if (screen === 'spend') {
      return (
        <SpendScreen
          spending={app.spendingInsight}
          hasReceiptHistory={app.hasReceiptHistory}
          onGoList={() => navigateTab('shop')}
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
            setActiveTab('meals');
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
  return screen === 'meals' || screen === 'add' || screen === 'shop' || screen === 'kitchen';
}
