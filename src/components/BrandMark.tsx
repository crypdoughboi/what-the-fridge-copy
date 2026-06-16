type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

const iconSizes = {
  sm: 'h-11 w-11 rounded-md',
  md: 'h-14 w-14 rounded-lg',
  lg: 'h-16 w-16 rounded-lg',
  xl: 'h-[58px] w-[58px] rounded-lg',
};

export function WtfFridgeIcon({ size = 'md' }: { size?: LogoSize }) {
  return (
    <img
      src="/wtflogo2.png"
      alt="What The Fridge logo"
      className={`shrink-0 object-cover shadow-sm ${iconSizes[size]}`}
    />
  );
}

/** The "WHAT THE FRIDGE" wordmark lockup (raster art on its own tile). */
export function Wordmark({ className = '' }: { className?: string }) {
  return <img src="/wtftextheader.png" alt="What The Fridge" className={`object-cover ${className}`} />;
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
