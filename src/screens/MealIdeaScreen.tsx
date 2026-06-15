import { FormEvent, useEffect, useMemo, useRef, useState, type Dispatch, type PointerEvent, type SetStateAction } from 'react';
import { Bookmark, ChevronLeft, CircleUserRound, Search, ShoppingBag, Utensils, X } from 'lucide-react';
import { KitchenInventoryItem, MealIdea, MealRankDetails } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Pill } from '../components/Pill';
import { getMealRankDetails, parseDinnerConstraint } from '../services/mealGenerationService';

type DragState = {
  startX: number;
  startY: number;
  mode: 'undecided' | 'swipe' | 'scroll';
};

type MealsView = 'ideas' | 'saved' | 'have';

type RankedMeal = {
  meal: MealIdea;
  details: MealRankDetails;
};

export function MealIdeaScreen({
  ideas,
  allMeals,
  savedMeals,
  index,
  onIndexChange,
  knownIngredients,
  kitchenItems,
  constraintText,
  onConstraintTextChange,
  onRefreshMeals,
  onProfile,
  onSkip,
  onSave,
  onMakeThisWeek,
  onViewRecipe,
}: {
  ideas: MealIdea[];
  allMeals: MealIdea[];
  savedMeals: MealIdea[];
  index: number;
  onIndexChange: Dispatch<SetStateAction<number>>;
  knownIngredients: string[];
  kitchenItems: KitchenInventoryItem[];
  constraintText: string;
  onConstraintTextChange: (value: string) => void;
  onRefreshMeals: () => void;
  onProfile: () => void;
  onSkip: (meal: MealIdea) => void;
  onSave: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
  onViewRecipe: (meal: MealIdea) => void;
}) {
  const [activeView, setActiveView] = useState<MealsView>('ideas');
  const [drag, setDrag] = useState<DragState | null>(null);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [exiting, setExiting] = useState<'left' | 'right' | null>(null);
  const activePointerId = useRef<number | null>(null);
  const completingSwipe = useRef(false);
  const swipeTimeout = useRef<number | null>(null);
  const safeIndex = Math.min(index, ideas.length);
  const meal = ideas[safeIndex];
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
  const savedMealCards = useMemo(
    () => savedMeals.map((savedMeal) => rankMeal(savedMeal, knownIngredients, kitchenItems, dinnerConstraint)),
    [dinnerConstraint, kitchenItems, knownIngredients, savedMeals],
  );
  const mealsFromKitchen = useMemo(() => {
    return allMeals
      .map((candidate) => rankMeal(candidate, knownIngredients, kitchenItems, dinnerConstraint))
      .filter(({ details: candidateDetails }) => {
        const covered = candidateDetails.ownedIngredientNames.length + candidateDetails.substitutionMatches.length;
        return covered > 0 && candidateDetails.missingIngredientNames.length <= 1;
      })
      .sort((a, b) => b.details.score - a.details.score)
      .slice(0, 8);
  }, [allMeals, dinnerConstraint, kitchenItems, knownIngredients]);
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
    onRefreshMeals();
    setActiveView('ideas');
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

  function completeSwipe(direction: 'left' | 'right', action: (swipedMeal: MealIdea) => void) {
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
    if (activeView !== 'ideas' || exiting || completingSwipe.current) return;
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
    setDragY(Math.max(-12, Math.min(12, deltaY * 0.12)));
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

  return (
    <main className="screen-enter space-y-5">
      <div className="section-enter flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-muted">Meals</p>
          <h1 className="mt-1 font-display text-[32px] font-bold leading-[1.16] text-ink">WTF should I make?</h1>
        </div>
        <button
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-surface text-ink shadow-sm transition active:scale-[0.98]"
          onClick={onProfile}
          aria-label="Profile"
          title="Profile"
        >
          <CircleUserRound className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </div>

      <form className="section-enter stagger-1 flex gap-2" onSubmit={submitConstraint}>
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Tell Tonight what you need</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" strokeWidth={1.75} />
          <Input
            value={constraintText}
            onChange={(event) => onConstraintTextChange(event.target.value)}
            placeholder="Chicken under 30, no cilantro"
            className="pl-10"
          />
        </label>
        <Button type="submit" className="px-5" aria-label="Refresh meals">
          Go
        </Button>
      </form>

      <div className="section-enter stagger-2 grid grid-cols-3 rounded-md border border-line bg-line/60 p-1">
        <ViewButton label="Ideas" active={activeView === 'ideas'} onClick={() => setActiveView('ideas')} />
        <ViewButton label="Saved" active={activeView === 'saved'} onClick={() => setActiveView('saved')} />
        <ViewButton label="Have" active={activeView === 'have'} onClick={() => setActiveView('have')} />
      </div>

      {activeView === 'ideas' && (
        <section className="space-y-4">
          {!meal || !details ? (
            <Card>
              <h2 className="text-[22px] font-bold leading-tight text-ink">No more ideas right now.</h2>
              <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">Change the request or add a quick kitchen capture.</p>
              <Button className="mt-5" full variant="secondary" onClick={onRefreshMeals}>
                Refresh meals
              </Button>
            </Card>
          ) : (
            <>
              <Card
                key={meal.id}
                className="relative touch-pan-y cursor-grab select-none overflow-hidden active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerCancel}
                style={{
                  transform: `translate3d(${dragX}px, ${dragY}px, 0) rotate(${dragX / 28}deg)`,
                  transition: !drag || drag.mode !== 'swipe' || exiting ? 'transform 180ms ease-out' : 'none',
                  willChange: 'transform',
                }}
              >
                <SwipeLabel label="Skip" show={dragX < 0} opacity={dragIntent} />
                <SwipeLabel label="Save" show={dragX > 0} opacity={dragIntent} align="right" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <Pill tone="green">{meal.timeMinutes} min</Pill>
                    <Pill>{meal.effort}</Pill>
                  </div>
                  <span className="text-[13px] font-semibold text-muted">
                    {safeIndex + 1} / {ideas.length}
                  </span>
                </div>
                <h2 className="mt-4 text-[28px] font-bold leading-[1.16] text-ink">{meal.name}</h2>
                <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">{meal.description}</p>
                {details.rankReasons.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {details.rankReasons.map((reason) => (
                      <Pill key={reason} tone={reason.includes('already') || reason.includes('uses') ? 'green' : 'neutral'}>
                        {reason}
                      </Pill>
                    ))}
                  </div>
                ) : null}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <IngredientBlock title="Already here" values={details.ownedIngredientNames} empty="Nothing matched." tone="green" />
                  <IngredientBlock title="Need" values={details.missingIngredientNames} empty="Looks covered." tone="neutral" />
                </div>
                <IngredientBlock
                  title="Swaps"
                  values={details.substitutionMatches.map((match) => match.note)}
                  empty="No swaps needed."
                  tone="neutral"
                />
              </Card>

              <div className="grid grid-cols-3 gap-2">
                <Button variant="secondary" className="px-2" icon={<X className="h-5 w-5" strokeWidth={1.75} />} onClick={skip}>
                  Skip
                </Button>
                <Button variant="secondary" className="px-2" icon={<Bookmark className="h-5 w-5" strokeWidth={1.75} />} onClick={save}>
                  Save
                </Button>
                <Button className="px-2" icon={<Utensils className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onViewRecipe(meal)}>
                  Cook
                </Button>
              </div>

              <Button variant="secondary" full icon={<ShoppingBag className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMakeThisWeek(meal)}>
                Add to Shop
              </Button>

              {safeIndex > 0 && (
                <Button variant="ghost" className="min-h-10" icon={<ChevronLeft className="h-5 w-5" strokeWidth={1.75} />} onClick={showPreviousIdea}>
                  Previous
                </Button>
              )}
            </>
          )}
        </section>
      )}

      {activeView === 'saved' && (
        <MealList
          meals={savedMealCards}
          emptyTitle="No saved meals yet."
          emptyText="Saved meals will show here."
          onViewRecipe={onViewRecipe}
          onMakeThisWeek={onMakeThisWeek}
        />
      )}

      {activeView === 'have' && (
        <MealList
          meals={mealsFromKitchen}
          emptyTitle="Nothing kitchen-ready yet."
          emptyText="Add a receipt, fridge photo, or grocery photo first."
          onViewRecipe={onViewRecipe}
          onMakeThisWeek={onMakeThisWeek}
        />
      )}
    </main>
  );
}

function ViewButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      className={`min-h-10 rounded-sm px-3 text-[14px] font-semibold transition ${
        active ? 'bg-surface text-ink shadow-sm' : 'text-muted active:bg-surface/60'
      }`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

function SwipeLabel({
  label,
  show,
  opacity,
  align = 'left',
}: {
  label: string;
  show: boolean;
  opacity: number;
  align?: 'left' | 'right';
}) {
  return (
    <div
      className={`pointer-events-none absolute top-4 rounded-pill border border-line bg-surface/95 px-4 py-2 text-[12px] font-bold uppercase text-ink shadow-sm ${
        align === 'right' ? 'right-4' : 'left-4'
      }`}
      style={{ opacity: show ? opacity : 0 }}
    >
      {label}
    </div>
  );
}

function MealList({
  meals,
  emptyTitle,
  emptyText,
  onViewRecipe,
  onMakeThisWeek,
}: {
  meals: RankedMeal[];
  emptyTitle: string;
  emptyText: string;
  onViewRecipe: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
}) {
  if (!meals.length) {
    return (
      <Card>
        <h2 className="text-[21px] font-bold text-ink">{emptyTitle}</h2>
        <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">{emptyText}</p>
      </Card>
    );
  }

  return (
    <section className="space-y-3">
      {meals.map(({ meal, details }) => (
        <Card key={meal.id}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-[20px] font-bold leading-tight text-ink">{meal.name}</h2>
              <p className="mt-1 line-clamp-2 text-[14px] font-medium leading-relaxed text-ink-soft">{meal.description}</p>
            </div>
            <Pill tone={details.missingIngredientNames.length ? 'neutral' : 'green'}>{needLabel(details)}</Pill>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill tone="green">{meal.timeMinutes} min</Pill>
            {details.ownedIngredientNames.slice(0, 2).map((ingredient) => (
              <Pill key={ingredient} tone="green">
                {ingredient}
              </Pill>
            ))}
            {details.substitutionMatches.slice(0, 1).map((match) => (
              <Pill key={match.note}>{match.note}</Pill>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="secondary" icon={<Utensils className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onViewRecipe(meal)}>
              Cook
            </Button>
            <Button variant="secondary" icon={<ShoppingBag className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMakeThisWeek(meal)}>
              Shop
            </Button>
          </div>
        </Card>
      ))}
    </section>
  );
}

function IngredientBlock({ title, values, empty, tone }: { title: string; values: string[]; empty: string; tone: 'green' | 'neutral' }) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-semibold uppercase text-muted">{title}</p>
      {values.length ? (
        <div className="flex flex-wrap gap-2">
          {values.slice(0, 8).map((item) => (
            <Pill key={item} tone={tone}>
              {item}
            </Pill>
          ))}
        </div>
      ) : (
        <p className="rounded-md bg-paper p-3 text-[14px] font-medium text-muted">{empty}</p>
      )}
    </div>
  );
}

function rankMeal(
  meal: MealIdea,
  knownIngredients: string[],
  kitchenItems: KitchenInventoryItem[],
  dinnerConstraint: ReturnType<typeof parseDinnerConstraint> | undefined,
): RankedMeal {
  return {
    meal,
    details: getMealRankDetails(meal, {
      knownIngredients,
      kitchenItems,
      dinnerConstraint,
    }),
  };
}

function needLabel(details: MealRankDetails): string {
  const count = details.missingIngredientNames.length;
  if (count === 0) return 'ready';
  if (count === 1) return '1 to buy';
  return `${count} to buy`;
}
