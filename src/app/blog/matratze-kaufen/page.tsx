import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matratze kaufen: Worauf du wirklich achten musst | Schlafnerds",
  description:
    "Härtegrad, Material, Probeliegen, Testphase: Was beim Matratzenkauf wirklich zählt – und warum Online-Filter allein nicht ausreichen. Ehrliche Beratung aus Bocholt.",
  openGraph: {
    title: "Matratze kaufen: Worauf du wirklich achten musst | Schlafnerds",
    description:
      "Härtegrad, Material, Probeliegen: Was beim Matratzenkauf wirklich entscheidet – von den Schlafnerds aus Bocholt.",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.schlafnerds.de/images/blog/matratze-kaufen.png",
        width: 1200,
        height: 630,
        alt: "Matratze kaufen – Hand drückt auf Matratze im Showroom",
      },
    ],
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/matratze-kaufen",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Matratze kaufen: Worauf du wirklich achten musst",
  description:
    "Härtegrad, Material, Probeliegen, Testphase: Was beim Matratzenkauf wirklich zählt – und warum Online-Filter allein nicht ausreichen.",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.schlafnerds.de/blog/matratze-kaufen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welchen Härtegrad brauche ich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Härtegrad hängt von Körpergewicht, Körperstatur, Schlafposition und der Unterfederung ab. Wichtig: Gleiche Härtegradbezeichnungen sind bei verschiedenen Herstellern nicht vergleichbar – wie Schuhgrößen, die trotz gleicher Zahl unterschiedlich ausfallen. Nur das Probeliegen schafft Klarheit.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist besser: Kaltschaum oder Taschenfederkern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beide Materialien haben Vor- und Nachteile. Kaltschaum passt sich gut an und ist pflegeleicht. Taschenfederkern bietet mehr Belüftung und punktelastische Unterstützung. Die Wahl hängt von deinen individuellen Bedürfnissen, dem Lattenrost und deinem Schlafklima ab.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich Matratze und Lattenrost immer zusammen kaufen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nicht zwingend – aber du solltest beides aufeinander abstimmen. Ein starrer Lattenrost kann eine eigentlich passende Matratze zu hart machen, ein zu weicher Lattenrost zu weich. Das System aus Matratze, Unterfederung und Kissen entscheidet gemeinsam über die Schlafqualität.",
      },
    },
    {
      "@type": "Question",
      name: "Was tun, wenn Bettpartner unterschiedliche Bedürfnisse haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In diesem Fall empfehlen sich zwei getrennte Matratzen auf einem Lattenrost mit individuell einstellbaren Zonen – oder zwei separate Lattenroste. Kompromissmatratzen, die 'für beide passen', passen meist für keinen wirklich.",
      },
    },
    {
      "@type": "Question",
      name: "Ab wann sollte ich eine Matratze ersetzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Faustregel gilt: nach 8–10 Jahren oder wenn du morgens regelmäßig mit Rücken- oder Nackenschmerzen aufwachst. Sichtbare Mulden oder ein Durchhängen sind klare Zeichen, dass die Matratze ihren Dienst getan hat.",
      },
    },
  ],
};

interface Tip {
  title: string;
  paragraphs: string[];
}

