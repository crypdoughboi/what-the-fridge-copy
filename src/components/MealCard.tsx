import { Plus, Utensils } from 'lucide-react';
import { MealSuggestion } from '../types';
import { Button } from './Button';
import { Card } from './Card';
import { Pill } from './Pill';

export function MealCard({
  meal,
  onOpen,
  onAddMissing,
  compact = false,
}: {
  meal: MealSuggestion;
  onOpen: (meal: MealSuggestion) => void;
  onAddMissing: (meal: MealSuggestion) => void;
  compact?: boolean;
}) {
  return (
    <Card className="transition active:scale-[0.99]">
      <button className="w-full text-left" onClick={() => onOpen(meal)}>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-herb/12 text-herb">
            <Utensils className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-black leading-tight text-ink">{meal.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <Pill tone="green">{meal.time}</Pill>
              <Pill tone="gold">{meal.effort}</Pill>
              <Pill tone="blue">{meal.healthAngle}</Pill>
            </div>
          </div>
        </div>
        {!compact && (
          <div className="mt-4 space-y-3">
            <InfoLine label="Uses" values={meal.uses} />
            <InfoLine label="Buy" values={meal.buy} tone="red" />
            <p className="rounded-2xl bg-linen/70 p-3 text-sm font-semibold leading-relaxed text-ink/78">{meal.whyThisWorks}</p>
            <p className="text-sm font-bold leading-relaxed text-steel">Chef note: {meal.chefNote}</p>
          </div>
        )}
      </button>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={() => onOpen(meal)}>
          Cook this
        </Button>
        <Button variant="primary" icon={<Plus className="h-4 w-4" />} onClick={() => onAddMissing(meal)}>
          Add missing
        </Button>
      </div>
    </Card>
  );
}

function InfoLine({ label, values, tone = 'green' }: { label: string; values: string[]; tone?: 'green' | 'red' }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-black uppercase text-steel">{label}</p>
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
