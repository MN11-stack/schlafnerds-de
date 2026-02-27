import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schlafhygiene: 10 Regeln für besseren Schlaf | Schlafnerds",
  description:
    "Was ist Schlafhygiene? 10 wissenschaftlich fundierte Regeln für besseres Einschlafen und erholsamere Nächte – verständlich erklärt von den Schlafnerds.",
  openGraph: {
    title: "Schlafhygiene: 10 Regeln für besseren Schlaf | Schlafnerds",
    description:
      "10 Schlafhygiene-Regeln aus der Schlafforschung – verständlich erklärt und einfach umsetzbar. Von den Schlafnerds aus Bocholt.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/schlafhygiene",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Besser einschlafen: 10 Schlafhygiene-Regeln, die wirklich helfen",
  description:
    "Was ist Schlafhygiene? 10 wissenschaftlich fundierte Regeln für besseres Einschlafen und erholsamere Nächte – verständlich erklärt von den Schlafnerds.",
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
  datePublished: "2026-02-27",
  dateModified: "2026-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.schlafnerds.de/blog/schlafhygiene",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Schlafhygiene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schlafhygiene beschreibt Verhaltensweisen und Rahmenbedingungen, die gesunden Schlaf fördern – von festen Schlafzeiten über die richtige Schlafumgebung bis hin zu Abendritualen.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Temperatur ist optimal zum Schlafen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die ideale Schlaftemperatur liegt bei 16–18 °C. Der Körper muss seine Kerntemperatur absenken, um einschlafen zu können.",
      },
    },
    {
      "@type": "Question",
      name: "Warum stört Blaulicht den Schlaf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blaues Licht von Bildschirmen unterdrückt die Melatoninproduktion. Dieser Effekt hält nach dem Ausschalten noch mindestens 15 Minuten an.",
      },
    },
    {
      "@type": "Question",
      name: "Hilft Alkohol beim Einschlafen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alkohol fördert zwar das Einschlafen, stört aber in der zweiten Nachthälfte den Schlafablauf erheblich – mit häufigerem Aufwachen und reduziertem REM-Schlaf.",
      },
    },
    {
      "@type": "Question",
      name: "Sollte man jeden Tag zur gleichen Zeit aufstehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Eine feste Aufstehzeit ist der wichtigste Ankerpunkt für einen stabilen Schlafrhythmus – auch am Wochenende.",
      },
    },
    {
      "@type": "Question",
      name: "Was tun, wenn man nachts aufwacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nicht auf die Uhr schauen und nicht im Bett liegen bleiben, wenn das Einschlafen nach 15 Minuten nicht gelingt. Aufstehen, ruhige Tätigkeit in einem anderen Zimmer, erst bei Schläfrigkeit zurückkehren.",
      },
    },
    {
      "@type": "Question",
      name: "Darf man im Bett fernsehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idealerweise nicht. Das Bett sollte nur mit Schlafen verknüpft werden. Wenn du den Fernseher als Einschlafhilfe nutzt, stelle einen automatischen Ausschaltmodus ein.",
      },
    },
    {
      "@type": "Question",
      name: "Wann sollte man bei Schlafproblemen ärztlichen Rat suchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wenn Schlafprobleme trotz konsequenter Schlafhygiene über mehrere Wochen bestehen, sollte eine ärztliche Abklärung erfolgen.",
      },
    },
  ],
};

interface Rule {
  title: string;
  paragraphs: string[];
}

