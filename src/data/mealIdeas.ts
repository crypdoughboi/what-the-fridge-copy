import { MealIdea, SeedMealTemplate } from '../types';
import { seedMealTemplates } from './seedMealTemplates';

export const dinnerLanes = [
  'Crispy, saucy, crunchy',
  'Charred, citrusy, herby',
  'Creamy, spicy, cozy',
  'Rice bowl energy',
  'Big platter dinner',
  'Spiced rice and slow comfort',
  'Curry night',
  'Pasta but better',
  'Weeknight roast',
  'Mediterranean home cooking',
  'Tacos, wraps, and things in bread',
  'Pantry sauce magic',
];

export const seedMealIdeas: MealIdea[] = seedMealTemplates.map((template) => templateToMealIdea(template));

export function templateToMealIdea(template: SeedMealTemplate, id = template.slug): MealIdea {
  return {
    id,
    slug: template.slug,
    name: template.name,
    category: template.category,
    description: template.description,
    dinnerLanes: template.dinnerLanes,
    cuisineInfluence: template.cuisineInfluence.join(', '),
    format: template.format,
    timeMinutes: template.timeMinutes,
    effort: template.effort,
    tags: template.tags,
    ingredients: template.ingredients.filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry).map((ingredient) => ingredient.rawName),
    optionalIngredients: template.ingredients.filter((ingredient) => ingredient.isOptional).map((ingredient) => ingredient.rawName),
    pantryIngredients: template.ingredients.filter((ingredient) => ingredient.isPantry).map((ingredient) => ingredient.rawName),
    instructionsPreview: [
      'Prep the vegetables and sauce first.',
      'Cook the main protein or base until properly browned or tender.',
      'Assemble with something fresh, acidic, or crunchy at the end.',
    ],
    status: 'suggested',
  };
}
