import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeitereLoesungen from "@/components/sections/WeitereLoesungen";
import SchlafversprechenSection from "@/components/sections/SchlafversprechenSection";
import { calendlyUrl } from "@/lib/calendly";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.schlafnerds.de/nackenstuetzkissen-bocholt#service",
  name: "Nackenstützkissen Bocholt",
  description:
    "Persönliche Nackenstützkissen-Beratung mit zentimetergenauer Anpassung an Körperstatik und Schlafposition. Probeliegen vor Ort, herstellerunabhängig.",
  url: "https://www.schlafnerds.de/nackenstuetzkissen-bocholt",
  provider: {
    "@id": "https://www.schlafnerds.de/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Bocholt" },
    { "@type": "AdministrativeArea", name: "Kreis Borken" },
  ],
  serviceType: "Nackenstützkissen-Beratung",
};

export const metadata: Metadata = {
  title:
    "Nackenstützkissen Bocholt – Beratung bei Nackenschmerzen & Anpassung | Schlafnerds",
  description:
    "Das richtige Kissen bei Nackenschmerzen finden: Körperstatik-Analyse, Probeliegen und zentimetergenaue Anpassung. Kissentaxi – Beratung auch bei Ihnen zu Hause in Bocholt.",
  openGraph: {
    title:
      "Nackenstützkissen Bocholt – Beratung bei Nackenschmerzen & Anpassung | Schlafnerds",
    description:
      "Das richtige Kissen bei Nackenschmerzen finden – Körperstatik-Analyse, Probeliegen und zentimetergenaue Anpassung in Bocholt.",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/nackenstuetzkissen-bocholt",
  },
};

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
function HeroKissen() {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="accent-text mb-4 text-lg">
              Schlafnerds Fachgeschäft in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Nackenstützkissen –<br />
              individuell angepasst, zentimetergenau.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Ein gutes Kissen lässt sich nicht raten. Es ergibt sich aus Ihrer
              Körperstatik, Ihrer Schlafunterlage und Ihrem Liegegefühl.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-tagline">
              Genau dafür nehmen wir uns Zeit – bei uns im Geschäft oder bei
              Ihnen zu Hause mit dem Kissentaxi.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={calendlyUrl("nackenstuetzkissen-bocholt")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
              <a href="#vorbeikommen" className="btn-outline">
                Direkt vorbeikommen
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/products/nackenstuetzkissen-hero.png"
                alt="Ergonomisches Nackenstützkissen mit Tencel-Bezug bei Schlafnerds in Bocholt"
                width={800}
                height={500}
                className="h-auto w-full object-contain"
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

/* ─────────────────────────────────────────────
   2. WARUM INDIVIDUELLE ANPASSUNG
   ───────────────────────────────────────────── */
function WarumAnpassung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Warum ein Nackenstützkissen persönliche Beratung braucht.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Nacken- und Schulterprobleme entstehen selten über Nacht. Oft
                liegt die Ursache in einem Kissen, das nicht zur Körperstatik
                passt – zu hoch, zu flach, zu weich oder zu fest.
              </p>
              <p>
                Entscheidend ist das Zusammenspiel von Schulterbreite,
                Nackenform und Schlafunterlage. Ein Kissen, das auf einer
                Matratze perfekt funktioniert, kann auf einer anderen völlig
                falsch liegen.
              </p>
              <p>
                Deshalb analysieren wir nicht nur den Nacken, sondern die
                gesamte Schlafsituation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/images/products/nackenstuetzkissen-detail.png"
              alt="Ergonomisches Nackenstützkissen – Seitenansicht mit Tencel-Bezug"
              width={600}
              height={375}
              className="h-auto w-full max-w-lg object-contain"
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={calendlyUrl("nackenstuetzkissen-bocholt")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
              <a href="#vorbeikommen" className="btn-outline">
                Direkt vorbeikommen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2b. WANN EIN NACKENSTÜTZKISSEN HILFT
   ───────────────────────────────────────────── */
const signale = [
  {
    title: "Morgens verspannter Nacken und Kopfschmerzen",
    text: "Wer regelmäßig mit einem steifen Nacken aufwacht, schläft auf einem Kissen, das nicht passt. Oft stimmen Höhe oder Festigkeit nicht zur individuellen Schlafposition – Kopf und Nacken werden nicht richtig gestützt.",
  },
  {
    title: "Druckstellen an Wange oder Schulter beim Seitenschlaf",
    text: "Seitenschläfer brauchen ein Kissen, das die Lücke zwischen Kopf und Matratze exakt ausfüllt. Zu flach belastet die Schulter, zu hoch knickt die Halswirbelsäule ab.",
  },
  {
    title: "Unruhiges Drehen und Kissen-Stapeln in der Nacht",
    text: 'Wenn du im Schlaf das Kissen faltest, ein zweites darunterlegst oder ein kleines Zusatzkissen („Fritzi") brauchst, ist das ein Signal: Die Höhe oder Festigkeit passt nicht zu deiner Schlafposition.',
  },
];

function WannEsHilft() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Wann ein Nackenstützkissen hilft.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Drei Signale, bei denen das Kissen meist die Ursache ist – nicht die
            Matratze und nicht das Alter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {signale.map((signal, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-xl border-2 border-gray-100 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="font-heading text-lg leading-snug font-normal text-tagline">
                {signal.title}
              </h3>
              <p className="mt-4 leading-relaxed text-tagline/80">
                {signal.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center leading-relaxed text-tagline/70">
          Tiefer einsteigen:{" "}
          <a
            href="/blog/nackenstuetzkissen-finden"
            className="font-medium !text-primary underline underline-offset-2 hover:!text-primary-dark"
          >
            Das passende Nackenstützkissen finden &rarr;
          </a>
        </p>
        <p className="mt-2 text-center leading-relaxed text-tagline/70">
          Unsicher, welcher Schlaftyp du bist?{" "}
          <a
            href="/chronotypen-test"
            className="font-medium !text-primary underline underline-offset-2 hover:!text-primary-dark"
          >
            Chronotyp in 5 Fragen bestimmen &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. KISSENTAXI
   ───────────────────────────────────────────── */
function Kissentaxi() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Video */}
          <div>
            <div className="video-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/PiCfRn64Dv4"
                title="Kissentaxi – Beratung bei Ihnen zu Hause"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Kissentaxi – Beratung bei Ihnen zu Hause.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-tagline">
              <p>
                Manchmal ist es sinnvoll, direkt im eigenen Schlafzimmer zu
                beraten. Mit dem Kissentaxi kommen wir zu Ihnen – mit einer
                Auswahl an Kissen, abgestimmt auf Ihre Schlafsituation.
              </p>
              <p>
                Wir analysieren vor Ort Ihre Schlafunterlage, prüfen die
                Körperstatik im Liegen und testen verschiedene Kissen direkt auf
                Ihrer Matratze. So finden wir die Lösung, die wirklich zu Ihrem
                Bett passt.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="tel:+4928713492862"
                className="btn-primary"
              >
                Anrufen und Kissentaxi ordern
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. UNSER WEG ZUM PASSENDEN KISSEN
   ───────────────────────────────────────────── */
const processSteps = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Körperstatik analysieren",
    bullets: [
      "Schulterbreite, Nackenform und Haltung betrachten",
      "Individuelle Besonderheiten erkennen",
    ],
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: "Schlafsituation erfassen",
    bullets: [
      "Schlafunterlage und Matratze einbeziehen",
      "Schlafposition und Gewohnheiten berücksichtigen",
    ],
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Probeliegen & Vergleich",
    bullets: [
      "Verschiedene Kissen direkt testen",
      "Unterschiede bewusst wahrnehmen",
      "Zentimetergenaue Anpassung der Kissenhöhe",
    ],
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Gemeinsame Empfehlung",
    bullets: [
      "Unsere Einschätzung plus Ihr Liegegefühl",
      "Sie entscheiden – wir beraten",
    ],
  },
];

function UnserWeg() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Unser Weg zum passenden Kissen.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Vier Schritte, die Ihnen helfen, das richtige Nackenstützkissen zu
            finden.
          </p>
        </div>

        <div className="relative mt-14 space-y-10 pl-14">
          {/* Vertical connector line */}
          <div className="absolute top-5 bottom-5 left-5 w-px bg-primary/20" />

          {processSteps.map((step, i) => (
            <div key={i} className="relative">
              {/* Icon circle */}
              <div className="absolute -left-14 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="font-heading text-xl font-medium">
                {step.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {step.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 leading-relaxed text-tagline"
                  >
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="accent-text mt-14 text-center text-xl">
          Nicht die Kissenhöhe allein entscheidet – sondern wie Kissen,
          Schulter und Matratze zusammenarbeiten.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4b. STIMMEN VON KUNDEN
   ───────────────────────────────────────────── */
const stimmen = [
  {
    zitat:
      "Ich bin jahrelang mit Nackenschmerzen aufgewacht. Mit der Unterstützung der Schlafnerds habe ich endlich das richtige Kissen gefunden. Die Beratung war gründlich und hat sich Zeit genommen.",
    person: "Kundin, 52, aus Bocholt",
  },
  {
    zitat:
      "Das Probeliegen hat den Unterschied gemacht. Drei Kissen getestet, am Ende war es nicht das, was ich vorher online gekauft hätte. Mein Nacken dankt es mir.",
    person: "Kunde, 41, aus Rhede",
  },
  {
    zitat:
      "Dass ich das Kissen zuhause testen konnte, war entscheidend. Die erste Nacht war ungewohnt – schon wenige Tage später bin ich morgens entspannt aufgewacht und freue mich abends aufs Zubettgehen.",
    person: "Kundin, 58, aus Borken",
  },
];

function StimmenVonKunden() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Stimmen von Kunden.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Rückmeldungen aus Beratungsgesprächen – anonymisiert.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stimmen.map((s, i) => (
            <figure
              key={i}
              className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm"
            >
              <svg
                className="h-6 w-6 text-primary/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <blockquote className="mt-4 flex-1 leading-relaxed text-tagline/90">
                {s.zitat}
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-tagline/70">
                {s.person}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. TERMIN ODER DIREKT VORBEIKOMMEN
   ───────────────────────────────────────────── */
function TerminOderVorbeikommen() {
  return (
    <section id="vorbeikommen" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Termin oder direkt vorbeikommen.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Beides ist möglich. Für eine fundierte Kissenberatung empfehlen wir
            einen Termin.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[1.2fr_1fr]">
          {/* Kachel A: Termin (empfohlen) */}
          <div className="flex h-full flex-col rounded-2xl border-2 border-primary bg-primary/5 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-normal">
                  Beratungstermin
                </h3>
                <span className="text-sm font-medium text-primary">
                  Empfohlen
                </span>
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-tagline">
              Auf Basis einer strukturierten Körperstatik-Analyse finden wir das
              Kissen, das wirklich zu Ihnen passt.
            </p>

            <ul className="mt-6 space-y-3 text-tagline">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>45–60 Minuten Zeit für Sie</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Termine auch außerhalb der Geschäftszeiten möglich</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Oder Kissentaxi: Beratung bei Ihnen zu Hause</span>
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <a
                href={calendlyUrl("nackenstuetzkissen-bocholt")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Beratungstermin vereinbaren
              </a>
            </div>
          </div>

          {/* Kachel B: Direkt vorbeikommen */}
          <div className="flex h-full flex-col rounded-2xl bg-soft p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-normal">
                Direkt vorbeikommen
              </h3>
            </div>

            <p className="mt-4 leading-relaxed text-tagline">
              Auch ohne Termin möglich. Für eine strukturierte Kissenberatung
              empfehlen wir jedoch einen Termin.
            </p>

            {/* Öffnungszeiten */}
            <div className="mt-6 space-y-1 text-sm text-tagline">
              <p className="font-semibold">Öffnungszeiten</p>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
                <span>Di + Do</span>
                <span>14:00 – 18:00 Uhr</span>
                <span>Fr</span>
                <span>10:00 – 18:00 Uhr</span>
                <span>Sa</span>
                <span>10:00 – 14:00 Uhr</span>
              </div>
            </div>

            <address className="mt-4 text-sm not-italic text-tagline">
              Nordstraße 39, 46395 Bocholt
            </address>

            <div className="mt-auto pt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Nordstra%C3%9Fe+39,+46395+Bocholt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 text-center text-sm"
              >
                Route planen
              </a>
              <a
                href="tel:+4928713492862"
                className="btn-outline flex-1 text-center text-sm"
              >
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. REGION & NÄHE
   ───────────────────────────────────────────── */
function RegionNaehe() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="text-lg leading-relaxed text-tagline">
          Viele unserer Kundinnen und Kunden kommen aus Bocholt, dem Kreis
          Borken, Wesel, Hamminkeln, Dorsten, Schermbeck sowie aus der
          niederländischen Grenzregion.
        </p>
        <p className="mt-4 text-sm text-tagline/70">
          Informationen auf Niederländisch finden Sie auf{" "}
          <a
            href="https://www.slaapnerds.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium !text-primary underline underline-offset-2 transition-colors hover:!text-primary-dark"
          >
            slaapnerds.nl
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. RUHIGER ABSCHLUSS
   ───────────────────────────────────────────── */
function RuhigerAbschluss() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="accent-text text-2xl !text-white/90">
          Ein gutes Kissen begleitet Sie jede Nacht. Nehmen Sie sich die Zeit,
          die für eine gute Entscheidung notwendig ist.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={calendlyUrl("nackenstuetzkissen-bocholt")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-body text-base font-semibold !text-primary transition-colors hover:bg-white/90"
          >
            Beratungstermin vereinbaren
          </a>
          <a
            href="#vorbeikommen"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 font-body text-base font-semibold !text-white transition-colors hover:bg-white/10"
          >
            Direkt vorbeikommen
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ – STRUCTURED DATA
   ───────────────────────────────────────────── */
const faqData = [
  {
    question: "Wie finde ich das richtige Nackenstützkissen?",
    answer:
      "Durch eine persönliche Analyse Ihrer Körperstatik – insbesondere Schulterbreite und Nackenform – in Kombination mit Ihrer Schlafunterlage. Beim Probeliegen testen Sie verschiedene Kissen und wir passen die Höhe zentimetergenau an.",
  },
  {
    question: "Was ist das Kissentaxi?",
    answer:
      "Mit dem Kissentaxi kommen wir zu Ihnen nach Hause – mit einer Auswahl an Nackenstützkissen. So können wir die Beratung direkt auf Ihrer eigenen Matratze durchführen und die optimale Lösung für Ihre Schlafsituation finden.",
  },
  {
    question: "Warum reicht die Schlafposition allein nicht aus, um ein Kissen auszuwählen?",
    answer:
      "Weil die Kissenhöhe vom Zusammenspiel zwischen Schulterbreite, Nackenform und der Einsinktiefen Ihrer Matratze abhängt. Dieselbe Person braucht auf einer weichen Matratze ein anderes Kissen als auf einer festen.",
  },
  {
    question: "Wie lange dauert eine Kissenberatung?",
    answer:
      "In der Regel 45 bis 60 Minuten. In dieser Zeit analysieren wir Ihre Körperstatik, testen verschiedene Kissen im Probeliegen und geben eine fundierte Empfehlung.",
  },
];

function FaqSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-center text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Häufig gestellte Fragen.
        </h2>

        <div className="mt-12 divide-y divide-gray-100">
          {faqData.map((faq, i) => (
            <details key={i} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between font-heading text-lg font-medium text-tagline marker:content-['']">
                {faq.question}
                <svg
                  className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-tagline">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}


/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function NackenstuetzkissenBocholt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <HeroKissen />
        <WarumAnpassung />
        <WannEsHilft />
        <Kissentaxi />
        <UnserWeg />
        <StimmenVonKunden />
        <FaqSection />
        <SchlafversprechenSection />
        <TerminOderVorbeikommen />
        <WeitereLoesungen currentPath="/nackenstuetzkissen-bocholt" />
        <RegionNaehe />
        <RuhigerAbschluss />
      </main>
      <Footer />
    </>
  );
}
