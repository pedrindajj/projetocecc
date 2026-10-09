import { useState } from "react";
import type { QuizQ } from "@/data/content";

export function QuizBlock({ questions, onFinish }: { questions: QuizQ[]; onFinish?: (score: number) => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= questions.length;

  if (done) {
    return (
      <div className="text-center">
        <p className="eyebrow text-accent">Resultado</p>
        <p className="mt-4 font-display text-6xl">{score}/{questions.length}</p>
        <p className="mt-4 text-muted-foreground">
          {score === questions.length ? "Perfeito! Você conhece bem essas histórias." : "Bom caminho. Revisite as receitas e tente de novo."}
        </p>
        <button className="mt-8 border border-border px-6 py-3 eyebrow hover:bg-secondary" onClick={() => { setI(0); setScore(0); setPicked(null); }}>
          Recomeçar
        </button>
      </div>
    );
  }

  const q = questions[i]!;
  return (
    <div>
      {q.image && (
        <img src={q.image.src} alt={q.image.alt} width={944} height={704} loading="lazy" className="mb-6 aspect-[3/2] w-full rounded-sm object-cover" />
      )}
      <p className="eyebrow text-muted-foreground">Pergunta {i + 1} de {questions.length}</p>
      <h3 className="mt-3 text-2xl md:text-3xl">{q.q}</h3>
      <div className="mt-6 grid gap-3">
        {q.options.map((o, idx) => {
          const state = picked === null ? "" : idx === q.answer ? "border-folha bg-folha/20" : idx === picked ? "border-destructive bg-destructive/15" : "opacity-50";
          return (
            <button key={o} disabled={picked !== null} onClick={() => { setPicked(idx); if (idx === q.answer) setScore((s) => s + 1); }}
              className={`border border-border px-5 py-4 text-left transition-colors hover:bg-secondary ${state}`}>
              {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{q.explain}</p>
          <button className="bg-primary px-6 py-3 eyebrow text-primary-foreground" onClick={() => {
            const next = i + 1; setPicked(null); setI(next);
            if (next >= questions.length) onFinish?.(score);
          }}>
            {i + 1 < questions.length ? "Próxima" : "Ver resultado"}
          </button>
        </div>
      )}
    </div>
  );
}
