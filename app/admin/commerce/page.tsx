"use client";
import { useState } from "react";
import { StatusBadge, Modal, Field, inputCls } from "@/components/ui";
import { Check, Plus } from "lucide-react";
import { plans } from "@/lib/data";

const payments = [
  ["INV-2041", "Tanvir Ahmed", "Performance · Jan", "bKash", "৳2,500", "Completed"],
  ["INV-2040", "Nusrat Jahan", "Elite · Jan", "Card", "৳4,500", "Completed"],
  ["INV-2039", "Rafiul Karim", "Starter · Jan", "Nagad", "৳1,500", "Pending"],
  ["INV-2038", "Arif Chowdhury", "Elite · Dec", "Bank", "৳4,500", "Completed"],
  ["INV-2037", "Shanta Roy", "Starter · Dec", "Cash", "৳1,500", "Completed"],
  ["INV-2036", "Imran Hossain", "Performance · Dec", "bKash", "৳2,500", "Failed"],
];

export default function CommerceAdmin() {
  const [tab, setTab] = useState("Payments");
  const [payFilter, setPayFilter] = useState("All");
  const [invoice, setInvoice] = useState<string[] | null>(null);
  const [showPlan, setShowPlan] = useState(false);
  const list = payments.filter((p) => payFilter === "All" || p[5] === payFilter);

  return (
    <div>
      <h1 className="text-2xl font-black">PLANS & PAYMENTS</h1>
      <div className="mt-4 flex gap-2">
        {["Plans", "Payments"].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full px-5 py-2.5 text-sm font-bold ${tab === t ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{t}</button>
        ))}
      </div>

      {tab === "Plans" && (
        <div className="mt-4">
          <div className="grid gap-3 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                <h2 className="font-black">{p.name} <span className="text-white/50">· {p.price}{p.per}</span></h2>
                <ul className="mt-3 space-y-1.5 text-[13px] text-white/65">{p.features.slice(0, 4).map((f) => <li key={f} className="flex gap-2"><Check size={13} strokeWidth={3} className="mt-0.5 text-[#C8F31D]" />{f}</li>)}</ul>
                <div className="mt-4 flex gap-2"><button className="flex-1 rounded-full border border-[#2c352e] py-2 text-xs font-bold">Edit</button><button className="flex-1 rounded-full border border-[#2c352e] py-2 text-xs font-bold text-[#FF5C5C]">Deactivate</button></div>
              </div>
            ))}
          </div>
          <button onClick={() => setShowPlan(true)} className="mt-4 flex items-center gap-2 rounded-full border border-dashed border-[#2c352e] px-6 py-3.5 text-sm font-bold text-white/60 hover:text-[#C8F31D]"><Plus size={16} /> Create new plan</button>
        </div>
      )}

      {tab === "Payments" && (
        <div className="mt-4">
          <div className="grid gap-3 sm:grid-cols-4">
            {[["Collected (Jan)", "৳12.8L"], ["Pending", "৳86K"], ["Failed", "৳12K"], ["Refunds", "৳9K"]].map(([l, v]) => (
              <div key={l} className="rounded-2xl border border-[#252C27] bg-[#111612] p-4"><p className="text-xs text-white/50">{l}</p><p className="mt-1 text-xl font-black">{v}</p></div>
            ))}
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {["All", "Completed", "Pending", "Failed"].map((f) => (
              <button key={f} onClick={() => setPayFilter(f)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${payFilter === f ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{f}</button>
            ))}
            <span className="ml-auto hidden shrink-0 items-center gap-2 text-xs text-white/45 sm:flex">bKash · Nagad · Card · Bank · Cash</span>
          </div>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-[#252C27]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead><tr className="bg-[#111612] text-xs text-white/45"><th className="p-4">Invoice</th><th className="p-4">Member</th><th className="p-4">Item</th><th className="p-4">Method</th><th className="p-4">Amount</th><th className="p-4">Status</th><th className="p-4"></th></tr></thead>
              <tbody>
                {list.map((p) => (
                  <tr key={p[0]} className="border-t border-[#1d231e] hover:bg-white/[0.02]">
                    <td className="p-4 font-bold">{p[0]}</td><td className="p-4">{p[1]}</td><td className="p-4 text-white/55">{p[2]}</td><td className="p-4"><span className="rounded-full bg-[#182019] px-2.5 py-1 text-xs">{p[3]}</span></td><td className="p-4 font-bold">{p[4]}</td>
                    <td className="p-4"><StatusBadge state={p[5]} /></td>
                    <td className="p-4"><button onClick={() => setInvoice(p)} className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold hover:border-[#C8F31D]">Invoice</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal open={!!invoice} onClose={() => setInvoice(null)} title={invoice ? `Invoice ${invoice[0]}` : "Invoice"}>
        {invoice && (
          <div className="text-sm">
            <div className="rounded-xl bg-[#182019] p-4">
              <div className="flex justify-between"><span className="text-white/55">Billed to</span><b>{invoice[1]}</b></div>
              <div className="mt-1.5 flex justify-between"><span className="text-white/55">Item</span><b>{invoice[2]}</b></div>
              <div className="mt-1.5 flex justify-between"><span className="text-white/55">Method</span><b>{invoice[3]} · TrxID BK88213</b></div>
              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-base"><span className="font-bold">Total</span><b className="text-[#C8F31D]">{invoice[4]}</b></div>
            </div>
            <div className="mt-4 flex gap-2.5">
              <button className="flex-1 rounded-full border border-[#2c352e] py-3 font-bold">Download PDF</button>
              <button className="flex-1 rounded-full bg-[#C8F31D] py-3 font-black text-black">Mark Paid</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={showPlan} onClose={() => setShowPlan(false)} title="Create Plan">
        <form className="grid gap-3.5" onSubmit={(e) => { e.preventDefault(); setShowPlan(false); }}>
          <div className="grid grid-cols-2 gap-3.5">
            <Field label="Plan name"><input required placeholder="e.g. Couple" className={inputCls} /></Field>
            <Field label="Price (৳)"><input required placeholder="3,500" className={inputCls} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <Field label="Duration"><select className={inputCls}><option>Monthly</option><option>Quarterly</option><option>Yearly</option></select></Field>
            <Field label="Class access"><select className={inputCls}><option>Unlimited</option><option>Limited</option><option>None</option></select></Field>
          </div>
          <Field label="Features (one per line)"><textarea rows={3} placeholder="Full gym access…" className={inputCls} /></Field>
          <button className="rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black">Create Plan</button>
        </form>
      </Modal>
    </div>
  );
}
