import { Navbar, Footer } from "@/components/layout";
import { Reveal } from "@/components/ui";
import { trainers } from "@/lib/data";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrainersPage() {
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">COACHES</p>
          <h1 className="text-4xl font-black md:text-6xl">MEET YOUR COACHES</h1>
          <p className="mt-4 max-w-xl text-[#A9B0AA]">Certified, experienced and obsessed with form. Tap any coach to see availability and book.</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 4) * 60}>
              <Link href={`/trainers/${t.slug}`} className="group block overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612] transition hover:border-[#C8F31D]/50">
                <div className="relative h-80 overflow-hidden">
                  <img src={t.img} alt={t.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-lg font-black">{t.name}</h2>
                    <p className="text-[13px] text-[#C8F31D]">{t.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-white/55">{t.exp}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {t.specs.map((s) => <span key={s} className="rounded-full bg-[#182019] px-2.5 py-1 text-[11px] font-semibold text-white/70">{s}</span>)}
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-sm font-bold"><Star size={14} className="fill-[#C8F31D] text-[#C8F31D]" /> {t.rating} <span className="font-normal text-white/40">({t.reviews} reviews)</span></p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold group-hover:text-[#C8F31D]">View Profile <ArrowRight size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
