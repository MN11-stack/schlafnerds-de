import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/sections/FaqSection";
import { getAggregateRating } from "@/lib/google-reviews";

const URL = "https://www.schlafnerds.de/bettengeschaeft-muensterland";
const CALENDLY_URL = "https://calendly.com/schlafnerds/45min?back=1";

export const metadata: Metadata = {
  title: "Bettengeschäft im Münsterland | Schlafnerds Bocholt",
  description:
    "Bettenfachgeschäft im Westmünsterland: Beratung mit Probeliegen für Boxspringbetten, Matratzen & Holzbetten. 30 Min von Münster, Coesfeld, Ahaus.",
  openGraph: {
    title: "Bettengeschäft im Münsterland | Schlafnerds Bocholt",
    description:
      "Bettenfachgeschäft im Westmünsterland: Beratung mit Probeliegen, Körperstatik-Analyse und Schlafsystem-Vergleich.",
    locale: "de_DE",
    type: "website",
    url: URL,
    images: [
      {
        url: "https://www.schlafnerds.de/images/store/ladenlokal-betten.jpeg",
        width: 1200,
        height: 630,
        alt: "Schlafnerds Ladenlokal in Bocholt im Westmünsterland",
      },
    ],
  },
  alternates: {
    canonical: URL,
  },
};

const muensterlandFaqs = [
  {
    question: "Wo genau liegt Schlafnerds im Münsterland?",
    answer:
      "Schlafnerds liegt in der Nordstraße 39 in Bocholt – am Westrand des Münsterlandes, direkt am Übergang zum Achterhoek (Niederlande). Aus dem Westmünsterland (Borken, Stadtlohn, Vreden, Ahaus, Velen, Heiden) sind wir in unter 30 Minuten erreichbar. Aus Coesfeld rund 35 Minuten, aus Münster etwa 50 Minuten.",
  },
  {
    question: "Lohnt sich die Anfahrt aus dem Münsterland?",
    answer:
      "Wir sind zertifizierte Schlafcoaches und Ergopraktiker und beraten herstellerunabhängig. Wir nehmen uns 45–60 Minuten exklusiv für jede Beratung – inklusive Körperstatik-Analyse und Probeliegen verschiedener Schlafsysteme. Das findet sich nicht in jedem Bettengeschäft. Wer im Münsterland wohnt und eine fundierte Schlafberatung sucht, für den ist die Anfahrt oft sinnvoll.",
  },
  {
    question: "Liefern Sie auch ins Münsterland?",
    answer:
      "Ja. Lieferung, Aufbau und Entsorgung der alten Matratze sind im gesamten Münsterland inklusive. Auch die niederländische Grenzregion deckt unser Liefergebiet ab.",
  },
  {
    question: "Brauche ich für die Beratung einen Termin?",
    answer:
      "Empfohlen, aber nicht zwingend. Mit Termin nehmen wir uns 45–60 Minuten exklusiv für Sie – auch außerhalb der regulären Öffnungszeiten. Ohne Termin sind wir Di + Do 14–18 Uhr, Fr 10–18 Uhr und Sa 10–14 Uhr erreichbar.",
  },
  {
    question: "Welche Schlafsysteme kann ich bei Schlafnerds vergleichen?",
    answer:
      "Boxspringbetten, Holzbetten (Eiche, Buche, Kernbuche), Matratzen aus Naturlatex, Naturlatex-Kokos, Taschenfederkern, Kaltschaum und Viscogelschaum, dazu zentimetergenau angepasste Nackenstützkissen. Alles vor Ort zum Probeliegen.",
  },
  {
    question: "Wie viel kostet die Beratung?",
    answer:
      "Die Schlafberatung mit Probeliegen ist kostenfrei. Wir investieren Zeit, Sie investieren Vertrauen – und entscheiden danach, ob ein Schlafsystem von uns zu Ihnen passt.",
  },
];

