import Link from "next/link";
import { Flame, Target, CreditCard, CalendarCheck, ArrowRight, Play, Check } from "lucide-react";
import { ProgressBar, StatusBadge } from "@/components/ui";

export default function MemberDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-black md:text-3xl">GOOD MORNING, TANVIR</h1>
      <p className="mt-1 text-sm text-white/55">Tuesday · Upper body day. Let's get after it.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Target, l: "Current Goal", v: "Build Muscle" },
          { icon: Flame, l: "Workout Streak", v: "14 Days" },
          { icon: CreditCard, l: "Membership", v: "Performance" },
          { icon: CalendarCheck, l: "Next Class", v: "HIIT — 7 PM" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
            <p className="flex items-center gap-2 text-xs font-bold text-white/50"><s.icon size={14} className="text-[#C8F31D]" /> {s.l.toUpperCase()}</p>
            <p className="mt-2 font-extrabold">{s.v}</p>
          </div>
        ))}
      </div>

      <Link href="/member/workout" className="mt-4 flex items-center justify-between rounded-2xl bg-[#C8F31D] p-5 text-black transition hover:bg-[#d8ff3d] md:p-6">
        <span className="flex items-center gap-3.5">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#C8F31D]"><Play size={20} className="fill-current" /></span>
          <span><span className="block font-black">Start Today's Workout</span><span className="block text-[13px] font-medium opacity-70">Upper Body · 52 min · 4 exercises</span></span>
        </span>
        <ArrowRight size={22} />
      </Link>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <div className="flex items-center justify-between"><h2 className="font-extrabold">Today's Workout</h2><StatusBadge state="Scheduled" /></div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["Bench Press", "4 × 10"], ["Lat Pulldown", "4 × 12"], ["Shoulder Press", "3 × 10"], ["Bicep Curl", "3 × 12"]].map(([e, s]) => (
              <li key={e} className="flex items-center justify-between rounded-xl bg-[#182019] px-4 py-3"><span className="font-semibold">{e}</span><span className="text-white/50">{s}</span></li>
            ))}
          </ul>
          <Link href="/member/workout" className="mt-4 block text-center text-sm font-bold text-[#C8F31D]">Open workout →</Link>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Weekly Progress</h2>
            <div className="mt-4 space-y-3.5">
              {[["Workouts", "4/5", 80], ["Protein goal", "6/7 days", 86], ["Steps", "58k / 70k", 70]].map(([l, v, p]) => (
                <div key={l as string}><div className="mb-1.5 flex justify-between text-[13px]"><span className="text-white/60">{l}</span><span className="font-bold">{v}</span></div><ProgressBar value={p as number} /></div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Upcoming Bookings</h2>
            <div className="mt-3 space-y-2.5 text-sm">
              <div className="flex justify-between rounded-xl bg-[#182019] px-4 py-3"><span><b>HIIT Power</b> <span className="text-white/50">· Today 7 PM</span></span><span className="flex items-center gap-1 text-xs font-bold text-[#56D364]"><Check size={13} /> Booked</span></div>
              <div className="flex justify-between rounded-xl bg-[#182019] px-4 py-3"><span><b>Barbell Club</b> <span className="text-white/50">· Thu 6 AM</span></span><span className="flex items-center gap-1 text-xs font-bold text-[#56D364]"><Check size={13} /> Booked</span></div>
            </div>
            <Link href="/member/classes" className="mt-4 block text-center text-sm font-bold text-[#C8F31D]">Browse classes →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
