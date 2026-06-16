import { useEffect } from 'react';
import { Camera, ImagePlus, RefreshCcw, X } from 'lucide-react';
import { ChangeEvent, useId } from 'react';
import { useCameraStream } from '../hooks/useCameraStream';

/**
 * Fullscreen live camera viewfinder for scanning a fridge or pantry. Opens the
 * device camera in-app (via getUserMedia), lets the user frame the shot, flip
 * cameras, and capture a still that is handed back as an image File. Falls back
 * to a file picker when live camera access is unavailable or denied.
 */
export function CameraCapture({
  title = 'Scan fridge or pantry',
  hint = 'Fill the frame with your fridge or pantry, then tap the shutter.',
  onCapture,
  onClose,
}: {
  title?: string;
  hint?: string;
  onCapture: (file: File) => void;
  onClose: () => void;
}) {
  const { videoRef, status, error, start, stop, flip, capture } = useCameraStream();
  const fallbackId = useId();

  useEffect(() => {
    void start('environment');
    return stop;
    // start/stop are stable (useCallback); run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleShutter() {
    const file = await capture();
    if (!file) return;
    stop();
    onCapture(file);
  }

  function handleFallback(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    stop();
    onCapture(file);
  }

  function handleClose() {
    stop();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black text-white" role="dialog" aria-modal="true" aria-label={title}>
      {/* Live viewfinder */}
      <div className="relative flex-1 overflow-hidden">
        <video
          ref={videoRef}
          playsInline
          muted
          autoPlay
          className={`h-full w-full object-cover transition-opacity duration-300 ${status === 'ready' ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Framing guides */}
        {status === 'ready' && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-8">
            <div className="h-full w-full max-h-[70%] rounded-2xl border-2 border-white/40" />
          </div>
        )}

        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <div className="max-w-[80%]">
            <p className="text-[15px] font-semibold drop-shadow">{title}</p>
            {status === 'ready' && <p className="mt-1 text-[13px] font-medium text-white/80 drop-shadow">{hint}</p>}
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close camera"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition active:scale-95"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Starting state */}
        {status === 'starting' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
            <Camera className="h-8 w-8 animate-pulse" strokeWidth={1.75} />
            <p className="text-[14px] font-medium text-white/80">Starting camera…</p>
          </div>
        )}

        {/* Error / unsupported state */}
        {status === 'error' && error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
            <Camera className="h-9 w-9 text-white/70" strokeWidth={1.5} />
            <p className="max-w-xs text-[15px] font-medium leading-relaxed text-white/85">{error.message}</p>
            <label
              htmlFor={fallbackId}
              className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-[15px] font-semibold text-black transition active:scale-[0.98]"
            >
              <ImagePlus className="h-5 w-5" strokeWidth={1.75} />
              Upload a photo
              <input id={fallbackId} type="file" accept="image/*" className="sr-only" onChange={handleFallback} />
            </label>
            <button type="button" onClick={handleClose} className="text-[14px] font-semibold text-white/70 underline-offset-4 active:underline">
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      {status === 'ready' && (
        <div className="flex items-center justify-between px-10 pb-[max(env(safe-area-inset-bottom),24px)] pt-6">
          <label
            htmlFor={fallbackId}
            aria-label="Upload a photo instead"
            className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/15 text-white backdrop-blur transition active:scale-95"
          >
            <ImagePlus className="h-6 w-6" strokeWidth={1.75} />
            <input id={fallbackId} type="file" accept="image/*" className="sr-only" onChange={handleFallback} />
          </label>

          <button
            type="button"
            onClick={handleShutter}
            aria-label="Capture photo"
            className="grid h-[78px] w-[78px] place-items-center rounded-full bg-white/25 ring-4 ring-white/60 transition active:scale-95"
          >
            <span className="h-[58px] w-[58px] rounded-full bg-white" />
          </button>

          <button
            type="button"
            onClick={flip}
            aria-label="Switch camera"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition active:scale-95"
          >
            <RefreshCcw className="h-6 w-6" strokeWidth={1.75} />
          </button>
        </div>
      )}
    </div>
  );
}
