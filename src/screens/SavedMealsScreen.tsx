import { BookOpen, ChefHat, Heart, ListPlus, Trash2, Utensils } from 'lucide-react';
import { MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { SectionHeader } from '../components/SectionHeader';
import { getMealNeededNames } from '../services/mealGenerationService';

export function SavedMealsScreen({
  liked,
  cooked,
  shopping,
  knownIngredients,
  onBack,
  onBrowse,
  onCook,
  onAddToShopping,
  onRemove,
}: {
  liked: MealIdea[];
  cooked: MealIdea[];
  shopping: MealIdea[];
  knownIngredients: string[];
  onBack: () => void;
  onBrowse: () => void;
  onCook: (meal: MealIdea) => void;
  onAddToShopping: (meal: MealIdea) => void;
  onRemove: (meal: MealIdea) => void;
}) {
  const isEmpty = liked.length === 0 && cooked.length === 0 && shopping.length === 0;

  return (
    <main className="screen-enter space-y-7">
      <BackButton onClick={onBack} label="Back to Meals" />

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Saved meals</p>
        <h1 className="mt-2 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Your meals</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Everything you liked, cooked, or shopped for.</p>
      </section>

      {isEmpty ? (
        <Card className="section-enter stagger-1">
          <div className="grid h-12 w-12 place-items-center rounded-md bg-accent-soft text-accent">
            <Heart className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h2 className="mt-4 font-display text-[22px] font-bold tracking-[-0.02em] text-ink">No saved meals yet.</h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">
            Swipe right on meals you like and they'll show up here.
          </p>
          <Button className="mt-5" full icon={<ChefHat className="h-5 w-5" strokeWidth={1.75} />} onClick={onBrowse}>
            Show me meals
          </Button>
        </Card>
      ) : (
        <>
          <SavedGroup
            eyebrow="Liked"
            title="Saved from swipes"
            meals={liked}
            knownIngredients={knownIngredients}
            onCook={onCook}
            onAddToShopping={onAddToShopping}
            onRemove={onRemove}
          />
          <SavedGroup
            eyebrow="Cooked"
            title="Made before"
            meals={cooked}
            knownIngredients={knownIngredients}
            onCook={onCook}
            onAddToShopping={onAddToShopping}
            onRemove={onRemove}
          />
          <SavedGroup
            eyebrow="Shopping list"
            title="Added to shopping"
            meals={shopping}
            knownIngredients={knownIngredients}
            onCook={onCook}
            onAddToShopping={onAddToShopping}
            onRemove={onRemove}
          />
        </>
      )}
    </main>
  );
}

function SavedGroup({
  eyebrow,
  title,
  meals,
  knownIngredients,
  onCook,
  onAddToShopping,
  onRemove,
}: {
  eyebrow: string;
  title: string;
  meals: MealIdea[];
  knownIngredients: string[];
  onCook: (meal: MealIdea) => void;
  onAddToShopping: (meal: MealIdea) => void;
  onRemove: (meal: MealIdea) => void;
}) {
  if (meals.length === 0) return null;

  return (
    <section className="section-enter space-y-3">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="space-y-3">
        {meals.map((meal) => (
          <SavedMealCard
            key={meal.id}
            meal={meal}
            needed={getMealNeededNames(meal, knownIngredients)}
            onCook={() => onCook(meal)}
            onAddToShopping={() => onAddToShopping(meal)}
            onRemove={() => onRemove(meal)}
          />
        ))}
      </div>
    </section>
  );
}

function SavedMealCard({
  meal,
  needed,
  onCook,
  onAddToShopping,
  onRemove,
}: {
  meal: MealIdea;
  needed: string[];
  onCook: () => void;
  onAddToShopping: () => void;
  onRemove: () => void;
}) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
          <Utensils className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[20px] font-bold leading-tight tracking-[-0.02em] text-ink">{meal.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill tone="green">{meal.timeMinutes} min</Pill>
            <Pill>{meal.effort}</Pill>
            {meal.tags.slice(0, 3).map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">Needed ingredients</p>
        {needed.length ? (
          <div className="flex flex-wrap gap-2">
            {needed.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        ) : (
          <p className="rounded-md bg-accent-soft p-3 text-[14px] font-semibold text-accent">You have everything for this one.</p>
        )}
      </div>

      <div className="mt-4 grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" icon={<BookOpen className="h-5 w-5" strokeWidth={1.75} />} onClick={onCook}>
            Cook this
          </Button>
          <Button variant="secondary" icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={onAddToShopping}>
            Add to list
          </Button>
        </div>
        <Button variant="ghost" className="min-h-10" icon={<Trash2 className="h-5 w-5" strokeWidth={1.75} />} onClick={onRemove}>
          Remove
        </Button>
      </div>
    </Card>
  );
}
