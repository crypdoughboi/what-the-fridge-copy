import { Camera, ChefHat, ListChecks } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function ReceiptSuccessScreen({
  onList,
  onMeals,
  onScanAnother,
}: {
  onList: () => void;
  onMeals: () => void;
  onScanAnother: () => void;
}) {
  return (
    <main className="screen-enter flex min-h-[72vh] items-center">
      <Card className="w-full p-6 text-center">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-lg bg-accent text-surface">
          <ListChecks className="h-7 w-7" strokeWidth={1.75} />
        </div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Receipt added</p>
        <h1 className="mt-2 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink">List updated.</h1>
        <div className="mt-5 grid gap-2 text-left">
          {['6 usuals updated.', '3 items probably due next week.', '2 dinners unlocked.'].map((line) => (
            <div key={line} className="rounded-md bg-paper px-4 py-3 text-sm font-semibold text-ink">
              {line}
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-2">
          <Button icon={<ListChecks className="h-5 w-5" strokeWidth={1.75} />} onClick={onList}>
            Open List
          </Button>
          <Button variant="secondary" icon={<ChefHat className="h-5 w-5" strokeWidth={1.75} />} onClick={onMeals}>
            See dinner ideas
          </Button>
          <Button variant="secondary" icon={<Camera className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanAnother}>
            Scan another receipt
          </Button>
        </div>
      </Card>
    </main>
  );
}
