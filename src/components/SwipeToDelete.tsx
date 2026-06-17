import { useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from 'react';
import { Trash2 } from 'lucide-react';

const actionWidth = 92;

type GestureState = {
  pointerId: number;
  startX: number;
  startY: number;
  startOffset: number;
  mode: 'undecided' | 'swipe' | 'scroll';
};

export function SwipeToDelete({
  children,
  label,
  onDelete,
  className = '',
}: {
  children: ReactNode;
  label: string;
  onDelete: () => void;
  className?: string;
}) {
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const gesture = useRef<GestureState | null>(null);
  const suppressClick = useRef(false);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    gesture.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: offset,
      mode: 'undecided',
    };
    suppressClick.current = false;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - current.startX;
    const deltaY = event.clientY - current.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (current.mode === 'scroll') return;

    if (current.mode === 'undecided') {
      if (absY > 10 && absY > absX * 1.15) {
        current.mode = 'scroll';
        return;
      }
      if (absX < 12 || absX < absY * 1.25) return;
      current.mode = 'swipe';
      setDragging(true);
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // The gesture still works in browsers that do not support synthetic pointer capture.
      }
    }

    event.preventDefault();
    suppressClick.current = true;
    setOffset(clamp(current.startOffset + deltaX, -actionWidth, 0));
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - current.startX;
    const nextOffset = clamp(current.startOffset + deltaX, -actionWidth, 0);

    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Releasing capture is optional; state cleanup below is the important part.
    }

    if (current.mode === 'swipe') {
      setOffset(nextOffset <= -actionWidth / 2 ? -actionWidth : 0);
    }

    setDragging(false);
    gesture.current = null;
  }

  function handlePointerCancel(event: PointerEvent<HTMLDivElement>) {
    if (gesture.current?.pointerId !== event.pointerId) return;
    setOffset(0);
    setDragging(false);
    gesture.current = null;
  }

  function handleContentClick(event: MouseEvent<HTMLDivElement>) {
    if (suppressClick.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick.current = false;
      return;
    }
    if (offset < 0) {
      event.preventDefault();
      event.stopPropagation();
      setOffset(0);
    }
  }

  function deleteItem() {
    setOffset(0);
    onDelete();
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex w-[92px] flex-col items-center justify-center gap-1 bg-red-700 px-3 text-[13px] font-bold text-white active:bg-red-800"
        onClick={deleteItem}
        aria-label={`Delete ${label}`}
        aria-hidden={offset === 0}
        tabIndex={offset < 0 ? 0 : -1}
      >
        <Trash2 className="h-5 w-5" strokeWidth={1.9} />
        Delete
      </button>
      <div
        className={`relative z-10 touch-pan-y ${dragging ? '' : 'transition-transform duration-200 ease-out'}`}
        style={{ transform: `translateX(${offset}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerCancel}
        onClickCapture={handleContentClick}
      >
        {children}
      </div>
    </div>
  );
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}
