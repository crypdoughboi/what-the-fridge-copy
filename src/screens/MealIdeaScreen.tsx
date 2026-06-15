import { FormEvent, useEffect, useMemo, useRef, useState, type Dispatch, type PointerEvent, type SetStateAction } from 'react';
import { Bookmark, CalendarPlus, CheckCircle2, ChevronLeft, CircleUserRound, Search, X } from 'lucide-react';
import { KitchenInventoryItem, MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Pill } from '../components/Pill';
import { getMealRankDetails, parseDinnerConstraint } from '../services/mealGenerationService';
import { normalizeIngredientKey } from '../utils/groceryLogic';

type DragState = {
  startX: number;
  startY: number;
  mode: 'undecided' | 'swipe' | 'scroll';
};

export function MealIdeaScreen({
  ideas,
  index,
  onIndexChange,
  knownIngredients,
  kitchenItems,
  constraintText,
  onConstraintTextChange,
  onRefreshDeck,
  onProfile,
  onSkip,
  onSave,
  onMakeThisWeek,
  onViewRecipe,
}: {
  ideas: MealIdea[];
  index: number;
  onIndexChange: Dispatch<SetStateAction<number>>;
  knownIngredients: string[];
  kitchenItems: KitchenInventoryItem[];
  constraintText: string;
  onConstraintTextChange: (value: string) => void;
  onRefreshDeck: () => void;
  onProfile: () => void;
  onSkip: (meal: MealIdea) => void;
  onSave: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
  onViewRecipe: (meal: MealIdea) => void;
}) {
  const [drag, setDrag] = useState<DragState | null>(null);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [exiting, setExiting] = useState<'left' | 'right' | null>(null);
  const activePointerId = useRef<number | null>(null);
  const completingSwipe = useRef(false);
  const swipeTimeout = useRef<number | null>(null);
  const safeIndex = Math.min(index, ideas.length);
  const meal = ideas[safeIndex];
  const knownKeys = useMemo(() => new Set(knownIngredients.map(normalizeIngredientKey)), [knownIngredients]);
  const dinnerConstraint = useMemo(() => (constraintText.trim() ? parseDinnerConstraint(constraintText) : undefined), [constraintText]);
  const details = useMemo(
    () =>
      meal
        ? getMealRankDetails(meal, {
            knownIngredients,
            kitchenItems,
            dinnerConstraint,
          })
        : null,
    [dinnerConstraint, knownIngredients, kitchenItems, meal],
  );
  const dragIntent = Math.min(Math.abs(dragX) / 120, 1);

  useEffect(() => {
    if (index > ideas.length) onIndexChange(ideas.length);
  }, [ideas.length, index, onIndexChange]);

  useEffect(() => {
    return () => {
      if (swipeTimeout.current) window.clearTimeout(swipeTimeout.current);
    };
  }, []);

  function submitConstraint(event: FormEvent) {
    event.preventDefault();
    onRefreshDeck();
  }

  function moveNext() {
    onIndexChange((current) => Math.min(current + 1, ideas.length));
    setDragX(0);
    setDragY(0);
    setDrag(null);
    setExiting(null);
    activePointerId.current = null;
    completingSwipe.current = false;
    swipeTimeout.current = null;
  }

  function skip() {
    completeSwipe('left', onSkip);
  }

  function save() {
    completeSwipe('right', onSave);
  }

  function completeSwipe(direction: 'left' | 'right', action: (meal: MealIdea) => void) {
    if (!meal || exiting || completingSwipe.current) return;
    completingSwipe.current = true;
    const swipedMeal = meal;
    setExiting(direction);
    setDrag(null);
    setDragX(direction === 'right' ? 420 : -420);
    setDragY(0);
    swipeTimeout.current = window.setTimeout(() => {
      action(swipedMeal);
      moveNext();
    }, 180);
  }

  function showPreviousIdea() {
    setDrag(null);
    setDragX(0);
    setDragY(0);
    setExiting(null);
    onIndexChange((current) => Math.max(0, current - 1));
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

  const coreIngredients = meal ? getCoreDisplayIngredients(meal) : [];
  const have = coreIngredients.filter((ingredient) => knownKeys.has(ingredient.key)).map((ingredient) => ingredient.name);
  const need = details?.missingIngredientNames ?? [];
  const hasKnown = knownKeys.size > 0;

  return (
    <main className="screen-enter space-y-6">
      <div className="section-enter flex items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-semibold uppercase text-accent">Tonight</p>
          <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] text-ink">Dinner deck.</h1>
        </div>
        <button
          className="grid h-12 w-12 place-items-center rounded-md border border-line bg-surface text-ink shadow-sm transition active:scale-[0.98]"
          onClick={onProfile}
          aria-label="Profile"
          title="Profile"
        >
          <CircleUserRound className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </div>

      <form className="section-enter stagger-1 flex gap-2" onSubmit={submitConstraint}>
        <Input
          value={constraintText}
          onChange={(event) => onConstraintTextChange(event.target.value)}
          placeholder="Dinner for two under 30, use chicken, no cilantro"
          className="min-w-0 flex-1"
        />
        <Button type="submit" className="px-4" icon={<Search className="h-5 w-5" strokeWidth={1.75} />} aria-label="Rank deck">
          Rank
        </Button>
      </form>

      {!meal ? (
        <Card>
          <h2 className="font-display text-[24px] font-bold leading-tight text-ink">That was the deck.</h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">Try a different constraint or add a quick kitchen capture.</p>
          <Button className="mt-5" full variant="secondary" onClick={onRefreshDeck}>
            Rebuild deck
          </Button>
        </Card>
      ) : (
        <>
          <div className="section-enter stagger-2 relative">
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
                className="pointer-events-none absolute left-5 top-5 rounded-pill border border-line bg-paper/95 px-4 py-2 text-[12px] font-extrabold uppercase text-ink shadow-sm"
                style={{ opacity: dragX < 0 ? dragIntent : 0 }}
              >
                Skip
              </div>
              <div
                className="pointer-events-none absolute right-5 top-5 rounded-pill border border-accent bg-accent-soft px-4 py-2 text-[12px] font-extrabold uppercase text-accent shadow-sm"
                style={{ opacity: dragX > 0 ? dragIntent : 0 }}
              >
                Save
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <Pill tone="green">{meal.timeMinutes} min</Pill>
                  <Pill>{meal.effort}</Pill>
                </div>
                <span className="text-[13px] font-semibold text-muted">{safeIndex + 1} of {ideas.length}</span>
              </div>
              <h2 className="mt-4 font-display text-[30px] font-extrabold leading-[1.05] text-ink">{meal.name}</h2>
              <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">{meal.description}</p>
              {details?.rankReasons.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {details.rankReasons.map((reason) => (
                    <Pill key={reason} tone={reason.includes('uses') ? 'green' : 'neutral'}>{reason}</Pill>
                  ))}
                </div>
              ) : null}

              <IngredientBlock title={hasKnown ? 'Have' : 'Core'} values={hasKnown ? have : meal.ingredients} empty="Nothing matched yet." tone="green" />
              <IngredientBlock title="Need" values={need} empty="Looks covered." tone="neutral" />
              <IngredientBlock
                title="Swaps"
                values={details?.substitutionMatches.map((match) => match.note) ?? []}
                empty="No swaps needed."
                tone="neutral"
              />
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="secondary" className="px-2" icon={<X className="h-5 w-5" strokeWidth={1.75} />} onClick={skip}>
              Skip
            </Button>
            <Button variant="secondary" className="px-2" icon={<Bookmark className="h-5 w-5" strokeWidth={1.75} />} onClick={save}>
              Save
            </Button>
            <Button className="px-2" icon={<CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onViewRecipe(meal)}>
              Cook
            </Button>
          </div>

          <Button variant="secondary" full icon={<CalendarPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMakeThisWeek(meal)}>
            Add to Shop
          </Button>

          {safeIndex > 0 && (
            <Button variant="ghost" className="min-h-10" icon={<ChevronLeft className="h-5 w-5" strokeWidth={1.75} />} onClick={showPreviousIdea}>
              Previous idea
            </Button>
          )}
        </>
      )}
    </main>
  );
}

