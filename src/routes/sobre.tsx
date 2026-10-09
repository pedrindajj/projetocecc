import { createFileRoute } from "@tanstack/react-router";
import { dishes, sources } from "@/data/content";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o projeto | Raízes & Sabores" },
      { name: "description", content: "Projeto escolar de Pedro Henrique e Lian da Silva, 2º A, Colégio Estadual Cidade de Candeias." },
      { property: "og:title", content: "Sobre o projeto | Raízes & Sabores" },
      { property: "og:description", content: "Autores, fontes históricas e créditos de imagem." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-28 pt-36">
      <p className="eyebrow text-accent">Sobre</p>
      <h1 className="mt-4 text-5xl md:text-7xl">O projeto</h1>
      <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
        Raízes & Sabores é um projeto escolar de <strong className="text-foreground">Pedro Henrique</strong> e <strong className="text-foreground">Lian da Silva</strong>, da Turma 2º A do Colégio Estadual Cidade de Candeias, Bahia. O site apresenta a diversidade da culinária africana e sua herança no Brasil e separa sempre o que é fato documentado, o que é tradição oral e o que é apenas contexto histórico.
      </p>
      <h2 className="mt-20 text-3xl">Fontes</h2>
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        {Object.entries(sources).map(([k, v]) => <li key={k}>{v}</li>)}
      </ul>
      <h2 className="mt-20 text-3xl">Créditos de imagem</h2>
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        <li><strong className="text-foreground">Abertura (cozinha a lenha):</strong> Imagem gerada por IA, cena ilustrativa.</li>
        {dishes.filter((d) => d.image).map((d) => (
          <li key={d.slug}><strong className="text-foreground">{d.name}:</strong> {d.image!.credit}</li>
        ))}
        <li><strong className="text-foreground">Mapa:</strong> Esri (World Dark Gray Canvas), via Leaflet.</li>
      </ul>
    </div>
  );
}
