import { useState } from 'react';
import { ArrowLeft, ClipboardList, FileText, Refrigerator, Wand2 } from 'lucide-react';
import { GroceryListEntry } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileUploadButton } from '../components/FileUploadButton';
import { Textarea } from '../components/Input';
import { SampleFridgeVisual, SampleReceiptVisual } from '../components/SampleVisuals';
import { SectionHeader } from '../components/SectionHeader';
import { importOldGroceryList } from '../services/oldListImportService';

export function ScanScreen({
  onReceiptFile,
  onReceiptSample,
  onFridgeFile,
  onFridgeSample,
  onOpenReceipt,
  onOpenFridge,
  onImportItems,
  onBack,
}: {
  onBack: () => void;
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
    setOldListText('');
  }

  return (
    <main className="screen-enter space-y-8">
      <button className="section-enter inline-flex min-h-10 items-center gap-2 rounded-md text-[14px] font-semibold text-ink-soft" onClick={onBack}>
        <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
        Back to List
      </button>

      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Add methods</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Add to your list.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Receipts, fridge photos, and old lists fill the list faster than typing.</p>
      </section>

      <ScanCard
        icon={<FileText className="h-6 w-6" strokeWidth={1.75} />}
        title="Scan a receipt"
        text="Pull grocery items from a recent receipt."
        visual={<SampleReceiptVisual />}
        onOpen={onOpenReceipt}
        upload={<FileUploadButton label="Upload" onFile={onReceiptFile} />}
        camera={<FileUploadButton label="Camera" onFile={onReceiptFile} camera />}
        sampleLabel="Use sample receipt"
        onSample={onReceiptSample}
      />

      <ScanCard
        icon={<Refrigerator className="h-6 w-6" strokeWidth={1.75} />}
        title="Snap your fridge"
        text="Spot what you already have before you buy it again."
        visual={<SampleFridgeVisual />}
        onOpen={onOpenFridge}
        upload={<FileUploadButton label="Upload" onFile={onFridgeFile} />}
        camera={<FileUploadButton label="Camera" onFile={onFridgeFile} camera />}
        sampleLabel="Use sample fridge"
        onSample={onFridgeSample}
      />

      <Card>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
            <ClipboardList className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Paste an old list</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">Paste from Notes, Reminders, screenshots, or texts.</p>
          </div>
        </div>
        <Textarea
          value={oldListText}
          onChange={(event) => setOldListText(event.target.value)}
          placeholder={'bananas\nchicken thighs\nspinach\npaper towels'}
          className="mt-4"
        />
        <Button className="mt-3" full icon={<Wand2 className={`h-5 w-5 ${importing ? 'animate-spin' : ''}`} strokeWidth={1.75} />} onClick={parseList} disabled={!oldListText.trim()}>
          {importing ? 'Reading list' : 'Parse list'}
        </Button>
        {importedItems.length > 0 && (
          <div className="mt-4 rounded-md bg-paper p-3">
            <SectionHeader eyebrow="Imported" title={`${importedItems.length} items`} />
            <div className="mt-3 space-y-2">
              {importedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-sm bg-surface px-3 py-2 text-[14px] font-semibold">
                  <span>{item.name}</span>
                  <span className="text-[13px] text-muted">{item.category}</span>
                </div>
              ))}
            </div>
            <Button className="mt-3" full onClick={addImported}>
              Add to List
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
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">{icon}</div>
          <div>
            <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">{title}</h2>
            <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">{text}</p>
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
