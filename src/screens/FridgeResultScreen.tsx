import { useState } from 'react';
import { Camera, NotebookPen, RefreshCw, ShieldCheck } from 'lucide-react';
import { ScanConfidence, VisionItem } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Textarea } from '../components/Input';
import { Pill } from '../components/Pill';

export function FridgeResultScreen({
  items,
  onUpdateList,
  onScanPantry,
}: {
  items: VisionItem[];
  onUpdateList: (items: VisionItem[]) => void;
  onScanPantry: () => void;
}) {
  const [localItems, setLocalItems] = useState(items);
  const [note, setNote] = useState('');

  function setConfidence(id: string, confidence: ScanConfidence) {
    setLocalItems((current) => current.map((item) => (item.id === id ? { ...item, confidence } : item)));
  }

  const groups: Array<{ label: string; confidence: ScanConfidence; tone: 'green' | 'neutral' }> = [
    { label: 'Clearly seen', confidence: 'clearlySeen', tone: 'green' },
    { label: 'Maybe low', confidence: 'maybeLow', tone: 'neutral' },
    { label: 'Could not tell', confidence: 'couldNotTell', tone: 'neutral' },
  ];

  return (
    <main className="screen-enter space-y-8">
      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Fridge photo</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Fridge says no.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          We found likely items. Review confidence before updating your list.
        </p>
      </section>

      {groups.map((group) => {
        const groupItems = localItems.filter((item) => item.confidence === group.confidence);
        if (!groupItems.length) return null;
        return (
          <Card key={group.confidence}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">{group.label}</h2>
              <Pill tone={group.tone}>{groupItems.length}</Pill>
            </div>
            <div className="space-y-2">
              {groupItems.map((item) => (
                <div key={item.id} className="rounded-md bg-paper p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[16px] font-semibold text-ink">{item.name}</p>
                      <p className="mt-1 text-[13px] font-medium leading-relaxed text-muted">{item.note}</p>
                    </div>
                    <Pill>{item.category}</Pill>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Button variant="secondary" className="min-h-10 text-[13px]" onClick={() => setConfidence(item.id, 'clearlySeen')}>
                      Mark have
                    </Button>
                    <Button variant="secondary" className="min-h-10 text-[13px]" onClick={() => setConfidence(item.id, 'maybeLow')}>
                      Mark low
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );
      })}

      <Card>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <NotebookPen className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Photo note</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">Optional. Useful if the freezer is doing freezer things.</p>
          </div>
        </div>
        <Textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Top shelf is mostly leftovers. Oat milk looked low."
          className="mt-4 min-h-24"
        />
      </Card>

      <div className="grid gap-2">
        <Button icon={<ShieldCheck className="h-5 w-5" strokeWidth={1.75} />} onClick={() => onUpdateList(localItems)}>
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
