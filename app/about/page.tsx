import { Navbar, Footer } from "@/components/layout";
import { Reveal, SectionHead, Counter } from "@/components/ui";
import { IMG } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <img src={IMG.gymFloor} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B09]/60 to-[#080B09]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 md:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">ABOUT FORGE</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] md:text-6xl">MORE THAN A GYM.<br />IT'S YOUR NEXT LEVEL.</h1>
            <p className="mt-4 max-w-xl text-[#A9B0AA]">Founded in 2016 in Dhaka, Forge was built on a simple belief: ordinary people achieve extraordinary things with the right coaching, environment and data.</p>
          </Reveal>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[["5", "K+", "Members"], ["25", "+", "Coaches"], ["40", "+", "Weekly classes"]].map(([v, s, l]) => (
              <div key={l}><p className="text-3xl font-black text-[#C8F31D] md:text-4xl"><Counter to={parseInt(v)} suffix={s} /></p><p className="text-xs text-white/55">{l}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal><img src={IMG.community} alt="Forge community" className="h-full min-h-[320px] w-full rounded-3xl object-cover" /></Reveal>
          <div>
            <SectionHead eyebrow="OUR STORY" title="BUILT BY LIFTERS, FOR EVERYONE" desc="We started with 800 sqft and two barbells. Today Forge spans 12,000 sqft across strength, cardio, boxing, mobility and recovery zones — but the mission never changed." />
            <div className="space-y-4">
              {[["2016", "Two friends open a garage gym in Dhanmondi."], ["2019", "Move to Gulshan. Launch personal training & nutrition."], ["2023", "5,000th member. Launch Forge app with progress tracking."], ["2026", "Dhaka's highest-rated strength club — 4.9★ across 2,300 reviews."]].map(([y, t]) => (
                <Reveal key={y}>
                  <div className="flex gap-4 rounded-2xl border border-[#252C27] bg-[#111612] p-5">
                    <span className="text-lg font-black text-[#C8F31D]">{y}</span>
                    <p className="text-sm text-white/75">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal><Link href="/trial" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8F31D] px-7 py-3.5 text-sm font-bold text-black">Train With Us <ArrowRight size={16} /></Link></Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
