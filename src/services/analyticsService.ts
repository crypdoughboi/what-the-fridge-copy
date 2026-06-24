import { isSupabaseConfigured, supabase } from './supabaseClient';

/**
 * The product/growth analytics events the app tracks. Keep this list in sync with
 * the `analytics_events_name_check` constraint in the creator-growth migration.
 */
export type AnalyticsEventName =
  | 'app_opened'
  | 'meal_swipe_started'
  | 'meal_liked'
  | 'meal_saved'
  | 'grocery_items_added_from_meal'
  | 'grocery_list_opened'
  | 'referral_code_entered'
  | 'share_meal_card_clicked';

type AnalyticsContext = { userId?: string; referralCode?: string | null };

// Ambient context attached to every event: who the user is and which referral code
// (if any) attributes their activity. Set once from app state, read on each track().
let context: AnalyticsContext = {};

export function setAnalyticsContext(next: AnalyticsContext): void {
  context = { ...context, ...next };
}

/**
 * Record a product event. Fire-and-forget by design: analytics must never block or
 * break a user action. Always logs to the console in dev so events are easy to verify
 * locally, and inserts into Supabase `analytics_events` when configured.
 */
export function track(event: AnalyticsEventName, properties: Record<string, unknown> = {}): void {
  const referralCode = context.referralCode ?? null;

  if (import.meta.env.DEV) {
    console.info(`[analytics] ${event}`, { ...properties, referralCode, userId: context.userId ?? null });
  }

  if (!isSupabaseConfigured || !supabase) return;

  const row = {
    event_name: event,
    user_id: context.userId && isUuid(context.userId) ? context.userId : null,
    referral_code: referralCode,
    properties,
  };

  void supabase
    .from('analytics_events')
    .insert(row)
    .then(({ error }) => {
      if (error && !/analytics_events|does not exist/i.test(error.message)) {
        console.warn('Could not record analytics event', error.message);
      }
    });
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
