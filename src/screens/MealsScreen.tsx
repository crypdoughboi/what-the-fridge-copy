import { ChefHat, Plus, RotateCcw, ScanLine, Star, Utensils } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { MealFeedback, MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';

export function MealsScreen({
  plannedMeals,
  savedMeals,
  madeMeals,
  onStartIdeas,
  onAddWhatIHave,
  onMakeThisWeek,
  onMarkMade,
  onMakeAgain,
  onRateMeal,
}: {
  plannedMeals: MealIdea[];
  savedMeals: MealIdea[];
  madeMeals: MealIdea[];
  onStartIdeas: () => void;
  onAddWhatIHave: () => void;
  onMakeThisWeek: (meal: MealIdea) => void;
  onMarkMade: (meal: MealIdea) => void;
  onMakeAgain: (meal: MealIdea) => void;
  onRateMeal: (mealId: string, feedback: MealFeedback) => void;
}) {
  const [feedbackMeal, setFeedbackMeal] = useState<MealIdea | null>(null);
  const [feedbackChips, setFeedbackChips] = useState<string[]>([]);

  function markMade(meal: MealIdea) {
    onMarkMade(meal);
    setFeedbackMeal(meal);
    setFeedbackChips([]);
  }

  return (
    <main className="screen-enter space-y-8">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Meals</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">WTF should I make?</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          Start with meal ideas now, or add what you have for smarter suggestions.
        </p>
        <div className="mt-5 grid gap-2">
          <Button full icon={<ChefHat className="h-5 w-5" strokeWidth={1.75} />} onClick={onStartIdeas}>
            WTF should I make?
          </Button>
          <Button full variant="secondary" icon={<ScanLine className="h-5 w-5" strokeWidth={1.75} />} onClick={onAddWhatIHave}>
            Add what I have
          </Button>
        </div>
      </section>

      <MealSection
        eyebrow="This week"
        title="Meals you plan to cook"
        emptyTitle="No meals planned yet."
        emptyText="Tap WTF should I make, then choose Make this week. Only those meals affect your grocery list."
        meals={plannedMeals}
        actionLabel="Mark made"
        actionIcon={<Utensils className="h-5 w-5" strokeWidth={1.75} />}
        onAction={markMade}
      />

      {feedbackMeal && (
        <Card className="section-enter">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Quick note</p>
          <h2 className="mt-2 font-display text-[22px] font-bold tracking-[-0.02em] text-ink">How was it?</h2>
          <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">{feedbackMeal.name}</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {(['Loved it', 'Good enough', 'Not again'] as const).map((rating) => (
              <button
                key={rating}
                className="min-h-10 rounded-md border border-line bg-paper px-2 text-[13px] font-semibold text-ink-soft active:bg-line/60"
                onClick={() => {
                  onRateMeal(feedbackMeal.id, { rating, chips: feedbackChips });
                  setFeedbackMeal(null);
                }}
              >
                {rating}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Too much work', 'Needed more acid', 'Needed more heat', 'Too heavy', 'Great leftovers', 'More sauce next time', 'Make it crispier'].map((chip) => {
              const active = feedbackChips.includes(chip);
              return (
                <button
                  key={chip}
                  className={`rounded-pill border px-3 py-2 text-[12px] font-semibold transition ${
                    active ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-muted'
                  }`}
                  onClick={() => setFeedbackChips((current) => (active ? current.filter((item) => item !== chip) : [...current, chip]))}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </Card>
      )}

      <MealSection
        eyebrow="Future"
        title="Meals you might make later"
        emptyTitle="Nothing parked for later."
        emptyText="Swipe right or tap Later. These stay out of the grocery list until you make them this week."
        meals={savedMeals}
        actionLabel="Make this week"
        actionIcon={<Plus className="h-5 w-5" strokeWidth={1.75} />}
        onAction={onMakeThisWeek}
      />

      <MealSection
        eyebrow="Made before"
        title="Worth repeating"
        emptyTitle="No cooked meals yet."
        emptyText="After you mark a planned meal made, it will show up here for easy repeats."
        meals={madeMeals}
        actionLabel="Make again"
        actionIcon={<RotateCcw className="h-5 w-5" strokeWidth={1.75} />}
        onAction={onMakeAgain}
      />
    </main>
  );
}

function MealSection({
  eyebrow,
  title,
  emptyTitle,
  emptyText,
  meals,
  actionLabel,
  actionIcon,
  onAction,
}: {
  eyebrow: string;
  title: string;
  emptyTitle: string;
  emptyText: string;
  meals: MealIdea[];
  actionLabel: string;
  actionIcon: ReactNode;
  onAction: (meal: MealIdea) => void;
}) {
  return (
    <section className="section-enter space-y-3">
      <SectionHeader eyebrow={eyebrow} title={title} />
      {meals.length === 0 ? (
        <Card>
          <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">{emptyTitle}</h2>
          <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink-soft">{emptyText}</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {meals.map((meal) => (
            <Card key={meal.id}>
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
                  <Star className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-[21px] font-bold leading-tight tracking-[-0.02em] text-ink">{meal.name}</h3>
                  <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">{meal.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill tone="green">{meal.timeMinutes} min</Pill>
                    <Pill>{meal.effort}</Pill>
                    {meal.tags.slice(0, 2).map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="mt-4" variant="secondary" full icon={actionIcon} onClick={() => onAction(meal)}>
                {actionLabel}
              </Button>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
