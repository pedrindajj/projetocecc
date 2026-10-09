import { createFileRoute } from "@tanstack/react-router";
import { glossary } from "@/data/glossary";
import { sources } from "@/data/content";
import { Figure, Reveal } from "@/components/site";

export const Route = createFileRoute("/glossario")({
  head: () => ({
    meta: [
      { title: "Glossário ilustrado | Raízes & Sabores" },
      { name: "description", content: "Dendê, quitandeira, hauçá, qumbe: as palavras-chave da culinária africana e afro-brasileira explicadas e ilustradas." },
      { property: "og:title", content: "Glossário ilustrado | Raízes & Sabores" },
      { property: "og:description", content: "As palavras-chave da culinária africana e afro-brasileira, explicadas e ilustradas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GlossarioPage,
});

function GlossarioPage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center">
        <p className="eyebrow text-accent">Palavras com história</p>
        <h1 className="mt-4 text-6xl md:text-8xl">Glossário</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Os termos que aparecem pelo museu, explicados com fontes e imagens.
        </p>
      </header>

      <section className="mx-auto max-w-5xl space-y-24 px-6 pb-32">
        {glossary.map((g, i) => (
          <Reveal key={g.term} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            {g.image && <Figure image={g.image} className="aspect-[3/2]" />}
            <div>
              <p className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-4xl md:text-5xl">{g.term}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {g.def}{" "}
                {g.refs.map((r) => <sup key={r} className="text-accent">[{g.refs.indexOf(r) + 1}]</sup>)}
              </p>
              <ol className="mt-4 space-y-1 text-xs text-muted-foreground">
                {g.refs.map((r, j) => <li key={r}>[{j + 1}] {sources[r]}</li>)}
              </ol>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
