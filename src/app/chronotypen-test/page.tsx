import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/sections/FaqSection";
import InlineCTA from "@/components/InlineCTA";
import StickyCTA from "@/components/StickyCTA";
import ChronotypenTest from "./ChronotypenTest";

export const metadata: Metadata = {
  title: "Bin ich Eule oder Lerche? Schlaftyp-Test in 5 Fragen",
  description:
    "Eule, Lerche oder Neutraltyp? 5-Fragen-Test (MEQ) mit persönlicher Auswertung – erfahre, wie deine innere Uhr tickt und wie deine Schlafumgebung dazu passt.",
  openGraph: {
    title: "Bin ich Eule oder Lerche? Schlaftyp-Test in 5 Fragen",
    description:
      "5 Fragen, dein Schlaftyp – mit persönlicher Auswertung und Tipps für deine Schlafumgebung.",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/chronotypen-test",
  },
};

const quizSchema = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  "@id": "https://www.schlafnerds.de/chronotypen-test#quiz",
  name: "Bin ich Eule oder Lerche? Schlaftyp-Test in 5 Fragen",
  description:
    "5-Fragen-Test (MEQ-basiert): Bist du ein Morgentyp (Lerche), Abendtyp (Eule) oder Neutraltyp?",
  url: "https://www.schlafnerds.de/chronotypen-test",
  educationalLevel: "beginner",
  provider: {
    "@id": "https://www.schlafnerds.de/#localbusiness",
  },
};

const chronotypFaqs = [
  {
    question: "Was ist ein Chronotyp?",
    answer:
      "Der Chronotyp beschreibt deine individuelle tageszeitliche Orientierung – wann deine innere Uhr dich wach und leistungsfähig macht, und wann sie dir signalisiert, schlafen zu gehen. Er ist genetisch angelegt: Rund 350 Gene bestimmen, ob du eher Früh- oder Spättyp bist. Der Chronotyp bleibt grundsätzlich dein Leben lang konstant, verändert sich aber leicht mit dem Alter.",
  },
  {
    question: "Kann sich der Chronotyp im Laufe des Lebens verändern?",
    answer:
      "Ja, in bestimmten Lebensphasen. In der Pubertät verschiebt sich der Chronotyp bei den meisten Menschen deutlich in Richtung Spättyp – Jugendliche werden abends later müde und brauchen morgens länger. Dieser Effekt ist bei Jungen stärker ausgeprägt als bei Mädchen. Ab etwa dem 20. Lebensjahr pendelt sich der Chronotyp allmählich wieder ein, bis er sich rund um das 55. Lebensjahr stabilisiert.",
  },
  {
    question: "Was ist sozialer Jetlag?",
    answer:
      "Sozialer Jetlag entsteht, wenn der eigene Chronotyp nicht mit den gesellschaftlichen Anforderungen übereinstimmt – wenn du also früher aufstehen musst, als deine innere Uhr es vorsieht. Das führt zu einem chronischen Schlafdefizit, das sich nicht einfach am Wochenende kompensieren lässt. Besonders Spättypen sind davon betroffen. Die Schlafmedizin sieht sozialen Jetlag als Risikofaktor für Herz-Kreislauf-Erkrankungen, Stoffwechselstörungen und Konzentrationsprobleme.",
  },
  {
    question: "Was kann ich als Eule tun, wenn ich früh aufstehen muss?",
    answer:
      "Der Chronotyp lässt sich nicht einfach umprogrammieren – aber du kannst die Rahmenbedingungen optimieren. Morgens hilft helles, kaltweißes Licht, um schneller wach zu werden. Abends solltest du blaues Bildschirmlicht möglichst früh reduzieren, da es die Melatoninausschüttung hemmt. Ein gleichmäßiger Schlaf-Wach-Rhythmus auch am Wochenende verringert den sozialen Jetlag spürbar. Und: Eine gut abgestimmte Schlafumgebung – Temperatur, Verdunkelung, Matratze – gibt dir den bestmöglichen Schlaf in der Zeit, die dir bleibt.",
  },
];

