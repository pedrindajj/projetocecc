import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function DishMiniMap({ pos, place, color }: { pos: [number, number]; place: string; color: string }) {
  const css = (v: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim() || "#c8551e";
  return (
    <MapContainer center={pos} zoom={4} minZoom={2} maxZoom={8} scrollWheelZoom={false} className="aspect-[2/1] w-full md:aspect-[21/9]">
      <TileLayer attribution='Tiles &copy; Esri' url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}" maxZoom={16} />
      <CircleMarker center={pos} radius={9} pathOptions={{ color: css(color), fillColor: css(color), fillOpacity: 0.9 }}>
        <Popup><strong>{place}</strong></Popup>
      </CircleMarker>
    </MapContainer>
  );
}
