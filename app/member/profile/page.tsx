"use client";
import { Field, inputCls } from "@/components/ui";

export default function ProfilePage() {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">ACCOUNT</p>
      <h1 className="mt-1 text-2xl font-black md:text-3xl">PROFILE & SETTINGS</h1>
      <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#252C27] bg-[#111612] p-6">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Profile" className="h-16 w-16 rounded-full object-cover" />
        <div><p className="font-extrabold">Tanvir Ahmed</p><p className="text-sm text-white/50">ID: FG-5284 · Joined Jan 2024</p></div>
        <button className="ml-auto rounded-full border border-[#2c352e] px-5 py-2.5 text-[13px] font-bold hover:border-[#C8F31D] hover:text-[#C8F31D]">Change photo</button>
      </div>
      <form className="mt-4 grid gap-4 rounded-2xl border border-[#252C27] bg-[#111612] p-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name"><input defaultValue="Tanvir Ahmed" className={inputCls} /></Field>
          <Field label="Phone"><input defaultValue="+880 1700 000 000" className={inputCls} /></Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email"><input defaultValue="tanvir@email.com" className={inputCls} /></Field>
          <Field label="Goal"><select className={inputCls}><option>Build Muscle</option><option>Lose Weight</option></select></Field>
        </div>
        <h2 className="mt-2 font-extrabold">Notifications</h2>
        {[["Class reminders", true], ["Payment reminders", true], ["Workout nudges", false], ["Challenge updates", true]].map(([l, on]) => (
          <label key={l as string} className="flex items-center justify-between rounded-xl bg-[#182019] px-4 py-3.5 text-sm font-semibold">
            {l}
            <input type="checkbox" defaultChecked={on as boolean} className="h-5 w-5 accent-[#C8F31D]" />
          </label>
        ))}
        <button className="rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black">Save Changes</button>
      </form>
    </div>
  );
}