function IngredientBlock({ title, values, empty, tone }: { title: string; values: string[]; empty: string; tone: 'green' | 'neutral' }) {
  return (
    <div className="mt-5">
      <p className="mb-2 text-[12px] font-semibold uppercase text-muted">{title}</p>
      {values.length ? (
        <div className="flex flex-wrap gap-2">
          {values.slice(0, 8).map((item) => (
            <Pill key={item} tone={tone}>{item}</Pill>
          ))}
        </div>
      ) : (
        <p className="rounded-md bg-paper p-3 text-[14px] font-medium text-muted">{empty}</p>
      )}
    </div>
  );
}

function getCoreDisplayIngredients(meal: MealIdea): { name: string; key: string }[] {
  const ingredients = meal.structuredIngredients?.length
    ? meal.structuredIngredients
        .filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry)
        .map((ingredient) => ({
          name: ingredient.rawName,
          key: ingredient.canonicalName || normalizeIngredientKey(ingredient.rawName),
        }))
    : meal.ingredients.map((ingredient) => ({
        name: ingredient,
        key: normalizeIngredientKey(ingredient),
      }));

  const seen = new Set<string>();
  return ingredients.filter((ingredient) => {
    if (seen.has(ingredient.key)) return false;
    seen.add(ingredient.key);
    return true;
  });
}
