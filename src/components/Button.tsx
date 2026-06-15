import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  icon?: ReactNode;
  full?: boolean;
};

const variants = {
  primary: 'bg-ink text-paper shadow-sm active:scale-[0.98]',
  secondary: 'border border-line bg-surface text-ink shadow-sm active:scale-[0.98]',
  ghost: 'bg-transparent text-ink-soft active:bg-line/40 active:scale-[0.98]',
  danger: 'bg-ink text-paper shadow-sm active:scale-[0.98]',
};

export function Button({ children, className = '', variant = 'primary', icon, full, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-4 py-3 text-[15px] font-semibold leading-none transition duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-45 ${
        variants[variant]
      } ${
        full ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
