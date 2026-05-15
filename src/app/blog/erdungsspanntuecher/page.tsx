import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/sections/FaqSection";
import InlineCTA from "@/components/InlineCTA";
import StickyCTA from "@/components/StickyCTA";
import { calendlyUrl } from "@/lib/calendly";

const PUBLISHED = "2026-05-01";
const URL = "https://www.schlafnerds.de/blog/erdungsspanntuecher";
const CALENDLY_URL = calendlyUrl("blog-erdungsspanntuecher");

export const metadata: Metadata = {
  title: "Erdungsspanntücher: Mit Earthing aufladen im Schlaf?",
  description:
    "Mit Earthing im Schlaf aufladen — geht das? Wie Erdungsspanntücher funktionieren, was Studien zeigen und unsere Empfehlung zum Ausprobieren.",
  openGraph: {
    title: "Erdungsspanntücher: Mit Earthing aufladen im Schlaf?",
    description:
      "Earthing im Schlaf: Funktion, Studienlage und Probier-Empfehlung — ohne Heilversprechen.",
    url: URL,
    locale: "de_DE",
    type: "article",
    publishedTime: PUBLISHED,
    images: [
      {
        url: "/images/products/erdung-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Erdverbindung als Inspiration für Erdungsspanntücher",
      },
    ],
  },
  alternates: {
    canonical: URL,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}#article`,
  headline: "Erdungsspanntücher: Mit Earthing aufladen im Schlaf?",
  description:
    "Wie Erdungsspanntücher funktionieren, was die Forschung sagt und für wen Earthing als Schlafritual interessant ist.",
  url: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "de-DE",
  image: "https://www.schlafnerds.de/images/products/erdung-hero.jpg",
  author: {
    "@type": "Organization",
    name: "Schlafnerds",
    url: "https://www.schlafnerds.de",
  },
  publisher: {
    "@type": "Organization",
    name: "Schlafnerds",
    url: "https://www.schlafnerds.de",
    logo: {
      "@type": "ImageObject",
      url: "https://www.schlafnerds.de/logo.png",
    },
  },
  mainEntityOfPage: URL,
};

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
      name: "Blog",
      item: "https://www.schlafnerds.de/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Erdungsspanntücher: Earthing im Schlaf",
      item: URL,
    },
  ],
};

