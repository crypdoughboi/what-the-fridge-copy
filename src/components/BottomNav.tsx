import { ChefHat, ListChecks, Refrigerator, ScanLine } from 'lucide-react';
import { Tab } from '../types';

const tabs: Array<{ id: Tab; label: string; Icon: typeof ChefHat }> = [
  { id: 'deck', label: 'Deck', Icon: ChefHat },
  { id: 'add', label: 'Add', Icon: ScanLine },
  { id: 'shop', label: 'Shop', Icon: ListChecks },
  { id: 'kitchen', label: 'Kitchen', Icon: Refrigerator },
];

export function BottomNav({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 backdrop-blur-xl">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map(({ id, label, Icon }) => {
          const active = id === activeTab;
          return (
            <button
              key={id}
              className={`flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold transition duration-150 ease-out ${
                active ? 'bg-ink text-paper shadow-sm' : 'text-muted active:bg-line/50'
              }`}
              onClick={() => onTabChange(id)}
              aria-label={label}
              title={label}
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
