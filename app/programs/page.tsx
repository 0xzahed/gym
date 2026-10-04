import { Navbar, Footer } from "@/components/layout";
import { Reveal, SectionHead, LimeButton } from "@/components/ui";
import { programs, IMG } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <img src={IMG.strength} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B09]/60 to-[#080B09]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 md:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">PROGRAMS</p>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.02] md:text-6xl">TRAINING THAT FITS YOUR GOAL</h1>
            <p className="mt-4 max-w-xl text-[#A9B0AA]">Six signature tracks. Every plan includes assessment, coaching and progress reviews.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 60}>
              <article className="group grid overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612] sm:grid-cols-2">
                <div className="relative h-56 overflow-hidden sm:h-full sm:min-h-[260px]">
                  <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-black">{p.name.toUpperCase()}</h2>
                  <p className="mt-2 text-sm text-[#A9B0AA]">{p.desc} Small-group coaching, capped at 12 members per session.</p>
                  <div className="mt-4 flex gap-2 text-xs font-semibold text-white/60">
                    <span className="rounded-full bg-[#182019] px-3 py-1.5">{p.level}</span>
                    <span className="rounded-full bg-[#182019] px-3 py-1.5">{p.duration}</span>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-[13px] text-white/65">
                    <li>✓ Movement assessment included</li>
                    <li>✓ Nutrition starter guide</li>
                    <li>✓ Monthly progress review</li>
                  </ul>
                  <Link href="/trial" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#C8F31D]">Try this program free <ArrowRight size={15} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-3xl border border-[#C8F31D]/30 bg-[#10150f] p-8 text-center md:p-12">
          <h2 className="text-2xl font-black md:text-4xl">NOT SURE WHERE TO START?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#A9B0AA]">Book a free assessment. We'll test movement, discuss goals and recommend your track.</p>
          <div className="mt-6"><LimeButton href="/trial">Book Free Assessment</LimeButton></div>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
