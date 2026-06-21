import { isSupabaseConfigured, supabase } from './supabaseClient';

/**
 * Create a real Instacart shopping list page from the user's list.
 *
 * Calls the `instacart-list` Supabase Edge Function, which hits the Instacart
 * Developer Platform "Create shopping list page" API server-side (keeping the
 * API key off the client) and returns the `products_link_url`. The user opens
 * that URL to pick a store, add the items to their cart, and check out.
 *
 * Returns the URL, or null when Supabase/the Instacart key isn't configured or
 * the call fails — callers fall back to opening instacart.com.
 */
export async function createInstacartListUrl(items: Array<{ name: string }>, title?: string): Promise<string | null> {
  const cleaned = items.map((item) => ({ name: item.name })).filter((item) => item.name.trim().length > 0);
  if (!isSupabaseConfigured || !supabase || cleaned.length === 0) return null;

  try {
    const { data, error } = await supabase.functions.invoke('instacart-list', {
      body: { items: cleaned, title: title || 'What The Fridge — Shopping List' },
    });
    if (error) throw error;
    const url = (data as { url?: string } | null)?.url;
    return typeof url === 'string' && url ? url : null;
  } catch (error) {
    console.error('Instacart list creation failed; falling back.', error);
    return null;
  }
}
