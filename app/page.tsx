import { Navbar, Footer } from "@/components/layout";
import {
  Hero, Marquee, QuickActions, Goals, Programs, WhyUs, Journey,
  TrainersHome, Transformations, ProgressPreview, NutritionHome,
  ScheduleHome, MembershipHome, TrialSection, GalleryHome,
  CommunityChallenges, Testimonials, LocationFinal,
} from "@/components/home";

export default function Home() {
  return (
    <main className="bg-[#080B09] text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <div className="pt-8"><QuickActions /></div>
      <Goals />
      <Programs />
      <WhyUs />
      <Journey />
      <TrainersHome />
      <Transformations />
      <ProgressPreview />
      <NutritionHome />
      <ScheduleHome />
      <MembershipHome />
      <TrialSection />
      <GalleryHome />
      <CommunityChallenges />
      <Testimonials />
      <LocationFinal />
      <Footer />
    </main>
  );
}
