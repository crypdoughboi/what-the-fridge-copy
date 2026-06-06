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
      <button className="inline-flex min-h-10 items-center gap-2 rounded-md text-[14px] font-semibold text-ink-soft" onClick={onBack}>
        <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
        Back to List
      </button>
      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Scan receipt</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Add from a receipt.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          Take a receipt photo or upload one. WTF will pull out items for your list.
        </p>
      </section>

      <Card>
        {previewUrl ? (
          <img src={previewUrl} alt="Uploaded receipt preview" className="h-72 w-full rounded-lg object-cover shadow-sm" />
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
