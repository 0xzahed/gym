"use client";
import { useState } from "react";
import { StatusBadge, Modal, Field, inputCls } from "@/components/ui";
import { Plus } from "lucide-react";

const tabs = ["Programs", "Exercises", "Workouts", "Classes", "Bookings"];

const exercises = [
  ["Bench Press", "Chest", "Barbell", "Intermediate"],
  ["Back Squat", "Legs", "Barbell", "Intermediate"],
  ["Lat Pulldown", "Back", "Machine", "Beginner"],
  ["Overhead Press", "Shoulders", "Dumbbell", "Intermediate"],
  ["Bicep Curl", "Arms", "Dumbbell", "Beginner"],
  ["Plank", "Core", "Bodyweight", "Beginner"],
  ["Treadmill Run", "Cardio", "Machine", "All levels"],
];

const bookings = [
  ["HIIT Power · 7 AM", "Tanvir Ahmed", "Confirmed", "18/20"],
  ["Barbell Club · 6 AM", "Priya Das", "Confirmed", "18/20"],
  ["Boxing Basics · 5:30 PM", "Rafiul Karim", "Pending", "7/16"],
  ["Sunrise Yoga · 8:30 AM", "Farhana Akter", "Confirmed", "9/25"],
];

export default function OperationsAdmin() {
  const [tab, setTab] = useState("Programs");
  const [show, setShow] = useState(false);
  const [muscle, setMuscle] = useState("All");
  const muscles = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Cardio"];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-black">PROGRAMS & CLASSES</h1>
        <button onClick={() => setShow(true)} className="flex items-center gap-2 rounded-full bg-[#C8F31D] px-5 py-2.5 text-sm font-black text-black"><Plus size={16} /> Create</button>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${tab === t ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{t}</button>
        ))}
      </div>

      {tab === "Programs" && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[["Strength Training", "Intermediate · 60 min", "Active", "412 members"], ["Muscle Building", "All levels · 75 min", "Active", "388 members"], ["Fat Loss", "Beginner · 45 min", "Active", "296 members"], ["HIIT", "Advanced · 40 min", "Inactive", "Draft — not visible"]].map(([n, d, s, m]) => (
            <div key={n} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
              <div className="flex items-center justify-between"><h2 className="font-extrabold">{n}</h2><StatusBadge state={s} /></div>
              <p className="mt-1 text-sm text-white/55">{d} · {m}</p>
              <div className="mt-3 flex gap-2"><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Edit</button><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Exercises</button><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold text-[#FF5C5C]">Deactivate</button></div>
            </div>
          ))}
        </div>
      )}

      {tab === "Exercises" && (
        <div className="mt-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {muscles.map((m) => <button key={m} onClick={() => setMuscle(m)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${muscle === m ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{m}</button>)}
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#252C27]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead><tr className="bg-[#111612] text-xs text-white/45"><th className="p-4">Exercise</th><th className="p-4">Muscle</th><th className="p-4">Equipment</th><th className="p-4">Difficulty</th><th className="p-4">Sets × Reps · Rest</th></tr></thead>
              <tbody>
                {exercises.filter((e) => muscle === "All" || e[1] === muscle).map((e) => (
                  <tr key={e[0]} className="border-t border-[#1d231e]"><td className="p-4 font-bold">{e[0]}</td><td className="p-4"><span className="rounded-full bg-[#182019] px-2.5 py-1 text-xs">{e[1]}</span></td><td className="p-4 text-white/60">{e[2]}</td><td className="p-4 text-white/60">{e[3]}</td><td className="p-4 text-white/60">4 × 10 · 90s</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "Workouts" && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[["Upper Body Power", "Build Muscle · 52 min · Intermediate", "Assigned to 84 members"], ["Fat Burn Express", "Lose Weight · 40 min · Beginner", "Assigned to 61 members"], ["Custom: Tanvir — Push Focus", "Build Muscle · 60 min · Advanced", "Assigned to 1 member"]].map(([n, d, m]) => (
            <div key={n} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
              <h2 className="font-extrabold">{n}</h2><p className="mt-1 text-sm text-white/55">{d}</p><p className="text-xs text-[#C8F31D]">{m}</p>
              <div className="mt-3 flex gap-2"><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Edit</button><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Assign</button></div>
            </div>
          ))}
        </div>
      )}

      {tab === "Classes" && (
        <div className="mt-4 space-y-2.5">
          {[["HIIT Power", "Today 7:00 AM · Sara · 45 min", "Almost Full", "18/20 booked"], ["Barbell Club", "Today 6:00 AM · Alex · 60 min", "Available", "18/20 booked"], ["Night Ride", "Today 8:00 PM · Sara · 45 min", "Scheduled", "22/24 booked"]].map(([n, d, s, m]) => (
            <div key={n} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#252C27] bg-[#111612] p-5">
              <div><h2 className="font-extrabold">{n}</h2><p className="text-sm text-white/55">{d} · {m}</p></div>
              <div className="flex items-center gap-2.5"><StatusBadge state={s} /><button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Manage</button><button className="rounded-full border border-[#FF5C5C]/50 px-4 py-1.5 text-xs font-bold text-[#FF5C5C]">Cancel</button></div>
            </div>
          ))}
        </div>
      )}

      {tab === "Bookings" && (
        <div className="mt-4 overflow-x-auto rounded-2xl border border-[#252C27]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead><tr className="bg-[#111612] text-xs text-white/45"><th className="p-4">Class</th><th className="p-4">Member</th><th className="p-4">Status</th><th className="p-4">Load</th></tr></thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b[0] + b[1]} className="border-t border-[#1d231e]"><td className="p-4 font-bold">{b[0]}</td><td className="p-4 text-white/60">{b[1]}</td><td className="p-4"><StatusBadge state={b[2]} /></td><td className="p-4 text-white/60">{b[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={show} onClose={() => setShow(false)} title={`Create — ${tab}`}>
        <form className="grid gap-3.5" onSubmit={(e) => { e.preventDefault(); setShow(false); }}>
          <Field label="Name"><input required placeholder={`${tab.slice(0, -1)} name`} className={inputCls} /></Field>
          <div className="grid grid-cols-2 gap-3.5">
            <Field label="Duration"><input placeholder="60 min" className={inputCls} /></Field>
            <Field label="Difficulty"><select className={inputCls}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></Field>
          </div>
          <Field label="Description"><textarea rows={3} placeholder="Short description…" className={inputCls} /></Field>
          <button className="rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black">Create</button>
        </form>
      </Modal>
    </div>
  );
}
