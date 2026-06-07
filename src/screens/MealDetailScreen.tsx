import { ArrowLeft, Bookmark, CalendarPlus, CheckCircle2 } from 'lucide-react';
import { MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';

export function MealDetailScreen({
  meal,
  saved,
  planned,
  made,
  onBack,
  onSave,
  onMakeThisWeek,
  onMarkMade,
}: {
  meal: MealIdea;
  saved: boolean;
  planned: boolean;
  made: boolean;
  onBack: () => void;
  onSave: (meal: MealIdea) => void;
  onMakeThisWeek: (meal: MealIdea) => void;
  onMarkMade: (meal: MealIdea) => void;
}) {
  const steps = meal.instructionsPreview?.length ? meal.instructionsPreview : buildRecipeSteps(meal);

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
          <Pill tone="green">{meal.timeMinutes} min</Pill>
          <Pill>{meal.effort}</Pill>
          <Pill>{meal.cuisineInfluence}</Pill>
          <Pill>{meal.format}</Pill>
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Ingredients</h2>
        <IngredientGroup title="Main ingredients" values={meal.ingredients} tone="green" />
        <IngredientGroup title="Pantry check" values={meal.pantryIngredients} tone="neutral" />
        {meal.optionalIngredients.length ? <IngredientGroup title="Optional upgrades" values={meal.optionalIngredients} tone="neutral" /> : null}
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Cook it</h2>
        <ol className="mt-3 space-y-3">
          {steps.map((step, index) => (
            <li key={`${step}-${index}`} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-accent-soft text-[13px] font-semibold text-accent">{index + 1}</span>
              <p className="pt-1 text-[14px] font-medium leading-relaxed text-ink-soft">{step}</p>
            </li>
          ))}
        </ol>
      </Card>

      <Card>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Chef note</p>
        <p className="mt-2 text-[15px] font-semibold leading-relaxed text-ink">{chefNoteForMeal(meal)}</p>
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
            {made ? 'Made' : 'Mark made'}
          </Button>
        </div>
      </div>
    </main>
  );
}

function IngredientGroup({ title, values, tone }: { title: string; values: string[]; tone: 'green' | 'neutral' }) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Pill key={value} tone={tone}>
            {value}
          </Pill>
        ))}
      </div>
    </div>
  );
}

function buildRecipeSteps(meal: MealIdea): string[] {
  const protein = firstMatching(meal.ingredients, /(chicken|salmon|shrimp|steak|beef|pork|lamb|tofu|cod|halibut|fish|eggs|egg|beans|chickpea|falafel)/);
  const base = firstMatching(meal.ingredients, /(rice|couscous|orzo|pasta|noodle|tortilla|pita|potato|bread|naan|grits|quinoa)/);
  const veg = firstMatching(meal.ingredients, /(cucumber|carrot|broccoli|broccolini|cabbage|tomato|pepper|onion|greens|spinach|bok choy|corn|fennel|green bean|eggplant)/);
  const fresh = firstMatching([...meal.ingredients, ...meal.optionalIngredients], /(lemon|lime|cilantro|parsley|mint|scallion|herb|pickled|kimchi|tomato|cucumber)/);
  const sauce = firstMatching([...meal.ingredients, ...meal.pantryIngredients], /(harissa|tahini|yogurt|gochujang|miso|teriyaki|salsa|crema|peanut|pesto|marinara|curry|chipotle|soy|vinaigrette|butter)/);

  const steps = [
    `Prep the ${base ? `${base} and ` : ''}ingredients first so the hot food does not sit around.`,
    protein ? `Season and cook the ${protein} until browned and just cooked through.` : `Cook the main ingredients until hot, browned in spots, and properly seasoned.`,
    veg ? `Cook or slice the ${veg}. Keep some crunch if the dish needs freshness.` : `Add the vegetables and cook just until they still have some life.`,
    sauce ? `Build the sauce around ${sauce}. Taste it for salt, acid, and heat before it hits the plate.` : `Stir together a quick sauce with pantry staples, then taste for salt and acid.`,
    fresh ? `Finish with ${fresh} right before serving so the dish feels bright, not heavy.` : `Finish with something fresh, sharp, or crunchy before serving.`,
  ];

  if (/bowl|rice/i.test(meal.format)) {
    steps[0] = base && /(pita|tortilla|bread|naan)/i.test(base)
      ? `Prep the cold toppings first. Warm the ${base} right before serving.`
      : `Start the ${base ?? 'base'} first, then prep toppings while it cooks.`;
    steps.push('Spoon everything into bowls with the sauce on top and crunchy pieces last.');
  } else if (/taco|wrap|bread/i.test(meal.format)) {
    steps.push('Warm the tortillas or bread last so the filling hits something soft and hot.');
  } else if (/sheet|roast/i.test(meal.format) || meal.dinnerLanes.includes('Weeknight roast')) {
    steps[1] = `Roast the ${protein ?? 'main ingredients'} hard enough to get browned edges, not just cooked centers.`;
    steps.push('Rest for a few minutes, then finish with the bright sauce or herbs.');
  } else {
    steps.push('Plate it hot and add the fresh or crunchy garnish at the end.');
  }

  return steps;
}

function chefNoteForMeal(meal: MealIdea): string {
  if (meal.tags.some((tag) => /crispy|katsu|schnitzel|fried/i.test(tag))) {
    return 'Crisp food dies under wet toppings. Sauce the plate or side first, then keep the crunchy piece on top.';
  }
  if (meal.tags.some((tag) => /curry|cozy|creamy|butter|vodka/i.test(tag))) {
    return 'Rich food needs lift. Add lemon, lime, vinegar, herbs, or something pickled before serving.';
  }
  if (meal.tags.some((tag) => /rice bowl|bowl|noodle/i.test(tag))) {
    return 'Bowls work when every bite has hot, cold, creamy, sharp, and crunchy. Do not skip the fresh finish.';
  }
  if (meal.tags.some((tag) => /taco|wrap|pita/i.test(tag))) {
    return 'Warm the bread or tortilla. Cold bread makes good fillings taste like leftovers.';
  }
  return 'Taste once before serving. Most weeknight dinners need either more salt, more acid, or more crunch.';
}

function firstMatching(values: string[], pattern: RegExp): string | undefined {
  return values.find((value) => pattern.test(value));
}
