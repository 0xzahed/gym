"use client";
import { useState } from "react";
import { StatusBadge, Field, inputCls, ProgressBar } from "@/components/ui";
import { Send, Star } from "lucide-react";

const tabs = ["Nutrition", "Challenges", "Notifications", "Testimonials", "Gallery"];

export default function EngagementAdmin() {
  const [tab, setTab] = useState("Nutrition");
  const [sent, setSent] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-black">NUTRITION & ENGAGEMENT</h1>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${tab === t ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{t}</button>
        ))}
      </div>

      {tab === "Nutrition" && (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Meal Plans (12)</h2>
            <div className="mt-3 space-y-2.5 text-sm">
              {[["Muscle Gain — 2,800 kcal", "164g P · Assigned to 42"], ["Fat Loss — 1,900 kcal", "150g P · Assigned to 58"], ["Veg Performance — 2,400 kcal", "130g P · Assigned to 23"]].map(([n, d]) => (
                <div key={n} className="flex justify-between rounded-xl bg-[#182019] px-4 py-3.5"><span><b>{n}</b><span className="block text-xs text-white/50">{d}</span></span><button className="text-xs font-bold text-[#C8F31D]">Assign →</button></div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Create Food / Meal</h2>
            <form className="mt-3 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <Field label="Food name"><input placeholder="Chicken breast 100g" className={inputCls} /></Field>
              <div className="grid grid-cols-4 gap-2">
                {[["Kcal", "165"], ["Protein", "31g"], ["Carbs", "0g"], ["Fat", "3.6g"]].map(([l, p]) => (
                  <Field key={l} label={l}><input placeholder={p} className={inputCls} /></Field>
                ))}
              </div>
              <button className="rounded-full bg-[#C8F31D] py-3 text-sm font-black text-black">Add to Library</button>
            </form>
          </div>
        </div>
      )}

      {tab === "Challenges" && (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#C8F31D]/30 bg-[#10150f] p-6">
            <div className="flex justify-between"><StatusBadge state="Active" /><b className="text-[#C8F31D]">18 days left</b></div>
            <h2 className="mt-2 text-lg font-black">30-Day Fitness Challenge</h2>
            <div className="mt-3"><div className="mb-1.5 flex justify-between text-sm"><b>72% avg. completion</b><span className="text-white/50">1,284 participants</span></div><ProgressBar value={72} /></div>
            <h3 className="mt-4 text-sm font-bold">Leaderboard</h3>
            <ul className="mt-2 space-y-1.5 text-sm">{[["1. Tanvir A.", "96%"], ["2. Priya D.", "94%"], ["3. Rafiul K.", "91%"]].map(([n, s]) => <li key={n} className="flex justify-between rounded-lg bg-black/30 px-3.5 py-2.5"><span>{n}</span><b className="text-[#C8F31D]">{s}</b></li>)}</ul>
          </div>
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Create Challenge</h2>
            <form className="mt-3 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <Field label="Title"><input placeholder="Summer Shred 2026" className={inputCls} /></Field>
              <div className="grid grid-cols-2 gap-3"><Field label="Start"><input type="date" className={inputCls} /></Field><Field label="End"><input type="date" className={inputCls} /></Field></div>
              <Field label="Target"><input placeholder="Train 20 of 30 days" className={inputCls} /></Field>
              <button className="rounded-full bg-[#C8F31D] py-3 text-sm font-black text-black">Launch Challenge</button>
            </form>
          </div>
        </div>
      )}

      {tab === "Notifications" && (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Send Notification</h2>
            {sent ? <p className="mt-3 rounded-xl bg-[#56D364]/10 p-4 text-sm font-bold text-[#56D364]">Sent to 4,821 active members ✓</p> : (
              <form className="mt-3 grid gap-3" onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}>
                <Field label="Audience"><select className={inputCls}><option>All active members</option><option>Expiring in 7 days</option><option>HIIT class attendees</option><option>Trainers only</option></select></Field>
                <Field label="Channel"><select className={inputCls}><option>Push + SMS</option><option>Push only</option><option>Email</option><option>SMS only</option></select></Field>
                <Field label="Message"><textarea rows={3} placeholder="Reminder: HIIT Power starts in 1 hour…" className={inputCls} /></Field>
                <button className="flex items-center justify-center gap-2 rounded-full bg-[#C8F31D] py-3 text-sm font-black text-black"><Send size={15} /> Send Now</button>
              </form>
            )}
          </div>
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Recent</h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[["Membership reminder", "Sent to 214 · yesterday"], ["Class reminder — HIIT", "Sent to 20 · 2h ago"], ["New challenge launch", "Sent to 4.8K · 3d ago"]].map(([t, d]) => (
                <li key={t} className="rounded-xl bg-[#182019] px-4 py-3"><b>{t}</b><span className="block text-xs text-white/50">{d}</span></li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {tab === "Testimonials" && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[["Mehedi Hasan", "Down 16kg and stronger than ever at 34.", 5, "Active"], ["Sadia R.", "Cleanest gym, but morning crowd is loud.", 3, "Pending"]].map(([n, t, r, s]) => (
            <div key={n as string} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
              <div className="flex items-center justify-between"><b>{n}</b><StatusBadge state={s as string} /></div>
              <p className="mt-2 flex items-center gap-1 text-sm text-white/70"><Star size={13} className="fill-[#C8F31D] text-[#C8F31D]" /> {r} — "{t}"</p>
              <div className="mt-3 flex gap-2"><button className="rounded-full bg-[#C8F31D] px-4 py-1.5 text-xs font-black text-black">Approve</button><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Reject</button></div>
            </div>
          ))}
        </div>
      )}

      {tab === "Gallery" && (
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="group relative h-40 overflow-hidden rounded-2xl border border-[#252C27] bg-[#182019]">
              <img src={`https://images.unsplash.com/photo-${["1534438327276-14e5300c3a48", "1571902943202-507ec2618e8f", "1526506118085-60ce8714f8c5", "1518611012118-696072aa579a"][i % 4]}?q=80&w=600&auto=format&fit=crop`} alt="Gym" loading="lazy" className="h-full w-full object-cover" />
              <button className="absolute right-2 top-2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold opacity-0 transition group-hover:opacity-100">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
