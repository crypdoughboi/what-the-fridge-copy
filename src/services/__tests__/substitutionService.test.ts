import { describe, expect, it } from 'vitest';
import { SubstitutionRequest, SubstitutionSuggestion } from '../../types';
import { mergeSubstitutions, normalizeAiSubstitutions } from '../substitutionService';

const request: SubstitutionRequest = {
  ingredient: 'buttermilk',
  inventory: ['milk', 'lemon'],
  restrictions: [],
  useCase: 'baking',
};

describe('normalizeAiSubstitutions', () => {
  it('validates entries and recomputes userHasIt from real inventory', () => {
    const results = normalizeAiSubstitutions(
      [
        {
          substitute: 'milk',
          type: 'close',
          ratio: '1 cup + 1 tbsp lemon juice',
          explanation: 'DIY buttermilk.',
          recipeImpact: 'Nearly identical.',
          confidence: 0.9,
          warnings: [],
          shouldBuyOriginal: false,
          userHasIt: false, // Model got it wrong; we recompute.
        },
        {
          substitute: 'kefir',
          type: 'direct',
          ratio: '1:1',
          explanation: 'Same tang.',
          recipeImpact: 'None.',
          confidence: 5, // Out of range; clamped.
          warnings: [],
          shouldBuyOriginal: false,
          userHasIt: true, // Model claims ownership; recompute says no.
        },
      ],
      request,
    );
    expect(results).toHaveLength(2);
    expect(results[0].userHasIt).toBe(true);
    expect(results[1].userHasIt).toBe(false);
    expect(results[1].confidence).toBe(1);
    expect(results.every((entry) => entry.source === 'ai')).toBe(true);
  });

  it('drops garbage entries and self-referential substitutes', () => {
    const results = normalizeAiSubstitutions([null, 42, { substitute: '' }, { substitute: 'buttermilk' }], request);
    expect(results).toEqual([]);
  });

  it('coerces unknown types to stretch', () => {
    const results = normalizeAiSubstitutions([{ substitute: 'kefir', type: 'perfect' }], request);
    expect(results[0].type).toBe('stretch');
  });
});

describe('mergeSubstitutions', () => {
  const suggestion = (substitute: string, source: 'deterministic' | 'ai', confidence = 0.8): SubstitutionSuggestion => ({
    original: 'buttermilk',
    substitute,
    type: 'close',
    ratio: '1:1',
    explanation: '',
    recipeImpact: '',
    confidence,
    warnings: [],
    shouldBuyOriginal: false,
    userHasIt: false,
    source,
  });

  it('prefers the curated entry when both layers suggest the same substitute', () => {
    const merged = mergeSubstitutions([suggestion('milk', 'deterministic')], [suggestion('milk', 'ai'), suggestion('kefir', 'ai')]);
    expect(merged).toHaveLength(2);
    expect(merged.find((entry) => entry.substitute === 'milk')?.source).toBe('deterministic');
  });

  it('caps the merged list at six suggestions', () => {
    const many = Array.from({ length: 10 }, (_, index) => suggestion(`option-${index}`, 'ai'));
    expect(mergeSubstitutions([], many)).toHaveLength(6);
  });
});
