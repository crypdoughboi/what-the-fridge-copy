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
      className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-ink/10 bg-white/85 px-4 py-2.5 text-sm font-semibold text-ink shadow-card transition active:scale-[0.98]"
    >
      <Icon className="h-4 w-4" />
      {label}
      <input id={id} type="file" accept="image/*" capture={camera ? 'environment' : undefined} className="sr-only" onChange={handleChange} />
    </label>
  );
}
