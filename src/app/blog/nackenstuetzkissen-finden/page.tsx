import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title:
    "Nackenstützkissen finden: Das richtige Kissen bei Nackenschmerzen | Schlafnerds",
  description:
    "Was ein gutes Nackenstützkissen leisten muss, welche Materialien passen und warum der richtige Kauf nicht online funktioniert – der Leitfaden der Schlafnerds aus Bocholt.",
  openGraph: {
    title:
      "Nackenstützkissen finden: Das richtige Kissen bei Nackenschmerzen | Schlafnerds",
    description:
      "Worauf es beim Nackenstützkissen wirklich ankommt: Material, Schlafposition, Anpassung. Der Leitfaden der Schlafnerds.",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.schlafnerds.de/images/products/nackenstuetzkissen-hero.png",
        width: 1200,
        height: 630,
        alt: "Ergonomisches Nackenstützkissen mit Tencel-Bezug bei Schlafnerds in Bocholt",
      },
    ],
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/nackenstuetzkissen-finden",
    languages: {
      "de-DE": "https://www.schlafnerds.de/blog/nackenstuetzkissen-finden",
      "nl-NL": "https://www.slaapnerds.nl/blog/nekkussen-vinden",
    },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Das passende Nackenstützkissen finden: Worauf es wirklich ankommt",
  description:
    "Was ein gutes Nackenstützkissen leisten muss, welche Materialien passen und warum der richtige Kauf nicht online funktioniert – der Leitfaden der Schlafnerds aus Bocholt.",
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
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.schlafnerds.de/blog/nackenstuetzkissen-finden",
  },
  image:
    "https://www.schlafnerds.de/images/products/nackenstuetzkissen-hero.png",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://www.schlafnerds.de/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Schlafwissen",
      item: "https://www.schlafnerds.de/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Das passende Nackenstützkissen finden",
      item: "https://www.schlafnerds.de/blog/nackenstuetzkissen-finden",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "So findest du das passende Nackenstützkissen",
  description:
    "In vier Schritten zum richtigen Nackenstützkissen – der Beratungsablauf bei den Schlafnerds in Bocholt.",
  totalTime: "PT60M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Körperstatik-Analyse",
      text: "Schulterbreite, Nackenform und Haltung im Stehen und Liegen werden betrachtet. Individuelle Besonderheiten fließen direkt in die Empfehlung ein.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Schlafsituation erfassen",
      text: "Matratze, Alter, Härte, Schlafposition und Vorerkrankungen werden erfasst – all das beeinflusst die Kissenwahl.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Probeliegen mit verschiedenen Modellen",
      text: "Drei bis fünf Kissen werden nebeneinander getestet, die Höhe zentimetergenau angepasst. Unterschiede werden direkt spürbar.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Gemeinsame Empfehlung",
      text: "Fachliche Einschätzung und persönliches Liegegefühl werden zusammengeführt. Die Entscheidung trifft der Kunde. Bei Bedarf kommt das Kissentaxi direkt zu ihm nach Hause.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welches Kissen ist das beste bei Nackenschmerzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pauschal lässt sich das nicht sagen – entscheidend sind Schlafposition, Schulterbreite und Härte der eigenen Matratze. Seitenschläfer brauchen meist ein höheres Kissen (7–12 cm), Rückenschläfer ein flacheres mit ergonomischer Kontur. Wenn Nackenschmerzen morgens stärker sind als abends, ist das Kissen häufig zu hoch oder zu flach – ein Probeliegen mit verschiedenen Modellen klärt das schnell.",
      },
    },
    {
      "@type": "Question",
      name: "Wie finde ich das richtige Nackenstützkissen bei Nackenschmerzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durch eine persönliche Beratung, die Schulterbreite, Schlafposition und Matratze zusammen betrachtet. Allein aus Online-Informationen lässt sich die passende Kombination nicht bestimmen.",
      },
    },
    {
      "@type": "Question",
      name: "Welches Kissen ist das beste für Seitenschläfer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Kissen mit meist 7 bis 12 Zentimetern Höhe, das die Lücke zwischen Kopf und Matratze exakt ausfüllt. Die genaue Zahl hängt von Schulterbreite und Einsinktiefe der Matratze ab.",
      },
    },
    {
      "@type": "Question",
      name: "Hilft ein Nackenstützkissen wirklich bei Verspannungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wenn die Ursache ein falsch dimensioniertes Kissen ist: ja, meist innerhalb weniger Tage. Bei anderen Ursachen (Matratze, Haltung, Stress) bringt ein neues Kissen allein keine Besserung.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet eine Kissenberatung bei den Schlafnerds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Beratung selbst ist für Sie kostenfrei. Bezahlt wird nur das Kissen, für das Sie sich entscheiden.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich ein Kissen auch zu Hause testen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mit dem Kissentaxi kommen wir direkt zu Ihnen und bringen eine Auswahl passender Kissen mit – so können Sie auf Ihrer eigenen Matratze vergleichen.",
      },
    },
  ],
};

