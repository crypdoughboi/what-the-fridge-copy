alter table public.meal_ingredients
add column if not exists display_quantity text,
add column if not exists prep text,
add column if not exists importance text;

create table if not exists public.meal_recipe_details (
  id uuid primary key default gen_random_uuid(),
  meal_id uuid not null references public.meal_templates(id) on delete cascade,
  servings integer not null default 2,
  active_time_minutes integer,
  total_time_minutes integer,
  equipment text[] not null default '{}',
  prep_note text,
  chef_note text,
  why_it_works text,
  leftovers_note text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (meal_id)
);

create table if not exists public.meal_recipe_steps (
  id uuid primary key default gen_random_uuid(),
  meal_id uuid not null references public.meal_templates(id) on delete cascade,
  step_number integer not null,
  title text not null,
  body text not null,
  time_minutes integer,
  temperature text,
  visual_cue text,
  component text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (meal_id, step_number)
);

create index if not exists meal_recipe_details_meal_id_idx on public.meal_recipe_details(meal_id);
create index if not exists meal_recipe_steps_meal_id_idx on public.meal_recipe_steps(meal_id);
create index if not exists meal_recipe_steps_meal_order_idx on public.meal_recipe_steps(meal_id, step_number);

drop trigger if exists set_meal_recipe_details_updated_at on public.meal_recipe_details;
create trigger set_meal_recipe_details_updated_at
before update on public.meal_recipe_details
for each row execute function public.set_updated_at();

drop trigger if exists set_meal_recipe_steps_updated_at on public.meal_recipe_steps;
create trigger set_meal_recipe_steps_updated_at
before update on public.meal_recipe_steps
for each row execute function public.set_updated_at();

alter table public.meal_recipe_details enable row level security;
alter table public.meal_recipe_steps enable row level security;

drop policy if exists "Meal recipe details are readable" on public.meal_recipe_details;
create policy "Meal recipe details are readable"
on public.meal_recipe_details for select
using (
  exists (
    select 1 from public.meal_templates
    where meal_templates.id = meal_recipe_details.meal_id
      and meal_templates.status = 'active'
  )
);

drop policy if exists "Meal recipe steps are readable" on public.meal_recipe_steps;
create policy "Meal recipe steps are readable"
on public.meal_recipe_steps for select
using (
  exists (
    select 1 from public.meal_templates
    where meal_templates.id = meal_recipe_steps.meal_id
      and meal_templates.status = 'active'
  )
);
