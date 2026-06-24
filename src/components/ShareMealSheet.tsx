import { useState } from 'react';
import { Share2, X } from 'lucide-react';
import { MealIdea } from '../types';
import { Button } from './Button';
import { Pill } from './Pill';
import { WtfFridgeIcon } from './BrandMark';
import { buildMealShareCard, shareMealCard } from '../services/shareService';

/**
 * Bottom-sheet preview of a shareable meal card. Renders the branded card the user is
 * about to share (title, subtitle, key ingredients, missing items, WTF branding line)
 * and a Share action that uses the native share sheet or copies to the clipboard.
 */
export function ShareMealSheet({
  meal,
  missingItems,
  onClose,
  onToast,
}: {
  meal: MealIdea;
  missingItems: string[];
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const card = buildMealShareCard(meal, missingItems);
  const [busy, setBusy] = useState(false);

  async function share() {
    setBusy(true);
    const result = await shareMealCard(card);
    setBusy(false);
    if (result === 'shared') onToast('Shared!');
    else if (result === 'copied') onToast('Card copied — paste it anywhere.');
    else onToast('Could not share that card.');
    if (result !== 'failed') onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal="true" aria-label="Share meal">
      <button className="absolute inset-0 bg-ink/40" aria-label="Close" onClick={onClose} />
      <div className="screen-enter relative z-10 w-full max-w-[440px] rounded-t-[26px] border border-line bg-paper p-5 pb-7 shadow-[0_-12px_40px_-12px_rgba(20,40,28,0.4)]">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Share this meal</p>
          <button className="grid h-9 w-9 place-items-center rounded-full text-ink-soft active:bg-line/40" aria-label="Close" onClick={onClose}>
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* The branded card preview the user is sharing. */}
        <div className="overflow-hidden rounded-[22px] border border-line bg-surface p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <WtfFridgeIcon size="sm" />
            <div className="min-w-0">
              <h3 className="truncate font-display text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-ink">{card.title}</h3>
              {card.subtitle ? <p className="mt-1 truncate text-[13px] font-semibold text-ink-soft">{card.subtitle}</p> : null}
            </div>
          </div>

          {card.keyIngredients.length ? (
            <div className="mt-4">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">Key ingredients</p>
              <div className="flex flex-wrap gap-2">
                {card.keyIngredients.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ) : null}

          {card.missingItems.length ? (
            <div className="mt-4">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">Still need</p>
              <div className="flex flex-wrap gap-2">
                {card.missingItems.map((item) => (
                  <Pill key={item} tone="green">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          ) : null}

          <p className="mt-5 border-t border-line pt-3 text-[12px] font-semibold text-muted">{card.branding}</p>
        </div>

        <Button className="mt-5" full icon={<Share2 className="h-5 w-5" strokeWidth={1.75} />} onClick={share} disabled={busy}>
          {busy ? 'Sharing…' : 'Share card'}
        </Button>
      </div>
    </div>
  );
}
