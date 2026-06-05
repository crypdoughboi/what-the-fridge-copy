import { BarChart3, Home, ListChecks, ScanLine, Utensils } from 'lucide-react';
import { Tab } from '../types';

const tabs: Array<{ id: Tab; label: string; Icon: typeof Home }> = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'list', label: 'List', Icon: ListChecks },
  { id: 'scan', label: 'Scan', Icon: ScanLine },
  { id: 'meals', label: 'Meals', Icon: Utensils },
  { id: 'spend', label: 'Spend', Icon: BarChart3 },
];

export function BottomNav({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-40 border-t border-ink/8 bg-cream/92 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 shadow-nav backdrop-blur-xl">
      <div className="grid grid-cols-5 gap-1">
        {tabs.map(({ id, label, Icon }) => {
          const active = id === activeTab;
          return (
            <button
              key={id}
              className={`flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-bold transition ${
                active ? 'bg-ink text-cream shadow-card' : 'text-steel active:bg-ink/8'
              }`}
              onClick={() => onTabChange(id)}
              aria-label={label}
              title={label}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.7 : 2.2} />
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
