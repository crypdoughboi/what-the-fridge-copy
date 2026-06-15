import { CheckCircle2, X } from 'lucide-react';
import { MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';

export function CookedConfirmationScreen({
  meal,
  onConfirm,
  onSkip,
}: {
  meal: MealIdea;
  onConfirm: (meal: MealIdea) => void;
  onSkip: () => void;
}) {
  const likelyUsed = meal.structuredIngredients.filter((ingredient) => !ingredient.isOptional).slice(0, 8);

  return (
    <main className="screen-enter space-y-6">
      <Card>
        <p className="text-[12px] font-semibold uppercase text-accent">Update Kitchen</p>
        <h1 className="mt-2 font-display text-[30px] font-extrabold leading-tight text-ink">Mark likely ingredients used?</h1>
        <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink-soft">
          {meal.name}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {likelyUsed.map((ingredient) => (
            <Pill key={ingredient.canonicalName}>{ingredient.rawName}</Pill>
          ))}
        </div>
      </Card>

      <div className="grid gap-2">
        <Button icon={<CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onConfirm(meal)}>
          Update Kitchen
        </Button>
        <Button variant="secondary" icon={<X className="h-5 w-5" strokeWidth={1.75} />} onClick={onSkip}>
          Skip update
        </Button>
      </div>
    </main>
  );
}
