"use client";
import { useMemo, useState } from "react";
import { Search, Trash2, Pencil, Eye, Plus } from "lucide-react";
import { StatusBadge, Modal, Field, inputCls, EmptyState } from "@/components/ui";

type M = { name: string; id: string; plan: string; trainer: string; status: string; join: string; expiry: string };

const seed: M[] = [
  { name: "Tanvir Ahmed", id: "FG-5284", plan: "Performance", trainer: "Alex Rahman", status: "Active", join: "Jan 05, 2026", expiry: "Feb 05, 2026" },
  { name: "Nusrat Jahan", id: "FG-5283", plan: "Elite", trainer: "Daniel C.", status: "Active", join: "Jan 04, 2026", expiry: "Feb 04, 2026" },
  { name: "Rafiul Karim", id: "FG-5282", plan: "Starter", trainer: "—", status: "Pending", join: "Jan 04, 2026", expiry: "Feb 04, 2026" },
  { name: "Priya Das", id: "FG-5281", plan: "Performance", trainer: "Sara Khan", status: "Active", join: "Jan 03, 2026", expiry: "Feb 03, 2026" },
  { name: "Arif Chowdhury", id: "FG-5280", plan: "Elite", trainer: "Maria Islam", status: "Expired", join: "Dec 02, 2025", expiry: "Jan 02, 2026" },
  { name: "Shanta Roy", id: "FG-5279", plan: "Starter", trainer: "—", status: "Active", join: "Dec 28, 2025", expiry: "Jan 28, 2026" },
  { name: "Imran Hossain", id: "FG-5278", plan: "Performance", trainer: "Alex Rahman", status: "Active", join: "Dec 20, 2025", expiry: "Jan 20, 2026" },
  { name: "Farhana Akter", id: "FG-5277", plan: "Elite", trainer: "Sara Khan", status: "Active", join: "Dec 15, 2025", expiry: "Jan 15, 2026" },
];

