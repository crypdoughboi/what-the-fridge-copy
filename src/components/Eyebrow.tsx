export function Eyebrow({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p className={`text-[12px] font-semibold uppercase tracking-[0.08em] ${muted ? 'text-muted' : 'text-accent'}`}>
      {children}
    </p>
  );
}
