import { SubstitutionRequest, SubstitutionSuggestion, SubstitutionType, SubstitutionUseCase } from '../types';
import { normalizeIngredientKey } from './groceryLogic';
import { findCloseMatches } from './ingredientIntelligence';

// Deterministic substitutions: the well-known, safe swaps every cook reaches for.
// Anything not covered here (or context-dependent, like baking chemistry) falls
// through to the AI in substitutionService. Keys are normalized ingredient keys.

type KnownSubstitution = {
  substitute: string;
  type: SubstitutionType;
  ratio: string;
  explanation: string;
  recipeImpact: string;
  confidence: number;
  warnings?: string[];
  // Swaps that change baking chemistry get downgraded when useCase is 'baking'.
  bakingSafe?: boolean;
};

const knownSubstitutions: Record<string, KnownSubstitution[]> = {
  butter: [
    { substitute: 'olive oil', type: 'close', ratio: 'Use about 3/4 the amount', explanation: 'Works for sautéing and roasting.', recipeImpact: 'Loses the buttery flavor; savory dishes barely notice.', confidence: 0.9, bakingSafe: false },
    { substitute: 'ghee', type: 'direct', ratio: '1:1', explanation: 'Clarified butter — same fat, higher smoke point.', recipeImpact: 'Slightly nuttier.', confidence: 0.95, bakingSafe: true },
    { substitute: 'coconut oil', type: 'close', ratio: '1:1', explanation: 'Solid at room temp like butter, so it behaves similarly.', recipeImpact: 'Adds mild coconut flavor.', confidence: 0.8, bakingSafe: true },
  ],
  'sour cream': [
    { substitute: 'greek yogurt', type: 'direct', ratio: '1:1', explanation: 'Same tang and body.', recipeImpact: 'Slightly tangier and leaner.', confidence: 0.95, bakingSafe: true },
    { substitute: 'creme fraiche', type: 'direct', ratio: '1:1', explanation: 'Richer, and it will not break when heated.', recipeImpact: 'A bit richer.', confidence: 0.95, bakingSafe: true },
  ],
  'greek yogurt': [
    { substitute: 'sour cream', type: 'direct', ratio: '1:1', explanation: 'Same tang and body.', recipeImpact: 'Slightly richer.', confidence: 0.95, bakingSafe: true },
    { substitute: 'yogurt', type: 'close', ratio: '1:1, strained if you can', explanation: 'Regular yogurt is looser; strain or use a little less.', recipeImpact: 'Thinner sauces and marinades.', confidence: 0.85, bakingSafe: true },
  ],
  buttermilk: [
    { substitute: 'milk', type: 'close', ratio: '1 cup milk + 1 tbsp lemon juice or vinegar, rest 5 min', explanation: 'The classic DIY buttermilk.', recipeImpact: 'Nearly identical in pancakes and marinades.', confidence: 0.9, bakingSafe: true },
  ],
  'heavy cream': [
    { substitute: 'half and half', type: 'close', ratio: '1:1, plus a pat of butter if the sauce needs body', explanation: 'Works in sauces and soups.', recipeImpact: 'Thinner; will not whip.', confidence: 0.8, bakingSafe: false, warnings: ['Will not whip into whipped cream.'] },
    { substitute: 'coconut milk', type: 'close', ratio: '1:1, full-fat', explanation: 'Good dairy-free stand-in for simmered sauces and curries.', recipeImpact: 'Adds coconut flavor.', confidence: 0.75, bakingSafe: false },
  ],
  scallion: [
    { substitute: 'chive', type: 'direct', ratio: '1:1 for the green parts', explanation: 'Same mild oniony bite.', recipeImpact: 'Slightly more delicate.', confidence: 0.9, bakingSafe: true },
    { substitute: 'shallot', type: 'close', ratio: 'Use about half, minced', explanation: 'Stronger, so use less; great cooked.', recipeImpact: 'Loses the fresh green garnish.', confidence: 0.8, bakingSafe: true },
    { substitute: 'onion', type: 'close', ratio: 'Use about half, sliced thin', explanation: 'Fine when cooked into the dish.', recipeImpact: 'Sharper raw; cooked, very close.', confidence: 0.75, bakingSafe: true },
  ],
  shallot: [
    { substitute: 'onion', type: 'close', ratio: '1:1, preferably red onion', explanation: 'Slightly less sweet and refined but works everywhere.', recipeImpact: 'A touch sharper.', confidence: 0.85, bakingSafe: true },
    { substitute: 'scallion', type: 'close', ratio: '1:1, white parts', explanation: 'Milder; best in dressings and quick sautés.', recipeImpact: 'Less depth in slow-cooked dishes.', confidence: 0.75, bakingSafe: true },
  ],
  lemon: [
    { substitute: 'lime', type: 'direct', ratio: '1:1', explanation: 'Interchangeable acid in nearly every savory dish.', recipeImpact: 'Slightly more tropical flavor.', confidence: 0.95, bakingSafe: false },
    { substitute: 'white wine vinegar', type: 'close', ratio: 'Use about half', explanation: 'Brings the acid without the citrus aroma.', recipeImpact: 'Loses the fresh citrus note.', confidence: 0.75, bakingSafe: false },
  ],
  lime: [
    { substitute: 'lemon', type: 'direct', ratio: '1:1', explanation: 'Interchangeable acid in nearly every savory dish.', recipeImpact: 'Slightly less tropical flavor.', confidence: 0.95, bakingSafe: false },
    { substitute: 'rice vinegar', type: 'close', ratio: 'Use about half', explanation: 'Gentle acid that suits Asian dressings and slaws.', recipeImpact: 'Loses the citrus aroma.', confidence: 0.7, bakingSafe: false },
  ],
  garlic: [
    { substitute: 'garlic powder', type: 'close', ratio: '1/4 tsp per clove', explanation: 'Fine anywhere garlic melts into the dish.', recipeImpact: 'Less pungent, no texture.', confidence: 0.85, bakingSafe: true },
    { substitute: 'shallot', type: 'stretch', ratio: '1 small shallot per 2 cloves', explanation: 'Different flavor, same aromatic base role.', recipeImpact: 'Noticeably milder and sweeter.', confidence: 0.6, bakingSafe: true },
  ],
  'soy sauce': [
    { substitute: 'tamari', type: 'direct', ratio: '1:1', explanation: 'Nearly identical; gluten-free.', recipeImpact: 'Slightly richer.', confidence: 0.95, bakingSafe: true },
    { substitute: 'fish sauce', type: 'stretch', ratio: 'Use about half', explanation: 'Brings the salt and umami, but a different funk.', recipeImpact: 'Noticeably fishier; skip for vegetarians.', confidence: 0.6, warnings: ['Not vegetarian.'], bakingSafe: true },
    { substitute: 'worcestershire', type: 'stretch', ratio: 'Use about half', explanation: 'Salty-umami cousin for marinades and stir fry.', recipeImpact: 'Sweeter and tangier.', confidence: 0.55, warnings: ['Traditional Worcestershire contains anchovy.'], bakingSafe: true },
  ],
  'olive oil': [
    { substitute: 'vegetable oil', type: 'direct', ratio: '1:1', explanation: 'Any neutral oil works for cooking.', recipeImpact: 'Loses the olive flavor in dressings.', confidence: 0.9, bakingSafe: true },
    { substitute: 'butter', type: 'close', ratio: '1:1', explanation: 'Great for sautéing at moderate heat.', recipeImpact: 'Richer; browns faster.', confidence: 0.85, bakingSafe: false },
  ],
  'chicken stock': [
    { substitute: 'vegetable stock', type: 'direct', ratio: '1:1', explanation: 'Slightly lighter but works in any recipe.', recipeImpact: 'A little less savory depth.', confidence: 0.9, bakingSafe: true },
    { substitute: 'water', type: 'stretch', ratio: '1:1, season more aggressively', explanation: 'Fine for soups with lots of aromatics.', recipeImpact: 'Less depth; compensate with salt and umami.', confidence: 0.6, bakingSafe: true },
  ],
  parmesan: [
    { substitute: 'pecorino', type: 'direct', ratio: '1:1, salt later', explanation: 'Same salty hard-cheese role.', recipeImpact: 'Sharper and saltier — taste before adding salt.', confidence: 0.9, bakingSafe: true },
    { substitute: 'nutritional yeast', type: 'stretch', ratio: '2 tbsp per 1/4 cup grated', explanation: 'Dairy-free umami dusting.', recipeImpact: 'No melt, different flavor.', confidence: 0.55, bakingSafe: true },
  ],
  cilantro: [
    { substitute: 'parsley', type: 'close', ratio: '1:1', explanation: 'Same fresh green finish without the polarizing flavor.', recipeImpact: 'Milder, less citrusy.', confidence: 0.85, bakingSafe: true },
  ],
  'ground beef': [
    { substitute: 'turkey', type: 'direct', ratio: '1:1', explanation: 'Same texture; leaner.', recipeImpact: 'Milder — season a bit more.', confidence: 0.9, bakingSafe: true },
    { substitute: 'lentil', type: 'stretch', ratio: '1 cup cooked lentils per 1/2 lb', explanation: 'Plant-based swap for tacos, sauces, and chilis.', recipeImpact: 'Different texture; very different in burgers.', confidence: 0.55, bakingSafe: true },
  ],
  honey: [
    { substitute: 'maple syrup', type: 'direct', ratio: '1:1', explanation: 'Same sweetness and consistency.', recipeImpact: 'Slight maple flavor.', confidence: 0.9, bakingSafe: true },
    { substitute: 'sugar', type: 'close', ratio: '3/4 cup sugar + 1 tbsp water per cup', explanation: 'Works where honey is just a sweetener.', recipeImpact: 'Loses floral notes and stickiness.', confidence: 0.75, bakingSafe: false },
  ],
  egg: [
    { substitute: 'flax egg', type: 'close', ratio: '1 tbsp ground flax + 3 tbsp water per egg, rest 5 min', explanation: 'Standard vegan binder.', recipeImpact: 'Denser baked goods; will not work for meringue or custard.', confidence: 0.7, bakingSafe: false, warnings: ['Only replaces eggs as a binder, not for structure or whipping.'] },
    { substitute: 'mayonnaise', type: 'stretch', ratio: '3 tbsp per egg', explanation: 'Binder swap for breading and some batters.', recipeImpact: 'Adds richness.', confidence: 0.5, bakingSafe: false },
  ],
  breadcrumb: [
    { substitute: 'panko', type: 'direct', ratio: '1:1', explanation: 'Crispier Japanese-style crumbs.', recipeImpact: 'Lighter, crunchier coating.', confidence: 0.95, bakingSafe: true },
    { substitute: 'crushed cracker', type: 'close', ratio: '1:1', explanation: 'Any neutral cracker, crushed fine.', recipeImpact: 'A bit more buttery and salty.', confidence: 0.8, bakingSafe: true },
    { substitute: 'rolled oat', type: 'stretch', ratio: '1:1, pulsed briefly', explanation: 'Binder swap for meatballs and meatloaf.', recipeImpact: 'Softer texture, not for crispy coatings.', confidence: 0.6, bakingSafe: true },
  ],
  cornstarch: [
    { substitute: 'flour', type: 'close', ratio: '2 tbsp flour per 1 tbsp cornstarch', explanation: 'Thickens sauces and gravies; simmer a bit longer.', recipeImpact: 'Slightly cloudier, less glossy.', confidence: 0.85, bakingSafe: false },
  ],
  'rice vinegar': [
    { substitute: 'apple cider vinegar', type: 'close', ratio: '1:1, plus a pinch of sugar', explanation: 'Closest common vinegar in sharpness.', recipeImpact: 'Slightly fruitier.', confidence: 0.8, bakingSafe: true },
    { substitute: 'lime', type: 'close', ratio: '1:1 juice', explanation: 'Fresh acid that suits the same dishes.', recipeImpact: 'Adds citrus aroma.', confidence: 0.75, bakingSafe: true },
  ],
  'fish sauce': [
    { substitute: 'soy sauce', type: 'close', ratio: '1:1', explanation: 'Covers the salt and umami.', recipeImpact: 'Loses the fermented-seafood depth.', confidence: 0.75, bakingSafe: true },
  ],
  tahini: [
    { substitute: 'peanut butter', type: 'close', ratio: '1:1, thinned with water', explanation: 'Same creamy nut/seed paste role.', recipeImpact: 'Distinct peanut flavor.', confidence: 0.75, warnings: ['Peanut allergen.'], bakingSafe: true },
  ],
  milk: [
    { substitute: 'oat milk', type: 'direct', ratio: '1:1', explanation: 'The most neutral non-dairy milk for cooking.', recipeImpact: 'Very slightly sweet.', confidence: 0.9, bakingSafe: true },
    { substitute: 'half and half', type: 'close', ratio: 'Dilute with equal parts water', explanation: 'Thin it out and it behaves like whole milk.', recipeImpact: 'Negligible.', confidence: 0.85, bakingSafe: true },
  ],
};