const faqs = [
  {
    question: "Was ist ein Erdungsspanntuch?",
    answer:
      "Ein Erdungsspanntuch sieht aus wie ein normales Spannbetttuch mit eingewebten feinen Silberfäden. Über ein Kabel wird es mit dem Schutzleiter (Erdung) deiner Steckdose verbunden. So entsteht im Schlaf eine elektrische Verbindung zum Erdpotenzial – ähnlich wie barfuß auf einer feuchten Wiese zu stehen.",
  },
  {
    question: "Fließt Strom durch das Erdungsspanntuch?",
    answer:
      "Nein. Das Kabel wird ausschließlich mit dem Schutzleiter deiner Steckdose verbunden – also derselben Erdung, die auch deine Haushaltsgeräte vor Stromschlägen schützt. Es fließt kein Netzstrom durch das Tuch. Wichtig ist nur, dass deine Steckdose einen funktionierenden Schutzleiter hat.",
  },
  {
    question: "Ist Earthing wissenschaftlich belegt?",
    answer:
      "Es gibt rund ein Dutzend Pilotstudien zum Thema Earthing. Die meisten haben kleine Teilnehmerzahlen unter 30 und keine breite, unabhängige Replikation. Methodisch am stärksten ist eine triple-blind Studie der Universität Salzburg (2019, n=22), die Hinweise auf eine schnellere Muskelregeneration bei Sportlern fand. Eine belastbare Evidenzbasis fehlt — wir machen deshalb bewusst keine Gesundheitsversprechen.",
  },
  {
    question: "Hilft Earthing gegen Schlafprobleme?",
    answer:
      "Das können und wollen wir nicht versprechen. Erdung ist kein medizinisches Produkt und ersetzt keine ärztliche Beratung. Manche Menschen berichten von ruhigerem Schlaf oder besserer Regeneration, andere spüren keinen Unterschied. Ob Earthing für dich einen Effekt hat, lässt sich nur durch Ausprobieren herausfinden.",
  },
  {
    question: "Wie nutze ich ein Erdungsspanntuch im Alltag?",
    answer:
      "In drei Schritten: 1) Tuch wie ein normales Spannbetttuch über die Matratze ziehen. 2) Das mitgelieferte Kabel in den Schutzleiter einer geprüften Steckdose stecken. 3) Direkt auf dem Tuch schlafen, sodass die Silberfäden Hautkontakt haben. Mehr ist nicht nötig.",
  },
  {
    question: "Brauche ich eine spezielle Steckdose?",
    answer:
      "Nein. Eine normale Schutzkontakt-Steckdose (Typ F, in Deutschland Standard) reicht aus. Wichtig ist, dass der Schutzleiter funktioniert. Das prüfst du mit einem einfachen Steckdosentester aus dem Baumarkt, ab ca. 10 €. In unserer Beratung zeigen wir dir, wie du das machst.",
  },
  {
    question: "Wie pflege ich ein Erdungsspanntuch?",
    answer:
      "Bei maximal 30 °C waschen, kein Weichspüler, kein Bleichmittel, nicht in den Trockner. Am besten Flüssigwaschmittel verwenden. So bleiben die Silberfäden lange leitfähig.",
  },
  {
    question: "Was ist der Unterschied zwischen Erdungsspanntuch und Erdungslaken?",
    answer:
      "Ein Erdungsspanntuch hat einen Gummizug und sitzt fest auf der Matratze. Ein Erdungslaken ist ein flaches Tuch ohne Gummizug, das du auflegst. Die Erdungsfunktion ist bei beiden identisch — der Unterschied liegt nur im Handling. Spannbetttücher gibt es bei uns in 90×200 und 100×200, andere Größen decken wir mit Erdungslaken ab.",
  },
];

