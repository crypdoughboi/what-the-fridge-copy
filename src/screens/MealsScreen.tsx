import { useEffect, useMemo, useState } from 'react';
import { ListPlus, RefreshCw } from 'lucide-react';
import { ChefMode, MealSuggestion } from '../types';
import { chefModes } from '../data/mockData';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { MealCard } from '../components/MealCard';
import { SectionHeader } from '../components/SectionHeader';
import { getMealsForMode } from '../services/mealGenerationService';

export function MealsScreen({
  hasGroceryData,
  onOpenMeal,
  onAddMissing,
  onBuildList,
}: {
  hasGroceryData: boolean;
  onOpenMeal: (meal: MealSuggestion) => void;
  onAddMissing: (meal: MealSuggestion) => void;
  onBuildList: () => void;
  onScanReceipt: () => void;
}) {
  const [mode, setMode] = useState<ChefMode>('Lazy but good');
  const [generating, setGenerating] = useState(false);
  const meals = useMemo(() => getMealsForMode(mode), [mode]);

  useEffect(() => {
    setGenerating(true);
    const timer = window.setTimeout(() => setGenerating(false), 420);
    return () => window.clearTimeout(timer);
  }, [mode]);

  return (
    <main className="screen-enter space-y-8">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Meals</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Dinner from the list.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          {hasGroceryData ? 'Ideas tied to what you added, scanned, or probably already have.' : 'Add a few items and WTF will suggest dinners you can make.'}
        </p>
      </section>

      {!hasGroceryData ? (
        <Card className="section-enter stagger-1">
          <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink">Add a few items first.</h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">Build a quick list, then come back for dinner ideas that actually fit.</p>
          <Button className="mt-5" full icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={onBuildList}>
            Build List
          </Button>
        </Card>
      ) : (
        <>
          <Card className="section-enter stagger-1">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">Chef mode</p>
              {generating && (
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent">
                  <RefreshCw className="h-4 w-4 animate-spin" strokeWidth={1.75} />
                  Finding dinner
                </span>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {chefModes.map((chefMode) => (
                <button
                  key={chefMode}
                  className={`min-h-10 shrink-0 rounded-pill border px-3 py-2 text-[14px] font-semibold transition ${
                    mode === chefMode ? 'border-ink bg-ink text-paper' : 'border-line bg-surface text-ink active:bg-line/40'
                  }`}
                  onClick={() => setMode(chefMode)}
                >
                  {chefMode}
                </button>
              ))}
            </div>
          </Card>

          {generating ? (
            <Card>
              <div className="space-y-3">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="h-24 rounded-md bg-paper soft-pulse" />
                ))}
              </div>
            </Card>
          ) : (
            <div className="space-y-3">
              {meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} onOpen={onOpenMeal} onAddMissing={onAddMissing} />
              ))}
            </div>
          )}

          <Card>
            <SectionHeader eyebrow="Chef rules" title="How WTF chooses dinner" />
            <div className="mt-3 grid gap-2">
              {['Use what expires first.', 'Add acid or freshness when dinner gets heavy.', 'Avoid random ingredient soup.', 'Texture matters. Crunch earns its spot.'].map((rule) => (
                <div key={rule} className="rounded-md bg-paper px-3 py-2 text-[14px] font-medium text-ink-soft">
                  {rule}
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </main>
  );
}
