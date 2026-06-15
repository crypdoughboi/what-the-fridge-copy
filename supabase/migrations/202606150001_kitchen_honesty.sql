alter table public.user_ingredients
add column if not exists inventory_state text,
add column if not exists confidence_score numeric,
add column if not exists storage_location text,
add column if not exists last_confirmed_at timestamp with time zone,
add column if not exists consumed_at timestamp with time zone;

alter table public.grocery_items
add column if not exists quantity_label text,
add column if not exists substitution_note text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'user_ingredients_inventory_state_check'
      and conrelid = 'public.user_ingredients'::regclass
  ) then
    alter table public.user_ingredients
    add constraint user_ingredients_inventory_state_check check (
      inventory_state is null or inventory_state in (
        'probably_have',
        'confirmed_have',
        'running_low',
        'use_soon',
        'probably_gone',
        'gone'
      )
    );
  end if;
end $$;

alter table public.user_item_events
drop constraint if exists user_item_events_type_check;

alter table public.user_item_events
add constraint user_item_events_type_check check (
  event_type in (
    'added_to_list',
    'owned_observed',
    'duplicate_attempt',
    'related_duplicate_attempt',
    'moved_to_have',
    'marked_bought',
    'removed',
    'capture_parsed',
    'inventory_confirmed',
    'marked_gone',
    'consumption_inferred'
  )
);