const tips: Tip[] = [
  {
    title: "Härtegrad: kein Standard – und kein Selbstläufer",
    paragraphs: [
      "Der Härtegrad einer Matratze hängt von mehreren Faktoren ab: Körpergewicht, Körperstatur, Schlafposition und der Unterfederung, auf der die Matratze liegt. Ein Seitenschläfer mit 90\u00A0kg braucht etwas anderes als ein Rückenschläfer mit 70\u00A0kg – und wer auf einem starren Lattenrost schläft, braucht eine andere Matratze als jemand mit einem flexiblen Federlattenrost.",
      "Hinzu kommt: Gleiche Härtegradbezeichnungen bedeuten bei verschiedenen Herstellern nicht dasselbe. Genauso wie Schuhe bei gleicher Größe unterschiedlich sitzen, fühlt sich H3 bei Hersteller A deutlich anders an als H3 bei Hersteller B. Nur das Probeliegen schafft echte Klarheit.",
    ],
  },
  {
    title: "Material: Was steckt eigentlich drin?",
    paragraphs: [
      "Die drei häufigsten Materialien im mittleren und gehobenen Segment sind Kaltschaum, Taschenfederkern und Latex – oft auch in Kombination.",
      "Kaltschaum passt sich gut an den Körper an, ist pflegeleicht und oft günstiger. Taschenfederkern bietet mehr Belüftung durch die Luftzirkulation zwischen den Federn und reagiert punktelastisch – das heißt, Bewegungen werden weniger auf den Bettpartner übertragen. Latex ist besonders langlebig und für Allergiker empfehlenswert, aber schwerer und teurer.",
      "Keine dieser Varianten ist pauschal besser. Entscheidend ist, was zu deiner Körpersituation, deinem Schlafklima und deiner Unterfederung passt.",
    ],
  },
  {
    title: "Das Schlafsystem als Einheit denken",
    paragraphs: [
      "Die Matratze ist nur ein Teil des Systems. Sie liegt auf einem Lattenrost oder in einem Boxspring, und du liegst auf ihr mit einem Kissen. Alle drei Komponenten beeinflussen sich gegenseitig.",
      "Ein zu starrer Lattenrost kann eine eigentlich passende Matratze zu hart machen. Ein falsches Nackenstützkissen verursacht Schulter- und Nackenbeschwerden, egal wie gut die Matratze ist. Wer nur die Matratze wechselt, löst das Problem manchmal nur halb.",
    ],
  },
  {
    title: "Probeliegen ist Pflicht – aber richtig",
    paragraphs: [
      "Fünf Minuten auf einer Matratze liegen reichen nicht. Sinnvoll ist in der Regel eine Beratungs- und Testliegezeit von 30–45 Minuten – in deiner tatsächlichen Schlafposition.",
      "Im Showroom kannst du zudem verschiedene Materialien und Härtegradkombinationen direkt vergleichen. Was online gut klingt, fühlt sich im Liegen manchmal völlig anders an – und umgekehrt.",
    ],
  },
  {
    title: "Bettpartner mit anderen Bedürfnissen",
    paragraphs: [
      "Unterschiedliche Körpergewichte, Schlafpositionen oder Wärmebedürfnisse – das ist in vielen Paaren die Realität. Eine Kompromissmatratze, die 'für beide passen soll', passt meistens für keinen wirklich.",
      "Die bessere Lösung: zwei getrennte Matratzen auf einem Bett – mit individuell einstellbaren Lattenrosten oder zwei separaten Untergestellen. Was zunächst aufwändig klingt, ist oft die ehrlichere und langfristig erholsamere Entscheidung.",
    ],
  },
  {
    title: "Preis ist nicht alles – aber Qualität hat ihren Preis",
    paragraphs: [
      "Sehr günstige Matratzen unter 200\u00A0€ halten selten länger als 3–4 Jahre und verlieren schnell ihre Stützfunktion. Im mittleren Segment (400–900\u00A0€) findest du solide Qualität, die bei richtiger Pflege 8–10 Jahre hält.",
      "Teure Matratzen über 1.500\u00A0€ sind nicht automatisch besser – oft bezahlst du für Marke oder Design. Entscheidend ist nicht der Preis, sondern ob die Matratze zu dir passt. Und das lässt sich nur durch Probeliegen und Beratung herausfinden.",
    ],
  },
  {
    title: "Beratung statt Algorithmus",
    paragraphs: [
      "Online-Konfiguratoren fragen nach Körpergewicht und Schlafposition – und geben eine Empfehlung. Das ist ein Einstieg, aber kein Ersatz für echte Beratung.",
      "Ein erfahrener Berater sieht deine Körperstatur, fragt nach deiner Unterfederung, beobachtet wie du liegst – und kann Zusammenhänge erkennen, die kein Algorithmus erfasst. Besonders wenn du schon länger mit Rücken- oder Nackenbeschwerden kämpfst, lohnt sich das persönliche Gespräch.",
    ],
  },
];