const rules: Rule[] = [
  {
    title: "Feste Aufstehzeit einhalten",
    paragraphs: [
      "Der wichtigste Ankerpunkt für einen stabilen Schlafrhythmus ist nicht die Zubettgehzeit, sondern die Aufstehzeit. Wer jeden Morgen zur gleichen Zeit aufsteht – auch am Wochenende –, gibt seiner inneren Uhr eine verlässliche Orientierung. Der Schlafdruck baut sich dann über den Tag gleichmäßig auf und sorgt abends für natürliche Müdigkeit.",
    ],
  },
  {
    title: "Abends zur Ruhe kommen",
    paragraphs: [
      "Körper und Geist brauchen etwa zwei Stunden, um vom Tagesmodus in den Schlafmodus zu wechseln. Das bedeutet: Die allmähliche Verringerung geistiger und körperlicher Anstrengung am Abend ist eine wesentliche Voraussetzung zum Einschlafen.",
      "Sport am Nachmittag fördert den Schlaf – am Abend erhöht er dagegen Körpertemperatur und Cortisol-Spiegel, beides verzögert das Einschlafen.",
    ],
  },
  {
    title: "Ein persönliches Einschlafritual einführen",
    paragraphs: [
      "Regelmäßige, möglichst gleichbleibende und ruhige Abendrituale signalisieren dem Körper: Jetzt beginnt die Nacht. Das kann eine Tasse Kräutertee sein, ein paar Seiten in einem Buch oder eine kurze Atemübung. Entscheidend ist nicht, was du tust – sondern dass du es regelmäßig tust. Die Wiederholung erhöht die Möglichkeit, sich zu entspannen.",
    ],
  },
  {
    title: "Koffein ab dem Nachmittag meiden",
    paragraphs: [
      "Nach dem Mittagessen solltest du auf koffeinhaltige Getränke verzichten – Kaffee, Schwarztee und Cola wirken stimulierend und können das Einschlafen auch Stunden später noch beeinträchtigen. Wer nachmittags einen Energieschub braucht: Ein kurzer Spaziergang an der frischen Luft wirkt oft besser als die dritte Tasse Kaffee.",
    ],
  },
  {
    title: "Alkohol nicht als Schlafmittel nutzen",
    paragraphs: [
      "Alkohol fördert zwar das Einschlafen – in der zweiten Nachthälfte stört er jedoch massiv den Schlafablauf: häufigeres Aufwachen, fragmentierte Schlafstruktur und reduzierter REM-Schlaf sind die Folge.",
    ],
  },
  {
    title: "Abends leicht essen",
    paragraphs: [
      "Schwere Mahlzeiten am Abend steigern die Magen-Darm-Aktivität und wirken chronobiologisch störend auf die innere Uhr. Völlegefühl und Blähungen beeinträchtigen die Schlafqualität. Besser: Leichte, gut verdauliche Mahlzeiten, die den Körper nicht die ganze Nacht mit Verdauungsprozessen beschäftigen.",
    ],
  },
  {
    title: "Bildschirme rechtzeitig ausschalten",
    paragraphs: [
      "Helles blaues Licht von Smartphone, Tablet oder Laptop unterdrückt die Ausschüttung von Melatonin – dem Hormon, das den Schlaf einleitet. Dieser Effekt hält nach dem Ausschalten der Lichtquelle noch mindestens 15 Minuten an.",
      "Am Abend ist daher warmes, gedimmtes Licht ideal. Wenn du auf Bildschirme nicht verzichten kannst, hilft ein Blaulichtfilter – ersetzt aber nicht das rechtzeitige Abschalten.",
    ],
  },
  {
    title: "Schlafzimmer kühl und dunkel halten",
    paragraphs: [
      "Die optimale Schlaftemperatur liegt bei 16–18\u00A0°C. Der Körper muss seine Kerntemperatur absenken, um einschlafen zu können – bei zu hoher Raumtemperatur ist das nicht möglich. Ebenso wichtig: Dunkelheit. Selbst schwache Lichtquellen können die Melatoninproduktion stören.",
      "Regelmäßiges Stoßlüften sorgt für frische Luft – der Körper gibt in der Nacht bis zu einem Liter Schweiß ab. Die Luftfeuchtigkeit sollte zwischen 40 und 60\u00A0% liegen.",
    ],
  },
  {
    title: "Das Bett nur zum Schlafen nutzen",
    paragraphs: [
      "Wer im Bett arbeitet, isst oder fernsieht, trainiert sein Gehirn darauf, das Bett mit Wachsein zu verknüpfen. Die Schlafforschung empfiehlt: Das Bett ist ausschließlich zum Schlafen da. Wenn du nach 15 Minuten noch wach liegst, steh auf und geh in ein anderes Zimmer. Erst bei Schläfrigkeit zurückkehren.",
      "Besonders wichtig: Der Homeoffice-Arbeitsplatz gehört nicht ins Schlafzimmer – räumliche Trennung hilft beim abendlichen Abschalten.",
    ],
  },
  {
    title: "Nachts nicht auf die Uhr schauen",
    paragraphs: [
      "Ein verbreiteter Fehler: nachts auf den Wecker oder das Smartphone schauen. Die Konzentration auf die Uhrzeit erhöht den Stresslevel und macht das Wiedereinschlafen schwerer. Dreh den Wecker um oder leg das Handy außer Reichweite.",
    ],
  },
];

const checklist = [
  "Jeden Tag zur gleichen Zeit aufstehen",
  "2 Stunden vor dem Schlafen zur Ruhe kommen",
  "Persönliches Einschlafritual pflegen",
  "Ab nachmittags kein Koffein",
  "Alkohol nicht als Einschlafhilfe nutzen",
  "Abends leicht und nicht zu spät essen",
  "Bildschirme 30–60 Minuten vor dem Schlafen ausschalten",
  "Schlafzimmer: 16–18\u00A0°C, dunkel, ruhig, aufgeräumt",
  "Bett nur zum Schlafen nutzen",
  "Nachts nicht auf die Uhr schauen",
];

