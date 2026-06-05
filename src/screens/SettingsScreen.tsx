import { useState } from 'react';
import { ArrowLeft, Download, LogOut, Shield, Trash2, UserPlus } from 'lucide-react';
import { OnboardingProfile, UserAccount } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FriendRebuys } from '../components/FriendRebuys';
import { Pill } from '../components/Pill';
import { friendRebuys } from '../data/mockData';
import { exportUserData, deleteUserData } from '../services/dataPrivacyService';
import { inviteHouseholdMember } from '../services/householdSharingService';
import { startSubscriptionCheckout } from '../services/subscriptionPaymentService';

export function SettingsScreen({
  account,
  profile,
  recommendedItems,
  onBack,
  onRecommend,
  onKeepPrivate,
  onAddToList,
  onToast,
  onSignOut,
}: {
  account: UserAccount;
  profile: OnboardingProfile;
  recommendedItems: string[];
  onBack: () => void;
  onRecommend: (item: string) => void;
  onKeepPrivate: (item: string) => void;
  onAddToList: (item: string) => void;
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
    onToast('Delete flow mocked. Real version wipes private grocery memory.');
  }

  async function subscribe() {
    setBusy('subscribe');
    await startSubscriptionCheckout();
    setBusy(null);
    onToast('Subscription checkout placeholder opened.');
  }

  return (
    <main className="screen-enter space-y-5">
      <button className="inline-flex items-center gap-2 text-sm font-black text-steel" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      <section>
        <p className="text-[12px] font-black uppercase text-herb">Profile</p>
        <h1 className="mt-1 text-[32px] font-black leading-tight text-ink">Receipts are private by default.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">You choose what to share. Spending totals never leave the kitchen.</p>
      </section>

      <Card>
        <h2 className="text-xl font-black text-ink">Account</h2>
        <div className="mt-3 rounded-2xl bg-linen/72 p-3">
          <p className="text-[15px] font-black text-ink">{account.name}</p>
          <p className="mt-1 text-sm font-bold text-steel">{account.email}</p>
          <p className="mt-2 text-[11px] font-black uppercase text-herb">Signed in with {account.provider === 'apple' ? 'Apple ID' : account.provider === 'gmail' ? 'Gmail' : 'email'}</p>
        </div>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-steel">
          Receipts, usuals, saved meals, and list behavior are saved to this profile on this device.
        </p>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-ink">Household</h2>
        <p className="mt-2 text-sm font-semibold text-steel">{profile.householdSize}. Main stores: {profile.stores.join(', ')}.</p>
        <div className="mt-4 flex gap-2">
          <input
            value={inviteEmail}
            onChange={(event) => setInviteEmail(event.target.value)}
            placeholder="person@example.com"
            className="min-h-11 flex-1 rounded-2xl border border-ink/10 bg-white/86 px-4 text-sm font-semibold outline-none focus:border-herb"
          />
          <Button className="px-3" icon={<UserPlus className={`h-4 w-4 ${busy === 'invite' ? 'animate-pulse' : ''}`} />} onClick={invite}>
            Invite
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-ink">Food settings</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.dietaryPreferences.map((preference) => (
            <Pill key={preference} tone="green">
              {preference}
            </Pill>
          ))}
          <Pill tone="gold">{profile.cookingStyle}</Pill>
          <Pill tone="blue">{profile.weeklyGoal}</Pill>
        </div>
        {profile.foodsToAvoid && <p className="mt-3 text-sm font-bold text-steel">Avoid: {profile.foodsToAvoid}</p>}
      </Card>

      <Card>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-herb/12 text-herb">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-ink">Privacy controls</h2>
            <div className="mt-3 space-y-2 text-sm font-bold leading-relaxed text-steel">
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
        <h2 className="text-xl font-black text-ink">Receipt history</h2>
        <div className="mt-3 space-y-2">
          {["Trader Joe's - $86.42 - today", 'Whole Foods - $48.13 - 4 days ago', 'Target - $38.05 - 9 days ago'].map((receipt) => (
            <div key={receipt} className="rounded-2xl bg-linen/72 p-3 text-sm font-black text-ink">
              {receipt}
            </div>
          ))}
        </div>
      </Card>

      <FriendRebuys
        items={friendRebuys}
        recommendedItems={recommendedItems}
        onRecommend={onRecommend}
        onKeepPrivate={onKeepPrivate}
        onAddToList={onAddToList}
      />

      <Card>
        <h2 className="text-xl font-black text-ink">Data and subscription</h2>
        <div className="mt-4 grid gap-2">
          <Button variant="secondary" icon={<Download className="h-4 w-4" />} onClick={exportData}>
            {busy === 'export' ? 'Preparing export' : 'Export data'}
          </Button>
          <Button variant="secondary" onClick={subscribe}>
            {busy === 'subscribe' ? 'Opening checkout' : 'Subscription placeholder'}
          </Button>
          <Button variant="danger" icon={<Trash2 className="h-4 w-4" />} onClick={deleteData}>
            {busy === 'delete' ? 'Deleting data' : 'Delete data'}
          </Button>
        </div>
        <p className="mt-4 text-xs font-bold text-steel">App version 0.1.0. Built for mobile web now, ready for an iPhone wrapper later.</p>
      </Card>

      <Button variant="ghost" full icon={<LogOut className="h-4 w-4" />} onClick={onSignOut}>
        Sign out
      </Button>
    </main>
  );
}
