import { useMemo, useState, type PointerEvent } from 'react';
import { BookOpen, CalendarPlus, ChevronLeft, Clock3, X } from 'lucide-react';
import { MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { normalizeIngredientKey } from '../utils/groceryLogic';

type DragState = {
  startX: number;
  startY: number;
  mode: 'undecided' | 'swipe' | 'scroll';
};

export function MealIdeaScreen({
  ideas,
  knownIngredients,
  onBack,
  onSkip,
  onSave,
  onMakeThisWeek,
  onViewRecipe,
}: {
  ideas: MealIdea[];
  knownIngredients: string[];
  onBack: () => void;
  onSkip: (meal: MealIdea) => void;
  onSave: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
  onViewRecipe: (meal: MealIdea) => void;
}) {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [exiting, setExiting] = useState<'left' | 'right' | null>(null);
  const meal = ideas[index];
  const knownKeys = useMemo(() => new Set(knownIngredients.map(normalizeIngredientKey)), [knownIngredients]);
  const dragIntent = Math.min(Math.abs(dragX) / 120, 1);

  function moveNext() {
    setIndex((current) => Math.min(current + 1, ideas.length));
    setDragX(0);
    setDragY(0);
    setDrag(null);
    setExiting(null);
  }

  function skip() {
    completeSwipe('left', onSkip);
  }

  function save() {
    completeSwipe('right', onSave);
  }

  function completeSwipe(direction: 'left' | 'right', action: (meal: MealIdea) => void) {
    if (!meal || exiting) return;
    setExiting(direction);
    setDragX(direction === 'right' ? 420 : -420);
    setDragY(0);
    window.setTimeout(() => {
      action(meal);
      moveNext();
    }, 180);
  }

  function showPreviousIdea() {
    setDrag(null);
    setDragX(0);
    setDragY(0);
    setExiting(null);
    setIndex((current) => Math.max(0, current - 1));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (exiting) return;
    setDrag({ startX: event.clientX, startY: event.clientY, mode: 'undecided' });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag || exiting) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (drag.mode === 'scroll') return;

    if (drag.mode === 'undecided') {
      if (absY > 10 && absY > absX * 1.15) {
        setDrag({ ...drag, mode: 'scroll' });
        setDragX(0);
        setDragY(0);
        return;
      }
      if (absX < 12 || absX < absY * 1.25) return;
      setDrag({ ...drag, mode: 'swipe' });
    }

    try {
      if (typeof event.pointerId === 'number' && !event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    } catch {
      // Some browser test surfaces do not support pointer capture for synthetic drags.
    }
    event.preventDefault();
    setDragX(deltaX);
    setDragY(Math.max(-18, Math.min(18, deltaY * 0.18)));
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (!drag || exiting) return;
    const deltaX = event.clientX - drag.startX;
    try {
      if (typeof event.pointerId === 'number' && event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // The fallback buttons still work if a browser cannot release synthetic capture.
    }

    if (drag.mode !== 'swipe') {
      setDrag(null);
      setDragX(0);
      setDragY(0);
      return;
    }

    finishDrag(deltaX);
  }

  function finishDrag(delta: number) {
    setDragX(delta);
    if (delta > 90) {
      save();
      return;
    }
    if (delta < -90) {
      skip();
      return;
    }
    setDrag(null);
    setDragX(0);
    setDragY(0);
  }

  if (!meal) {
    return (
      <main className="screen-enter space-y-6">
        <BackButton onClick={onBack} label="Back to Meals" />
        <Card>
          <h1 className="font-display text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-ink">That was the stack.</h1>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">Future meals are parked. This Week meals build the list.</p>
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
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Drag the card left to skip or right to save. Make this week builds the list.</p>
      </section>

      <div className="section-enter stagger-1 relative">
        <div className="pointer-events-none absolute inset-x-4 bottom-[-10px] top-4 rounded-lg border border-line bg-surface/70 shadow-sm" />
        <div className="pointer-events-none absolute inset-x-8 bottom-[-18px] top-8 rounded-lg border border-line bg-surface/40" />
        <Card
          className="relative z-10 touch-pan-y cursor-grab select-none overflow-hidden active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          style={{
            transform: `translate3d(${dragX}px, ${dragY}px, 0) rotate(${dragX / 16}deg)`,
            transition: !drag || drag.mode !== 'swipe' || exiting ? 'transform 180ms ease-out' : 'none',
            willChange: 'transform',
          }}
        >
          <div
            className="pointer-events-none absolute left-5 top-5 rounded-pill border border-line bg-paper/95 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-ink shadow-sm"
            style={{ opacity: dragX < 0 ? dragIntent : 0 }}
          >
            Skip
          </div>
          <div
            className="pointer-events-none absolute right-5 top-5 rounded-pill border border-accent bg-accent-soft px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-accent shadow-sm"
            style={{ opacity: dragX > 0 ? dragIntent : 0 }}
          >
            Save
          </div>
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
      </div>

      <Button variant="secondary" full icon={<BookOpen className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onViewRecipe(meal)}>
        View recipe
      </Button>

      <div className="grid grid-cols-3 gap-2">
        <Button variant="secondary" className="px-2" icon={<X className="h-5 w-5" strokeWidth={1.75} />} onClick={skip}>
          Skip
        </Button>
        <Button variant="secondary" className="px-2" icon={<Clock3 className="h-5 w-5" strokeWidth={1.75} />} onClick={save}>
          Later
        </Button>
        <Button className="px-2 text-[13px]" icon={<CalendarPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMakeThisWeek(meal)}>
          This week
        </Button>
      </div>

      {index > 0 && (
        <Button variant="ghost" className="min-h-10" icon={<ChevronLeft className="h-5 w-5" strokeWidth={1.75} />} onClick={showPreviousIdea}>
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
