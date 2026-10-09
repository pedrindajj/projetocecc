import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { dishes, getDish, secondaryDetails, sources } from "@/data/content";
import { Figure, Reveal, accentBg, accentText } from "@/components/site";
import { Ingredients, Steps } from "@/components/RecipeTools";
import { QuizBlock } from "@/components/QuizBlock";

export const Route = createFileRoute("/receitas/$slug")({
  loader: ({ params }) => {
    const dish = getDish(params.slug);
    if (!dish) throw notFound();
    return { slug: dish.slug };
  },
  head: ({ loaderData }) => {
    const d = loaderData ? getDish(loaderData.slug) : undefined;
    if (!d) return { meta: [{ title: "Receita não encontrada" }, { name: "robots", content: "noindex" }] };
    const title = `${d.name}: história e receita | Raízes & Sabores`;
    return { meta: [
      { title }, { name: "description", content: d.tagline },
      { property: "og:title", content: title }, { property: "og:description", content: d.tagline },
    ] };
  },
  notFoundComponent: () => <div className="px-6 pt-40 text-center">Receita não encontrada.</div>,
  component: DishPage,
});

const kindLabel = { fato: "Fato documentado", tradição: "Tradição oral", contexto: "Contexto histórico" };

function DishPage() {
  const { slug } = Route.useLoaderData();
  const d = getDish(slug)!;
  const extra = secondaryDetails[d.slug];
  const ingredients = d.main ? d.ingredients : extra?.ingredients ?? [];
  const steps = d.main ? d.steps : extra?.steps ?? [];
  const mains = dishes.filter((x) => x.main);
  const idx = mains.findIndex((x) => x.slug === d.slug);
  const next = idx >= 0 ? mains[(idx + 1) % mains.length] : undefined;

  return (
    <article>
      <header className="grain relative flex min-h-[85vh] items-end overflow-hidden">
        {d.image ? (
          <>
            <Figure image={d.image} eager className="animate-slowzoom absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </>
        ) : (
          <div className={`absolute inset-0 opacity-25 ${accentBg[d.accent]}`} />
        )}
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
          <p className={`eyebrow animate-rise ${accentText[d.accent]}`}>{d.region}</p>
          <h1 className="animate-rise mt-4 text-6xl md:text-9xl">{d.name}</h1>
          <p className="animate-rise mt-6 max-w-2xl text-xl text-muted-foreground">{d.tagline}</p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-display text-2xl leading-relaxed md:text-3xl">{d.intro}</p>
        {extra && <p className="mt-6 text-muted-foreground">{extra.note}</p>}
      </section>

      {d.story.length > 0 && (
        <section className="mx-auto max-w-3xl space-y-20 px-6 pb-24">
          {d.story.map((s, i) => (
            <Reveal key={s.title}>
              {s.image && <Figure image={s.image} className="mb-8 aspect-[3/2]" />}
              <p className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")} · <span className={s.kind === "contexto" ? "text-accent" : ""}>{kindLabel[s.kind]}</span></p>
              <h2 className="mt-3 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {s.text}{" "}
                {s.refs.map((r) => <sup key={r} className="text-accent">[{d.refs.indexOf(r) + 1}]</sup>)}
              </p>
            </Reveal>
          ))}
        </section>
      )}

      {ingredients.length > 0 && (
        <section className="bg-paper py-24 text-paper-foreground">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow text-dende">Ingredientes</p>
              <h2 className="mb-8 mt-3 text-4xl">Na despensa</h2>
              <Ingredients items={ingredients} baseServings={d.baseServings} />
            </div>
            <div>
              <p className="eyebrow text-dende">Modo de preparo</p>
              <h2 className="mb-8 mt-3 text-4xl">Mãos à obra</h2>
              <Steps steps={steps} />
            </div>
          </div>
        </section>
      )}

      {d.facts.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-accent">Você sabia?</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {d.facts.map((f) => <Reveal key={f} className="border-l-2 border-accent pl-6 text-lg">{f}</Reveal>)}
          </div>
        </section>
      )}

      {d.quiz.length > 0 && (
        <section className="border-y border-border bg-card py-24">
          <div className="mx-auto max-w-2xl px-6"><QuizBlock questions={d.quiz.map((q) => ({ ...q, image: d.image }))} /></div>
        </section>
      )}

      {d.refs.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="eyebrow text-accent">Fontes</p>
          <ol className="mt-6 space-y-3 text-sm text-muted-foreground">
            {d.refs.map((r, i) => <li key={r}>[{i + 1}] {sources[r]}</li>)}
          </ol>
          {d.image?.aiGenerated && <p className="mt-6 text-xs text-muted-foreground">Imagem: {d.image.credit}</p>}
        </section>
      )}

      {next && (
        <Link to="/receitas/$slug" params={{ slug: next.slug }} className="block border-t border-border py-20 text-center hover:bg-card">
          <p className="eyebrow text-muted-foreground">Próxima sala</p>
          <p className={`mt-3 font-display text-5xl ${accentText[next.accent]}`}>{next.name} →</p>
        </Link>
      )}
    </article>
  );
}
