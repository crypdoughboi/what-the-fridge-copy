import { useEffect, useState } from 'react';
import { AlertTriangle, Repeat, X } from 'lucide-react';
import { SubstitutionRequest, SubstitutionSuggestion, SubstitutionType } from '../types';
import { Button } from './Button';
import { Pill } from './Pill';
import { getSubstitutions } from '../services/substitutionService';

const typeLabels: Record<SubstitutionType, { label: string; tone: 'green' | 'neutral' }> = {
  direct: { label: 'Direct swap', tone: 'green' },
  close: { label: 'Close swap', tone: 'green' },
  stretch: { label: 'Stretch', tone: 'neutral' },
  not_recommended: { label: 'Not recommended', tone: 'neutral' },
};

/**
 * Bottom-sheet for "store is out" / "use what I have instead": shows ranked
 * substitutions for one ingredient (deterministic table first, AI when needed)
 * and lets the user apply one to their grocery list.
 */
export function SubstitutionSheet({
  request,
  onApply,
  onClose,
}: {
  request: SubstitutionRequest;
  onApply: (suggestion: SubstitutionSuggestion) => void;
  onClose: () => void;
}) {
  const [suggestions, setSuggestions] = useState<SubstitutionSuggestion[] | null>(null);

  useEffect(() => {
    let mounted = true;
    getSubstitutions(request).then((results) => {
      if (mounted) setSuggestions(results);
    });
    return () => {
      mounted = false;
    };
    // The sheet is mounted fresh per ingredient, so this runs once per open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const usable = (suggestions ?? []).filter((suggestion) => suggestion.type !== 'not_recommended');
  const avoid = (suggestions ?? []).filter((suggestion) => suggestion.type === 'not_recommended');

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal="true" aria-label="Substitutions">
      <button className="absolute inset-0 bg-ink/40" aria-label="Close" onClick={onClose} />
      <div className="screen-enter relative z-10 max-h-[80vh] w-full max-w-[440px] overflow-y-auto rounded-t-[26px] border border-line bg-paper p-5 pb-7 shadow-[0_-12px_40px_-12px_rgba(20,40,28,0.4)]">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Out of {request.ingredient.toLowerCase()}?</p>
          <button className="grid h-9 w-9 place-items-center rounded-full text-ink-soft active:bg-line/40" aria-label="Close" onClick={onClose}>
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
        <h2 className="font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-ink">What can stand in.</h2>

        {suggestions === null ? (
          <p className="mt-4 rounded-md bg-surface p-4 text-[14px] font-medium text-muted">Checking your kitchen for stand-ins…</p>
        ) : usable.length === 0 ? (
          <p className="mt-4 rounded-md bg-surface p-4 text-[14px] font-medium text-muted">
            No good swap for this one — better to buy {request.ingredient.toLowerCase()}.
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {usable.map((suggestion) => (
              <div key={suggestion.substitute} className="rounded-[18px] border border-line bg-surface p-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[16px] font-bold text-ink">{suggestion.substitute}</span>
                  <Pill tone={typeLabels[suggestion.type].tone}>{typeLabels[suggestion.type].label}</Pill>
                  {suggestion.userHasIt ? <Pill tone="green">You have it</Pill> : null}
                </div>
                <p className="mt-2 text-[14px] font-medium leading-snug text-ink-soft">{suggestion.explanation}</p>
                <p className="mt-1 text-[13px] font-medium text-muted">
                  {suggestion.ratio}
                  {suggestion.recipeImpact ? ` · ${suggestion.recipeImpact}` : ''}
                </p>
                {suggestion.warnings.length ? (
                  <p className="mt-2 flex items-start gap-1.5 text-[13px] font-semibold text-ink-soft">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    <span>{suggestion.warnings.join(' ')}</span>
                  </p>
                ) : null}
                <Button
                  className="mt-3 min-h-10"
                  full
                  variant="secondary"
                  icon={<Repeat className="h-4 w-4" strokeWidth={1.75} />}
                  onClick={() => onApply(suggestion)}
                >
                  {suggestion.userHasIt ? `Use my ${suggestion.substitute.toLowerCase()}` : `Buy ${suggestion.substitute.toLowerCase()} instead`}
                </Button>
              </div>
            ))}
            {avoid.length ? (
              <p className="text-[13px] font-medium leading-snug text-muted">
                Skip: {avoid.map((suggestion) => `${suggestion.substitute.toLowerCase()} (${suggestion.warnings[0] ?? suggestion.recipeImpact})`).join('; ')}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
