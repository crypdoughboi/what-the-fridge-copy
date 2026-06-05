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
      <Card className="w-full p-6 text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-[24px] bg-herb/12 text-herb">
          <ChefHat className="soft-pulse h-8 w-8" strokeWidth={2.2} />
        </div>
        <h1 className="text-2xl font-black text-ink">{title}</h1>
        <p className="mt-3 min-h-10 text-[15px] font-semibold text-steel">{steps[index]}</p>
        <div className="mt-5 flex justify-center gap-2">
          {steps.map((step, stepIndex) => (
            <span key={step} className={`h-2 rounded-full transition-all ${stepIndex === index ? 'w-7 bg-herb' : 'w-2 bg-ink/12'}`} />
          ))}
        </div>
      </Card>
    </div>
  );
}
