-- Creator-growth and viral-sharing schema.
--
-- Three tables plus one reporting view:
--   analytics_events  : raw product analytics, one row per tracked event.
--   referrals         : the FIRST referral code a user enters (never overwritten).
--   creators          : creator/campaign directory keyed by referral_code (admin-managed).
--   creator_attribution (view) : per-creator rollup for an admin to read.
--
-- The browser writes analytics_events and referrals with the publishable (anon) key,
-- so RLS allows inserts but keeps reads scoped to the owner. The creators table and
-- the creator_attribution view are admin-only (service role bypasses RLS).

-- 1. Analytics events ---------------------------------------------------------
create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  event_name text not null,
  referral_code text,
  properties jsonb not null default '{}'::jsonb,
  created_at timestamp with time zone not null default now(),
  constraint analytics_events_name_check check (
    event_name in (
      'app_opened',
      'meal_swipe_started',
      'meal_liked',
      'meal_saved',
      'grocery_items_added_from_meal',
      'grocery_list_opened',
      'referral_code_entered',
      'share_meal_card_clicked'
    )
  )
);

create index if not exists analytics_events_event_name_idx on public.analytics_events(event_name);
create index if not exists analytics_events_user_id_idx on public.analytics_events(user_id);
create index if not exists analytics_events_referral_code_idx on public.analytics_events(referral_code);
create index if not exists analytics_events_created_at_idx on public.analytics_events(created_at desc);

alter table public.analytics_events enable row level security;

drop policy if exists "Anyone can insert analytics events" on public.analytics_events;
create policy "Anyone can insert analytics events"
on public.analytics_events for insert
to anon, authenticated
with check (true);

drop policy if exists "Users read own analytics events" on public.analytics_events;
create policy "Users read own analytics events"
on public.analytics_events for select
to authenticated
using (auth.uid() = user_id);

-- 2. Referrals ----------------------------------------------------------------
-- One row per user. The unique constraint on user_id plus an insert that ignores
-- conflicts is what guarantees the first code entered is the one that sticks.
create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique,
  referral_code text not null,
  created_at timestamp with time zone not null default now()
);

create index if not exists referrals_referral_code_idx on public.referrals(referral_code);

alter table public.referrals enable row level security;

drop policy if exists "Users manage own referral" on public.referrals;
create policy "Users manage own referral"
on public.referrals for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- 3. Creators (admin-managed directory) --------------------------------------
create table if not exists public.creators (
  id uuid primary key default gen_random_uuid(),
  creator_name text not null,
  platform text,
  referral_code text not null unique,
  campaign text,
  created_at timestamp with time zone not null default now()
);

create index if not exists creators_referral_code_idx on public.creators(referral_code);

-- RLS on, no policies: only the service role (admin) can read or write.
alter table public.creators enable row level security;

-- 4. Creator attribution rollup (admin / service-role read) -------------------
create or replace view public.creator_attribution as
select
  c.creator_name,
  c.platform,
  c.referral_code,
  c.campaign,
  c.created_at,
  coalesce(s.signup_count, 0) as signup_count,
  coalesce(m.first_saved_meal_count, 0) as first_saved_meal_count,
  coalesce(g.grocery_add_count, 0) as grocery_add_count
from public.creators c
left join (
  select referral_code, count(distinct user_id) as signup_count
  from public.referrals
  group by referral_code
) s on s.referral_code = c.referral_code
left join (
  select referral_code, count(distinct user_id) as first_saved_meal_count
  from public.analytics_events
  where event_name = 'meal_saved' and referral_code is not null
  group by referral_code
) m on m.referral_code = c.referral_code
left join (
  select referral_code, count(*) as grocery_add_count
  from public.analytics_events
  where event_name = 'grocery_items_added_from_meal' and referral_code is not null
  group by referral_code
) g on g.referral_code = c.referral_code;