export default function SchlafhygienePage() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlafwissen</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Besser einschlafen: 10 Schlafhygiene-Regeln,
            <br />
            die wirklich helfen.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            Viele Menschen schlafen schlechter als nötig – nicht wegen einer
            Erkrankung, sondern wegen kleiner Gewohnheiten, die sich über Jahre
            eingeschlichen haben. Genau hier setzt Schlafhygiene an: ein Bündel
            einfacher, wissenschaftlich fundierter Regeln, die den Schlaf
            spürbar verbessern können.
          </p>
        </section>

        {/* Definition */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Was bedeutet Schlafhygiene?
          </h2>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Schlafhygiene beschreibt Verhaltensweisen und Rahmenbedingungen, die
            gesunden Schlaf fördern. Es geht nicht um Perfektion, sondern um
            eine bewusste Gestaltung von Abend, Nacht und Schlafumgebung. Die
            folgenden zehn Regeln basieren auf der Schlafforschung und lassen
            sich ohne großen Aufwand in den Alltag integrieren.
          </p>
        </section>

        {/* Rules */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            10 Schlafhygiene-Regeln
          </h2>
          <div className="mt-10 space-y-10">
            {rules.map((rule, i) => (
              <article
                key={i}
                className="rounded-xl border-2 border-gray-100 p-6 md:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {rule.title}
                  </h3>
                </div>
                <div className="mt-4 space-y-3 pl-11">
                  {rule.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="leading-relaxed text-tagline/80"
                    >
                      {p}
                    </p>
                  ))}
                  {i === 4 && (
                    <p className="leading-relaxed text-tagline/80">
                      Mehr dazu findest du in unserem Artikel{" "}
                      <a
                        href="/blog/schlafmythen"
                        className="text-primary underline decoration-primary/30 hover:decoration-primary"
                      >
                        7 Schlafmythen – was wirklich stimmt
                      </a>
                      .
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Checkliste – Schlafhygiene auf einen Blick
            </h2>
            <ul className="mt-8 space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-primary/40 text-primary">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-tagline/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When hygiene is not enough */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Wann reicht Schlafhygiene nicht aus?
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Schlafhygiene ist die Grundlage für guten Schlaf – aber nicht die
              Lösung für alles. Wenn du trotz konsequenter Umsetzung dieser
              Regeln über mehrere Wochen schlecht schläfst, können andere
              Ursachen eine Rolle spielen: von einem unpassenden Schlafsystem
              über Stress bis hin zu behandlungsbedürftigen Schlafstörungen.
            </p>
            <p>
              In vielen Fällen lohnt sich ein Blick auf das Zusammenspiel von{" "}
              <a
                href="/matratzen-bocholt"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Matratze
              </a>
              , Unterfederung und{" "}
              <a
                href="/nackenstuetzkissen-bocholt"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Nackenstützkissen
              </a>
              . Denn auch die beste Schlafhygiene hilft wenig, wenn die
              Wirbelsäule nachts nicht richtig gelagert ist.
            </p>
            <p>
              Wenn du unsicher bist, wo du anfangen sollst – wir helfen dir
              gerne. In einer{" "}
              <a
                href="/beratung-probeliegen"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                persönlichen Schlafberatung
              </a>{" "}
              analysieren wir deine Situation, testen gemeinsam verschiedene
              Materialien und finden heraus, was zu dir passt.
            </p>
            <p>
              Bei Verdacht auf eine behandlungsbedürftige Schlafstörung
              empfehlen wir, dies ärztlich abklären zu lassen.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Häufige Fragen zur Schlafhygiene
            </h2>
            <div className="mt-8 space-y-6">
              {(faqSchema.mainEntity as { name: string; acceptedAnswer: { text: string } }[]).map(
                (faq, i) => (
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
                ),
              )}
            </div>
          </div>
        </section>

        {/* Author */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="flex items-center gap-4 rounded-xl bg-soft p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">SN</span>
            </div>
            <div>
              <p className="font-semibold text-tagline">Schlafnerds</p>
              <p className="text-sm leading-relaxed text-tagline/60">
                Fachgeschäft für Schlaflösungen in Bocholt. Persönliche
                Beratung, Probeliegen und ehrliche Empfehlungen seit 2020.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Guter Schlaf beginnt mit
              <br />
              den richtigen Gewohnheiten.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Du möchtest wissen, welcher Schlaftyp du bist? Mach unseren
              Chronotypen-Test. Oder lass dich persönlich beraten – wir nehmen
              uns Zeit für deine Fragen.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Persönliche Schlafberatung buchen
              </a>
              <a href="/chronotypen-test" className="btn-outline">
                Chronotypen-Test machen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
