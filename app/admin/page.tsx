import { Users, UserCheck, UserPlus, Banknote, ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/ui";

const stats = [
  { icon: Users, l: "Total Members", v: "5,284", d: "+12% vs last month", up: true },
  { icon: UserCheck, l: "Active Members", v: "4,821", d: "91% active rate", up: true },
  { icon: UserPlus, l: "New Members", v: "184", d: "this month", up: true },
  { icon: Banknote, l: "Monthly Revenue", v: "৳12.8L", d: "+8.4% vs last month", up: true },
];

const recent = [
  ["Tanvir Ahmed", "FG-5284", "Performance", "Alex Rahman", "Active", "Jan 05", "Feb 05"],
  ["Nusrat Jahan", "FG-5283", "Elite", "Daniel C.", "Active", "Jan 04", "Feb 04"],
  ["Rafiul Karim", "FG-5282", "Starter", "—", "Pending", "Jan 04", "Feb 04"],
  ["Priya Das", "FG-5281", "Performance", "Sara Khan", "Active", "Jan 03", "Feb 03"],
  ["Arif Chowdhury", "FG-5280", "Elite", "Maria Islam", "Expired", "Dec 02", "Jan 02"],
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><h1 className="text-2xl font-black md:text-3xl">DASHBOARD</h1><p className="text-sm text-white/50">Tuesday, Jan 28 · Here's what's happening today.</p></div>
        <div className="flex gap-2.5">
          <button className="rounded-full border border-[#2c352e] px-5 py-2.5 text-sm font-bold hover:border-[#C8F31D]">Export</button>
          <button className="rounded-full bg-[#C8F31D] px-5 py-2.5 text-sm font-black text-black">+ Add Member</button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
            <p className="flex items-center gap-2 text-xs font-bold text-white/50"><s.icon size={14} className="text-[#C8F31D]" /> {s.l.toUpperCase()}</p>
            <p className="mt-2 text-3xl font-black">{s.v}</p>
            <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-[#56D364]"><ArrowUpRight size={13} /> {s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <div className="flex items-center justify-between"><h2 className="font-extrabold">Membership Growth</h2><span className="text-xs text-white/45">Last 8 months</span></div>
          <div className="mt-5 flex h-44 items-end gap-2" aria-hidden>
            {[42, 55, 50, 68, 62, 78, 85, 96].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="w-full rounded-lg bg-[#1e251f]" style={{ height: "100%", position: "relative" }}>
                  <div className="absolute bottom-0 w-full rounded-lg" style={{ height: `${h}%`, background: i === 7 ? "#C8F31D" : "#33502f" }} />
                </div>
                <span className="text-[10px] text-white/35">{["J", "A", "S", "O", "N", "D", "J", "J"][i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2.5 text-center">
            {[["Revenue", "৳12.8L"], ["Attendance today", "612"], ["Class occupancy", "84%"]].map(([l, v]) => (
              <div key={l} className="rounded-xl bg-[#182019] p-3.5"><p className="text-base font-black text-[#C8F31D]">{v}</p><p className="text-[11px] text-white/50">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Expiring Soon</h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[["Rafiul Karim", "expires in 2 days"], ["Shanta Roy", "expires in 4 days"], ["Imran Hossain", "expires in 6 days"]].map(([n, d]) => (
                <li key={n} className="flex items-center justify-between rounded-xl bg-[#182019] px-4 py-3"><span><b>{n}</b><span className="block text-xs text-amber-300">{d}</span></span><button className="rounded-full bg-[#C8F31D] px-4 py-1.5 text-xs font-black text-black">Remind</button></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
            <h2 className="font-extrabold">Today's Classes</h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[["HIIT Power · 7 AM", "18/20", "Almost Full"], ["Barbell Club · 6 AM", "18/20", "Available"]].map(([n, s, st]) => (
                <li key={n} className="flex items-center justify-between rounded-xl bg-[#182019] px-4 py-3"><span><b>{n}</b><span className="block text-xs text-white/50">{s} seats</span></span><StatusBadge state={st} /></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-[#252C27]">
        <div className="flex items-center justify-between bg-[#111612] p-5"><h2 className="font-extrabold">Latest Members</h2><a href="/admin/members" className="text-sm font-bold text-[#C8F31D]">View all →</a></div>
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead><tr className="border-t border-[#1d231e] bg-[#0d110e] text-xs text-white/45"><th className="p-4">Member</th><th className="p-4">ID</th><th className="p-4">Plan</th><th className="p-4">Trainer</th><th className="p-4">Status</th><th className="p-4">Expiry</th></tr></thead>
          <tbody>
            {recent.map((r) => (
              <tr key={r[1]} className="border-t border-[#1d231e] hover:bg-white/[0.02]">
                <td className="p-4 font-bold">{r[0]}</td><td className="p-4 text-white/50">{r[1]}</td><td className="p-4">{r[2]}</td><td className="p-4 text-white/60">{r[3]}</td>
                <td className="p-4"><StatusBadge state={r[4]} /></td><td className="p-4 text-white/60">{r[6]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
