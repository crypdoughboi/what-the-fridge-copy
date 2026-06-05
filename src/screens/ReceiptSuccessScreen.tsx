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
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-[24px] bg-herb text-white">
          <ListChecks className="h-8 w-8" />
        </div>
        <p className="text-[12px] font-black uppercase text-herb">Receipt added</p>
        <h1 className="mt-2 text-[32px] font-black leading-tight text-ink">Grocery brain updated.</h1>
        <div className="mt-5 grid gap-2 text-left">
          {['6 usuals updated.', '3 items probably due next week.', '2 dinners unlocked.'].map((line) => (
            <div key={line} className="rounded-2xl bg-linen/72 px-4 py-3 text-sm font-black text-ink">
              {line}
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-2">
          <Button icon={<ListChecks className="h-4 w-4" />} onClick={onList}>
            Build my list
          </Button>
          <Button variant="secondary" icon={<ChefHat className="h-4 w-4" />} onClick={onMeals}>
            See dinner ideas
          </Button>
          <Button variant="secondary" icon={<Camera className="h-4 w-4" />} onClick={onScanAnother}>
            Scan another receipt
          </Button>
        </div>
      </Card>
    </main>
  );
}
