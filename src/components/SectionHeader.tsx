import { Eyebrow } from './Eyebrow';

export function SectionHeader({
  eyebrow,
  title,
  subhead,
  action,
}: {
  eyebrow?: string;
  title: string;
  subhead?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        {eyebrow && <Eyebrow muted={eyebrow.toLowerCase().includes('maybe') || eyebrow.toLowerCase().includes('check')}>{eyebrow}</Eyebrow>}
        <h2 className="mt-1 font-display text-[21px] font-bold leading-[1.15] text-ink">{title}</h2>
        {subhead && <p className="mt-1 text-[14px] font-medium leading-snug text-muted">{subhead}</p>}
      </div>
      {action}
    </div>
  );
}
