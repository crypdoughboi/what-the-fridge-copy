type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

const iconSizes = {
  sm: 'h-11 w-11 rounded-md',
  md: 'h-14 w-14 rounded-lg',
  lg: 'h-16 w-16 rounded-lg',
  xl: 'h-[58px] w-[58px] rounded-lg',
};

export function WtfFridgeIcon({ size = 'md' }: { size?: LogoSize }) {
  return (
    <div className={`relative shrink-0 overflow-hidden bg-transparent shadow-sm ${iconSizes[size]}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full" role="img" aria-label="What The Fridge logo">
        <defs>
          <linearGradient id="wtfTileGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#74BD83" />
            <stop offset="1" stopColor="#4F9C64" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="120" height="120" fill="url(#wtfTileGradient)" />

        {/* fridge body */}
        <rect x="33" y="19" width="54" height="82" rx="11" fill="#F4EEDF" />
        <rect x="33" y="46" width="54" height="2.2" fill="#E5DDCA" />
        {/* handles */}
        <rect x="76.5" y="27" width="4.6" height="13.5" rx="2.3" fill="#2E7D46" />
        <rect x="76.5" y="54.5" width="4.6" height="37" rx="2.3" fill="#2E7D46" />

        {/* sticky-note checklist */}
        <g transform="rotate(-4 53 75)">
          <rect x="35" y="56" width="36" height="42" rx="7" fill="#1F4A2E" opacity="0.16" />
          <rect x="35" y="54" width="36" height="42" rx="7" fill="#FFFFFF" />
          <circle cx="52" cy="55" r="4" fill="#E8654A" />
          <rect x="41" y="64" width="6.4" height="6.4" rx="2" fill="#2E7D46" />
          <rect x="50.5" y="66" width="16.5" height="3" rx="1.5" fill="#D5CFC1" />
          <rect x="41" y="73.5" width="6.4" height="6.4" rx="2" fill="#2E7D46" />
          <rect x="50.5" y="75.5" width="12.5" height="3" rx="1.5" fill="#D5CFC1" />
          <rect x="41.7" y="83.4" width="5" height="5" rx="1.6" fill="none" stroke="#C3BDAE" strokeWidth="1.6" />
          <rect x="50.5" y="85" width="14.5" height="3" rx="1.5" fill="#D5CFC1" />
        </g>
      </svg>
    </div>
  );
}

export function Logo({ compact = false, hero = false }: { compact?: boolean; hero?: boolean }) {
  return (
    <div className={`flex ${hero ? '-mx-3 w-[calc(100%+24px)] items-center gap-2' : 'items-center gap-3'}`}>
      <WtfFridgeIcon size={hero ? 'xl' : 'sm'} />
      {!compact && (
        <div className={`${hero ? 'flex min-w-0 flex-1 items-center' : 'leading-tight'}`}>
          {!hero && <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">WTF</div>}
          <div
            className={
              hero
                ? 'w-full whitespace-nowrap font-brand text-[clamp(2.25rem,10.2vw,2.75rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-ink'
                : 'font-brand text-[19px] font-extrabold tracking-[-0.04em] text-ink'
            }
          >
            What The Fridge
          </div>
        </div>
      )}
    </div>
  );
}
