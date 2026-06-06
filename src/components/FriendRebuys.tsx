import { Lock, Plus, ThumbsUp } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

export function FriendRebuys({
  items,
  recommendedItems,
  onRecommend,
  onKeepPrivate,
  onAddToList,
}: {
  items: string[];
  recommendedItems: string[];
  onRecommend: (item: string) => void;
  onKeepPrivate: (item: string) => void;
  onAddToList: (item: string) => void;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Friend Rebuys</p>
          <h2 className="mt-1 font-display text-[21px] font-bold tracking-[-0.02em] text-ink">Friends keep rebuying</h2>
        </div>
        <span className="rounded-pill bg-paper px-3 py-1 text-[12px] font-semibold text-muted">Preview</span>
      </div>
      <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink-soft">
        Trusted product tips from friends. No influencer nonsense.
      </p>
      <div className="mt-4 space-y-2">
        {items.map((item) => {
          const recommended = recommendedItems.includes(item);
          return (
            <div key={item} className="rounded-md bg-paper p-3">
              <p className="text-[15px] font-semibold text-ink">{item}</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <Button
                  variant={recommended ? 'primary' : 'secondary'}
                  className="min-h-10 px-2 text-[12px]"
                  icon={<ThumbsUp className="h-4 w-4" strokeWidth={1.75} />}
                  onClick={() => onRecommend(item)}
                >
                  Recommend
                </Button>
                <Button variant="secondary" className="min-h-10 px-2 text-[12px]" icon={<Lock className="h-4 w-4" strokeWidth={1.75} />} onClick={() => onKeepPrivate(item)}>
                  Private
                </Button>
                <Button variant="secondary" className="min-h-10 px-2 text-[12px]" icon={<Plus className="h-4 w-4" strokeWidth={1.75} />} onClick={() => onAddToList(item)}>
                  Add
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-md bg-surface p-3 text-[12px] font-medium leading-relaxed text-muted">
        Receipts are private by default. Spending totals are never shared. Exact purchase history is never shared.
      </div>
    </Card>
  );
}
