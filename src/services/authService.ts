import { User } from '@supabase/supabase-js';
import { AuthProvider, UserAccount } from '../types';
import { getAuthRedirectUrl, isSupabaseConfigured, supabase } from './supabaseClient';

export async function signInWithGmail(): Promise<void> {
  const client = getSupabaseClient();
  const { error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getAuthRedirectUrl(),
      queryParams: {
        prompt: 'select_account',
      },
    },
  });
  if (error) throw error;
}

export async function signInWithEmailMagicLink(email: string): Promise<void> {
  const client = getSupabaseClient();
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: getAuthRedirectUrl(),
      shouldCreateUser: true,
    },
  });
  if (error) throw error;
}

export async function getCurrentUserAccount(): Promise<UserAccount | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  return userToAccount(data.user);
}

export function listenForAuthChanges(onChange: (account: UserAccount | null) => void): () => void {
  if (!isSupabaseConfigured || !supabase) return () => undefined;
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    onChange(session?.user ? userToAccount(session.user) : null);
  });
  return () => data.subscription.unsubscribe();
}

export async function signOut(): Promise<void> {
  const client = getSupabaseClient();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

function userToAccount(user: User): UserAccount {
  const provider = providerFromUser(user);
  const metadata = user.user_metadata ?? {};
  const name =
    stringValue(metadata.full_name) ||
    stringValue(metadata.name) ||
    stringValue(metadata.given_name) ||
    nameFromEmail(user.email ?? '') ||
    'WTF user';

  return {
    id: user.id,
    name,
    email: user.email ?? 'private email',
    provider,
    createdAt: user.created_at ?? new Date().toISOString(),
  };
}

function providerFromUser(user: User): AuthProvider {
  const provider = user.app_metadata?.provider;
  if (provider === 'google') return 'gmail';
  if (provider === 'apple') return 'apple';
  return 'email';
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function nameFromEmail(email: string): string {
  const local = email.split('@')[0] || '';
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function ensureSupabaseConfigured(): void {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in Vercel.');
  }
}

function getSupabaseClient() {
  ensureSupabaseConfigured();
  if (!supabase) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in Vercel.');
  }
  return supabase;
}
