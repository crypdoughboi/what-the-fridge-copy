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
    <main className="screen-enter space-y-5">
      <button className="inline-flex items-center gap-2 text-sm font-black text-steel" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        Back to meals
      </button>

      <Card className="bg-ink text-cream">
        <p className="text-[12px] font-black uppercase text-butter">{meal.flavorFamily}</p>
        <h1 className="mt-2 text-[31px] font-black leading-tight">{meal.name}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/14 px-3 py-1.5 text-xs font-black">{meal.time}</span>
          <span className="rounded-full bg-white/14 px-3 py-1.5 text-xs font-black">{meal.effort}</span>
          <span className="rounded-full bg-white/14 px-3 py-1.5 text-xs font-black">{meal.healthAngle}</span>
        </div>
        <p className="mt-4 text-sm font-semibold leading-relaxed text-cream/78">{meal.whyThisWorks}</p>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-ink">Ingredients</h2>
        <IngredientGroup title="You likely have" values={meal.uses} tone="green" />
        <IngredientGroup title="Buy only these" values={meal.buy} tone="red" />
      </Card>

      <Card>
        <h2 className="text-xl font-black text-ink">Cook it</h2>
        <ol className="mt-3 space-y-3">
          {meal.steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-herb text-xs font-black text-white">{index + 1}</span>
              <p className="pt-1 text-sm font-bold leading-relaxed text-ink/82">{step}</p>
            </li>
          ))}
        </ol>
      </Card>

      <Card>
        <p className="text-[12px] font-black uppercase text-herb">Chef note</p>
        <p className="mt-2 text-[15px] font-black leading-relaxed text-ink">{meal.chefNote}</p>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-ink">Substitutions</h2>
        <div className="mt-3 space-y-2">
          {meal.substitutions.map((substitution) => (
            <div key={substitution} className="rounded-2xl bg-linen/72 p-3 text-sm font-bold leading-relaxed text-steel">
              {substitution}
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-2">
        <Button icon={<Plus className="h-4 w-4" />} onClick={() => onAddMissing(meal)}>
          Add missing items to list
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant={cooked ? 'primary' : 'secondary'} icon={<CheckCircle2 className="h-4 w-4" />} onClick={() => onCooked(meal.id)}>
            {cooked ? 'Cooked' : 'Mark cooked'}
          </Button>
          <Button variant={saved ? 'primary' : 'secondary'} icon={<Bookmark className="h-4 w-4" />} onClick={() => onSave(meal.id)}>
            {saved ? 'Saved' : 'Save meal'}
          </Button>
        </div>
      </div>
    </main>
  );
}

function IngredientGroup({ title, values, tone }: { title: string; values: string[]; tone: 'green' | 'red' }) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-[11px] font-black uppercase text-steel">{title}</p>
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