interface Mistake {
  title: string;
  text: string;
}

const mistakes: Mistake[] = [
  {
    title: "Fehler 1 – Das Kissen ist zu hoch oder zu flach",
    text: "Der häufigste Grund für Nackenschmerzen. Ein zu hohes Kissen knickt die Halswirbelsäule seitlich ab, ein zu flaches lässt den Kopf durchsacken. Die richtige Höhe hängt von Schulterbreite, Schlafposition und Einsinktiefe der Matratze ab – und genau deshalb lässt sie sich nicht aus einer Tabelle ablesen.",
  },
  {
    title: "Fehler 2 – Material statt Passform",
    text: "Visco-Schaum, Kaltschaum, Latex – die Material-Welt ist groß. Viele kaufen nach Material, weil ein Test oder eine Empfehlung das bestimmte Produkt hervorhob. Das Problem: Material allein macht kein Kissen gut. Ein hervorragendes Visco-Kissen in der falschen Höhe bleibt ein falsches Kissen.",
  },
  {
    title: "Fehler 3 – Online-Kauf ohne Probeliegen",
    text: "Kissen sind Individualprodukte. Was zwei Nachbarn mit ähnlicher Körpergröße passt, kann völlig unterschiedlich sein. Ohne Probeliegen auf der eigenen Matratze bleibt Kissenkauf Glückssache.",
  },
];

interface Material {
  name: string;
  text: string;
}

const materials: Material[] = [
  {
    name: "Visco-Schaum (Memory Foam)",
    text: "Formt sich langsam an den Kopf an, druckentlastend. Wärmestau möglich, da das Material Wärme speichert.",
  },
  {
    name: "Kaltschaum",
    text: "Punktelastisch, formstabil, atmungsaktiv. Reagiert schneller auf Bewegungen als Visco. Gutes Allround-Material, vor allem für Wechselschläfer.",
  },
  {
    name: "Latex",
    text: "Sehr elastisch, gute Stützkraft, kühlende Eigenschaften. Relativ schwer. Oft bevorzugt von Seitenschläfern, die einen festen Gegenhalt brauchen.",
  },
  {
    name: "Daune / Feder",
    text: "Weich, formbar, klassisch. Wenig Stützwirkung – für Menschen mit Nackenproblemen meist nicht geeignet.",
  },
];

interface Position {
  name: string;
  text: string;
}

const positions: Position[] = [
  {
    name: "Seitenschläfer",
    text: "Brauchen ein Kissen, das die Lücke zwischen Kopf und Matratze exakt ausfüllt. Je nach Schulterbreite und Matratzenhärte liegt das meist zwischen 7 und 12 Zentimetern. Zu flach: Die Schulter wird überlastet. Zu hoch: Die Halswirbelsäule knickt ab.",
  },
  {
    name: "Rückenschläfer",
    text: "Brauchen ein Kissen, das den Kopf leicht stützt, ohne ihn nach vorn zu drücken. Die natürliche Krümmung der Halswirbelsäule soll erhalten bleiben. Meist funktionieren flachere, ergonomisch geformte Kissen gut.",
  },
  {
    name: "Bauchschläfer",
    text: "Eine anstrengende Position für die Halswirbelsäule, weil der Kopf zur Seite gedreht wird. Wenn schon Bauchlage, dann möglichst flach oder ganz ohne Kissen – sonst wird der Nacken über Stunden überstreckt.",
  },
  {
    name: "Wechselschläfer",
    text: "Die Mehrheit der Menschen. Für sie sind Kissen sinnvoll, die mehrere Positionen tolerieren – oder zweiteilige Systeme, die Rücken- und Seitenlage gleichermaßen stützen.",
  },
];

