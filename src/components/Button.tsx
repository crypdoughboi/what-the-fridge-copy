import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  icon?: ReactNode;
  full?: boolean;
};

const variants = {
  primary: 'bg-ink text-cream shadow-card active:scale-[0.98]',
  secondary: 'bg-white/85 text-ink border border-ink/10 shadow-card active:scale-[0.98]',
  ghost: 'bg-transparent text-ink hover:bg-ink/5 active:bg-ink/10',
  danger: 'bg-tomato text-white shadow-card active:scale-[0.98]',
};

export function Button({ children, className = '', variant = 'primary', icon, full, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${variants[variant]} ${
        full ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
