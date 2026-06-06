import { useMemo, useState } from 'react';
import { ReactNode } from 'react';
import { ListPlus } from 'lucide-react';
import { IngredientReviewStatus, MealIdea, ReviewedIngredient } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { normalizeIngredientKey } from '../utils/groceryLogic';

export function IngredientReviewScreen({
  meal,
  knownIngredients,
  needToBuyNames,
  onBack,
  onAddMissing,
}: {
  meal: MealIdea;
  knownIngredients: string[];
  needToBuyNames: string[];
  onBack: () => void;
  onAddMissing: (meal: MealIdea, reviewed: ReviewedIngredient[]) => void;
}) {
  const knownKeys = useMemo(() => new Set(knownIngredients.map(normalizeIngredientKey)), [knownIngredients]);
  const needKeys = useMemo(() => new Set(needToBuyNames.map(normalizeIngredientKey)), [needToBuyNames]);
  const ingredients = useMemo(() => buildReviewIngredients(meal, knownKeys, needKeys), [meal, knownKeys, needKeys]);
  const [statuses, setStatuses] = useState<Record<string, IngredientReviewStatus>>(
    Object.fromEntries(ingredients.map((ingredient) => [normalizeIngredientKey(ingredient.name), ingredient.status])),
  );

  const reviewed = ingredients.map((ingredient) => ({
    ...ingredient,
    status: statuses[normalizeIngredientKey(ingredient.name)] ?? ingredient.status,
  }));
  const missingCount = reviewed.filter((ingredient) => ingredient.status === 'needToBuy').length;

  function setStatus(name: string, status: IngredientReviewStatus) {
    setStatuses((current) => ({
      ...current,
      [normalizeIngredientKey(name)]: status,
    }));
  }

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to idea" />

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Ingredient review</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Here's what you need</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Mark anything you already have. WTF will only add the missing items.</p>
      </section>

      <Card className="section-enter stagger-1">
        <h2 className="font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-ink">{meal.name}</h2>
        <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink-soft">{meal.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill tone="green">{missingCount} to buy</Pill>
          <Pill>{meal.timeMinutes} min</Pill>
          <Pill>{meal.effort}</Pill>
        </div>
      </Card>

      <div className="section-enter stagger-2 space-y-3">
        {reviewed.map((ingredient) => (
          <Card key={normalizeIngredientKey(ingredient.name)} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[16px] font-semibold text-ink">{ingredient.name}</p>
                <p className="mt-1 text-[13px] font-medium text-muted">{ingredient.pantry ? 'Pantry check' : ingredient.optional ? 'Optional upgrade' : 'Meal ingredient'}</p>
              </div>
              <Pill tone={ingredient.status === 'alreadyHave' ? 'green' : 'neutral'}>{labelForStatus(ingredient.status)}</Pill>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <ChoiceButton active={ingredient.status === 'alreadyHave'} onClick={() => setStatus(ingredient.name, 'alreadyHave')}>
                Have
              </ChoiceButton>
              <ChoiceButton active={ingredient.status === 'needToBuy'} onClick={() => setStatus(ingredient.name, 'needToBuy')}>
                Need
              </ChoiceButton>
              <ChoiceButton active={ingredient.status === 'optional'} onClick={() => setStatus(ingredient.name, 'optional')}>
                Optional
              </ChoiceButton>
            </div>
          </Card>
        ))}
      </div>

      <Button full icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onAddMissing(meal, reviewed)}>
        Add missing ingredients to List
      </Button>
    </main>
  );
}

function ChoiceButton({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
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

function buildReviewIngredients(meal: MealIdea, knownKeys: Set<string>, needKeys: Set<string>): ReviewedIngredient[] {
  const byKey = new Map<string, ReviewedIngredient>();

  meal.ingredients.forEach((name) => {
    const key = normalizeIngredientKey(name);
    byKey.set(key, {
      name,
      status: knownKeys.has(key) ? 'alreadyHave' : 'needToBuy',
    });
  });

  meal.pantryIngredients.forEach((name) => {
    const key = normalizeIngredientKey(name);
    if (!byKey.has(key)) {
      byKey.set(key, {
        name,
        pantry: true,
        status: knownKeys.has(key) || !needKeys.has(key) ? 'alreadyHave' : 'needToBuy',
      });
    }
  });

  meal.optionalIngredients.forEach((name) => {
    const key = normalizeIngredientKey(name);
    if (!byKey.has(key)) {
      byKey.set(key, {
        name,
        optional: true,
        status: knownKeys.has(key) ? 'alreadyHave' : 'optional',
      });
    }
  });

  return Array.from(byKey.values());
}

function labelForStatus(status: IngredientReviewStatus): string {
  if (status === 'alreadyHave') return 'Already Have';
  if (status === 'needToBuy') return 'Need';
  return 'Optional';
}
