import { ReactNode, useState } from 'react';
import { Plus } from 'lucide-react';

/**
 * A compact group of small selectable buttons (chips) with a "+ more" expander.
 *
 * Works for both single-select (pass a one-item `selected` array) and
 * multi-select (pass the full `selected` array with `multiple`). When collapsed,
 * the first `visibleCount` options are shown plus any selected options that would
 * otherwise be hidden, so the current choice is always visible.
 */
export function ChoiceChips({
  label,
  hint,
  icon,
  options,
  selected,
  onSelect,
  multiple = false,
  visibleCount = 6,
}: {
  label: string;
  hint?: string;
  icon?: ReactNode;
  options: readonly string[];
  selected: string[];
  onSelect: (value: string) => void;
  multiple?: boolean;
  visibleCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const head = options.slice(0, visibleCount);
  const selectedHidden = selected.filter((value) => options.includes(value) && !head.includes(value));
  const visible = expanded ? options : [...head, ...selectedHidden];
  const hiddenCount = options.length - visible.length;

  return (
    <div>
      <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
        {icon}
        {label}
      </span>
      {hint ? <span className="mt-1 block text-[13px] font-medium leading-snug text-ink-soft">{hint}</span> : null}
      <div className="mt-1.5 flex flex-wrap gap-1.5" role={multiple ? 'group' : 'radiogroup'}>
        {visible.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              role={multiple ? 'checkbox' : 'radio'}
              aria-checked={active}
              onClick={() => onSelect(option)}
              className={`min-h-9 rounded-pill border px-3 text-[13px] font-semibold transition active:scale-[0.98] ${
                active ? 'border-ink bg-ink text-paper shadow-sm' : 'border-line bg-paper text-ink-soft'
              }`}
            >
              {option}
            </button>
          );
        })}
        {hiddenCount > 0 && !expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex min-h-9 items-center gap-1 rounded-pill border border-dashed border-line bg-paper px-3 text-[13px] font-semibold text-accent transition active:scale-[0.98]"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2.25} />
            {hiddenCount} more
          </button>
        ) : null}
        {expanded && options.length > visibleCount ? (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="min-h-9 rounded-pill border border-dashed border-line bg-paper px-3 text-[13px] font-semibold text-muted transition active:scale-[0.98]"
          >
            Show less
          </button>
        ) : null}
      </div>
    </div>
  );
}
