import { SubstitutionMatch } from '../types';

type SubstituteRule = {
  ingredientKey: string;
  substituteKeys: string[];
  substituteName: string;
  note: string;
  confidenceScore: number;
  requiresAll?: boolean;
};

const substituteRules: SubstituteRule[] = [
  {
    ingredientKey: 'buttermilk',
    substituteKeys: ['milk', 'lemon'],
    substituteName: 'milk and lemon',
    note: 'Milk plus lemon can stand in for buttermilk.',
    confidenceScore: 0.86,
    requiresAll: true,
  },
  {
    ingredientKey: 'sour cream',
    substituteKeys: ['greek yogurt'],
    substituteName: 'Greek yogurt',
    note: 'Greek yogurt can replace sour cream.',
    confidenceScore: 0.9,
  },
  {
    ingredientKey: 'kale',
    substituteKeys: ['spinach'],
    substituteName: 'spinach',
    note: 'Spinach can replace kale.',
    confidenceScore: 0.82,
  },
  {
    ingredientKey: 'quinoa',
    substituteKeys: ['rice'],
    substituteName: 'rice',
    note: 'Rice can replace quinoa.',
    confidenceScore: 0.78,
  },
  {
    ingredientKey: 'pita',
    substituteKeys: ['tortilla'],
    substituteName: 'tortillas',
    note: 'Tortillas can replace pita.',
    confidenceScore: 0.8,
  },
  {
    ingredientKey: 'cooked bean',
    substituteKeys: ['black bean', 'pinto bean', 'white bean'],
    substituteName: 'canned beans',
    note: 'Canned beans can replace cooked beans.',
    confidenceScore: 0.88,
  },
  {
    ingredientKey: 'bean',
    substituteKeys: ['black bean', 'pinto bean', 'white bean'],
    substituteName: 'canned beans',
    note: 'Canned beans can replace cooked beans.',
    confidenceScore: 0.86,
  },
  {
    ingredientKey: 'broccoli',
    substituteKeys: ['frozen vegetable', 'frozen vegetables'],
    substituteName: 'frozen vegetables',
    note: 'Frozen vegetables can replace fresh in cooked meals.',
    confidenceScore: 0.74,
  },
  {
    ingredientKey: 'green bean',
    substituteKeys: ['frozen vegetable', 'frozen vegetables'],
    substituteName: 'frozen vegetables',
    note: 'Frozen vegetables can replace fresh in cooked meals.',
    confidenceScore: 0.74,
  },
  {
    ingredientKey: 'spinach',
    substituteKeys: ['frozen vegetable', 'frozen vegetables'],
    substituteName: 'frozen vegetables',
    note: 'Frozen vegetables can replace fresh in cooked meals.',
    confidenceScore: 0.72,
  },
];

export function findSubstitutionMatch({
  ingredientName,
  ingredientKey,
  ownedKeys,
}: {
  ingredientName: string;
  ingredientKey: string;
  ownedKeys: Set<string>;
}): SubstitutionMatch | null {
  const rule = substituteRules.find((candidate) => candidate.ingredientKey === ingredientKey);
  if (!rule) return null;

  const availableKey = rule.requiresAll
    ? rule.substituteKeys.every((key) => ownedKeys.has(key))
      ? rule.substituteKeys.join('+')
      : undefined
    : rule.substituteKeys.find((key) => ownedKeys.has(key));
  if (!availableKey) return null;

  return {
    ingredientName,
    ingredientKey,
    substituteName: rule.substituteName,
    substituteKey: availableKey,
    note: rule.note,
    confidenceScore: rule.confidenceScore,
  };
}
