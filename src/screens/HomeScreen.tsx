import { ArrowRight, Boxes, CircleUserRound, NotebookText, Scale, ScanLine } from 'lucide-react';
import { ReactNode } from 'react';
import { WordmarkText, WtfFridgeIcon } from '../components/BrandMark';

export function HomeScreen({
  onCook,
  onGoList,
  onGoScan,
  onInventory,
  onCompare,
  onSettings,
}: {
  onCook: () => void;
  onGoList: () => void;
  onGoScan: () => void;
  onInventory: () => void;
  onCompare: () => void;
  onSettings: () => void;
}) {
  return (
    <div className="app-scroll-home screen-enter">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <WtfFridgeIcon size="sm" />
          <WordmarkText tone="dark" />
        </div>
        <button
          type="button"
          onClick={onSettings}
          aria-label="Account"
          title="Account"
          className="grid h-10 w-10 place-items-center rounded-full bg-cream/15 text-cream ring-1 ring-cream/20 backdrop-blur-sm transition active:scale-95"
        >
          <CircleUserRound className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </header>

      <button
        type="button"
        onClick={onCook}
        className="section-enter stagger-1 relative mt-5 block w-full overflow-hidden rounded-[28px] bg-cream p-6 text-left shadow-hero transition active:scale-[0.99]"
      >
        <ProduceArt className="pointer-events-none absolute -right-4 top-1 h-44 w-44" />
        <div className="relative max-w-[64%]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-olive">Tonight</p>
          <h1 className="mt-2 font-serif text-[40px] font-bold leading-[0.95] tracking-[-0.01em] text-forest">What should I make?</h1>
          <span className="mt-5 inline-flex items-center gap-2 rounded-pill bg-forest px-5 py-3 text-[15px] font-semibold text-cream shadow-sm">
            Cook now
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </span>
        </div>
      </button>

      <div className="section-enter stagger-2 mt-4 grid grid-cols-2 gap-3.5">
        <Tile bg="bg-olive" icon={<NotebookText className="h-6 w-6" strokeWidth={1.75} />} title="Grocery List" onClick={onGoList} />
        <Tile bg="bg-terracotta" icon={<ScanLine className="h-6 w-6" strokeWidth={1.75} />} title="Scan" onClick={onGoScan} />
        <Tile bg="bg-mustard" icon={<Boxes className="h-6 w-6" strokeWidth={1.75} />} title="Inventory" onClick={onInventory} />
        <Tile bg="bg-leaf" icon={<Scale className="h-6 w-6" strokeWidth={1.75} />} title="Compare" onClick={onCompare} />
      </div>
    </div>
  );
}

function Tile({ bg, icon, title, onClick }: { bg: string; icon: ReactNode; title: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex aspect-[7/6] flex-col justify-between rounded-[22px] ${bg} p-4 text-left text-cream shadow-md transition active:scale-[0.98]`}
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream/15 text-cream">{icon}</span>
      <span className="flex items-end justify-between">
        <span className="text-[18px] font-bold leading-tight tracking-[-0.01em]">{title}</span>
        <ArrowRight className="h-5 w-5 text-cream/75" strokeWidth={2} />
      </span>
    </button>
  );
}

function ProduceArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* leaf */}
      <path d="M150 90c23-7 41 3 46 24-23 9-43-1-46-24z" fill="#3E6140" />
      <path d="M153 95c12 2 24 9 34 19" stroke="#2C4A2E" strokeWidth="2.4" strokeLinecap="round" />
      {/* baguette */}
      <g transform="rotate(-38 122 84)">
        <rect x="74" y="62" width="100" height="40" rx="20" fill="#E3B055" />
        <path d="M98 76l-8 12M114 74l-8 12M130 74l-8 12M146 76l-8 12" stroke="#B7842F" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* tomato */}
      <circle cx="92" cy="122" r="38" fill="#CB4A2A" />
      <circle cx="79" cy="109" r="11" fill="#DC6A4A" opacity="0.55" />
      <path d="M92 86c-4-8-12-10-18-8 2 8 8 13 18 12 10-1 16-6 18-12-6-2-14 0-18 8z" fill="#4F7B3B" />
    </svg>
  );
}
