// Supabase Edge Function: suggest-substitutions
//
// Uses Claude for fuzzy or context-dependent ingredient substitutions. The
// client tries its deterministic substitution table first and only calls this
// when coverage is thin or the context (baking, food safety) needs judgment.
// The Anthropic API key lives here (server-side). Deploy with:
//
//   supabase functions deploy suggest-substitutions
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
//
// The client calls this via supabase.functions.invoke('suggest-substitutions', { body }).

import Anthropic from 'npm:@anthropic-ai/sdk@0.69.0';

// Sonnet keeps feed/substitution latency in the seconds range (Opus with
// thinking can take a minute-plus here, which reads as "broken" in the UI and
// risks Edge Function time limits). The vision functions stay on Opus.
const MODEL = 'claude-sonnet-5';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const TYPES = ['direct', 'close', 'stretch', 'not_recommended'];
const USE_CASES = ['cooking', 'baking', 'raw', 'garnish', 'sauce', 'marinade'];

const SUBSTITUTION_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    substitutions: {
      type: 'array',
      maxItems: 5,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          substitute: { type: 'string', description: 'Plain grocery name of the substitute.' },
          type: { type: 'string', enum: TYPES, description: 'direct = essentially the same result; close = works with minor changes; stretch = changes the dish but gets dinner made; not_recommended = listed only to warn the user off.' },
          ratio: { type: 'string', description: 'Quantity guidance, e.g. "1:1" or "use half the amount".' },
          explanation: { type: 'string', description: 'One sentence: why this works (or does not).' },
          recipeImpact: { type: 'string', description: 'One sentence: how flavor, texture, or cook time changes.' },
          confidence: { type: 'number', description: '0 to 1.' },
          warnings: { type: 'array', items: { type: 'string' }, description: 'Allergen, dietary, baking-chemistry, or food-safety warnings. Empty if none.' },
          shouldBuyOriginal: { type: 'boolean', description: 'true if the user is better off just buying the original ingredient.' },
          userHasIt: { type: 'boolean', description: 'true ONLY if the substitute appears in the provided inventory list.' },
        },
        required: ['substitute', 'type', 'ratio', 'explanation', 'recipeImpact', 'confidence', 'warnings', 'shouldBuyOriginal', 'userHasIt'],
      },
    },
  },
  required: ['substitutions'],
};

const SYSTEM_PROMPT = [
  'You suggest ingredient substitutions for a home cook, ranked by practicality.',
  'Hard rules:',
  '- Only mark userHasIt true for substitutes that literally appear in the provided inventory list. Never invent inventory.',
  '- Prefer substitutes the user already has; suggest buyable alternatives after those.',
  '- Respect dietary restrictions and allergens absolutely: a conflicting substitute may only appear as "not_recommended" with a clear warning.',
  '- Baking is chemistry: be strict about leavening, eggs, fats, and sugars — downgrade confidence and explain the texture consequences.',
  '- Raw applications (raw fish/meat, unbaked eggs) and anything with food-safety implications must carry an explicit warning.',
  '- Be honest: if nothing works well, return fewer suggestions or mark them "stretch"/"not_recommended" and set shouldBuyOriginal true.',
  '- Keep every explanation to one concrete sentence a busy cook can act on.',
].join('\n');

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
  if (!apiKey) {
    return json({ error: 'ANTHROPIC_API_KEY is not configured.' }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const ingredient = typeof body.ingredient === 'string' ? body.ingredient.trim().slice(0, 80) : '';
  if (!ingredient) {
    return json({ error: 'Missing "ingredient" in request body.' }, 400);
  }
  const inventory = stringList(body.inventory, 120);
  const restrictions = stringList(body.restrictions, 12);
  const otherIngredients = stringList(body.otherIngredients, 30);
  const recipeContext = typeof body.recipeContext === 'string' ? body.recipeContext.trim().slice(0, 200) : '';
  const useCase = typeof body.useCase === 'string' && USE_CASES.includes(body.useCase) ? body.useCase : 'cooking';

  const userPrompt = [
    `The user needs a substitute for: ${ingredient}`,
    `Use case: ${useCase}`,
    recipeContext ? `Recipe context: ${recipeContext}` : '',
    otherIngredients.length ? `Other ingredients in the dish: ${otherIngredients.join(', ')}` : '',
    inventory.length ? `USER'S INVENTORY (only these count as "on hand"):\n${inventory.map((item) => `- ${item}`).join('\n')}` : 'The user\'s inventory is unknown; set userHasIt false everywhere.',
    restrictions.length ? `DIETARY RESTRICTIONS (absolute): ${restrictions.join(', ')}` : '',
    'Rank substitutions by practicality: what they own first, then easy buys.',
  ]
    .filter(Boolean)
    .join('\n');

  const client = new Anthropic({ apiKey });

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      thinking: { type: 'adaptive' },
      output_config: {
        effort: 'medium',
        format: { type: 'json_schema', schema: SUBSTITUTION_SCHEMA },
      },
      messages: [{ role: 'user', content: [{ type: 'text', text: userPrompt }] }],
    });

    if (message.stop_reason === 'refusal') {
      return json({ error: 'The request could not be processed.' }, 422);
    }

    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return json({ substitutions: [] });
    }

    console.log('suggest-substitutions usage:', JSON.stringify(message.usage));

    const parsed = JSON.parse(textBlock.text);
    return json({ substitutions: Array.isArray(parsed.substitutions) ? parsed.substitutions : [] });
  } catch (error) {
    console.error('suggest-substitutions failed:', error);
    return json({ error: 'Substitution request failed.' }, 502);
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
