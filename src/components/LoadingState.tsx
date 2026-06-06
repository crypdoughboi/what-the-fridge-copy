import { useEffect, useState } from 'react';
import { ChefHat } from 'lucide-react';
import { Card } from './Card';

export function LoadingState({ title, steps }: { title: string; steps: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % steps.length);
    }, 720);
    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="screen-enter flex min-h-[62vh] items-center">
      <Card className="w-full text-center">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-lg bg-accent-soft text-accent">
          <ChefHat className="soft-pulse h-7 w-7" strokeWidth={1.75} />
        </div>
        <h1 className="font-display text-[24px] font-extrabold tracking-[-0.02em] text-ink">{title}</h1>
        <p className="mt-3 min-h-10 text-[15px] font-medium text-ink-soft">{steps[index]}</p>
        <div className="mt-5 flex justify-center gap-2">
          {steps.map((step, stepIndex) => (
            <span key={step} className={`h-2 rounded-pill transition-all ${stepIndex === index ? 'w-7 bg-accent' : 'w-2 bg-line'}`} />
          ))}
        </div>
      </Card>
    </div>
  );
}
