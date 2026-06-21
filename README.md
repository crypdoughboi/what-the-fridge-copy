# What The Fridge

What The Fridge, shorthand WTF, is a mobile-first grocery and dinner prototype.

The promise is simple: meals can create the list, and the list can improve meals. The app turns meal choices, receipts, fridge and pantry checks, and household behavior into a smart grocery list and chef-guided dinner ideas.

## Run It

```bash
npm install
npm run dev
```

Then open the local URL from Vite. The app is designed around a 390px mobile viewport. On desktop, it stays centered in a phone-like shell.

## What Is Built

- Short onboarding for household size, stores, diet preferences, avoid list, cooking style, and weekly goal.
- Account creation screen wired for Supabase Apple ID, Gmail, and email magic-link sign-up.
- Supabase-backed meal templates, user meal states, user ingredients, and grocery items, with local fallback for development and guest mode.
- Home screen focused on the main command: WTF should I make?, with planned meals, list, and scan previews.
- Four-tab navigation: Home, List, Meals, Scan. Spend is kept out of primary navigation for now.
- Meals flow with dinner-lane picker, one-at-a-time meal ideas, Save, Skip, Make this week, ingredient review, This Week, Saved, and Made Before states.
- Smart grocery list with live checkoff circles, Need to Buy, Already Have, ingredient deduping, and Used For meal metadata.
- Receipt scanner flow with file upload, a live in-app camera viewfinder (`getUserMedia`), and Claude vision OCR.
- Receipt OCR loading, extracted item review, edit/remove/not-grocery actions, and confirmation.
- Fridge and pantry scanner flow with file upload, a live in-app camera viewfinder (`getUserMedia`) for scanning, mock recognition, confidence groups, and list update.
- Import recipe flow: upload a screenshot or take a photo of any recipe, Claude vision extracts the title, ingredients, and steps, then a review screen lets the user mark each ingredient Need to Buy, Already Have, or Skip before adding the missing ones to the list.
- Shopping delivery comparison: turn the Need to Buy list into a simple side-by-side price estimate across local curbside pickup, Instacart, DoorDash, and Uber Eats, sorted cheapest-first with delivery and service fees and an estimated ETA, then hand off to the chosen service.
- Scan tab with receipt scan, fridge or pantry scan, recipe import, and manual item entry into Already Have or Need to Buy.
- Settings/profile with privacy controls, receipt history, data export/delete placeholders, subscription placeholder, and Friend Rebuys preview.
- Web-native WTF fridge logo treatment based on the provided blue fridge mark, used in the app header, auth screen, and PWA icon.

The app can run in local fallback mode without a backend, but the meal library and signed-in user meal/list state are designed to use Supabase as the source of truth.

## App Structure

```text
src/
  components/   Reusable UI pieces
  data/         Realistic mock purchase history and the seeded meal template library
  hooks/        Local app state and user actions
  screens/      Product screens and flows
  services/     API-shaped stubs for future integrations
  types/        Shared TypeScript types
  utils/        Grocery logic, normalization, list building, spend logic
```

## Real Auth Setup

This build uses Supabase Auth for account creation and sign-in.

Required Vercel environment variables:

```text
VITE_SUPABASE_URL=https://bviwecxzrvlfnojhakim.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your Supabase publishable key
```

Local development can use `.env.local`. Do not commit `.env.local`.

Supabase configuration:

- `Authentication > URL Configuration`
- Site URL: your Vercel URL
- Redirect URLs:
  - `https://what-the-fridge-theta.vercel.app`
  - `https://what-the-fridge-theta.vercel.app/auth/callback`
  - `http://localhost:5173`
  - `http://localhost:5173/auth/callback`

Auth providers:

- Email magic links work through Supabase Email provider.
- Gmail uses Supabase Google OAuth.
- Apple uses Supabase Apple OAuth, but requires Apple Developer setup and a valid Apple client secret JWT.

The app includes `vercel.json` so `/auth/callback` loads the Vite SPA after OAuth or email magic-link redirects.

## Supabase Meal And List Data

The schema lives in:

```text
supabase/migrations/202606070001_meal_templates_user_state.sql
supabase/migrations/202606070002_meal_recipe_details.sql
supabase/migrations/202606070003_item_add_tracking.sql
```

Core tables:

- `meal_templates`: global reusable recipe templates.
- `meal_ingredients`: structured ingredients for each meal template.
- `meal_recipe_details`: servings, times, equipment, notes, and recipe metadata.
- `meal_recipe_steps`: numbered recipe instructions for each meal.
- `user_meals`: user-specific saved, planned, made, and skipped meal states.
- `user_ingredients`: ingredients the user already has.
- `grocery_items`: ingredients the user needs to buy.
- `user_item_events`: timestamped item events, including true list adds, duplicate attempts, fridge observations, receipt observations, bought, moved, and removed events.

Apply the migration in Supabase SQL Editor, or with Supabase CLI if your project is linked.

Seed the 100-meal starter library:

```bash
SUPABASE_URL=https://your-project.supabase.co \
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key \
npm run seed:meals
```

Do not expose the service-role key in Vercel or in the browser. It is only for local/admin seeding.

The seed data lives in `src/data/seedMealTemplates.ts`. It includes the 100-meal starter library, ingredient quantities/prep text, equipment, notes, and 7 to 8 meal-specific recipe steps per meal. The current app still maps those templates into UI-friendly `MealIdea` objects through `src/data/mealIdeas.ts`.

Runtime Supabase logic lives in `src/services/mealStateService.ts`.

Important behavior:

