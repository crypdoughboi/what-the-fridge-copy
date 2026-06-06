import { useState } from 'react';
import { ReactNode } from 'react';
import { Camera, HelpCircle, ListPlus, RefreshCw } from 'lucide-react';
import { ScanConfidence, VisionItem } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Textarea } from '../components/Input';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';

export function FridgeResultScreen({
  items,
  onBack,
  onUpdateList,
  onScanPantry,
}: {
  items: VisionItem[];
  onBack: () => void;
  onUpdateList: (items: VisionItem[]) => void;
  onScanPantry: () => void;
}) {
  const [localItems, setLocalItems] = useState(items);
  const [note, setNote] = useState('');

  function setConfidence(id: string, confidence: ScanConfidence) {
    setLocalItems((current) => current.map((item) => (item.id === id ? { ...item, confidence } : item)));
  }

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to Scan" />

      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Fridge photo</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Review what WTF found.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          Choose what is already there, what should go on the list, and what to ignore.
        </p>
      </section>

      <Card>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <HelpCircle className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Covered containers are a maybe.</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">
              Takeout boxes, leftovers, and wrapped containers need a quick note or manual add. WTF will not guess dinner through plastic.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {localItems.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[16px] font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-[13px] font-medium leading-relaxed text-muted">{item.note}</p>
              </div>
              <Pill tone={item.confidence === 'clearlySeen' ? 'green' : 'neutral'}>{labelForConfidence(item.confidence)}</Pill>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <Choice active={item.confidence === 'clearlySeen'} onClick={() => setConfidence(item.id, 'clearlySeen')}>
                Already have
              </Choice>
              <Choice active={item.confidence === 'maybeLow'} onClick={() => setConfidence(item.id, 'maybeLow')}>
                Add to list
              </Choice>
              <Choice active={item.confidence === 'couldNotTell'} onClick={() => setConfidence(item.id, 'couldNotTell')}>
                Skip
              </Choice>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Photo note</h2>
        <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">Useful for leftovers, restaurant containers, and weird unlabeled jars.</p>
        <Textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Top shelf has leftover rice. Black takeout box is probably noodles."
          className="mt-4 min-h-24"
        />
      </Card>

      <div className="grid gap-2">
        <Button icon={<ListPlus className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onUpdateList(localItems)}>
          Update List
        </Button>
        <Button variant="secondary" icon={<Camera className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanPantry}>
          Scan pantry too
        </Button>
        <Button variant="ghost" icon={<RefreshCw className="h-5 w-5" strokeWidth={1.75} />} onClick={() => setLocalItems(items)}>
          Reset result
        </Button>
      </div>
    </main>
  );
}

function Choice({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button
      className={`min-h-10 rounded-md border px-2 text-[13px] font-semibold transition active:scale-[0.98] ${
        active ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function labelForConfidence(confidence: ScanConfidence): string {
  if (confidence === 'clearlySeen') return 'Already Have';
  if (confidence === 'maybeLow') return 'Need to Buy';
  return 'Skipped';
}
