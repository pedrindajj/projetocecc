import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { dishes } from "@/data/content";
import { Figure, Reveal, accentBg, accentText } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raízes & Sabores: uma travessia pelo sabor" },
      { name: "description", content: "Museu digital da culinária africana e afro-brasileira: Arroz de Hauçá, Qumbe e Angu à Baiana." },
      { property: "og:title", content: "Raízes & Sabores: uma travessia pelo sabor" },
      { property: "og:description", content: "Três cozinhas, três caminhos. Histórias, receitas e mapa interativo." },
    ],
  }),
  component: Home,
});

const ingredients = [
  { name: "Dendê", text: "Óleo da palmeira Elaeis guineensis, nativa da África Ocidental e trazida ao Brasil." },
  { name: "Coco", text: "Base do Qumbe somali e do leite de coco baiano." },
  { name: "Cardamomo", text: "Especiaria que circulava no comércio do Oceano Índico." },
  { name: "Milho", text: "Planta americana que virou o angu das ruas do Rio." },
  { name: "Quiabo", text: "Hortaliça de origem africana, alma do caruru." },
  { name: "Feijão-fradinho", text: "Domesticado na África Ocidental e base do acarajé." },
];

function Home() {
  const main = dishes.filter((d) => d.main);
  const secondary = dishes.filter((d) => !d.main);
  return (
    <>
      <section className="grain relative flex h-screen min-h-[640px] items-end overflow-hidden">
        <img src={heroImg} alt="Cozinha a lenha baiana ao entardecer, com panelas de barro e dendê" width={1920} height={1088} className="animate-slowzoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20">
          <p className="eyebrow animate-rise font-medium text-accent">Um museu digital · Candeias, Bahia</p>
          <h1 className="animate-rise mt-6 text-6xl leading-[0.95] md:text-[9rem]" style={{ animationDelay: "200ms" }}>
            Raízes <em className="text-primary">&</em><br />Sabores
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "500ms" }}>
            Uma travessia pela diversidade culinária africana e afro-brasileira.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal>
          <p className="eyebrow text-accent">Capítulo I</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Um continente, muitas cozinhas</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A África não tem uma cozinha só. Tem mais de cinquenta países e milhares de povos. Algumas dessas tradições atravessaram o Atlântico à força e se reinventaram na Bahia e no Rio. Outras seguiram vivas na costa do Oceano Índico. Aqui, cada prato conta o seu próprio caminho.
          </p>
          <Link to="/mapa" className="eyebrow mt-8 inline-block border-b border-accent pb-1 text-accent">Abrir o mapa →</Link>
        </Reveal>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <p className="eyebrow text-accent">Capítulo II</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Três cozinhas, três caminhos</h2>
        </div>
        {main.map((d, i) => (
          <article key={d.slug} className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              {d.image && <Figure image={d.image} className="aspect-[4/3]" />}
            </Reveal>
            <Reveal delay={150}>
              <p className={`eyebrow ${accentText[d.accent]}`}>{String(i + 1).padStart(2, "0")} · {d.region}</p>
              <h3 className="mt-4 text-5xl md:text-7xl">{d.name}</h3>
              <p className="mt-6 text-lg text-muted-foreground">{d.tagline}</p>
              <Link to="/receitas/$slug" params={{ slug: d.slug }} className={`eyebrow mt-8 inline-block px-6 py-4 text-background ${accentBg[d.accent]}`}>
                Entrar na sala
              </Link>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="bg-paper py-28 text-paper-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-dende">Capítulo III</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Ingredientes que contam histórias</h2>
          <div className="mt-14 grid gap-px bg-paper-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {ingredients.map((g) => (
              <div key={g.name} className="bg-paper p-8">
                <p className="font-display text-3xl">{g.name}</p>
                <p className="mt-3 text-paper-foreground/75">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="eyebrow text-accent">Mais sabores</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((d) => (
            <Link key={d.slug} to="/receitas/$slug" params={{ slug: d.slug }} className="group border border-border transition-colors hover:bg-card">
              {d.image && (
                <img src={d.image.src} alt={d.image.alt} width={944} height={704} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              )}
              <div className="p-6">
                <span className={`block h-1 w-10 ${accentBg[d.accent]}`} />
                <p className="mt-6 font-display text-2xl group-hover:text-accent">{d.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d.region}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            { to: "/mapa" as const, t: "Mapa", d: "Origens, associações e rotas documentadas." },
            { to: "/linha-do-tempo" as const, t: "Linha do tempo", d: "Do comércio no Índico ao patrimônio do acarajé." },
            { to: "/quiz" as const, t: "Quiz", d: "Teste o que você aprendeu." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="border-border p-10 transition-colors hover:bg-card md:border-r last:border-r-0">
              <p className="font-display text-4xl">{c.t} →</p>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
