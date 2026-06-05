export async function exportUserData(): Promise<{ ok: true; filename: string }> {
  // Future integration points:
  // - Structured data export from Supabase or Firebase.
  // - Receipt history, normalized items, household settings, and recommendations.
  await wait(700);
  return { ok: true, filename: 'what-the-fridge-export.json' };
}

export async function deleteUserData(): Promise<{ ok: true }> {
  // Future integration points:
  // - Delete account and all private grocery memory.
  // - Delete storage objects for receipt, fridge, and pantry images.
  // - Retain only legally required payment records if needed.
  await wait(700);
  return { ok: true };
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
