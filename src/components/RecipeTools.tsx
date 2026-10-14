import { useEffect, useState } from "react";
import type { Ingredient, Step } from "@/data/content";
import { formatQuantity, scaleQuantity } from "@/lib/scale";

export function Ingredients({ items, baseServings }: { items: Ingredient[]; baseServings: number }) {
  const [servings, setServings] = useState(baseServings);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  return (
    <div>
      <div className="flex items-center justify-between border-b border-paper-foreground/15 pb-4">
        <p className="eyebrow">Porções</p>
        <div className="flex items-center gap-3">
          <button aria-label="Diminuir porções" className="h-9 w-9 rounded-full border border-paper-foreground/30 text-lg transition-colors hover:bg-paper-foreground/10" onClick={() => setServings((s) => Math.max(1, s - 1))}>−</button>
          <span className="w-8 text-center font-display text-2xl">{servings}</span>
          <button aria-label="Aumentar porções" className="h-9 w-9 rounded-full border border-paper-foreground/30 text-lg transition-colors hover:bg-paper-foreground/10" onClick={() => setServings((s) => Math.min(24, s + 1))}>+</button>
        </div>
      </div>
      <ul className="mt-4 divide-y divide-paper-foreground/10">
        {items.map((it, i) => {
          const on = checked.has(i);
          return (
            <li key={it.name}>
              <label className={`flex cursor-pointer items-center gap-4 py-3 ${on ? "line-through opacity-50" : ""}`}>
                <input type="checkbox" checked={on} onChange={() => {
                  const n = new Set(checked); if (on) n.delete(i); else n.add(i); setChecked(n);
                }} />
                <span className="w-24 shrink-0 font-display text-lg">{formatQuantity(scaleQuantity(it.qty, baseServings, servings))} <span className="text-sm">{it.unit}</span></span>
                <span>{it.name}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Timer({ minutes }: { minutes: number }) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    if (left === null || left <= 0) return;
    const t = setTimeout(() => setLeft(left - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);
  if (left === null) return <button className="eyebrow rounded-full border border-current px-5 py-2 transition-opacity hover:opacity-70" onClick={() => setLeft(minutes * 60)}>Timer {minutes} min</button>;
  const m = Math.floor(left / 60), s = left % 60;
  return (
    <button className={`eyebrow rounded-full border border-current px-5 py-2 ${left === 0 ? "bg-primary text-primary-foreground" : ""}`} onClick={() => setLeft(null)}>
      {left === 0 ? "Pronto!" : `${m}:${String(s).padStart(2, "0")}`}
    </button>
  );
}

export function Steps({ steps }: { steps: Step[] }) {
  const [cooking, setCooking] = useState<number | null>(null);
  useEffect(() => {
    if (cooking === null) return;
    let lock: { release: () => Promise<void> } | undefined;
    const nav = navigator as Navigator & { wakeLock?: { request: (t: "screen") => Promise<{ release: () => Promise<void> }> } };
    nav.wakeLock?.request("screen").then((l) => (lock = l)).catch(() => {});
    return () => { lock?.release(); };
  }, [cooking !== null]);

  return (
    <div>
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-5">
            <span className="font-display text-4xl text-dende">{String(i + 1).padStart(2, "0")}</span>
            <div className="pt-2">
              <p className="text-lg leading-relaxed">{s.text}</p>
              {s.minutes && <div className="mt-3"><Timer minutes={s.minutes} /></div>}
            </div>
          </li>
        ))}
      </ol>
      <button className="mt-10 rounded-full bg-primary px-8 py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90" onClick={() => setCooking(0)}>Entrar no modo cozinha</button>

      {cooking !== null && (
        <div className="fixed inset-0 z-[2000] flex flex-col bg-background text-foreground" role="dialog" aria-label="Modo cozinha">
          <div className="flex items-center justify-between px-6 py-5">
            <p className="eyebrow text-accent">Passo {cooking + 1} de {steps.length}</p>
            <button className="eyebrow rounded-full border border-border px-5 py-2 transition-colors hover:bg-secondary" onClick={() => setCooking(null)}>Sair ✕</button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="max-w-3xl font-display text-3xl leading-snug md:text-5xl">{steps[cooking]?.text}</p>
            {steps[cooking]?.minutes && <div className="mt-10 text-accent"><Timer key={cooking} minutes={steps[cooking]!.minutes!} /></div>}
          </div>
          <div className="flex items-stretch gap-3 border-t border-border px-6 py-5">
            <button className="eyebrow flex-1 rounded-full border border-border py-4 transition-colors hover:bg-secondary disabled:opacity-30" disabled={cooking === 0} onClick={() => setCooking(cooking - 1)}>← Anterior</button>
            <button className="eyebrow flex-1 rounded-full bg-primary py-4 text-primary-foreground transition-opacity hover:opacity-90" onClick={() => cooking + 1 < steps.length ? setCooking(cooking + 1) : setCooking(null)}>
              {cooking + 1 < steps.length ? "Próximo →" : "Concluir ✓"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