const checklist = [
  "Körpergewicht, Statur und Schlafposition als Ausgangspunkt nehmen",
  "Unterfederung in die Wahl einbeziehen",
  "Härtegradbezeichnungen verschiedener Hersteller nicht direkt vergleichen",
  "Material nach Schlafklima und Körperbedürfnis wählen",
  "Probeliegen: 30–45 Minuten Beratungs- und Testliegezeit einplanen",
  "Bei Bettpartner: individuelle Lösungen statt Kompromiss",
  "Qualität im mittleren Preissegment statt Billigkauf",
  "Matratze, Lattenrost und Kissen als System betrachten",
];

export default function MatratzekaufenPage() {
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
          <p className="accent-text mb-4 text-lg">Produkt & Ratgeber</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Matratze kaufen: Worauf du
            <br />
            wirklich achten musst.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            Härtegrad H3, Kaltschaum, 7 Zonen, Testsieger – der Markt ist
            unübersichtlich und voller Marketingversprechen. Was beim
            Matratzenkauf wirklich entscheidet, lässt sich nicht googeln – es
            liegt an deinem Körper, deiner Schlafposition und dem, was du
            wirklich ausprobiert hast.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/blog/matratze-kaufen.png"
              alt="Hand drückt auf Matratze im Schlafnerds Showroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Warum landet man beim Matratzenkauf so oft daneben?
          </h2>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Eine Matratze kaufst du für die nächsten 8–10 Jahre – und du liegst
            buchstäblich jede Nacht drauf. Trotzdem wird die Entscheidung oft
            nach Preisfilter und Online-Rezensionen getroffen. Das Problem:
            Matratzen sind hochgradig individuell. Was für jemand anderen
            perfekt ist, kann für dich falsch sein. Die folgenden sieben Punkte
            helfen dir, die richtigen Fragen zu stellen – bevor du kaufst.
          </p>
        </section>

        {/* Tips */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            7 Dinge, auf die es wirklich ankommt
          </h2>
          <div className="mt-10 space-y-10">
            {tips.map((tip, i) => (
              <article
                key={i}
                className="rounded-xl border-2 border-gray-100 p-6 md:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {tip.title}
                  </h3>
                </div>
                <div className="mt-4 space-y-3 pl-11">
                  {tip.paragraphs.map((p, pi) => (
                    <p key={pi} className="leading-relaxed text-tagline/80">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Checkliste – Was zählt wirklich beim Matratzenkauf?
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
                  <span className="leading-relaxed text-tagline/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When online is not enough */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Wann reicht Online-Suche nicht aus?
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Online lässt sich gut recherchieren – aber nicht probeliegen. Gerade
              wenn du schon länger mit Rücken- oder Nackenbeschwerden zu kämpfen
              hast, ist eine persönliche Beratung keine Kür, sondern Pflicht.
            </p>
            <p>
              In unserem{" "}
              <a
                href="/matratzen-bocholt"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Matratzen-Showroom in Bocholt
              </a>{" "}
              kannst du verschiedene Matratzen in Ruhe ausprobieren – in deiner
              eigenen Schlafposition, mit deiner Unterfederung als Grundlage.
              Wir beobachten, wie du liegst, fragen nach deinen Beschwerden und
              zeigen dir Kombinationen, die zu dir passen.
            </p>
            <p>
              Das Zusammenspiel von{" "}
              <a
                href="/matratzen-bocholt"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Matratze
              </a>
              ,{" "}
              <a
                href="/lattenroste-bocholt"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Lattenrost
              </a>{" "}
              und{" "}
              <a
                href="/nackenstuetzkissen-bocholt"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Nackenstützkissen
              </a>{" "}
              ist entscheidend – und das lässt sich am besten vor Ort
              herausfinden.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Häufige Fragen beim Matratzenkauf
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
              Die richtige Matratze findest du
              <br />
              nicht im Filter – sondern im Probeliegen.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Komm in unseren Showroom in Bocholt. Wir nehmen uns Zeit für dich,
              zeigen dir verschiedene Materialien und Kombinationen – und finden
              gemeinsam heraus, was wirklich zu dir passt.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Persönliche Schlafberatung buchen
              </a>
              <a href="/matratzen-bocholt" className="btn-outline">
                Matratzen im Showroom ansehen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
