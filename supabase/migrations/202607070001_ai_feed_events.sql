-- AI meal feed + smart substitutions: allow the new analytics event names.
-- Keep this list in sync with AnalyticsEventName in src/services/analyticsService.ts.

alter table public.analytics_events drop constraint if exists analytics_events_name_check;
alter table public.analytics_events add constraint analytics_events_name_check check (
  event_name in (
    'app_opened',
    'meal_swipe_started',
    'meal_liked',
    'meal_saved',
    'grocery_items_added_from_meal',
    'grocery_list_opened',
    'referral_code_entered',
    'share_meal_card_clicked',
    'ai_meals_requested',
    'ai_meals_merged',
    'substitution_opened',
    'substitution_applied'
  )
);
