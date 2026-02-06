import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Betten Bocholt – Beratung & Probeliegen | Schlafnerds",
  description:
    "Bettenfachgeschäft in Bocholt mit persönlicher Beratung. Boxspringbetten, Matratzen und Holzbetten – Probeliegen und Körperstatik-Check. Di, Do, Fr & Sa geöffnet.",
  openGraph: {
    title: "Betten Bocholt – Beratung & Probeliegen | Schlafnerds",
    description:
      "Bettenfachgeschäft in Bocholt. Persönliche Beratung für Boxspringbetten, Matratzen und Holzbetten.",
    locale: "de_DE",
    type: "website",
  },
};

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
function HeroBetten() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 md:pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="accent-text mb-4 text-lg">
              Schlafnerds Fachgeschäft in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Betten in Bocholt –<br />
              Beratung & Probeliegen bei den Schlafnerds.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Wenn es um guten Schlaf geht, entscheidet nicht das Bett allein,
              sondern die passende Kombination aus Liegegefühl, Material und
              Beratung.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-tagline">
              Genau dafür sind wir da – als Fachgeschäft mit Zeit, Ruhe und
              Struktur.
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

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-tagline/60">
              Viele unserer Kundinnen und Kunden aus Bocholt und dem Kreis
              Borken entscheiden sich bewusst für einen Termin, um sich die
              nötige Zeit zu nehmen.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/store/ladenlokal-betten.jpeg"
                alt="Betten-Showroom bei Schlafnerds in Bocholt"
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
   2. ENTSCHEIDUNG, KEIN PRODUKTKLICK
   ───────────────────────────────────────────── */
function Entscheidung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Betten kaufen in Bocholt – eine Entscheidung, kein Produktklick.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Viele Menschen suchen nach &bdquo;Betten Bocholt&ldquo;, weil
                sie nicht einfach ein Bett kaufen möchten, sondern eine Lösung,
                die langfristig passt.
              </p>
              <p>
                Deshalb verstehen wir uns nicht als Verkäufer einzelner Produkte,
                sondern als Berater, die unterschiedliche Schlaflösungen
                gemeinsam einordnen.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/team/dirk-beratung.jpg"
              alt="Persönliche Beratung bei Schlafnerds in Bocholt"
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
   3. SCHLAFLÖSUNGEN IM ÜBERBLICK (VERTEILER)
   ───────────────────────────────────────────── */
const schlaflösungen = [
  {
    title: "Boxspringbetten",
    image: "/images/products/boxspringbett.png",
    alt: "Boxspringbett – komfortables Schlafsystem",
    text: "Komfortabler Einstieg, angenehme Liegehöhe und vielseitig in Gestaltung und Härtegrad.",
    linkText: "Boxspringbetten in Bocholt ansehen",
    linkHref: "/boxspringbetten-bocholt",
  },
  {
    title: "Matratzen",
    image: "/images/products/matratze.png",
    alt: "Hochwertige Matratze",
    text: "Naturlatex, Kaltschaum, Taschenfederkern – jedes Material reagiert anders auf Körper und Bewegung.",
    linkText: "Matratzen in Bocholt vergleichen",
    linkHref: "/matratzen-bocholt",
  },
  {
    title: "Holzbetten",
    image: "/images/products/holzbett.png",
    alt: "Massives Holzbett aus Eiche",
    text: "Langlebig, formstabil und gestalterisch eigenständig. Konstruktion und Material, die über Jahre halten.",
    linkText: "Holzbetten in Bocholt entdecken",
    linkHref: "/holzbetten-bocholt",
  },
];

function Schlafloesungen() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Unsere Schlaflösungen – im Überblick.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Je nach Körper, Schlafgewohnheiten und Alltag kommen
            unterschiedliche Schlafsysteme infrage.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {schlaflösungen.map((item) => (
            <a
              key={item.title}
              href={item.linkHref}
              className="group flex flex-col overflow-hidden rounded-2xl bg-soft transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-2xl font-normal">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-tagline">{item.text}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary transition-colors group-hover:text-primary-dark">
                  {item.linkText}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. SO ARBEITEN WIR
   ───────────────────────────────────────────── */
const schritte = [
  {
    nr: "1",
    title: "Probeliegen & erstes Gefühl",
    text: "Verschiedene Systeme direkt erleben und Unterschiede bewusst wahrnehmen.",
  },
  {
    nr: "2",
    title: "Körperstatik verstehen",
    text: "Schulter, Becken und Wirbelsäule betrachten – und die Reaktion der Materialien erklären.",
  },
  {
    nr: "3",
    title: "Transparent einordnen",
    text: "Materialeigenschaften verständlich machen, Vor- und Nachteile offen benennen.",
  },
  {
    nr: "4",
    title: "Gemeinsame Empfehlung",
    text: "Entscheidung in Ihrem Tempo – ohne Vorgaben, ohne Hektik.",
  },
];

function SoArbeitenWir() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            So arbeiten wir – klar & strukturiert.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {schritte.map((schritt) => (
            <div key={schritt.nr} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-medium text-primary">
                {schritt.nr}
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium">
                  {schritt.title}
                </h3>
                <p className="mt-2 leading-relaxed text-tagline">
                  {schritt.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="accent-text mt-14 text-center text-xl">
          Nicht schneller, sondern klarer – damit Sie gut entscheiden können.
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
            Beides ist möglich. Für eine ruhige, strukturierte Beratung
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
                <span>Strukturierter Vergleich mehrerer Schlafsysteme</span>
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
              Viele Kundinnen und Kunden aus der Region wählen bewusst
              einen Termin, um verschiedene Optionen in Ruhe zu vergleichen.
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
              Auch ohne Termin sind Sie willkommen. Allerdings kann die
              Beratung dann kürzer ausfallen oder zwischendurch unterbrochen
              werden. Für einen ruhigen, strukturierten Vergleich empfehlen
              wir eine Terminvereinbarung.
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
   6. REGION & EINZUGSGEBIET
   ───────────────────────────────────────────── */
function RegionEinzugsgebiet() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="text-lg leading-relaxed text-tagline">
          Unsere Kundinnen und Kunden kommen aus Bocholt, dem gesamten Kreis
          Borken sowie aus Wesel, Hamminkeln, Dorsten, Schermbeck und der
          niederländischen Grenzregion.
        </p>
        <p className="mt-4 text-sm text-tagline/70">
          Für Informationen auf Niederländisch besuchen Sie{" "}
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
   7. RUHIGER ABSCHLUSS
   ───────────────────────────────────────────── */
function RuhigerAbschluss() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="accent-text text-2xl !text-white/90">
          Guter Schlaf beginnt mit einer guten Entscheidung. Nehmen Sie sich die
          Zeit, die dafür nötig ist.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Am besten mit einem Termin – damit wir uns ganz auf Ihre Fragen
          und Ihr Liegegefühl konzentrieren können.
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
export default function BettenBocholt() {
  return (
    <>
      <Header />
      <main>
        <HeroBetten />
        <Entscheidung />
        <Schlafloesungen />
        <SoArbeitenWir />
        <TerminOderVorbeikommen />
        <RegionEinzugsgebiet />
        <RuhigerAbschluss />
      </main>
      <Footer />
    </>
  );
}
