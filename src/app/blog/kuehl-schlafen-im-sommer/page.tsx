import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";
import StickyCTA from "@/components/StickyCTA";
import FaqSection from "@/components/sections/FaqSection";
import { calendlyUrl } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Kühl schlafen im Sommer: Kissen, Decke & Laken | Schlafnerds",
  description:
    "Warum Sommerhitze den Schlaf raubt und welche drei Bausteine wirklich helfen – kühlendes Kissen, leichte Sommerdecke und kühlendes Spannbettlaken. Von den Schlafnerds aus Bocholt.",
  openGraph: {
    title: "Kühl schlafen im Sommer: Kissen, Decke & Laken | Schlafnerds",
    description:
      "Warum Hitze den Schlaf stört und welche drei Bausteine im Schlafsystem kühl durch den Sommer bringen. Von den Schlafnerds aus Bocholt.",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.schlafnerds.de/images/blog/kuehl-schlafen-im-sommer-og.jpg",
        width: 1200,
        height: 630,
        alt: "Helles, luftiges Schlafzimmer mit leichter Sommerdecke",
      },
    ],
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/kuehl-schlafen-im-sommer",
    languages: {
      "de-DE": "https://www.schlafnerds.de/blog/kuehl-schlafen-im-sommer",
      "nl-NL": "https://www.slaapnerds.nl/blog/koel-slapen-in-de-zomer",
    },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kühl schlafen, wenn die Nächte warm werden",
  description:
    "Warum Sommerhitze den Schlaf raubt und welche drei Bausteine im Schlafsystem wirklich helfen – kühlendes Kissen, leichte Sommerdecke und kühlendes Spannbettlaken.",
  author: {
    "@type": "Organization",
    name: "Schlafnerds",
    url: "https://www.schlafnerds.de",
  },
  publisher: {
    "@type": "Organization",
    name: "Schlafnerds",
    logo: {
      "@type": "ImageObject",
      url: "https://www.schlafnerds.de/images/logo.svg",
    },
  },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.schlafnerds.de/blog/kuehl-schlafen-im-sommer",
  },
};

const faqs = [
  {
    question: "Was hilft gegen nächtliches Schwitzen?",
    answer:
      "Eine kühle, gut belüftete Schlafumgebung und Materialien, die Feuchtigkeit ableiten statt zu speichern. Leichte Naturfasern bei der Decke, eine atmungsaktive Unterlage und eine Raumtemperatur möglichst nahe an 16–18 °C helfen dem Körper, Wärme und Feuchtigkeit loszuwerden.",
  },
  {
    question: "Welche Decke ist im Sommer am besten?",
    answer:
      "Eine leichte Decke aus atmungsaktiven, feuchtigkeitsregulierenden Materialien – etwa Wildseide. Sie hält genug Wärme für ein angenehmes Zugedeckt-Gefühl, ohne die Wärme zu stauen.",
  },
  {
    question: "Kühlt ein Gel-Kissen wirklich?",
    answer:
      "Eine Gel-Oberfläche heizt sich langsamer auf und fühlt sich beim Hinlegen kühler an als ein klassischer Bezug. Den Moment, in dem das Kissen warm wird, verschiebt das spürbar nach hinten – am Kopf, wo sich Wärme besonders schnell staut.",
  },
  {
    question: "Wofür ist ein kühlendes Spannbettlaken gut?",
    answer:
      "Es liegt direkt zwischen dir und der Matratze und beeinflusst damit das Mikroklima am stärksten. Eine kühlende, atmungsaktive Oberfläche leitet Wärme und Feuchtigkeit ab – hilfreich für heiße Nächte und für Menschen, die nachts viel schwitzen.",
  },
];

interface Produkt {
  num: number;
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: React.ReactNode[];
}

