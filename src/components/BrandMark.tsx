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
      <svg viewBox="0 0 120 120" className="h-full w-full" role="img" aria-label="WTF logo">
        <rect x="7" y="7" width="106" height="106" rx="29" fill="#819378" />
        <path d="M22 49L33 80L45 56L57 80L68 49" fill="none" stroke="#FFFEFA" strokeWidth="10.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M56 49H99" stroke="#FFFEFA" strokeWidth="10.5" strokeLinecap="round" />
        <path d="M73 51V82" stroke="#FFFEFA" strokeWidth="10.5" strokeLinecap="round" />
        <path d="M84 61H99" stroke="#FFFEFA" strokeWidth="8" strokeLinecap="round" />
        <path d="M84 73H97" stroke="#FFFEFA" strokeWidth="8" strokeLinecap="round" />
        <path d="M84 85H95V96H84V85Z" fill="#FFFEFA" />
        <path d="M95 85H103L95 96V85Z" fill="#D6DED0" />
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