function ChronotypenErklaerung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-center text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was dein Chronotyp für deinen Schlaf bedeutet.
        </h2>
        <p className="mt-6 text-center text-lg leading-relaxed text-tagline">
          Wer seinen Chronotyp kennt, kann seine Schlafumgebung gezielt
          darauf abstimmen – Matratze, Kissen, Verdunkelung, Temperatur.
          Genau das machen wir in der persönlichen Beratung bei Schlafnerds.
        </p>

        <div className="mt-14 space-y-8">
          {/* Lerche */}
          <div className="rounded-2xl bg-white p-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🐦</span>
              <h3 className="font-heading text-2xl font-normal">
                Morgentyp (Lerche)
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-tagline">
              Die Schlafmedizin weiß, dass Lerchen ihren Leistungshöhepunkt
              bereits am frühen Morgen erreichen – bei Hirnleistungen rund um
              8 Uhr, bei körperlichen Aktivitäten um 14 Uhr. Ihre
              Lichtrezeptoren in der Netzhaut reagieren besonders empfindlich
              auf Morgenlicht, was sie rasch wach werden lässt. Das bedeutet
              aber auch: Schon wenig Licht im Schlafzimmer kann den Schlaf früh
              beenden.
            </p>
            <p className="mt-4 leading-relaxed text-tagline">
              Für Lerchen ist eine gut verdunkelte Schlafumgebung besonders
              wichtig – kombiniert mit einer Matratze, die den erholsamen
              Schlaf in den frühen Morgenstunden nicht unterbricht.
            </p>
            <div className="mt-6">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schlafumgebung optimieren
              </a>
            </div>
          </div>

          {/* Eule */}
          <div className="rounded-2xl bg-white p-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🦉</span>
              <h3 className="font-heading text-2xl font-normal">
                Abendtyp (Eule)
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-tagline">
              Knapp 41 % aller Menschen sind Spättypen – damit die größte
              Gruppe. Eulen erreichen ihr Leistungshoch erst abends gegen 20
              Uhr. Das Problem: Die meisten Arbeits- und Schulzeiten sind auf
              Frühtypen ausgelegt. Wer als Spättyp dauerhaft früh aufstehen
              muss, akkumuliert ein chronisches Schlafdefizit, das die
              Schlafmedizin als sozialen Jetlag bezeichnet.
            </p>
            <p className="mt-4 leading-relaxed text-tagline">
              Eulen profitieren besonders von einer konsequenten
              Schlafumgebung: kühle Raumtemperatur (ca. 18 °C), vollständige
              Verdunkelung und eine atmungsaktive Matratze, die den Schlaf auch
              in den wenigen verfügbaren Stunden so erholsam wie möglich macht.
            </p>
            <div className="mt-6">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schlafumgebung optimieren
              </a>
            </div>
          </div>

          {/* Neutraltyp */}
          <div className="rounded-2xl bg-white p-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              <h3 className="font-heading text-2xl font-normal">
                Neutraltyp
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-tagline">
              Rund 30 % der Menschen sind Neutraltypen. Bei freier Zeiteinteilung
              schlafen sie zwischen 23 und 24 Uhr ein und wachen zwischen 7 und
              8 Uhr auf – mit der Schlafmitte zwischen 3 und 4 Uhr morgens.
              Neutraltypen sind flexibler als Lerchen und Eulen, kommen aber
              trotzdem in ein chronisches Schlafdefizit, wenn Alltagsanforderungen
              dauerhaft gegen ihren Rhythmus laufen.
            </p>
            <p className="mt-4 leading-relaxed text-tagline">
              Für Neutraltypen ist ein regelmäßiger Schlaf-Wach-Rhythmus der
              wichtigste Faktor – und eine Schlafunterlage, die das Einschlafen
              unterstützt statt erschwert.
            </p>
            <div className="mt-6">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schlafumgebung optimieren
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center leading-relaxed text-tagline/80">
          Egal welcher Typ du bist: Die Basis ist immer dieselbe.{" "}
          <a
            href="/blog/schlafhygiene"
            className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
          >
            10 Schlafhygiene-Regeln, die wirklich helfen
          </a>{" "}
          – kompakt erklärt.
        </p>
      </div>
    </section>
  );
}

export default function ChronotypenTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <Header />
      <main className="bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlaftyp-Test</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Eule oder Lerche?<br />
            Der Chronotyp-Test.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            Unser innerer Rhythmus bestimmt, wann wir am besten schlafen, wann
            wir leistungsfähig sind und wann wir zur Ruhe kommen. Rund 350 Gene
            legen fest, ob wir Frühtyp, Spättyp oder Neutraltyp sind – die
            meisten Menschen kennen ihren Typ nicht.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-tagline/80">
            Mit diesem kurzen Test (5 Fragen) findest du heraus, welcher
            Chronotyp du bist – und was das für deine Schlafumgebung bedeutet.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/blog/chronotypen.png"
              alt="Sonnenaufgang und Abenddämmerung – Lerche oder Eule"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <ChronotypenTest />
        </div>

        <ChronotypenErklaerung />

        <InlineCTA
          headline="Bring deinen Chronotyp in deine Schlafumgebung."
          subline="Im persönlichen Termin zeigen wir dir, welche Matratze, welches Kissen und welche Lichtumgebung zu deinem Typ passen – mit Probeliegen vor Ort."
        />

        <FaqSection faqs={chronotypFaqs} />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
