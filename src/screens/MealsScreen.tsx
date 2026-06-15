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
    <main className="screen-enter space-y-6">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Meals</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">What's for dinner?</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Pick how you want to start. We'll handle the ideas and the list.</p>
      </section>

      <div className="section-enter stagger-1 space-y-4">
        <HubCard
          icon={<ChefHat className="h-7 w-7" strokeWidth={1.75} />}
          title="WTF Should I Make?"
          description="Start from scratch. Get meal ideas plus a shopping list built from your picks."
          cta="Show me meals"
          onClick={onWtfScratch}
        />
        <HubCard
          icon={<Refrigerator className="h-7 w-7" strokeWidth={1.75} />}
          title="Use What I Have"
          description="Cook from your kitchen first. We'll only suggest a missing ingredient or two if needed."
          cta="Use my kitchen"
          onClick={onUseWhatIHave}
        />
        <HubCard
          icon={<Heart className="h-7 w-7" strokeWidth={1.75} />}
          title="Saved Meals"
          description="Meals you liked, cooked, or added to your shopping list, all in one place."
          cta="View saved"
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
  cta,
  badge,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full rounded-lg border border-line bg-surface p-6 text-left shadow-sm transition duration-150 ease-out active:scale-[0.99] active:bg-paper"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">{icon}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-[23px] font-extrabold leading-tight tracking-[-0.02em] text-ink">{title}</h2>
            {badge ? (
              <span className="mt-1 shrink-0 rounded-pill bg-ink px-2.5 py-1 text-[12px] font-bold text-paper">{badge}</span>
            ) : null}
          </div>
          <p className="mt-2 text-[15px] font-medium leading-[1.45] text-ink-soft">{description}</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-md bg-ink px-4 py-3 text-paper">
        <span className="text-[15px] font-semibold">{cta}</span>
        <ArrowRight className="h-5 w-5" strokeWidth={2} />
      </div>
    </button>
  );
}
