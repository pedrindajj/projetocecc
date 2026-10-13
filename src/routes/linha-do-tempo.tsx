import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { sources, timeline } from "@/data/content";
import { Figure, Reveal } from "@/components/site";

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
    <div className="mx-auto max-w-5xl px-6 pb-28 pt-36">
      <p className="eyebrow text-accent">Linha do tempo</p>
      <h1 className="mt-4 text-5xl md:text-7xl">Marcos de uma história</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Nove momentos que ajudam a entender como as cozinhas africanas e afro-brasileiras chegaram até aqui — cada um com sua imagem de contexto.
      </p>
      <div className="mt-10 flex flex-wrap gap-2">
        {regions.map((r) => (
          <button key={r} onClick={() => setF(r)} className={`eyebrow border px-4 py-2 ${f === r ? "border-accent text-accent" : "border-border text-muted-foreground"}`}>{r}</button>
        ))}
      </div>
      <ol className="relative mt-16 border-l border-border">
        {items.map((e, i) => {
          const flip = i % 2 === 1;
          return (
            <li key={e.title} className="mb-20 pl-10 last:mb-0">
              <span className={`absolute -left-[5px] mt-3 h-2.5 w-2.5 rounded-full ${dot[e.region]}`} />
              <Reveal>
                <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
                  {e.image && (
                    <Figure
                      image={e.image}
                      className={`aspect-[16/10] overflow-hidden rounded-sm border border-border/60 ${flip ? "md:order-2" : "md:order-1"}`}
                    />
                  )}
                  <div className={flip ? "md:order-1" : "md:order-2"}>
                    <p className="font-display text-4xl text-accent">{e.year}</p>
                    <h2 className="mt-2 text-2xl">{e.title}</h2>
                    <p className="mt-3 text-muted-foreground">{e.text}</p>
                    {e.ref && <p className="mt-3 text-sm text-muted-foreground">Fonte: {sources[e.ref]}</p>}
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
