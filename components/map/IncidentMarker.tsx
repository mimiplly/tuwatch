import Link from "next/link";
type IncidentMarkerProps = {
  x: number;
  y: number;
  color: string;
  icon: string;
  tip: string;
  label: string;
  selected?: boolean;
};

export default function IncidentMarker({ x, y, color, icon, tip, label, selected = false }: IncidentMarkerProps) {
  return (
    <Link href={label === "Power issue" ? "/posts/power" : label === "Broken sidewalk" ? "/posts/sidewalk" : "/posts/event"} className="incident-marker" style={{ left: x, top: y }} aria-label={label}>
      {selected && <img className="marker-halo" src="/assets/tuwatch/01e5e.svg" alt="" />}
      <span className="marker-badge" style={{ backgroundColor: color }}><img src={"/assets/tuwatch/" + icon} alt="" /></span>
      <img className="marker-tip" src={"/assets/tuwatch/" + tip} alt="" />
    </Link>
  );
}
