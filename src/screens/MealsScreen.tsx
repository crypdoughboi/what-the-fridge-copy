import { ArrowRight, ChefHat, ChevronRight, Heart, Refrigerator, Utensils } from 'lucide-react';
import { ReactNode } from 'react';
import { MealIdea } from '../types';

export function MealsScreen({
  savedCount,
  savedPreview,
  onWtfScratch,
  onUseWhatIHave,
  onViewSaved,
  onOpenMeal,
}: {
  savedCount: number;
  savedPreview: MealIdea[];
  onWtfScratch: () => void;
  onUseWhatIHave: () => void;
  onViewSaved: () => void;
  onOpenMeal: (meal: MealIdea) => void;
}) {
  const preview = savedPreview.slice(0, 3);

  return (
    <main className="screen-enter space-y-5">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Meals</p>
        <h1 className="mt-1.5 font-serif text-[30px] font-bold leading-[1.02] tracking-[-0.01em] text-ink">What's for dinner?</h1>
        <p className="mt-1 text-[14px] font-medium leading-snug text-ink-soft">Pick how you want to start.</p>
      </section>

      <button
        type="button"
        onClick={onWtfScratch}
        className="section-enter stagger-1 flex w-full items-center gap-4 rounded-[24px] border border-line/60 bg-cream p-5 text-left shadow-md transition active:scale-[0.99]"
      >
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-surface shadow-sm">
          <ChefHat className="h-7 w-7" strokeWidth={1.6} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-olive">Start fresh</p>
          <h2 className="mt-0.5 font-serif text-[23px] font-bold leading-[1.0] tracking-[-0.01em] text-ink">WTF should I make?</h2>
          <p className="mt-1 text-[13px] font-medium leading-snug text-ink-soft">Meal ideas plus a shopping list from your picks.</p>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-accent" strokeWidth={2.25} />
      </button>

      <div className="section-enter stagger-2 grid grid-cols-2 gap-3.5">
        <Tile iconColor="text-olive" icon={<Refrigerator className="h-7 w-7" strokeWidth={1.6} />} title="Use What I Have" onClick={onUseWhatIHave} />
        <Tile iconColor="text-terracotta" icon={<Heart className="h-7 w-7" strokeWidth={1.6} />} title="Saved Meals" badge={savedCount > 0 ? savedCount : undefined} onClick={onViewSaved} />
      </div>

      {preview.length > 0 && (
        <section className="section-enter stagger-3 space-y-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-[20px] font-bold tracking-[-0.01em] text-ink">Saved meals</h3>
            <button type="button" onClick={onViewSaved} className="text-[13px] font-semibold text-accent active:opacity-70">
              View all{savedCount > 0 ? ` (${savedCount})` : ''}
            </button>
          </div>
          <div className="space-y-2.5">
            {preview.map((meal) => (
              <SavedMealQuick key={meal.id} meal={meal} onClick={() => onOpenMeal(meal)} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function Tile({ icon, iconColor, title, badge, onClick }: { icon: ReactNode; iconColor: string; title: string; badge?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex aspect-[7/6] flex-col justify-between overflow-hidden rounded-[22px] border border-line/70 bg-surface p-4 text-left shadow-sm transition active:scale-[0.98]"
    >
      <span className={iconColor}>{icon}</span>
      <span className="flex items-end justify-between gap-2">
        <span className="font-serif text-[18px] font-bold leading-tight tracking-[-0.01em] text-ink">{title}</span>
        {badge ? (
          <span className="rounded-pill bg-ink px-2 py-0.5 text-[11px] font-bold text-surface">{badge}</span>
        ) : (
          <ChevronRight className="h-5 w-5 text-muted" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}

function SavedMealQuick({ meal, onClick }: { meal: MealIdea; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-line/70 bg-surface p-3.5 text-left shadow-sm transition active:scale-[0.99] active:bg-paper"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
        <Utensils className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate font-serif text-[17px] font-bold leading-tight tracking-[-0.01em] text-ink">{meal.name}</h4>
        <p className="mt-0.5 text-[12px] font-medium text-muted">
          {meal.timeMinutes} min · {meal.effort}
        </p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted" strokeWidth={2} />
    </button>
  );
}
