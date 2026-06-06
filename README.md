# What The Fridge

What The Fridge, shorthand WTF, is a mobile-first grocery and dinner prototype.

The promise is simple: dinner from what you already bought. The app turns receipts, fridge and pantry checks, old lists, and household behavior into a smart grocery list, chef-guided meal ideas, overbuy warnings, and grocery spending insights.

## Run It

```bash
npm install
npm run dev
```

Then open the local URL from Vite. The app is designed around a 390px mobile viewport. On desktop, it stays centered in a phone-like shell.

## What Is Built

- Short onboarding for household size, stores, diet preferences, avoid list, cooking style, and weekly goal.
- Account creation screen wired for Supabase Apple ID, Gmail, and email magic-link sign-up.
- Local per-user personalization storage for profile, purchase and list history, list behavior, saved meals, cooked meals, and recommendations.
- Home screen focused on building the list with receipt and fridge-photo actions plus a clear path to Meals.
- Four-tab navigation: Home, List, Meals, Spend. Scan is folded into Home/List as an add method.
- Smart grocery list with live checkoff circles, Buy Now, Maybe Buy, Probably Already Have, meal unlocks, and overbuy warnings.
- Receipt scanner flow with real `input type="file"` controls, `accept="image/*"`, and camera capture support.
- Receipt OCR loading, extracted item review, edit/remove/not-grocery actions, and confirmation.
- Fridge and pantry scanner flow with file upload, camera capture, mock recognition, confidence groups, and list update.
- Old grocery list import from pasted text.
- Chef-guided meal screen with mode switching and meal detail pages.
- Grocery spend dashboard with store and category charts.
- Settings/profile with privacy controls, receipt history, data export/delete placeholders, subscription placeholder, and Friend Rebuys preview.
- Web-native WTF fridge logo treatment based on the provided blue fridge mark, used in the app header, auth screen, and PWA icon.

All data is local mock data. No backend is required.

## App Structure

```text
src/
  components/   Reusable UI pieces
  data/         Realistic mock purchase and list history, receipts, scans, meals, spend
  hooks/        Local app state and user actions
  screens/      Product screens and flows
  services/     API-shaped stubs for future integrations
  types/        Shared TypeScript types
  utils/        Grocery logic, normalization, list building, spend logic
```

## Where To Plug In Real Services

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

Current personalization is stored per Supabase user in browser storage. To sync across devices, add a Supabase table for user app state and move the existing local persistence into that table.

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

Auth is stubbed in `src/services/authService.ts`.

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