// Baking is chemistry: swaps that merely taste similar can wreck structure.
const strictUseCases: SubstitutionUseCase[] = ['baking'];

function downgradeForBaking(entry: KnownSubstitution): KnownSubstitution {
  if (entry.bakingSafe) return entry;
  const downgraded: SubstitutionType = entry.type === 'direct' ? 'close' : entry.type === 'close' ? 'stretch' : entry.type;
  return {
    ...entry,
    type: downgraded,
    confidence: Math.min(entry.confidence, 0.6),
    warnings: [...(entry.warnings ?? []), 'Baking is sensitive to swaps — expect texture changes.'],
  };
}

function restrictionConflicts(substitute: string, restrictions: string[]): string[] {
  const key = normalizeIngredientKey(substitute);
  const warnings: string[] = [];
  const lower = restrictions.map((restriction) => restriction.toLowerCase());
  const dairy = ['butter', 'ghee', 'milk', 'half and half', 'sour cream', 'greek yogurt', 'yogurt', 'creme fraiche', 'parmesan', 'pecorino', 'heavy cream', 'mayonnaise'];
  const animal = ['fish sauce', 'worcestershire', 'turkey', 'ground beef', 'mayonnaise', 'egg', 'flax egg'];
  const nuts = ['peanut butter', 'almond', 'cashew', 'walnut', 'pecan'];
  if (lower.some((r) => r.includes('dairy') || r.includes('vegan')) && dairy.includes(key)) warnings.push('Contains dairy — conflicts with your restrictions.');
  if (lower.some((r) => r.includes('vegan') || r.includes('vegetarian')) && animal.includes(key) && key !== 'flax egg') warnings.push('Not plant-based — conflicts with your restrictions.');
  if (lower.some((r) => r.includes('nut')) && nuts.includes(key)) warnings.push('Contains nuts — conflicts with your restrictions.');
  return warnings;
}

