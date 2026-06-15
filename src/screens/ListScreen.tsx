import { useState } from 'react';
import { RefreshCcw, ScanLine, Utensils } from 'lucide-react';
import { GroceryList, GroceryListEntry } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ListItemRow } from '../components/ListItemRow';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';
import { groupListItemsByStoreSection } from '../utils/groceryLogic';

export function ListScreen({
  list,
  onBought,
  onAlreadyHave,
  onNeedToBuy,
  onRemove,
  onRebuild,
  onGoAdd,
  onStartMealIdeas,
}: {
  list: GroceryList;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onNeedToBuy: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  onRebuild: () => void;
  onGoAdd: () => void;
  onStartMealIdeas: () => void;
}) {
  const [building, setBuilding] = useState(false);
  const needToBuy = [...list.buyNow, ...list.maybeBuy];
  const alreadyHave = list.probablyAlreadyHave;
  const hasItems = needToBuy.length > 0 || alreadyHave.length > 0 || list.checkedOff.length > 0;

  function rebuild() {
    setBuilding(true);
    window.setTimeout(() => {
      onRebuild();
      setBuilding(false);
    }, 650);
  }

  return (
    <main className="screen-enter space-y-8">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase text-accent">Shop</p>
        <h1 className="mt-2 font-display text-[32px] font-bold leading-[1.16] text-ink">Shopping list.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Selected meals minus Kitchen, with staples added when needed.</p>
      </section>

      <Card className="section-enter stagger-1">
        <SectionHeader eyebrow={`${list.mealUnlocks.meals.length} meals`} title={list.mealUnlocks.title} />
        {list.mealUnlocks.items.length ? (
          <div className="mt-4 space-y-2">
            {list.mealUnlocks.items.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-3 rounded-md bg-paper px-3 py-2.5">
                <div>
                  <p className="text-[15px] font-semibold text-ink">{item.name}</p>
                  {item.usedForMeals?.length ? <p className="mt-1 text-[13px] font-medium text-muted">{item.usedForMeals.join(', ')}</p> : null}
                </div>
                <Pill>{item.section}</Pill>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 rounded-md bg-paper p-3 text-[14px] font-medium text-ink-soft">Pick a dinner from Meals and this fills itself.</p>
        )}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="secondary" icon={<Utensils className="h-5 w-5" strokeWidth={1.75} />} onClick={onStartMealIdeas}>
            Meals
          </Button>
          <Button variant="secondary" icon={<ScanLine className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoAdd}>
            Add
          </Button>
        </div>
      </Card>

      {!hasItems ? (
        <Card className="section-enter stagger-2">
          <h2 className="font-display text-[22px] font-bold text-ink">Nothing to buy right now.</h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">Choose a meal first or capture what is in the kitchen.</p>
        </Card>
      ) : (
        <>
          <ListSection
            title="Need to Buy"
            eyebrow={`${needToBuy.length} items`}
            entries={needToBuy}
            empty="Nothing to buy right now."
            onBought={onBought}
            onAlreadyHave={onAlreadyHave}
            onNeedToBuy={onNeedToBuy}
            onRemove={onRemove}
          />

          {list.checkedOff.length > 0 && (
            <ListSection
              title="In cart"
              eyebrow={`${list.checkedOff.length} checked`}
              entries={list.checkedOff}
              empty=""
              onBought={onBought}
              onAlreadyHave={onAlreadyHave}
              onNeedToBuy={onNeedToBuy}
              onRemove={onRemove}
              checked
            />
          )}

          <ListSection
            title="Kitchen says you have"
            eyebrow={`${alreadyHave.length} items`}
            subhead="Use these before buying around them."
            entries={alreadyHave}
            empty="Nothing confirmed yet."
            onBought={onBought}
            onAlreadyHave={onAlreadyHave}
            onNeedToBuy={onNeedToBuy}
            onRemove={onRemove}
            context="have"
          />

          <Button variant="ghost" className="min-h-10 px-2 text-[14px]" icon={<RefreshCcw className={`h-5 w-5 ${building ? 'animate-spin' : ''}`} strokeWidth={1.75} />} onClick={rebuild}>
            Regenerate
          </Button>
        </>
      )}
    </main>
  );
}

function ListSection({
  title,
  eyebrow,
  subhead,
  entries,
  empty,
  onBought,
  onAlreadyHave,
  onNeedToBuy,
  onRemove,
  checked = false,
  context = 'need',
}: {
  title: string;
  eyebrow: string;
  subhead?: string;
  entries: GroceryListEntry[];
  empty: string;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onNeedToBuy: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  checked?: boolean;
  context?: 'need' | 'have';
}) {
  const grouped = groupListItemsByStoreSection(entries);
  const sections = Object.entries(grouped).filter(([, sectionEntries]) => sectionEntries.length > 0);

  return (
    <section className="section-enter space-y-3">
      <SectionHeader eyebrow={eyebrow} title={title} subhead={subhead} />
      {sections.length === 0 ? (
        <Card>
          <p className="text-[15px] font-medium leading-relaxed text-ink-soft">{empty}</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {sections.map(([section, sectionEntries]) => (
            <div key={section}>
              <div className="mb-2 flex items-center justify-between">
                <Pill>{section}</Pill>
                <span className="text-[13px] font-semibold text-muted">{sectionEntries.length}</span>
              </div>
              <div className="space-y-2">
                {sectionEntries.map((entry) => (
                  <ListItemRow
                    key={entry.id}
                    entry={entry}
                    onBought={onBought}
                    onAlreadyHave={onAlreadyHave}
                    onNeedToBuy={onNeedToBuy}
                    onRemove={onRemove}
                    checked={checked}
                    context={context}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
