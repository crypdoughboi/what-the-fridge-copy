import { Home, ListChecks, ScanLine, Utensils } from 'lucide-react';
import { Tab } from '../types';

const tabs: Array<{ id: Tab; label: string; Icon: typeof Home }> = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'meals', label: 'Meals', Icon: Utensils },
  { id: 'list', label: 'List', Icon: ListChecks },
  { id: 'scan', label: 'Scan', Icon: ScanLine },
];

export function BottomNav({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  return (
    <nav className="z-40 shrink-0 border-t border-line bg-surface px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map(({ id, label, Icon }) => {
          const active = id === activeTab;
          return (
            <button
              key={id}
              className={`flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold transition duration-150 ease-out ${
                active ? 'text-accent' : 'text-muted active:text-ink-soft'
              }`}
              onClick={() => onTabChange(id)}
              aria-label={label}
              title={label}
            >
              <span className={`grid h-8 w-8 place-items-center rounded-xl transition ${active ? 'bg-accent-soft' : 'bg-transparent'}`}>
                <Icon className="h-[22px] w-[22px]" strokeWidth={active ? 2.2 : 1.75} />
              </span>
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
