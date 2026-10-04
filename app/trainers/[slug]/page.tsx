import { Navbar, Footer } from "@/components/layout";
import { Reveal, StatusBadge, Stars, LimeButton } from "@/components/ui";
import { trainers } from "@/lib/data";
import { BadgeCheck, CalendarCheck, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return trainers.map((t) => ({ slug: t.slug }));
}

export default async function TrainerDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = trainers.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
        <Link href="/trainers" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[#C8F31D]"><ArrowLeft size={15} /> All coaches</Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[#252C27] bg-[#111612]">
              <img src={t.img} alt={t.name} className="h-[420px] w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <Stars value={t.rating} />
                  <span className="text-sm font-bold">{t.rating} <span className="font-normal text-white/40">({t.reviews})</span></span>
                </div>
                <LimeButton href="/trial" className="mt-5 w-full">Book Personal Training</LimeButton>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.22em] text-[#C8F31D]">{t.role.toUpperCase()}</p>
              <h1 className="mt-2 text-4xl font-black md:text-5xl">{t.name}</h1>
              <p className="mt-2 text-sm font-semibold text-white/55">{t.exp}</p>
              <div className="mt-4 flex flex-wrap gap-2">{t.specs.map((s) => <span key={s} className="rounded-full bg-[#182019] px-3.5 py-1.5 text-xs font-bold text-[#C8F31D]">{s}</span>)}</div>
              <p className="mt-6 max-w-2xl leading-relaxed text-[#A9B0AA]">{t.bio}</p>
              <blockquote className="mt-5 rounded-2xl border-l-4 border-[#C8F31D] bg-[#111612] p-5 text-[15px] italic text-white/80">"{t.philosophy}"</blockquote>
            </Reveal>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                  <h3 className="flex items-center gap-2 font-extrabold"><BadgeCheck size={18} className="text-[#C8F31D]" /> Certifications</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">{t.certs.map((c) => <li key={c}>• {c}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                  <h3 className="flex items-center gap-2 font-extrabold"><CalendarCheck size={18} className="text-[#C8F31D]" /> Available Slots</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{t.slots.map((s) => <span key={s} className="rounded-full bg-[#182019] px-3 py-1.5 text-xs font-semibold">{s}</span>)}</div>
                  <h4 className="mt-4 text-sm font-bold text-white/60">Classes</h4>
                  <div className="mt-2 space-y-1.5">{t.classes.map((c) => <p key={c} className="text-sm text-white/70">• {c}</p>)}</div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="mt-4 rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                <h3 className="flex items-center gap-2 font-extrabold"><Star size={17} className="fill-[#C8F31D] text-[#C8F31D]" /> Recent reviews</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {[["Tanvir A.", "Alex fixed my squat in 3 sessions. Best coach I've worked with."], ["Nusrat J.", "Pushes you hard but always keeps form first. Highly recommended."]].map(([n, txt]) => (
                    <div key={n} className="rounded-xl bg-[#182019] p-4"><Stars value={5} /><p className="mt-2 text-sm text-white/75">"{txt}"</p><p className="mt-2 text-xs font-bold text-white/50">{n}</p></div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
