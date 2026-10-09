import { useState } from "react";
import { CERT_MIN_SCORE, canEarnCertificate } from "@/lib/certificate";

export function Certificate({ score, total }: { score: number; total: number }) {
  const [name, setName] = useState("");
  if (!canEarnCertificate(score)) {
    return <p className="mt-10 text-sm text-muted-foreground">Acerte {CERT_MIN_SCORE} ou mais para ganhar o certificado do museu.</p>;
  }
  const date = new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className="mt-14 text-left">
      <label className="no-print block">
        <span className="eyebrow text-accent">Seu certificado</span>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome completo" maxLength={60}
          className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-lg outline-none focus:border-accent" />
      </label>
      {name.trim() && (
        <>
          <div id="certificado" className="mt-8 border-4 border-double border-accent bg-card p-3">
            <div className="border border-accent/50 px-6 py-12 text-center md:px-12">
              <p className="eyebrow text-accent">Museu Raízes & Sabores</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Certificado de Honra ao Mérito</h2>
              <p className="mt-8 text-muted-foreground">Certificamos que</p>
              <p className="mt-3 font-display text-4xl md:text-5xl">{name.trim()}</p>
              <p className="mx-auto mt-6 max-w-md text-muted-foreground">
                concluiu o Desafio dos Sabores com {score} de {total} acertos, demonstrando conhecimento sobre a culinária africana e afro-brasileira.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">{date}</p>
              <div className="mt-10 grid gap-6 text-sm sm:grid-cols-2">
                <div className="border-t border-border pt-2">Pedro Henrique<br /><span className="text-muted-foreground">Curador</span></div>
                <div className="border-t border-border pt-2">Lian da Silva<br /><span className="text-muted-foreground">Curadora</span></div>
              </div>
              <p className="mt-8 text-xs text-muted-foreground">Colégio Estadual Cidade de Candeias · Turma 2º A · Bahia</p>
            </div>
          </div>
          <button onClick={() => window.print()} className="no-print mt-6 bg-primary px-6 py-3 eyebrow text-primary-foreground">
            Baixar / Imprimir PDF
          </button>
        </>
      )}
    </div>
  );
}
