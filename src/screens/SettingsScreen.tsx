import { useState } from 'react';
import { ArrowLeft, Download, LogOut, Shield, Trash2, UserPlus } from 'lucide-react';
import { OnboardingProfile, UserAccount } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Pill } from '../components/Pill';
import { SectionHeader } from '../components/SectionHeader';
import { exportUserData, deleteUserData } from '../services/dataPrivacyService';
import { inviteHouseholdMember } from '../services/householdSharingService';
import { startSubscriptionCheckout } from '../services/subscriptionPaymentService';

export function SettingsScreen({
  account,
  profile,
  profileConfigured,
  receiptCount,
  onBack,
  onToast,
  onSignOut,
}: {
  account: UserAccount;
  profile: OnboardingProfile;
  profileConfigured: boolean;
  receiptCount: number;
  onBack: () => void;
  onToast: (message: string) => void;
  onSignOut: () => Promise<void>;
}) {
  const [inviteEmail, setInviteEmail] = useState('');
  const [busy, setBusy] = useState<string | null>(null);

  async function invite() {
    if (!inviteEmail.trim()) return;
    setBusy('invite');
    await inviteHouseholdMember(inviteEmail);
    setInviteEmail('');
    setBusy(null);
    onToast('Household invite staged. Nobody gets your snack spend.');
  }

  async function exportData() {
    setBusy('export');
    const result = await exportUserData();
    setBusy(null);
    onToast(`Export ready: ${result.filename}`);
  }

  async function deleteData() {
    setBusy('delete');
    await deleteUserData();
    setBusy(null);
    onToast('Delete flow mocked. Real version removes your private data.');
  }

  async function subscribe() {
    setBusy('subscribe');
    await startSubscriptionCheckout();
    setBusy(null);
    onToast('Subscription checkout placeholder opened.');
  }

  const providerLabel =
    account.provider === 'apple' ? 'Apple ID' : account.provider === 'gmail' ? 'Gmail' : account.provider === 'guest' ? 'guest mode' : 'email';

  return (
    <main className="screen-enter space-y-8">
      <button className="inline-flex min-h-10 items-center gap-2 rounded-md text-[14px] font-semibold text-ink-soft" onClick={onBack}>
        <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
        Back
      </button>
      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Profile</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Receipts are private by default.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">You choose what to share. Spending totals never leave the kitchen.</p>
      </section>

      <Card>
        <SectionHeader eyebrow="Account" title={account.name} />
        <div className="mt-3 rounded-md bg-paper p-3">
          <p className="text-[15px] font-semibold text-ink">{account.email}</p>
          <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Signed in with {providerLabel}</p>
          {account.provider !== 'guest' && (
            <p className="mt-2 text-[13px] font-medium text-muted">Member since {formatMemberSince(account.createdAt)}</p>
          )}
        </div>
        <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink-soft">
          {account.provider === 'guest'
            ? 'Guest sessions are temporary. Create an account when you want WTF to save your list, meals, and scans.'
            : 'Receipts, usuals, saved meals, and list behavior are saved to this profile on this device.'}
        </p>
      </Card>

      {profileConfigured ? (
        <>
          <Card>
            <SectionHeader eyebrow="Household" title={profile.householdSize} />
            <p className="mt-2 text-[14px] font-medium text-ink-soft">Main stores: {profile.stores.length ? profile.stores.join(', ') : 'None selected yet'}.</p>
            <div className="mt-4 flex gap-2">
              <Input
                value={inviteEmail}
                onChange={(event) => setInviteEmail(event.target.value)}
                placeholder="person@example.com"
                className="min-w-0 flex-1"
              />
              <Button className="px-3" icon={<UserPlus className={`h-5 w-5 ${busy === 'invite' ? 'animate-pulse' : ''}`} strokeWidth={1.75} />} onClick={invite}>
                Invite
              </Button>
            </div>
          </Card>

          <Card>
            <SectionHeader eyebrow="Food" title="Preferences" />
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.dietaryPreferences.map((preference) => (
                <Pill key={preference} tone="green">
                  {preference}
                </Pill>
              ))}
              <Pill>{profile.cookingStyle}</Pill>
              <Pill>{profile.weeklyGoal}</Pill>
            </div>
            {profile.foodsToAvoid && <p className="mt-3 text-[14px] font-semibold text-ink-soft">Avoid: {profile.foodsToAvoid}</p>}
          </Card>
        </>
      ) : (
        <Card>
          <SectionHeader eyebrow="Preferences" title="No preferences saved yet" />
          <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink-soft">
            Household, store, and food preferences will appear here after you add them.
          </p>
        </Card>
      )}

      <Card>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <Shield className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Privacy controls</h2>
            <div className="mt-3 space-y-2 text-[14px] font-medium leading-relaxed text-ink-soft">
              <p>Receipts are private by default.</p>
              <p>You choose what to share.</p>
              <p>Spending totals are never shared.</p>
              <p>Friend recommendations only use items you mark as recommended.</p>
              <p>Delete your data anytime.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <SectionHeader eyebrow="History" title="Receipt history" />
        <div className="mt-3 rounded-md bg-paper p-3">
          <p className="text-[15px] font-semibold text-ink">
            {receiptCount === 0 ? 'No receipts scanned yet' : `${receiptCount} ${receiptCount === 1 ? 'receipt' : 'receipts'} scanned`}
          </p>
          <p className="mt-2 text-[13px] font-medium leading-relaxed text-muted">
            {receiptCount === 0
              ? 'Your receipt activity will appear here after your first scan.'
              : 'This count reflects receipts saved to your profile on this device.'}
          </p>
        </div>
      </Card>

      <Card>
        <SectionHeader eyebrow="Data" title="Data and subscription" />
        <div className="mt-4 grid gap-2">
          <Button variant="secondary" icon={<Download className="h-5 w-5" strokeWidth={1.75} />} onClick={exportData}>
            {busy === 'export' ? 'Preparing export' : 'Export data'}
          </Button>
          <Button variant="secondary" onClick={subscribe}>
            {busy === 'subscribe' ? 'Opening checkout' : 'Subscription placeholder'}
          </Button>
          <Button variant="danger" icon={<Trash2 className="h-5 w-5" strokeWidth={1.75} />} onClick={deleteData}>
            {busy === 'delete' ? 'Deleting data' : 'Delete data'}
          </Button>
        </div>
        <p className="mt-4 text-[13px] font-medium text-muted">App version 0.1.0. Built for mobile web now, ready for an iPhone wrapper later.</p>
      </Card>

      <Button variant="ghost" full icon={<LogOut className="h-5 w-5" strokeWidth={1.75} />} onClick={onSignOut}>
        Sign out
      </Button>
    </main>
  );
}

function formatMemberSince(createdAt: string): string {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) return 'your first sign-in';
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
}
