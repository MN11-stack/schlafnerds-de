import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beratung & Probeliegen – Schlafnerds Bocholt",
  description:
    "Strukturierte Schlafberatung in Bocholt. Wir analysieren Körperstatik und Liegegefühl, ordnen ein und begleiten Sie zu einer fundierten Entscheidung. Termin vereinbaren.",
  openGraph: {
    title: "Beratung & Probeliegen – Schlafnerds Bocholt",
    description:
      "Strukturierte Schlafberatung mit Probeliegen. Körperstatik-Analyse und fachliche Einordnung für Ihr ideales Schlafsystem.",
    locale: "de_DE",
    type: "website",
  },
};

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
function HeroBeratung() {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="accent-text mb-4 text-lg">
              Schlafnerds Fachgeschäft in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Beratung & Probeliegen –<br />
              der Weg zu gutem Schlaf.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Guter Schlaf entsteht nicht durch ein einzelnes Produkt, sondern
              durch das Zusammenspiel aus Liegegefühl, Körperstatik und
              Schlafsystem.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-tagline">
              Wir analysieren, erklären und ordnen ein – Sie erleben, spüren und
              entscheiden.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
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
                src="/images/team/dirk-beratung.jpg"
                alt="Persönliche Beratung bei Schlafnerds in Bocholt"
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

/* ─────────────────────────────────────────────
   2. WARUM BERATUNG ENTSCHEIDEND IST
   ───────────────────────────────────────────── */
function WarumBeratung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Warum Beratung entscheidend ist.
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-tagline">
          <p>
            Viele Menschen wissen, dass sie besser schlafen möchten – aber
            nicht, welche Lösung wirklich zu ihnen passt. Härtegrade, Materialien
            oder Systeme allein liefern darauf keine verlässliche Antwort.
          </p>
          <p>
            Unsere Aufgabe ist es, diese Zusammenhänge verständlich zu
            analysieren und einzuordnen – damit Sie auf einer soliden Grundlage
            entscheiden können.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. WAS PROBELIEGEN BEDEUTET
   ───────────────────────────────────────────── */
function WasProbeliegenBedeutet() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Was Probeliegen bei Schlafnerds bedeutet.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Probeliegen ist bei uns kein kurzer Test, sondern Teil einer
                strukturierten Beratung. Während Sie verschiedene Systeme
                erleben, beobachten und analysieren wir, wie Ihr Körper darauf
                reagiert.
              </p>
              <p>
                Diese Eindrücke ordnen wir fachlich ein und erklären, was sie
                für Ihren Schlaf bedeuten.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/products/holzbett-gesamtsystem.jpeg"
              alt="Probeliegen mit Körperstatik-Analyse bei Schlafnerds"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. UNSER BERATUNGSPROZESS
   ───────────────────────────────────────────── */
const processSteps = [
  {
    nr: "1",
    title: "Liegegefühl erfassen",
    wirText: "Wir begleiten, beobachten und stellen gezielte Fragen",
    sieText: "Sie probieren unterschiedliche Schlafsysteme aus",
  },
  {
    nr: "2",
    title: "Körperstatik analysieren",
    badge: "Unsere Aufgabe",
    bullets: [
      "Wir betrachten Schulter, Becken und Wirbelsäule",
      "Wir erklären Zusammenhänge zwischen Körperbau und Liegeposition",
      "Wir zeigen, wo Entlastung oder Unterstützung nötig ist",
    ],
  },
  {
    nr: "3",
    title: "Schlafsysteme einordnen",
    badge: "Unsere Aufgabe",
    bullets: [
      "Wir erklären Unterschiede zwischen Boxspring, Matratzen und Holzschlafsystemen",
      "Wir benennen Vor- und Nachteile offen und verständlich",
      "Wir zeigen, wie Lattenrost, Matratze und Bett zusammenwirken",
    ],
  },
  {
    nr: "4",
    title: "Gemeinsame Empfehlung",
    wirText: "Wir geben eine fachliche Einschätzung",
    sieText: "Sie entscheiden in Ihrem Tempo",
  },
];

function Beratungsprozess() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Unser Beratungsprozess – klar verteilte Rollen.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Wir strukturieren und erklären. Sie erleben und entscheiden.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.nr}
              className="rounded-2xl bg-white p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-medium text-primary">
                  {step.nr}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-xl font-medium">
                      {step.title}
                    </h3>
                    {step.badge && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {step.badge}
                      </span>
                    )}
                  </div>

                  {step.bullets ? (
                    <ul className="mt-4 space-y-3">
                      {step.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base leading-relaxed text-tagline"
                        >
                          <svg
                            className="mt-1 h-5 w-5 shrink-0 text-primary"
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
                  ) : (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                          Wir
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-tagline">
                          {step.wirText}
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-tagline/70">
                          Sie
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-tagline">
                          {step.sieText}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="accent-text mt-14 text-center text-xl">
          Wir liefern die Einordnung – Sie treffen die Entscheidung.
        </p>
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
            Für eine strukturierte Beratung mit vollständiger Analyse empfehlen
            wir einen Termin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          {/* Kachel A: Termin (empfohlen) */}
          <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8">
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
                <span>Ca. 45–60 Minuten Zeit exklusiv für Sie</span>
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
                <span>Strukturierte Analyse und Einordnung durch uns</span>
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
                <span>Ruhiger Vergleich mehrerer Schlafsysteme</span>
              </li>
            </ul>

            <a
              href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center"
            >
              Beratungstermin vereinbaren
            </a>

            <p className="mt-4 text-center text-xs leading-relaxed text-tagline/50">
              Die meisten unserer Kundinnen und Kunden entscheiden sich für
              einen Termin.
            </p>
          </div>

          {/* Kachel B: Direkt vorbeikommen */}
          <div className="rounded-2xl bg-soft p-8">
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
              Auch ohne Termin möglich. Für eine ruhige, strukturierte Beratung
              mit vollständiger Analyse empfehlen wir jedoch einen Termin.
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

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
   6. WIE DIE BERATUNG IN IHREN ALLTAG PASST
   ───────────────────────────────────────────── */
function BeratungImAlltag() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Image
              src="/images/team/dirk-stoffmuster.jpeg"
              alt="Materialberatung bei Schlafnerds – individuelle Abstimmung"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Wie die Beratung in Ihren Alltag passt.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Guter Schlaf muss nicht nur ergonomisch passen, sondern auch zu
                Ihrem Alltag. Deshalb beziehen wir Schlafgewohnheiten,
                Bewegungsmuster und persönliche Vorlieben in unsere Einordnung
                mit ein.
              </p>
              <p>
                So entsteht eine Empfehlung, die nicht nur auf dem Papier
                funktioniert, sondern in Ihrem Leben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. REGION & NÄHE
   ───────────────────────────────────────────── */
function RegionNaehe() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="text-lg leading-relaxed text-tagline">
          Unsere Beratung richtet sich an Menschen aus Bocholt, dem Kreis
          Borken sowie aus Wesel, Hamminkeln, Dorsten, Schermbeck und der
          niederländischen Grenzregion.
        </p>
        <p className="mt-4 text-sm text-tagline/70">
          Informationen auf Niederländisch finden Sie auf{" "}
          <a
            href="https://slaapnerds.nl"
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
   8. RUHIGER ABSCHLUSS
   ───────────────────────────────────────────── */
function RuhigerAbschluss() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="accent-text text-2xl !text-white/90">
          Guter Schlaf beginnt mit Verstehen. Wir sorgen für die Einordnung –
          Sie für die Entscheidung.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-body text-base font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Beratungstermin vereinbaren
          </a>
          <a
            href="#vorbeikommen"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 font-body text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Direkt vorbeikommen
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function BeratungProbeliegen() {
  return (
    <>
      <Header />
      <main>
        <HeroBeratung />
        <WarumBeratung />
        <WasProbeliegenBedeutet />
        <Beratungsprozess />
        <TerminOderVorbeikommen />
        <BeratungImAlltag />
        <RegionNaehe />
        <RuhigerAbschluss />
      </main>
      <Footer />
    </>
  );
}
