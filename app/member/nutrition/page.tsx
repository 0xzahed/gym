import { ProgressBar } from "@/components/ui";
import { Droplets } from "lucide-react";

const meals = [
  ["Breakfast", "Protein Oats", "520 kcal · 38g protein"],
  ["Lunch", "Chicken + Rice + Vegetables", "720 kcal · 52g protein"],
  ["Snack", "Greek Yogurt + Banana", "280 kcal · 22g protein"],
  ["Dinner", "Fish + Salad + Lentils", "640 kcal · 48g protein"],
];

export default function NutritionPage() {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">FUEL</p>
      <h1 className="mt-1 text-2xl font-black md:text-3xl">MY NUTRITION</h1>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <p className="text-xs font-bold tracking-[0.2em] text-[#C8F31D]">DAILY TARGET</p>
          <div className="mt-4 space-y-4">
            {[["Calories", "2,160 / 2,400 kcal", 90], ["Protein", "148 / 160 g", 92], ["Carbs", "210 / 250 g", 84], ["Fat", "58 / 70 g", 70]].map(([l, v, p]) => (
              <div key={l as string}><div className="mb-1.5 flex justify-between text-sm"><span className="text-white/60">{l}</span><b>{v}</b></div><ProgressBar value={p as number} /></div>
            ))}
            <div className="flex items-center justify-between rounded-xl bg-[#182019] p-4 text-sm"><span className="flex items-center gap-2 text-white/70"><Droplets size={15} className="text-sky-300" /> Water — 2.4 / 3.2 L</span><b>75%</b></div>
          </div>
        </div>
        <div className="rounded-2xl border border-[#252C27] bg-[#111612] p-6">
          <div className="flex items-center justify-between"><h2 className="font-extrabold">Today's Meals</h2><span className="text-xs font-bold text-[#56D364]">2,160 kcal logged</span></div>
          <div className="mt-4 space-y-2.5">
            {meals.map(([t, n, m]) => (
              <div key={t} className="flex items-center justify-between rounded-xl bg-[#182019] px-4 py-3.5">
                <span><span className="block text-xs font-bold text-white/45">{t.toUpperCase()}</span><span className="block text-sm font-bold">{n}</span></span>
                <span className="text-xs text-white/55">{m}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-full border border-[#2c352e] py-3 text-sm font-bold hover:border-[#C8F31D] hover:text-[#C8F31D]">+ Log meal</button>
        </div>
      </div>
    </div>
  );
}
