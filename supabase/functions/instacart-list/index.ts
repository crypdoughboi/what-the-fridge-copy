// Supabase Edge Function: instacart-list
//
// Creates a real Instacart "shopping list page" from the user's grocery list via
// the Instacart Developer Platform API (Create shopping list page):
//   POST {base}/idp/v1/products/products_link
// The Instacart API key is kept server-side here and never shipped to the browser.
// Returns the products_link_url the user opens to pick a store and check out.
//
// Deploy:
//   supabase functions deploy instacart-list
//   supabase secrets set INSTACART_API_KEY=keys.xxxxx        (dev) or your prod key
//   # Optional, defaults to production:
//   supabase secrets set INSTACART_API_BASE=https://connect.dev.instacart.tools
//
// Docs: https://docs.instacart.com/developer_platform_api/api/products/create_shopping_list_page

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const DEFAULT_BASE = 'https://connect.instacart.com';

type IncomingItem = { name?: unknown; quantity?: unknown; unit?: unknown; displayText?: unknown };
type LineItem = { name: string; quantity: number; unit?: string; display_text?: string };

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  const apiKey = Deno.env.get('INSTACART_API_KEY');
  if (!apiKey) {
    return json({ error: 'INSTACART_API_KEY is not configured.' }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const rawItems = Array.isArray(body.items) ? (body.items as IncomingItem[]) : [];
  const lineItems: LineItem[] = rawItems.flatMap((item) => {
    const name = typeof item?.name === 'string' ? item.name.trim() : '';
    if (!name) return [];
    const lineItem: LineItem = {
      name,
      quantity: typeof item.quantity === 'number' && item.quantity > 0 ? item.quantity : 1,
    };
    if (typeof item.unit === 'string' && item.unit) lineItem.unit = item.unit;
    if (typeof item.displayText === 'string' && item.displayText) lineItem.display_text = item.displayText;
    return [lineItem];
  });

  if (lineItems.length === 0) {
    return json({ error: 'No items provided.' }, 400);
  }

  const base = (Deno.env.get('INSTACART_API_BASE') || DEFAULT_BASE).replace(/\/+$/, '');
  const linkbackUrl = typeof body.linkbackUrl === 'string' && body.linkbackUrl ? body.linkbackUrl : 'https://what-the-fridge-copy.vercel.app';

  const payload = {
    title: typeof body.title === 'string' && body.title ? body.title : 'What The Fridge — Shopping List',
    link_type: 'shopping_list',
    expires_in: 7,
    line_items: lineItems,
    landing_page_configuration: {
      partner_linkback_url: linkbackUrl,
      enable_pantry_items: true,
    },
  };

  try {
    const response = await fetch(`${base}/idp/v1/products/products_link`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error('instacart-list failed:', response.status, JSON.stringify(data));
      return json({ error: 'Instacart request failed.', status: response.status, details: data }, 502);
    }

    const url = (data as { products_link_url?: unknown }).products_link_url;
    if (typeof url !== 'string' || !url) {
      return json({ error: 'Instacart did not return a products_link_url.' }, 502);
    }

    return json({ url });
  } catch (error) {
    console.error('instacart-list error:', error);
    return json({ error: 'Instacart request failed.' }, 502);
  }
});

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
