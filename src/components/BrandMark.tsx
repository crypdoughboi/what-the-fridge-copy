type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

const iconSizes = {
  sm: 'h-11 w-11 rounded-[14px]',
  md: 'h-14 w-14 rounded-2xl',
  lg: 'h-16 w-16 rounded-2xl',
  xl: 'h-20 w-20 rounded-[22px]',
};

export function WtfFridgeIcon({ size = 'md', className = '' }: { size?: LogoSize; className?: string }) {
  return <img src="/wtf-logo.png" alt="What The Fridge logo" className={`shrink-0 object-cover shadow-md ${iconSizes[size]} ${className}`} />;
}

/**
 * The "What The Fridge" wordmark as a stacked serif lockup.
 * `tone` controls color for light (forest text) vs. dark (cream text) backgrounds.
 */
export function WordmarkText({ tone = 'light', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const color = tone === 'dark' ? 'text-cream' : 'text-ink';
  return (
    <span className={`whitespace-nowrap font-serif text-[clamp(20px,6.2vw,26px)] font-bold leading-none tracking-[-0.01em] ${color} ${className}`}>
      What The Fridge
    </span>
  );
}

export function Logo({ compact = false, tone = 'light' }: { compact?: boolean; tone?: 'dark' | 'light' }) {
  return (
    <div className="flex items-center gap-3">
      <WtfFridgeIcon size="sm" />
      {!compact && <WordmarkText tone={tone} />}
    </div>
  );
}
