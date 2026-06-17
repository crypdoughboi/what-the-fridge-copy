// Supabase Edge Function: import-recipe
//
// Runs Claude vision on a screenshot or photo of a recipe and returns the
// structured recipe (title, ingredients, steps). The Anthropic API key lives here
// (server-side) and is never shipped to the browser. Deploy with:
//
//   supabase functions deploy import-recipe
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...   (shared with scan-receipt/scan-fridge)
//
// The client calls this via supabase.functions.invoke('import-recipe', { body }).

import Anthropic from 'npm:@anthropic-ai/sdk@0.69.0';

const MODEL = 'claude-opus-4-8';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const RECIPE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    title: { type: 'string', description: 'The recipe name/title. Use "Imported recipe" if none is shown.' },
    description: { type: 'string', description: 'A one or two sentence summary of the dish. Empty string if not present.' },
    servings: { type: 'number', description: 'Number of servings the recipe yields. Use 0 if not stated.' },
    totalTimeMinutes: { type: 'number', description: 'Total time in minutes (prep + cook). Use 0 if not stated.' },
    ingredients: {
      type: 'array',
      description: 'Every ingredient line in the recipe.',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          rawText: { type: 'string', description: 'The full ingredient line exactly as written, e.g. "1.5 lb boneless chicken thighs".' },
          name: { type: 'string', description: 'Just the core grocery item, lowercased and singular where natural, e.g. "chicken thighs", "garlic", "olive oil".' },
          displayQuantity: { type: 'string', description: 'The quantity/measure portion only, e.g. "1.5 lb", "2 cups", "4 cloves". Empty string if none.' },
          optional: { type: 'boolean', description: 'true if the recipe marks this ingredient as optional or "for garnish".' },
          pantryStaple: { type: 'boolean', description: 'true for common staples most kitchens keep on hand: salt, pepper, oil, butter, sugar, flour, water, baking soda/powder.' },
        },
        required: ['rawText', 'name', 'displayQuantity', 'optional', 'pantryStaple'],
      },
    },
    steps: {
      type: 'array',
      description: 'Ordered list of preparation steps as plain strings. Empty array if the image has no instructions.',
      items: { type: 'string' },
    },
  },
  required: ['title', 'description', 'servings', 'totalTimeMinutes', 'ingredients', 'steps'],
};

const SYSTEM_PROMPT = [
  'You extract a cooking recipe from a screenshot or photo (a recipe card, website screenshot, cookbook page, or handwritten note).',
  'Capture the title, a short description, servings, total time, the full ingredient list, and the ordered preparation steps.',
  'For each ingredient, keep the full line in rawText, the core grocery item in name (lowercase, no quantity), and the measure in displayQuantity.',
  'Flag optional ingredients and common pantry staples so the app can default those off the shopping list.',
  'Only transcribe what is actually shown. Never invent ingredients or steps. If a value is missing, use an empty string, empty array, or 0.',
].join(' ');

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
  if (!apiKey) {
    return json({ error: 'ANTHROPIC_API_KEY is not configured.' }, 500);
  }

  let image: unknown;
  let mediaType: unknown;
  try {
    const body = await req.json();
    image = body.image;
    mediaType = body.mediaType;
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  if (typeof image !== 'string' || image.length === 0) {
    return json({ error: 'Missing base64 "image" in request body.' }, 400);
  }

  const client = new Anthropic({ apiKey });

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      thinking: { type: 'adaptive' },
      output_config: {
        effort: 'medium',
        format: { type: 'json_schema', schema: RECIPE_SCHEMA },
      },
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: typeof mediaType === 'string' && mediaType ? mediaType : 'image/jpeg',
                data: image,
              },
            },
            {
              type: 'text',
              text: 'Extract the title, description, servings, total time, ingredients, and steps from this recipe.',
            },
          ],
        },
      ],
    });

    if (message.stop_reason === 'refusal') {
      return json({ error: 'The image could not be processed.' }, 422);
    }

    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return json({ title: 'Imported recipe', description: '', servings: 0, totalTimeMinutes: 0, ingredients: [], steps: [] });
    }

    console.log('import-recipe usage:', JSON.stringify(message.usage));

    const parsed = JSON.parse(textBlock.text);
    return json({
      title: typeof parsed.title === 'string' ? parsed.title : 'Imported recipe',
      description: typeof parsed.description === 'string' ? parsed.description : '',
      servings: typeof parsed.servings === 'number' ? parsed.servings : 0,
      totalTimeMinutes: typeof parsed.totalTimeMinutes === 'number' ? parsed.totalTimeMinutes : 0,
      ingredients: Array.isArray(parsed.ingredients) ? parsed.ingredients : [],
      steps: Array.isArray(parsed.steps) ? parsed.steps : [],
    });
  } catch (error) {
    console.error('import-recipe failed:', error);
    return json({ error: 'Vision request failed.' }, 502);
  }
});

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
