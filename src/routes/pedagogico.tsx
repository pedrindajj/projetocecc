import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pedagogico")({
  head: () => ({
    meta: [
      { title: "Espaço Pedagógico: guia do professor | Raízes & Sabores" },
      { name: "description", content: "Planos de aula alinhados à Lei 10.639/03 para usar o museu Raízes & Sabores em sala." },
      { property: "og:title", content: "Espaço Pedagógico | Raízes & Sabores" },
      { property: "og:description", content: "Três planos de aula prontos sobre culinária africana e afro-brasileira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Pedagogico,
});

const plans = [
  {
    title: "A rota das especiarias no Índico",
    subjects: "Geografia · História",
    time: "2 aulas de 50 min",
    goal: "Entender que a África tem várias histórias culinárias, incluindo o comércio do Oceano Índico, e não só a travessia atlântica.",
    steps: [
      "Abrir a página do Qumbe e ler o capítulo “Outro oceano, outra história”.",
      "No Mapa, comparar a costa somali com a rota Golfo do Benin → Bahia.",
      "Em grupos, listar produtos que circulavam no Índico (coco, cardamomo, tecidos).",
      "Discussão: por que não há linha da Somália ao Brasil no mapa?",
    ],
    link: { to: "/receitas/$slug", slug: "qumbe", label: "Página do Qumbe" },
  },
  {
    title: "As quitandeiras na economia urbana do século XIX",
    subjects: "História · Artes",
    time: "2 aulas de 50 min",
    goal: "Reconhecer o trabalho das mulheres negras, escravizadas de ganho ou libertas, nas ruas do Rio e de Salvador.",
    steps: [
      "Observar a prancha de Debret “Negras vendedoras de angu” (pesquisa de imagem).",
      "Ler o capítulo “As vendedoras de angu” na página do Angu à Baiana.",
      "Debater: o que era o “escravo de ganho”? Como a venda de comida dava renda?",
      "Produção: cada aluno cria um tabuleiro ilustrado com quitutes e preços imaginados.",
    ],
    link: { to: "/receitas/$slug", slug: "angu-a-baiana", label: "Página do Angu" },
  },
  {
    title: "Química e tradição: o dendê e a fermentação",
    subjects: "Química · Biologia · Ciências",
    time: "1 a 2 aulas de 50 min",
    goal: "Relacionar saberes tradicionais de cozinha com conceitos científicos: óleos, carotenoides e fermentação.",
    steps: [
      "Ler o termo “Dendê” no Glossário e a origem da palmeira Elaeis guineensis.",
      "Explicar por que o dendê é vermelho (betacaroteno) e sólido em dias frios (gorduras saturadas).",
      "Mostrar como a massa do acarajé é batida para incorporar ar e o papel da fritura.",
      "Fechamento: valorizar os saberes das baianas de acarajé, patrimônio do IPHAN.",
    ],
    link: { to: "/glossario", slug: "", label: "Glossário" },
  },
] as const;

function Pedagogico() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-28 pt-36">
      <p className="eyebrow text-accent">Espaço Pedagógico</p>
      <h1 className="mt-4 text-5xl md:text-6xl">Guia do professor</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Este museu digital pode ser usado em sala de aula por professores de História, Geografia, Artes e Ciências.
      </p>

      <section className="mt-16 border-l-2 border-accent pl-6">
        <h2 className="text-3xl">Lei 10.639/03</h2>
        <p className="mt-4 text-muted-foreground">
          A Lei nº 10.639, de 9 de janeiro de 2003, alterou a LDB (Lei 9.394/96) e tornou obrigatório o ensino de história e cultura afro-brasileira e africana nas escolas de ensino fundamental e médio. Em 2008, a Lei 11.645 incluiu também a cultura indígena. A culinária é um caminho concreto para esse ensino: cada prato carrega povos, lugares, trabalho e memória.
        </p>
      </section>

      <h2 className="mt-20 text-3xl">Três planos de aula</h2>
      <div className="mt-8 grid gap-8">
        {plans.map((p, n) => (
          <article key={p.title} className="border border-border bg-card p-8">
            <p className="eyebrow text-muted-foreground">Plano {n + 1} · {p.subjects} · {p.time}</p>
            <h3 className="mt-3 text-2xl md:text-3xl">{p.title}</h3>
            <p className="mt-4"><strong>Objetivo:</strong> {p.goal}</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
              {p.steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            {p.link.to === "/glossario"
              ? <Link to="/glossario" className="mt-6 inline-block eyebrow text-accent underline underline-offset-4">{p.link.label} →</Link>
              : <Link to="/receitas/$slug" params={{ slug: p.link.slug }} className="mt-6 inline-block eyebrow text-accent underline underline-offset-4">{p.link.label} →</Link>}
          </article>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-3xl">Avaliação sugerida</h2>
        <p className="mt-4 text-muted-foreground">
          Ao final, peça que os alunos façam o <Link to="/quiz" className="underline underline-offset-4">Quiz</Link>. Quem acertar 8 perguntas ou mais recebe um certificado com o próprio nome, que pode ser impresso ou salvo em PDF.
        </p>
      </section>
    </div>
  );
}
