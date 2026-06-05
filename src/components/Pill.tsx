export function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'green' | 'red' | 'gold' | 'blue' }) {
  const tones = {
    neutral: 'bg-ink/7 text-steel',
    green: 'bg-herb/12 text-basil',
    red: 'bg-tomato/12 text-tomato',
    gold: 'bg-saffron/16 text-ink',
    blue: 'bg-tile text-steel',
  };

  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold ${tones[tone]}`}>{children}</span>;
}
