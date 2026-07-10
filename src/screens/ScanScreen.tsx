import { FormEvent, ReactNode, useState } from 'react';
import { ChevronRight, Keyboard, NotebookPen, ReceiptText, Refrigerator, X } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { parseManualItemNames } from '../utils/groceryLogic';

export function ScanScreen({
  inventory,
  onRemoveInventory,
  onScanFridge,
  onScanReceipt,
  onImportRecipe,
  onAddNeed,
  onAddHave,
}: {
  inventory: string[];
  onRemoveInventory: (name: string) => void;
  onScanFridge: () => void;
  onScanReceipt: () => void;
  onImportRecipe: () => void;
  onAddNeed: (name: string) => void;
  onAddHave: (name: string) => void;
}) {
  const [item, setItem] = useState('');
  const [target, setTarget] = useState<'have' | 'need'>('have');

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!item.trim()) return;
    parseManualItemNames(item).forEach((name) => {
      if (target === 'have') onAddHave(name);
      else onAddNeed(name);
    });
    setItem('');
  }

  return (
    <main className="screen-enter space-y-5">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Inventory</p>
        <h1 className="mt-2 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">What's in your kitchen.</h1>
        <p className="mt-2 text-[15px] font-medium leading-[1.4] text-ink-soft">
          Everything WTF knows you have. Meals and your grocery list both work off this.
        </p>
      </section>

      <Card className="section-enter stagger-1 p-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">In your kitchen</h2>
          <span className="text-[13px] font-semibold text-muted">{inventory.length}</span>
        </div>
        {inventory.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {inventory.map((name) => (
              <span key={name} className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-paper py-1.5 pl-3 pr-1.5 text-[13px] font-semibold text-ink">
                {name}
                <button
                  className="grid h-5 w-5 place-items-center rounded-full text-muted active:bg-line/50 active:text-ink"
                  aria-label={`Remove ${name} from inventory`}
                  onClick={() => onRemoveInventory(name)}
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-[14px] font-medium leading-snug text-muted">
            Nothing tracked yet. Add items below, snap your fridge, or scan a receipt — checked-off list items land here too.
          </p>
        )}
      </Card>

      <div className="section-enter stagger-1 space-y-3">
        <SourceRow
          icon={<Refrigerator className="h-6 w-6" strokeWidth={1.75} />}
          title="Scan fridge or pantry"
          subtitle="Spot what you already have."
          onClick={onScanFridge}
        />
        <SourceRow
          icon={<ReceiptText className="h-6 w-6" strokeWidth={1.75} />}
          title="Scan receipt"
          subtitle="Purchased items land in Already Have."
          onClick={onScanReceipt}
        />
        <SourceRow
          icon={<NotebookPen className="h-6 w-6" strokeWidth={1.75} />}
          title="Import a recipe"
          subtitle="Pull a recipe's ingredients onto your list."
          onClick={onImportRecipe}
        />
      </div>

      <Card className="section-enter stagger-2 p-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <Keyboard className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">Type items manually</h2>
            <p className="text-[13px] font-medium leading-snug text-ink-soft">Leftovers, takeout, anything the camera can't see.</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            className={`min-h-11 rounded-md border px-3 text-[14px] font-semibold transition active:scale-[0.98] ${
              target === 'have' ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
            }`}
            onClick={() => setTarget('have')}
          >
            Already Have
          </button>
          <button
            className={`min-h-11 rounded-md border px-3 text-[14px] font-semibold transition active:scale-[0.98] ${
              target === 'need' ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
            }`}
            onClick={() => setTarget('need')}
          >
            Need to Buy
          </button>
        </div>
        <form className="mt-2 flex gap-2" onSubmit={submit}>
          <Input value={item} onChange={(event) => setItem(event.target.value)} placeholder="leftover rice, cauliflower, Greek yogurt" className="min-w-0 flex-1" />
          <Button className="px-4" type="submit" disabled={!item.trim()}>
            Add
          </Button>
        </form>
      </Card>
    </main>
  );
}

function SourceRow({ icon, title, subtitle, onClick }: { icon: ReactNode; title: string; subtitle: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-[22px] border border-line bg-surface p-4 text-left shadow-sm transition duration-150 ease-out active:scale-[0.99] active:bg-paper"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">{icon}</div>
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">{title}</h2>
        <p className="mt-0.5 text-[13px] font-medium leading-snug text-ink-soft">{subtitle}</p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted" strokeWidth={2} />
    </button>
  );
}
