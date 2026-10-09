import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ImageInfo } from "@/data/content";

const links = [
  { to: "/receitas", label: "Receitas" },
  { to: "/mapa", label: "Mapa" },
  { to: "/linha-do-tempo", label: "Linha do tempo" },
  { to: "/quiz", label: "Quiz" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] border-b border-border/50 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl tracking-tight">
          Raízes <span className="text-primary">&</span> Sabores
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="eyebrow text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-accent" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="eyebrow md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-6 border-t border-border bg-background px-6 py-8 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-display text-3xl">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Raízes & Sabores</p>
          <p className="mt-2 text-sm text-muted-foreground">Um museu digital da culinária africana e afro-brasileira.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-2 text-accent">Autores</p>
          <p>Pedro Henrique e Lian da Silva</p>
          <p>Turma 2º A, Colégio Estadual Cidade de Candeias, Bahia</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-2 text-accent">Projeto escolar</p>
          <Link to="/sobre" className="underline underline-offset-4 hover:text-foreground">Fontes e créditos de imagem</Link>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function AiBadge() {
  return (
    <span className="eyebrow inline-flex items-center gap-1.5 rounded-sm bg-background/80 px-2 py-1 text-[0.6rem] text-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Imagem gerada por IA
    </span>
  );
}

export function Figure({ image, className = "", eager = false }: { image: ImageInfo; className?: string; eager?: boolean }) {
  return (
    <figure className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`}>
      <img src={image.src} alt={image.alt} loading={eager ? "eager" : "lazy"} width={1600} height={1008} className="h-full w-full object-cover" />
      {image.aiGenerated && <div className="absolute bottom-3 left-3"><AiBadge /></div>}
    </figure>
  );
}

export const accentText: Record<string, string> = {
  dende: "text-dende", oceano: "text-oceano", milho: "text-milho", folha: "text-folha", ocre: "text-ocre",
};
export const accentBg: Record<string, string> = {
  dende: "bg-dende", oceano: "bg-oceano", milho: "bg-milho", folha: "bg-folha", ocre: "bg-ocre",
};
