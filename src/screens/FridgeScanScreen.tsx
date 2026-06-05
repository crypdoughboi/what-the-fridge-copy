import { ArrowLeft, Refrigerator } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileUploadButton } from '../components/FileUploadButton';
import { SampleFridgeVisual } from '../components/SampleVisuals';

export function FridgeScanScreen({
  previewUrl,
  onBack,
  onFile,
  onSample,
}: {
  previewUrl: string | null;
  onBack: () => void;
  onFile: (file: File) => void;
  onSample: () => void;
}) {
  return (
    <main className="screen-enter space-y-5">
      <button className="inline-flex items-center gap-2 text-sm font-black text-steel" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        Scan hub
      </button>
      <section>
        <p className="text-[12px] font-black uppercase text-herb">Fridge check</p>
        <h1 className="mt-1 text-[32px] font-black leading-tight text-ink">Finding dinner in the chaos.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          Take a fridge or pantry photo. WTF will be honest about what it can and cannot see.
        </p>
      </section>

      <Card>
        {previewUrl ? (
          <img src={previewUrl} alt="Uploaded fridge or pantry preview" className="h-72 w-full rounded-[20px] object-cover shadow-card" />
        ) : (
          <SampleFridgeVisual />
        )}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onFile} />
          <FileUploadButton label="Camera" onFile={onFile} camera />
        </div>
        <Button className="mt-2" full icon={<Refrigerator className="h-4 w-4" />} onClick={onSample}>
          Use sample fridge
        </Button>
      </Card>
    </main>
  );
}