function Hero() {
  return (
    <section className="bg-white pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="accent-text mb-4 text-lg">Schlafwissen</p>
        <h1 className="font-heading text-3xl leading-tight font-normal md:text-5xl md:leading-tight">
          Erdungsspanntücher:<br />
          Mit Earthing aufladen im Schlaf?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-tagline/80">
          Earthing-Spanntücher gibt es seit gut zwanzig Jahren. Manche schwören
          darauf, andere halten es für Esoterik. Was tatsächlich passiert, was
          die Forschung weiß und was nicht – und für wen es ein Schlafritual sein
          kann, das einen Versuch wert ist.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-tagline/80">
          Manche Dinge lassen sich nicht beweisen – aber ausprobieren.
        </p>

        <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
          <Image
            src="/images/products/erdung-hero.jpg"
            alt="Baum auf einer grünen Wiese – Erdverbindung als Inspiration für Erdungsspanntücher"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function WasIstEarthing() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was ist Earthing eigentlich?
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Die Idee hinter Earthing (oder „Grounding") ist alt und einfach: Die
            Erdoberfläche trägt eine leicht negative elektrische Ladung. Wer
            barfuß auf einer feuchten Wiese steht, ist mit dieser Ladung
            verbunden. Im modernen Alltag – auf Laminat, mit Gummisohlen, in
            Gebäuden mit isolierenden Fußböden – fehlt dieser Kontakt fast
            vollständig.
          </p>
          <p>
            Earthing-Spanntücher versuchen, diesen Kontakt im Schlaf
            wiederherzustellen. Statt barfuß im Garten zu stehen, schläfst du
            auf einem Tuch, das elektrisch mit der Erde deines Hauses verbunden
            ist. Acht Stunden lang, jede Nacht.
          </p>
          <p>
            Ob das physiologische Effekte hat, ist die spannende Frage. Die
            elektrische Verbindung selbst ist physikalisch nachweisbar.
          </p>
        </div>
      </div>
    </section>
  );
}

function WieFunktioniertEs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Wie ein Erdungsspanntuch funktioniert.
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Ein Erdungsspanntuch sieht aus wie ein ganz normales Spannbetttuch.
            Der Unterschied: In den Stoff sind feine Silberfäden eingewebt –
            meist als Gitter aus etwa 10&nbsp;% Silber, der Rest Baumwolle.
            Silber ist elektrisch leitfähig.
          </p>
          <p>
            Über ein dünnes Kabel wird das Tuch mit dem Erdungsanschluss deiner
            Steckdose verbunden. Genau dort, wo bei jedem Haushaltsgerät der
            Schutzleiter hingeht. Das Tuch nutzt nichts anderes als diesen
            ohnehin vorhandenen Erdungspfad – er führt direkt ins Erdreich
            unter deinem Haus.
          </p>
          <p>
            <strong>Wichtig:</strong> Es fließt kein Netzstrom durch das Tuch.
            Du wirst nicht „angeschlossen", du bist nicht „elektrifiziert".
            Schutzleiter sind eine Sicherheitsfunktion, kein Stromzufluss.
          </p>
        </div>

        {/* Nerd-Wissen-Box */}
        <div className="mt-10 rounded-xl border border-[#708357]/30 bg-[#708357]/10 p-6">
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
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082"
              />
            </svg>
            Nerd-Wissen
          </p>
          <p className="mt-3 text-sm leading-relaxed text-tagline">
            Die Erdoberfläche trägt eine leicht negative elektrische Ladung.
            Über den Schutzleiter deiner Hausinstallation ist diese Ladung in
            jeder geprüften Schutzkontakt-Steckdose verfügbar. Die Silberfäden
            im Tuch sind elektrisch leitfähig und stellen bei Hautkontakt eine
            Verbindung zum Erdpotenzial her. Ob dieser Ladungsausgleich
            physiologische Effekte hat, ist wissenschaftlich nicht abschließend
            geklärt.
          </p>
        </div>
      </div>
    </section>
  );
}

function WasSagtForschung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was sagt die Forschung?
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Hier wird es nüchtern. Earthing ist ein Thema, das in der
            Schlafmedizin und in den Sportwissenschaften am Rand mitläuft – mit
            wenigen Studien und kleinen Stichproben.
          </p>
          <p>
            Insgesamt existieren rund ein Dutzend Pilotstudien. Die meisten haben
            unter 30 Teilnehmerinnen und Teilnehmer. Untersuchte Effekte reichen
            von verbesserter Muskelregeneration über veränderte
            Cortisol-Tagesprofile bis zu reduzierten Entzündungsmarkern. Die
            Ergebnisse sind teils ermutigend, aber methodisch oft schwach: kleine
            Gruppen, kurze Studiendauern, selten doppelt verblindet, kaum
            unabhängige Replikationen.
          </p>
          <p>
            Methodisch am stärksten ist eine triple-blind Studie der Universität
            Salzburg aus dem Jahr 2019 mit 22 Sportlern. Sie zeigte Hinweise auf
            eine schnellere Muskelregeneration nach exzentrischem Training.
            Vielversprechend, aber mit n=22 noch lange kein Beweis.
          </p>
          <p>
            <strong>Was wir daraus mitnehmen:</strong> Earthing ist nicht
            esoterisch im Sinne von „elektrisch erfunden" – die elektrische
            Verbindung passiert tatsächlich. Ob sie im Körper einen Effekt hat,
            den du spürst, ist offen. Wer ein Wundermittel sucht, ist hier
            falsch. Wer experimentierfreudig ist, hat ein günstiges Werkzeug zum
            Ausprobieren.
          </p>
        </div>
      </div>
    </section>
  );
}

const interests = [
  "ihr Schlafzimmer als bewussten Rückzugsort verstehen",
  "sich für Schlafhygiene und Schlafrituale begeistern",
  "gerne barfuß laufen und diese Verbindung auch nachts spüren wollen",
  "einen naturnahen, bewussten Lebensstil pflegen",
  "neugierig auf neue Ansätze in der Schlafumgebung sind",
  "Sport treiben und auf Regeneration achten",
];

