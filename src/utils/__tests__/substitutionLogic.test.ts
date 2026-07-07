import { describe, expect, it } from 'vitest';
import { SubstitutionRequest } from '../../types';
import { deterministicCoverageIsStrong, getDeterministicSubstitutions, sortSubstitutions } from '../substitutionLogic';

function request(overrides: Partial<SubstitutionRequest> = {}): SubstitutionRequest {
  return {
    ingredient: 'butter',
    inventory: [],
    restrictions: [],
    useCase: 'cooking',
    ...overrides,
  };
}

describe('getDeterministicSubstitutions', () => {
  it('returns curated swaps for a known ingredient', () => {
    const results = getDeterministicSubstitutions(request());
    const substitutes = results.map((entry) => entry.substitute);
    expect(substitutes).toContain('olive oil');
    expect(substitutes).toContain('ghee');
    expect(results.every((entry) => entry.source === 'deterministic')).toBe(true);
  });

  it('marks substitutes the user already owns', () => {
    const results = getDeterministicSubstitutions(request({ inventory: ['olive oil', 'eggs'] }));
    const oliveOil = results.find((entry) => entry.substitute === 'olive oil');
    expect(oliveOil?.userHasIt).toBe(true);
    // Owned swaps sort ahead of unowned ones.
    expect(results[0].substitute).toBe('olive oil');
  });

  it('downgrades baking-unsafe swaps for the baking use case', () => {
    const cooking = getDeterministicSubstitutions(request({ ingredient: 'heavy cream' }));
    const baking = getDeterministicSubstitutions(request({ ingredient: 'heavy cream', useCase: 'baking' }));
    const cookingHalfAndHalf = cooking.find((entry) => entry.substitute === 'half and half');
    const bakingHalfAndHalf = baking.find((entry) => entry.substitute === 'half and half');
    expect(cookingHalfAndHalf?.type).toBe('close');
    expect(bakingHalfAndHalf?.type).toBe('stretch');
    expect(bakingHalfAndHalf?.warnings.join(' ')).toMatch(/baking/i);
  });

  it('flags restriction conflicts as not_recommended', () => {
    const results = getDeterministicSubstitutions(request({ ingredient: 'sour cream', restrictions: ['Dairy-free'] }));
    const greekYogurt = results.find((entry) => entry.substitute === 'greek yogurt');
    expect(greekYogurt?.type).toBe('not_recommended');
    expect(greekYogurt?.warnings.some((warning) => warning.includes('dairy'))).toBe(true);
  });

  it('falls back to inventory close-matches for uncovered ingredients', () => {
    const results = getDeterministicSubstitutions(request({ ingredient: 'spinach', inventory: ['kale', 'rice'] }));
    const kale = results.find((entry) => entry.substitute === 'kale');
    expect(kale).toBeDefined();
    expect(kale?.userHasIt).toBe(true);
    expect(kale?.type).toBe('stretch');
  });

  it('returns nothing for an unknown ingredient with no related inventory', () => {
    expect(getDeterministicSubstitutions(request({ ingredient: 'saffron' }))).toEqual([]);
  });
});

describe('deterministicCoverageIsStrong', () => {
  it('is strong when the user owns a usable swap', () => {
    const results = getDeterministicSubstitutions(request({ inventory: ['olive oil'] }));
    expect(deterministicCoverageIsStrong(results, request({ inventory: ['olive oil'] }))).toBe(true);
  });

  it('is never strong for baking, so the AI gets a say', () => {
    const bakingRequest = request({ useCase: 'baking' as const, inventory: ['olive oil'] });
    const results = getDeterministicSubstitutions(bakingRequest);
    expect(deterministicCoverageIsStrong(results, bakingRequest)).toBe(false);
  });

  it('is weak when nothing usable was found', () => {
    const saffron = request({ ingredient: 'saffron' });
    expect(deterministicCoverageIsStrong(getDeterministicSubstitutions(saffron), saffron)).toBe(false);
  });
});

describe('sortSubstitutions', () => {
  it('sorts owned first, then by type strength, then confidence', () => {
    const base = {
      original: 'x',
      ratio: '1:1',
      explanation: '',
      recipeImpact: '',
      warnings: [],
      shouldBuyOriginal: false,
      source: 'deterministic' as const,
    };
    const sorted = sortSubstitutions([
      { ...base, substitute: 'a', type: 'direct', confidence: 0.9, userHasIt: false },
      { ...base, substitute: 'b', type: 'stretch', confidence: 0.4, userHasIt: true },
      { ...base, substitute: 'c', type: 'close', confidence: 0.8, userHasIt: true },
    ]);
    expect(sorted.map((entry) => entry.substitute)).toEqual(['c', 'b', 'a']);
  });
});
