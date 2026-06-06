import { Camera, ChefHat, ListChecks, ScanLine, Settings } from 'lucide-react';
import { GroceryList, MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/BrandMark';
import { Eyebrow } from '../components/Eyebrow';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';

export function HomeScreen({
  plannedMeals,
  list,
  onStartMealIdeas,
  onGoMeals,
  onGoList,
  onGoScan,
  onScanReceipt,
  onCheckFridge,
  onSettings,
}: {
  plannedMeals: MealIdea[];
  list: GroceryList;
  onStartMealIdeas: () => void;
  onGoMeals: () => void;
  onGoList: () => void;
  onGoScan: () => void;
  onScanReceipt: () => void;
  onCheckFridge: () => void;
  onSettings: () => void;
}) {
  const needToBuy = [...list.buyNow, ...list.maybeBuy].slice(0, 4);

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
        <Eyebrow muted>Home</Eyebrow>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">What are we making?</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Start with dinner, your list, or a quick scan.</p>
        <Button className="mt-5" full icon={<ChefHat className="h-5 w-5" strokeWidth={1.75} />} onClick={onStartMealIdeas}>
          WTF should I make?
        </Button>
      </section>

      <section className="section-enter stagger-2 grid grid-cols-2 gap-3">
        <Button variant="secondary" icon={<ListChecks className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoList}>
          Open List
        </Button>
        <Button variant="secondary" icon={<ScanLine className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoScan}>
          Add food
        </Button>
      </section>

      <Card className="section-enter stagger-3">
        <SectionHeader eyebrow="This week" title={plannedMeals.length ? `${plannedMeals.length} meal${plannedMeals.length === 1 ? '' : 's'} planned` : 'No meals planned yet'} />
        <div className="mt-4 space-y-2">
          {plannedMeals.length ? (
            plannedMeals.slice(0, 2).map((meal) => (
              <div key={meal.id} className="rounded-md bg-paper p-3">
                <p className="text-[15px] font-semibold text-ink">{meal.name}</p>
                <p className="mt-1 text-[13px] font-medium leading-relaxed text-muted">{meal.description}</p>
              </div>
            ))
          ) : (
            <p className="rounded-md bg-paper p-3 text-[14px] font-medium leading-relaxed text-ink-soft">Pick a meal and WTF will build the list from what is missing.</p>
          )}
        </div>
        <Button className="mt-4" variant="secondary" full onClick={onGoMeals}>
          Go to Meals
        </Button>
      </Card>

      <Card>
        <SectionHeader eyebrow="List preview" title={needToBuy.length ? `${needToBuy.length} things to buy` : 'List is quiet'} />
        <div className="mt-4 space-y-2">
          {needToBuy.length ? (
            needToBuy.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2.5">
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-ink">{item.name}</p>
                  {item.usedForMeals?.length ? <p className="text-[13px] font-medium text-muted">Used for {item.usedForMeals.join(', ')}</p> : null}
                </div>
                <Pill>{item.section}</Pill>
              </div>
            ))
          ) : (
            <p className="rounded-md bg-paper p-3 text-[14px] font-medium leading-relaxed text-ink-soft">Choose meals first or add what you have. Either path works.</p>
          )}
        </div>
      </Card>

      <Card>
        <SectionHeader eyebrow="Quick scan" title="Add food data fast" subhead="Receipts and fridge photos help the list stay useful." />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button variant="secondary" icon={<ScanLine className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanReceipt}>
            Receipt
          </Button>
          <Button variant="secondary" icon={<Camera className="h-5 w-5" strokeWidth={1.75} />} onClick={onCheckFridge}>
            Fridge
          </Button>
        </div>
      </Card>
    </main>
  );
}
