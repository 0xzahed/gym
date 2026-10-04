"use client";
import { useState } from "react";
import { Field, inputCls } from "@/components/ui";
import { Download } from "lucide-react";

const reports = ["Revenue", "Membership", "Attendance", "Classes", "Trainers", "Growth", "Expiry", "Payments"];

export default function ReportsAdmin() {
  const [tab, setTab] = useState("Reports");
  const [role, setRole] = useState("Manager");
  return (
    <div>
      <h1 className="text-2xl font-black">REPORTS & SETTINGS</h1>
      <div className="mt-4 flex gap-2">
        {["Reports", "Settings"].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full px-5 py-2.5 text-sm font-bold ${tab === t ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{t}</button>
        ))}
      </div>

      {tab === "Reports" && (
        <div className="mt-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((r) => (
              <div key={r} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
                <h2 className="font-extrabold">{r} Report</h2>
                <p className="mt-1 text-xs text-white/50">Updated 5 min ago · Jan 2026</p>
                <button className="mt-3 flex items-center gap-1.5 rounded-full border border-[#2c352e] px-4 py-2 text-xs font-bold hover:border-[#C8F31D] hover:text-[#C8F31D]"><Download size={13} /> Export CSV</button>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Revenue — last 6 months (৳ Lakh)</h2>
            <div className="mt-4 flex h-40 items-end gap-2.5" aria-hidden>
              {[9.2, 10.1, 9.8, 11.4, 12.1, 12.8].map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-[11px] font-bold text-[#C8F31D]">{v}L</span>
                  <div className="w-full rounded-lg bg-[#1e251f]" style={{ height: 110, position: "relative" }}>
                    <div className="absolute bottom-0 w-full rounded-lg" style={{ height: `${(v / 13) * 100}%`, background: i === 5 ? "#C8F31D" : "#33502f" }} />
                  </div>
                  <span className="text-[10px] text-white/35">{["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "Settings" && (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <form className="grid gap-3.5 rounded-2xl border border-[#252C27] bg-[#111612] p-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-extrabold">General</h2>
            <Field label="Gym name"><input defaultValue="Forge Fitness Club" className={inputCls} /></Field>
            <div className="grid grid-cols-2 gap-3.5">
              <Field label="Phone"><input defaultValue="+880 1700 000 000" className={inputCls} /></Field>
              <Field label="Email"><input defaultValue="hello@forgegym.fit" className={inputCls} /></Field>
            </div>
            <Field label="Address"><input defaultValue="House 12, Road 5, Gulshan, Dhaka" className={inputCls} /></Field>
            <h2 className="mt-2 font-extrabold">Business hours</h2>
            <div className="grid grid-cols-2 gap-3.5">
              <Field label="Mon – Fri"><input defaultValue="6:00 AM – 11:00 PM" className={inputCls} /></Field>
              <Field label="Sat – Sun"><input defaultValue="7:00 AM – 10:00 PM" className={inputCls} /></Field>
            </div>
            <button className="rounded-full bg-[#C8F31D] py-3 text-sm font-black text-black">Save Settings</button>
          </form>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
              <h2 className="font-extrabold">Notifications</h2>
              {[["Email notifications", true], ["Push notifications", true], ["SMS alerts", false]].map(([l, on]) => (
                <label key={l as string} className="mt-2.5 flex items-center justify-between rounded-xl bg-[#182019] px-4 py-3 text-sm font-semibold">{l}<input type="checkbox" defaultChecked={on as boolean} className="h-5 w-5 accent-[#C8F31D]" /></label>
              ))}
            </div>
            <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
              <h2 className="font-extrabold">Payments</h2>
              <div className="mt-3 flex flex-wrap gap-2">{["bKash", "Nagad", "Card", "Bank", "Cash"].map((m) => <span key={m} className="rounded-full bg-[#182019] px-3.5 py-1.5 text-xs font-bold text-[#56D364]">● {m} connected</span>)}</div>
            </div>
            <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
              <h2 className="font-extrabold">Roles</h2>
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {["Admin", "Manager", "Trainer", "Nutritionist", "Receptionist"].map((r) => (
                  <button key={r} onClick={() => setRole(r)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${role === r ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{r}</button>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/55"><b className="text-white">{role}</b> can {role === "Admin" ? "do everything" : role === "Trainer" ? "view assigned members, log sessions, manage classes" : role === "Nutritionist" ? "manage foods, meals and nutrition plans" : role === "Receptionist" ? "check in members and take payments" : "manage members, classes and reports"}.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
