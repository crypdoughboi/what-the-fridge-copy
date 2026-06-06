export function SampleReceiptVisual() {
  const rows = ['BNNA ORG      2.49', 'GRK YGRT      5.99', 'CHKN THGH     9.87', 'SPINACH BAG   2.99', 'OATMILK       3.49'];
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-surface p-4 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,var(--color-surface)_0_10px,var(--color-line)_10px_18px)]" />
      <div className="pt-3 text-center">
        <p className="text-[11px] font-semibold uppercase text-ink">Trader Joe's</p>
        <p className="mt-1 text-[10px] font-semibold text-muted">Receipt scan preview</p>
      </div>
      <div className="mt-4 space-y-2 font-mono text-[11px] font-semibold text-ink-soft">
        {rows.map((row) => (
          <div key={row} className="flex justify-between border-b border-dashed border-line pb-1">
            <span>{row.slice(0, 12)}</span>
            <span>{row.slice(12)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between border-t border-line pt-3 text-sm font-semibold">
        <span>TOTAL</span>
        <span>$86.42</span>
      </div>
    </div>
  );
}

export function SampleFridgeVisual() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-surface p-4 shadow-sm">
      <div className="grid h-52 grid-rows-[1fr_1fr_0.7fr] gap-3 rounded-lg border-4 border-paper bg-paper p-3">
        <div className="grid grid-cols-3 gap-2">
          <FoodBlock color="bg-line" label="eggs" />
          <FoodBlock color="bg-accent-soft" label="spinach" />
          <FoodBlock color="bg-surface" label="yogurt" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FoodBlock color="bg-accent-soft" label="cucumbers" />
          <FoodBlock color="bg-line" label="berries" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <FoodBlock color="bg-surface" label="oat milk" />
          <FoodBlock color="bg-line" label="?" />
          <FoodBlock color="bg-accent-soft" label="low" />
        </div>
      </div>
      <div className="absolute right-5 top-5 rounded-pill bg-ink px-3 py-1 text-[11px] font-semibold text-paper">Fridge check</div>
    </div>
  );
}

function FoodBlock({ color, label }: { color: string; label: string }) {
  return (
    <div className={`grid place-items-center rounded-sm ${color} px-1 text-center text-[10px] font-semibold text-ink-soft`}>
      {label}
    </div>
  );
}
