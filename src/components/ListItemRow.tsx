import { Check, Minus, ShieldCheck } from 'lucide-react';
import { GroceryListEntry } from '../types';

export function ListItemRow({
  entry,
  onBought,
  onAlreadyHave,
  onRemove,
  checked = false,
}: {
  entry: GroceryListEntry;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
  checked?: boolean;
}) {
  return (
    <div className={`rounded-md border p-3 transition ${checked ? 'border-accent/20 bg-accent-soft' : 'border-line bg-surface'}`}>
      <div className="flex items-start gap-3">
        <button
          className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition active:scale-95 ${
            checked ? 'border-accent bg-accent text-surface' : 'border-ink-soft bg-surface text-transparent'
          }`}
          onClick={() => (checked ? onRemove(entry) : onBought(entry))}
          aria-label={checked ? `Remove ${entry.name} from checked items` : `Mark ${entry.name} bought`}
          title={checked ? 'Remove from checked items' : 'Mark bought'}
        >
          <Check className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className={`text-[16px] font-semibold text-ink ${checked ? 'line-through decoration-accent/70 decoration-2' : ''}`}>{entry.name}</p>
              <p className="mt-1 text-[13px] font-medium leading-relaxed text-muted">{entry.reason}</p>
            </div>
            <span className="shrink-0 rounded-pill bg-paper px-2.5 py-1 text-[11px] font-semibold text-muted">{entry.section}</span>
          </div>

          {!checked ? (
            <div className="mt-3 flex gap-2">
              <button
                className="inline-flex min-h-9 flex-1 items-center justify-center gap-1.5 rounded-sm bg-paper px-2 text-[13px] font-semibold text-ink-soft active:bg-line/60"
                onClick={() => onAlreadyHave(entry)}
              >
                <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
                Already have
              </button>
              <button
                className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-sm px-3 text-[13px] font-semibold text-muted active:bg-line/60"
                onClick={() => onRemove(entry)}
              >
                <Minus className="h-4 w-4" strokeWidth={1.75} />
                Remove
              </button>
            </div>
          ) : (
            <button className="mt-3 min-h-9 rounded-sm px-3 text-[13px] font-semibold text-muted active:bg-line/60" onClick={() => onRemove(entry)}>
              Remove from checked
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
