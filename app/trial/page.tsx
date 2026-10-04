import { Navbar, Footer } from "@/components/layout";
import { Reveal } from "@/components/ui";
import { TrialForm } from "@/components/home";
import { IMG } from "@/lib/data";

export default function TrialPage() {
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="relative overflow-hidden pb-24 pt-32 md:pt-40">
        <img src={IMG.cta} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B09]/70 to-[#080B09]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">FREE TRIAL</p>
            <h1 className="text-4xl font-black leading-[1.02] md:text-6xl">TRY YOUR FIRST SESSION FREE</h1>
            <p className="mt-4 text-[#A9B0AA]">45 minutes with a certified coach, body-composition scan and a starter plan. No card, no pressure.</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {["Full gym access for the day", "1 coached session", "Movement + composition assessment"].map((t) => (
                <li key={t} className="flex items-center gap-2.5"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8F31D] text-xs font-black text-black">✓</span>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}><TrialForm /></Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
