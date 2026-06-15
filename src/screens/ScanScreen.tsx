import { FormEvent, ReactNode, useState } from 'react';
import { ClipboardPaste, Keyboard, Mic, ReceiptText, Refrigerator, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileUploadButton } from '../components/FileUploadButton';
import { Input, Textarea } from '../components/Input';
import { SampleFridgeVisual, SampleReceiptVisual } from '../components/SampleVisuals';

export function ScanScreen({
  onReceiptFile,
  onFridgeFile,
  onGroceryFile,
  onVoiceAdd,
  onPastedReceipt,
  onManualAdd,
}: {
  onReceiptFile: (file: File) => void;
  onFridgeFile: (file: File) => void;
  onGroceryFile: (file: File) => void;
  onVoiceAdd: (text: string) => void;
  onPastedReceipt: (text: string) => void;
  onManualAdd: (text: string, target: 'have' | 'need') => void;
}) {
  const [voiceText, setVoiceText] = useState('');
  const [receiptText, setReceiptText] = useState('');
  const [manualItem, setManualItem] = useState('');
  const [target, setTarget] = useState<'have' | 'need'>('have');

  function submitVoice(event: FormEvent) {
    event.preventDefault();
    if (!voiceText.trim()) return;
    onVoiceAdd(voiceText);
    setVoiceText('');
  }

  function submitReceiptText(event: FormEvent) {
    event.preventDefault();
    if (!receiptText.trim()) return;
    onPastedReceipt(receiptText);
    setReceiptText('');
  }

  function submitManual(event: FormEvent) {
    event.preventDefault();
    if (!manualItem.trim()) return;
    onManualAdd(manualItem, target);
    setManualItem('');
  }

  return (
    <main className="screen-enter space-y-6">
      <section className="section-enter">
        <p className="text-[12px] font-semibold uppercase text-accent">Add</p>
        <h1 className="mt-2 font-display text-[32px] font-bold leading-[1.16] text-ink">Add food.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Photos first, voice and paste next, manual only when needed.</p>
      </section>

      <Card className="section-enter stagger-1">
        <CaptureHeader icon={<ReceiptText className="h-5 w-5" strokeWidth={1.75} />} title="Receipt photo" body="Best after checkout." />
        <div className="mt-4">
          <SampleReceiptVisual />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onReceiptFile} />
          <FileUploadButton label="Camera" onFile={onReceiptFile} camera />
        </div>
      </Card>

      <Card className="section-enter stagger-2">
        <CaptureHeader icon={<Refrigerator className="h-5 w-5" strokeWidth={1.75} />} title="Fridge photo" body="Best before deciding dinner." />
        <div className="mt-4">
          <SampleFridgeVisual />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onFridgeFile} />
          <FileUploadButton label="Camera" onFile={onFridgeFile} camera />
        </div>
      </Card>

      <Card className="section-enter stagger-3">
        <CaptureHeader icon={<ShoppingBag className="h-5 w-5" strokeWidth={1.75} />} title="Grocery photo" body="Best for bags, counters, and quick hauls." />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <FileUploadButton label="Upload" onFile={onGroceryFile} />
          <FileUploadButton label="Camera" onFile={onGroceryFile} camera />
        </div>
      </Card>

      <Card>
        <CaptureHeader icon={<Mic className="h-5 w-5" strokeWidth={1.75} />} title="Voice add" body="Say what is here or what is low." />
        <form className="mt-4 grid gap-3" onSubmit={submitVoice}>
          <Textarea
            value={voiceText}
            onChange={(event) => setVoiceText(event.target.value)}
            placeholder="We have chicken, rice, spinach, and we are low on lemons"
            className="min-h-24"
          />
          <Button type="submit" disabled={!voiceText.trim()}>
            Capture voice note
          </Button>
        </form>
      </Card>

      <Card>
        <CaptureHeader icon={<ClipboardPaste className="h-5 w-5" strokeWidth={1.75} />} title="Pasted receipt" body="Paste a store receipt or delivery text." />
        <form className="mt-4 grid gap-3" onSubmit={submitReceiptText}>
          <Textarea
            value={receiptText}
            onChange={(event) => setReceiptText(event.target.value)}
            placeholder={"CHKN THGH 10.42\nJASMINE RICE 4.49\nSPINACH BAG 2.99"}
            className="min-h-28"
          />
          <Button type="submit" disabled={!receiptText.trim()}>
            Parse receipt
          </Button>
        </form>
      </Card>

      <Card>
        <CaptureHeader icon={<Keyboard className="h-5 w-5" strokeWidth={1.75} />} title="Manual fallback" body="For anything the parser misses." />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <ChoiceButton active={target === 'have'} onClick={() => setTarget('have')}>
            Have
          </ChoiceButton>
          <ChoiceButton active={target === 'need'} onClick={() => setTarget('need')}>
            Need
          </ChoiceButton>
        </div>
        <form className="mt-3 flex gap-2" onSubmit={submitManual}>
          <Input value={manualItem} onChange={(event) => setManualItem(event.target.value)} placeholder="leftover rice, Greek yogurt" className="min-w-0 flex-1" />
          <Button className="px-4" type="submit" disabled={!manualItem.trim()}>
            Add
          </Button>
        </form>
      </Card>
    </main>
  );
}

function CaptureHeader({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">{icon}</div>
      <div>
        <h2 className="font-display text-[21px] font-bold text-ink">{title}</h2>
        <p className="mt-1 text-[14px] font-medium leading-relaxed text-ink-soft">{body}</p>
      </div>
    </div>
  );
}

function ChoiceButton({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button
      className={`min-h-11 rounded-md border px-3 text-[14px] font-semibold transition active:scale-[0.98] ${
        active ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink-soft'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
