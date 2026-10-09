import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const CulturalMap = lazy(() => import("@/components/CulturalMap"));

export const Route = createFileRoute("/mapa")({
  head: () => ({
    meta: [
      { title: "Mapa das cozinhas | Raízes & Sabores" },
      { name: "description", content: "Mapa interativo com origens culinárias, associações culturais e rotas históricas documentadas." },
      { property: "og:title", content: "Mapa das cozinhas | Raízes & Sabores" },
      { property: "og:description", content: "Somália, África Ocidental, Bahia e Rio de Janeiro num só mapa." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const fallback = <div className="flex h-[calc(100vh-4rem)] items-center justify-center eyebrow text-muted-foreground">Carregando mapa…</div>;
  return (
    <div className="pt-16">
      <ClientOnly fallback={fallback}>
        <Suspense fallback={fallback}><CulturalMap /></Suspense>
      </ClientOnly>
    </div>
  );
}
