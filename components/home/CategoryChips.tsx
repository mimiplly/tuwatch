"use client";

import { useState } from "react";

const categories = [
  { label: "All", dot: "e2e7c.svg" },
  { label: "Events", dot: "f96a6.svg" },
  { label: "Problems", dot: "5951e.svg" },
  { label: "Announcements", dot: "07bbc.svg" },
  { label: "Activities", dot: "bdb0d.svg" },
  { label: "Interesting", dot: "11e5e.svg" },
];

export default function CategoryChips() {
  const [selected, setSelected] = useState("All");
  return (
    <div className="category-scroll" aria-label="Report categories">
      <div className="category-row">
        {categories.map(({ label, dot }) => (
          <button type="button" key={label} aria-pressed={selected === label}
            onClick={() => setSelected(label)} className={"category-chip" + (selected === label ? " active" : "")}>
            <img src={"/assets/tuwatch/" + dot} alt="" />{label}
          </button>
        ))}
      </div>
    </div>
  );
}
