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
    <Card className="transition duration-150 ease-out active:scale-[0.99]">
      <button className="w-full text-left" onClick={() => onOpen(meal)}>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <Utensils className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-[19px] font-bold leading-tight tracking-[-0.02em] text-ink">{meal.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <Pill tone="green">{meal.time}</Pill>
              <Pill>{meal.effort}</Pill>
              <Pill>{meal.healthAngle}</Pill>
            </div>
          </div>
        </div>
        {!compact && (
          <div className="mt-4 space-y-3">
            <InfoLine label="Uses" values={meal.uses} />
            <InfoLine label="Buy" values={meal.buy} />
            <p className="rounded-md bg-paper p-3 text-[14px] font-medium leading-relaxed text-ink-soft">{meal.whyThisWorks}</p>
            <p className="text-[14px] font-semibold leading-relaxed text-ink-soft">Chef note: {meal.chefNote}</p>
          </div>
        )}
      </button>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={() => onOpen(meal)}>
          Cook this
        </Button>
        <Button variant="primary" icon={<Plus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onAddMissing(meal)}>
          Add missing
        </Button>
      </div>
    </Card>
  );
}

function InfoLine({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Pill key={value}>
            {value}
          </Pill>
        ))}
      </div>
    </div>
  );
}