interface Step {
  number: number;
  title: string;
  text: string;
}

const beratungsSteps: Step[] = [
  {
    number: 1,
    title: "Körperstatik-Analyse",
    text: "Wir schauen uns Schulterbreite, Nackenform und Haltung im Stehen und Liegen an. Individuelle Besonderheiten – zum Beispiel eine verkürzte Muskulatur auf einer Seite – fließen direkt in die Empfehlung ein.",
  },
  {
    number: 2,
    title: "Schlafsituation erfassen",
    text: "Welche Matratze liegt zu Hause? Wie alt ist sie, wie hart? Schläft man allein oder zu zweit, dreht man sich nachts, gibt es Vorerkrankungen an Nacken oder Schulter? All das beeinflusst die Kissenwahl.",
  },
  {
    number: 3,
    title: "Probeliegen mit verschiedenen Modellen",
    text: "Sie testen drei bis fünf Kissen nebeneinander – auf einer Matratze, die Ihrer zu Hause möglichst nahekommt. Die Höhe passen wir zentimetergenau an. Unterschiede werden direkt spürbar.",
  },
  {
    number: 4,
    title: "Gemeinsame Empfehlung",
    text: "Wir geben unsere Einschätzung, Sie bringen Ihr Liegegefühl ein. Die Entscheidung treffen Sie – wir beraten. Bei Bedarf kommen wir mit dem Kissentaxi auch in Ihr eigenes Schlafzimmer und setzen die Beratung direkt auf Ihrer Matratze fort.",
  },
];

export default function NackenstuetzkissenFindenPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlafwissen</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Das passende Nackenstützkissen finden:
            <br />
            Worauf es wirklich ankommt.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            <strong className="text-tagline">Welches Kissen bei Nackenschmerzen?</strong>{" "}
            Pauschal lässt sich das nicht beantworten – und genau das ist das
            Problem mit Online-Tipps. Wer morgens mit Nackenschmerzen aufwacht,
            sucht die Ursache oft an der falschen Stelle. Mal ist das Kissen zu
            hoch oder zu flach, mal fehlt der Matratze die passende Stützung.
            Häufig liegt es am Zusammenspiel aus beidem – und genau deshalb
            lässt sich das passende Nackenstützkissen nicht online bestimmen.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Dieser Leitfaden erklärt, worauf es beim Kissen wirklich ankommt:
            Materialwahl, Schlafposition, Anpassung. Und warum der Weg zum
            richtigen Nackenstützkissen meist über eine persönliche Beratung
            führt – nicht über die Bewertungsliste im Shop.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/products/nackenstuetzkissen-hero.png"
              alt="Ergonomisches Nackenstützkissen mit Tencel-Bezug bei Schlafnerds in Bocholt"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </section>

        {/* Kurzfassung + Inhaltsverzeichnis */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <div className="rounded-xl bg-soft p-6 md:p-8">
            <h2 className="font-heading text-lg font-normal text-tagline">
              Das Wichtigste in Kürze
            </h2>
            <ul className="mt-4 space-y-2 text-tagline/80">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Das passende Kissen hängt von Schlafposition, Schulterbreite
                  und Matratze ab – nicht vom Material allein.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Seitenschläfer brauchen meist 7–12 cm Kissenhöhe,
                  Rückenschläfer flachere ergonomische Kissen.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Online-Kauf scheitert meist am fehlenden Probeliegen auf der
                  eigenen Matratze.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Eine Beratung bei den Schlafnerds dauert 45–60 Min:
                  Körperstatik-Analyse, Probeliegen, gemeinsame Empfehlung.
                </span>
              </li>
            </ul>
          </div>

          <nav aria-label="Inhaltsverzeichnis" className="mt-8">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              In diesem Artikel
            </p>
            <ol className="mt-3 space-y-1.5 text-tagline/80">
              <li>
                1.{" "}
                <a
                  href="#anatomie"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Anatomie: Was muss ein Nackenstützkissen leisten?
                </a>
              </li>
              <li>
                2.{" "}
                <a
                  href="#fehler"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Drei häufige Fehler beim Kissenkauf
                </a>
              </li>
              <li>
                3.{" "}
                <a
                  href="#material"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Material: Die wichtigsten Füllungen im Überblick
                </a>
              </li>
              <li>
                4.{" "}
                <a
                  href="#schlafposition"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Schlafposition: Der wichtigste Faktor
                </a>
              </li>
              <li>
                5.{" "}
                <a
                  href="#online-kauf"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Warum Online-Kauf bei Kissen oft scheitert
                </a>
              </li>
              <li>
                6.{" "}
                <a
                  href="#matratze-oder-kissen"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Matratze oder Kissen – was ist die Ursache?
                </a>
              </li>
              <li>
                7.{" "}
                <a
                  href="#beratung"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Schritt für Schritt zum richtigen Kissen
                </a>
              </li>
              <li>
                8.{" "}
                <a
                  href="#faq"
                  className="underline decoration-primary/30 hover:decoration-primary"
                >
                  Häufige Fragen
                </a>
              </li>
            </ol>
          </nav>
        </section>

        {/* 1. Anatomie */}
        <section
          id="anatomie"
          className="mx-auto max-w-3xl px-6 pb-16 scroll-mt-28"
        >
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Anatomie: Was muss ein Nackenstützkissen leisten?
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Ein Kissen hat eine scheinbar simple Aufgabe: den Kopf so
              stützen, dass die Halswirbelsäule in neutraler Position liegt –
              also in einer geraden Linie mit dem Rücken. Klingt trivial, ist
              es nicht.
            </p>
            <p>
              Der menschliche Kopf wiegt etwa fünf Kilogramm. Im Liegen lastet
              dieses Gewicht punktuell auf Nackenwirbeln, Muskeln und
              Bandscheiben. Stimmt die Kissenhöhe nicht mit der Schlafposition
              und der Matratze überein, kippt die Halswirbelsäule ab. Die
              Muskulatur arbeitet nachts gegen diese Fehlhaltung – und meldet
              sich morgens mit Verspannung, Steifheit oder Kopfschmerzen.
            </p>
            <p>Ein gutes Nackenstützkissen erfüllt drei Anforderungen:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-tagline">Höhe</strong>, die zur
                Schlafposition und zur Einsinktiefe der Matratze passt
              </li>
              <li>
                <strong className="text-tagline">Festigkeit</strong>, die den
                Kopf trägt, ohne dass er durchsackt
              </li>
              <li>
                <strong className="text-tagline">Form</strong>, die Nacken und
                Kopf unterschiedlich stützt (ergonomische Kontur)
              </li>
            </ul>
            <p>
              Diese drei Faktoren lassen sich nicht unabhängig voneinander
              wählen – sie greifen ineinander.
            </p>
          </div>
        </section>

        {/* 2. Häufige Fehler */}
        <section id="fehler" className="scroll-mt-28 bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Drei häufige Fehler beim Kissenkauf
            </h2>
            <div className="mt-8 space-y-6">
              {mistakes.map((m, i) => (
                <article
                  key={i}
                  className="rounded-xl border-2 border-gray-100 bg-white p-6"
                >
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-tagline/80">
                    {m.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Material */}
        <section
          id="material"
          className="mx-auto max-w-3xl scroll-mt-28 px-6 py-16 md:py-20"
        >
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Material: Die wichtigsten Kissen-Füllungen im Überblick
          </h2>
          <div className="mt-8 space-y-5">
            {materials.map((m, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-primary/40 bg-soft/60 px-5 py-4"
              >
                <p className="font-heading text-lg font-normal text-tagline">
                  {m.name}
                </p>
                <p className="mt-2 leading-relaxed text-tagline/80">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Schlafposition */}
        <section id="schlafposition" className="scroll-mt-28 bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Schlafposition: Der wichtigste Faktor
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {positions.map((p, i) => (
                <article
                  key={i}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-normal text-tagline">
                    {p.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-tagline/80">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Online-Kauf */}
        <section
          id="online-kauf"
          className="mx-auto max-w-3xl scroll-mt-28 px-6 py-16 md:py-20"
        >
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Warum Online-Kauf bei Kissen oft scheitert
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Im Gegensatz zu einer Matratze, an deren Härte man sich in den
              ersten Wochen gewöhnen kann, ist Passform beim Kissen unmittelbar
              spürbar. Die ersten Nächte auf einem falschen Kissen sind
              unangenehm – und die wenigsten halten eine 30-Tage-Testphase
              durch, um zu prüfen, ob sich die Situation bessert.
            </p>
            <p>
              Wer drei oder vier Kissen nacheinander bestellt und nach einer
              Nacht zurückschickt, hat am Ende kein Kissen gefunden – nur Zeit
              und Versandkosten investiert.
            </p>
            <p>
              Der direkte Vergleich auf einer vergleichbaren Matratze, mit zwei
              oder drei Modellen nebeneinander, ersetzt diesen Prozess durch
              eine halbstündige Beratung – und eine fundierte Entscheidung.
            </p>
          </div>
        </section>

        {/* 6. Matratze oder Kissen */}
        <section id="matratze-oder-kissen" className="scroll-mt-28 bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Matratze oder Kissen – was ist die Ursache?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
              <p>
                Nicht immer ist das Kissen das Problem. Manchmal zeigt sich
                erst beim Probeliegen: Die Matratze stützt nicht mehr richtig,
                die Einsinktiefe hat sich über die Jahre verändert, das
                ergonomische System ist aus der Balance.
              </p>
              <p>
                Deshalb analysieren wir bei einer Kissenberatung nicht nur Kopf
                und Nacken – sondern die gesamte Schlafsituation. Ein passendes
                Nackenstützkissen auf einer ausgeleierten Matratze kann sein
                Potenzial nicht entfalten. Umgekehrt löst eine neue Matratze
                das Problem nicht, wenn das Kissen drei Zentimeter zu hoch ist.
              </p>
              <p>
                Unsere Erfahrung: Beides zusammen betrachten. Dann zeigt sich,
                welcher Hebel der entscheidende ist.
              </p>
            </div>
          </div>
        </section>

        <InlineCTA
          headline="Welches Kissen bei dir das richtige ist? Finden wir gemeinsam heraus."
          subline="45 Minuten Probeliegen, Körperstatik-Check, Empfehlung – kostenlos und unverbindlich."
        />

        {/* 7. Schritt für Schritt */}
        <section
          id="beratung"
          className="mx-auto max-w-3xl scroll-mt-28 px-6 py-16 md:py-20"
        >
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Schritt für Schritt zum richtigen Kissen – so läuft die Beratung ab
          </h2>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Ein Beratungstermin bei den Schlafnerds in Bocholt dauert 45 bis
            60 Minuten. Der Ablauf:
          </p>
          <div className="mt-8 space-y-6">
            {beratungsSteps.map((s) => (
              <article
                key={s.number}
                className="rounded-xl border-2 border-gray-100 p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {s.number}
                  </span>
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 pl-11 leading-relaxed text-tagline/80">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-tagline/80">
            Alle Details zum Ablauf, zu Öffnungszeiten und zum Kissentaxi
            findest du auf unserer{" "}
            <a
              href="/nackenstuetzkissen-bocholt"
              className="text-primary underline decoration-primary/30 hover:decoration-primary"
            >
              Seite zur Nackenstützkissen-Beratung in Bocholt
            </a>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Häufige Fragen rund ums Nackenstützkissen
            </h2>
            <div className="mt-8 space-y-6">
              {(
                faqSchema.mainEntity as {
                  name: string;
                  acceptedAnswer: { text: string };
                }[]
              ).map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-lg border-2 border-gray-100 bg-white"
                >
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-tagline marker:text-primary">
                    {faq.name}
                  </summary>
                  <p className="px-6 pb-4 leading-relaxed text-tagline/80">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Autorenbox */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="flex items-center gap-4 rounded-xl bg-soft p-6">
            <div className="flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/icon.png"
                alt="Schlafnerds"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-tagline">Schlafnerds</p>
              <p className="text-sm leading-relaxed text-tagline/60">
                Fachgeschäft für Schlaflösungen in Bocholt. Körperstatik-Analyse,
                Probeliegen und Kissentaxi – wir nehmen uns Zeit für deine
                Schlafsituation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Dein passendes Nackenstützkissen
              <br />
              finden wir gemeinsam.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              45 Minuten Zeit, Körperstatik-Analyse, Probeliegen – und am Ende
              ein Kissen, das wirklich passt. Im Fachgeschäft in Bocholt oder
              mit dem Kissentaxi bei dir zu Hause.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
              <a href="/nackenstuetzkissen-bocholt" className="btn-outline">
                Zur Kissen-Seite
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
