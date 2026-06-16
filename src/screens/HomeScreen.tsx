import { ArrowRight, CalendarDays, ChefHat, CircleUserRound, ListChecks, ScanLine } from 'lucide-react';
import { ReactNode } from 'react';
import { GroceryList, MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function HomeScreen({
  plannedMeals,
  list,
  onStartMealIdeas,
  onGoMeals,
  onGoList,
  onGoScan,
  onSettings,
}: {
  plannedMeals: MealIdea[];
  list: GroceryList;
  onStartMealIdeas: () => void;
  onGoMeals: () => void;
  onGoList: () => void;
  onGoScan: () => void;
  onSettings: () => void;
}) {
  const needCount = list.buyNow.length + list.maybeBuy.length;

  return (
    <main className="screen-enter space-y-6">
      <div className="section-enter flex items-center justify-between gap-3">
        <h1 className="font-display text-[22px] font-extrabold tracking-[-0.03em] text-ink">What The Fridge</h1>
        <button
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-surface text-ink shadow-sm transition active:scale-[0.98]"
          onClick={onSettings}
          aria-label="Account"
          title="Account"
        >
          <CircleUserRound className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </div>

      <button
        type="button"
        onClick={onStartMealIdeas}
        className="section-enter stagger-1 block w-full overflow-hidden rounded-lg bg-[linear-gradient(140deg,#3a5e3c_0%,#2f5131_55%,#21301b_100%)] p-6 text-left shadow-md transition active:scale-[0.99]"
      >
        <div className="flex items-start gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-white/15 text-white">
            <ChefHat className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">What to cook</p>
            <h2 className="mt-1 font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">WTF Should I Make?</h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-white/85">Meal ideas plus a shopping list, built around what you like.</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-md bg-white/15 px-4 py-3 text-white">
          <span className="text-[15px] font-semibold">Show me meals</span>
          <ArrowRight className="h-5 w-5" strokeWidth={2} />
        </div>
      </button>

      <div className="section-enter stagger-2 grid grid-cols-2 gap-3">
        <ActionTile
          icon={<ListChecks className="h-6 w-6" strokeWidth={1.75} />}
          eyebrow="Buy"
          title="Grocery List"
          subtitle={needCount ? `${needCount} to buy` : 'See what you need'}
          onClick={onGoList}
        />
        <ActionTile
          icon={<ScanLine className="h-6 w-6" strokeWidth={1.75} />}
          eyebrow="Use"
          title="Add Food"
          subtitle="Scan or type"
          onClick={onGoScan}
        />
      </div>

      <Card className="section-enter stagger-3">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <CalendarDays className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">This week</p>
            <h2 className="font-display text-[19px] font-bold leading-tight tracking-[-0.02em] text-ink">
              {plannedMeals.length ? `${plannedMeals.length} meal${plannedMeals.length === 1 ? '' : 's'} planned` : 'Nothing planned yet'}
            </h2>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {plannedMeals.length ? (
            plannedMeals.slice(0, 2).map((meal) => (
              <div key={meal.id} className="rounded-md bg-paper p-3">
                <p className="text-[15px] font-semibold text-ink">{meal.name}</p>
                <p className="mt-0.5 line-clamp-2 text-[13px] font-medium leading-relaxed text-muted">{meal.description}</p>
              </div>
            ))
          ) : (
            <p className="rounded-md bg-paper p-3 text-[14px] font-medium leading-relaxed text-ink-soft">
              Pick meals and we'll build the shopping list from what's missing.
            </p>
          )}
        </div>

        <Button className="mt-4" variant="secondary" full onClick={onGoMeals}>
          {plannedMeals.length ? 'Go to Meals' : 'Plan this week'}
        </Button>
      </Card>
    </main>
  );
}

function ActionTile({
  icon,
  eyebrow,
  title,
  subtitle,
  onClick,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-full flex-col rounded-lg border border-line bg-surface p-4 text-left shadow-sm transition active:scale-[0.98] active:bg-paper"
    >
      <div className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent">{icon}</div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{eyebrow}</p>
      <h3 className="mt-0.5 font-display text-[18px] font-bold leading-tight tracking-[-0.02em] text-ink">{title}</h3>
      <p className="mt-1 text-[13px] font-medium leading-snug text-ink-soft">{subtitle}</p>
    </button>
  );
}