/**
 * Deterministic substitution pass: curated table first, then category/function
 * fallbacks from ingredientIntelligence (marked as stretch ideas). Pure and
 * synchronous — the AI layer only runs when this comes back thin.
 */
export function getDeterministicSubstitutions(request: SubstitutionRequest): SubstitutionSuggestion[] {
  const key = normalizeIngredientKey(request.ingredient);
  const inventoryKeys = new Set(request.inventory.map(normalizeIngredientKey));
  const strict = strictUseCases.includes(request.useCase);

  const fromTable = (knownSubstitutions[key] ?? [])
    .map((entry) => (strict ? downgradeForBaking(entry) : entry))
    .map((entry): SubstitutionSuggestion => {
      const conflicts = restrictionConflicts(entry.substitute, request.restrictions);
      return {
        original: request.ingredient,
        substitute: entry.substitute,
        type: conflicts.length ? 'not_recommended' : entry.type,
        ratio: entry.ratio,
        explanation: entry.explanation,
        recipeImpact: entry.recipeImpact,
        confidence: conflicts.length ? Math.min(entry.confidence, 0.3) : entry.confidence,
        warnings: [...(entry.warnings ?? []), ...conflicts],
        shouldBuyOriginal: entry.type === 'stretch',
        userHasIt: inventoryKeys.has(normalizeIngredientKey(entry.substitute)),
        source: 'deterministic',
      };
    });

  const coveredKeys = new Set(fromTable.map((entry) => normalizeIngredientKey(entry.substitute)));
  const fromInventory = findCloseMatches(request.ingredient, request.inventory)
    .filter((match) => !coveredKeys.has(match.inventoryKey))
    .slice(0, 3)
    .map((match): SubstitutionSuggestion => {
      const conflicts = restrictionConflicts(match.inventoryName, request.restrictions);
      const type: SubstitutionType = conflicts.length ? 'not_recommended' : match.relation === 'form' ? 'close' : 'stretch';
      const baseConfidence = match.relation === 'form' ? 0.7 : match.relation === 'category' ? 0.55 : 0.4;
      return {
        original: request.ingredient,
        substitute: match.inventoryName,
        type: strict && type === 'close' ? 'stretch' : type,
        ratio: 'Similar amount, adjust to taste',
        explanation:
          match.relation === 'form'
            ? `Same food in a different form (${match.label}).`
            : match.relation === 'category'
              ? `Plays the same role: ${match.label}.`
              : `Covers the same job in the dish: ${match.label}.`,
        recipeImpact: match.relation === 'form' ? 'Minor — adjust liquid or cook time for the form difference.' : 'Noticeable flavor change, same structure.',
        confidence: conflicts.length ? 0.3 : strict ? Math.min(baseConfidence, 0.5) : baseConfidence,
        warnings: [...conflicts, ...(strict ? ['Baking is sensitive to swaps — expect texture changes.'] : [])],
        shouldBuyOriginal: match.relation === 'function',
        userHasIt: true,
        source: 'deterministic',
      };
    });

  return sortSubstitutions([...fromTable, ...fromInventory]);
}

const typeRank: Record<SubstitutionType, number> = { direct: 0, close: 1, stretch: 2, not_recommended: 3 };

export function sortSubstitutions(suggestions: SubstitutionSuggestion[]): SubstitutionSuggestion[] {
  return [...suggestions].sort((a, b) => {
    // Things the user already owns win ties — the whole point is avoiding a purchase.
    if (a.userHasIt !== b.userHasIt) return a.userHasIt ? -1 : 1;
    if (typeRank[a.type] !== typeRank[b.type]) return typeRank[a.type] - typeRank[b.type];
    return b.confidence - a.confidence;
  });
}

/** True when the deterministic pass is strong enough that the AI call can be skipped. */
export function deterministicCoverageIsStrong(suggestions: SubstitutionSuggestion[], request: SubstitutionRequest): boolean {
  if (strictUseCases.includes(request.useCase)) return false;
  const usable = suggestions.filter((entry) => entry.type === 'direct' || entry.type === 'close');
  const owned = usable.filter((entry) => entry.userHasIt);
  return usable.length >= 2 || owned.length >= 1;
}
