import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import ReviewsSection from "@/components/ReviewsSection";
import CostCalculator from "@/components/CostCalculator";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import TrustStrip from "@/components/TrustStrip";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      {/* Instant Trust Strip - Above the fold */}
      <TrustStrip />

      <ServicesGrid />

      <StatsSection />

      <HowItWorks />

      <CostCalculator />

      <ReviewsSection />

      <Portfolio />

      <ServiceArea />

      <FinalCTA />

    </main>
  );
}
