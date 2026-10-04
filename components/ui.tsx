"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("visible");
            io.disconnect();
          }
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- Buttons ---------- */
export function LimeButton({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#C8F31D] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#d8ff3d] hover:shadow-[0_0_32px_rgba(200,243,29,0.35)] active:scale-[0.98]",
    className
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function GhostButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#2c352e] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#C8F31D] hover:text-[#C8F31D]",
    className
  );
  return <Link href={href ?? "#"} className={cls}>{children}</Link>;
}

/* ---------- Section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-10 max-w-2xl md:mb-14", align === "center" && "mx-auto text-center")}>
      <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-[1.05] md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-[15px] leading-relaxed text-[#A9B0AA]">{desc}</p>}
    </Reveal>
  );
}

/* ---------- Badge / status ---------- */
export function StatusBadge({ state }: { state: string }) {
  const map: Record<string, string> = {
    Available: "bg-[#C8F31D]/15 text-[#C8F31D] border-[#C8F31D]/30",
    "Almost Full": "bg-amber-400/10 text-amber-300 border-amber-400/30",
    Full: "bg-[#FF5C5C]/10 text-[#FF5C5C] border-[#FF5C5C]/30",
    Booked: "bg-[#56D364]/10 text-[#56D364] border-[#56D364]/30",
    Active: "bg-[#56D364]/10 text-[#56D364] border-[#56D364]/30",
    Scheduled: "bg-sky-400/10 text-sky-300 border-sky-400/30",
    Pending: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    Completed: "bg-white/5 text-white/60 border-white/15",
    Cancelled: "bg-[#FF5C5C]/10 text-[#FF5C5C] border-[#FF5C5C]/30",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold", map[state] ?? "bg-white/5 text-white/70 border-white/15")}>
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {state}
    </span>
  );
}

/* ---------- Counter ---------- */
export function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ---------- Progress bar ---------- */
export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { setW(value); io.disconnect(); }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className={cn("h-2 overflow-hidden rounded-full bg-white/8", className)} style={{ background: "#1e251f" }}>
      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${w}%`, background: "#C8F31D" }} />
    </div>
  );
}

/* ---------- Empty / Error / Skeleton ---------- */
export function EmptyState({ title, desc, action }: { title: string; desc: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#2c352e] bg-[#111612] px-6 py-14 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#182019] text-[#C8F31D]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></svg>
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-[#A9B0AA]">{desc}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-xl bg-[#1c231d]", className)} />;
}

/* ---------- Field ---------- */
export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-white/70">{label}</span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full rounded-xl border border-[#252C27] bg-[#0d110e] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#C8F31D]";

/* ---------- Modal ---------- */
export function Modal({ open, onClose, children, title }: { open: boolean; onClose: () => void; children: React.ReactNode; title: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-t-3xl border border-[#252C27] bg-[#111612] p-6 sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-extrabold">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-full border border-[#2c352e] p-2 text-white/60 hover:text-white">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- Stars ---------- */
export function Stars({ value = 5 }: { value?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-[#C8F31D]" aria-label={`${value} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.round(value) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </span>
  );
}
