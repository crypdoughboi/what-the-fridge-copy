// Supabase Edge Function: scan-fridge
//
// Runs Claude vision on a fridge/pantry photo and returns structured grocery
// items. The Anthropic API key lives here (server-side) and is never shipped to
// the browser. Deploy with:
//
//   supabase functions deploy scan-fridge
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
//
// The client calls this via supabase.functions.invoke('scan-fridge', { body }).

import Anthropic from 'npm:@anthropic-ai/sdk@0.69.0';

const MODEL = 'claude-opus-4-8';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Mirrors the app's Category / StoreSection / ScanConfidence unions so Claude
// returns values the client can use directly.
const CATEGORIES = ['Produce', 'Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Condiments', 'Drinks', 'Other'];
const SECTIONS = ['Produce', 'Meat/Protein', 'Dairy', 'Pantry', 'Frozen', 'Snacks', 'Household', 'Other'];
const CONFIDENCES = ['clearlySeen', 'maybeLow', 'couldNotTell'];

const ITEM_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: { type: 'string', description: 'Short grocery name, lowercase unless a brand, e.g. "eggs", "Greek yogurt", "oat milk".' },
          category: { type: 'string', enum: CATEGORIES },
          section: { type: 'string', enum: SECTIONS },
          confidence: {
            type: 'string',
            enum: CONFIDENCES,
            description: 'clearlySeen = clearly identifiable; maybeLow = partially hidden or uncertain; couldNotTell = covered/opaque container you cannot identify.',
          },
          note: { type: 'string', description: 'One short clause on where/how it was seen, e.g. "carton on middle shelf".' },
        },
        required: ['name', 'category', 'section', 'confidence', 'note'],
      },
    },
  },
  required: ['items'],
};

const SYSTEM_PROMPT = [
  'You identify food, grocery, and pantry items visible in a photo of a fridge, freezer, or pantry.',
  'Only list edible/grocery/household-consumable items you can actually see. Never invent items that are not in the image.',
  'Use confidence honestly: "clearlySeen" for items you can clearly identify, "maybeLow" for partially hidden or ambiguous items,',
  'and "couldNotTell" for opaque/covered containers (takeout boxes, wrapped leftovers, foil) where the contents are a guess.',
  'Prefer common everyday names over brand names unless the brand is the clearest identifier.',
  'Skip duplicates — list each distinct item once. If the image has no identifiable food, return an empty items array.',
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
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      thinking: { type: 'adaptive' },
      output_config: {
        effort: 'medium',
        format: { type: 'json_schema', schema: ITEM_SCHEMA },
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
              text: 'Identify every food, grocery, and pantry item you can see in this photo.',
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
      return json({ items: [] });
    }

    const parsed = JSON.parse(textBlock.text);
    return json({ items: Array.isArray(parsed.items) ? parsed.items : [] });
  } catch (error) {
    console.error('scan-fridge failed:', error);
    return json({ error: 'Vision request failed.' }, 502);
  }
});

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
