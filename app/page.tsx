"use client";

import { useEffect, useState } from "react";
import CampusHeader from "../components/home/CampusHeader";
import SearchBar from "../components/home/SearchBar";
import CategoryChips from "../components/home/CategoryChips";
import CampusMap from "../components/map/CampusMap";
import BottomNav from "../components/navigation/BottomNav";

export default function Home() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / 440));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <main className="screen-outer" style={{ width: 440 * scale, height: 956 * scale }}>
      <div className="home-screen" style={{ transform: `scale(${scale})` }}>
        <div className="discovery-gradient" />
        <CampusHeader />
        <SearchBar />
        <CategoryChips />
        <CampusMap />
        <BottomNav />
      </div>
    </main>
  );
}
