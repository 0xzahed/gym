"use client";
import Link from "next/link";
import { useState } from "react";
import { Dumbbell } from "lucide-react";
import { Field, inputCls } from "@/components/ui";

function Shell({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen bg-[#080B09] text-white lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B09] via-[#080B09]/40 to-[#080B09]/20" />
        <div className="absolute bottom-10 left-10 right-10">
          <p className="text-3xl font-black leading-tight">BUILD YOUR<br /><span className="text-[#C8F31D]">STRONGEST SELF.</span></p>
          <p className="mt-2 text-sm text-white/60">5,000+ members train with Forge coaches every week.</p>
        </div>
        <Link href="/" className="absolute left-10 top-8 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black"><Dumbbell size={20} strokeWidth={2.5} /></span>
          <span className="text-lg font-black">FORGE<span className="text-[#C8F31D]">.</span></span>
        </Link>
      </div>
      <div className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black"><Dumbbell size={20} strokeWidth={2.5} /></span>
            <span className="text-lg font-black">FORGE<span className="text-[#C8F31D]">.</span></span>
          </Link>
          <h1 className="text-3xl font-black">{title}</h1>
          <p className="mt-2 text-sm text-[#A9B0AA]">{sub}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </main>
  );
}

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  return (
    <Shell title="Welcome back" sub="Log in to track workouts, book classes and view your plan.">
      <form onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => (window.location.href = "/member"), 900); }} className="grid gap-4">
        <Field label="Email or phone"><input required placeholder="you@email.com" className={inputCls} /></Field>
        <Field label="Password"><input required type="password" placeholder="••••••••" className={inputCls} /></Field>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-white/60"><input type="checkbox" defaultChecked className="accent-[#C8F31D]" /> Remember me</label>
          <a href="#" className="font-semibold text-[#C8F31D]">Forgot password?</a>
        </div>
        <button disabled={loading} className="rounded-full bg-[#C8F31D] py-4 text-sm font-black text-black transition hover:bg-[#d8ff3d] disabled:opacity-60">
          {loading ? "Logging in…" : "Log In"}
        </button>
        <p className="text-center text-sm text-white/50">New here? <Link href="/auth/register" className="font-bold text-[#C8F31D]">Create account</Link></p>
        <Link href="/admin" className="rounded-full border border-[#2c352e] py-3.5 text-center text-sm font-semibold text-white/60 hover:text-white">View admin demo →</Link>
      </form>
    </Shell>
  );
}

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  return (
    <Shell title="Join Forge" sub="Create your account. First session is free.">
      <form onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => (window.location.href = "/member"), 900); }} className="grid gap-4">
        <Field label="Full name"><input required placeholder="Tanvir Ahmed" className={inputCls} /></Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Email"><input required type="email" placeholder="you@email.com" className={inputCls} /></Field>
          <Field label="Phone"><input required placeholder="+880 ..." className={inputCls} /></Field>
        </div>
        <Field label="Password"><input required type="password" placeholder="Min. 8 characters" className={inputCls} /></Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Fitness goal">
            <select className={inputCls}><option>Build Muscle</option><option>Lose Weight</option><option>Improve Fitness</option><option>Stay Active</option></select>
          </Field>
          <Field label="Plan">
            <select className={inputCls}><option>Performance — ৳2,500</option><option>Starter — ৳1,500</option><option>Elite — ৳4,500</option></select>
          </Field>
        </div>
        <button disabled={loading} className="rounded-full bg-[#C8F31D] py-4 text-sm font-black text-black hover:bg-[#d8ff3d] disabled:opacity-60">
          {loading ? "Creating account…" : "Create Account"}
        </button>
        <p className="text-center text-sm text-white/50">Have an account? <Link href="/auth/login" className="font-bold text-[#C8F31D]">Log in</Link></p>
      </form>
    </Shell>
  );
}
