create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.meal_templates (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text,
  description text,
  dinner_lanes text[] not null default '{}',
  cuisine_influence text[] not null default '{}',
  format text,
  time_minutes integer,
  effort text,
  servings integer,
  tags text[] not null default '{}',
  chef_note text,
  why_it_works text,
  status text not null default 'active',
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  constraint meal_templates_status_check check (status in ('active', 'inactive', 'draft'))
);

create table if not exists public.meal_ingredients (
  id uuid primary key default gen_random_uuid(),
  meal_id uuid not null references public.meal_templates(id) on delete cascade,
  raw_name text not null,
  canonical_name text not null,
  quantity numeric,
  unit text,
  section text,
  is_optional boolean not null default false,
  is_pantry boolean not null default false,
  grocery_category text,
  sort_order integer,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (meal_id, canonical_name, section)
);

create table if not exists public.user_meals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  meal_id uuid not null references public.meal_templates(id) on delete cascade,
  status text not null,
  planned_for_date date,
  saved_at timestamp with time zone,
  planned_at timestamp with time zone,
  made_at timestamp with time zone,
  rating text,
  notes text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (user_id, meal_id, status),
  constraint user_meals_status_check check (status in ('saved', 'planned', 'made', 'skipped'))
);

create table if not exists public.user_ingredients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  canonical_name text not null,
  display_name text not null,
  quantity numeric,
  unit text,
  source text,
  expires_at date,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (user_id, canonical_name)
);

create table if not exists public.grocery_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  canonical_name text not null,
  display_name text not null,
  quantity numeric,
  unit text,
  status text not null default 'need',
  used_for_meal_ids uuid[] not null default '{}',
  grocery_category text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (user_id, canonical_name),
  constraint grocery_items_status_check check (status in ('need', 'bought', 'removed'))
);

create index if not exists meal_ingredients_meal_id_idx on public.meal_ingredients(meal_id);
create index if not exists meal_ingredients_canonical_name_idx on public.meal_ingredients(canonical_name);
create index if not exists user_meals_user_id_idx on public.user_meals(user_id);
create index if not exists user_meals_meal_id_idx on public.user_meals(meal_id);
create index if not exists user_ingredients_user_id_idx on public.user_ingredients(user_id);
create index if not exists grocery_items_user_id_idx on public.grocery_items(user_id);

drop trigger if exists set_meal_templates_updated_at on public.meal_templates;
create trigger set_meal_templates_updated_at
before update on public.meal_templates
for each row execute function public.set_updated_at();

drop trigger if exists set_meal_ingredients_updated_at on public.meal_ingredients;
create trigger set_meal_ingredients_updated_at
before update on public.meal_ingredients
for each row execute function public.set_updated_at();

drop trigger if exists set_user_meals_updated_at on public.user_meals;
create trigger set_user_meals_updated_at
before update on public.user_meals
for each row execute function public.set_updated_at();

drop trigger if exists set_user_ingredients_updated_at on public.user_ingredients;
create trigger set_user_ingredients_updated_at
before update on public.user_ingredients
for each row execute function public.set_updated_at();

drop trigger if exists set_grocery_items_updated_at on public.grocery_items;
create trigger set_grocery_items_updated_at
before update on public.grocery_items
for each row execute function public.set_updated_at();

alter table public.meal_templates enable row level security;
alter table public.meal_ingredients enable row level security;
alter table public.user_meals enable row level security;
alter table public.user_ingredients enable row level security;
alter table public.grocery_items enable row level security;

drop policy if exists "Meal templates are readable" on public.meal_templates;
create policy "Meal templates are readable"
on public.meal_templates for select
using (status = 'active');

drop policy if exists "Meal ingredients are readable" on public.meal_ingredients;
create policy "Meal ingredients are readable"
on public.meal_ingredients for select
using (
  exists (
    select 1 from public.meal_templates
    where meal_templates.id = meal_ingredients.meal_id
      and meal_templates.status = 'active'
  )
);

drop policy if exists "Users read own meals" on public.user_meals;
create policy "Users read own meals"
on public.user_meals for select
using (auth.uid() = user_id);

drop policy if exists "Users write own meals" on public.user_meals;
create policy "Users write own meals"
on public.user_meals for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users read own ingredients" on public.user_ingredients;
create policy "Users read own ingredients"
on public.user_ingredients for select
using (auth.uid() = user_id);

drop policy if exists "Users write own ingredients" on public.user_ingredients;
create policy "Users write own ingredients"
on public.user_ingredients for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users read own grocery items" on public.grocery_items;
create policy "Users read own grocery items"
on public.grocery_items for select
using (auth.uid() = user_id);

drop policy if exists "Users write own grocery items" on public.grocery_items;
create policy "Users write own grocery items"
on public.grocery_items for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
