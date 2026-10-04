import { Navbar, Footer } from "@/components/layout";
import { Reveal, SectionHead } from "@/components/ui";
import { plans } from "@/lib/data";
import { Check } from "lucide-react";
import Link from "next/link";

const compareRows: [string, string[]][] = [
  ["Gym floor access", ["✓", "✓", "✓"]],
  ["Group classes", ["1 / week", "Unlimited", "Unlimited"]],
  ["Workout plan", ["—", "✓", "✓"]],
  ["Progress tracking", ["Basic", "✓", "✓ + monthly review"]],
  ["Personal training", ["—", "—", "4× / month"]],
  ["Nutrition plan", ["—", "Starter guide", "Fully custom"]],
  ["Priority booking", ["—", "—", "✓"]],
  ["Recovery zone", ["—", "—", "✓"]],
];

export default function MembershipPage() {
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 md:px-8 md:pt-40">
        <SectionHead eyebrow="MEMBERSHIP" title={<>SIMPLE, HONEST<br />PRICING</>} desc="No joining fee. Pause anytime. All prices in BDT, VAT included." align="center" />
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div className={`relative flex h-full flex-col rounded-3xl border p-7 md:p-8 ${p.popular ? "border-[#C8F31D] bg-[#10150f]" : "border-[#252C27] bg-[#111612]"}`}>
                {p.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#C8F31D] px-4 py-1.5 text-[11px] font-black text-black">MOST POPULAR</span>}
                <h2 className="text-sm font-bold tracking-[0.18em] text-white/60">{p.name.toUpperCase()}</h2>
                <p className="mt-3"><span className="text-4xl font-black md:text-5xl">{p.price}</span><span className="text-sm text-white/50">{p.per}</span></p>
                <p className="mt-2 text-sm text-[#A9B0AA]">{p.desc}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => <li key={f} className="flex items-start gap-2.5 text-sm"><Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-[#C8F31D]" />{f}</li>)}
                </ul>
                <Link href="/trial" className={`mt-7 rounded-full py-3.5 text-center text-sm font-bold transition ${p.popular ? "bg-[#C8F31D] text-black hover:bg-[#d8ff3d]" : "border border-[#2c352e] hover:border-[#C8F31D] hover:text-[#C8F31D]"}`}>{p.cta}</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <Reveal><h2 className="mb-5 text-center text-xl font-black">COMPARE PLANS</h2></Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-[#252C27]">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-[#111612] text-left">
                  <th className="p-4 font-semibold text-white/50">Feature</th>
                  {plans.map((p) => <th key={p.name} className="p-4 text-center font-extrabold">{p.name}{p.popular && <span className="ml-2 rounded-full bg-[#C8F31D] px-2 py-0.5 text-[10px] text-black">POPULAR</span>}</th>)}
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([f, vals]) => (
                  <tr key={f} className="border-t border-[#1d231e]">
                    <td className="p-4 text-white/70">{f}</td>
                    {vals.map((v, i) => <td key={i} className={`p-4 text-center font-semibold ${v === "✓" ? "text-[#C8F31D]" : v === "—" ? "text-white/25" : "text-white/80"}`}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="mt-6 text-center text-sm text-white/50">Pay with bKash, Nagad, card, bank transfer or cash. <Link href="/trial" className="font-bold text-[#C8F31D]">Try free first →</Link></p>
      </section>
      <Footer />
    </main>
  );
}
