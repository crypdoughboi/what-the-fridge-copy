import { describe, expect, it } from 'vitest';
import { findCloseMatches, getIngredientGroups, relateIngredients } from '../ingredientIntelligence';

describe('relateIngredients', () => {
  it('treats identical normalized keys as exact', () => {
    expect(relateIngredients('chicken thighs', 'chicken breast')).toEqual({ relation: 'exact', label: 'same ingredient' });
    expect(relateIngredients('green onions', 'scallions')).toEqual({ relation: 'exact', label: 'same ingredient' });
  });

  it('relates form differences within a family', () => {
    expect(relateIngredients('crushed tomatoes', 'tomato paste')?.relation).toBe('form');
    expect(relateIngredients('rotisserie chicken', 'chicken')?.relation).toBe('form');
    expect(relateIngredients('scallion', 'leek')?.relation).toBe('form');
  });

  it('relates category members', () => {
    expect(relateIngredients('kale', 'spinach')?.relation).toBe('category');
    expect(relateIngredients('parmesan cheese', 'pecorino')?.relation).toBe('category');
    expect(relateIngredients('quinoa', 'couscous')?.relation).toBe('category');
  });

  it('relates cooking-function members as the loosest tier', () => {
    const related = relateIngredients('lemon juice', 'rice vinegar');
    expect(related?.relation).toBe('function');
    expect(related?.label).toBe('acid');
  });

  it('returns null for unrelated ingredients', () => {
    expect(relateIngredients('chicken', 'maple syrup')).toBeNull();
    expect(relateIngredients('paper towels', 'salmon')).toBeNull();
  });
});

describe('findCloseMatches', () => {
  it('orders matches strongest-first and skips exact matches', () => {
    const matches = findCloseMatches('spinach', ['spinach', 'lemon', 'kale']);
    expect(matches.map((match) => match.inventoryName)).toEqual(['kale']);
    expect(matches[0].relation).toBe('category');
  });

  it('prefers form matches over category and function matches', () => {
    const matches = findCloseMatches('canned tomatoes', ['soy sauce', 'tomato paste']);
    expect(matches[0].inventoryName).toBe('tomato paste');
    expect(matches[0].relation).toBe('form');
  });

  it('dedupes inventory items that normalize to the same key', () => {
    const matches = findCloseMatches('spinach', ['kale', 'KALE']);
    expect(matches).toHaveLength(1);
  });
});

describe('getIngredientGroups', () => {
  it('reports families, categories, and functions for a known item', () => {
    const groups = getIngredientGroups('parmesan');
    expect(groups.categories).toContain('hard cheese');
    expect(groups.functions).toContain('umami');
  });

  it('returns empty groups for unknown items', () => {
    const groups = getIngredientGroups('dragonfruit syrup');
    expect(groups.families).toEqual([]);
    expect(groups.categories).toEqual([]);
    expect(groups.functions).toEqual([]);
  });
});
