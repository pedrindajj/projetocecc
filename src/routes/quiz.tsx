import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { generalQuiz } from "@/data/content";
import { QuizBlock } from "@/components/QuizBlock";
import { Certificate } from "@/components/Certificate";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Desafio dos Sabores: quiz | Raízes & Sabores" },
      { name: "description", content: "Quiz educativo sobre a culinária africana e afro-brasileira." },
      { property: "og:title", content: "Desafio dos Sabores | Raízes & Sabores" },
      { property: "og:description", content: "Quanto você sabe sobre Arroz de Hauçá, Qumbe e Angu à Baiana?" },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [best, setBest] = useState<number | null>(null);
  useEffect(() => { const v = localStorage.getItem("rs-quiz-best"); if (v) setBest(Number(v)); }, []);
  return (
    <div className="mx-auto max-w-2xl px-6 pb-28 pt-36">
      <p className="eyebrow text-accent">Desafio dos Sabores</p>
      <h1 className="mt-4 mb-4 text-5xl md:text-6xl">Quiz</h1>
      {best !== null && <p className="mb-10 text-sm text-muted-foreground">Seu melhor resultado: {best}/{generalQuiz.length}</p>}
      <div className="mt-10">
        <QuizBlock questions={generalQuiz} onFinish={(s) => {
          if (best === null || s > best) { localStorage.setItem("rs-quiz-best", String(s)); setBest(s); }
        }} renderResult={(s) => <Certificate score={s} total={generalQuiz.length} />} />
      </div>
    </div>
  );
}
