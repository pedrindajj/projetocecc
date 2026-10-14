import { createFileRoute, Link } from "@tanstack/react-router";
import { dishes } from "@/data/content";
import { Figure, accentBg, accentText } from "@/components/site";

export const Route = createFileRoute("/receitas/")({
  head: () => ({
    meta: [
      { title: "Acervo de receitas | Raízes & Sabores" },
      { name: "description", content: "Arroz de Hauçá, Qumbe, Angu à Baiana e outras receitas africanas e afro-brasileiras." },
      { property: "og:title", content: "Acervo de receitas | Raízes & Sabores" },
      { property: "og:description", content: "Três pratos protagonistas e quatro sabores complementares." },
    ],
  }),
  component: Receitas,
});

function Receitas() {
  const main = dishes.filter((d) => d.main);
  const sec = dishes.filter((d) => !d.main);
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <p className="eyebrow text-accent">Acervo</p>
      <h1 className="mt-4 text-5xl md:text-7xl">As receitas</h1>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {main.map((d) => (
          <Link key={d.slug} to="/receitas/$slug" params={{ slug: d.slug }} className="group">
            {d.image && <Figure image={d.image} className="aspect-[3/4] transition-opacity group-hover:opacity-90" />}
            <p className={`eyebrow mt-5 ${accentText[d.accent]}`}>{d.region}</p>
            <p className="mt-2 font-display text-3xl">{d.name}</p>
          </Link>
        ))}
      </div>
      <h2 className="mt-24 text-3xl">Outros sabores</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sec.map((d) => (
          <Link key={d.slug} to="/receitas/$slug" params={{ slug: d.slug }} className="overflow-hidden rounded-3xl border border-border shadow-soft hover:bg-card">
            {d.image && (
              <img src={d.image.src} alt={d.image.alt} width={944} height={704} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            )}
            <div className="p-6">
              <span className={`block h-1 w-10 ${accentBg[d.accent]}`} />
              <p className="mt-5 font-display text-2xl">{d.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
