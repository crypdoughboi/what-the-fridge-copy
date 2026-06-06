import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { OnboardingProfile, Store } from '../types';
import { defaultProfile } from '../data/mockData';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/BrandMark';
import { Textarea } from '../components/Input';

const householdSizes = ['Just me', 'Two people', 'Roommates', 'Family'];
const stores: Store[] = ["Trader Joe's", 'Whole Foods', 'Costco', 'Target', 'Walmart', 'Local grocery', 'Other'];
const dietaryPreferences = ['No restrictions', 'High protein', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Lower carb', 'Budget-friendly', 'Healthy-ish'];
const cookingStyles = ['Lazy but good', 'Healthy weeknight', 'High protein', 'Budget', 'Meal prep', 'Clean out the fridge', 'Date-night at home', 'Flexible'];
const weeklyGoals = ['Make dinner easier', 'Spend less', 'Waste less food', 'Eat healthier', 'Shop faster', 'Stop overbuying'];

export function OnboardingScreen({ onComplete }: { onComplete: (profile: OnboardingProfile) => void }) {
  const [profile, setProfile] = useState<OnboardingProfile>(defaultProfile);

  function toggleStore(store: Store) {
    setProfile((current) => ({
      ...current,
      stores: current.stores.includes(store) ? current.stores.filter((item) => item !== store) : [...current.stores, store],
    }));
  }

  function togglePreference(preference: string) {
    setProfile((current) => ({
      ...current,
      dietaryPreferences: current.dietaryPreferences.includes(preference)
        ? current.dietaryPreferences.filter((item) => item !== preference)
        : [...current.dietaryPreferences.filter((item) => item !== 'No restrictions'), preference],
    }));
  }

  return (
    <main className="screen-enter app-scroll pb-8">
      <div className="mb-7 flex items-center justify-between">
        <Logo />
        <span className="rounded-pill bg-accent-soft px-3 py-1 text-[12px] font-semibold text-accent">WTF beta</span>
      </div>

      <section className="mb-6">
        <h1 className="font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Dinner from what you already bought.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          Set a few defaults so your list and meals start in the right lane.
        </p>
      </section>

      <Card className="space-y-6">
        <ChoiceGroup
          title="Household"
          options={householdSizes}
          selected={[profile.householdSize]}
          onChoose={(value) => setProfile((current) => ({ ...current, householdSize: value }))}
        />
        <ChoiceGroup title="Stores" options={stores} selected={profile.stores} onChoose={(value) => toggleStore(value as Store)} multi />
        <ChoiceGroup title="Food style" options={dietaryPreferences} selected={profile.dietaryPreferences} onChoose={togglePreference} multi />
        <div>
          <label htmlFor="avoid" className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
            Foods to avoid
          </label>
          <Textarea
            id="avoid"
            value={profile.foodsToAvoid}
            onChange={(event) => setProfile((current) => ({ ...current, foodsToAvoid: event.target.value }))}
            placeholder="Mushrooms, cilantro, foods that betray you"
            className="mt-2 min-h-20"
          />
        </div>
        <ChoiceGroup
          title="Cooking style"
          options={cookingStyles}
          selected={[profile.cookingStyle]}
          onChoose={(value) => setProfile((current) => ({ ...current, cookingStyle: value }))}
        />
        <ChoiceGroup
          title="This week's goal"
          options={weeklyGoals}
          selected={[profile.weeklyGoal]}
          onChoose={(value) => setProfile((current) => ({ ...current, weeklyGoal: value }))}
        />
      </Card>

      <Button className="mt-5" full icon={<ArrowRight className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onComplete(profile)}>
        Start building my list
      </Button>
    </main>
  );
}

export function OnboardingSuccessScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="screen-enter app-scroll flex items-center pb-8">
      <Card className="w-full p-6 text-center">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-lg bg-accent text-surface">
          <Check className="h-7 w-7" strokeWidth={1.75} />
        </div>
        <Logo />
        <h1 className="mt-6 font-display text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-ink">Cool. Start with your list.</h1>
        <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink-soft">
          Scan a receipt, snap your fridge, or add your usuals.
        </p>
        <Button className="mt-6" full icon={<ArrowRight className="h-5 w-5" strokeWidth={1.75} />} onClick={onContinue}>
          Build List
        </Button>
      </Card>
    </main>
  );
}

function ChoiceGroup({
  title,
  options,
  selected,
  onChoose,
}: {
  title: string;
  options: string[];
  selected: string[];
  onChoose: (value: string) => void;
  multi?: boolean;
}) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              className={`min-h-10 rounded-pill border px-3 py-2 text-[14px] font-semibold transition ${
                active ? 'border-accent bg-accent text-surface' : 'border-line bg-surface text-ink active:bg-line/40'
              }`}
              onClick={() => onChoose(option)}
              type="button"
              aria-pressed={active}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
