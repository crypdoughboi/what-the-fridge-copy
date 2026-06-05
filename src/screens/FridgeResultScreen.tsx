import { useState } from 'react';
import { Camera, NotebookPen, RefreshCw, ShieldCheck } from 'lucide-react';
import { ScanConfidence, VisionItem } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { scanConfidenceLabel } from '../utils/groceryLogic';

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

  const groups: Array<{ label: string; confidence: ScanConfidence; tone: 'green' | 'gold' | 'red' }> = [
    { label: 'Clearly seen', confidence: 'clearlySeen', tone: 'green' },
    { label: 'Maybe low', confidence: 'maybeLow', tone: 'gold' },
    { label: 'Could not tell', confidence: 'couldNotTell', tone: 'red' },
  ];

  return (
    <main className="screen-enter space-y-5">
      <section>
        <p className="text-[12px] font-black uppercase text-herb">Fridge result</p>
        <h1 className="mt-1 text-[32px] font-black leading-tight text-ink">Fridge says no.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          We found likely items. We are not pretending your drawer is a database.
        </p>
      </section>

      {groups.map((group) => {
        const groupItems = localItems.filter((item) => item.confidence === group.confidence);
        if (!groupItems.length) return null;
        return (
          <Card key={group.confidence}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-black text-ink">{group.label}</h2>
              <Pill tone={group.tone}>{groupItems.length}</Pill>
            </div>
            <div className="space-y-2">
              {groupItems.map((item) => (
                <div key={item.id} className="rounded-2xl bg-linen/72 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[15px] font-black text-ink">{item.name}</p>
                      <p className="mt-1 text-xs font-semibold leading-relaxed text-steel">{item.note}</p>
                    </div>
                    <Pill tone="blue">{item.category}</Pill>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Button variant="secondary" className="min-h-10 text-xs" onClick={() => setConfidence(item.id, 'clearlySeen')}>
                      Mark have
                    </Button>
                    <Button variant="secondary" className="min-h-10 text-xs" onClick={() => setConfidence(item.id, 'maybeLow')}>
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
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-tile text-steel">
            <NotebookPen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-ink">Photo note</h2>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-steel">Optional. Useful if the freezer is doing freezer things.</p>
          </div>
        </div>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Top shelf is mostly leftovers. Oat milk looked low."
          className="mt-4 min-h-24 w-full resize-none rounded-2xl border border-ink/10 bg-white/86 px-4 py-3 text-sm font-semibold outline-none focus:border-herb"
        />
      </Card>

      <div className="grid gap-2">
        <Button icon={<ShieldCheck className="h-4 w-4" />} onClick={() => onUpdateList(localItems)}>
          Update my list
        </Button>
        <Button variant="secondary" icon={<Camera className="h-4 w-4" />} onClick={onScanPantry}>
          Scan pantry too
        </Button>
        <Button variant="ghost" icon={<RefreshCw className="h-4 w-4" />} onClick={() => setLocalItems(items)}>
          Reset result
        </Button>
      </div>
    </main>
  );
}
