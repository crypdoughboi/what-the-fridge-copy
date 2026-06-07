import { FormEvent, useState } from 'react';
import { Keyboard, ReceiptText, Refrigerator } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileUploadButton } from '../components/FileUploadButton';
import { Input } from '../components/Input';
import { SampleFridgeVisual, SampleReceiptVisual } from '../components/SampleVisuals';
import { parseManualItemNames } from '../utils/groceryLogic';

export function ScanScreen({
  onReceiptFile,
  onFridgeFile,
  onAddNeed,
  onAddHave,
}: {
  onReceiptFile: (file: File) => void;
  onFridgeFile: (file: File) => void;
  onAddNeed: (name: string) => void;
  onAddHave: (name: string) => void;
}) {
  const [item, setItem] = useState('');
  const [target, setTarget] = useState<'have' | 'need'>('have');

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!item.trim()) return;
    parseManualItemNames(item).forEach((name) => {
      if (target === 'have') onAddHave(name);
      else onAddNeed(name);
    });
    setItem('');
  }

  return (
    <main className="screen-enter space-y-8">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Scan</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Add food fast.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Snap the fridge, scan a receipt, or type a few items.</p>
      </section>

      <Card className="section-enter stagger-1">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <Refrigerator className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Scan fridge or pantry</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">Detected items can become Already Have or Need to Buy.</p>
          </div>
        </div>
        <div className="mt-4">
          <SampleFridgeVisual />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onFridgeFile} />
          <FileUploadButton label="Camera" onFile={onFridgeFile} camera />
        </div>
      </Card>

      <Card className="section-enter stagger-2">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <ReceiptText className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Scan receipt</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">Purchased items land in Already Have.</p>
          </div>
        </div>
        <div className="mt-4">
          <SampleReceiptVisual />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onReceiptFile} />
          <FileUploadButton label="Camera" onFile={onReceiptFile} camera />
        </div>
      </Card>

      <Card className="section-enter stagger-3">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <Keyboard className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Type items manually</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">Use this for leftovers, takeout boxes, and anything the camera cannot identify.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            className={`min-h-11 rounded-md border px-3 text-[14px] font-semibold transition active:scale-[0.98] ${
              target === 'have' ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
            }`}
            onClick={() => setTarget('have')}
          >
            Already Have
          </button>
          <button
            className={`min-h-11 rounded-md border px-3 text-[14px] font-semibold transition active:scale-[0.98] ${
              target === 'need' ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
            }`}
            onClick={() => setTarget('need')}
          >
            Need to Buy
          </button>
        </div>
        <form className="mt-3 flex gap-2" onSubmit={submit}>
          <Input value={item} onChange={(event) => setItem(event.target.value)} placeholder="leftover rice, cauliflower, Greek yogurt" className="min-w-0 flex-1" />
          <Button className="px-4" type="submit" disabled={!item.trim()}>
            Add
          </Button>
        </form>
      </Card>
    </main>
  );
}
