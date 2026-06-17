import { useState } from 'react';
import { Check, Utensils } from 'lucide-react';
import { GroceryListEntry } from '../types';

export function ListItemRow({
  entry,
  onBought,
  onAlreadyHave,
  onNeedToBuy,
  onRemove,
  checked = false,
  context = 'need',
}: {
  entry: GroceryListEntry;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onNeedToBuy?: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  checked?: boolean;
  context?: 'need' | 'have';
}) {
  const [open, setOpen] = useState(false);
  const isHave = context === 'have';
  const filled = checked || isHave;

  return (
    <div className="border-b border-line/70 last:border-b-0">
      <div className="flex items-center gap-3 py-2.5">
        <button
          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition active:scale-90 ${
            filled ? 'border-accent bg-accent text-surface' : 'border-ink-soft/55 bg-transparent text-transparent'
          }`}
          onClick={() => (checked ? onRemove(entry) : isHave ? onNeedToBuy?.(entry) : onBought(entry))}
          aria-label={checked ? `Uncheck ${entry.name}` : isHave ? `Move ${entry.name} to Need to Buy` : `Check off ${entry.name}`}
          title={checked ? 'Uncheck' : isHave ? 'Move to Need to Buy' : 'Check off'}
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </button>

        <button type="button" onClick={() => setOpen((current) => !current)} className="flex min-w-0 flex-1 items-center gap-2 py-0.5 text-left">
          <span className={`min-w-0 flex-1 truncate text-[16px] font-medium ${checked ? 'text-muted line-through decoration-muted/60' : 'text-ink'}`}>
            {entry.name}
          </span>
          {entry.usedForMeals?.length ? <Utensils className="h-3.5 w-3.5 shrink-0 text-muted" strokeWidth={1.75} /> : null}
        </button>
      </div>

      {open ? (
        <div className="pb-2.5 pl-9">
          {entry.usedForMeals?.length ? (
            <p className="mb-1.5 text-[12px] font-medium text-muted">Used for {entry.usedForMeals.join(', ')}</p>
          ) : entry.reason ? (
            <p className="mb-1.5 text-[12px] font-medium leading-snug text-muted">{entry.reason}</p>
          ) : null}
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] font-semibold">
            {checked ? (
              <button className="text-ink-soft active:text-ink" onClick={() => onRemove(entry)}>
                Remove from cart
              </button>
            ) : isHave ? (
              <>
                <button className="text-ink-soft active:text-ink" onClick={() => onNeedToBuy?.(entry)}>
                  Move to Need to Buy
                </button>
                <button className="text-muted active:text-ink" onClick={() => onRemove(entry)}>
                  Remove
                </button>
              </>
            ) : (
              <>
                <button className="text-ink-soft active:text-ink" onClick={() => onAlreadyHave(entry)}>
                  Already have
                </button>
                <button className="text-muted active:text-ink" onClick={() => onRemove(entry)}>
                  Remove
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
