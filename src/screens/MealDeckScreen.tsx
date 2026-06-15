import { useEffect, useRef, useState, type Dispatch, type PointerEvent, type ReactNode, type SetStateAction } from 'react';
import { BookOpen, Heart, ListPlus, Plus, RotateCcw, SlidersHorizontal, X } from 'lucide-react';
import { DeckMeal, MealMode } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { LoadingState } from '../components/LoadingState';
import { cookingMethodLabel, vibeLabel } from '../services/mealGenerationService';

const deckLoadingSteps = ['Reading your preferences...', 'Matching meals to your picks...', 'Sorting the best ideas first...'];

type DragState = {
  startX: number;
  startY: number;
  mode: 'undecided' | 'swipe' | 'scroll';
};

export function MealDeckScreen({
  deck,
  index,
  onIndexChange,
  mode,
  loading,
  hasInventory,
  onBack,
  onLike,
  onPass,
  onCook,
  onAddToShopping,
  onAddIngredients,
  onStartFromScratch,
}: {
  deck: DeckMeal[];
  index: number;
  onIndexChange: Dispatch<SetStateAction<number>>;
  mode: MealMode;
  loading: boolean;
  hasInventory: boolean;
  onBack: () => void;
  onLike: (deckMeal: DeckMeal) => void;
  onPass: (deckMeal: DeckMeal) => void;
  onCook: (deckMeal: DeckMeal) => void;
  onAddToShopping: (deckMeal: DeckMeal) => void;
  onAddIngredients: () => void;
  onStartFromScratch: () => void;
}) {
  const [drag, setDrag] = useState<DragState | null>(null);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [exiting, setExiting] = useState<'left' | 'right' | null>(null);
  const activePointerId = useRef<number | null>(null);
  const completingSwipe = useRef(false);
  const swipeTimeout = useRef<number | null>(null);
  const safeIndex = Math.min(index, deck.length);
  const deckMeal = deck[safeIndex];
  const dragIntent = Math.min(Math.abs(dragX) / 120, 1);

  useEffect(() => {
    if (index > deck.length) onIndexChange(deck.length);
  }, [deck.length, index, onIndexChange]);

  useEffect(() => {
    return () => {
      if (swipeTimeout.current) window.clearTimeout(swipeTimeout.current);
    };
  }, []);

  function moveNext() {
    onIndexChange((current) => Math.min(current + 1, deck.length));
    setDragX(0);
    setDragY(0);
    setDrag(null);
    setExiting(null);
    activePointerId.current = null;
    completingSwipe.current = false;
    swipeTimeout.current = null;
  }

  function pass() {
    completeSwipe('left', onPass);
  }

  function like() {
    completeSwipe('right', onLike);
  }

  function completeSwipe(direction: 'left' | 'right', action: (deckMeal: DeckMeal) => void) {
    if (!deckMeal || exiting || completingSwipe.current) return;
    completingSwipe.current = true;
    const swiped = deckMeal;
    setExiting(direction);
    setDrag(null);
    setDragX(direction === 'right' ? 420 : -420);
    setDragY(0);
    swipeTimeout.current = window.setTimeout(() => {
      action(swiped);
      moveNext();
    }, 180);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (exiting || completingSwipe.current) return;
    activePointerId.current = event.pointerId;
    setDrag({ startX: event.clientX, startY: event.clientY, mode: 'undecided' });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag || exiting) return;
    if (activePointerId.current !== null && event.pointerId !== activePointerId.current) return;
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
    if (activePointerId.current !== null && event.pointerId !== activePointerId.current) return;
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

  function handlePointerCancel(event: PointerEvent<HTMLDivElement>) {
    if (activePointerId.current !== null && event.pointerId !== activePointerId.current) return;
    try {
      if (typeof event.pointerId === 'number' && event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Pointer cancel is browser-controlled. Resetting the card is safer than treating it as a swipe.
    }
    if (completingSwipe.current) return;
    activePointerId.current = null;
    setDrag(null);
    setDragX(0);
    setDragY(0);
  }

  function finishDrag(delta: number) {
    setDragX(delta);
    if (delta > 90) {
      like();
      return;
    }
    if (delta < -90) {
      pass();
      return;
    }
    setDrag(null);
    setDragX(0);
    setDragY(0);
  }

  if (loading) {
    return <LoadingState title="Finding meals" steps={deckLoadingSteps} />;
  }

  if (mode === 'inventory' && !hasInventory) {
    return (
      <DeckMessage
        onBack={onBack}
        title="No ingredients saved yet"
        body="You don't have any ingredients saved yet. Add a few items or start from scratch."
      >
        <Button full icon={<Plus className="h-5 w-5" strokeWidth={1.75} />} onClick={onAddIngredients}>
          Add ingredients
        </Button>
        <Button full variant="secondary" onClick={onStartFromScratch}>
          Start from scratch
        </Button>
      </DeckMessage>
    );
  }

  if (deck.length === 0) {
    return (
      <DeckMessage onBack={onBack} title="No meals found" body="Nothing matched those picks. Loosen a preference and try again.">
        <Button full icon={<SlidersHorizontal className="h-5 w-5" strokeWidth={1.75} />} onClick={onBack}>
          Adjust preferences
        </Button>
        {mode === 'inventory' ? (
          <Button full variant="secondary" onClick={onStartFromScratch}>
            Start from scratch
          </Button>
        ) : null}
      </DeckMessage>
    );
  }

  if (!deckMeal) {
    return (
      <DeckMessage onBack={onBack} title="That's the stack" body="You went through every idea. Tweak your picks for a fresh set.">
        <Button full icon={<SlidersHorizontal className="h-5 w-5" strokeWidth={1.75} />} onClick={onBack}>
          Adjust preferences
        </Button>
        <Button full variant="secondary" onClick={() => onIndexChange(0)}>
          Start over
        </Button>
      </DeckMessage>
    );
  }

  const meal = deckMeal.meal;
  const cuisine = meal.cuisineInfluence?.trim();
  const showCuisine = Boolean(cuisine) && cuisine.toLowerCase() !== 'any';

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to preferences" />

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">{mode === 'inventory' ? 'From your kitchen' : 'Meal ideas'}</p>
        <h1 className="mt-2 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Swipe to build dinner.</h1>
        <p className="mt-2 text-[15px] font-medium leading-[1.45] text-ink-soft">Swipe right or tap Like to save. Swipe left or tap Pass to skip.</p>
      </section>

      <div className="section-enter stagger-1 relative">
        <div className="pointer-events-none absolute inset-x-4 bottom-[-10px] top-4 rounded-lg border border-line bg-surface/70 shadow-sm" />
        <div className="pointer-events-none absolute inset-x-8 bottom-[-18px] top-8 rounded-lg border border-line bg-surface/40" />
        <Card
          key={meal.id}
          className="relative z-10 touch-pan-y cursor-grab select-none overflow-hidden active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerCancel}
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
            Pass
          </div>
          <div
            className="pointer-events-none absolute right-5 top-5 rounded-pill border border-accent bg-accent-soft px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-accent shadow-sm"
            style={{ opacity: dragX > 0 ? dragIntent : 0 }}
          >
            Like
          </div>

          <div className="flex items-center justify-between gap-3">
            <Pill tone="green">{meal.timeMinutes} min</Pill>
            <span className="text-[13px] font-semibold text-muted">
              {safeIndex + 1} of {deck.length}
            </span>
          </div>

          <h2 className="mt-4 font-display text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink">{meal.name}</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>{meal.effort}</Pill>
            <Pill>{cookingMethodLabel(meal)}</Pill>
            <Pill>{vibeLabel(meal)}</Pill>
            {showCuisine ? <Pill>{cuisine}</Pill> : null}
          </div>

          <div className="mt-5">
            <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">Why it fits</p>
            <p className="text-[15px] font-medium leading-[1.45] text-ink-soft">{deckMeal.reason}</p>
          </div>

          {mode === 'inventory' ? (
            <>
              <IngredientBlock title="You have" values={deckMeal.have} empty="Nothing matched from your kitchen yet." tone="green" />
              {deckMeal.need.length ? (
                <IngredientBlock title="You need" values={deckMeal.need} empty="" tone="neutral" />
              ) : (
                <p className="mt-5 rounded-md bg-accent-soft p-3 text-[14px] font-semibold text-accent">You have everything for this one.</p>
              )}
            </>
          ) : (
            <>
              <IngredientBlock title="You'll need" values={deckMeal.need} empty="No shopping needed." tone="green" />
              <IngredientBlock title="Assumes you have" values={deckMeal.pantry} empty="No pantry staples needed." tone="neutral" />
            </>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary" icon={<X className="h-5 w-5" strokeWidth={1.75} />} onClick={pass}>
          Pass
        </Button>
        <Button icon={<Heart className="h-5 w-5" strokeWidth={1.75} />} onClick={like}>
          Like
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary" icon={<BookOpen className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onCook(deckMeal)}>
          Cook this
        </Button>
        <Button variant="secondary" icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onAddToShopping(deckMeal)}>
          Add to list
        </Button>
      </div>

      {safeIndex > 0 ? (
        <Button variant="ghost" className="min-h-10" icon={<RotateCcw className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onIndexChange((current) => Math.max(0, current - 1))}>
          Previous idea
        </Button>
      ) : null}
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
            <Pill key={item} tone={tone}>
              {item}
            </Pill>
          ))}
        </div>
      ) : empty ? (
        <p className="rounded-md bg-paper p-3 text-[14px] font-medium text-muted">{empty}</p>
      ) : null}
    </div>
  );
}

function DeckMessage({ onBack, title, body, children }: { onBack: () => void; title: string; body: string; children: ReactNode }) {
  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to preferences" />
      <Card className="section-enter">
        <h1 className="font-display text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-ink">{title}</h1>
        <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">{body}</p>
        <div className="mt-5 grid gap-2">{children}</div>
      </Card>
    </main>
  );
}
