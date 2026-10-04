"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Dumbbell, CalendarCheck, TrendingUp, Apple,
  Trophy, CreditCard, User, Dumbbell as Logo,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/member", label: "Dashboard", icon: LayoutDashboard },
  { href: "/member/workout", label: "My Workout", icon: Dumbbell },
  { href: "/member/classes", label: "Classes", icon: CalendarCheck },
  { href: "/member/progress", label: "Progress", icon: TrendingUp },
  { href: "/member/nutrition", label: "Nutrition", icon: Apple },
  { href: "/member/challenges", label: "Challenges", icon: Trophy },
  { href: "/member/membership", label: "Membership", icon: CreditCard },
  { href: "/member/profile", label: "Profile", icon: User },
];

const mobileNav = nav.slice(0, 5);

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-[#080B09] text-white">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-[#1d231e] bg-[#0b0e0c] p-5 lg:flex">
        <Link href="/" className="flex items-center gap-2.5 px-2 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black"><Logo size={20} strokeWidth={2.5} /></span>
          <span className="text-lg font-black">FORGE<span className="text-[#C8F31D]">.</span></span>
        </Link>
        <nav className="mt-6 flex-1 space-y-1" aria-label="Member">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}
              className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition",
                path === n.href ? "bg-[#C8F31D] text-black" : "text-white/60 hover:bg-white/5 hover:text-white")}>
              <n.icon size={18} /> {n.label}
            </Link>
          ))}
        </nav>
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-4">
          <p className="text-xs font-bold text-white/50">PERFORMANCE PLAN</p>
          <p className="mt-1 text-sm font-bold">Expires in 21 days</p>
          <Link href="/member/membership" className="mt-3 block rounded-full bg-[#C8F31D] py-2.5 text-center text-[13px] font-black text-black">Renew</Link>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-[#1d231e] bg-[#080B09]/90 px-5 py-4 backdrop-blur-xl lg:px-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Member" className="h-10 w-10 rounded-full object-cover lg:hidden" />
              <div>
                <p className="text-xs text-white/50">Performance member</p>
                <p className="text-sm font-extrabold">Tanvir Ahmed</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="hidden rounded-full bg-[#C8F31D]/15 px-3.5 py-1.5 text-xs font-bold text-[#C8F31D] sm:block">🔥 14-day streak</span>
              <Link href="/" className="rounded-full border border-[#2c352e] px-4 py-2 text-xs font-bold text-white/60 hover:text-white">Website</Link>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-5 pb-28 pt-6 lg:px-8 lg:pb-12">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1d231e] bg-[#0b0e0c]/95 backdrop-blur-xl lg:hidden" aria-label="Member mobile">
        <div className="grid grid-cols-5">
          {mobileNav.map((n) => (
            <Link key={n.href} href={n.href}
              className={cn("flex flex-col items-center gap-1 py-3 text-[10px] font-bold", path === n.href ? "text-[#C8F31D]" : "text-white/45")}>
              <n.icon size={20} /> {n.label.split(" ")[0]}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
