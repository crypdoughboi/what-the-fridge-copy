// Supabase Edge Function: scan-receipt
//
// Runs Claude vision on a grocery receipt photo and returns structured line
// items + store/date/total. The Anthropic API key lives here (server-side) and
// is never shipped to the browser. Deploy with:
//
//   supabase functions deploy scan-receipt
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...   (shared with scan-fridge)
//
// The client calls this via supabase.functions.invoke('scan-receipt', { body }).

import Anthropic from 'npm:@anthropic-ai/sdk@0.69.0';

const MODEL = 'claude-opus-4-8';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Mirrors the app's Store union.
const STORES = ["Trader Joe's", 'Whole Foods', 'Costco', 'Target', 'Walmart', 'Local grocery', 'Other'];

const RECEIPT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    store: { type: 'string', enum: STORES, description: 'Best-match store name, or "Other" if not one of these, or "Local grocery" if clearly a grocer but unbranded.' },
    date: { type: 'string', description: 'Purchase date as YYYY-MM-DD. Use an empty string if not legible.' },
    total: { type: 'number', description: 'Grand total paid. Use 0 if not legible.' },
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          rawName: { type: 'string', description: 'The line-item text exactly as printed on the receipt, e.g. "GRK YGRT", "CHKN THGH".' },
          price: { type: 'number', description: 'Line price. Use 0 if not legible.' },
          isGrocery: { type: 'boolean', description: 'true for food/grocery/household goods; false for fees, deposits, tax, discounts, bag charges, loyalty lines.' },
        },
        required: ['rawName', 'price', 'isGrocery'],
      },
    },
  },
  required: ['store', 'date', 'total', 'items'],
};

const SYSTEM_PROMPT = [
  'You extract line items from a photo of a grocery store receipt.',
  'Transcribe each purchased line item exactly as printed (keep the abbreviated receipt text in rawName) along with its price.',
  'Mark isGrocery=false for non-product lines: subtotals, tax, fees, bag charges, bottle deposits, discounts, loyalty/rewards lines, tips, and the grand total.',
  'Do not include the subtotal/total/tax lines as items — only individual purchased lines. Capture store name, purchase date, and grand total separately.',
  'If a value is not legible, use an empty string for date and 0 for numeric fields rather than guessing. Never invent items that are not on the receipt.',
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
        format: { type: 'json_schema', schema: RECEIPT_SCHEMA },
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
              text: 'Extract the store, date, total, and every purchased line item from this receipt.',
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
      return json({ store: 'Other', date: '', total: 0, items: [] });
    }

    console.log('scan-receipt usage:', JSON.stringify(message.usage));

    const parsed = JSON.parse(textBlock.text);
    return json({
      store: typeof parsed.store === 'string' ? parsed.store : 'Other',
      date: typeof parsed.date === 'string' ? parsed.date : '',
      total: typeof parsed.total === 'number' ? parsed.total : 0,
      items: Array.isArray(parsed.items) ? parsed.items : [],
    });
  } catch (error) {
    console.error('scan-receipt failed:', error);
    return json({ error: 'Vision request failed.' }, 502);
  }
});

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
