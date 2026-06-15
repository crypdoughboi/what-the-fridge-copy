import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

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

export function MultiSelectChips({
  label,
  hint,
  options,
  selected,
  onToggle,
  icon,
}: {
  label: string;
  hint?: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
  icon?: ReactNode;
}) {
  return (
    <div>
      <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
        {icon}
        {label}
      </span>
      {hint ? <span className="mt-1 block text-[13px] font-medium leading-snug text-ink-soft">{hint}</span> : null}
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              className={`min-h-10 rounded-pill border px-3.5 py-2 text-[13px] font-semibold transition active:scale-[0.98] ${
                active ? 'border-ink bg-ink text-paper shadow-sm' : 'border-line bg-paper text-ink-soft'
              }`}
              onClick={() => onToggle(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
