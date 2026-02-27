import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeitereLoesungen from "@/components/sections/WeitereLoesungen";

export const metadata: Metadata = {
  title: "Erdungsspanntücher Bocholt – Beratung | Schlafnerds",
  description:
    "Erdungsspanntücher bei Schlafnerds in Bocholt. Persönliche Beratung, ehrliche Einordnung und ein Schlaf-Ritual, das neugierig macht. Jetzt Termin vereinbaren.",
  openGraph: {
    title: "Erdungsspanntücher Bocholt – Beratung | Schlafnerds",
    description:
      "Erdungsspanntücher bei Schlafnerds in Bocholt. Persönliche Beratung und ein Schlaf-Ritual mit Erdverbindung.",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/erdungsspanntuecher-bocholt",
  },
};

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
function HeroErdung() {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="accent-text mb-4 text-lg">
              Schlafnerds Fachgeschäft in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Erdungsspanntücher –<br />
              ein Schlaf-Ritual mit Erdverbindung.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Manche Dinge lassen sich nicht beweisen – aber ausprobieren. Ein
              Erdungsspanntuch verbindet Ihr Bett mit dem Schutzleiter Ihrer
              Steckdose. Was dabei passiert, ordnen wir gemeinsam ein.
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
                src="/images/products/erdung-hero.jpg"
                alt="Baum auf einer grünen Wiese – Erdverbindung als Inspiration für Erdungsspanntücher"
                width={800}
                height={533}
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
   2. WAS IST EIN ERDUNGSSPANNTUCH?
   ───────────────────────────────────────────── */
function WasIstErdung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
        <div>
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was ist ein Erdungsspanntuch?
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Ein Erdungsspanntuch sieht aus wie ein normales Spannbetttuch – mit
            einem Unterschied: In den Stoff sind feine Silberfäden eingewebt.
            Über ein Kabel wird das Tuch mit dem Erdungsanschluss Ihrer
            Steckdose verbunden.
          </p>
          <p>
            <strong>Wichtig:</strong> Es fließt kein Strom. Der Anschluss nutzt
            ausschließlich die Schutzleiter-Funktion – also denselben
            Erdungspfad, der auch Ihre Haushaltsgeräte schützt.
          </p>
          <p>
            Die Idee dahinter: Die Erdoberfläche trägt eine leicht negative
            elektrische Ladung. Wer barfuß auf einer Wiese steht, ist mit dieser
            Ladung verbunden. Im Alltag – auf Laminat, mit Gummisohlen, in
            Gebäuden – fehlt dieser Kontakt. Ein Erdungsspanntuch soll diesen
            Kontakt im Schlaf herstellen.
          </p>
        </div>
        </div>

          <div className="overflow-hidden rounded-2xl md:w-80">
            <Image
              src="/images/products/erdungsspanntuch.jpg"
              alt="Erdungsspanntuch mit sichtbarem Silberfaden-Gitter – bei Schlafnerds in Bocholt"
              width={400}
              height={394}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Nerd-Lab Note */}
        <div className="mt-10 max-w-3xl rounded-xl border border-[#708357]/30 bg-[#708357]/10 p-6">
          <p className="flex items-center gap-2 font-heading text-sm font-semibold text-[#5a6b46]">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            Nerd-Wissen
          </p>
          <p className="mt-3 text-sm leading-relaxed text-tagline">
            Die Erdoberfläche trägt eine leicht negative elektrische Ladung. Beim
            Barfußlaufen auf feuchtem Gras fließen freie Elektronen über die
            Haut. Erdungsspanntücher imitieren diesen Pfad über den
            Schutzleiter. Ob das im Schlaf messbare Effekte hat, ist Gegenstand
            laufender Forschung.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. SO NUTZT MAN ES IM ALLTAG
   ───────────────────────────────────────────── */
