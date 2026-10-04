"use client";
import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Reveal, SectionHead, StatusBadge } from "@/components/ui";
import { Timetable } from "@/components/home";
import { classes } from "@/lib/data";
import { Check } from "lucide-react";

export default function ClassesPage() {
  const [cat, setCat] = useState("All");
  const [booked, setBooked] = useState<string[]>(["06:30 AM-Deep Stretch"]);
  const cats = ["All", "Strength", "HIIT", "Cardio", "Yoga", "Boxing", "Functional"];
  const list = classes.filter((c) => cat === "All" || c.cat === cat);

  const toggle = (c: (typeof classes)[number]) => {
    const id = `${c.time}-${c.name}`;
    if (c.state === "Full") return;
    setBooked((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));
  };

  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-32 md:px-8 md:pt-40">
        <SectionHead eyebrow="SCHEDULE" title="BOOK YOUR CLASS" desc="Live seat counts. Free cancellation up to 4 hours before start." />
        <Reveal className="flex gap-2 overflow-x-auto pb-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${cat === c ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60 hover:text-white"}`}>{c}</button>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#2c352e] p-14 text-center">
            <h3 className="font-bold">No classes in this category today</h3>
            <p className="text-sm text-white/50">Try another category or check the weekly timetable below.</p>
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {list.map((c) => {
              const id = `${c.time}-${c.name}`;
              const isBooked = booked.includes(id);
              const state = isBooked ? "Booked" : c.state;
              return (
                <Reveal key={id}>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#252C27] bg-[#111612] p-5 md:p-6">
                    <div>
                      <p className="text-xs font-bold tracking-wider text-[#C8F31D]">{c.time} · {c.dur} · {c.cat.toUpperCase()}</p>
                      <h3 className="mt-1 text-lg font-extrabold">{c.name}</h3>
                      <p className="mt-1 text-[13px] text-[#A9B0AA]">{c.level} · Coach {c.coach} · {c.seats} seats</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2.5">
                      <StatusBadge state={state} />
                      <button
                        onClick={() => toggle(c)}
                        disabled={c.state === "Full" && !isBooked}
                        className={`rounded-full px-5 py-2.5 text-[13px] font-bold transition ${isBooked ? "border border-[#FF5C5C]/50 text-[#FF5C5C]" : c.state === "Full" ? "cursor-not-allowed bg-white/5 text-white/30" : "bg-[#C8F31D] text-black hover:bg-[#d8ff3d]"}`}
                      >
                        {isBooked ? "Cancel" : c.state === "Full" ? "Waitlist" : "Book Class"}
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
        {booked.length > 0 && (
          <p className="mt-4 flex items-center gap-2 text-sm text-[#56D364]"><Check size={15} /> {booked.length} class{booked.length > 1 ? "es" : ""} booked — see you on the floor!</p>
        )}
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal><h2 className="mb-6 text-xl font-black tracking-wide">WEEKLY TIMETABLE</h2></Reveal>
        <Timetable />
      </section>
      <Footer />
    </main>
  );
}