- Master recipes are never changed when a user saves, plans, makes, or skips a meal.
- Saved meals do not affect the grocery list.
- Planned meals open ingredient review and then add only missing non-optional ingredients.
- Grocery items dedupe by `canonical_name`.
- Marking an item Already Have moves it from `grocery_items` into `user_ingredients`.
- List-add dates are tracked separately from receipt/fridge observations so old grocery evidence does not pretend to be a fresh list add.

## Where To Plug In Real Services

Receipt OCR lives in `src/services/receiptOcrService.ts`.

Real OCR runs Claude vision in the `scan-receipt` Supabase Edge Function
(`supabase/functions/scan-receipt/index.ts`), which keeps the Anthropic API key
server-side and returns structured line items (rawName, price, isGrocery) plus
store/date/total via structured outputs. The client runs the returned line items
through the app's own `buildReceiptItems` so normalization/categorization matches
the rest of the app, and falls back to sample data when Supabase or the key isn't
configured.

To enable it (shares the `ANTHROPIC_API_KEY` secret with `scan-fridge`):
- `supabase functions deploy scan-receipt`
- `supabase secrets set ANTHROPIC_API_KEY=sk-ant-...`

Fridge and pantry recognition lives in `src/services/fridgeVisionService.ts`.

Real recognition runs Claude vision in the `scan-fridge` Supabase Edge Function
(`supabase/functions/scan-fridge/index.ts`), which keeps the Anthropic API key
server-side and returns structured items (name, category, store section,
confidence, note) via structured outputs. The client converts the captured photo
to base64 and calls the function with `supabase.functions.invoke`. When Supabase
or the key isn't configured, it falls back to sample data so the flow still works
in local/demo mode.

To enable it:
- `supabase functions deploy scan-fridge`
- `supabase secrets set ANTHROPIC_API_KEY=sk-ant-...`

Possible future improvements:
- Household purchase and list history for more conservative results
- Confidence threshold tuning per item category

Recipe import lives in `src/services/recipeImportService.ts`.

Real extraction runs Claude vision in the `import-recipe` Supabase Edge Function
(`supabase/functions/import-recipe/index.ts`), which keeps the Anthropic API key
server-side and returns the structured recipe (title, description, servings, total
time, ingredients with `name`/`displayQuantity`/`optional`/`pantryStaple`, and
steps) via structured outputs. The client maps each ingredient through the app's own
normalization/categorization and defaults pantry staples to Already Have and
garnishes to Skip. It falls back to a sample recipe when Supabase or the key isn't
configured so the flow still works in local/demo mode.

To enable it (shares the `ANTHROPIC_API_KEY` secret with `scan-receipt`/`scan-fridge`):
- `supabase functions deploy import-recipe`
- `supabase secrets set ANTHROPIC_API_KEY=sk-ant-...`

Shopping delivery comparison lives in `src/services/deliveryComparisonService.ts`.

This is a prototype price estimator: it builds a base in-store price per Need to Buy
item from the user's own purchase history (with a category-average fallback), then
applies each provider's typical item markup, delivery fee, and service fee to produce
a comparable estimated total and ETA per provider. Curbside/DoorDash/Uber Eats still
open the provider's site; a fuller version would call each provider's cart/quote API.

Instacart is a real integration. "Continue to Instacart" builds an actual Instacart
shopping list/cart from the user's Need to Buy items via the Instacart Developer
Platform "Create shopping list page" API (`POST /idp/v1/products/products_link`). The
API key is kept server-side in the `instacart-list` Supabase Edge Function
(`supabase/functions/instacart-list/index.ts`), which returns the `products_link_url`;
the client (`src/services/instacartService.ts`) opens it. When Supabase or the key
isn't configured, it falls back to opening instacart.com.

To enable it:
- `supabase functions deploy instacart-list`
- `supabase secrets set INSTACART_API_KEY=keys.xxxxx`  (dev key) or your production key
- Optional (defaults to production `https://connect.instacart.com`):
  `supabase secrets set INSTACART_API_BASE=https://connect.dev.instacart.tools`

Docs: https://docs.instacart.com/developer_platform_api/api/products/create_shopping_list_page

Meal generation lives in `src/services/mealGenerationService.ts`.

The real version should pass:
- chef rules
- user preference profile
- household purchase and list history
- dietary constraints
- recent receipt data
- fridge scan data

Smart list generation lives in `src/services/groceryListService.ts` and `src/utils/groceryLogic.ts`.

## Backend Later

Supabase or Firebase can plug in behind:
- purchase and list history
- receipt history
- household profiles
- scan image storage
- user action events
- friend recommendations

Auth lives in `src/services/authService.ts` and uses Supabase Auth when `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are configured.

Suggested path:
- Apple sign-in for web and iPhone
- Google OAuth for Gmail sign-up
- email magic link fallback
- account linking when the same user signs in with multiple providers

Payments are stubbed in `src/services/subscriptionPaymentService.ts`.

Suggested path:
- Stripe for web
- RevenueCat for the iPhone app later

Privacy actions are stubbed in `src/services/dataPrivacyService.ts`.

They are ready for:
- data export
- delete account
- private-by-default sharing

## iPhone App Path

The prototype is already shaped like a consumer mobile app. To convert later:

- Keep the screen/state boundaries.
- Move service stubs behind real API clients.
- Wrap the web app with Capacitor, or port screens to React Native.
- Preserve the same local action model for fast optimistic UI.
- Add native Apple sign-in, camera permissions, push reminders, and RevenueCat.

## Product Notes

WTF is not a generic recipe app or pantry inventory chore. It should stay focused on:

- what the user bought
- what they probably still have
- what they usually forget
- what not to buy again
- what to cook tonight

The app should feel premium, chef-y, kitchen-y, and a little sharp. The joke is the name. The product should do real work.
