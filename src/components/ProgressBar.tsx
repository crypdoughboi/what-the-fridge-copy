export function ProgressBar({ value, max, tone = 'accent' }: { value: number; max: number; tone?: 'accent' | 'muted' }) {
  const width = `${Math.min(100, Math.round((value / max) * 100))}%`;
  const colors = {
    accent: 'bg-accent',
    muted: 'bg-muted',
  };
  return (
    <div className="h-2 overflow-hidden rounded-pill bg-line">
      <div className={`h-full rounded-pill ${colors[tone]}`} style={{ width }} />
    </div>
  );
}
