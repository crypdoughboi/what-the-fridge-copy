export function SectionHeader({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-3 mt-6 flex items-end justify-between gap-3">
      <div>
        {eyebrow && <p className="mb-1 text-[11px] font-black uppercase text-herb">{eyebrow}</p>}
        <h2 className="text-xl font-black text-ink">{title}</h2>
      </div>
      {action}
    </div>
  );
}
