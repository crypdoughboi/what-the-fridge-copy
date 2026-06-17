import { ArrowRight, ChevronRight, CircleUserRound } from 'lucide-react';
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
    <div className="app-scroll-home screen-enter flex flex-col">
      <header className="flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <WtfFridgeIcon size="sm" />
          <WordmarkText tone="light" />
        </div>
        <button
          type="button"
          onClick={onSettings}
          aria-label="Account"
          title="Account"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink shadow-sm transition active:scale-95"
        >
          <CircleUserRound className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </header>

      <button
        type="button"
        onClick={onCook}
        className="section-enter stagger-1 relative mt-4 block w-full shrink-0 overflow-hidden rounded-[28px] border border-line/60 bg-cream p-5 text-left shadow-md transition active:scale-[0.99]"
      >
        <ProduceArt className="pointer-events-none absolute -right-4 top-1 h-40 w-40" />
        <div className="relative max-w-[64%]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-olive">Tonight</p>
          <h1 className="mt-1.5 font-serif text-[34px] font-bold leading-[0.96] tracking-[-0.01em] text-ink">What should I make?</h1>
          <span className="mt-4 inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-[15px] font-semibold text-surface shadow-sm">
            Cook now
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </span>
        </div>
      </button>

      <div className="section-enter stagger-2 mt-3 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-3">
        <Tile iconSrc="/grocerylist-icon.png" title="Grocery List" onClick={onGoList} />
        <Tile iconSrc="/scan-icon.png" title="Scan" onClick={onGoScan} />
        <Tile iconSrc="/inventory-icon.png" title="Inventory" onClick={onInventory} />
        <Tile iconSrc="/compare-icon.png" title="Compare" onClick={onCompare} />
      </div>
    </div>
  );
}

function Tile({ iconSrc, title, onClick }: { iconSrc: string; title: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-full min-h-[96px] flex-col justify-between overflow-hidden rounded-[22px] border border-line/70 bg-surface p-4 text-left shadow-sm transition active:scale-[0.98]"
    >
      <img src={iconSrc} alt="" className="-ml-1 -mt-1 h-14 w-14 object-contain" />
      <span className="flex items-end justify-between">
        <span className="font-serif text-[18px] font-bold leading-tight tracking-[-0.01em] text-ink">{title}</span>
        <ChevronRight className="h-5 w-5 text-muted" strokeWidth={2} />
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
