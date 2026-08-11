import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import SpeedSection from "@/components/SpeedSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <ProcessSection />
      <SpeedSection />
      <CTASection />
    </main>
  );
}