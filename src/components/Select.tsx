import { Check, ChevronDown } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

export function Select({
  label,
  hint,
  value,
  options,
  onChange,
  icon,
}: {
  label: string;
  hint?: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  icon?: ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
        {icon}
        {label}
      </span>
      {hint ? <span className="mt-1 block text-[13px] font-medium leading-snug text-ink-soft">{hint}</span> : null}
      <div className="relative mt-2">
        <select
          className="min-h-[52px] w-full appearance-none rounded-md border border-line bg-paper px-4 pr-11 text-[15px] font-semibold text-ink shadow-sm transition focus:border-ink focus:outline-none"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" strokeWidth={1.75} />
      </div>
    </label>
  );
}

export function MultiSelectDropdown({
  label,
  hint,
  options,
  selected,
  onToggle,
  icon,
  placeholder = 'Select',
}: {
  label: string;
  hint?: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
  icon?: ReactNode;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const summary = selected.length === 0 ? placeholder : selected.length <= 2 ? selected.join(', ') : `${selected.length} selected`;

  return (
    <div ref={ref}>
      <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
        {icon}
        {label}
      </span>
      {hint ? <span className="mt-1 block text-[13px] font-medium leading-snug text-ink-soft">{hint}</span> : null}
      <div className="relative mt-2">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-md border border-line bg-paper px-4 text-left text-[15px] font-semibold text-ink shadow-sm transition focus:border-ink focus:outline-none"
        >
          <span className="truncate">{summary}</span>
          <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={1.75} />
        </button>
        {open ? (
          <div
            role="listbox"
            aria-multiselectable
            className="absolute left-0 right-0 z-20 mt-2 max-h-64 overflow-auto rounded-md border border-line bg-surface p-1.5 shadow-md"
          >
            {options.map((option) => {
              const active = selected.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => onToggle(option)}
                  className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-3 text-left text-[15px] font-semibold transition ${
                    active ? 'bg-accent-soft text-accent' : 'text-ink active:bg-line/50'
                  }`}
                >
                  <span className="truncate">{option}</span>
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-[6px] border ${
                      active ? 'border-accent bg-accent text-paper' : 'border-line bg-paper'
                    }`}
                  >
                    {active ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
