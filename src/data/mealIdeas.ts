import { MealIdea, SeedMealTemplate } from '../types';
import { seedMealTemplates } from './seedMealTemplates';

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
    servings: template.servings,
    tags: template.tags,
    chefNote: template.chefNote,
    whyItWorks: template.whyItWorks,
    leftoversNote: template.leftoversNote,
    equipment: template.equipment,
    structuredIngredients: template.ingredients,
    recipe: template.recipe,
    ingredients: template.ingredients.filter((ingredient) => !ingredient.isOptional && !ingredient.isPantry).map((ingredient) => ingredient.rawName),
    optionalIngredients: template.ingredients.filter((ingredient) => ingredient.isOptional).map((ingredient) => ingredient.rawName),
    pantryIngredients: template.ingredients.filter((ingredient) => ingredient.isPantry).map((ingredient) => ingredient.rawName),
    instructionsPreview: template.recipe.steps.map((step) => step.body),
    status: 'suggested',
  };
}
