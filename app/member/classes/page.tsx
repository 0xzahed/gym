"use client";
import { useState } from "react";
import { StatusBadge, EmptyState } from "@/components/ui";
import { classes } from "@/lib/data";
import Link from "next/link";

export default function MemberClasses() {
  const [booked, setBooked] = useState<string[]>(["07:00 PM-HIIT Power", "06:00 AM-Barbell Club"]);
  const toggle = (id: string) => setBooked((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));
  const upcoming = classes.filter((c) => booked.includes(`${c.time === "07:00 AM" ? c.time : c.time}-${c.name}`) || booked.some((b) => b.endsWith(c.name)));

  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">SCHEDULE</p>
      <h1 className="mt-1 text-2xl font-black md:text-3xl">MY CLASSES</h1>

      <h2 className="mb-3 mt-6 font-extrabold">Upcoming bookings ({booked.length})</h2>
      {booked.length === 0 ? (
        <EmptyState title="No upcoming classes" desc="You don't have any classes booked yet." action={<Link href="/classes" className="rounded-full bg-[#C8F31D] px-6 py-3 text-sm font-black text-black">Browse Classes</Link>} />
      ) : (
        <div className="space-y-2.5">
          {[["HIIT Power", "Today · 7:00 PM · Coach Sara"], ["Barbell Club", "Thu · 6:00 AM · Coach Alex"]].map(([n, d]) => (
            <div key={n} className="flex items-center justify-between rounded-2xl border border-[#56D364]/30 bg-[#0f1510] p-4 text-sm">
              <span><b>{n}</b><span className="block text-xs text-white/55">{d}</span></span>
              <button onClick={() => setBooked((b) => b.filter((x) => !x.endsWith(n)))} className="rounded-full border border-[#FF5C5C]/50 px-4 py-2 text-xs font-bold text-[#FF5C5C]">Cancel</button>
            </div>
          ))}
        </div>
      )}

      <h2 className="mb-3 mt-8 font-extrabold">Available classes</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {classes.slice(0, 6).map((c) => {
          const id = `${c.time}-${c.name}`;
          const isB = booked.some((b) => b.endsWith(c.name));
          return (
            <div key={id} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
              <div className="flex items-start justify-between gap-3">
                <div><p className="text-xs font-bold text-[#C8F31D]">{c.time}</p><h3 className="font-extrabold">{c.name}</h3><p className="text-xs text-white/50">{c.coach} · {c.seats}</p></div>
                <StatusBadge state={isB ? "Booked" : c.state} />
              </div>
              <button
                onClick={() => toggle(id)}
                disabled={c.state === "Full" && !isB}
                className={`mt-4 w-full rounded-full py-2.5 text-[13px] font-bold ${isB ? "border border-[#FF5C5C]/50 text-[#FF5C5C]" : "bg-[#C8F31D] text-black"}`}
              >
                {isB ? "Cancel Booking" : "Book"}
              </button>
            </div>
          );
        })}
      </div>

      <h2 className="mb-3 mt-8 font-extrabold">Booking history</h2>
      <div className="space-y-2 text-sm">
        {[["Metcon Express", "Last week", "Completed"], ["Sunrise Yoga", "2 weeks ago", "Completed"], ["Boxing Fundamentals", "3 weeks ago", "Cancelled"]].map(([n, d, s]) => (
          <div key={n} className="flex items-center justify-between rounded-xl border border-[#252C27] bg-[#111612] px-4 py-3"><span><b>{n}</b> <span className="text-white/45">· {d}</span></span><StatusBadge state={s} /></div>
        ))}
      </div>
    </div>
  );
}
