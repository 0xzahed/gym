"use client";
import { useState } from "react";
import { Check, Play, RotateCcw } from "lucide-react";
import { StatusBadge, EmptyState } from "@/components/ui";
import Link from "next/link";

const exercises = [
  { name: "Bench Press", sets: "4 × 10", rest: "90s rest", tip: "Retract scapula, touch mid-chest." },
  { name: "Lat Pulldown", sets: "4 × 12", rest: "75s rest", tip: "Chest tall, drive elbows to ribs." },
  { name: "Shoulder Press", sets: "3 × 10", rest: "90s rest", tip: "Brace glutes, press in straight line." },
  { name: "Bicep Curl", sets: "3 × 12", rest: "60s rest", tip: "Pin elbows, full stretch each rep." },
];

export default function WorkoutPage() {
  const [done, setDone] = useState<string[]>([]);
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const toggle = (n: string) => setDone((d) => (d.includes(n) ? d.filter((x) => x !== n) : [...d, n]));
  const pct = Math.round((done.length / exercises.length) * 100);

  if (finished) {
    return (
      <div className="rounded-3xl border border-[#C8F31D]/40 bg-[#10150f] p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C8F31D] text-black"><Check size={30} strokeWidth={3} /></span>
        <h1 className="mt-4 text-2xl font-black">Workout complete!</h1>
        <p className="mt-1 text-sm text-white/60">Upper Body · 52 min · 12,400 kg volume · Streak extended to 15 days.</p>
        <div className="mt-6 flex justify-center gap-2.5">
          <button onClick={() => { setFinished(false); setDone([]); setActive(false); }} className="flex items-center gap-2 rounded-full border border-[#2c352e] px-6 py-3 text-sm font-bold"><RotateCcw size={15} /> Repeat</button>
          <Link href="/member" className="rounded-full bg-[#C8F31D] px-6 py-3 text-sm font-black text-black">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">TODAY'S WORKOUT</p>
          <h1 className="mt-1 text-2xl font-black md:text-3xl">UPPER BODY</h1>
          <p className="mt-1 text-sm text-white/55">Duration: 52 min · {done.length}/{exercises.length} complete ({pct}%)</p>
        </div>
        <StatusBadge state={active ? "Active" : "Scheduled"} />
      </div>

      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#1e251f]">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: "#C8F31D" }} />
      </div>

      {!active ? (
        <button onClick={() => setActive(true)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#C8F31D] py-4 text-sm font-black text-black hover:bg-[#d8ff3d]">
          <Play size={16} className="fill-current" /> Start Workout
        </button>
      ) : null}

      <div className="mt-5 space-y-3">
        {exercises.map((e) => {
          const isDone = done.includes(e.name);
          return (
            <div key={e.name} className={`rounded-2xl border p-5 transition ${isDone ? "border-[#56D364]/40 bg-[#0f1510]" : "border-[#252C27] bg-[#111612]"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className={`font-extrabold ${isDone ? "text-white/50 line-through" : ""}`}>{e.name}</h2>
                  <p className="mt-1 text-[13px] font-bold text-[#C8F31D]">{e.sets} · {e.rest}</p>
                  <p className="mt-1 text-[13px] text-white/55">{e.tip}</p>
                </div>
                <button
                  onClick={() => toggle(e.name)}
                  disabled={!active}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${isDone ? "border-[#56D364] bg-[#56D364] text-black" : "border-[#2c352e] text-white/40 hover:border-[#C8F31D] hover:text-[#C8F31D]"} ${!active ? "opacity-40" : ""}`}
                  aria-label={`Mark ${e.name} complete`}
                >
                  <Check size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {active && (
        <button onClick={() => setFinished(true)} className="mt-5 w-full rounded-full bg-[#C8F31D] py-4 text-sm font-black text-black hover:bg-[#d8ff3d]">
          Finish Workout ({done.length}/{exercises.length})
        </button>
      )}

      <h2 className="mb-3 mt-10 font-extrabold">Workout History</h2>
      <div className="space-y-2.5">
        {[["Lower Body Strength", "Yesterday · 58 min · 14,200 kg"], ["HIIT Power", "2 days ago · 44 min · 520 kcal"], ["Push + Core", "4 days ago · 50 min · 11,800 kg"]].map(([t, d]) => (
          <div key={t} className="flex justify-between rounded-xl border border-[#252C27] bg-[#111612] px-4 py-3.5 text-sm"><span className="font-bold">{t}</span><span className="text-white/45">{d}</span></div>
        ))}
      </div>
    </div>
  );
}
