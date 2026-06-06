import { ArrowLeft, Bookmark, CheckCircle2, Plus } from 'lucide-react';
import { MealSuggestion } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';

export function MealDetailScreen({
  meal,
  saved,
  cooked,
  onBack,
  onAddMissing,
  onSave,
  onCooked,
}: {
  meal: MealSuggestion;
  saved: boolean;
  cooked: boolean;
  onBack: () => void;
  onAddMissing: (meal: MealSuggestion) => void;
  onSave: (mealId: string) => void;
  onCooked: (mealId: string) => void;
}) {
  return (
    <main className="screen-enter space-y-8">
      <button className="inline-flex min-h-10 items-center gap-2 rounded-md text-[14px] font-semibold text-ink-soft" onClick={onBack}>
        <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
        Back to meals
      </button>

      <Card>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">{meal.flavorFamily}</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">{meal.name}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill tone="green">{meal.time}</Pill>
          <Pill>{meal.effort}</Pill>
          <Pill>{meal.healthAngle}</Pill>
        </div>
        <p className="mt-4 text-[15px] font-medium leading-relaxed text-ink-soft">{meal.whyThisWorks}</p>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Ingredients</h2>
        <IngredientGroup title="You likely have" values={meal.uses} tone="green" />
        <IngredientGroup title="Buy only these" values={meal.buy} tone="neutral" />
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Cook it</h2>
        <ol className="mt-3 space-y-3">
          {meal.steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-accent-soft text-[13px] font-semibold text-accent">{index + 1}</span>
              <p className="pt-1 text-[14px] font-medium leading-relaxed text-ink-soft">{step}</p>
            </li>
          ))}
        </ol>
      </Card>

      <Card>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Chef note</p>
        <p className="mt-2 text-[15px] font-semibold leading-relaxed text-ink">{meal.chefNote}</p>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Substitutions</h2>
        <div className="mt-3 space-y-2">
          {meal.substitutions.map((substitution) => (
            <div key={substitution} className="rounded-md bg-paper p-3 text-[14px] font-medium leading-relaxed text-ink-soft">
              {substitution}
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-2">
        <Button icon={<Plus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onAddMissing(meal)}>
          Add missing items to list
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant={cooked ? 'primary' : 'secondary'} icon={<CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onCooked(meal.id)}>
            {cooked ? 'Cooked' : 'Mark cooked'}
          </Button>
          <Button variant={saved ? 'primary' : 'secondary'} icon={<Bookmark className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onSave(meal.id)}>
            {saved ? 'Saved' : 'Save meal'}
          </Button>
        </div>
      </div>
    </main>
  );
}

function IngredientGroup({ title, values, tone }: { title: string; values: string[]; tone: 'green' | 'neutral' }) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Pill key={value} tone={tone}>
            {value}
          </Pill>
        ))}
      </div>
    </div>
  );
}
