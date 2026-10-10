import Link from "next/link";

const asset = "/assets/tuwatch/";
const items = [
  {label:"Feed",href:"/feed",icon:"69871.svg"},
  {label:"Map",href:"/",icon:"6ca44.svg",active:true},
  {label:"Alert",href:"/alerts",icon:"fb204.svg"},
  {label:"Profile",href:"/profile",icon:"2b06d.svg"}
];

export default function BottomNav() {
  return (
    <nav className="bottom-navigation" aria-label="Main navigation">
      <div className="tab-bar">
        {items.slice(0,2).map(item => <Link key={item.label} href={item.href} className={"nav-item" + (item.active ? " selected" : "")}><img src={asset+item.icon} alt="" /><span>{item.label}</span></Link>)}
        <span className="nav-camera-space" />
        {items.slice(2).map(item => <Link key={item.label} href={item.href} className="nav-item"><img src={asset+item.icon} alt="" /><span>{item.label}</span></Link>)}
      </div>
      <Link className="camera-button" href="/report" aria-label="Create report"><img src={asset + "02fd8.svg"} alt="" /></Link>
      <span className="home-indicator" />
    </nav>
  );
}
