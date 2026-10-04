import { StatusBadge } from "@/components/ui";
import { Check } from "lucide-react";

export default function MembershipPage() {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">PLAN</p>
      <h1 className="mt-1 text-2xl font-black md:text-3xl">MY MEMBERSHIP</h1>
      <div className="mt-6 rounded-3xl border border-[#C8F31D]/40 bg-[#10150f] p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-xs font-bold text-white/50">CURRENT PLAN</p><p className="mt-1 text-2xl font-black">Performance <span className="text-base font-bold text-white/50">· ৳2,500/mo</span></p></div>
          <StatusBadge state="Active" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5 text-center">
          {[["Start", "Jan 05, 2026"], ["Renewal", "Feb 05, 2026"], ["Days left", "21 days"]].map(([l, v]) => (
            <div key={l} className="rounded-xl bg-black/30 p-3.5"><p className="text-[11px] font-bold text-white/50">{l.toUpperCase()}</p><p className="mt-0.5 text-sm font-extrabold">{v}</p></div>
          ))}
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {["Full gym access", "Unlimited group classes", "Personalised workout plan", "Progress tracking", "Trainer support"].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm"><Check size={15} strokeWidth={3} className="text-[#C8F31D]" />{f}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <button className="flex-1 rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black">Renew — ৳2,500</button>
          <button className="flex-1 rounded-full border border-[#C8F31D]/50 py-3.5 text-sm font-bold text-[#C8F31D]">Upgrade to Elite</button>
        </div>
      </div>
      <h2 className="mb-3 mt-8 font-extrabold">Payment history</h2>
      <div className="overflow-x-auto rounded-2xl border border-[#252C27]">
        <table className="w-full min-w-[520px] text-sm">
          <thead><tr className="bg-[#111612] text-left text-xs text-white/50"><th className="p-4">Invoice</th><th className="p-4">Date</th><th className="p-4">Method</th><th className="p-4">Amount</th><th className="p-4">Status</th></tr></thead>
          <tbody>
            {[["INV-2041", "Jan 05, 2026", "bKash", "৳2,500", "Completed"], ["INV-1987", "Dec 05, 2025", "Card", "৳2,500", "Completed"], ["INV-1932", "Nov 05, 2025", "Nagad", "৳2,500", "Completed"]].map((r) => (
              <tr key={r[0]} className="border-t border-[#1d231e]"><td className="p-4 font-bold">{r[0]}</td><td className="p-4 text-white/60">{r[1]}</td><td className="p-4 text-white/60">{r[2]}</td><td className="p-4 font-bold">{r[3]}</td><td className="p-4"><StatusBadge state={r[4]} /></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
