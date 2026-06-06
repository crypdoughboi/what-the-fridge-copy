export function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="toast-enter pointer-events-none absolute bottom-[92px] left-1/2 z-50 w-[calc(100%-40px)] max-w-[390px] rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-paper shadow-md">
      {message}
    </div>
  );
}
