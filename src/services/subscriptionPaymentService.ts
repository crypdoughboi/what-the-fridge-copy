export async function startSubscriptionCheckout(): Promise<{ ok: true; provider: 'mock' }> {
  // Future integration points:
  // - Stripe Checkout for web.
  // - RevenueCat for the mobile app later.
  // - Entitlements for shared households, advanced scan history, and export.
  await wait(600);
  return { ok: true, provider: 'mock' };
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
