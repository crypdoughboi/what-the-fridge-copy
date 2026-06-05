import { AuthProvider, UserAccount } from '../types';

export async function signInWithAppleId(): Promise<UserAccount> {
  // Future integration points:
  // - Apple sign-in for iPhone and web.
  // - Private relay email handling.
  // - Account linking if the same user later signs in with Gmail.
  await wait(650);
  return createMockAccount('apple', 'Josh', 'josh.private@icloud.example');
}

export async function signInWithGmail(): Promise<UserAccount> {
  // Future integration points:
  // - Google OAuth with Gmail identity.
  // - Profile image and household invite matching.
  // - Account linking if the same email already exists.
  await wait(650);
  return createMockAccount('gmail', 'Josh', 'josh.demo@gmail.example');
}

export async function signInWithEmailMagicLink(email: string): Promise<UserAccount> {
  // Future integration points:
  // - Supabase Auth or Firebase Auth.
  // - Email magic link for web.
  // - Apple sign-in later for iPhone.
  await wait(500);
  return createMockAccount('email', nameFromEmail(email), email);
}

export async function signOut(): Promise<{ ok: true }> {
  await wait(300);
  return { ok: true };
}

function createMockAccount(provider: AuthProvider, name: string, email: string): UserAccount {
  return {
    id: `wtf-${provider}-${email.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name,
    email,
    provider,
    createdAt: new Date().toISOString(),
  };
}

function nameFromEmail(email: string): string {
  const local = email.split('@')[0] || 'You';
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
