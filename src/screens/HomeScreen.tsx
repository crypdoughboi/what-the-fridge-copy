import { ChefHat, ClipboardList, ListChecks, ReceiptText, Refrigerator, Settings, Sparkles } from 'lucide-react';
import { GroceryList, GroceryMemoryItem, MealSuggestion, SpendingInsight } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/BrandMark';
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
  onGoList,
  onGoScan,
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
  onGoList: () => void;
  onGoScan: () => void;
  onScanReceipt: () => void;
  onCheckFridge: () => void;
  onSettings: () => void;
}) {
  const bestMeal = meals[0];
  const nextItems = list.buyNow.slice(0, 4);
  const alreadyHave = list.probablyAlreadyHave.slice(0, 3);

  return (
    <main className="screen-enter space-y-5">
      <div className="flex items-start justify-between gap-3">
        <Logo />
        <button
          className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80 text-ink shadow-card active:scale-[0.98]"
          onClick={onSettings}
          aria-label="Settings"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {!hasGroceryData ? (
        <FreshStartHome onGoList={onGoList} onGoScan={onGoScan} onScanReceipt={onScanReceipt} onCheckFridge={onCheckFridge} />
      ) : (
        <>
          <section>
            <p className="text-[12px] font-black uppercase text-herb">Start here</p>
            <h1 className="mt-1 text-[32px] font-black leading-[1.04] text-ink">Dinner, then the list.</h1>
            <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
              One dinner idea, the next things to buy, and the stuff to check before rebuying.
            </p>
          </section>

          <Card className="bg-ink text-cream">
            <p className="text-[12px] font-black uppercase text-butter">Tonight</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">{bestMeal.name}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-cream/75">{bestMeal.whyThisWorks}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/14 px-3 py-1.5 text-xs font-black text-cream">{bestMeal.time}</span>
              <span className="rounded-full bg-white/14 px-3 py-1.5 text-xs font-black text-cream">{bestMeal.effort}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button className="bg-cream text-ink" onClick={() => onOpenMeal(bestMeal)}>
                Cook this
              </Button>
              <Button className="bg-white/14 text-cream" onClick={() => onAddMissing(bestMeal)}>
                Add missing
              </Button>
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[12px] font-black uppercase text-herb">Live shop</p>
                <h2 className="mt-1 text-xl font-black text-ink">{nextItems.length > 0 ? `${nextItems.length} things to buy now.` : 'No must-buys yet.'}</h2>
              </div>
              <ListChecks className="mt-1 h-5 w-5 text-herb" />
            </div>
            <div className="mt-4 space-y-2">
              {nextItems.length > 0 ? (
                nextItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 rounded-2xl bg-linen/72 px-3 py-2.5">
                    <span className="h-5 w-5 rounded-full border-2 border-ink/35 bg-white" />
                    <div className="min-w-0">
                      <p className="text-sm font-black text-ink">{item.name}</p>
                      <p className="text-[11px] font-bold text-steel">{item.section}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl bg-linen/72 p-3 text-sm font-bold leading-relaxed text-steel">
                  Add an item, scan a receipt, or pick a dinner. WTF will keep it tidy.
                </p>
              )}
            </div>
            <Button className="mt-4" full onClick={onGoList}>
              Open shopping list
            </Button>
          </Card>

          {useSoon.length > 0 && <UseSoonCard items={useSoon} />}

          <Card>
            <p className="text-[12px] font-black uppercase text-tomato">Check before buying</p>
            <h2 className="mt-1 text-xl font-black text-ink">{alreadyHave.length > 0 ? 'Fridge says maybe no.' : "Want a better don't-buy list?"}</h2>
            <div className="mt-3 space-y-2">
              {alreadyHave.length > 0 ? (
                alreadyHave.map((item) => (
                  <div key={item.id} className="rounded-2xl bg-tomato/10 p-3">
                    <p className="text-sm font-black text-tomato">{item.name}</p>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-tomato/75">{item.reason}</p>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl bg-linen/72 p-3 text-sm font-bold leading-relaxed text-steel">
                  Scan the fridge once. That is how WTF starts telling you what not to buy.
                </p>
              )}
            </div>
            <Button className="mt-4" variant="secondary" full icon={<Refrigerator className="h-4 w-4" />} onClick={onCheckFridge}>
              Check fridge
            </Button>
          </Card>

          {hasReceiptHistory ? (
            <Card>
              <p className="text-[12px] font-black uppercase text-steel">Spend</p>
              <h2 className="mt-1 text-xl font-black text-ink">${spending.monthlySpend} this month</h2>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-steel">{spending.plainEnglishInsight}</p>
            </Card>
          ) : (
            <Card>
              <p className="text-[12px] font-black uppercase text-steel">Spend</p>
              <h2 className="mt-1 text-xl font-black text-ink">Spending starts with receipts.</h2>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-steel">
                Scan one receipt and the grocery spend screen stops being a guessing game.
              </p>
              <Button className="mt-4" variant="secondary" full icon={<ReceiptText className="h-4 w-4" />} onClick={onScanReceipt}>
                Scan receipt
              </Button>
            </Card>
          )}
        </>
      )}
    </main>
  );
}

function FreshStartHome({
  onGoList,
  onGoScan,
  onScanReceipt,
  onCheckFridge,
}: {
  onGoList: () => void;
  onGoScan: () => void;
  onScanReceipt: () => void;
  onCheckFridge: () => void;
}) {
  return (
    <>
      <section>
        <p className="text-[12px] font-black uppercase text-herb">Fresh account</p>
        <h1 className="mt-1 text-[32px] font-black leading-[1.04] text-ink">Start with one clue.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          Scan a receipt, check the fridge, or paste an old list. No inventory homework.
        </p>
      </section>

      <Card className="bg-ink text-cream">
        <p className="text-[12px] font-black uppercase text-butter">Best first move</p>
        <h2 className="mt-2 text-2xl font-black leading-tight">Scan your latest receipt.</h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-cream/75">
          WTF learns what you bought, what you probably still have, and what dinner can happen.
        </p>
        <Button className="mt-5 bg-cream text-ink" full icon={<ReceiptText className="h-4 w-4" />} onClick={onScanReceipt}>
          Scan receipt
        </Button>
      </Card>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary" icon={<Refrigerator className="h-4 w-4" />} onClick={onCheckFridge}>
          Check fridge
        </Button>
        <Button variant="secondary" icon={<ClipboardList className="h-4 w-4" />} onClick={onGoScan}>
          Paste old list
        </Button>
        <Button variant="secondary" icon={<ListChecks className="h-4 w-4" />} onClick={onGoList}>
          Start list
        </Button>
        <Button variant="secondary" icon={<ChefHat className="h-4 w-4" />} onClick={onGoScan}>
          Add clues
        </Button>
      </div>

      <Card>
        <SectionHeader eyebrow="What happens next" title="The app starts blank." />
        <div className="mt-4 space-y-2">
          {[
            ['Receipts', 'Build grocery memory and spending.'],
            ['Fridge photos', "Move things to the don't-buy list."],
            ['Old lists', 'Start learning your usuals.'],
          ].map(([title, text]) => (
            <div key={title} className="flex items-start gap-3 rounded-2xl bg-linen/72 p-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-herb" />
              <div>
                <p className="text-sm font-black text-ink">{title}</p>
                <p className="mt-0.5 text-xs font-bold leading-relaxed text-steel">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function UseSoonCard({ items }: { items: GroceryMemoryItem[] }) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[12px] font-black uppercase text-tomato">Use soon</p>
          <h2 className="mt-1 text-xl font-black text-ink">Use these first.</h2>
        </div>
        <Pill tone="red">Fridge clock</Pill>
      </div>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-2xl bg-linen/72 px-3 py-2.5">
            <div>
              <p className="text-sm font-black text-ink">{item.name}</p>
              <p className="text-[11px] font-bold text-steel">Bought {getDaysSince(item.lastBoughtDate)} days ago</p>
            </div>
            <Pill tone={getDaysSince(item.lastBoughtDate) >= item.estimatedShelfLifeDays - 1 ? 'red' : 'gold'}>
              {item.estimatedShelfLifeDays} days
            </Pill>
          </div>
        ))}
      </div>
    </Card>
  );
}
