export async function recommendItemToFriends(itemName: string): Promise<{ ok: true; itemName: string }> {
  // Future integration points:
  // - Friend graph with explicit opt-in.
  // - Only items the user marks "Recommend" can be shared.
  // - Spending totals and exact purchase history are never shared.
  await wait(350);
  return { ok: true, itemName };
}

export async function keepRecommendationPrivate(itemName: string): Promise<{ ok: true; itemName: string }> {
  await wait(250);
  return { ok: true, itemName };
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
