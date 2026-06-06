import { Download, ListChecks, ReceiptText } from 'lucide-react';
import { SpendingInsight } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { ProgressBar } from '../components/ProgressBar';
import { SectionHeader } from '../components/SectionHeader';

export function SpendScreen({
  spending,
  hasReceiptHistory,
  onGoList,
  onScanReceipt,
  onExport,
}: {
  spending: SpendingInsight;
  hasReceiptHistory: boolean;
  onGoList: () => void;
  onScanReceipt: () => void;
  onExport: () => void;
}) {
  if (!hasReceiptHistory) {
    return (
      <main className="screen-enter space-y-8">
        <section>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Spend</p>
          <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">No receipt data yet.</h1>
          <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">Scan a grocery receipt and WTF will start tracking spend without making you type prices.</p>
        </section>

        <Card>
          <SectionHeader eyebrow="First scan" title="One receipt unlocks spend insights" />
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink-soft">
            Store totals, repeat items, and overbuy warnings show up after the first receipt.
          </p>
          <Button className="mt-5" full icon={<ReceiptText className="h-5 w-5" strokeWidth={1.75} />} onClick={onScanReceipt}>
            Scan receipt
          </Button>
        </Card>

        <Button variant="secondary" icon={<ListChecks className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoList}>
          Open List
        </Button>
      </main>
    );
  }

  const maxStore = Math.max(...spending.storeSpend.map((store) => store.amount));
  const maxCategory = Math.max(...spending.categorySpend.map((category) => category.amount));

  return (
    <main className="screen-enter space-y-8">
      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Spend</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">${spending.monthlySpend} this month.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">{spending.categoryInsight}</p>
      </section>

      <Card>
        <SectionHeader eyebrow="Plain English" title={spending.plainEnglishInsight} />
        <p className="mt-3 text-[15px] font-medium text-ink-soft">Your repeat staples cost about ${spending.staplesWeeklyCost} per week.</p>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Spend by store</h2>
          <Pill tone="green">{spending.topStore} leads</Pill>
        </div>
        <div className="mt-4 space-y-4">
          {spending.storeSpend.map((store, index) => (
            <div key={store.store}>
              <div className="mb-2 flex items-center justify-between text-[14px] font-semibold text-ink">
                <span>{store.store}</span>
                <span>${store.amount}</span>
              </div>
              <ProgressBar value={store.amount} max={maxStore} tone={index === 0 ? 'accent' : 'muted'} />
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Spend by category</h2>
        <div className="mt-4 space-y-4">
          {spending.categorySpend.map((category) => {
            const delta = Math.round(category.amount - category.previousAmount);
            return (
              <div key={category.name}>
                <div className="mb-2 flex items-center justify-between text-[14px] font-semibold text-ink">
                  <span>{category.name}</span>
                  <span>
                    ${category.amount} {delta > 0 ? `+${delta}` : delta}
                  </span>
                </div>
                <ProgressBar value={category.amount} max={maxCategory} tone={category.name === 'Produce' ? 'accent' : 'muted'} />
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Top repeat items</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {spending.repeatItems.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Getting more expensive</h2>
        <div className="mt-3 grid gap-2">
          {spending.expensiveItems.map((item) => (
            <div key={item} className="rounded-md bg-paper p-3 text-[14px] font-semibold text-ink-soft">
              {item}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Overbuy alerts</h2>
        <div className="mt-3 space-y-2">
          {spending.overbuyAlerts.map((alert) => (
            <div key={alert} className="rounded-md bg-paper p-3 text-[14px] font-semibold leading-relaxed text-ink-soft">
              {alert}
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary" icon={<ListChecks className="h-5 w-5" strokeWidth={1.75} />} onClick={onGoList}>
          Check List
        </Button>
        <Button variant="secondary" icon={<Download className="h-5 w-5" strokeWidth={1.75} />} onClick={onExport}>
          Export
        </Button>
      </div>
    </main>
  );
}
