"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, Dumbbell, CalendarCheck, CreditCard,
  Apple, BarChart3, Settings, Dumbbell as Logo,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/trainers", label: "Trainers", icon: Dumbbell },
  { href: "/admin/operations", label: "Programs & Classes", icon: CalendarCheck },
  { href: "/admin/commerce", label: "Plans & Payments", icon: CreditCard },
  { href: "/admin/engagement", label: "Nutrition & More", icon: Apple },
  { href: "/admin/reports", label: "Reports & Settings", icon: BarChart3 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-[#080B09] text-white">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-[#1d231e] bg-[#0b0e0c] p-5 lg:flex">
        <Link href="/" className="flex items-center gap-2.5 px-2 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black"><Logo size={20} strokeWidth={2.5} /></span>
          <span className="text-lg font-black">FORGE<span className="text-[#C8F31D]">.</span></span>
          <span className="ml-1 rounded-full bg-[#C8F31D]/15 px-2 py-0.5 text-[10px] font-black text-[#C8F31D]">ADMIN</span>
        </Link>
        <nav className="mt-6 flex-1 space-y-1" aria-label="Admin">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}
              className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition",
                path === n.href ? "bg-[#C8F31D] text-black" : "text-white/60 hover:bg-white/5 hover:text-white")}>
              <n.icon size={18} /> {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 rounded-2xl border border-[#252C27] bg-[#111612] p-4">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Admin" className="h-10 w-10 rounded-full object-cover" />
          <div><p className="text-sm font-bold">Admin Khan</p><p className="text-xs text-white/45">Owner</p></div>
        </div>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-[#1d231e] bg-[#080B09]/90 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-5 py-4 lg:px-8">
            <nav className="flex gap-1.5 overflow-x-auto lg:hidden" aria-label="Admin mobile">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className={cn("shrink-0 rounded-full px-3.5 py-2 text-xs font-bold", path === n.href ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60")}>{n.label.split(" ")[0]}</Link>
              ))}
            </nav>
            <p className="hidden text-sm font-bold lg:block">Gym Management <span className="font-normal text-white/40">· Gulshan Branch</span></p>
            <div className="flex items-center gap-2.5">
              <span className="relative rounded-full border border-[#2c352e] p-2.5" aria-label="3 notifications">🔔<span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C8F31D] text-[9px] font-black text-black">3</span></span>
              <Link href="/" className="rounded-full border border-[#2c352e] px-4 py-2 text-xs font-bold text-white/60 hover:text-white">Website</Link>
              <Link href="/admin/reports" className="hidden rounded-full border border-[#2c352e] p-2.5 sm:block" aria-label="Settings"><Settings size={16} /></Link>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-5 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
