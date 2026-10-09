import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Polyline, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { sources } from "@/data/content";

type Layer = "movimento" | "associacao" | "origem";

const css = (v: string) => (typeof window === "undefined" ? "#c8551e" : getComputedStyle(document.documentElement).getPropertyValue(v).trim() || "#c8551e");

const origins = [
  { pos: [-12.97, -38.5] as [number, number], name: "Salvador e Recôncavo", text: "Origem culinária do Arroz de Hauçá, do Acarajé, do Vatapá e do Caruru.", color: "--dende" },
  { pos: [2.05, 45.32] as [number, number], name: "Mogadíscio, Somália", text: "Origem do Qumbe, doce de coco da costa somali do Oceano Índico.", color: "--oceano" },
  { pos: [-22.9, -43.2] as [number, number], name: "Rio de Janeiro", text: "Tradição do Angu à Baiana, vendido pelas quitandeiras no século XIX.", color: "--milho" },
  { pos: [14.7, -17.45] as [number, number], name: "Senegal e África Ocidental", text: "Região associada ao Arroz Jollof.", color: "--folha" },
];

const associations = [
  { center: [12.0, 8.5] as [number, number], name: "Hauçalândia (norte da Nigéria e Níger)", text: "Terra dos hauçás. O nome do Arroz de Hauçá faz referência a esse povo. Isto é uma associação cultural pelo nome, não uma rota documentada do prato.", ref: "querino" },
  { center: [7.5, 4.0] as [number, number], name: "Terras iorubás", text: "O akará iorubá é associado ao acarajé baiano.", ref: "costalima" },
];

const movements = [
  { path: [[6.3, 2.4], [-2, -15], [-12.97, -38.5]] as [number, number][], name: "Golfo do Benin → Bahia", text: "Rota documentada do tráfico atlântico de africanos escravizados (séculos XVII a XIX).", ref: "slavevoyages" },
  { path: [[2.05, 45.32], [12, 52], [15.5, 42.5]] as [number, number][], name: "Costa somali ↔ Arábia", text: "Rotas de comércio no Oceano Índico por onde circulavam especiarias.", ref: "xawaash" },
];

export default function CulturalMap() {
  const [on, setOn] = useState<Record<Layer, boolean>>({ movimento: true, associacao: true, origem: true });
  const toggle = (l: Layer) => setOn((o) => ({ ...o, [l]: !o[l] }));
  const legend: { key: Layer; label: string; sample: string }[] = [
    { key: "movimento", label: "Movimentos históricos documentados", sample: "border-t-2 border-solid border-foreground" },
    { key: "associacao", label: "Associações culturais", sample: "border-t-2 border-dashed border-accent" },
    { key: "origem", label: "Origens culinárias", sample: "h-3 w-3 rounded-full bg-primary" },
  ];
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      <MapContainer center={[5, -5]} zoom={3} minZoom={2} scrollWheelZoom className="h-full w-full">
        <TileLayer attribution='Tiles &copy; Esri' url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}" maxZoom={16} />
        {on.movimento && movements.map((m) => (
          <Polyline key={m.name} positions={m.path} pathOptions={{ color: css("--foreground"), weight: 2.5, opacity: 0.85 }}>
            <Popup><strong>{m.name}</strong><br />{m.text}<br /><small>Fonte: {sources[m.ref]}</small></Popup>
          </Polyline>
        ))}
        {on.associacao && associations.map((a) => (
          <Circle key={a.name} center={a.center} radius={450000} pathOptions={{ color: css("--ocre"), dashArray: "6 8", weight: 1.5, fillOpacity: 0.08 }}>
            <Popup><strong>{a.name}</strong><br /><em>Associação cultural</em><br />{a.text}<br /><small>Fonte: {sources[a.ref]}</small></Popup>
          </Circle>
        ))}
        {on.origem && origins.map((o) => (
          <CircleMarker key={o.name} center={o.pos} radius={9} pathOptions={{ color: css(o.color), fillColor: css(o.color), fillOpacity: 0.9 }}>
            <Popup><strong>{o.name}</strong><br />{o.text}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <div className="absolute bottom-6 left-6 z-[500] max-w-xs border border-border bg-background/90 p-5 backdrop-blur">
        <p className="eyebrow mb-3 text-accent">Legenda</p>
        {legend.map((l) => (
          <label key={l.key} className="flex cursor-pointer items-center gap-3 py-1.5 text-sm">
            <input type="checkbox" checked={on[l.key]} onChange={() => toggle(l.key)} />
            <span className="flex w-6 justify-center"><span className={`inline-block ${l.key === "origem" ? "" : "w-6"} ${l.sample}`} /></span>
            {l.label}
          </label>
        ))}
        <p className="mt-3 text-xs text-muted-foreground">Só desenhamos rotas com fonte documentada. A Somália não tem linha para o Brasil.</p>
      </div>
    </div>
  );
}
