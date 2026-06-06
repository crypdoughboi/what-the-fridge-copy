import { Camera, ImagePlus } from 'lucide-react';
import { ChangeEvent, useId } from 'react';

export function FileUploadButton({
  label,
  onFile,
  camera = false,
}: {
  label: string;
  onFile: (file: File) => void;
  camera?: boolean;
}) {
  const id = useId();
  const Icon = camera ? Camera : ImagePlus;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) onFile(file);
    event.target.value = '';
  }

  return (
    <label
      htmlFor={id}
      className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 py-3 text-[15px] font-semibold text-ink shadow-sm transition duration-150 ease-out active:scale-[0.98]"
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
      {label}
      <input id={id} type="file" accept="image/*" capture={camera ? 'environment' : undefined} className="sr-only" onChange={handleChange} />
    </label>
  );
}
