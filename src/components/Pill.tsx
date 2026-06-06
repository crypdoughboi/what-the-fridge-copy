export function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'green' | 'red' | 'gold' | 'blue' }) {
  const tones = {
    neutral: 'bg-line/70 text-ink-soft',
    green: 'bg-accent-soft text-accent',
    red: 'bg-line/70 text-ink-soft',
    gold: 'bg-line/70 text-ink-soft',
    blue: 'bg-line/70 text-ink-soft',
  };

  return <span className={`inline-flex items-center rounded-pill px-2.5 py-1 text-[12px] font-semibold ${tones[tone]}`}>{children}</span>;
}
