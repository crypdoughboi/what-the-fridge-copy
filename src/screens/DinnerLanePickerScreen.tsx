import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { dinnerLanes } from '../data/mealIdeas';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { BackButton } from '../components/BackButton';

export function DinnerLanePickerScreen({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: (lanes: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(lane: string) {
    setSelected((current) => (current.includes(lane) ? current.filter((item) => item !== lane) : [...current, lane]));
  }

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} />

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Dinner lane</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">What kind of dinner are we thinking?</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Pick a lane. WTF will build the list after.</p>
      </section>

      <Card className="section-enter stagger-1">
        <div className="grid gap-2">
          {dinnerLanes.map((lane) => {
            const active = selected.includes(lane);
            return (
              <button
                key={lane}
                className={`min-h-12 rounded-md border px-4 py-3 text-left text-[15px] font-semibold transition active:scale-[0.98] ${
                  active ? 'border-ink bg-ink text-paper shadow-sm' : 'border-line bg-paper text-ink'
                }`}
                onClick={() => toggle(lane)}
              >
                {lane}
              </button>
            );
          })}
        </div>
      </Card>

      <Button full icon={<ArrowRight className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onContinue(selected)} disabled={selected.length === 0}>
        Show meal ideas
      </Button>
    </main>
  );
}
