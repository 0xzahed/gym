"use client";
import { useState } from "react";
import { trainers } from "@/lib/data";
import { Stars, Modal, Field, inputCls } from "@/components/ui";
import { Plus, Star } from "lucide-react";

export default function TrainersAdmin() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-black">TRAINERS <span className="text-sm font-bold text-white/40">({trainers.length})</span></h1>
        <button onClick={() => setShow(true)} className="flex items-center gap-2 rounded-full bg-[#C8F31D] px-5 py-2.5 text-sm font-black text-black"><Plus size={16} /> Add Trainer</button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {trainers.map((t) => (
          <div key={t.slug} className="flex gap-4 rounded-2xl border border-[#252C27] bg-[#111612] p-5">
            <img src={t.img} alt={t.name} className="h-24 w-24 shrink-0 rounded-2xl object-cover" />
            <div className="min-w-0 flex-1">
              <h2 className="font-extrabold">{t.name}</h2>
              <p className="text-xs text-[#C8F31D]">{t.role} · {t.exp}</p>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold"><Star size={12} className="fill-[#C8F31D] text-[#C8F31D]" /> {t.rating} ({t.reviews}) · 42 members assigned</p>
              <div className="mt-2.5 flex gap-1.5">
                <button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold hover:border-[#C8F31D]">Profile</button>
                <button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold hover:border-[#C8F31D]">Schedule</button>
                <button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold hover:border-[#C8F31D]">Sessions</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <h2 className="font-extrabold">Certifications expiring</h2>
          <p className="mt-2 text-sm text-white/60">2 trainers need renewal before March — automated reminders sent.</p>
        </div>
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <h2 className="font-extrabold">Personal training sessions this week</h2>
          <p className="mt-2 text-3xl font-black text-[#C8F31D]">86 <span className="text-sm font-semibold text-white/50">sessions · 94% attended</span></p>
        </div>
      </div>
      <Modal open={show} onClose={() => setShow(false)} title="Add Trainer">
        <form className="grid gap-3.5" onSubmit={(e) => { e.preventDefault(); setShow(false); }}>
          <Field label="Full name"><input required placeholder="Coach name" className={inputCls} /></Field>
          <div className="grid grid-cols-2 gap-3.5">
            <Field label="Specialisation"><input placeholder="Strength, HIIT…" className={inputCls} /></Field>
            <Field label="Experience (years)"><input type="number" placeholder="5" className={inputCls} /></Field>
          </div>
          <Field label="Certifications"><input placeholder="NSCA-CSCS, …" className={inputCls} /></Field>
          <button className="rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black">Add Trainer</button>
        </form>
      </Modal>
    </div>
  );
}
