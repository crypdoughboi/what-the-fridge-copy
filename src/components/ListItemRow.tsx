import { Check, Minus, ShieldCheck } from 'lucide-react';
import { GroceryListEntry } from '../types';
import { Button } from './Button';

export function ListItemRow({
  entry,
  onBought,
  onAlreadyHave,
  onRemove,
}: {
  entry: GroceryListEntry;
  onBought: (entry: GroceryListEntry) => void;
  onAlreadyHave: (entry: GroceryListEntry) => void;
  onRemove: (entry: GroceryListEntry) => void;
}) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-white/72 p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[15px] font-black text-ink">{entry.name}</p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-steel">{entry.reason}</p>
        </div>
        <span className="rounded-full bg-linen px-2.5 py-1 text-[10px] font-black text-steel">{entry.section}</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <Button variant="secondary" className="min-h-10 px-2 text-xs" icon={<Check className="h-3.5 w-3.5" />} onClick={() => onBought(entry)}>
          Bought
        </Button>
        <Button
          variant="secondary"
          className="min-h-10 px-2 text-xs"
          icon={<ShieldCheck className="h-3.5 w-3.5" />}
          onClick={() => onAlreadyHave(entry)}
        >
          Have
        </Button>
        <Button variant="ghost" className="min-h-10 px-2 text-xs" icon={<Minus className="h-3.5 w-3.5" />} onClick={() => onRemove(entry)}>
          Remove
        </Button>
      </div>
    </div>
  );
}
