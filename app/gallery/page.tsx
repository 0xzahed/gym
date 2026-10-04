"use client";
import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Reveal } from "@/components/ui";
import { IMG } from "@/lib/data";

const shots = [
  { img: IMG.gymFloor, label: "Main Gym", cat: "Main Gym" },
  { img: IMG.strength, label: "Strength Zone", cat: "Strength Zone" },
  { img: IMG.muscle, label: "Free Weights", cat: "Free Weights" },
  { img: IMG.cardio, label: "Cardio Deck", cat: "Cardio Zone" },
  { img: IMG.boxing, label: "Boxing Corner", cat: "Strength Zone" },
  { img: IMG.personal, label: "Personal Training", cat: "Personal Training" },
  { img: IMG.yoga, label: "Mobility Studio", cat: "Cardio Zone" },
  { img: IMG.hiit, label: "HIIT Arena", cat: "Main Gym" },
];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Main Gym", "Strength Zone", "Cardio Zone", "Free Weights", "Personal Training"];
  const list = shots.filter((s) => cat === "All" || s.cat === cat);
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">GALLERY</p>
          <h1 className="text-4xl font-black md:text-6xl">GYM EXPERIENCE</h1>
        </Reveal>
        <Reveal className="mb-7 mt-8 flex gap-2 overflow-x-auto pb-1">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${cat === c ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{c}</button>
          ))}
        </Reveal>
        <div className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
          {list.map((s, i) => (
            <Reveal key={s.label + i}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#252C27]">
                <img src={s.img} alt={s.label} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <p className="absolute bottom-3 left-4 text-sm font-extrabold">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
