import { isSupabaseConfigured, supabase } from './supabaseClient';

/**
 * Normalize a referral code to a stable, comparable form (trimmed, uppercase, no spaces).
 * Returns an empty string for anything that isn't usable.
 */
export function normalizeReferralCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, '');
}

/**
 * Persist the user's referral code, preserving the FIRST one entered. The unique
 * constraint on `user_id` plus `ignoreDuplicates` means a later code never overwrites
 * an existing attribution — clearing is the only way to change it. No-ops for guests
 * (no Supabase user id) and in local/demo mode.
 */
export async function saveReferralCode(userId: string | undefined, code: string): Promise<void> {
  const normalized = normalizeReferralCode(code);
  if (!userId || !isUuid(userId) || !normalized || !isSupabaseConfigured || !supabase) return;

  const { error } = await supabase
    .from('referrals')
    .upsert({ user_id: userId, referral_code: normalized }, { onConflict: 'user_id', ignoreDuplicates: true });
  if (error) console.warn('Could not save referral code', error.message);
}

/** Read the stored referral code for a user, or null when none/unavailable. */
export async function fetchReferralCode(userId: string | undefined): Promise<string | null> {
  if (!userId || !isUuid(userId) || !isSupabaseConfigured || !supabase) return null;

  const { data, error } = await supabase.from('referrals').select('referral_code').eq('user_id', userId).maybeSingle();
  if (error) return null;
  return data?.referral_code ?? null;
}

/** Remove the stored referral attribution so a new code can be entered. */
export async function clearReferralCode(userId: string | undefined): Promise<void> {
  if (!userId || !isUuid(userId) || !isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from('referrals').delete().eq('user_id', userId);
  if (error) console.warn('Could not clear referral code', error.message);
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
