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
- Receipt scanner flow with real `input type="file"` controls, `accept="image/*"`, and camera capture support.
- Receipt OCR loading, extracted item review, edit/remove/not-grocery actions, and confirmation.
- Fridge and pantry scanner flow with file upload, camera capture, mock recognition, confidence groups, and list update.
- Scan tab with receipt scan, fridge or pantry scan, and manual item entry into Already Have or Need to Buy.
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
```

Core tables:

- `meal_templates`: global reusable recipe templates.
- `meal_ingredients`: structured ingredients for each meal template.
- `meal_recipe_details`: servings, times, equipment, notes, and recipe metadata.
- `meal_recipe_steps`: numbered recipe instructions for each meal.
- `user_meals`: user-specific saved, planned, made, and skipped meal states.
- `user_ingredients`: ingredients the user already has.
- `grocery_items`: ingredients the user needs to buy.

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

## Where To Plug In Real Services

Receipt OCR lives in `src/services/receiptOcrService.ts`.

Good future options:
- Google Vision
- AWS Textract
- Azure Form Recognizer
- OpenAI vision
- Dedicated receipt parser API

Fridge and pantry recognition lives in `src/services/fridgeVisionService.ts`.

Good future options:
- OpenAI vision
- Image classification
- Structured JSON output with confidence labels
- Household purchase and list history for conservative results

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
