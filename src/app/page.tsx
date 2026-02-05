import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DecisionSection from "@/components/sections/DecisionSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import OrientationSection from "@/components/sections/OrientationSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PeopleRegionSection from "@/components/sections/PeopleRegionSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero – Haltung & Einordnung */}
        <HeroSection />

        {/* 2. Entscheidungssituation Schlaf */}
        <DecisionSection />

        {/* 3. Beratung auf Augenhöhe – Gefühl & Körperstatik */}
        <ConsultationSection />

        {/* 4. Lösungsräume (ohne Shop-Logik) */}
        <SolutionsSection />

        {/* 5. Orientierung – Micro-Commitment */}
        <OrientationSection />

        {/* 6. Besondere Services (mit Videos) */}
        <ServicesSection />

        {/* 6. Menschen & Region */}
        <PeopleRegionSection />

        {/* 7. Abschluss – Nächster Schritt */}
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
