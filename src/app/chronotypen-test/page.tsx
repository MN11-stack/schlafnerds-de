import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChronotypenTest from "./ChronotypenTest";

export const metadata: Metadata = {
  title: "Chronotypen-Test: Bist du Lerche oder Eule? | Schlafnerds",
  description:
    "Finde in 5 Fragen heraus, ob du ein Morgentyp (Lerche), Abendtyp (Eule) oder Neutraltyp bist. Kostenloser Chronotyp-Test mit persönlicher Auswertung und Schlaftipps.",
  openGraph: {
    title: "Chronotypen-Test: Bist du Lerche oder Eule? | Schlafnerds",
    description:
      "5 Fragen, dein Schlaftyp. Finde heraus, ob du Lerche, Eule oder Neutraltyp bist – mit Tipps für besseren Schlaf.",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/chronotypen-test",
  },
};

export default function ChronotypenTestPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlaftyp-Test</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Welcher Chronotyp bist du –<br />
            Lerche oder Eule?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            Unser innerer Rhythmus bestimmt, wann wir am besten schlafen, wann
            wir leistungsfähig sind und wann wir zur Ruhe kommen. Mit diesem
            kurzen Test (5 Fragen) findest du heraus, ob du eher ein Morgentyp
            (Lerche), ein Abendtyp (Eule) oder ein Neutraltyp bist.
          </p>

          <ChronotypenTest />
        </div>
      </main>
      <Footer />
    </>
  );
}
