import { describe, expect, it } from 'vitest';
import { MealIdea } from '../../types';
import { matchesCookingMethod } from '../mealGenerationService';
import { cookingMethodOptions } from '../../data/mealPreferenceOptions';
import { seedMealIdeas } from '../../data/mealIdeas';

function meal(format: string, overrides: Partial<MealIdea> = {}): MealIdea {
  return {
    id: 'test',
    slug: 'test',
    name: 'Test meal',
    category: 'Dinner',
    description: '',
    dinnerLanes: [],
    cuisineInfluence: 'Any',
    format,
    timeMinutes: 30,
    effort: 'Easy',
    servings: 4,
    tags: [],
    chefNote: '',
    whyItWorks: '',
    equipment: [],
    structuredIngredients: [],
    recipe: { activeTimeMinutes: 20, totalTimeMinutes: 30, steps: [] },
    ingredients: [],
    optionalIngredients: [],
    pantryIngredients: [],
    status: 'suggested',
    ...overrides,
  };
}

describe('matchesCookingMethod', () => {
  it('passes everything for "Any method"', () => {
    expect(matchesCookingMethod(meal('skillet'), 'Any method')).toBe(true);
    expect(matchesCookingMethod(meal('grill'), 'Any method')).toBe(true);
  });

  it('restricts Sheet pan to sheet-pan and oven-family formats', () => {
    expect(matchesCookingMethod(meal('sheet pan'), 'Sheet pan')).toBe(true);
    expect(matchesCookingMethod(meal('roast', { equipment: ['sheet pan'] }), 'Sheet pan')).toBe(true);
    expect(matchesCookingMethod(meal('skillet'), 'Sheet pan')).toBe(false);
    // A skillet recipe that merely lists a sheet pan in equipment must NOT match.
    expect(matchesCookingMethod(meal('skillet', { equipment: ['sheet pan', 'large skillet'] }), 'Sheet pan')).toBe(false);
  });

  it('restricts One-pot to single-vessel simmered formats', () => {
    expect(matchesCookingMethod(meal('stew'), 'One-pot')).toBe(true);
    expect(matchesCookingMethod(meal('curry'), 'One-pot')).toBe(true);
    expect(matchesCookingMethod(meal('rice pot'), 'One-pot')).toBe(true);
    expect(matchesCookingMethod(meal('sheet pan'), 'One-pot')).toBe(false);
    expect(matchesCookingMethod(meal('pasta'), 'One-pot')).toBe(false);
  });

  it('treats Stovetop as everything that needs no oven, grill, or appliance', () => {
    expect(matchesCookingMethod(meal('skillet'), 'Stovetop')).toBe(true);
    expect(matchesCookingMethod(meal('noodle soup'), 'Stovetop')).toBe(true);
    expect(matchesCookingMethod(meal('taco'), 'Stovetop')).toBe(true);
    expect(matchesCookingMethod(meal('sheet pan'), 'Stovetop')).toBe(false);
    expect(matchesCookingMethod(meal('bake'), 'Stovetop')).toBe(false);
    expect(matchesCookingMethod(meal('grill'), 'Stovetop')).toBe(false);
    expect(matchesCookingMethod(meal('air fryer'), 'Stovetop')).toBe(false);
  });

  it('matches appliance methods by format, name, or equipment', () => {
    expect(matchesCookingMethod(meal('air fryer'), 'Air fryer')).toBe(true);
    expect(matchesCookingMethod(meal('skillet', { name: 'Air fryer chicken katsu' }), 'Air fryer')).toBe(true);
    expect(matchesCookingMethod(meal('braise', { name: 'Instant Pot butter chicken' }), 'Instant Pot')).toBe(true);
    expect(matchesCookingMethod(meal('braise'), 'Slow cooker')).toBe(true);
    expect(matchesCookingMethod(meal('skillet'), 'Instant Pot')).toBe(false);
  });

  it('matches Grill by format or grilled tag', () => {
    expect(matchesCookingMethod(meal('grill'), 'Grill')).toBe(true);
    expect(matchesCookingMethod(meal('platter', { tags: ['grilled'] }), 'Grill')).toBe(true);
    expect(matchesCookingMethod(meal('skillet', { tags: ['charred'] }), 'Grill')).toBe(false);
  });

  it('every specific method strictly narrows the real library', () => {
    for (const method of cookingMethodOptions) {
      if (method === 'Any method') continue;
      const count = seedMealIdeas.filter((m) => matchesCookingMethod(m, method)).length;
      expect(count, `${method} should match at least one meal`).toBeGreaterThan(0);
      expect(count, `${method} should not match the whole library`).toBeLessThan(seedMealIdeas.length);
    }
  });
});