export default function MembersAdmin() {
  const [rows, setRows] = useState(seed);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [confirmDel, setConfirmDel] = useState<string | null>(null);
  const per = 5;

  const filtered = useMemo(
    () => rows.filter((r) => (filter === "All" || r.status === filter || r.plan === filter) && (r.name.toLowerCase().includes(q.toLowerCase()) || r.id.toLowerCase().includes(q.toLowerCase()))),
    [rows, q, filter]
  );
  const pages = Math.max(1, Math.ceil(filtered.length / per));
  const view = filtered.slice((page - 1) * per, page * per);

  const toggleSel = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><h1 className="text-2xl font-black">MEMBERS <span className="text-sm font-bold text-white/40">({filtered.length})</span></h1></div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 rounded-full bg-[#C8F31D] px-5 py-2.5 text-sm font-black text-black"><Plus size={16} /> Add Member</button>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
        <label className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" />
          <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search name or member ID…" className="w-full rounded-full border border-[#252C27] bg-[#111612] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#C8F31D]" />
        </label>
        <div className="flex gap-2 overflow-x-auto">
          {["All", "Active", "Pending", "Expired", "Elite"].map((f) => (
            <button key={f} onClick={() => { setFilter(f); setPage(1); }} className={`shrink-0 rounded-full px-4 py-2.5 text-[13px] font-bold ${filter === f ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{f}</button>
          ))}
        </div>
      </div>

      {selected.length > 0 && (
        <div className="mt-3 flex items-center justify-between rounded-2xl border border-[#C8F31D]/40 bg-[#10150f] px-5 py-3 text-sm">
          <b>{selected.length} selected</b>
          <div className="flex gap-2">
            <button className="rounded-full border border-[#2c352e] px-4 py-1.5 text-xs font-bold">Assign trainer</button>
            <button onClick={() => { setRows((r) => r.filter((x) => !selected.includes(x.id))); setSelected([]); }} className="rounded-full bg-[#FF5C5C] px-4 py-1.5 text-xs font-black text-black">Delete</button>
          </div>
        </div>
      )}

      {view.length === 0 ? (
        <div className="mt-4"><EmptyState title="No members found" desc="Try a different search or filter." /></div>
      ) : (
        <>
          <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-[#252C27] md:block">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead><tr className="bg-[#111612] text-xs text-white/45"><th className="p-4"><input type="checkbox" className="accent-[#C8F31D]" onChange={(e) => setSelected(e.target.checked ? view.map((v) => v.id) : [])} /></th><th className="p-4">Member</th><th className="p-4">ID</th><th className="p-4">Plan</th><th className="p-4">Trainer</th><th className="p-4">Status</th><th className="p-4">Expiry</th><th className="p-4 text-right">Actions</th></tr></thead>
              <tbody>
                {view.map((r) => (
                  <tr key={r.id} className="border-t border-[#1d231e] hover:bg-white/[0.02]">
                    <td className="p-4"><input type="checkbox" checked={selected.includes(r.id)} onChange={() => toggleSel(r.id)} className="accent-[#C8F31D]" /></td>
                    <td className="p-4 font-bold">{r.name}<span className="block text-xs font-normal text-white/40">Joined {r.join}</span></td>
                    <td className="p-4 text-white/50">{r.id}</td><td className="p-4">{r.plan}</td><td className="p-4 text-white/60">{r.trainer}</td>
                    <td className="p-4"><StatusBadge state={r.status} /></td><td className="p-4 text-white/60">{r.expiry}</td>
                    <td className="p-4"><div className="flex justify-end gap-1.5">
                      <button className="rounded-lg border border-[#2c352e] p-2 hover:text-[#C8F31D]" aria-label="View"><Eye size={15} /></button>
                      <button className="rounded-lg border border-[#2c352e] p-2 hover:text-[#C8F31D]" aria-label="Edit"><Pencil size={15} /></button>
                      <button onClick={() => setConfirmDel(r.id)} className="rounded-lg border border-[#2c352e] p-2 hover:border-[#FF5C5C] hover:text-[#FF5C5C]" aria-label="Delete"><Trash2 size={15} /></button>
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 md:hidden">
            {view.map((r) => (
              <div key={r.id} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
                <div className="flex items-center justify-between"><b>{r.name}</b><StatusBadge state={r.status} /></div>
                <p className="mt-1 text-xs text-white/50">{r.id} · {r.plan} · Coach: {r.trainer}</p>
                <p className="text-xs text-white/40">Joined {r.join} · Expires {r.expiry}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-full border border-[#2c352e] py-2.5 text-xs font-bold">View</button>
                  <button className="flex-1 rounded-full border border-[#2c352e] py-2.5 text-xs font-bold">Edit</button>
                  <button onClick={() => setConfirmDel(r.id)} className="flex-1 rounded-full border border-[#FF5C5C]/50 py-2.5 text-xs font-bold text-[#FF5C5C]">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <p className="text-white/50">Page {page} of {pages}</p>
            <div className="flex gap-2">
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="rounded-full border border-[#2c352e] px-5 py-2 font-bold disabled:opacity-40">Prev</button>
              <button disabled={page >= pages} onClick={() => setPage((p) => p + 1)} className="rounded-full border border-[#2c352e] px-5 py-2 font-bold disabled:opacity-40">Next</button>
            </div>
          </div>
        </>
      )}

      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add Member">
        <form className="grid gap-3.5" onSubmit={(e) => { e.preventDefault(); setShowAdd(false); }}>
          <Field label="Full name"><input required placeholder="New member" className={inputCls} /></Field>
          <div className="grid grid-cols-2 gap-3.5">
            <Field label="Plan"><select className={inputCls}><option>Performance</option><option>Starter</option><option>Elite</option></select></Field>
            <Field label="Trainer"><select className={inputCls}><option>Alex Rahman</option><option>Sara Khan</option><option>Unassigned</option></select></Field>
          </div>
          <Field label="Phone"><input required placeholder="+880 ..." className={inputCls} /></Field>
          <button className="rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black">Add Member</button>
        </form>
      </Modal>

      <Modal open={!!confirmDel} onClose={() => setConfirmDel(null)} title="Delete member?">
        <p className="text-sm text-white/60">This removes the member, their bookings and assigned plans. This cannot be undone.</p>
        <div className="mt-5 flex gap-2.5">
          <button onClick={() => setConfirmDel(null)} className="flex-1 rounded-full border border-[#2c352e] py-3 text-sm font-bold">Keep</button>
          <button onClick={() => { setRows((r) => r.filter((x) => x.id !== confirmDel)); setConfirmDel(null); }} className="flex-1 rounded-full bg-[#FF5C5C] py-3 text-sm font-black text-black">Delete</button>
        </div>
      </Modal>
    </div>
  );
}
