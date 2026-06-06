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
    <div className={`rounded-2xl border p-3 transition ${checked ? 'border-herb/20 bg-herb/8' : 'border-ink/8 bg-white/78'}`}>
      <div className="flex items-start gap-3">
        <button
          className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition active:scale-95 ${
            checked ? 'border-herb bg-herb text-white' : 'border-ink/35 bg-white text-transparent'
          }`}
          onClick={() => (checked ? onRemove(entry) : onBought(entry))}
          aria-label={checked ? `Remove ${entry.name} from checked items` : `Mark ${entry.name} bought`}
          title={checked ? 'Remove from checked items' : 'Mark bought'}
        >
          <Check className="h-4 w-4" />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className={`text-[15px] font-black text-ink ${checked ? 'line-through decoration-herb/70 decoration-2' : ''}`}>{entry.name}</p>
              <p className="mt-1 text-xs font-semibold leading-relaxed text-steel">{entry.reason}</p>
            </div>
            <span className="shrink-0 rounded-full bg-linen px-2.5 py-1 text-[10px] font-black text-steel">{entry.section}</span>
          </div>

          {!checked ? (
            <div className="mt-3 flex gap-2">
              <button
                className="inline-flex min-h-9 flex-1 items-center justify-center gap-1.5 rounded-xl bg-linen/78 px-2 text-xs font-black text-ink active:bg-ink/10"
                onClick={() => onAlreadyHave(entry)}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Already have
              </button>
              <button
                className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-xl px-3 text-xs font-black text-steel active:bg-ink/10"
                onClick={() => onRemove(entry)}
              >
                <Minus className="h-3.5 w-3.5" />
                Remove
              </button>
            </div>
          ) : (
            <button className="mt-3 min-h-9 rounded-xl px-3 text-xs font-black text-steel active:bg-ink/10" onClick={() => onRemove(entry)}>
              Remove from checked
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
