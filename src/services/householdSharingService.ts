export async function inviteHouseholdMember(email: string): Promise<{ ok: true; email: string }> {
  // Future integration points:
  // - Supabase or Firebase household membership table.
  // - Permission levels for shoppers, cooks, and read-only members.
  // - Private-by-default receipt and spending settings.
  await wait(500);
  return { ok: true, email };
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