const steps = [
  {
    label: "Schritt 1: Auflegen.",
    text: "Das Erdungsspanntuch wird wie ein normales Spannbetttuch über die Matratze gezogen.",
  },
  {
    label: "Schritt 2: Verbinden.",
    text: "Das mitgelieferte Kabel wird in den Erdungsanschluss einer geprüften Schutzkontakt-Steckdose gesteckt. Kein Strom, kein Risiko.",
  },
  {
    label: "Schritt 3: Schlafen.",
    text: "Sie liegen direkt auf dem Tuch – die Silberfäden haben Hautkontakt. Mehr ist nicht nötig.",
  },
];

function Alltagsnutzung() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          So nutzt man es im Alltag.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl bg-soft p-6">
              <p className="font-heading text-lg font-medium">{step.label}</p>
              <p className="mt-3 leading-relaxed text-tagline">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            <strong>Tipp der Schlafnerds:</strong> Prüfen Sie vorher, ob Ihre
            Steckdose einen funktionierenden Schutzleiter hat. Im Fachhandel
            gibt es einfache Steckdosentester ab ca. 10&nbsp;€. In der Beratung
            zeigen wir Ihnen, wie das funktioniert.
          </p>
          <p>
            <strong>Pflege:</strong> Waschen bei max. 30&nbsp;°C, kein
            Weichspüler, kein Bleichmittel, nicht in den Trockner. Ideal:
            Flüssigwaschmittel verwenden.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. FÜR WEN KANN DAS INTERESSANT SEIN?
   ───────────────────────────────────────────── */
const interests = [
  "nach Ideen suchen, aus Ihrem Bett eine natürliche Ladestation zu machen",
  "sich für Schlafhygiene und Schlafrituale begeistern",
  "Ihr Schlafzimmer als bewussten Rückzugsort verstehen",
  "neugierig auf neue Ansätze in der Schlafumgebung sind",
  "gerne barfuß laufen und diese Verbindung auch nachts spüren möchten",
  "einen naturnahen, bewussten Lebensstil pflegen",
];

