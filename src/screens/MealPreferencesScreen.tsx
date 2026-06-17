import { useState } from 'react';
import { CookingPot, Globe, Leaf, Shuffle, Zap } from 'lucide-react';
import {
  CookingMethodPreference,
  CuisinePreference,
  EffortPreference,
  FlexibilityPreference,
  MealMode,
  MealPreferences,
} from '../types';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';
import { ChoiceChips } from '../components/ChoiceChips';
import { cookingMethodOptions, cuisineOptions, effortOptions, flexibilityOptions, restrictionOptions } from '../data/mealPreferenceOptions';

const copy: Record<MealMode, { header: string; support: string; cta: string }> = {
  scratch: {
    header: 'WTF Should I Make?',
    support: "Tap a few preferences. We'll give you meal ideas and a shopping list.",
    cta: 'Show me meals',
  },
  inventory: {
    header: 'Use What I Have',
    support: "We'll use your kitchen first and only suggest missing ingredients if needed.",
    cta: 'Find meals from my kitchen',
  },
};

export function MealPreferencesScreen({
  mode,
  initialPreferences,
  onBack,
  onSubmit,
}: {
  mode: MealMode;
  initialPreferences: MealPreferences;
  onBack: () => void;
  onSubmit: (preferences: MealPreferences) => void;
}) {
  const [preferences, setPreferences] = useState<MealPreferences>(initialPreferences);
  const { header, support, cta } = copy[mode];

  function update<K extends keyof MealPreferences>(key: K, value: MealPreferences[K]) {
    setPreferences((current) => ({ ...current, [key]: value }));
  }

  function toggleRestriction(value: string) {
    setPreferences((current) => {
      if (value === 'No restrictions') return { ...current, restrictions: ['No restrictions'] };
      const withoutNone = current.restrictions.filter((item) => item !== 'No restrictions');
      const next = withoutNone.includes(value) ? withoutNone.filter((item) => item !== value) : [...withoutNone, value];
      return { ...current, restrictions: next.length ? next : ['No restrictions'] };
    });
  }

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to Meals" />

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Preferences</p>
        <h1 className="mt-2 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">{header}</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">{support}</p>
      </section>

      <div className="section-enter stagger-1 space-y-6">
        <ChoiceChips
          label="Effort"
          icon={<Zap className="h-4 w-4" strokeWidth={2} />}
          options={effortOptions}
          selected={[preferences.effort]}
          onSelect={(value) => update('effort', value as EffortPreference)}
        />
        <ChoiceChips
          label="Cooking method"
          icon={<CookingPot className="h-4 w-4" strokeWidth={2} />}
          options={cookingMethodOptions}
          selected={[preferences.cookingMethod]}
          onSelect={(value) => update('cookingMethod', value as CookingMethodPreference)}
        />
        <ChoiceChips
          label="Cuisine"
          icon={<Globe className="h-4 w-4" strokeWidth={2} />}
          options={cuisineOptions}
          selected={[preferences.cuisine]}
          onSelect={(value) => update('cuisine', value as CuisinePreference)}
        />
        {mode === 'inventory' ? (
          <ChoiceChips
            label="Flexibility"
            icon={<Shuffle className="h-4 w-4" strokeWidth={2} />}
            options={flexibilityOptions}
            selected={[preferences.flexibility ?? 'Missing 1 item is okay']}
            onSelect={(value) => update('flexibility', value as FlexibilityPreference)}
          />
        ) : null}
        <ChoiceChips
          label="Allergies / restrictions"
          hint="Pick any that apply. We'll respect these in every suggestion."
          icon={<Leaf className="h-4 w-4" strokeWidth={2} />}
          options={restrictionOptions}
          selected={preferences.restrictions}
          onSelect={toggleRestriction}
          multiple
        />
      </div>

      <Button full onClick={() => onSubmit(preferences)}>
        {cta}
      </Button>
    </main>
  );
}
