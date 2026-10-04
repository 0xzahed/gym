"use client";
import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Reveal, Field, inputCls } from "@/components/ui";
import { MapPin, Phone, Mail, Check } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#C8F31D]">CONTACT</p>
          <h1 className="text-4xl font-black md:text-6xl">FIND YOUR GYM</h1>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                <h2 className="flex items-center gap-2 font-extrabold"><MapPin size={18} className="text-[#C8F31D]" /> Address</h2>
                <p className="mt-2 text-sm text-white/70">House 12, Road 5, Gulshan Avenue,<br />Dhaka 1212, Bangladesh</p>
                <a href="#" className="mt-3 inline-block text-sm font-bold text-[#C8F31D]">Get Directions →</a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                  <h2 className="flex items-center gap-2 font-extrabold"><Phone size={17} className="text-[#C8F31D]" /> Phone</h2>
                  <p className="mt-2 text-sm text-white/70">+880 1700 000 000</p>
                </div>
                <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                  <h2 className="flex items-center gap-2 font-extrabold"><Mail size={17} className="text-[#C8F31D]" /> Email</h2>
                  <p className="mt-2 text-sm text-white/70">hello@forgegym.fit</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
                <h2 className="font-extrabold">Opening Hours</h2>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-xl bg-[#182019] p-4"><p className="font-bold">Mon – Fri</p><p className="text-white/60">6:00 AM – 11:00 PM</p></div>
                  <div className="rounded-xl bg-[#182019] p-4"><p className="font-bold">Sat – Sun</p><p className="text-white/60">7:00 AM – 10:00 PM</p></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-3xl border border-[#C8F31D]/40 bg-[#10150f] p-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8F31D] text-black"><Check size={26} strokeWidth={3} /></span>
                <h2 className="mt-4 text-xl font-black">Message received!</h2>
                <p className="mt-1 text-sm text-white/60">We reply within one working day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 rounded-3xl border border-[#252C27] bg-[#111612] p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name"><input required placeholder="Your name" className={inputCls} /></Field>
                  <Field label="Phone"><input required placeholder="+880 ..." className={inputCls} /></Field>
                </div>
                <Field label="Email"><input type="email" required placeholder="you@email.com" className={inputCls} /></Field>
                <Field label="Message"><textarea required rows={5} placeholder="How can we help?" className={inputCls} /></Field>
                <button className="rounded-full bg-[#C8F31D] py-4 text-sm font-black text-black hover:bg-[#d8ff3d]">Send Message</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
