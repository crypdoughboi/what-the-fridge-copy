import { FormEvent, useState } from 'react';
import { Apple, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { WordmarkText, WtfFridgeIcon } from '../components/BrandMark';

export function AuthScreen({
  onApple,
  onGmail,
  onEmail,
  onGuest,
  errorMessage,
}: {
  onApple: () => Promise<void>;
  onGmail: () => Promise<void>;
  onEmail: (email: string) => Promise<void>;
  onGuest: () => void;
  errorMessage?: string | null;
}) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState<'apple' | 'gmail' | 'email' | 'guest' | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  async function run(provider: 'apple' | 'gmail' | 'email' | 'guest') {
    try {
      setLocalError(null);
      setBusy(provider);
      if (provider === 'apple') await onApple();
      if (provider === 'gmail') await onGmail();
      if (provider === 'email') await onEmail(email);
      if (provider === 'guest') onGuest();
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : 'Sign-in failed. Try again.');
    } finally {
      setBusy(null);
    }
  }

  async function submitEmail(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    await run('email');
  }

  return (
    <main className="screen-enter flex h-[100dvh] flex-col overflow-y-auto bg-paper">
      {/* Brand header */}
      <header className="relative isolate flex flex-col items-center gap-4 overflow-hidden bg-[linear-gradient(160deg,#2C5036_0%,#1F3D2B_55%,#162E20_100%)] px-6 pb-24 pt-[calc(env(safe-area-inset-top)+48px)]">
        <WtfFridgeIcon size="xl" />
        <WordmarkText tone="dark" className="text-center" />
      </header>

      {/* Overlapping card */}
      <section className="relative z-10 -mt-16 flex-1 rounded-t-[30px] bg-paper px-6 pb-10 pt-8 shadow-[0_-10px_30px_rgba(34,52,32,0.14)]">
        <h1 className="font-display text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink">Welcome</h1>
        <p className="mt-2 text-[15px] font-medium leading-[1.5] text-ink-soft">
          Sign in to turn your fridge into dinner.
        </p>

        <form className="mt-6 space-y-3" onSubmit={submitEmail}>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full"
          />
          <Button
            full
            type="submit"
            icon={<Mail className="h-5 w-5" strokeWidth={1.75} />}
            disabled={!email.trim() || busy !== null}
          >
            {busy === 'email' ? 'Sending link…' : 'Email me a sign-in link'}
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">or continue with</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="secondary"
            icon={<Apple className="h-5 w-5" strokeWidth={1.75} />}
            disabled={busy !== null}
            onClick={() => run('apple')}
          >
            {busy === 'apple' ? '…' : 'Apple'}
          </Button>
          <Button
            variant="secondary"
            icon={<span className="grid h-5 w-5 place-items-center rounded-pill border border-line text-xs font-semibold text-ink">G</span>}
            disabled={busy !== null}
            onClick={() => run('gmail')}
          >
            {busy === 'gmail' ? '…' : 'Google'}
          </Button>
        </div>

        {(localError || errorMessage) && (
          <div className="mt-4 rounded-md bg-paper px-4 py-3 text-sm font-semibold leading-relaxed text-ink-soft ring-1 ring-line">
            {localError || errorMessage}
          </div>
        )}

        <Button full variant="ghost" className="mt-5" disabled={busy !== null} onClick={() => run('guest')}>
          {busy === 'guest' ? 'Starting guest mode' : 'Continue as guest'}
        </Button>
        <p className="mt-1 text-center text-[12px] font-medium leading-relaxed text-muted">
          Guest mode is temporary. Nothing will save after you leave.
        </p>
      </section>
    </main>
  );
}
