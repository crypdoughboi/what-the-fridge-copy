import { useState } from 'react';
import { Camera, NotebookPen, Sparkles } from 'lucide-react';
import { Card } from '../components/Card';
import { CameraCapture } from '../components/CameraCapture';
import { FileUploadButton } from '../components/FileUploadButton';
import { BackButton } from '../components/BackButton';

export function RecipeImportScreen({
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
      <BackButton onClick={onBack} label="Back" />

      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Import recipe</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Snap a recipe.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          Upload a screenshot or take a photo of any recipe. WTF reads the ingredients and adds what you need to your list.
        </p>
      </section>

      <Card>
        {previewUrl ? (
          <img src={previewUrl} alt="Uploaded recipe preview" className="h-72 w-full rounded-lg object-cover shadow-sm" />
        ) : (
          <div className="flex h-56 w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-line bg-paper text-center">
            <div className="grid h-12 w-12 place-items-center rounded-md bg-accent-soft text-accent">
              <NotebookPen className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <p className="max-w-[15rem] text-[14px] font-medium leading-relaxed text-ink-soft">
              A recipe card, a website screenshot, a cookbook page, or a handwritten note all work.
            </p>
          </div>
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

      <Card className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
          <Sparkles className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <div>
          <h2 className="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">You stay in control.</h2>
          <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">
            After scanning, you review every ingredient and decide what to buy, what you already have, and what to skip.
          </p>
        </div>
      </Card>

      {cameraOpen && (
        <CameraCapture
          title="Snap a recipe"
          hint="Fit the whole recipe in the frame, then tap the shutter."
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