function FuerWenInteressant() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Für wen kann das interessant sein?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-tagline">
          Earthing ist kein Massenthema, sondern eine Nische für Menschen, die
          ihre Schlafumgebung bewusst gestalten. Das Thema könnte für dich
          interessant sein, wenn du …
        </p>

        <ul className="mt-6 space-y-3">
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
              <span>… {item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WasWirBeobachten() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was wir Schlafnerds beobachten.
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Wir Schlafnerds schlafen selbst auf Erdungsspanntüchern. Nach
            langen Sport-Einheiten haben wir den Eindruck, dass wir besser
            regenerieren. Andere in unserem Umfeld merken nichts. Beides ist
            okay.
          </p>
          <p>
            Das ist kein Studienergebnis, sondern persönliche Wahrnehmung. Aber
            wir empfehlen kein Produkt, das wir nicht selbst nutzen. Für uns
            gehört das Erdungsspanntuch in dieselbe Kategorie wie ein guter
            Tee am Abend oder eine konsequente Bildschirmpause: ein Baustein im
            Schlafritual, kein Wundermittel.
          </p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    label: "Schritt 1: Auflegen.",
    text: "Das Erdungsspanntuch wird wie ein normales Spannbetttuch über die Matratze gezogen. Die Silberfäden zeigen nach oben, sodass sie Hautkontakt haben können.",
  },
  {
    label: "Schritt 2: Verbinden.",
    text: "Das mitgelieferte Kabel wird in den Erdungsanschluss einer geprüften Schutzkontakt-Steckdose gesteckt. Kein Strom, kein Risiko – nur der Schutzleiter.",
  },
  {
    label: "Schritt 3: Schlafen.",
    text: "Du liegst direkt auf dem Tuch. Mehr ist nicht nötig. Ob in Unterwäsche oder Schlafanzug ist Geschmackssache – Hautkontakt an den Beinen, Armen oder am Rücken reicht.",
  },
];

function Anwendung() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          So nutzt du es im Alltag.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl bg-soft p-6">
              <p className="font-heading text-lg font-medium">{step.label}</p>
              <p className="mt-3 leading-relaxed text-tagline">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            <strong>Steckdosen-Check zuerst:</strong> Bevor du das Tuch
            anschließt, prüfe, ob der Schutzleiter deiner Steckdose
            funktioniert. Im Baumarkt gibt es einfache Steckdosentester ab ca.
            10 €. In älteren Häusern ist nicht selbstverständlich, dass jede
            Steckdose geerdet ist.
          </p>
          <p>
            <strong>Pflege:</strong> Waschen bei max. 30 °C, kein Weichspüler,
            kein Bleichmittel, nicht in den Trockner. Flüssigwaschmittel ist
            ideal. Weichspüler legt einen Film über die Silberfäden und
            reduziert die Leitfähigkeit – das Tuch funktioniert dann nur noch
            schlechter.
          </p>
        </div>
      </div>
    </section>
  );
}

