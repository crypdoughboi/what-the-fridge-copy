import { ArrowRight, ChevronRight, CircleUserRound, ShoppingCart } from 'lucide-react';
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
        <img src="/graphichome1.png" alt="" className="pointer-events-none absolute -right-2 top-1/2 h-36 w-36 -translate-y-1/2 object-contain" />
        <div className="relative max-w-[62%]">
          <h1 className="font-serif text-[34px] font-bold leading-[0.96] tracking-[-0.01em] text-ink">WTF should I make?</h1>
          <span className="mt-4 inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-[15px] font-semibold text-surface shadow-sm">
            Cook now
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </span>
        </div>
      </button>

      <div className="section-enter stagger-2 mt-3 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-3">
        <Tile iconSrc="/grocerylist-icon.png" bgSrc="/cardbg-grocerylist.png" title="Grocery List" onClick={onGoList} />
        <Tile iconSrc="/scan-icon.png" bgSrc="/cardbg-scan.png" title="Scan" onClick={onGoScan} />
        <Tile iconSrc="/inventory-icon.png" bgSrc="/cardbg-inventory.png" title="Inventory" onClick={onInventory} />
        <Tile
          iconNode={<ShoppingCart className="h-9 w-9 text-olive" strokeWidth={1.6} />}
          bgSrc="/cardbg-compare.png"
          title="Shop My List"
          onClick={onCompare}
        />
      </div>
    </div>
  );
}

function Tile({ iconSrc, iconNode, bgSrc, title, onClick }: { iconSrc?: string; iconNode?: ReactNode; bgSrc: string; title: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-full min-h-[96px] flex-col justify-between overflow-hidden rounded-[22px] border border-line/70 bg-surface p-4 text-left shadow-sm transition active:scale-[0.98]"
    >
      <img src={bgSrc} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      {iconSrc ? (
        <img src={iconSrc} alt="" className="relative z-10 -ml-1 -mt-1 h-14 w-14 object-contain" />
      ) : (
        <span className="relative z-10 grid h-14 w-14 place-items-center">{iconNode}</span>
      )}
      <span className="relative z-10 flex items-end justify-between">
        <span className="font-serif text-[18px] font-bold leading-tight tracking-[-0.01em] text-ink">{title}</span>
        <ChevronRight className="h-5 w-5 text-muted" strokeWidth={2} />
      </span>
    </button>
  );
}
