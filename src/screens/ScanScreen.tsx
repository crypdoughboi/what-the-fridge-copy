import { useState } from 'react';
import { ClipboardList, FileText, Refrigerator, Wand2 } from 'lucide-react';
import { GroceryListEntry } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileUploadButton } from '../components/FileUploadButton';
import { SampleFridgeVisual, SampleReceiptVisual } from '../components/SampleVisuals';
import { importOldGroceryList } from '../services/oldListImportService';

export function ScanScreen({
  onReceiptFile,
  onReceiptSample,
  onFridgeFile,
  onFridgeSample,
  onOpenReceipt,
  onOpenFridge,
  onImportItems,
}: {
  onReceiptFile: (file: File) => void;
  onReceiptSample: () => void;
  onFridgeFile: (file: File) => void;
  onFridgeSample: () => void;
  onOpenReceipt: () => void;
  onOpenFridge: () => void;
  onImportItems: (items: GroceryListEntry[]) => void;
}) {
  const [oldListText, setOldListText] = useState('');
  const [importedItems, setImportedItems] = useState<GroceryListEntry[]>([]);
  const [importing, setImporting] = useState(false);

  async function parseList() {
    setImporting(true);
    const parsed = await importOldGroceryList(oldListText);
    setImportedItems(parsed);
    setImporting(false);
  }

  function addImported() {
    onImportItems(importedItems);
    setImportedItems([]);
  }

  return (
    <main className="screen-enter space-y-5">
      <section>
        <p className="text-[12px] font-black uppercase text-herb">Inputs</p>
        <h1 className="mt-1 text-[32px] font-black leading-tight text-ink">Feed the grocery brain.</h1>
        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-steel">
          Receipts, fridge checks, pantry checks, and old lists. No manual pantry homework.
        </p>
      </section>

      <ScanCard
        icon={<FileText className="h-5 w-5" />}
        title="Scan receipt"
        text="Turn receipts into grocery memory."
        visual={<SampleReceiptVisual />}
        onOpen={onOpenReceipt}
        upload={<FileUploadButton label="Upload" onFile={onReceiptFile} />}
        camera={<FileUploadButton label="Camera" onFile={onReceiptFile} camera />}
        sampleLabel="Use sample receipt"
        onSample={onReceiptSample}
      />

      <ScanCard
        icon={<Refrigerator className="h-5 w-5" />}
        title="Check fridge or pantry"
        text="See what you probably already have."
        visual={<SampleFridgeVisual />}
        onOpen={onOpenFridge}
        upload={<FileUploadButton label="Upload" onFile={onFridgeFile} />}
        camera={<FileUploadButton label="Camera" onFile={onFridgeFile} camera />}
        sampleLabel="Use sample fridge"
        onSample={onFridgeSample}
      />

      <Card>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-saffron/16 text-ink">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-ink">Import old list</h2>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-steel">Paste from Notes, Reminders, screenshots, or texts.</p>
          </div>
        </div>
        <textarea
          value={oldListText}
          onChange={(event) => setOldListText(event.target.value)}
          placeholder={'bananas\nchicken thighs\nspinach\npaper towels'}
          className="mt-4 min-h-36 w-full resize-none rounded-2xl border border-ink/10 bg-white/86 px-4 py-3 text-sm font-semibold leading-relaxed outline-none focus:border-herb"
        />
        <Button className="mt-3" full icon={<Wand2 className={`h-4 w-4 ${importing ? 'animate-spin' : ''}`} />} onClick={parseList} disabled={!oldListText.trim()}>
          {importing ? 'Importing the chaos' : 'Parse list'}
        </Button>
        {importedItems.length > 0 && (
          <div className="mt-4 rounded-2xl bg-linen/72 p-3">
            <p className="mb-2 text-[11px] font-black uppercase text-steel">Imported items</p>
            <div className="space-y-2">
              {importedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl bg-white/72 px-3 py-2 text-sm font-bold">
                  <span>{item.name}</span>
                  <span className="text-[11px] text-steel">{item.category}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-steel">
              Likely usuals: {importedItems.slice(0, 4).map((item) => item.name).join(', ')}
            </p>
            <Button className="mt-3" full onClick={addImported}>
              Add to grocery memory
            </Button>
          </div>
        )}
      </Card>
    </main>
  );
}

function ScanCard({
  icon,
  title,
  text,
  visual,
  upload,
  camera,
  sampleLabel,
  onSample,
  onOpen,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  visual: React.ReactNode;
  upload: React.ReactNode;
  camera: React.ReactNode;
  sampleLabel: string;
  onSample: () => void;
  onOpen: () => void;
}) {
  return (
    <Card>
      <button className="w-full text-left" onClick={onOpen}>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-herb/12 text-herb">{icon}</div>
          <div>
            <h2 className="text-xl font-black text-ink">{title}</h2>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-steel">{text}</p>
          </div>
        </div>
        <div className="mt-4">{visual}</div>
      </button>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {upload}
        {camera}
      </div>
      <Button className="mt-2" variant="secondary" full onClick={onSample}>
        {sampleLabel}
      </Button>
    </Card>
  );
}
