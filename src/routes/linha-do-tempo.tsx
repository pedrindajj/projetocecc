import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { sources, timeline } from "@/data/content";
import { Reveal } from "@/components/site";

export const Route = createFileRoute("/linha-do-tempo")({
  head: () => ({
    meta: [
      { title: "Linha do tempo | Raízes & Sabores" },
      { name: "description", content: "Do comércio no Oceano Índico ao registro do acarajé como patrimônio." },
      { property: "og:title", content: "Linha do tempo | Raízes & Sabores" },
      { property: "og:description", content: "Marcos históricos das cozinhas africanas e afro-brasileiras." },
    ],
  }),
  component: Timeline,
});

const regions = ["Todos", "Índico", "Atlântico", "Brasil"] as const;
const dot = { Índico: "bg-oceano", Atlântico: "bg-dende", Brasil: "bg-milho" };

function Timeline() {
  const [f, setF] = useState<(typeof regions)[number]>("Todos");
  const items = timeline.filter((e) => f === "Todos" || e.region === f);
  return (
    <div className="mx-auto max-w-4xl px-6 pb-28 pt-36">
      <p className="eyebrow text-accent">Linha do tempo</p>
      <h1 className="mt-4 text-5xl md:text-7xl">Marcos de uma história</h1>
      <div className="mt-10 flex flex-wrap gap-2">
        {regions.map((r) => (
          <button key={r} onClick={() => setF(r)} className={`eyebrow border px-4 py-2 ${f === r ? "border-accent text-accent" : "border-border text-muted-foreground"}`}>{r}</button>
        ))}
      </div>
      <ol className="relative mt-16 border-l border-border">
        {items.map((e) => (
          <li key={e.title} className="mb-16 pl-10">
            <span className={`absolute -left-[5px] mt-3 h-2.5 w-2.5 rounded-full ${dot[e.region]}`} />
            <Reveal>
              <p className="font-display text-4xl text-accent">{e.year}</p>
              <h2 className="mt-2 text-2xl">{e.title}</h2>
              <p className="mt-3 text-muted-foreground">{e.text}</p>
              {e.ref && <p className="mt-3 text-xs text-muted-foreground/70">Fonte: {sources[e.ref]}</p>}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
