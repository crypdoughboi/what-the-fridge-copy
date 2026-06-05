export function ProgressBar({ value, max, tone = 'herb' }: { value: number; max: number; tone?: 'herb' | 'tomato' | 'saffron' | 'steel' }) {
  const width = `${Math.min(100, Math.round((value / max) * 100))}%`;
  const colors = {
    herb: 'bg-herb',
    tomato: 'bg-tomato',
    saffron: 'bg-saffron',
    steel: 'bg-steel',
  };
  return (
    <div className="h-2 overflow-hidden rounded-full bg-ink/8">
      <div className={`h-full rounded-full ${colors[tone]}`} style={{ width }} />
    </div>
  );
}
