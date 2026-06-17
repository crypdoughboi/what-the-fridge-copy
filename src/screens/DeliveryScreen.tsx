import { useMemo } from 'react';
import { Clock, ExternalLink, ShoppingCart, Truck } from 'lucide-react';
import { DeliveryLineItem, DeliveryQuote } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pill } from '../components/Pill';
import { BackButton } from '../components/BackButton';
import { compareDeliveryQuotes, formatEta } from '../services/deliveryComparisonService';

export function DeliveryScreen({
  items,
  onBack,
  onGoList,
  onCheckout,
}: {
  items: DeliveryLineItem[];
  onBack: () => void;
  onGoList: () => void;
  onCheckout: (quote: DeliveryQuote) => void;
}) {
  const quotes = useMemo(() => compareDeliveryQuotes(items), [items]);
  const hasEstimated = items.some((item) => item.estimated);

  if (items.length === 0) {
    return (
      <main className="screen-enter space-y-6">
        <BackButton onClick={onBack} label="Back" />
        <section>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Get it delivered</p>
          <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Your list is empty.</h1>
          <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
            Add a few things to Need to Buy and we'll compare delivery prices across services.
          </p>
        </section>
        <Button onClick={onGoList}>Go to your list</Button>
      </main>
    );
  }

  const best = quotes.find((quote) => quote.isBestPrice);

  return (
    <main className="screen-enter space-y-6">
      <BackButton onClick={onBack} label="Back to List" />

      <section>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Get it delivered</p>
        <h1 className="mt-2 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">Compare delivery.</h1>
        <p className="mt-3 text-[16px] font-medium leading-[1.45] text-ink-soft">
          Estimated totals for the {items.length} item{items.length === 1 ? '' : 's'} on your list, including delivery and service fees.
        </p>
      </section>

      {best && (
        <Card className="bg-[linear-gradient(140deg,#3a5e3c_0%,#2f5131_60%,#21301b_100%)] text-white">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">Cheapest option</p>
          <div className="mt-1 flex items-end justify-between gap-3">
            <h2 className="font-display text-[24px] font-extrabold tracking-[-0.02em] text-white">{best.providerName}</h2>
            <span className="font-display text-[28px] font-extrabold tracking-[-0.02em] text-white">${best.estimatedTotal.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-[14px] font-medium leading-snug text-white/85">
            {best.fulfillment} · {formatEta(best.etaMinutes)}
          </p>
        </Card>
      )}

      <div className="space-y-3">
        {quotes.map((quote) => (
          <Card key={quote.providerId} className={quote.isBestPrice ? 'border-accent ring-1 ring-accent/30' : ''}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
                    <Truck className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">{quote.providerName}</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Pill tone={quote.isBestPrice ? 'green' : 'neutral'}>{quote.fulfillment}</Pill>
                  <Pill>
                    <Clock className="mr-1 h-3.5 w-3.5" strokeWidth={2} />
                    {formatEta(quote.etaMinutes)}
                  </Pill>
                  {quote.isBestPrice && <Pill tone="green">Best price</Pill>}
                  {quote.isFastest && !quote.isBestPrice && <Pill>Fastest</Pill>}
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-[24px] font-extrabold tracking-[-0.02em] text-ink">${quote.estimatedTotal.toFixed(2)}</p>
                <p className="text-[12px] font-medium text-muted">est. total</p>
              </div>
            </div>

            <div className="mt-3 space-y-1 rounded-md bg-paper p-3 text-[13px] font-medium text-ink-soft">
              <FeeRow label={`Items (${quote.itemCount})`} value={quote.itemsSubtotal} />
              <FeeRow label="Delivery fee" value={quote.deliveryFee} free={quote.deliveryFee === 0} />
              <FeeRow label="Service fee" value={quote.serviceFee} free={quote.serviceFee === 0} />
            </div>

            <p className="mt-3 text-[13px] font-medium leading-relaxed text-muted">{quote.note}</p>

            <Button
              className="mt-3"
              variant={quote.isBestPrice ? 'primary' : 'secondary'}
              full
              icon={quote.fulfillment === 'Curbside pickup' ? <ShoppingCart className="h-5 w-5" strokeWidth={1.75} /> : <ExternalLink className="h-5 w-5" strokeWidth={1.75} />}
              onClick={() => onCheckout(quote)}
            >
              Continue to {quote.providerName}
            </Button>
          </Card>
        ))}
      </div>

      <p className="text-[12px] font-medium leading-relaxed text-muted">
        Estimates only. {hasEstimated ? 'Prices for items without purchase history use category averages. ' : ''}Final totals, tips, and item availability are set by each
        service at checkout.
      </p>
    </main>
  );
}

function FeeRow({ label, value, free = false }: { label: string; value: number; free?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span className={free ? 'font-semibold text-accent' : 'font-semibold text-ink'}>{free ? 'Free' : `$${value.toFixed(2)}`}</span>
    </div>
  );
}
