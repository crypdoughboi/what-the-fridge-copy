import { FormEvent, useState } from 'react';
import { Camera, ReceiptText, RefreshCcw, ScanLine, Truck } from 'lucide-react';
import { GroceryList, GroceryListEntry } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { ListItemRow } from '../components/ListItemRow';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';
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
    <main className="screen-enter space-y-8">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">List</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Need to buy.</h1>
        {hasItems && <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Tap the open circle as items go in the cart.</p>}
      </section>

      <section className="section-enter stagger-1 space-y-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={manualItem}
            onChange={(event) => setManualItem(event.target.value)}
            placeholder="Add lemon, rice, paper towels"
            className="min-w-0 flex-1"
          />
          <Button type="submit" className="px-4" disabled={!manualItem.trim()}>
            Add
          </Button>
        </form>

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
            title="Already Have"
            eyebrow={`${alreadyHave.length} items`}
            subhead="Fridge, pantry, receipt history, and anything you marked owned."
            entries={alreadyHave}
            empty="Nothing marked owned yet."
            onBought={onBought}
            onAlreadyHave={onAlreadyHave}
            onNeedToBuy={onNeedToBuy}
            onRemove={onRemove}
            context="have"
          />

          <div className="grid gap-2">
            {needToBuy.length > 0 && (
              <Button icon={<Truck className="h-5 w-5" strokeWidth={1.75} />} onClick={onGetDelivered}>
                Get it delivered — compare prices
              </Button>
            )}
            <button className="w-full rounded-md border border-line bg-surface px-4 py-4 text-center text-[15px] font-semibold text-ink shadow-sm" onClick={onStartMealIdeas}>
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
