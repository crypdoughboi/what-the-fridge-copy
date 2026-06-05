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
          <p className="text-[12px] font-black uppercase text-herb">Friend Rebuys</p>
          <h2 className="mt-1 text-xl font-black text-ink">Friends keep rebuying</h2>
        </div>
        <span className="rounded-full bg-linen px-3 py-1 text-[11px] font-black text-steel">Preview</span>
      </div>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-steel">
        Trusted product tips from friends. No influencer nonsense.
      </p>
      <div className="mt-4 space-y-2">
        {items.map((item) => {
          const recommended = recommendedItems.includes(item);
          return (
            <div key={item} className="rounded-2xl bg-linen/72 p-3">
              <p className="text-[15px] font-black text-ink">{item}</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <Button
                  variant={recommended ? 'primary' : 'secondary'}
                  className="min-h-10 px-2 text-xs"
                  icon={<ThumbsUp className="h-3.5 w-3.5" />}
                  onClick={() => onRecommend(item)}
                >
                  Recommend
                </Button>
                <Button variant="secondary" className="min-h-10 px-2 text-xs" icon={<Lock className="h-3.5 w-3.5" />} onClick={() => onKeepPrivate(item)}>
                  Private
                </Button>
                <Button variant="secondary" className="min-h-10 px-2 text-xs" icon={<Plus className="h-3.5 w-3.5" />} onClick={() => onAddToList(item)}>
                  Add
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-2xl bg-white/72 p-3 text-xs font-bold leading-relaxed text-steel">
        Receipts are private by default. Spending totals are never shared. Exact purchase history is never shared.
      </div>
    </Card>
  );
}
