import { ProgressBar } from "@/components/ui";
import { Flame, Trophy } from "lucide-react";

export default function ProgressPage() {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">TRACKING</p>
      <h1 className="mt-1 text-2xl font-black md:text-3xl">MY PROGRESS</h1>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Weight", "82 → 74 KG", "-8 KG"],
          ["Body Fat", "24% → 18%", "-6%"],
          ["Strength", "+34%", "total"],
          ["Streak", "14 days", "personal best"],
        ].map(([l, v, s]) => (
          <div key={l} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
            <p className="text-xs font-bold text-white/50">{l.toUpperCase()}</p>
            <p className="mt-1.5 text-xl font-black text-[#C8F31D]">{v}</p>
            <p className="text-xs text-white/45">{s}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <h2 className="font-extrabold">Weight — last 12 weeks</h2>
          <div className="mt-5 flex h-36 items-end gap-1.5" aria-hidden>
            {[82, 81, 80.5, 80, 79, 78.4, 77.8, 77, 76.2, 75.4, 74.6, 74].map((w, i) => {
              const h = 30 + ((82 - w) / 8) * 70;
              return <div key={i} title={`${w} kg`} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 11 ? "#C8F31D" : "#2c3a2e" }} />;
            })}
          </div>
          <p className="mt-2 text-xs text-white/45">82 KG → 74 KG · steady −0.7 KG/week</p>
        </div>
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <h2 className="font-extrabold">Strength progress</h2>
          <div className="mt-4 space-y-4">
            {[["Squat", "80 → 120 KG", 85], ["Bench", "60 → 85 KG", 72], ["Deadlift", "100 → 150 KG", 90]].map(([l, v, p]) => (
              <div key={l as string}><div className="mb-1.5 flex justify-between text-sm"><span className="font-bold">{l}</span><span className="text-white/55">{v}</span></div><ProgressBar value={p as number} /></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <h2 className="flex items-center gap-2 font-extrabold"><Flame size={17} className="text-[#C8F31D]" /> Workout frequency</h2>
          <div className="mt-4 grid grid-cols-7 gap-1.5" aria-hidden>
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md" style={{ background: [1, 1, 0, 1, 1, 0, 1][i % 7] ? (i % 5 === 0 ? "#C8F31D" : "#2c3a2e") : "#161c17" }} />
            ))}
          </div>
          <p className="mt-2 text-xs text-white/45">18 sessions in the last 28 days</p>
        </div>
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <h2 className="flex items-center gap-2 font-extrabold"><Trophy size={17} className="text-[#C8F31D]" /> Personal records</h2>
          <ul className="mt-3 space-y-2.5 text-sm">
            {[["Back Squat", "120 KG × 5"], ["Deadlift", "150 KG × 3"], ["5K Run", "24:10"], ["Plank", "3:00"]].map(([l, v]) => (
              <li key={l} className="flex justify-between rounded-xl bg-[#182019] px-4 py-3"><span>{l}</span><b className="text-[#C8F31D]">{v}</b></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