const cities: { name: string; km: number; min: number }[] = [
  { name: "Borken", km: 12, min: 15 },
  { name: "Stadtlohn", km: 15, min: 18 },
  { name: "Vreden", km: 20, min: 22 },
  { name: "Ahaus", km: 25, min: 25 },
  { name: "Velen", km: 25, min: 25 },
  { name: "Heiden", km: 30, min: 28 },
  { name: "Coesfeld", km: 35, min: 35 },
  { name: "Dülmen", km: 50, min: 40 },
  { name: "Münster", km: 75, min: 50 },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://www.schlafnerds.de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bettengeschäft im Münsterland",
      item: URL,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Bettengeschäft im Münsterland",
  description:
    "Bettenfachgeschäft im Westmünsterland mit persönlicher Schlafberatung, Probeliegen und Körperstatik-Analyse. Boxspringbetten, Matratzen, Holzbetten, Nackenstützkissen.",
  url: URL,
  provider: {
    "@id": "https://www.schlafnerds.de/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Bocholt" },
    { "@type": "City", name: "Borken" },
    { "@type": "City", name: "Stadtlohn" },
    { "@type": "City", name: "Vreden" },
    { "@type": "City", name: "Ahaus" },
    { "@type": "City", name: "Velen" },
    { "@type": "City", name: "Heiden" },
    { "@type": "City", name: "Coesfeld" },
    { "@type": "City", name: "Dülmen" },
    { "@type": "City", name: "Münster" },
    { "@type": "AdministrativeArea", name: "Münsterland" },
    { "@type": "AdministrativeArea", name: "Westmünsterland" },
    { "@type": "AdministrativeArea", name: "Kreis Borken" },
    { "@type": "AdministrativeArea", name: "Kreis Coesfeld" },
  ],
  serviceType: "Schlafberatung & Bettengeschäft",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Beratung mit Probeliegen, ohne Kaufzwang",
  },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="accent-text mb-4 text-lg">
              Schlafnerds Fachgeschäft in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Bettengeschäft im Münsterland –<br />
              persönliche Beratung, fundierte Empfehlung.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Im Westmünsterland gelegen, am Übergang zum Achterhoek: Wir sind
              ein inhabergeführtes Bettenfachgeschäft mit Schwerpunkt auf
              Schlafberatung, Probeliegen und Körperstatik.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-tagline">
              Aus dem Münsterland sind Sie in 15 bis 50 Minuten bei uns – und
              gehen mit einem Schlafsystem nach Hause, das wirklich zu Ihnen
              passt.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
              <a href="#anfahrt" className="btn-outline">
                Anfahrt aus dem Münsterland
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/store/ladenlokal-betten.jpeg"
                alt="Schlafnerds Ladenlokal in Bocholt – Bettengeschäft im Westmünsterland"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WarumAnreise() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Warum sich die Anfahrt aus dem Münsterland lohnt.
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-tagline">
          <p>
            Im Münsterland gibt es viele Bettengeschäfte – in Münster, Coesfeld,
            Borken, Ahaus. Was uns von vielen unterscheidet: Wir sind
            zertifizierte Schlafcoaches und Ergopraktiker. Wir nehmen uns
            45–60 Minuten exklusiv für jede Beratung und arbeiten
            herstellerunabhängig.
          </p>
          <p>
            Das bedeutet: Im Mittelpunkt stehen Ihre Körperstatik, Ihre
            Schlafposition und Ihr Liegegefühl – nicht ein bestimmtes Produkt
            oder eine Verkaufsmarge. Wir erklären, warum sich Materialien
            unterschiedlich anfühlen, ordnen Ihre Eindrücke fachlich ein und
            geben eine transparente Empfehlung.
          </p>
        </div>
      </div>
    </section>
  );
}

