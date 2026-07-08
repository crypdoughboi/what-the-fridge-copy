import { MealIdea, SeedMealTemplate } from '../types';
import { seedMealTemplates } from './seedMealTemplates';
import { expansionMealTemplates } from './expansionMealTemplates';
import { importedMealTemplates } from './importedMealTemplates';

// The full library: the original 100 curated templates, the growing expansion set,
// and the owner-compiled imported recipes (see scripts/importedRecipes.mjs).
export const allMealTemplates: SeedMealTemplate[] = [...seedMealTemplates, ...expansionMealTemplates, ...importedMealTemplates];

export const seedMealIdeas: MealIdea[] = allMealTemplates.map((template) => templateToMealIdea(template));

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
