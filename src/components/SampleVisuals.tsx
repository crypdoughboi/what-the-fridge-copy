export function SampleReceiptVisual() {
  const rows = ['BNNA ORG      2.49', 'GRK YGRT      5.99', 'CHKN THGH     9.87', 'SPINACH BAG   2.99', 'OATMILK       3.49'];
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-ink/10 bg-receipt p-4 shadow-card">
      <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,#fffdf7_0_10px,#e9dfce_10px_18px)]" />
      <div className="pt-3 text-center">
        <p className="text-[11px] font-black uppercase text-ink">Trader Joe's</p>
        <p className="mt-1 text-[10px] font-bold text-steel">Receipt scan preview</p>
      </div>
      <div className="mt-4 space-y-2 font-mono text-[11px] font-bold text-ink/78">
        {rows.map((row) => (
          <div key={row} className="flex justify-between border-b border-dashed border-ink/10 pb-1">
            <span>{row.slice(0, 12)}</span>
            <span>{row.slice(12)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between border-t border-ink/20 pt-3 text-sm font-black">
        <span>TOTAL</span>
        <span>$86.42</span>
      </div>
    </div>
  );
}

export function SampleFridgeVisual() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-ink/10 bg-[#dfe9ea] p-4 shadow-card">
      <div className="grid h-52 grid-rows-[1fr_1fr_0.7fr] gap-3 rounded-[20px] border-4 border-white/80 bg-[#f6fbfa] p-3">
        <div className="grid grid-cols-3 gap-2">
          <FoodBlock color="bg-butter" label="eggs" />
          <FoodBlock color="bg-herb" label="spinach" dark />
          <FoodBlock color="bg-white" label="yogurt" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FoodBlock color="bg-[#c7dfd5]" label="cucumbers" />
          <FoodBlock color="bg-[#e8d1c9]" label="berries" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <FoodBlock color="bg-[#f2f1ea]" label="oat milk" />
          <FoodBlock color="bg-[#eee2c7]" label="?" />
          <FoodBlock color="bg-[#d9e2dc]" label="low" />
        </div>
      </div>
      <div className="absolute right-5 top-5 rounded-full bg-ink px-3 py-1 text-[11px] font-black text-cream">Fridge check</div>
    </div>
  );
}

function FoodBlock({ color, label, dark = false }: { color: string; label: string; dark?: boolean }) {
  return (
    <div className={`grid place-items-center rounded-xl ${color} px-1 text-center text-[10px] font-black ${dark ? 'text-white' : 'text-ink/72'}`}>
      {label}
    </div>
  );
}
