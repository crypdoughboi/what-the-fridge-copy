// Supabase Edge Function: generate-meal-feed
//
// Uses Claude to generate or rerank structured meal cards when the static
// template library is a weak match for the user's inventory. The Anthropic API
// key lives here (server-side) and is never shipped to the browser. Deploy with:
//
//   supabase functions deploy generate-meal-feed
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
//
// The client calls this via supabase.functions.invoke('generate-meal-feed', { body }).

import Anthropic from 'npm:@anthropic-ai/sdk@0.69.0';

const MODEL = 'claude-opus-4-8';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const SOURCES = ['ai_generated', 'ai_reranked'];

const MEAL_FEED_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    meals: {
      type: 'array',
      maxItems: 6,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: { type: 'string', description: 'Short appetizing dish name, e.g. "Crispy chickpea and kale skillet".' },
          description: { type: 'string', description: 'One sentence describing the finished dish.' },
          whyItFits: { type: 'string', description: 'One sentence on why this fits THIS user\'s inventory, naming the specific items it uses.' },
          coreIngredients: { type: 'array', items: { type: 'string' }, description: 'Ingredients the dish is built on, as plain grocery names ("chicken thighs", "kale"). Include items the user is missing too.' },
          optionalIngredients: { type: 'array', items: { type: 'string' }, description: 'Nice-to-have upgrades.' },
          pantryIngredients: { type: 'array', items: { type: 'string' }, description: 'Staples assumed on hand (oil, salt, common spices).' },
          substitutionNotes: {
            type: 'array',
            items: { type: 'string' },
            description: 'Short swap suggestions grounded in the user\'s actual inventory, e.g. "No scallions? Your red onion works sliced thin." Empty if none apply.',
          },
          steps: { type: 'array', minItems: 3, maxItems: 8, items: { type: 'string' }, description: 'Concise numbered cooking steps a home cook can follow.' },
          effort: { type: 'string', enum: ['Very easy', 'Easy', 'Medium'] },
          cuisine: { type: 'string', description: 'Cuisine influence, e.g. "Mexican", "Italian-ish". Use "Any" if neutral.' },
          cookingMethod: { type: 'string', description: 'Primary format/method, e.g. "skillet", "sheet pan", "one-pot", "salad".' },
          tags: { type: 'array', items: { type: 'string' }, description: 'Lowercase vibe/diet tags, e.g. "cozy", "high-protein", "vegetarian".' },
          timeMinutes: { type: 'number', description: 'Realistic total minutes.' },
          servings: { type: 'number' },
          confidence: { type: 'number', description: '0 to 1: how confident you are this is a practical, good dinner for this inventory.' },
          source: { type: 'string', enum: SOURCES, description: '"ai_reranked" if this is one of the provided static candidates you are promoting; "ai_generated" if it is a new idea.' },
          basedOnStaticId: { type: 'string', description: 'When source is "ai_reranked", the id of the static candidate. Empty string otherwise.' },
        },
        required: [
          'name',
          'description',
          'whyItFits',
          'coreIngredients',
          'optionalIngredients',
          'pantryIngredients',
          'substitutionNotes',
          'steps',
          'effort',
          'cuisine',
          'cookingMethod',
          'tags',
          'timeMinutes',
          'servings',
          'confidence',
          'source',
          'basedOnStaticId',
        ],
      },
    },
  },
  required: ['meals'],
};

const SYSTEM_PROMPT = [
  'You are the meal engine for a grocery app. You receive a user\'s real kitchen inventory, their preferences, and the app\'s best',
  'static recipe matches. Your job is to produce a small set of practical, cookable dinner ideas that make better use of what the',
  'user actually owns than the static matches do.',
  'Hard rules:',
  '- NEVER claim the user has an ingredient that is not in the provided inventory list. Ingredients not in inventory belong in the',
  '  recipe anyway if the meal needs them — the app computes the shopping delta — but do not pretend they are on hand.',
  '- Prefer meals where most core ingredients come from the inventory. Adding 1-3 missing ingredients is fine when the meal stays practical.',
  '- Prioritize perishable/expiring items when any are listed.',
  '- Respect every dietary restriction absolutely: never include a restricted ingredient, even as optional.',
  '- No generic "AI recipe" filler: no vague dishes, no exotic ingredients a normal supermarket lacks, no restating the inventory as a "bowl".',
  '  Each idea must be a specific dish a competent home cook would recognize and could cook tonight from the steps you give.',
  '- If a provided static candidate is actually a great fit once substitutions are considered, prefer promoting it (source "ai_reranked"',
  '  with its id) over inventing something new. Do not duplicate dishes the user disliked or that are listed as already shown.',
  '- Substitution notes must only reference items in the inventory.',
  'Keep output tight: 3-6 meals, each genuinely different from the others and from the already-shown static deck.',
].join('\n');

