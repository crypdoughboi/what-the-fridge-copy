import { useCallback, useEffect, useRef, useState } from 'react';

export type CameraFacing = 'environment' | 'user';

export type CameraStatus = 'idle' | 'starting' | 'ready' | 'error';

export type CameraErrorKind = 'unsupported' | 'denied' | 'notFound' | 'unknown';

type CameraError = {
  kind: CameraErrorKind;
  message: string;
};

const ERROR_MESSAGES: Record<CameraErrorKind, string> = {
  unsupported: 'This device or browser does not support live camera access.',
  denied: 'Camera access was blocked. Allow camera permission or upload a photo instead.',
  notFound: 'No camera was found on this device. Upload a photo instead.',
  unknown: 'The camera could not be started. Upload a photo instead.',
};

function classifyError(error: unknown): CameraError {
  if (error instanceof DOMException) {
    if (error.name === 'NotAllowedError' || error.name === 'SecurityError') {
      return { kind: 'denied', message: ERROR_MESSAGES.denied };
    }
    if (error.name === 'NotFoundError' || error.name === 'OverconstrainedError') {
      return { kind: 'notFound', message: ERROR_MESSAGES.notFound };
    }
  }
  return { kind: 'unknown', message: ERROR_MESSAGES.unknown };
}

/**
 * Manages a live camera MediaStream via getUserMedia. This is the web-native
 * equivalent of a native "vision camera": a live viewfinder the user can aim at
 * a fridge or pantry, then capture a frame from.
 */
export function useCameraStream() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [status, setStatus] = useState<CameraStatus>('idle');
  const [error, setError] = useState<CameraError | null>(null);
  const [facing, setFacing] = useState<CameraFacing>('environment');

  const stop = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setStatus('idle');
  }, []);

  const start = useCallback(async (nextFacing: CameraFacing) => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError({ kind: 'unsupported', message: ERROR_MESSAGES.unsupported });
      setStatus('error');
      return;
    }

    setStatus('starting');
    setError(null);

    // Stop any existing stream before starting a new one (e.g. when flipping cameras).
    streamRef.current?.getTracks().forEach((track) => track.stop());

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: nextFacing }, width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => undefined);
      }
      setStatus('ready');
    } catch (caught) {
      setError(classifyError(caught));
      setStatus('error');
    }
  }, []);

  const flip = useCallback(() => {
    setFacing((current) => {
      const next = current === 'environment' ? 'user' : 'environment';
      void start(next);
      return next;
    });
  }, [start]);

  /** Capture the current video frame as an image File. */
  const capture = useCallback(async (): Promise<File | null> => {
    const video = videoRef.current;
    if (!video || !video.videoWidth || !video.videoHeight) return null;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    if (!context) return null;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob((result) => resolve(result), 'image/jpeg', 0.92));
    if (!blob) return null;

    return new File([blob], `fridge-scan-${Date.now()}.jpg`, { type: 'image/jpeg' });
  }, []);

  // Always release the camera when the component using this hook unmounts.
  useEffect(() => stop, [stop]);

  return { videoRef, status, error, facing, start, stop, flip, capture };
}
