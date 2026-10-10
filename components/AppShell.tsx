"use client";
import { useEffect, useState, type ReactNode } from "react";
import CampusHeader from "./home/CampusHeader";
import BottomNav from "./navigation/BottomNav";
export default function AppShell({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);
  useEffect(() => { const resize = () => setScale(Math.min(1, window.innerWidth / 440)); resize(); window.addEventListener("resize", resize); return () => window.removeEventListener("resize", resize); }, []);
  return <main className="screen-outer" style={{width:440*scale,height:956*scale}}><div className="home-screen" style={{transform:`scale(${scale})`}}><div className="discovery-gradient"/><CampusHeader/><div className="content-scroll">{children}</div><BottomNav/></div></main>;
}
