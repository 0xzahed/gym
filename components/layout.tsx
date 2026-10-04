"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dumbbell, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/trainers", label: "Trainers" },
  { href: "/classes", label: "Classes" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-300",
          scrolled
            ? "border-b border-[#1d231e] bg-[#080B09]/90 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Forge home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black">
              <Dumbbell size={20} strokeWidth={2.5} />
            </span>
            <span className="text-lg font-black tracking-tight">
              FORGE<span className="text-[#C8F31D]">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition hover:text-white",
                  path === l.href ? "text-[#C8F31D]" : "text-white/65"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/auth/login" className="text-sm font-semibold text-white/70 hover:text-white">
              Log in
            </Link>
            <Link
              href="/trial"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8F31D] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d8ff3d]"
            >
              Book Free Trial <ArrowRight size={16} />
            </Link>
          </div>

          <button
            className="rounded-xl border border-white/15 p-2.5 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[85] flex flex-col bg-[#080B09] transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black">
              <Dumbbell size={20} strokeWidth={2.5} />
            </span>
            <span className="text-lg font-black">FORGE<span className="text-[#C8F31D]">.</span></span>
          </span>
          <button className="rounded-xl border border-white/15 p-2.5" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className={cn("flex flex-col gap-1 px-5 pt-4 transition-all duration-300", open ? "translate-y-0" : "-translate-y-3")} aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-4 text-2xl font-extrabold transition",
                path === l.href ? "bg-[#C8F31D]/10 text-[#C8F31D]" : "text-white hover:bg-white/5"
              )}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3 p-5">
          <Link
            href="/trial"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#C8F31D] py-4 font-bold text-black"
          >
            Book Free Trial <ArrowRight size={18} />
          </Link>
          <Link
            href="/auth/login"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-full border border-white/15 py-4 font-semibold"
          >
            Member Login
          </Link>
        </div>
      </div>
    </>
  );
}

import { Globe, AtSign, Play, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1a201b] bg-[#0a0d0b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8F31D] text-black">
              <Dumbbell size={20} strokeWidth={2.5} />
            </span>
            <span className="text-lg font-black">FORGE<span className="text-[#C8F31D]">.</span></span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#A9B0AA]">
            A premium strength & conditioning club. Expert coaching, modern equipment and technology that keeps you progressing.
          </p>
          <div className="mt-5 flex gap-2.5">
            {[Globe, AtSign, Play].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="rounded-full border border-[#252C27] p-2.5 text-white/60 transition hover:border-[#C8F31D] hover:text-[#C8F31D]">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-white/50">QUICK LINKS</h4>
          <ul className="space-y-2.5 text-sm">
            {[["/", "Home"], ["/programs", "Programs"], ["/trainers", "Trainers"], ["/classes", "Classes"], ["/membership", "Membership"], ["/about", "About"], ["/contact", "Contact"]].map(([h, l]) => (
              <li key={l}><Link href={h} className="text-white/65 transition hover:text-[#C8F31D]">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-white/50">PROGRAMS</h4>
          <ul className="space-y-2.5 text-sm">
            {["Strength", "Muscle Building", "Fat Loss", "HIIT", "Personal Training"].map((p) => (
              <li key={p}><Link href="/programs" className="text-white/65 transition hover:text-[#C8F31D]">{p}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-white/50">CONTACT</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0 text-[#C8F31D]" /> House 12, Road 5, Gulshan, Dhaka 1212</li>
            <li className="flex gap-2.5"><Phone size={16} className="mt-0.5 shrink-0 text-[#C8F31D]" /> +880 1700 000 000</li>
            <li className="flex gap-2.5"><Mail size={16} className="mt-0.5 shrink-0 text-[#C8F31D]" /> hello@forgegym.fit</li>
          </ul>
          <p className="mt-4 rounded-xl border border-[#252C27] bg-[#111612] p-3 text-xs leading-relaxed text-[#A9B0AA]">
            Mon–Fri 6AM–11PM<br />Sat–Sun 7AM–10PM
          </p>
        </div>
      </div>
      <div className="border-t border-[#1a201b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/40 sm:flex-row md:px-8">
          <p>© 2026 Forge Fitness Club. All rights reserved.</p>
          <p>Strength · Discipline · Energy</p>
        </div>
      </div>
    </footer>
  );
}
