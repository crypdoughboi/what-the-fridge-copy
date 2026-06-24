import { ReactNode, useEffect, useState } from 'react';
import { Clock, ListPlus, Users } from 'lucide-react';
import { ImportedRecipe, ImportedRecipeIngredient, IngredientReviewStatus } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { normalizeIngredientKey } from '../utils/groceryLogic';

export function RecipeReviewScreen({
  recipe,
  knownIngredients,
  onBack,
  onAddToList,
}: {
  recipe: ImportedRecipe;
  knownIngredients: string[];
  onBack: () => void;
  onAddToList: (recipeTitle: string, neededNames: string[], haveNames: string[]) => void;
}) {
  const [ingredients, setIngredients] = useState<ImportedRecipeIngredient[]>(recipe.ingredients);

  // Pre-check anything we already know the user has so it lands in Already Have, not Need to Buy.
  useEffect(() => {
    const knownKeys = new Set(knownIngredients.map(normalizeIngredientKey));
    setIngredients(
      recipe.ingredients.map((item) =>
        knownKeys.has(normalizeIngredientKey(item.name)) ? { ...item, status: 'alreadyHave' as IngredientReviewStatus } : item,
      ),
    );
  }, [recipe, knownIngredients]);

  function setStatus(id: string, status: IngredientReviewStatus) {
    setIngredients((current) => current.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  const needNames = ingredients.filter((item) => item.status === 'needToBuy').map((item) => item.name);
  const haveNames = ingredients.filter((item) => item.status === 'alreadyHave').map((item) => item.name);

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back" />

      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Recipe found</p>
        <h1 className="mt-2 font-display text-[32px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink">{recipe.title}</h1>
        {recipe.description && <p className="mt-3 text-[15px] font-medium leading-[1.45] text-ink-soft">{recipe.description}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.servings > 0 && (
            <Pill>
              <Users className="mr-1 h-3.5 w-3.5" strokeWidth={2} />
              {recipe.servings} servings
            </Pill>
          )}
          {recipe.totalTimeMinutes > 0 && (
            <Pill>
              <Clock className="mr-1 h-3.5 w-3.5" strokeWidth={2} />
              {recipe.totalTimeMinutes} min
            </Pill>
          )}
          <Pill>{ingredients.length} ingredients</Pill>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Ingredients</h2>
          <span className="text-[13px] font-semibold text-muted">{needNames.length} to buy</span>
        </div>
        <p className="text-[14px] font-medium leading-relaxed text-ink-soft">
          We default pantry staples to Already Have and garnishes to Skip. Adjust anything before adding to your list.
        </p>

        {ingredients.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[16px] font-semibold capitalize text-ink">{item.name}</p>
                <p className="mt-0.5 text-[13px] font-medium leading-relaxed text-muted">{item.rawText}</p>
              </div>
              <Pill tone={item.status === 'needToBuy' ? 'green' : 'neutral'}>{item.category}</Pill>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <Choice active={item.status === 'needToBuy'} onClick={() => setStatus(item.id, 'needToBuy')}>
                Need to Buy
              </Choice>
              <Choice active={item.status === 'alreadyHave'} onClick={() => setStatus(item.id, 'alreadyHave')}>
                Already Have
              </Choice>
              <Choice active={item.status === 'optional'} onClick={() => setStatus(item.id, 'optional')}>
                Skip
              </Choice>
            </div>
          </Card>
        ))}
      </section>

      {recipe.steps.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Steps</h2>
          <Card className="space-y-3">
            {recipe.steps.map((step, index) => (
              <div key={index} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-[12px] font-bold text-accent">{index + 1}</span>
                <p className="text-[14px] font-medium leading-relaxed text-ink-soft">{step}</p>
              </div>
            ))}
          </Card>
        </section>
      )}

      {recipe.sourceNote && <p className="text-[12px] font-medium leading-relaxed text-muted">{recipe.sourceNote}</p>}

      <div className="grid gap-2">
        <Button
          icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />}
          onClick={() => onAddToList(recipe.title, needNames, haveNames)}
          disabled={needNames.length === 0 && haveNames.length === 0}
        >
          {needNames.length > 0
            ? `Add ${needNames.length} item${needNames.length === 1 ? '' : 's'} to list`
            : haveNames.length > 0
              ? 'Save what you already have'
              : 'Nothing to add'}
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Import a different recipe
        </Button>
      </div>
    </main>
  );
}

function Choice({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button
      className={`min-h-10 rounded-md border px-2 text-[13px] font-semibold transition active:scale-[0.98] ${
        active ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
