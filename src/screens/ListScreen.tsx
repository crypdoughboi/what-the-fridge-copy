import { FormEvent, useState } from 'react';
import { Camera, ClipboardList, ReceiptText, RefreshCcw, Sparkles } from 'lucide-react';
import { GroceryList, GroceryListEntry } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { ListItemRow } from '../components/ListItemRow';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';
import { groupListItemsByStoreSection } from '../utils/groceryLogic';

export function ListScreen({
  list,
  onBought,
  onAlreadyHave,
  onRemove,
  onAddManual,
  onAddUsuals,
  onAddMealUnlocks,
  onRebuild,
  onScanReceipt,
  onSnapFridge,
  onPasteOldList,
  onGoMeals,
}: {
  list: GroceryList;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  onAddManual: (name: string) => void;
  onAddUsuals: () => void;
  onAddMealUnlocks: (entries: GroceryListEntry[]) => void;
  onRebuild: () => void;
  onScanReceipt: () => void;
  onSnapFridge: () => void;
  onPasteOldList: () => void;
  onGoMeals: () => void;
}) {
  const [manualItem, setManualItem] = useState('');
  const [building, setBuilding] = useState(false);
  const hasItems =
    list.buyNow.length > 0 ||
    list.maybeBuy.length > 0 ||
    list.probablyAlreadyHave.length > 0 ||
    list.checkedOff.length > 0;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddManual(manualItem);
    setManualItem('');
  }

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
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">List</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Build the list.</h1>
        {hasItems && <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Tap the open circle as items go in the cart.</p>}
      </section>

      <section className="section-enter stagger-1 space-y-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={manualItem}
            onChange={(event) => setManualItem(event.target.value)}
            placeholder="Add milk, limes, paper towels"
            className="min-w-0 flex-1"
          />
          <Button type="submit" className="px-4" disabled={!manualItem.trim()}>
            Add
          </Button>
        </form>

        <div className="grid grid-cols-3 gap-2">
          <Button variant="secondary" className="px-2 text-[14px]" icon={<Sparkles className="h-5 w-5" strokeWidth={1.75} />} onClick={onAddUsuals}>
            Add usuals
          </Button>
          <Button variant="secondary" className="px-2 text-[14px]" icon={<ReceiptText className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanReceipt}>
            Scan receipt
          </Button>
          <Button variant="secondary" className="px-2 text-[14px]" icon={<Camera className="h-5 w-5" strokeWidth={1.75} />} onClick={onSnapFridge}>
            Snap fridge
          </Button>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" className="min-h-10 px-2 text-[14px]" icon={<ClipboardList className="h-5 w-5" strokeWidth={1.75} />} onClick={onPasteOldList}>
            Paste an old list
          </Button>
          <Button variant="ghost" className="min-h-10 px-2 text-[14px]" icon={<RefreshCcw className={`h-5 w-5 ${building ? 'animate-spin' : ''}`} strokeWidth={1.75} />} onClick={rebuild}>
            Rebuild
          </Button>
        </div>
      </section>

      {!hasItems ? (
        <Card className="section-enter stagger-2">
          <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink">Your list is empty.</h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">
            Snap a receipt, snap your fridge, or add your usuals to fill it fast.
          </p>
        </Card>
      ) : (
        <>
          <ListSection
            title="Buy now"
            eyebrow={`${list.buyNow.length} things`}
            entries={list.buyNow}
            empty="Nothing urgent right now."
            onBought={onBought}
            onAlreadyHave={onAlreadyHave}
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
              onRemove={onRemove}
              checked
            />
          )}

          {list.maybeBuy.length > 0 && (
            <ListSection
              title="Maybe buy"
              eyebrow="Check first"
              subhead="Running low. Check before you buy."
              entries={list.maybeBuy}
              empty=""
              onBought={onBought}
              onAlreadyHave={onAlreadyHave}
              onRemove={onRemove}
            />
          )}

          {list.probablyAlreadyHave.length > 0 && (
            <ListSection
              title="Probably already have"
              eyebrow="Skip list"
              subhead="Bought recently. Skip unless you're sure."
              entries={list.probablyAlreadyHave}
              empty=""
              onBought={onBought}
              onAlreadyHave={onAlreadyHave}
              onRemove={onRemove}
            />
          )}

          <Card>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">{list.mealUnlocks.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {list.mealUnlocks.items.map((item) => (
                <Pill key={item.id}>{item.name}</Pill>
              ))}
            </div>
            <Button className="mt-4" variant="secondary" full onClick={() => onAddMealUnlocks(list.mealUnlocks.items)}>
              Add missing meal items
            </Button>
          </Card>

          {list.overbuyAlerts.length > 0 && (
            <Card>
              <SectionHeader eyebrow="Check before buying" title="Skip the repeat buys" />
              <div className="mt-4 space-y-2">
                {list.overbuyAlerts.map((alert) => (
                  <div key={alert} className="rounded-md bg-paper p-3 text-[14px] font-semibold leading-relaxed text-ink-soft">
                    {alert}
                  </div>
                ))}
              </div>
            </Card>
          )}

          <button className="w-full rounded-md border border-line bg-surface px-4 py-4 text-center text-[15px] font-semibold text-ink shadow-sm" onClick={onGoMeals}>
            Turn this list into dinner ideas
          </button>
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
  onRemove,
  checked = false,
}: {
  title: string;
  eyebrow: string;
  subhead?: string;
  entries: GroceryListEntry[];
  empty: string;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  checked?: boolean;
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
                  <ListItemRow key={entry.id} entry={entry} onBought={onBought} onAlreadyHave={onAlreadyHave} onRemove={onRemove} checked={checked} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
