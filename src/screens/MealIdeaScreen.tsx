import { useMemo, useState } from 'react';
import { Bookmark, ChevronLeft, ShoppingBasket, X } from 'lucide-react';
import { MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { normalizeIngredientKey } from '../utils/groceryLogic';

export function MealIdeaScreen({
  ideas,
  knownIngredients,
  onBack,
  onSkip,
  onSave,
  onMakeThisWeek,
}: {
  ideas: MealIdea[];
  knownIngredients: string[];
  onBack: () => void;
  onSkip: (meal: MealIdea) => void;
  onSave: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
}) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const meal = ideas[index];
  const knownKeys = useMemo(() => new Set(knownIngredients.map(normalizeIngredientKey)), [knownIngredients]);

  function moveNext() {
    setIndex((current) => Math.min(current + 1, ideas.length));
  }

  function skip() {
    if (!meal) return;
    onSkip(meal);
    moveNext();
  }

  function save() {
    if (!meal) return;
    onSave(meal);
    moveNext();
  }

  function handleTouchEnd(clientX: number) {
    if (touchStart === null) return;
    const delta = clientX - touchStart;
    setTouchStart(null);
    if (delta > 64) save();
    if (delta < -64) skip();
  }

  if (!meal) {
    return (
      <main className="screen-enter space-y-6">
        <BackButton onClick={onBack} label="Back to Meals" />
        <Card>
          <h1 className="font-display text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-ink">That was the stack.</h1>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">Saved meals are parked. Planned meals are on This Week.</p>
          <Button className="mt-5" full variant="secondary" onClick={onBack}>
            Back to Meals
          </Button>
        </Card>
      </main>
    );
  }

  const have = meal.ingredients.filter((ingredient) => knownKeys.has(normalizeIngredientKey(ingredient)));
  const need = meal.ingredients.filter((ingredient) => !knownKeys.has(normalizeIngredientKey(ingredient)));
  const hasKnown = knownKeys.size > 0;

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to Meals" />

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Meal idea</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">One good dinner.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Swipe left to skip. Swipe right to save. Buttons are right here too.</p>
      </section>

      <Card
        className="section-enter stagger-1 select-none"
        onTouchStart={(event) => setTouchStart(event.changedTouches[0]?.clientX ?? null)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      >
        <div className="flex items-center justify-between gap-3">
          <Pill tone="green">{meal.timeMinutes} min</Pill>
          <span className="text-[13px] font-semibold text-muted">{index + 1} of {ideas.length}</span>
        </div>
        <h2 className="mt-4 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">{meal.name}</h2>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">{meal.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>{meal.effort}</Pill>
          {meal.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <IngredientBlock title={hasKnown ? 'You have' : 'Grocery list'} values={hasKnown ? have : meal.ingredients} empty="Nothing matched yet." tone="green" />
        {hasKnown ? <IngredientBlock title="Need" values={need} empty="Looks covered." tone="neutral" /> : null}
        <IngredientBlock title={hasKnown ? 'Optional' : 'Pantry check'} values={hasKnown ? meal.optionalIngredients : meal.pantryIngredients} empty="No extras." tone="neutral" />
      </Card>

      <div className="grid grid-cols-3 gap-2">
        <Button variant="secondary" className="px-2" icon={<X className="h-5 w-5" strokeWidth={1.75} />} onClick={skip}>
          Skip
        </Button>
        <Button variant="secondary" className="px-2" icon={<Bookmark className="h-5 w-5" strokeWidth={1.75} />} onClick={save}>
          Save
        </Button>
        <Button className="px-2 text-[13px]" icon={<ShoppingBasket className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMakeThisWeek(meal)}>
          Make this week
        </Button>
      </div>

      {index > 0 && (
        <Button variant="ghost" className="min-h-10" icon={<ChevronLeft className="h-5 w-5" strokeWidth={1.75} />} onClick={() => setIndex((current) => Math.max(0, current - 1))}>
          Previous idea
        </Button>
      )}
    </main>
  );
}

function IngredientBlock({ title, values, empty, tone }: { title: string; values: string[]; empty: string; tone: 'green' | 'neutral' }) {
  return (
    <div className="mt-5">
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</p>
      {values.length ? (
        <div className="flex flex-wrap gap-2">
          {values.map((item) => (
            <Pill key={item} tone={tone}>{item}</Pill>
          ))}
        </div>
      ) : (
        <p className="rounded-md bg-paper p-3 text-[14px] font-medium text-muted">{empty}</p>
      )}
    </div>
  );
}