function WasEsNichtIst() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Was Erdungsspanntücher nicht sind.
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Damit es klar ist: Ein Erdungsspanntuch ist <strong>kein
            medizinisches Produkt</strong>. Es ist nicht zertifiziert, um
            Krankheiten zu heilen, zu behandeln oder zu lindern. Es ersetzt keine
            ärztliche Beratung und keine Therapie.
          </p>
          <p>
            Wenn du unter Schlafstörungen leidest, mit chronischen
            Entzündungen kämpfst oder regelmäßig erschöpft bist, gehört das in
            die Hand einer Ärztin oder eines Arztes. Ein Erdungsspanntuch kann
            ein zusätzlicher Baustein im Schlafritual sein – aber niemals der
            Ersatz für Diagnostik und Behandlung.
          </p>
          <p>
            Genauso wichtig: Wer keine intakte Erdung in der Steckdose hat, hat
            am Ende auch kein Earthing. Vor dem Kauf lohnt sich der
            Steckdosen-Check immer.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChecklisteAufEinenBlick() {
  const items = [
    "Earthing imitiert den natürlichen Erdkontakt im Schlaf – über Silberfäden und Schutzleiter.",
    "Es fließt kein Netzstrom. Nur der Erdungspfad deiner Steckdose wird genutzt.",
    "Studienlage: ~12 Pilotstudien, kleine Stichproben. Salzburg 2019 (n=22, triple-blind) ist die methodisch beste.",
    "Keine Heilversprechen. Earthing ist kein medizinisches Produkt.",
    "Funktioniert nur, wenn deine Steckdose einen geprüften Schutzleiter hat.",
    "Pflege: 30 °C, kein Weichspüler, nicht in den Trockner.",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Earthing auf einen Blick.
        </h2>
        <div className="mt-8 rounded-2xl bg-soft p-6 md:p-8">
          <ul className="space-y-4">
            {items.map((it, i) => (
              <li
                key={i}
                className="flex items-start gap-3 leading-relaxed text-tagline"
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
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Vertiefung() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Wenn du es ausprobieren möchtest.
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-tagline">
          <p>
            Earthing-Spanntücher sind kein teures Experiment, aber auch keine
            Anschaffung, die du blind machen solltest. Im Schlafnerds-Laden in
            Bocholt zeigen wir dir das Tuch, erklären die Technik und ordnen das
            Thema mit der Studienlage ein. Wenn es nicht zu dir passt, sagen
            wir das auch.
          </p>
          <p>
            Mehr zur Verfügbarkeit, Größen und unserer Empfehlung findest du
            auf unserer{" "}
            <a
              href="/erdungsspanntuecher-bocholt"
              className="font-medium underline hover:text-primary"
            >
              Erdungsspanntücher-Seite
            </a>
            . Persönliche Beratung im Laden kostet nichts und verpflichtet zu
            nichts.
          </p>
          <p>
            Earthing ersetzt keine gute Schlafhygiene. Wer die Basics zuerst
            sauber haben will, findet hier die wichtigsten Regeln:{" "}
            <a
              href="/blog/schlafhygiene"
              className="font-medium underline hover:text-primary"
            >
              10 Schlafhygiene-Regeln, die wirklich helfen
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Autorenbox() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-start gap-4 rounded-2xl bg-soft p-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
            SN
          </div>
          <div>
            <p className="font-heading text-lg font-medium text-tagline">
              Schlafnerds
            </p>
            <p className="mt-1 text-sm leading-relaxed text-tagline/80">
              Persönliche Schlafberatung in Bocholt. Wir testen Schlafprodukte
              selbst, ordnen die Studienlage ein und empfehlen nur, was uns
              überzeugt – auch wenn das manchmal heißt: lass es bleiben.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAFooter() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="accent-text text-2xl !text-white/90">
          Ein Erdungsspanntuch ist kein Wundermittel. Aber vielleicht ein
          Baustein, der zu deinem Schlafritual passt.
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
            href="/erdungsspanntuecher-bocholt"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 font-body text-base font-semibold !text-white transition-colors hover:bg-white/10"
          >
            Erdungsspanntücher entdecken
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ErdungsspanntuecherBlog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <WasIstEarthing />
        <WieFunktioniertEs />
        <WasSagtForschung />
        <FuerWenInteressant />
        <WasWirBeobachten />
        <InlineCTA
          headline="Earthing einmal selbst probieren?"
          subline="Im persönlichen Termin zeigen wir dir das Tuch, erklären die Technik und ordnen die Studienlage fachlich ein."
          utmSource="blog-erdungsspanntuecher-inline"
        />
        <Anwendung />
        <WasEsNichtIst />
        <ChecklisteAufEinenBlick />
        <Vertiefung />
        <FaqSection faqs={faqs} />
        <Autorenbox />
        <CTAFooter />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
