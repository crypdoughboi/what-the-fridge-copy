alter table public.grocery_items
add column if not exists first_added_to_list_at timestamp with time zone,
add column if not exists last_added_to_list_at timestamp with time zone,
add column if not exists added_source text;

alter table public.user_ingredients
add column if not exists first_observed_at timestamp with time zone,
add column if not exists last_observed_at timestamp with time zone,
add column if not exists observed_source text;

update public.grocery_items
set
  first_added_to_list_at = coalesce(first_added_to_list_at, created_at),
  last_added_to_list_at = coalesce(last_added_to_list_at, updated_at),
  added_source = coalesce(added_source, 'existing')
where first_added_to_list_at is null
   or last_added_to_list_at is null
   or added_source is null;

update public.user_ingredients
set
  first_observed_at = coalesce(first_observed_at, created_at),
  last_observed_at = coalesce(last_observed_at, updated_at),
  observed_source = coalesce(observed_source, source, 'existing')
where first_observed_at is null
   or last_observed_at is null
   or observed_source is null;

create table if not exists public.user_item_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  canonical_name text not null,
  display_name text not null,
  event_type text not null,
  source text,
  related_canonical_name text,
  related_display_name text,
  occurred_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null default now(),
  constraint user_item_events_type_check check (
    event_type in (
      'added_to_list',
      'owned_observed',
      'duplicate_attempt',
      'related_duplicate_attempt',
      'moved_to_have',
      'marked_bought',
      'removed'
    )
  )
);

create index if not exists user_item_events_user_id_idx on public.user_item_events(user_id);
create index if not exists user_item_events_canonical_name_idx on public.user_item_events(canonical_name);
create index if not exists user_item_events_occurred_at_idx on public.user_item_events(user_id, occurred_at desc);

alter table public.user_item_events enable row level security;

drop policy if exists "Users read own item events" on public.user_item_events;
create policy "Users read own item events"
on public.user_item_events for select
using (auth.uid() = user_id);

drop policy if exists "Users write own item events" on public.user_item_events;
create policy "Users write own item events"
on public.user_item_events for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
