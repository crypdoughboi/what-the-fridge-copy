import { ArrowRight, ChefHat, Heart, Refrigerator } from 'lucide-react';
import { ReactNode } from 'react';

export function MealsScreen({
  savedCount,
  onWtfScratch,
  onUseWhatIHave,
  onViewSaved,
}: {
  savedCount: number;
  onWtfScratch: () => void;
  onUseWhatIHave: () => void;
  onViewSaved: () => void;
}) {
  return (
    <main className="screen-enter space-y-5">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Meals</p>
        <h1 className="mt-2 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">What's for dinner?</h1>
        <p className="mt-2 text-[15px] font-medium leading-[1.4] text-ink-soft">Pick how you want to start.</p>
      </section>

      <div className="section-enter stagger-1 space-y-3">
        <HubCard
          icon={<ChefHat className="h-6 w-6" strokeWidth={1.75} />}
          title="WTF Should I Make?"
          description="Start from scratch. Meal ideas plus a shopping list from your picks."
          onClick={onWtfScratch}
        />
        <HubCard
          icon={<Refrigerator className="h-6 w-6" strokeWidth={1.75} />}
          title="Use What I Have"
          description="Cook from your kitchen first. Only a missing ingredient or two if needed."
          onClick={onUseWhatIHave}
        />
        <HubCard
          icon={<Heart className="h-6 w-6" strokeWidth={1.75} />}
          title="Saved Meals"
          description="Meals you liked, cooked, or added to your shopping list, all in one place."
          badge={savedCount > 0 ? savedCount : undefined}
          onClick={onViewSaved}
        />
      </div>
    </main>
  );
}

function HubCard({
  icon,
  title,
  description,
  badge,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-lg border border-line bg-surface p-5 text-left shadow-sm transition duration-150 ease-out active:scale-[0.99] active:bg-paper"
    >
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-[20px] font-extrabold leading-tight tracking-[-0.02em] text-ink">{title}</h2>
          {badge ? <span className="shrink-0 rounded-pill bg-ink px-2.5 py-1 text-[12px] font-bold text-paper">{badge}</span> : null}
        </div>
        <p className="mt-1 text-[14px] font-medium leading-snug text-ink-soft">{description}</p>
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-muted" strokeWidth={2} />
    </button>
  );
}
