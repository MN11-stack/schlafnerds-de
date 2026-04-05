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

function ChronotypSection() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="accent-text mb-4 text-lg">Schlaftyp-Test</p>
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Welcher Chronotyp bist du –<br />
          Lerche oder Eule?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-tagline">
          Chronobiologische Forschung zeigt: Knapp 41 % aller Menschen sind
          Spättypen, nur rund 30 % Frühtypen – die meisten kennen ihren Typ
          nicht. Wer weiß, wie seine innere Uhr tickt, kann seine
          Schlafumgebung gezielt darauf abstimmen.
        </p>
        <a
          href="/chronotypen-test"
          className="btn-primary mt-10 inline-block"
        >
          Jetzt Chronotyp testen – kostenlos
        </a>
      </div>
    </section>
  );
}

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

        {/* 6. Chronotyp-Teaser */}
        <ChronotypSection />

        {/* 7. Besondere Services (mit Videos) */}
        <ServicesSection />

        {/* 8. Menschen & Region */}
        <PeopleRegionSection />

        {/* 9. Abschluss – Nächster Schritt */}
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
