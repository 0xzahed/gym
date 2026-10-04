"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Dumbbell, Flame, Heart, Leaf, Zap,
  BadgeCheck, Clover as LeafIcon, Apple, Droplets, CalendarCheck,
  MapPin, Ticket, Users, Trophy, Star, ChevronRight, Play, Check,
} from "lucide-react";
import { IMG, programs, trainers, classes, plans, transformations, testimonials, timetable, goals } from "@/lib/data";
import { Reveal, SectionHead, LimeButton, GhostButton, Counter, ProgressBar, StatusBadge, Stars, Field, inputCls, Modal } from "./ui";

/* ============ HERO ============ */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="Athlete training in dark gym" className="hero-zoom h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B09] via-[#080B09]/55 to-[#080B09]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B09]/80 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-36 md:px-8 md:pb-20">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8F31D]" /> DHAKA'S PREMIUM STRENGTH CLUB
          </p>
          <h1 className="max-w-3xl text-[13vw] font-black leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            BUILD YOUR<br />
            <span className="text-[#C8F31D]">STRONGEST</span> SELF.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            Transform your body, build your discipline, and become the strongest version of yourself.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LimeButton href="/trial">Start Your Journey <ArrowRight size={17} /></LimeButton>
            <GhostButton href="/programs">Explore Programs</GhostButton>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {[
              { v: 5, s: "K+", label: "Active Members" },
              { v: 25, s: "+", label: "Expert Coaches" },
              { v: 10, s: "+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black text-white md:text-4xl">
                  <Counter to={s.v} suffix={s.s} />
                </p>
                <p className="mt-1 text-xs font-medium text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ QUICK ACTIONS ============ */
export function QuickActions() {
  const items = [
    { icon: Ticket, title: "Book Free Trial", desc: "First session on us", href: "/trial" },
    { icon: Users, title: "View Membership", desc: "From ৳1,500/mo", href: "/membership" },
    { icon: CalendarCheck, title: "Book a Class", desc: "40+ weekly sessions", href: "/classes" },
    { icon: MapPin, title: "Find Our Gym", desc: "Gulshan, Dhaka", href: "/contact" },
  ];
  return (
    <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 md:px-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {items.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}>
            <Link href={a.href} className="group flex items-center gap-3.5 rounded-2xl border border-[#252C27] bg-[#111612] p-4 transition hover:border-[#C8F31D]/60 md:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#182019] text-[#C8F31D] transition group-hover:bg-[#C8F31D] group-hover:text-black">
                <a.icon size={20} />
              </span>
              <span>
                <span className="block text-sm font-bold">{a.title}</span>
                <span className="block text-xs text-[#A9B0AA]">{a.desc}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ GOALS ============ */
const goalIcons: Record<string, any> = { dumbbell: Dumbbell, flame: Flame, heart: Heart, leaf: Leaf, zap: Zap };
export function Goals() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="FIND YOUR PATH" title={<>WHAT ARE YOU<br />TRAINING FOR?</>} desc="Pick a goal. We'll match you with the right program, coach and nutrition plan." align="center" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {goals.map((g, i) => {
          const Icon = goalIcons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 60}>
              <Link href="/programs" className="group relative flex h-full min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-[#252C27] bg-[#111612] p-5 transition hover:border-[#C8F31D]/60 hover:bg-[#141a15]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#182019] text-[#C8F31D]"><Icon size={20} /></span>
                <span>
                  <span className="block font-extrabold">{g.title}</span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-[#A9B0AA]">{g.desc}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-[#C8F31D] opacity-0 transition group-hover:opacity-100">
                    Start <ArrowRight size={14} />
                  </span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ============ PROGRAMS ============ */
export function Programs() {
  return (
    <section className="border-y border-[#1a201b] bg-[#0b0e0c]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="PROGRAMS" title={<>TRAINING THAT FITS<br />YOUR GOAL</>} />
          <Reveal><GhostButton href="/programs">All programs <ArrowRight size={15} /></GhostButton></Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <Link href="/programs" className="group block overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612] transition hover:border-[#C8F31D]/50">
                <div className="relative h-60 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold tracking-wide text-[#C8F31D] backdrop-blur">{p.tag.toUpperCase()}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black tracking-wide">{p.name.toUpperCase()}</h3>
                  <p className="mt-1.5 text-sm text-[#A9B0AA]">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/60">
                    <span className="rounded-full bg-[#182019] px-3 py-1.5">{p.level}</span>
                    <span className="rounded-full bg-[#182019] px-3 py-1.5">{p.duration}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C8F31D]">
                    Explore Program <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY US ============ */
export function WhyUs() {
  const feats = [
    { icon: BadgeCheck, t: "Certified Trainers", d: "Internationally certified, background-checked coaches." },
    { icon: Dumbbell, t: "Modern Equipment", d: "Eleiko racks, 3T dumbbells, dedicated cardio deck." },
    { icon: CalendarCheck, t: "Personalised Workout Plans", d: "Rebuilt every 6 weeks around your data." },
    { icon: Apple, t: "Nutrition Guidance", d: "Macro-based meal plans for Bangladeshi kitchens." },
    { icon: Trophy, t: "Progress Tracking", d: "In-app strength, weight and habit analytics." },
    { icon: LeafIcon, t: "Clean Environment", d: "Hospital-grade hygiene, purified air & water." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img src={IMG.gymFloor} alt="Forge gym floor" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/5]" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
              <div><p className="text-2xl font-black text-[#C8F31D]">4.9★</p><p className="text-xs text-white/60">2,300+ Google reviews</p></div>
              <div className="text-right"><p className="text-2xl font-black">98%</p><p className="text-xs text-white/60">renew after trial</p></div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHead eyebrow="WHY FORGE" title={<>MORE THAN A GYM.<br />IT'S YOUR <span className="text-[#C8F31D]">NEXT LEVEL.</span></>} />
          <div className="grid gap-4 sm:grid-cols-2">
            {feats.map((f, i) => (
              <Reveal key={f.t} delay={i * 50}>
                <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
                  <f.icon size={22} className="text-[#C8F31D]" />
                  <h3 className="mt-3 text-[15px] font-bold">{f.t}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#A9B0AA]">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}><div className="mt-8"><LimeButton href="/about">Explore Our Gym <ArrowRight size={16} /></LimeButton></div></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ JOURNEY ============ */
export function Journey() {
  const steps = [
    { n: "01", t: "Assessment", d: "Movement screen + body composition." },
    { n: "02", t: "Set Your Goal", d: "Define a clear 12-week target." },
    { n: "03", t: "Get Your Plan", d: "Training + nutrition, personalised." },
    { n: "04", t: "Train Consistently", d: "Coach-led sessions & classes." },
    { n: "05", t: "Track Progress", d: "Review data, adjust, repeat." },
  ];
  return (
    <section className="border-y border-[#1a201b] bg-[#0b0e0c]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead eyebrow="HOW IT WORKS" title="YOUR FITNESS JOURNEY" align="center" />
        <div className="relative grid gap-3 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-[#252C27] md:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="relative rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                <p className="text-3xl font-black text-[#C8F31D]">{s.n}</p>
                <h3 className="mt-2 font-extrabold">{s.t}</h3>
                <p className="mt-1 text-[13px] text-[#A9B0AA]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TRAINERS ============ */
export function TrainersHome() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="COACHES" title={<>MEET YOUR<br />COACHES</>} desc="Hand-picked, certified, obsessed with your progress." />
        <Reveal><GhostButton href="/trainers">All trainers <ArrowRight size={15} /></GhostButton></Reveal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 4) * 60}>
            <Link href={`/trainers/${t.slug}`} className="group block overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612] transition hover:border-[#C8F31D]/50">
              <div className="relative h-80 overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-[#111612]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-black">{t.name}</h3>
                  <p className="text-[13px] text-[#C8F31D]">{t.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-white/55">{t.exp}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {t.specs.map((s) => <span key={s} className="rounded-full bg-[#182019] px-2.5 py-1 text-[11px] font-semibold text-white/70">{s}</span>)}
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-sm font-bold"><Star size={14} className="fill-[#C8F31D] text-[#C8F31D]" /> {t.rating} <span className="font-normal text-white/40">({t.reviews})</span></p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-white/80 group-hover:text-[#C8F31D]">View Profile <ArrowRight size={14} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ TRANSFORMATIONS ============ */
export function Transformations() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Weight Loss", "Muscle Gain", "Strength"];
  const list = transformations.filter((t) => filter === "All" || t.goal === filter);
  return (
    <section className="border-y border-[#1a201b] bg-[#0b0e0c]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead eyebrow="RESULTS" title={<>REAL PEOPLE.<br />REAL PROGRESS.</>} align="center" />
        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${filter === c ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60 hover:text-white"}`}>{c}</button>
          ))}
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <div className="overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612]">
                <div className="relative h-64"><img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#C8F31D] px-3 py-1 text-[11px] font-black text-black">{t.result}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between"><h3 className="font-extrabold">{t.name}</h3><span className="text-xs font-bold text-[#C8F31D]">{t.goal}</span></div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    {[[t.before, "Before"], [t.after, "Now"], [t.duration, "Duration"]].map(([v, l]) => (
                      <div key={l} className="rounded-xl bg-[#182019] p-3"><p className="text-sm font-black">{v}</p><p className="text-[11px] text-white/50">{l}</p></div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROGRESS PREVIEW ============ */
export function ProgressPreview() {
  const rows = [
    { label: "Weight", from: "82 KG", to: "74 KG", v: 78 },
    { label: "Body Fat", from: "24%", to: "18%", v: 64 },
    { label: "Strength", from: "Base", to: "+34%", v: 84 },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead eyebrow="TRACKING" title={<>YOUR PROGRESS.<br />YOUR DATA.</>} desc="Every member gets a live dashboard — weight, strength, streaks and personal records, reviewed with your coach monthly." />
          <div className="space-y-5">
            {rows.map((r) => (
              <Reveal key={r.label}>
                <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
                  <div className="mb-2.5 flex items-center justify-between text-sm"><span className="font-bold">{r.label}</span><span className="text-[#A9B0AA]">{r.from} <ArrowRight size={13} className="inline" /> <span className="font-bold text-[#C8F31D]">{r.to}</span></span></div>
                  <ProgressBar value={r.v} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><div className="mt-7"><LimeButton href="/auth/register">Start Tracking Free <ArrowRight size={16} /></LimeButton></div></Reveal>
        </div>
        <Reveal delay={100}>
          <div className="rounded-3xl border border-[#252C27] bg-[#111612] p-6 md:p-8">
            <div className="flex items-center justify-between"><h3 className="font-extrabold">This week</h3><StatusBadge state="Active" /></div>
            <div className="mt-5 grid grid-cols-7 items-end gap-2" aria-hidden>
              {[40, 70, 55, 90, 65, 100, 50].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full rounded-lg" style={{ height: 110, background: "#182019", position: "relative" }}>
                    <div className="absolute bottom-0 w-full rounded-lg" style={{ height: `${h}%`, background: i === 5 ? "#C8F31D" : "#2c3a2e" }} />
                  </div>
                  <span className="text-[10px] text-white/40">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#182019] p-4"><p className="flex items-center gap-1.5 text-xs text-white/55"><Flame size={13} className="text-[#C8F31D]" /> Workout Streak</p><p className="mt-1 text-2xl font-black">14 <span className="text-sm font-semibold text-white/50">days</span></p></div>
              <div className="rounded-2xl bg-[#182019] p-4"><p className="flex items-center gap-1.5 text-xs text-white/55"><Trophy size={13} className="text-[#C8F31D]" /> Personal Records</p><p className="mt-1 text-2xl font-black">9 <span className="text-sm font-semibold text-white/50">this month</span></p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ NUTRITION ============ */
export function NutritionHome() {
  return (
    <section className="relative overflow-hidden border-y border-[#1a201b]">
      <img src={IMG.nutrition} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080B09] via-[#080B09]/85 to-[#080B09]/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="NUTRITION" title={<>TRAIN HARD.<br />EAT SMART.</>} desc="Macro-based meal plans built for real Bangladeshi kitchens — rice, fish, lentils and all. Plus calorie, protein and hydration tracking." />
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {["Personalised Meal Plans", "Calorie Tracking", "Macro Tracking", "Protein Goals", "Hydration", "Nutrition Consultation"].map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm font-medium"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8F31D]/15 text-[#C8F31D]"><Check size={13} strokeWidth={3} /></span>{f}</li>
            ))}
          </ul>
          <div className="mt-7"><GhostButton href="/membership">Get a meal plan <ArrowRight size={15} /></GhostButton></div>
        </div>
        <Reveal delay={100}>
          <div className="rounded-3xl border border-[#2c352e] bg-[#111612]/95 p-6 backdrop-blur md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">DAILY TARGET</p>
            <div className="mt-5 space-y-4">
              {[
                ["Calories", "2,400 kcal", 72],
                ["Protein", "160 g", 80],
                ["Carbs", "250 g", 60],
                ["Fat", "70 g", 55],
              ].map(([l, v, p]) => (
                <div key={l as string}>
                  <div className="mb-1.5 flex justify-between text-sm"><span className="text-white/70">{l}</span><span className="font-bold">{v}</span></div>
                  <ProgressBar value={p as number} />
                </div>
              ))}
              <div className="flex items-center justify-between rounded-2xl bg-[#182019] p-4 text-sm"><span className="flex items-center gap-2 text-white/70"><Droplets size={16} className="text-sky-300" /> Water</span><span className="font-bold">3.2 L</span></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CLASS SCHEDULE ============ */
export function ScheduleHome() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Strength", "HIIT", "Cardio", "Yoga", "Boxing"];
  const list = classes.filter((c) => cat === "All" || c.cat === cat);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="SCHEDULE" title="TODAY'S CLASSES" desc="Live availability. Book in seconds, cancel up to 4 hours before." />
        <Reveal><GhostButton href="/classes">Full timetable <ArrowRight size={15} /></GhostButton></Reveal>
      </div>
      <Reveal className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${cat === c ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60 hover:text-white"}`}>{c}</button>
        ))}
      </Reveal>
      <div className="grid gap-3 md:grid-cols-2">
        {list.slice(0, 6).map((c, i) => (
          <Reveal key={c.name + c.time} delay={(i % 2) * 60}>
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#252C27] bg-[#111612] p-5 transition hover:border-[#C8F31D]/40">
              <div>
                <p className="text-xs font-bold tracking-wider text-[#C8F31D]">{c.time} · {c.dur}</p>
                <h3 className="mt-1 font-extrabold">{c.name}</h3>
                <p className="mt-1 text-[13px] text-[#A9B0AA]">{c.level} · Coach {c.coach} · {c.seats} seats</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2.5">
                <StatusBadge state={c.state} />
                <Link href="/classes" className="text-[13px] font-bold text-white hover:text-[#C8F31D]">Book Class →</Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ MEMBERSHIP ============ */
export function MembershipHome() {
  return (
    <section className="border-y border-[#1a201b] bg-[#0b0e0c]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead eyebrow="MEMBERSHIP" title="SIMPLE, HONEST PRICING" desc="No joining fee. No lock-in tricks. Pause anytime. Prices in BDT." align="center" />
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div className={`relative flex h-full flex-col rounded-3xl border p-7 md:p-8 ${p.popular ? "border-[#C8F31D] bg-[#10150f] shadow-[0_0_60px_rgba(200,243,29,0.12)]" : "border-[#252C27] bg-[#111612]"}`}>
                {p.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#C8F31D] px-4 py-1.5 text-[11px] font-black tracking-wide text-black">MOST POPULAR</span>}
                <h3 className="text-sm font-bold tracking-[0.18em] text-white/60">{p.name.toUpperCase()}</h3>
                <p className="mt-3"><span className="text-4xl font-black md:text-5xl">{p.price}</span><span className="text-sm text-white/50">{p.per}</span></p>
                <p className="mt-2 text-sm text-[#A9B0AA]">{p.desc}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm"><Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-[#C8F31D]" />{f}</li>
                  ))}
                </ul>
                <Link href="/membership" className={`mt-7 rounded-full py-3.5 text-center text-sm font-bold transition ${p.popular ? "bg-[#C8F31D] text-black hover:bg-[#d8ff3d]" : "border border-[#2c352e] hover:border-[#C8F31D] hover:text-[#C8F31D]"}`}>{p.cta}</Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center"><Link href="/membership" className="text-sm font-bold text-white/60 hover:text-[#C8F31D]">Compare all plans →</Link></Reveal>
      </div>
    </section>
  );
}

/* ============ TRIAL ============ */
export function TrialForm() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="rounded-3xl border border-[#C8F31D]/40 bg-[#10150f] p-8 text-center md:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C8F31D] text-black"><Check size={28} strokeWidth={3} /></span>
        <h3 className="mt-5 text-2xl font-black">You're booked in!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-[#A9B0AA]">Our team will call you within 2 working hours to confirm your free session. Bring workout clothes — we handle the rest.</p>
        <button onClick={() => setDone(false)} className="mt-6 text-sm font-bold text-[#C8F31D]">Book another session →</button>
      </div>
    );
  }
  return (
    <form
      className="grid gap-4 rounded-3xl border border-[#252C27] bg-[#111612] p-6 md:p-8"
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name"><input required placeholder="Tanvir Ahmed" className={inputCls} /></Field>
        <Field label="Phone"><input required placeholder="+880 1XXX XXXXXX" className={inputCls} /></Field>
      </div>
      <Field label="Email"><input type="email" required placeholder="you@email.com" className={inputCls} /></Field>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Fitness goal">
          <select className={inputCls}><option>Build Muscle</option><option>Lose Weight</option><option>Improve Fitness</option><option>Stay Active</option><option>Athletic Performance</option></select>
        </Field>
        <Field label="Preferred date"><input type="date" required className={inputCls} /></Field>
        <Field label="Preferred time">
          <select className={inputCls}><option>Morning (6–10 AM)</option><option>Midday (12–3 PM)</option><option>Evening (5–9 PM)</option></select>
        </Field>
      </div>
      <button className="mt-2 rounded-full bg-[#C8F31D] py-4 text-sm font-black text-black transition hover:bg-[#d8ff3d]">Book Free Session <ArrowRight size={16} className="inline" /></button>
      <p className="text-center text-xs text-white/40">No card required · 45 minutes with a certified coach</p>
    </form>
  );
}

export function TrialSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead eyebrow="FREE TRIAL" title={<>TRY YOUR FIRST<br />SESSION <span className="text-[#C8F31D]">FREE.</span></>} desc="Full gym access, one coached session, movement assessment and a starter plan — free, no strings attached." />
          <ul className="space-y-3">
            {[["1", "Train with a certified coach"], ["2", "Get your body composition scan"], ["3", "Leave with a 2-week starter plan"]].map(([n, t]) => (
              <li key={n} className="flex items-center gap-3.5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8F31D] text-sm font-black text-black">{n}</span><span className="text-[15px] font-semibold">{t}</span></li>
            ))}
          </ul>
        </div>
        <Reveal delay={100}><TrialForm /></Reveal>
      </div>
    </section>
  );
}

/* ============ GALLERY / COMMUNITY / CHALLENGES / TESTIMONIALS / LOCATION / FINAL CTA ============ */
export function GalleryHome() {
  const shots = [
    { img: IMG.gymFloor, label: "Main Gym", cls: "sm:col-span-2 sm:row-span-2 h-72 sm:h-full min-h-[280px]" },
    { img: IMG.strength, label: "Strength Zone", cls: "h-56 sm:h-64" },
    { img: IMG.cardio, label: "Cardio Deck", cls: "h-56 sm:h-64" },
    { img: IMG.boxing, label: "Boxing Corner", cls: "h-56 sm:h-64" },
    { img: IMG.yoga, label: "Mind & Mobility", cls: "h-56 sm:h-64" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="THE SPACE" title="STEP INSIDE FORGE" />
        <Reveal><GhostButton href="/gallery">View gallery <ArrowRight size={15} /></GhostButton></Reveal>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {shots.map((s, i) => (
          <Reveal key={s.label} delay={i * 50} className={s.cls}>
            <div className="group relative h-full min-h-[inherit] overflow-hidden rounded-3xl border border-[#252C27]">
              <img src={s.img} alt={s.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-5 text-sm font-extrabold">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CommunityChallenges() {
  const [joined, setJoined] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="border-y border-[#1a201b] bg-[#0b0e0c]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="COMMUNITY" title={<>MORE THAN TRAINING.<br />IT'S A COMMUNITY.</>} desc="Fitness events, workshops, group training and monthly challenges. You never train alone here." />
          <div className="relative overflow-hidden rounded-3xl border border-[#252C27]">
            <img src={IMG.community} alt="Forge community workout" loading="lazy" className="h-72 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {["Fitness Events", "Workshops", "Group Training", "Run Club"].map((t) => (
                <span key={t} className="rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-bold backdrop-blur">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SectionHead eyebrow="CHALLENGE" title="30-DAY FITNESS CHALLENGE" />
          <div className="rounded-3xl border border-[#C8F31D]/30 bg-[#10150f] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <StatusBadge state="Active" />
              <p className="text-sm font-bold text-[#C8F31D]">18 DAYS LEFT</p>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex justify-between text-sm"><span className="font-bold">72% COMPLETE</span><span className="text-white/50">1,284 joined</span></div>
              <ProgressBar value={72} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#A9B0AA]">Train 20 of 30 days, log protein daily, finish with a 5K run. Finishers earn the Forge Medal + 1 month recovery-zone access.</p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button onClick={() => { setJoined(true); setShowModal(true); }} className="flex-1 rounded-full bg-[#C8F31D] py-3.5 text-sm font-black text-black hover:bg-[#d8ff3d]">{joined ? "Challenge Joined ✓" : "Join Challenge"}</button>
              <button onClick={() => setShowModal(true)} className="flex-1 rounded-full border border-[#2c352e] py-3.5 text-sm font-bold hover:border-[#C8F31D] hover:text-[#C8F31D]">View Challenge</button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[["2.1K", "Workouts logged"], ["96%", "Finish rate"], ["40+", "Prizes"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-[#252C27] bg-[#111612] p-4"><p className="text-xl font-black text-[#C8F31D]">{v}</p><p className="text-[11px] text-white/50">{l}</p></div>
            ))}
          </div>
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="30-Day Fitness Challenge">
        <div className="space-y-3 text-sm">
          {[["Week 1 — Build the habit", "3 full-body sessions + 7k steps daily"], ["Week 2 — Push conditioning", "2 HIIT + 2 strength + protein target"], ["Week 3 — Strength focus", "Progressive overload, +2.5kg on mains"], ["Week 4 — Finish strong", "5K run + final assessment"]].map(([t, d]) => (
            <div key={t} className="rounded-xl bg-[#182019] p-4"><p className="font-bold">{t}</p><p className="text-white/60">{d}</p></div>
          ))}
          <button onClick={() => { setJoined(true); setShowModal(false); }} className="w-full rounded-full bg-[#C8F31D] py-3.5 font-black text-black">{joined ? "You're In ✓" : "Join Now — Free for Members"}</button>
        </div>
      </Modal>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="MEMBERS" title="LOVED BY MEMBERS" align="center" />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 70}>
            <figure className="flex h-full flex-col rounded-3xl border border-[#252C27] bg-[#111612] p-7">
              <Stars value={t.rating} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/80">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                <span><span className="block text-sm font-bold">{t.name}</span><span className="block text-xs text-white/50">{t.meta}</span></span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function LocationFinal() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612] lg:grid-cols-2">
          <div className="p-7 md:p-12">
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">VISIT US</p>
            <h2 className="text-3xl font-black md:text-5xl">FIND YOUR GYM</h2>
            <ul className="mt-7 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-[#C8F31D]" /><span>House 12, Road 5, Gulshan Avenue,<br />Dhaka 1212, Bangladesh</span></li>
              <li className="flex gap-3"><span className="font-bold text-white/50">Hours</span><span>Mon–Fri 6AM–11PM<br />Sat–Sun 7AM–10PM</span></li>
            </ul>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <LimeButton href="/contact">Get Directions <ArrowUpRight size={16} /></LimeButton>
              <GhostButton href="/trial">Book Free Trial</GhostButton>
            </div>
          </div>
          <div className="relative min-h-[300px] bg-[#182019]">
            <img src={IMG.gymFloor} alt="Gym map area" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center gap-2 rounded-full bg-black/70 px-5 py-3 text-sm font-bold backdrop-blur"><MapPin size={16} className="text-[#C8F31D]" /> Gulshan · Dhaka</span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden">
        <img src={IMG.cta} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#080B09]/80" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-36">
          <Reveal>
            <h2 className="text-4xl font-black leading-[1.02] md:text-7xl">READY TO GET<br /><span className="text-[#C8F31D]">STRONGER?</span></h2>
            <p className="mx-auto mt-4 max-w-md text-white/65">Your transformation starts with one decision.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LimeButton href="/trial">Start Your Journey <ArrowRight size={16} /></LimeButton>
              <GhostButton href="/contact">Contact Us</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ============ TIMETABLE ============ */
export function Timetable() {
  const days = Object.keys(timetable);
  const [day, setDay] = useState(days[0]);
  return (
    <div>
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 md:hidden">
        {days.map((d) => (
          <button key={d} onClick={() => setDay(d)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${day === d ? "bg-[#C8F31D] text-black" : "border border-[#2c352e] text-white/60"}`}>{d}</button>
        ))}
      </div>
      <div className="grid gap-3 md:hidden">
        {timetable[day].map((c) => (
          <div key={c.name + c.time} className="rounded-2xl border border-[#252C27] bg-[#111612] p-5">
            <p className="text-xs font-bold text-[#C8F31D]">{c.time}</p>
            <h4 className="mt-1 font-extrabold">{c.name}</h4>
            <p className="text-[13px] text-white/50">Coach {c.coach}</p>
          </div>
        ))}
      </div>
      <div className="hidden gap-3 md:grid md:grid-cols-6">
        {days.map((d) => (
          <div key={d} className="rounded-2xl border border-[#252C27] bg-[#111612] p-4">
            <p className="mb-3 text-xs font-black tracking-widest text-[#C8F31D]">{d}</p>
            <div className="space-y-2.5">
              {timetable[d].map((c) => (
                <div key={c.name + c.time} className="rounded-xl bg-[#182019] p-3"><p className="text-[11px] font-bold text-white/50">{c.time}</p><p className="text-[13px] font-bold leading-tight">{c.name}</p><p className="text-[11px] text-white/45">{c.coach}</p></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  const words = ["STRENGTH", "DISCIPLINE", "ENERGY", "COMMUNITY", "RESULTS"];
  return (
    <div className="overflow-hidden border-y border-[#1a201b] bg-[#C8F31D] py-3.5" aria-hidden>
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-black tracking-[0.2em] text-black">{w} <span>✦</span></span>
        ))}
      </div>
    </div>
  );
}
