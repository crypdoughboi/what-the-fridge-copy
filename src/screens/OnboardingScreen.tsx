import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { OnboardingProfile, Store } from '../types';
import { defaultProfile } from '../data/mockData';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/BrandMark';

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
        <span className="rounded-full bg-tomato/12 px-3 py-1 text-[11px] font-black text-tomato">WTF beta</span>
      </div>

      <section className="mb-6">
        <h1 className="text-[34px] font-black leading-[1.02] text-ink">Dinner from what you already bought.</h1>
        <p className="mt-3 text-[16px] font-semibold leading-relaxed text-steel">
          Give WTF a few kitchen facts. We will stop asking you to inventory your life.
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
          <label htmlFor="avoid" className="text-[12px] font-black uppercase text-steel">
            Foods to avoid
          </label>
          <textarea
            id="avoid"
            value={profile.foodsToAvoid}
            onChange={(event) => setProfile((current) => ({ ...current, foodsToAvoid: event.target.value }))}
            placeholder="Mushrooms, cilantro, foods that betray you"
            className="mt-2 min-h-20 w-full resize-none rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-herb"
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

      <Button className="mt-5" full icon={<ArrowRight className="h-4 w-4" />} onClick={() => onComplete(profile)}>
        Start learning my groceries
      </Button>
    </main>
  );
}

export function OnboardingSuccessScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="screen-enter app-scroll flex items-center pb-8">
      <Card className="w-full p-6 text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-[24px] bg-herb text-white">
          <Check className="h-8 w-8" />
        </div>
        <Logo />
        <h1 className="mt-6 text-[30px] font-black leading-tight text-ink">Cool. We will start learning from your receipts, lists, and fridge checks.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          First move: see dinner from what you probably already have.
        </p>
        <Button className="mt-6" full icon={<ArrowRight className="h-4 w-4" />} onClick={onContinue}>
          Show me dinner
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
  multi = false,
}: {
  title: string;
  options: string[];
  selected: string[];
  onChoose: (value: string) => void;
  multi?: boolean;
}) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-black uppercase text-steel">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              className={`min-h-10 rounded-full border px-3 py-2 text-sm font-bold transition ${
                active ? 'border-herb bg-herb text-white' : 'border-ink/10 bg-white text-ink active:bg-linen'
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
