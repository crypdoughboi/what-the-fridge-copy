import { FormEvent, useState } from 'react';
import { Apple, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/BrandMark';
import { Eyebrow } from '../components/Eyebrow';
import { Input } from '../components/Input';

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
    <main className="screen-enter app-scroll pb-8">
      <section className="section-enter pt-1">
        <Logo hero />
        <div className="mt-7">
          <Eyebrow muted>What The Fridge</Eyebrow>
          <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">A grocery list that writes itself.</h1>
          <p className="mt-4 text-[16px] font-medium leading-[1.45] text-ink-soft">
            Take a picture of your fridge or a receipt. WTF builds your list, keeps track of what you have, and helps turn it into dinner.
          </p>
        </div>
      </section>

      <Card className="section-enter stagger-1 mt-7 space-y-3">
        <Button
          full
          icon={<Apple className="h-5 w-5" strokeWidth={1.75} />}
          disabled={busy !== null}
          onClick={() => run('apple')}
        >
          {busy === 'apple' ? 'Connecting Apple ID' : 'Continue with Apple ID'}
        </Button>
        <Button
          full
          variant="secondary"
          icon={<span className="grid h-5 w-5 place-items-center rounded-pill border border-line text-xs font-semibold text-ink">G</span>}
          disabled={busy !== null}
          onClick={() => run('gmail')}
        >
          {busy === 'gmail' ? 'Connecting Gmail' : 'Continue with Gmail'}
        </Button>

        <div className="flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-line" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">or</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <form className="flex gap-2" onSubmit={submitEmail}>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="min-w-0 flex-1"
          />
          <Button type="submit" variant="secondary" className="px-4" icon={<Mail className="h-5 w-5" strokeWidth={1.75} />} disabled={!email.trim() || busy !== null}>
            {busy === 'email' ? 'Saving' : 'Email'}
          </Button>
        </form>
        {(localError || errorMessage) && (
          <div className="rounded-md bg-paper px-4 py-3 text-sm font-semibold leading-relaxed text-ink-soft">
            {localError || errorMessage}
          </div>
        )}
        <Button full variant="ghost" disabled={busy !== null} onClick={() => run('guest')}>
          {busy === 'guest' ? 'Starting guest mode' : 'Continue as guest'}
        </Button>
        <p className="-mt-1 text-center text-[12px] font-medium leading-relaxed text-muted">Guest mode is temporary. Nothing will save after you leave.</p>
        <p className="pt-1 text-[13px] font-medium leading-relaxed text-muted">Private by default. Your receipts and spending stay yours.</p>
      </Card>

      <Card className="section-enter stagger-2 mt-5">
        <div className="grid grid-cols-3 gap-3">
          {['Snap a receipt or your fridge', 'Your list fills itself', 'Get dinner ideas from it'].map((item, index) => (
            <div key={item} className="min-w-0">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-pill bg-accent-soft text-[13px] font-semibold text-accent">{index + 1}</span>
              <p className="mt-2 text-[13px] font-semibold leading-snug text-ink-soft">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