const produkte: Produkt[] = [
  {
    num: 1,
    kicker: "Der Kopf bleibt kühl",
    title: "Ergosoft Cool",
    image: "/images/blog/kuehl-ergosoft.jpg",
    imageAlt: "Nackenstützkissen Ergosoft Cool mit blauer Gel-Wabenoberfläche",
    paragraphs: [
      <>
        Ein heißes Kissen weckt einen, bevor der Wecker klingelt – weil sich am Kopf besonders schnell Wärme staut. Das <strong>Ergosoft Cool</strong> hat eine kühlende Gel-Oberfläche, die sich nicht so schnell aufheizt, dazu eine ergonomische Kopfmulde und zwei unterschiedliche Stützhöhen für die passende Nackenposition. Der Bezug ist abnehmbar und waschbar. Made in Germany.
      </>,
      <>
        Welches Kissen zu dir passt, erfährst du auch in unserem Ratgeber{" "}
        <a
          href="/blog/nackenstuetzkissen-finden"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          Das richtige Nackenstützkissen finden
        </a>
        .
      </>,
    ],
  },
  {
    num: 2,
    kicker: "Leicht zugedeckt",
    title: "Wildseide Sommerdecke",
    image: "/images/blog/kuehl-wildseide.jpg",
    imageAlt: "Leichte Wildseide-Sommerdecke mit gesteppter Oberfläche auf einem Bett",
    paragraphs: [
      <>
        Ganz ohne Decke schläft kaum jemand gut – aber die Winterdecke ist im Sommer zu schwer. Die <strong>Wildseide-Sommerdecke</strong> ist die leichte Alternative: Wildseide gilt als atmungsaktiv und feuchtigkeitsregulierend, der Bezug ist aus reiner Baumwolle. So bleibt man zugedeckt, ohne ins Schwitzen zu geraten. Füllung 100 % Wildseide, Bezug 100 % Baumwolle, Maß 135 × 200 cm.
      </>,
    ],
  },
  {
    num: 3,
    kicker: "Die Unterlage kühlt mit",
    title: "B-Sensible Polaris",
    image: "/images/blog/kuehl-bsensible.jpg",
    imageAlt: "Bett mit kühlendem Spannbettlaken B-Sensible Polaris in sommerlicher Umgebung",
    paragraphs: [
      <>
        Viel Körperwärme und Feuchtigkeit entstehen dort, wo man aufliegt. Das <strong>B-Sensible Polaris</strong> ist ein Spannbettlaken mit kühlender Oberfläche – wasserdicht und trotzdem atmungsaktiv, mit Anti-Milben-Eigenschaft und OEKO-TEX-Zertifizierung. Gerade für heiße Nächte und empfindliche Schläfer eine sinnvolle Unterlage. (Die Kühl- und Schutzeigenschaften sind Herstellerangaben des Materials.)
      </>,
    ],
  },
];

export default function KuehlSchlafenImSommerPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlafwissen</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Kühl schlafen, wenn die Nächte warm werden
          </h1>
          <p className="mt-6 leading-relaxed text-tagline/80">
            Warum Sommerhitze den Schlaf raubt – und welche drei Bausteine im Schlafsystem wirklich helfen.
          </p>
          <p className="mt-6 leading-relaxed text-tagline/80">
            Es ist eine der zähesten Sommererfahrungen: Man ist müde, aber der Schlaf kommt nicht. Man dreht das Kissen auf die kühle Seite, schiebt die Decke weg, zieht sie wieder heran. Schuld ist selten die Müdigkeit – schuld ist die Wärme. Und das hat einen handfesten körperlichen Grund.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/blog/kuehl-schlafen-im-sommer.jpg"
              alt="Helles, luftiges Schlafzimmer mit leichter Sommerdecke auf dem Bett"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </section>

        {/* Warum Hitze stört */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Warum Hitze den Schlaf stört
          </h2>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Einschlafen ist keine reine Kopfsache, sondern auch eine Frage der Temperatur. Damit wir zur Ruhe kommen, muss unsere <strong>Körperkerntemperatur abends um etwa 1 °C absinken</strong> – der Körper gibt dazu Wärme über die Haut nach außen ab. Erst dieser Abfall stößt den Schlaf an und geht mit dem Anstieg des Schlafhormons Melatonin einher.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Das funktioniert aber nur, wenn die Umgebung die Wärmeabgabe zulässt. Ist der Schlafraum zu warm – wie in tropischen Sommernächten – kann der Körper seine Wärme nicht loswerden, und das Einschlafen wird messbar erschwert. Schlafforschung zeigt zudem: <strong>Hitze verkürzt den Tief- und REM-Schlaf und sorgt für mehr Wachphasen.</strong> Schlaf reagiert dabei empfindlicher auf Wärme als auf Kälte.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Ideal wären <strong>16 bis 18 °C</strong> im Schlafzimmer. Im Hochsommer ist das oft nicht zu erreichen. Dann zählt das, was direkt am Körper liegt: das <strong>Mikroklima zwischen Haut und Bett</strong>. Genau hier setzt man am wirksamsten an.
          </p>
        </section>

        {/* Drei Stellschrauben + Produkte */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Drei Stellschrauben für kühlen Schlaf
            </h2>
            <p className="mt-6 leading-relaxed text-tagline/80">
              Die Raumtemperatur zu senken ist der naheliegendste Hebel – doch im Hochsommer stößt das an Grenzen. Direkt am Bett hat man drei weitere, an genau den Stellen, an denen Wärme und Feuchtigkeit entstehen:
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed text-tagline/80">
                  <strong>Am Kopf</strong> – das Kissen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed text-tagline/80">
                  <strong>Über dem Körper</strong> – die Zudecke
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed text-tagline/80">
                  <strong>Unter dem Körper</strong> – die Unterlage
                </span>
              </li>
            </ul>
            <p className="mt-6 leading-relaxed text-tagline/80">
              Für alle drei gibt es bei uns eine Sommerlösung. Hier sind sie.
            </p>

            <div className="mt-10 space-y-8">
              {produkte.map((p) => (
                <article
                  key={p.num}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="relative h-56 w-full md:h-64">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="accent-text mb-2 text-sm uppercase tracking-wide">
                      {p.kicker}
                    </p>
                    <h3 className="font-heading text-xl font-normal md:text-2xl">
                      {p.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {p.paragraphs.map((para, pi) => (
                        <p key={pi} className="leading-relaxed text-tagline/80">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InlineCTA
          headline="Probeliegen in Bocholt"
          subline="Probier das Kissen aus, fühl die Materialien von Decke und Laken – und lass dich bei uns persönlich beraten."
          utmSource="blog-kuehl-schlafen-im-sommer-inline"
        />

        {/* Fazit */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Fazit: Das Wetter kannst du nicht ändern – dein Bett schon
          </h2>
          <p className="mt-6 leading-relaxed text-tagline/80">
            Die Außentemperatur haben wir nicht in der Hand. Aber die <strong>Schicht zwischen dir und der Matratze</strong> – Kissen, Decke, Laken – entscheidet darüber, wie gut dein Körper nachts Wärme abgeben kann. Schon ein oder zwei der drei Bausteine machen einen spürbaren Unterschied. Am stärksten wirken sie zusammen.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Mehr Grundlagen zum erholsamen Schlaf findest du in unserem Beitrag zur{" "}
            <a
              href="/blog/schlafhygiene"
              className="text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              Schlafhygiene
            </a>
            . Wenn du dein Schlafsystem für den Sommer anpassen willst,{" "}
            <a
              href="/beratung-probeliegen"
              className="text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              komm zum Probeliegen
            </a>
            .
          </p>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* Autorenbox */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <div className="flex items-center gap-4 rounded-xl bg-soft p-6">
            <div className="flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/icon.png" alt="Schlafnerds" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-tagline">Schlafnerds</p>
              <p className="text-sm leading-relaxed text-tagline/60">
                Bettenfachgeschäft an der Nordstraße 39 in Bocholt. Zertifizierte Schlafcoaches und Ergopraktiker – Bett, Lattenrost, Matratze, Kissen und Decke als ein zusammenhängendes Schlafsystem, abgestimmt auf den Menschen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Kühler durch den Sommer –
              <br />
              probier es bei uns aus.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Wir zeigen dir Kissen, Decke und Laken in Ruhe und stimmen sie auf deine Schlafsituation ab. Persönliche Beratung in Bocholt.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={calendlyUrl("blog-kuehl-schlafen-im-sommer")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin online buchen
              </a>
              <a href="/beratung-probeliegen" className="btn-outline">
                Mehr über unseren Ablauf
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
