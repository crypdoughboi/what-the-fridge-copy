import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export const inputClassName =
  'min-h-[52px] w-full rounded-md border border-line bg-surface px-4 text-[16px] font-medium text-ink outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/25';

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${inputClassName} ${className}`} {...props} />;
}

export function Textarea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${inputClassName} min-h-28 resize-none py-3 leading-relaxed ${className}`} {...props} />;
}
