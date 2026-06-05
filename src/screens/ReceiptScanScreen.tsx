import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileUploadButton } from '../components/FileUploadButton';
import { SampleReceiptVisual } from '../components/SampleVisuals';

export function ReceiptScanScreen({
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
        <p className="text-[12px] font-black uppercase text-herb">Receipt scanner</p>
        <h1 className="mt-1 text-[32px] font-black leading-tight text-ink">Translating grocery hieroglyphics.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          Take a receipt photo or upload one. For now, WTF returns realistic mock extraction.
        </p>
      </section>

      <Card>
        {previewUrl ? (
          <img src={previewUrl} alt="Uploaded receipt preview" className="h-72 w-full rounded-[20px] object-cover shadow-card" />
        ) : (
          <SampleReceiptVisual />
        )}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onFile} />
          <FileUploadButton label="Camera" onFile={onFile} camera />
        </div>
        <Button className="mt-2" full icon={<FileText className="h-4 w-4" />} onClick={onSample}>
          Use sample receipt
        </Button>
      </Card>
    </main>
  );
}
