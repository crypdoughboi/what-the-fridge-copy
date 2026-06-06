import { Camera, ChefHat, ListPlus, ReceiptText, Settings } from 'lucide-react';
import { GroceryList, GroceryMemoryItem, MealSuggestion, SpendingInsight } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/BrandMark';
import { Eyebrow } from '../components/Eyebrow';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';
import { getDaysSince } from '../utils/date';

export function HomeScreen({
  meals,
  useSoon,
  list,
  spending,
  hasGroceryData,
  hasReceiptHistory,
  onOpenMeal,
  onAddMissing,
  onAddUsuals,
  onGoList,
  onGoMeals,
  onPasteOldList,
  onScanReceipt,
  onCheckFridge,
  onSettings,
}: {
  meals: MealSuggestion[];
  useSoon: GroceryMemoryItem[];
  list: GroceryList;
  spending: SpendingInsight;
  hasGroceryData: boolean;
  hasReceiptHistory: boolean;
  onOpenMeal: (meal: MealSuggestion) => void;
  onAddMissing: (meal: MealSuggestion) => void;
  onAddUsuals: () => void;
  onGoList: () => void;
  onGoMeals: () => void;
  onPasteOldList: () => void;
  onScanReceipt: () => void;
  onCheckFridge: () => void;
  onSettings: () => void;
}) {
  const bestMeal = meals[0];
  const nextItems = list.buyNow.slice(0, 4);

  return (
    <main className="screen-enter space-y-8">
      <div className="section-enter flex items-start justify-between gap-3">
        <Logo />
        <button
          className="grid h-12 w-12 place-items-center rounded-md border border-line bg-surface text-ink shadow-sm transition active:scale-[0.98]"
          onClick={onSettings}
          aria-label="Settings"
          title="Settings"
        >
          <Settings className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </div>

      <section className="section-enter stagger-1">
        <Eyebrow muted>Welcome</Eyebrow>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Build your list.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Snap, tap, or type. WTF does the rest.</p>
      </section>

      <section className="section-enter stagger-2 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Button icon={<ReceiptText className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanReceipt}>
            Scan a receipt
          </Button>
          <Button icon={<Camera className="h-5 w-5" strokeWidth={1.75} />} onClick={onCheckFridge}>
            Snap your fridge
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <Button variant="ghost" className="min-h-10 px-2 text-[14px]" onClick={onAddUsuals}>
            Add usuals
          </Button>
          <Button variant="ghost" className="min-h-10 px-2 text-[14px]" onClick={onGoList}>
            Type it out
          </Button>
          <Button variant="ghost" className="min-h-10 px-2 text-[14px]" onClick={onPasteOldList}>
            Paste an old list
          </Button>
        </div>
      </section>

      <Card className="section-enter stagger-3">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <ChefHat className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-[21px] font-bold leading-tight tracking-[-0.02em] text-ink">Need dinner ideas?</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">
              Meals turns your list and recent scans into something worth cooking.
            </p>
          </div>
        </div>
        <Button className="mt-4" variant="secondary" full onClick={onGoMeals}>
          See Meals
        </Button>
      </Card>

      {hasGroceryData && (
        <Card className="section-enter stagger-4">
          <SectionHeader eyebrow="Live list" title={nextItems.length > 0 ? `${nextItems.length} things to buy now` : 'Your list is getting started'} />
          <div className="mt-4 space-y-2">
            {nextItems.length > 0 ? (
              nextItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-md bg-paper px-3 py-2.5">
                  <span className="h-5 w-5 rounded-pill border-2 border-ink-soft bg-surface" />
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-ink">{item.name}</p>
                    <p className="text-[13px] font-medium text-muted">{item.section}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="rounded-md bg-paper p-3 text-[14px] font-medium leading-relaxed text-ink-soft">
                Pick a meal or add an item. WTF will keep the list tidy.
              </p>
            )}
          </div>
          <Button className="mt-4" variant="secondary" full icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoList}>
            Open List
          </Button>
        </Card>
      )}

      {useSoon.length > 0 && <UseSoonCard items={useSoon} />}

      {hasGroceryData && bestMeal && (
        <Card>
          <SectionHeader eyebrow="Dinner" title={bestMeal.name} subhead={bestMeal.time} />
          <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink-soft">{bestMeal.whyThisWorks}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button variant="secondary" onClick={() => onOpenMeal(bestMeal)}>
              Cook this
            </Button>
            <Button onClick={() => onAddMissing(bestMeal)}>Add missing</Button>
          </div>
        </Card>
      )}

      {hasReceiptHistory && (
        <Card>
          <SectionHeader eyebrow="Spend" title={`$${spending.monthlySpend} this month`} />
          <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink-soft">{spending.plainEnglishInsight}</p>
        </Card>
      )}
    </main>
  );
}

function UseSoonCard({ items }: { items: GroceryMemoryItem[] }) {
  return (
    <Card>
      <SectionHeader eyebrow="Use soon" title="Use these first" />
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2.5">
            <div>
              <p className="text-[15px] font-semibold text-ink">{item.name}</p>
              <p className="text-[13px] font-medium text-muted">Bought {getDaysSince(item.lastBoughtDate)} days ago</p>
            </div>
            <Pill>{item.estimatedShelfLifeDays} days</Pill>
          </div>
        ))}
      </div>
    </Card>
  );
}