function Anfahrt() {
  return (
    <section id="anfahrt" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          So gut erreichen Sie uns aus dem Münsterland.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tagline">
          Bocholt liegt am Westrand des Münsterlandes. Über die A31 und die
          Bundesstraßen B67 / B70 sind die meisten Städte aus dem West- und
          Kernmünsterland gut erreichbar. Die folgenden Fahrzeiten sind grobe
          Richtwerte (Auto, ohne Stau).
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border-2 border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-soft">
              <tr>
                <th className="px-6 py-4 font-heading font-normal text-tagline">
                  Stadt
                </th>
                <th className="px-6 py-4 font-heading font-normal text-tagline">
                  Entfernung
                </th>
                <th className="px-6 py-4 font-heading font-normal text-tagline">
                  Fahrzeit
                </th>
              </tr>
            </thead>
            <tbody>
              {cities.map((c) => (
                <tr
                  key={c.name}
                  className="border-t border-gray-100 text-tagline"
                >
                  <td className="px-6 py-3 font-medium">{c.name}</td>
                  <td className="px-6 py-3">ca. {c.km} km</td>
                  <td className="px-6 py-3">ca. {c.min} Min.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-tagline/70">
          Adresse: Schlafnerds, Nordstraße 39, 46395 Bocholt. Parkplätze
          stehen im näheren Umfeld zur Verfügung.
        </p>
      </div>
    </section>
  );
}

function Sortiment() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/products/holzbett-gesamtsystem.jpeg"
              alt="Schlafsystem-Vergleich: Holzbett, Matratze und Topper bei Schlafnerds"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Was Sie bei uns vergleichen können.
            </h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-tagline">
              <li>
                <a
                  href="/matratzen-bocholt"
                  className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Matratzen
                </a>
                {" "}aus Naturlatex, Naturlatex-Kokos, Taschenfederkern,
                Kaltschaum und Viscogelschaum
              </li>
              <li>
                <a
                  href="/boxspringbetten-bocholt"
                  className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Boxspringbetten
                </a>
                {" "}– individuell zusammengestellt aus Unterbox, Matratze
                und Topper
              </li>
              <li>
                <a
                  href="/holzbetten-bocholt"
                  className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Holzbetten
                </a>
                {" "}aus Eiche, Buche und Kernbuche – als Basis eines
                Schlafsystems
              </li>
              <li>
                <a
                  href="/nackenstuetzkissen-bocholt"
                  className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Nackenstützkissen
                </a>
                {" "}mit zentimetergenauer Anpassung an Schulter und
                Schlafposition
              </li>
              <li>
                <a
                  href="/erdungsspanntuecher-bocholt"
                  className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Erdungsspanntücher
                </a>
                {" "}für alle, die Earthing einmal ausprobieren möchten
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beratung() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              So läuft Ihre Beratung ab.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Wir starten mit einer Analyse Ihrer Körperstatik – Schulter,
                Becken, Wirbelsäule. Diese Daten ordnen wir gemeinsam mit Ihrer
                bevorzugten Schlafposition ein.
              </p>
              <p>
                Anschließend probieren Sie verschiedene Schlafsysteme im Liegen
                aus. Wir beobachten, fragen nach und erklären, was Sie spüren
                und warum.
              </p>
              <p>
                Am Ende fassen wir zusammen, geben eine fundierte Empfehlung –
                und Sie entscheiden in Ruhe.
              </p>
            </div>
            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/store/berater-erklaert.jpeg"
              alt="Persönliche Schlafberatung bei Schlafnerds in Bocholt"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Wissensbruecke() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-2xl leading-snug font-normal md:text-3xl">
          Vor dem Termin schon einlesen.
        </h2>
        <p className="mt-4 leading-relaxed text-tagline">
          Wer den Showroom-Besuch vorbereiten möchte, findet in unseren
          Ratgebern die wichtigsten Grundlagen:
        </p>
        <ul className="mt-6 space-y-3 leading-relaxed text-tagline">
          <li>
            <a
              href="/blog/matratze-kaufen"
              className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              Matratze kaufen – Worauf Sie wirklich achten müssen
            </a>
          </li>
          <li>
            <a
              href="/blog/schlafhygiene"
              className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              10 Schlafhygiene-Regeln, die wirklich helfen
            </a>
          </li>
          <li>
            <a
              href="/blog/nackenstuetzkissen-finden"
              className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              Das passende Nackenstützkissen finden
            </a>
          </li>
          <li>
            <a
              href="/chronotypen-test"
              className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              Eule oder Lerche? Schlaftyp-Test in 5 Fragen
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/team/dirk-markus-teamfoto.jpeg"
              alt="Das Schlafnerds-Team in Bocholt"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Das sind die Schlafnerds.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Wir sind zertifizierte Schlafcoaches und Ergopraktiker und
                betreiben Schlafnerds in Bocholt seit 2020 als
                inhabergeführtes Fachgeschäft. Unsere Kundinnen und Kunden
                kommen aus Bocholt, dem Kreis Borken, dem westlichen
                Münsterland und der niederländischen Grenzregion.
              </p>
              <p>
                Unsere Beratung ist persönlich, strukturiert und auf Ihre
                Schlafsituation zugeschnitten – nicht auf einen
                Verkaufskatalog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schluss() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="accent-text text-2xl !text-white/90">
          Aus dem Münsterland in 15 bis 50 Minuten bei den Schlafnerds. Wir
          nehmen uns Zeit für die Beratung, die Sie verdienen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-body text-base font-semibold !text-primary transition-colors hover:bg-white/90"
          >
            Beratungstermin vereinbaren
          </a>
          <a
            href="#anfahrt"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 font-body text-base font-semibold !text-white transition-colors hover:bg-white/10"
          >
            Anfahrt ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

export default async function BettengeschaeftMuensterland() {
  const aggregateRating = await getAggregateRating();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...serviceSchema, aggregateRating }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <WarumAnreise />
        <Anfahrt />
        <Sortiment />
        <Beratung />
        <Wissensbruecke />
        <Team />
        <FaqSection faqs={muensterlandFaqs} />
        <Schluss />
      </main>
      <Footer />
    </>
  );
}
