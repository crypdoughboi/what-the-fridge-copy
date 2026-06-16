import { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { Card } from '../components/Card';
import { CameraCapture } from '../components/CameraCapture';
import { FileUploadButton } from '../components/FileUploadButton';
import { SampleReceiptVisual } from '../components/SampleVisuals';

export function ReceiptScanScreen({
  previewUrl,
  onBack,
  onFile,
}: {
  previewUrl: string | null;
  onBack: () => void;
  onFile: (file: File) => void;
}) {
  const [cameraOpen, setCameraOpen] = useState(false);

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
          <button
            type="button"
            onClick={() => setCameraOpen(true)}
            className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 py-3 text-[15px] font-semibold text-ink shadow-sm transition duration-150 ease-out active:scale-[0.98]"
          >
            <Camera className="h-5 w-5" strokeWidth={1.75} />
            Camera
          </button>
        </div>
      </Card>

      {cameraOpen && (
        <CameraCapture
          title="Scan receipt"
          hint="Fit the whole receipt in the frame, then tap the shutter."
          onClose={() => setCameraOpen(false)}
          onCapture={(file) => {
            setCameraOpen(false);
            onFile(file);
          }}
        />
      )}
    </main>
  );
}
