import { ArrowLeft, Bookmark, CalendarPlus, CheckCircle2 } from 'lucide-react';
import { KitchenInventoryItem, MealIdea, RecipeStep, SeedMealIngredient, StoreSection } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { getMealRankDetails } from '../services/mealGenerationService';

export function MealDetailScreen({
  meal,
  saved,
  planned,
  made,
  knownIngredients,
  kitchenItems,
  onBack,
  onSave,
  onMakeThisWeek,
  onMarkMade,
}: {
  meal: MealIdea;
  saved: boolean;
  planned: boolean;
  made: boolean;
  knownIngredients: string[];
  kitchenItems: KitchenInventoryItem[];
  onBack: () => void;
  onSave: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
  onMarkMade: (meal: MealIdea) => void;
}) {
  const coreIngredients = meal.structuredIngredients.filter((ingredient) => !ingredient.isPantry && !ingredient.isOptional);
  const pantryIngredients = meal.structuredIngredients.filter((ingredient) => ingredient.isPantry);
  const optionalIngredients = meal.structuredIngredients.filter((ingredient) => ingredient.isOptional);
  const substitutionNotes = getMealRankDetails(meal, { knownIngredients, kitchenItems }).substitutionMatches.map((match) => match.note);

  return (
    <main className="screen-enter space-y-8">
      <button className="inline-flex min-h-10 items-center gap-2 rounded-md text-[14px] font-semibold text-ink-soft" onClick={onBack}>
        <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
        Back
      </button>

      <Card>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Recipe</p>
        <h1 className="mt-2 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">{meal.name}</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">{meal.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill tone="green">{meal.recipe.totalTimeMinutes} min</Pill>
          <Pill>{meal.recipe.activeTimeMinutes} min active</Pill>
          <Pill>{meal.servings} servings</Pill>
          <Pill>{meal.effort}</Pill>
          <Pill>{meal.cuisineInfluence}</Pill>
          <Pill>{meal.format}</Pill>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {meal.tags.slice(0, 5).map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Ingredients</h2>
        <GroupedIngredients ingredients={coreIngredients} />
        {pantryIngredients.length ? <IngredientList title="Pantry check" ingredients={pantryIngredients} /> : null}
        {optionalIngredients.length ? <IngredientList title="Optional upgrades" ingredients={optionalIngredients} /> : null}
      </Card>

      {substitutionNotes.length ? (
        <Card>
          <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Substitutions</h2>
          <div className="mt-3 space-y-2">
            {substitutionNotes.map((note) => (
              <p key={note} className="rounded-md bg-paper p-3 text-[14px] font-semibold leading-relaxed text-ink-soft">{note}</p>
            ))}
          </div>
        </Card>
      ) : null}

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Steps</h2>
        <ol className="mt-4 space-y-4">
          {meal.recipe.steps.map((step) => (
            <RecipeStepItem key={step.stepNumber} step={step} />
          ))}
        </ol>
      </Card>

      <div className="grid gap-2">
        <Button icon={<CalendarPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMakeThisWeek(meal)}>
          {planned ? 'Review list ingredients' : 'Make this week'}
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant={saved ? 'primary' : 'secondary'} icon={<Bookmark className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onSave(meal)}>
            {saved ? 'Saved' : 'Save recipe'}
          </Button>
          <Button variant={made ? 'primary' : 'secondary'} icon={<CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMarkMade(meal)}>
            {made ? 'Cooked' : 'Mark cooked'}
          </Button>
        </div>
      </div>
    </main>
  );
}

function GroupedIngredients({ ingredients }: { ingredients: SeedMealIngredient[] }) {
  const sections = groupBySection(ingredients);
  return (
    <div className="mt-4 space-y-4">
      {sections.map(([section, values]) => (
        <IngredientList key={section} title={section} ingredients={values} />
      ))}
    </div>
  );
}

function IngredientList({ title, ingredients }: { title: string; ingredients: SeedMealIngredient[] }) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</p>
      <div className="space-y-2">
        {ingredients.map((ingredient) => (
          <div key={`${ingredient.section}-${ingredient.rawName}`} className="rounded-md border border-line bg-paper px-3 py-2">
            <div className="flex items-start justify-between gap-3">
              <p className="text-[14px] font-semibold text-ink">{ingredient.rawName}</p>
              {ingredient.displayQuantity ? <p className="shrink-0 text-[13px] font-semibold text-ink-soft">{ingredient.displayQuantity}</p> : null}
            </div>
            {ingredient.prep ? <p className="mt-1 text-[13px] font-medium text-muted">{ingredient.prep}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipeStepItem({ step }: { step: RecipeStep }) {
  return (
    <li className="flex gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-accent-soft text-[13px] font-semibold text-accent">{step.stepNumber}</span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[16px] font-bold text-ink">{step.title}</h3>
          {step.timeMinutes ? <Pill>{step.timeMinutes} min</Pill> : null}
          {step.temperature ? <Pill>{step.temperature}</Pill> : null}
        </div>
        <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink-soft">{step.body}</p>
        {step.visualCue ? <p className="mt-2 rounded-md bg-paper p-3 text-[13px] font-semibold leading-relaxed text-ink-soft">Look for: {step.visualCue}</p> : null}
      </div>
    </li>
  );
}

function groupBySection(ingredients: SeedMealIngredient[]): [StoreSection, SeedMealIngredient[]][] {
  const order: StoreSection[] = ['Produce', 'Meat/Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Other'];
  const groups = new Map<StoreSection, SeedMealIngredient[]>();
  ingredients.forEach((ingredient) => {
    const current = groups.get(ingredient.section) ?? [];
    current.push(ingredient);
    groups.set(ingredient.section, current);
  });
  return order.flatMap((section) => {
    const values = groups.get(section);
    return values?.length ? [[section, values] as [StoreSection, SeedMealIngredient[]]] : [];
  });
}
