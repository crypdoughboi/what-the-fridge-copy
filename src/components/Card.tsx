import { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-[22px] border border-ink/8 bg-white/78 p-4 shadow-card backdrop-blur ${className}`} {...props} />;
}
