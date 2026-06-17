import { FormEvent, useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { WordmarkText, WtfFridgeIcon } from '../components/BrandMark';

export function AuthScreen({
  onGmail,
  onEmail,
  onGuest,
  errorMessage,
}: {
  onGmail: () => Promise<void>;
  onEmail: (email: string) => Promise<void>;
  onGuest: () => void;
  errorMessage?: string | null;
}) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState<'gmail' | 'email' | 'guest' | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  async function run(provider: 'gmail' | 'email' | 'guest') {
    try {
      setLocalError(null);
      setBusy(provider);
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
    <main className="screen-enter flex flex-1 flex-col justify-center overflow-hidden bg-paper px-5 pb-[env(safe-area-inset-bottom)] pt-[calc(env(safe-area-inset-top)+12px)]">
      <div className="flex items-center justify-center gap-3">
        <WtfFridgeIcon size="sm" />
        <WordmarkText tone="light" />
      </div>

      <section className="mt-3 rounded-[24px] border border-line bg-surface px-5 py-4 shadow-md">
        <h1 className="font-display text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink">Welcome</h1>
        <p className="mt-1 text-[14px] font-medium leading-5 text-ink-soft">
          Sign in to turn your fridge into dinner.
        </p>

        <form className="mt-3 space-y-2" onSubmit={submitEmail}>
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

        <div className="my-3 flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">or continue with</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <Button
          full
          variant="secondary"
          icon={<span className="grid h-5 w-5 place-items-center rounded-pill border border-line text-xs font-semibold text-ink">G</span>}
          disabled={busy !== null}
          onClick={() => run('gmail')}
        >
          {busy === 'gmail' ? 'Opening Google…' : 'Continue with Google'}
        </Button>

        {(localError || errorMessage) && (
          <div className="mt-3 rounded-md bg-paper px-3 py-2 text-[12px] font-semibold leading-4 text-ink-soft ring-1 ring-line">
            {localError || errorMessage}
          </div>
        )}

        <Button full variant="ghost" className="mt-3" disabled={busy !== null} onClick={() => run('guest')}>
          {busy === 'guest' ? 'Starting guest mode' : 'Continue as guest'}
        </Button>
        <p className="mt-1 text-center text-[11px] font-medium leading-4 text-muted">
          Guest mode is temporary. Nothing will save after you leave.
        </p>
      </section>
    </main>
  );
}
