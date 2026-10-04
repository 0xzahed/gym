import { ProgressBar } from "@/components/ui";
import { Trophy, Medal } from "lucide-react";

export default function ChallengesPage() {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">COMPETE</p>
      <h1 className="mt-1 text-2xl font-black md:text-3xl">MY CHALLENGES</h1>
      <div className="mt-6 rounded-3xl border border-[#C8F31D]/30 bg-[#10150f] p-6 md:p-8">
        <div className="flex items-center justify-between"><span className="rounded-full bg-[#C8F31D] px-3 py-1 text-[11px] font-black text-black">ACTIVE</span><span className="text-sm font-bold text-[#C8F31D]">18 DAYS LEFT</span></div>
        <h2 className="mt-3 text-xl font-black">30-Day Fitness Challenge</h2>
        <div className="mt-4"><div className="mb-2 flex justify-between text-sm"><b>72% complete</b><span className="text-white/50">Rank #48 / 1,284</span></div><ProgressBar value={72} /></div>
        <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
          {[["22", "Workouts"], ["#48", "Rank"], ["6", "Badges"]].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-black/30 p-3.5"><p className="text-xl font-black text-[#C8F31D]">{v}</p><p className="text-[11px] text-white/50">{l}</p></div>
          ))}
        </div>
      </div>
      <h2 className="mb-3 mt-8 flex items-center gap-2 font-extrabold"><Medal size={17} className="text-[#C8F31D]" /> Achievements</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[["Early Bird", "20× 6AM sessions", true], ["Streak x14", "14-day streak", true], ["Century Club", "100 workouts", false], ["Marathon", "Run 42K total", false]].map(([t, d, got]) => (
          <div key={t as string} className={`rounded-2xl border p-4 text-center ${got ? "border-[#C8F31D]/40 bg-[#10150f]" : "border-[#252C27] bg-[#111612] opacity-50"}`}>
            <Trophy size={22} className={`mx-auto ${got ? "text-[#C8F31D]" : "text-white/30"}`} />
            <p className="mt-2 text-sm font-bold">{t}</p><p className="text-[11px] text-white/50">{d}</p>
          </div>
        ))}
      </div>
      <h2 className="mb-3 mt-8 font-extrabold">Completed</h2>
      <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-5 text-sm"><b>December Shred — 2025</b><p className="text-white/50">Finished #12 · Lost 4.2 KG · Earned medal</p></div>
    </div>
  );
}
