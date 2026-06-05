import { useEffect, useState } from 'react';
import { Check, Edit3, Trash2, X } from 'lucide-react';
import { ReceiptExtraction, ReceiptItem } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { formatFullDate } from '../utils/date';
import { categorizeGroceryItem, normalizeReceiptItemName, sectionForCategory } from '../utils/groceryLogic';

export function ReceiptReviewScreen({
  extraction,
  onConfirm,
  onBack,
}: {
  extraction: ReceiptExtraction;
  onConfirm: (extraction: ReceiptExtraction) => void;
  onBack: () => void;
}) {
  const [items, setItems] = useState<ReceiptItem[]>(extraction.items);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setItems(extraction.items);
  }, [extraction]);

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function markNotGrocery(id: string) {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, isGrocery: false } : item)));
  }

  function startEdit(item: ReceiptItem) {
    setEditingId(item.id);
    setEditValue(item.normalizedName);
  }

  function saveEdit(item: ReceiptItem) {
    const normalizedName = normalizeReceiptItemName(editValue);
    const category = categorizeGroceryItem(normalizedName);
    setItems((current) =>
      current.map((currentItem) =>
        currentItem.id === item.id
          ? {
              ...currentItem,
              normalizedName,
              category,
              section: sectionForCategory(category),
            }
          : currentItem,
      ),
    );
    setEditingId(null);
    setEditValue('');
  }

  return (
    <main className="screen-enter space-y-5">
      <section>
        <p className="text-[12px] font-black uppercase text-herb">Receipt review</p>
        <h1 className="mt-1 text-[32px] font-black leading-tight text-ink">We found {extraction.itemCount} items. Anything wrong?</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          {extraction.store}, {formatFullDate(extraction.date)}. Total ${extraction.total.toFixed(2)}.
        </p>
      </section>

      <Card className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className={`rounded-2xl border p-3 ${item.isGrocery ? 'border-ink/8 bg-white/76' : 'border-tomato/20 bg-tomato/8'}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] font-black uppercase text-steel">{item.rawName}</p>
                {editingId === item.id ? (
                  <div className="mt-2 flex gap-2">
                    <input
                      value={editValue}
                      onChange={(event) => setEditValue(event.target.value)}
                      className="min-h-10 flex-1 rounded-xl border border-ink/10 bg-white px-3 text-sm font-bold outline-none focus:border-herb"
                    />
                    <button className="grid h-10 w-10 place-items-center rounded-xl bg-herb text-white" onClick={() => saveEdit(item)} aria-label="Save item">
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <p className="mt-1 text-[16px] font-black text-ink">{item.normalizedName}</p>
                )}
                <div className="mt-2 flex gap-2">
                  <Pill tone={item.isGrocery ? 'green' : 'red'}>{item.isGrocery ? item.category : 'not grocery'}</Pill>
                  <Pill tone="blue">${item.price.toFixed(2)}</Pill>
                </div>
              </div>
              <div className="flex gap-1">
                <IconButton label="Edit item" onClick={() => startEdit(item)} icon={<Edit3 className="h-4 w-4" />} />
                <IconButton label="Remove item" onClick={() => removeItem(item.id)} icon={<Trash2 className="h-4 w-4" />} />
                <IconButton label="Mark not grocery" onClick={() => markNotGrocery(item.id)} icon={<X className="h-4 w-4" />} />
              </div>
            </div>
          </div>
        ))}
      </Card>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={onBack}>
          Scan again
        </Button>
        <Button onClick={() => onConfirm({ ...extraction, items })}>Looks good</Button>
      </div>
    </main>
  );
}

function IconButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button className="grid h-9 w-9 place-items-center rounded-xl bg-linen text-ink active:bg-ink/10" onClick={onClick} aria-label={label} title={label}>
      {icon}
    </button>
  );
}
