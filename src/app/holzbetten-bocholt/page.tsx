import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Holzbetten Bocholt – Beratung & Probeliegen | Schlafnerds",
  description:
    "Holzbetten persönlich erleben in Bocholt. Massivholz, Lattenrost und Matratze als System verstehen – strukturierte Beratung mit Probeliegen. Di, Do, Fr & Sa geöffnet.",
  openGraph: {
    title: "Holzbetten Bocholt – Beratung & Probeliegen | Schlafnerds",
    description:
      "Holzbetten persönlich erleben in Bocholt. Massivholz als Basis eines durchdachten Schlafsystems.",
    locale: "de_DE",
    type: "website",
  },
};

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
function HeroHolzbetten() {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="accent-text mb-4 text-lg">
              Schlafnerds Fachgeschäft in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Holzbetten in Bocholt –<br />
              natürlich schlafen, bewusst entscheiden.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Ein Holzbett ist mehr als ein Möbelstück. Es ist die Basis eines
              Schlafsystems, das über Jahre trägt – wenn Material, Konstruktion
              und Liegegefühl zusammenpassen.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-tagline">
              Genau dabei unterstützen wir Sie – mit Beratung, Probeliegen und
              einer gemeinsamen Einordnung.
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
                src="/images/products/holzbett.png"
                alt="Massivholzbett aus Eiche bei Schlafnerds in Bocholt"
                width={800}
                height={600}
                className="h-auto w-full object-contain bg-white p-4"
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
   2. WARUM HOLZ
   ───────────────────────────────────────────── */
function WarumHolz() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Fachgeschäft in Bocholt – warum Holz eine bewusste Entscheidung
              ist.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Massivholz bringt etwas mit, das andere Materialien nicht haben:
                Lebendigkeit, Haptik und eine Ruhe, die man spürt. Ein Holzbett
                verändert das Raumgefühl – ohne laut zu sein.
              </p>
              <p>
                Gleichzeitig ist Holz langlebig, formstabil und lässt sich über
                Jahre pflegen und erhalten. Es altert mit Würde, nicht mit
                Verschleiß.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/team/dirk-beratung.jpg"
              alt="Beratung zu Holzbetten bei Schlafnerds in Bocholt"
              width={500}
              height={400}
              className="h-auto w-full max-w-md rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. HOLZBETT ALS BASIS (SYSTEMDENKEN)
   ───────────────────────────────────────────── */
function HolzbettAlsBasis() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Das Holzbett als Basis – nicht als Einzelstück.
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-tagline">
          <p>
            Ein Holzbett allein macht noch kein gutes Schlafsystem. Entscheidend
            ist, wie Bettrahmen, Lattenrost und Matratze zusammenwirken.
          </p>
          <p>
            Deshalb betrachten wir das Holzbett nie isoliert – sondern immer als
            Teil eines Ganzen, das wir gemeinsam abstimmen.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. LIEGEPOSITION IM ZUSAMMENSPIEL
   ───────────────────────────────────────────── */
function LiegepositionZusammenspiel() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Image
              src="/images/store/ladenlokal-betten.jpeg"
              alt="Probeliegen im Showroom bei Schlafnerds in Bocholt"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Liegeposition im Zusammenspiel – nicht nur auf dem Papier.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Wie sich Ihr Körper bettet, hängt nicht nur von der Matratze ab.
                Der Lattenrost beeinflusst die Federung, das Bettgestell die
                Stabilität.
              </p>
              <p>
                Beim Probeliegen erleben Sie, wie diese Komponenten
                zusammenwirken – und wir ordnen gemeinsam ein, was Sie dabei
                spüren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. UNSER WEG ZUM PASSENDEN HOLZBETT
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Material & Eindruck",
    bullets: [
      "Holzarten kennenlernen und anfassen",
      "Oberflächen, Maserung und Haptik erleben",
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
    title: "Probeliegen im Gesamtsystem",
    bullets: [
      "Bettrahmen, Lattenrost und Matratze zusammen erleben",
      "Unterschiede bewusst wahrnehmen",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Transparent einordnen",
    bullets: [
      "Konstruktion und Materialqualität erklären",
      "Vor- und Nachteile offen benennen",
      "Lieferung, Aufbau und Entsorgung des alten Betts \u2013 alles inklusive",
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
    title: "Gemeinsame Entwicklung",
    bullets: [
      "Kein \u201Erichtig\u201C oder \u201Efalsch\u201C",
      "Entscheidung in Ihrem eigenen Tempo",
    ],
  },
];

function UnserWeg() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Unser Weg zum passenden Holzbett.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Vier Schritte, die Ihnen helfen, eine fundierte Entscheidung zu
            treffen.
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
              <h3 className="font-heading text-xl font-medium">{step.title}</h3>
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
          Nicht das Holz allein entscheidet – sondern wie das Gesamtsystem mit
          Ihrem Körper zusammenarbeitet.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. TERMIN ODER DIREKT VORBEIKOMMEN
   ───────────────────────────────────────────── */
function TerminOderVorbeikommen() {
  return (
    <section id="vorbeikommen" className="bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Termin oder direkt vorbeikommen.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Beides ist möglich. Für eine ruhige Beratung mit Probeliegen
            empfehlen wir einen Termin.
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
                <span>Planungssicherheit – Zeit exklusiv für Sie reserviert</span>
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
                <span>Holzarten und Systeme in Ruhe vergleichen</span>
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
                <span>Ruhige Einordnung in Ihrem Tempo</span>
              </li>
            </ul>

            <p className="mt-4 text-sm text-tagline/70">
              Dauer: ca. 45–60 Minuten
            </p>

            <a
              href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center"
            >
              Beratungstermin vereinbaren
            </a>

            <p className="mt-4 text-center text-xs leading-relaxed text-tagline/50">
              Viele Kundinnen und Kunden aus der Region wählen bewusst einen
              Termin, um verschiedene Optionen in Ruhe zu vergleichen.
            </p>
          </div>

          {/* Kachel B: Direkt vorbeikommen */}
          <div className="rounded-2xl bg-white p-8">
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
              Auch ohne Termin sind Sie willkommen. Allerdings kann die Beratung
              dann kürzer ausfallen oder zwischendurch unterbrochen werden. Für
              einen ruhigen Vergleich empfehlen wir eine Terminvereinbarung.
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
   7. REGION & NÄHE
   ───────────────────────────────────────────── */
function RegionNaehe() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="text-lg leading-relaxed text-tagline">
          Viele unserer Kundinnen und Kunden kommen aus Bocholt, dem Kreis
          Borken, Wesel, Hamminkeln, Dorsten, Schermbeck sowie aus der
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
          Ein Holzbett begleitet Sie über Jahre. Nehmen Sie sich die Zeit, die
          für eine gute Entscheidung notwendig ist.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Am besten mit einem Termin – damit wir uns ganz auf Ihre Fragen und
          Ihr Liegegefühl konzentrieren können.
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
export default function HolzbettenBocholt() {
  return (
    <>
      <Header />
      <main>
        <HeroHolzbetten />
        <WarumHolz />
        <HolzbettAlsBasis />
        <LiegepositionZusammenspiel />
        <UnserWeg />
        <TerminOderVorbeikommen />
        <RegionNaehe />
        <RuhigerAbschluss />
      </main>
      <Footer />
    </>
  );
}
