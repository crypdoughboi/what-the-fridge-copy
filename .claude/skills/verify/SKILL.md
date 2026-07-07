---
name: verify
description: Build, launch, and drive What The Fridge to verify a change end-to-end in the running app.
---

# Verifying What The Fridge

Vite + React 19 mobile-shaped SPA. No test-id attributes — drive it by visible text.

## Build / launch

```bash
npm install                 # fresh containers start without node_modules
npm run typecheck && npm run lint && npm test   # CI parity (vitest)
npm run dev                 # http://localhost:5173, ready in <1s
```

## Drive (headless)

Use `playwright-core` (install as needed; don't commit it) with the pre-installed browser at
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome` and `--no-sandbox`. Run the script from
the repo root so ESM resolves `node_modules`. Viewport ~420x900 matches the phone shell.

## Flows worth driving

- **Sign in**: "Continue as guest" button on first load; no onboarding blocks the tabs.
- **Grocery list**: bottom-nav "List" → placeholder `Add lemon, rice, paper towels` input →
  comma-separated names, then "Add". Tap an item's *name text* to expand its action row
  ("Already have", "Swap it", "Remove").
- **Inventory**: mark list items "Already have" — that feeds `knownIngredientNames`.
- **Swipe deck**: "Meals" tab → "Use What I Have" tile → preferences screen (chips; the
  flexibility chip "I'm shopping anyway" yields the biggest deck) → CTA → deck. Buttons:
  Pass / Like / Cook this / Add to Grocery List. Exhausting the deck lands on "That's the stack".
- **Substitutions**: expand a Need-to-Buy item → "Swap it" → bottom sheet with ranked swaps.

## Gotchas

- Supabase/Anthropic are unconfigured locally, so every AI path (fridge scan, AI meal feed,
  AI substitutions) silently falls back to deterministic/sample data — that fallback *is* the
  local surface. "Get smarter ideas" should NOT appear without Supabase config.
- `[error] ERR_CONNECTION_RESET` in the console is the Google Fonts `@import` in
  `src/styles/index.css` being blocked by the sandbox proxy. Pre-existing; ignore.
- Guest state persists in localStorage; use a fresh browser context per run for a clean slate.
