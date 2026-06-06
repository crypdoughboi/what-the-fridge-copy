import { ArrowLeft } from 'lucide-react';

export function BackButton({
  onClick,
  label = 'Back',
  className = '',
}: {
  onClick: () => void;
  label?: string;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-surface/90 px-3 text-[14px] font-semibold text-ink shadow-sm transition active:scale-[0.98] ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
      <span>{label}</span>
    </button>
  );
}
