import { CheckCircle2, CookingPot, XCircle } from 'lucide-react';
import { KitchenInventoryItem, MealIdea } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';

export function KitchenScreen({
  items,
  plannedMeals,
  madeMeals,
  onConfirmItem,
  onMarkGone,
  onViewRecipe,
  onMarkCooked,
}: {
  items: KitchenInventoryItem[];
  plannedMeals: MealIdea[];
  madeMeals: MealIdea[];
  onConfirmItem: (name: string) => void;
  onMarkGone: (name: string) => void;
  onViewRecipe: (meal: MealIdea) => void;
  onMarkCooked: (meal: MealIdea) => void;
}) {
  const useSoon = items.filter((item) => item.state === 'use_soon');
  const visibleItems = items.filter((item) => item.state !== 'gone' && item.state !== 'use_soon').slice(0, 30);

  return (
    <main className="screen-enter space-y-8">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase text-accent">Kitchen</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] text-ink">Keep the state honest.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Inventory drifts. Confirm what matters and mark what is gone.</p>
      </section>

      {plannedMeals.length ? (
        <section className="section-enter stagger-1 space-y-3">
          <SectionHeader eyebrow={`${plannedMeals.length} planned`} title="Cook next" />
          {plannedMeals.map((meal) => (
            <Card key={meal.id}>
              <h2 className="font-display text-[21px] font-bold leading-tight text-ink">{meal.name}</h2>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink-soft">{meal.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill tone="green">{meal.timeMinutes} min</Pill>
                <Pill>{meal.effort}</Pill>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button variant="secondary" icon={<CookingPot className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onViewRecipe(meal)}>
                  Cook
                </Button>
                <Button variant="secondary" icon={<CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMarkCooked(meal)}>
                  Mark cooked
                </Button>
              </div>
            </Card>
          ))}
        </section>
      ) : null}

      {useSoon.length ? (
        <section className="section-enter stagger-2 space-y-3">
          <SectionHeader eyebrow={`${useSoon.length} items`} title="Use soon" />
          {useSoon.map((item) => (
            <KitchenItemCard key={item.key} item={item} onConfirmItem={onConfirmItem} onMarkGone={onMarkGone} />
          ))}
        </section>
      ) : null}

      <section className="section-enter stagger-3 space-y-3">
        <SectionHeader eyebrow={`${visibleItems.length} items`} title="Inventory state" />
        {visibleItems.length ? (
          <div className="space-y-3">
            {visibleItems.map((item) => (
              <KitchenItemCard key={item.key} item={item} onConfirmItem={onConfirmItem} onMarkGone={onMarkGone} />
            ))}
          </div>
        ) : (
          <Card>
            <p className="text-[15px] font-medium leading-relaxed text-ink-soft">Capture a receipt, fridge, or grocery photo to start.</p>
          </Card>
        )}
      </section>

      {madeMeals.length ? (
        <section className="section-enter space-y-3">
          <SectionHeader eyebrow={`${madeMeals.length} cooked`} title="Cooked before" />
          {madeMeals.slice(0, 3).map((meal) => (
            <Card key={meal.id}>
              <h2 className="font-display text-[20px] font-bold leading-tight text-ink">{meal.name}</h2>
              <Button className="mt-4" variant="secondary" full onClick={() => onViewRecipe(meal)}>
                Cook again
              </Button>
            </Card>
          ))}
        </section>
      ) : null}
    </main>
  );
}

function KitchenItemCard({
  item,
  onConfirmItem,
  onMarkGone,
}: {
  item: KitchenInventoryItem;
  onConfirmItem: (name: string) => void;
  onMarkGone: (name: string) => void;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[16px] font-semibold text-ink">{item.name}</p>
          <p className="mt-1 text-[13px] font-medium leading-relaxed text-muted">{item.prompt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill tone={item.state === 'confirmed_have' || item.state === 'use_soon' ? 'green' : 'neutral'}>{labelForState(item.state)}</Pill>
            <Pill>{Math.round(item.confidenceScore * 100)}%</Pill>
            <Pill>{item.storageLocation}</Pill>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="secondary" icon={<CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onConfirmItem(item.name)}>
          Confirm
        </Button>
        <Button variant="ghost" icon={<XCircle className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onMarkGone(item.name)}>
          Gone
        </Button>
      </div>
    </Card>
  );
}

function labelForState(state: KitchenInventoryItem['state']): string {
  if (state === 'confirmed_have') return 'confirmed';
  if (state === 'probably_have') return 'probably have';
  if (state === 'running_low') return 'running low';
  if (state === 'use_soon') return 'use soon';
  if (state === 'probably_gone') return 'probably gone';
  return 'gone';
}