type FeedRequest = {
  inventory?: unknown;
  expiringSoon?: unknown;
  preferences?: unknown;
  restrictions?: unknown;
  mode?: unknown;
  staticCandidates?: unknown;
  avoidMealNames?: unknown;
  ingredientContext?: unknown;
  maxMeals?: unknown;
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
  if (!apiKey) {
    return json({ error: 'ANTHROPIC_API_KEY is not configured.' }, 500);
  }

  let body: FeedRequest;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const inventory = stringList(body.inventory, 120);
  if (!inventory.length) {
    return json({ error: 'Missing "inventory" in request body.' }, 400);
  }
  const expiringSoon = stringList(body.expiringSoon, 20);
  const restrictions = stringList(body.restrictions, 12);
  const avoidMealNames = stringList(body.avoidMealNames, 40);
  const ingredientContext = stringList(body.ingredientContext, 40);
  const preferences = body.preferences && typeof body.preferences === 'object' ? body.preferences : {};
  const mode = typeof body.mode === 'string' ? body.mode : 'inventory';
  const maxMeals = typeof body.maxMeals === 'number' ? Math.max(1, Math.min(6, Math.floor(body.maxMeals))) : 4;
  const staticCandidates = Array.isArray(body.staticCandidates) ? body.staticCandidates.slice(0, 12) : [];

  const userPrompt = [
    `Mode: ${mode === 'inventory' ? 'cook from what the user has' : 'open to shopping'}. Return up to ${maxMeals} meals.`,
    '',
    `INVENTORY (the ONLY items the user has):`,
    inventory.map((item) => `- ${item}`).join('\n'),
    expiringSoon.length ? `\nUSE SOON (perishable, prioritize these):\n${expiringSoon.map((item) => `- ${item}`).join('\n')}` : '',
    ingredientContext.length ? `\nINGREDIENT NOTES (how some inventory items can flex):\n${ingredientContext.map((item) => `- ${item}`).join('\n')}` : '',
    restrictions.length ? `\nDIETARY RESTRICTIONS (absolute):\n${restrictions.map((item) => `- ${item}`).join('\n')}` : '',
    `\nPREFERENCES: ${JSON.stringify(preferences)}`,
    staticCandidates.length
      ? `\nBEST STATIC CANDIDATES (already ranked; promote with source "ai_reranked" + basedOnStaticId if one fits well):\n${JSON.stringify(staticCandidates)}`
      : '',
    avoidMealNames.length ? `\nDO NOT SUGGEST (already shown or disliked):\n${avoidMealNames.map((item) => `- ${item}`).join('\n')}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const client = new Anthropic({ apiKey });

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      thinking: { type: 'adaptive' },
      output_config: {
        effort: 'medium',
        format: { type: 'json_schema', schema: MEAL_FEED_SCHEMA },
      },
      messages: [{ role: 'user', content: [{ type: 'text', text: userPrompt }] }],
    });

    if (message.stop_reason === 'refusal') {
      return json({ error: 'The request could not be processed.' }, 422);
    }

    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return json({ meals: [] });
    }

    console.log('generate-meal-feed usage:', JSON.stringify(message.usage));

    const parsed = JSON.parse(textBlock.text);
    return json({ meals: Array.isArray(parsed.meals) ? parsed.meals : [] });
  } catch (error) {
    console.error('generate-meal-feed failed:', error);
    return json({ error: 'Meal generation request failed.' }, 502);
  }
});

function stringList(value: unknown, max: number): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .map((item) => item.trim().slice(0, 80))
    .slice(0, max);
}

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
