import { FormEvent, useState } from 'react';
import { Camera, ReceiptText, RefreshCcw, ScanLine, Truck } from 'lucide-react';
import { GroceryList, GroceryListEntry } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { ListItemRow } from '../components/ListItemRow';
import { groupListItemsByStoreSection, parseManualItemNames } from '../utils/groceryLogic';

export function ListScreen({
  list,
  onBought,
  onAlreadyHave,
  onNeedToBuy,
  onRemove,
  onAddManual,
  onRebuild,
  onScanReceipt,
  onSnapFridge,
  onGoScan,
  onGetDelivered,
  onStartMealIdeas,
}: {
  list: GroceryList;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onNeedToBuy: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  onAddManual: (name: string) => void;
  onRebuild: () => void;
  onScanReceipt: () => void;
  onSnapFridge: () => void;
  onGoScan: () => void;
  onGetDelivered: () => void;
  onStartMealIdeas: () => void;
}) {
  const [manualItem, setManualItem] = useState('');
  const [building, setBuilding] = useState(false);
  const needToBuy = [...list.buyNow, ...list.maybeBuy];
  const alreadyHave = list.probablyAlreadyHave;
  const hasItems = needToBuy.length > 0 || alreadyHave.length > 0 || list.checkedOff.length > 0;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    parseManualItemNames(manualItem).forEach(onAddManual);
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
    <main className="screen-enter space-y-4">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">List</p>
        <h1 className="mt-1 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Need to buy.</h1>
        {hasItems && <p className="mt-1 text-[13px] font-medium leading-snug text-muted">Tap a circle to check items off. Swipe left to delete.</p>}
      </section>

      <section className="section-enter stagger-1">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input value={manualItem} onChange={(event) => setManualItem(event.target.value)} placeholder="Add lemon, rice, paper towels" className="min-w-0 flex-1" />
          <Button type="submit" className="px-4" disabled={!manualItem.trim()}>
            Add
          </Button>
        </form>
      </section>

      {!hasItems ? (
        <Card className="section-enter stagger-2">
          <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink">Your list is empty.</h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink-soft">
            Pick meals first, scan a receipt, snap your fridge, or type what you need.
          </p>
        </Card>
      ) : (
        <>
          <div className="section-enter space-y-5">
            <ListSection
              title="Need to Buy"
              count={needToBuy.length}
              entries={needToBuy}
              empty="Nothing to buy right now."
              onBought={onBought}
              onAlreadyHave={onAlreadyHave}
              onNeedToBuy={onNeedToBuy}
              onRemove={onRemove}
            />

            {list.checkedOff.length > 0 && (
              <ListSection
                title="In Cart"
                count={list.checkedOff.length}
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
              title="Already Have"
              count={alreadyHave.length}
              entries={alreadyHave}
              empty="Nothing marked owned yet."
              onBought={onBought}
              onAlreadyHave={onAlreadyHave}
              onNeedToBuy={onNeedToBuy}
              onRemove={onRemove}
              context="have"
            />
          </div>

          <div className="grid gap-2 pt-1">
            {needToBuy.length > 0 && (
              <Button icon={<Truck className="h-5 w-5" strokeWidth={1.75} />} onClick={onGetDelivered}>
                Get it delivered — compare prices
              </Button>
            )}
            <div className="grid grid-cols-3 gap-2">
              <Button variant="secondary" className="px-2 text-[14px]" icon={<ReceiptText className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanReceipt}>
                Receipt
              </Button>
              <Button variant="secondary" className="px-2 text-[14px]" icon={<Camera className="h-5 w-5" strokeWidth={1.75} />} onClick={onSnapFridge}>
                Fridge
              </Button>
              <Button variant="secondary" className="px-2 text-[14px]" icon={<ScanLine className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoScan}>
                Scan
              </Button>
            </div>
            <button className="w-full rounded-md border border-line bg-surface px-4 py-3 text-center text-[15px] font-semibold text-ink shadow-sm" onClick={onStartMealIdeas}>
              Turn this list into dinner ideas
            </button>
            <Button variant="ghost" className="min-h-10 px-2 text-[14px]" icon={<RefreshCcw className={`h-5 w-5 ${building ? 'animate-spin' : ''}`} strokeWidth={1.75} />} onClick={rebuild}>
              Rebuild
            </Button>
          </div>
        </>
      )}
    </main>
  );
}

function ListSection({
  title,
  count,
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
  count: number;
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

  if (sections.length === 0 && !empty) return null;

  return (
    <section>
      <div className="flex items-baseline justify-between border-b-2 border-ink/10 pb-1.5">
        <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.06em] text-ink">{title}</h2>
        <span className="text-[13px] font-semibold text-muted">{count}</span>
      </div>

      {sections.length === 0 ? (
        <p className="py-3 text-[14px] font-medium text-muted">{empty}</p>
      ) : (
        <div className="mt-1">
          {sections.map(([section, sectionEntries]) => (
            <div key={section} className="mt-1.5">
              <p className="pt-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted/80">{section}</p>
              <div>
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