function FuerWenInteressant() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Für wen kann das interessant sein?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-tagline">
          Erdung ist ein Baustein für Menschen, die ihre Schlafumgebung bewusst
          gestalten möchten.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-tagline">
          Das Thema könnte für Sie interessant sein, wenn Sie ...
        </p>

        <ul className="mt-6 max-w-3xl space-y-3">
          {interests.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg leading-relaxed text-tagline"
            >
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-[#708357]"
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
              <span>... {item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. WAS WEISS DIE WISSENSCHAFT DARÜBER?
   ───────────────────────────────────────────── */
function GrenzenEinordnung() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was weiß die Wissenschaft darüber?
        </h2>

        <div className="mt-8 max-w-3xl rounded-xl border-2 border-[#708357]/40 bg-[#708357]/5 p-8">
          <div className="space-y-5 text-lg leading-relaxed text-tagline">
            <p>
              Es gibt rund ein Dutzend Pilotstudien, aber keine großen,
              unabhängig replizierten Untersuchungen. Die meisten Studien haben
              unter 30 Teilnehmer. Die einzige Studie mit triple-blind Design
              stammt von der Universität Salzburg (2019) und zeigt
              vielversprechende, aber vorläufige Ergebnisse zur
              Muskelregeneration.
            </p>
            <p>
              <strong>Was wir sagen können:</strong> Ein Erdungsspanntuch
              verbindet Sie physikalisch mit dem Erdpotenzial über den
              Schutzleiter Ihrer Steckdose. Das ist elektrotechnisch
              nachweisbar. Ob Sie es spüren, ob es Ihren Schlaf verändert — das
              ist individuell. Wir Schlafnerds schlafen darauf und wir haben den Eindruck, dass es uns in der Regeneration unterstützt.
            </p>
          </div>
        </div>

        {/* Studien-Platzhalter */}
        <div className="mt-8 max-w-3xl rounded-xl border-2 border-dashed border-gray-300 p-6">
          <p className="text-sm italic text-tagline/70">
            Studienlage wird fortlaufend geprüft. Dieser Bereich wird ergänzt,
            sobald eine fundierte Einordnung vorliegt.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. VERFÜGBARE GRÖSSEN & VARIANTEN
   ───────────────────────────────────────────── */
function ProduktGroessen() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Verfügbare Größen &amp; Varianten.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1: Spannbetttuch */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8">
            <h3 className="font-heading text-xl font-medium">
              Erdungsspanntuch
            </h3>
            <p className="mt-1 text-sm text-tagline/70">
              Spannbetttuch mit Gummizug · 100&nbsp;% Baumwolle, 10&nbsp;% Silber
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#708357]/10 px-4 py-1.5 text-sm font-medium text-[#5a6b46]">
                90 × 200 cm
              </span>
              <span className="rounded-full bg-[#708357]/10 px-4 py-1.5 text-sm font-medium text-[#5a6b46]">
                100 × 200 cm
              </span>
            </div>
            <p className="mt-4 text-sm font-medium text-[#708357]">
              Sofort verfügbar
            </p>
          </div>

          {/* Card 2: Erdungslaken */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8">
            <h3 className="font-heading text-xl font-medium">Erdungslaken</h3>
            <p className="mt-1 text-sm text-tagline/70">
              Flaches Laken ohne Gummizug · 100&nbsp;% Baumwolle, 10&nbsp;% Silber
            </p>
            <p className="mt-6 leading-relaxed text-tagline">
              Für Matratzen in 140&nbsp;×&nbsp;200, 160&nbsp;×&nbsp;200,
              180&nbsp;×&nbsp;200 oder Sondermaßen. Die Erdungsfunktion ist
              identisch – der Unterschied liegt im Handling.
            </p>
            <p className="mt-4 text-sm text-tagline/70">
              Weitere Größen auf Anfrage
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-tagline">
          <strong>Der Unterschied:</strong> Ein Spannbetttuch sitzt fest und
          verrutscht nicht. Ein Laken liegt flach auf und muss ggf.
          nachgerichtet werden. Die Erdungsfunktion ist identisch – der
          Unterschied liegt im Handling.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-tagline">
          Erdungslaken können wir in weiteren Größen bestellen. Sprechen Sie uns
          an.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. BERATUNG & AUFTANKEN IM SCHLAF
   ───────────────────────────────────────────── */
function BeratungAuftanken() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Beratung &amp; Auftanken im Schlaf.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-tagline">
          Erdung ist ein Thema, das Fragen aufwirft. Genau dafür sind wir da.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-tagline">
          In unserer Beratung zeigen wir Ihnen das Produkt, erklären die Technik
          dahinter und ordnen das Thema ein.
        </p>
        <p className="accent-text mt-6 text-xl">
          Auftanken im Schlaf – für uns bedeutet das: Ihr Schlafsystem so
          gestalten, dass Sie optimal regenerieren können.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   8. TERMIN ODER DIREKT VORBEIKOMMEN
   ───────────────────────────────────────────── */
function TerminOderVorbeikommen() {
  return (
    <section id="vorbeikommen" className="bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Termin oder direkt vorbeikommen.
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[1.2fr_1fr]">
          {/* Kachel A: Termin */}
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
              Wir nehmen uns Zeit für Ihre Fragen rund um Erdung, erklären die
              Technik und ordnen das Thema ein.
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
            </ul>

            <div className="mt-auto pt-6">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Beratungstermin vereinbaren
              </a>
            </div>
          </div>

          {/* Kachel B: Direkt vorbeikommen */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-8">
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
              Auch ohne Termin möglich. Für eine ausführliche Beratung empfehlen
              wir jedoch einen Termin.
            </p>

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

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
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
   9. FAQ
   ───────────────────────────────────────────── */
const faqData = [
  {
    question: "Fließt Strom durch das Erdungsspanntuch?",
    answer:
      "Nein. Das Kabel wird ausschließlich mit dem Schutzleiter (Erdung) Ihrer Steckdose verbunden. Es fließt kein Netzstrom durch das Tuch. Die Verbindung funktioniert wie die Erdung an jedem Haushaltsgerät – nur ohne Gerät.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Erdungsspanntuch und Erdungslaken?",
    answer:
      "Ein Erdungsspanntuch hat einen Gummizug und sitzt fest auf der Matratze. Ein Erdungslaken ist ein flaches Tuch ohne Gummizug, das aufgelegt wird. Die Erdungsfunktion ist bei beiden identisch. Spannbetttücher gibt es bei uns in 90×200 und 100×200. Für andere Größen bieten wir Erdungslaken an.",
  },
  {
    question: "Brauche ich eine spezielle Steckdose?",
    answer:
      "Nein – eine normale Schutzkontakt-Steckdose (Typ F, in Deutschland Standard) reicht aus. Wichtig ist, dass der Schutzleiter funktioniert. Das können Sie mit einem einfachen Steckdosentester prüfen, den es im Baumarkt ab ca. 10 € gibt.",
  },
  {
    question: "Ist Erdung wissenschaftlich belegt?",
    answer:
      "Es gibt Pilotstudien zum Thema, aber keine breite, unabhängige Evidenzbasis. Die meisten Studien haben kleine Teilnehmerzahlen. Die methodisch stärkste Arbeit — eine triple-blind Studie der Universität Salzburg (2019, n=22) — fand Hinweise auf schnellere Muskelregeneration bei Sportlern. Wir prüfen die Studienlage fortlaufend und machen bewusst keine Gesundheitsversprechen.",
  },
  {
    question: "Kann ich das Erdungsspanntuch waschen?",
    answer:
      "Ja. Waschen bei max. 30 °C, kein Weichspüler, kein Bleichmittel, nicht in den Trockner. Am besten ein Flüssigwaschmittel verwenden.",
  },
  {
    question: "Nerd-Frage: Wie funktioniert Erdung physikalisch?",
    answer:
      "Die Erdoberfläche trägt eine leicht negative elektrische Ladung. Über den Schutzleiter Ihrer Hausinstallation ist diese Ladung in jeder geprüften Schutzkontakt-Steckdose verfügbar. Die Silberfäden im Tuch sind elektrisch leitfähig und stellen bei Hautkontakt eine Verbindung zum Erdpotenzial her. Ob dieser Ladungsausgleich physiologische Effekte hat, ist wissenschaftlich nicht abschließend geklärt.",
  },
  {
    question: "Hilft ein Erdungsspanntuch gegen Schlafprobleme?",
    answer:
      "Das können und wollen wir nicht versprechen. Erdung ist kein medizinisches Produkt und ersetzt keine ärztliche Beratung. Manche Menschen integrieren Erdung als Teil ihrer Schlafhygiene und Abendroutine. Ob es für Sie einen spürbaren Unterschied macht, lässt sich nur durch Ausprobieren herausfinden.",
  },
  {
    question: "Kann ich ein Erdungsspanntuch bei Schlafnerds testen?",
    answer:
      "Ja. In unserer Beratung zeigen wir Ihnen das Produkt, erklären die Technik und beantworten Ihre Fragen. Vereinbaren Sie einen Termin oder kommen Sie direkt vorbei.",
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
   10. REGION & NÄHE
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
   11. RUHIGER ABSCHLUSS
   ───────────────────────────────────────────── */
function RuhigerAbschluss() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="accent-text text-2xl !text-white/90">
          Ein Erdungsspanntuch ist kein Wundermittel. Aber vielleicht ein
          Baustein, der zu Ihrem Schlaf-Ritual passt. Lassen Sie uns darüber
          sprechen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
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
   BREADCRUMB SCHEMA
   ───────────────────────────────────────────── */
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
      name: "Erdungsspanntücher",
      item: "https://www.schlafnerds.de/erdungsspanntuecher-bocholt",
    },
  ],
};

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function ErdungsspanntucherBocholt() {
  return (
    <>
      <Header />
      <main>
        <HeroErdung />
        <WasIstErdung />
        <Alltagsnutzung />
        <FuerWenInteressant />
        <GrenzenEinordnung />
        <ProduktGroessen />
        <BeratungAuftanken />
        <TerminOderVorbeikommen />
        <FaqSection />
        <WeitereLoesungen currentPath="/erdungsspanntuecher-bocholt" />
        <RegionNaehe />
        <RuhigerAbschluss />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
