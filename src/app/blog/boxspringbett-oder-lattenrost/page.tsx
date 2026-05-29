import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";
import StickyCTA from "@/components/StickyCTA";
import FaqSection from "@/components/sections/FaqSection";
import { calendlyUrl } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Boxspring oder Lattenrost? Was entscheidet | Schlafnerds",
  description:
    "Boxspring oder Lattenrost? Sechs Faktoren, drei Mythen, klare Faustregeln. Verständlich erklärt von den Schlafnerds aus Bocholt.",
  openGraph: {
    title: "Boxspring oder Lattenrost? Was entscheidet | Schlafnerds",
    description:
      "Sechs Faktoren, die wirklich entscheiden – und drei Mythen, die wir geraderücken. Von den Schlafnerds aus Bocholt.",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.schlafnerds.de/images/blog/boxspringbett-oder-lattenrost.png",
        width: 1200,
        height: 630,
        alt: "Boxspringbett oder Lattenrost? Was wirklich entscheidet",
      },
    ],
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/boxspringbett-oder-lattenrost",
    languages: {
      "de-DE": "https://www.schlafnerds.de/blog/boxspringbett-oder-lattenrost",
    },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Boxspringbett oder Lattenrost? Es kommt nicht aufs System an. Sondern auf dich.",
  description:
    "Boxspring oder Lattenrost? Sechs Faktoren, die wirklich entscheiden, drei Mythen, die wir geraderücken – verständlich erklärt von den Schlafnerds aus Bocholt.",
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
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.schlafnerds.de/blog/boxspringbett-oder-lattenrost",
  },
};

const faqs = [
  {
    question:
      "Soll ich Boxspring oder Lattenrost wählen, wenn ich Bandscheibenprobleme habe?",
    answer:
      "Es gibt keine belastbare Studie, die für Bandscheibenprobleme pauschal das eine über das andere stellt. Was hilft: eine mittelfeste, körperformangepasste Lagerung, Lagewechsel zulassen, regelmäßige Kontrolle. Wir prüfen das mit dir beim Termin.",
  },
  {
    question: "Stimmt es, dass Boxspring grundsätzlich teurer ist?",
    answer: "Nein, das stimmt so pauschal nicht.",
  },
  {
    question: "Wie oft muss ich eine Matratze wechseln?",
    answer:
      "Die Aktion Gesunder Rücken empfiehlt: nach etwa acht Jahren. Bei intensiver Nutzung früher. Unterfederungen halten meistens etwas länger (acht bis zehn Jahre), sollten aber regelmäßig auf Knack-Geräusche, lockere Verbindungen und durchgesessene Stellen geprüft werden.",
  },
  {
    question: "Brauche ich immer einen Topper?",
    answer:
      "Nein. Stiftung Warentest hat 2026 geprüft: Modelle mit und ohne Topper lagen bei den Liegeeigenschaften im Schnitt gleichauf. Ein Topper macht Sinn, wenn er gezielt etwas korrigiert – er ist kein automatischer Komfort-Gewinn. Vor allem hilft er nicht, eine durchgelegene Matratze zu retten.",
  },
  {
    question:
      "Wir sind ein Paar mit sehr unterschiedlichem Gewicht. Was raten die Schlafnerds?",
    answer:
      "Meistens zwei einzelne Liegeflächen – sei es im Boxspring (zwei Boxen + zwei Matratzen) oder im klassischen System (zwei Roste + zwei Matratzen). Eine gemeinsame Matratze kann bei 30+ Kilo Gewichtsunterschied dauerhaft schwer abzustimmen sein.",
  },
  {
    question:
      "Kann ich bei Schlafnerds beide Systeme nebeneinander probeliegen?",
    answer:
      "Ja. Wir haben Boxspring- und klassische Bett-Systeme im Showroom. Im 45-Minuten-Termin gehst du beide unter denselben Bedingungen durch und merkst direkt, wo dein Körper „ja“ sagt.",
  },
  {
    question: "Wie lange dauert eine Schlafnerds-Beratung?",
    answer:
      "Eingeplant sind 45 Minuten – bei komplexeren Fällen (mehrere Vorerkrankungen, Paar-Beratung) auch mal 60–90. Termine sind online buchbar, auch außerhalb der regulären Öffnungszeiten.",
  },
];

interface Factor {
  title: string;
  paragraphs: React.ReactNode[];
}

const factors: Factor[] = [
  {
    title: "Wie du schläfst",
    paragraphs: [
      <>Bist du Seitenschläfer, Rückenschläfer, Bauchschläfer? Drehst du dich viel oder liegst du fast still?</>,
      <>
        Als Seitenschläfer brauchst du eine Unterlage, in die Schulter und Becken tief genug einsinken können, ohne dass deine Taille dabei mit nach unten gezogen wird. Deine Wirbelsäule soll möglichst gerade liegen, von vorne betrachtet.
      </>,
      <>
        Als Rückenschläfer soll dein Becken weicher gelagert sein, deine Lendenwirbelsäule aber nicht in einer Hängematte hängen.
      </>,
      <>
        In Bauchlage ist die Aufgabe am heikelsten – hier braucht die Mittelzone Stabilität, sonst überstreckt sich dein Kreuz.
      </>,
      <>Beides geht mit Boxspring. Beides geht mit Lattenrost. Aber jeweils nur, wenn die Kombination stimmt.</>,
    ],
  },
  {
    title: "Wie du gebaut bist",
    paragraphs: [
      <>Schulterbreite, Hüftbreite, Körpergröße, Gewichtsverteilung. Wer breite Schultern und schmale Hüfte hat (oft Männer), braucht eine andere Schulterzone als jemand mit breitem Becken und schmalen Schultern (oft Frauen). Das hat nichts mit Klischees zu tun, sondern mit Physik: Wer wo schwer ist, sinkt wo wie tief ein.</>,
      <>
        Stiftung Warentest testet seit 2026 Boxspringbetten und Matratzen mit sieben unterschiedlichen Körpertypen – genau aus diesem Grund. Eine Einheits-Empfehlung gibt es nicht.
      </>,
    ],
  },
  {
    title: "Was dein Körper schon hinter sich hat",
    paragraphs: [
      <>Bandscheibenvorfall vor drei Jahren? Knie-OP? Hüfte? Eine alte Verletzung, die in bestimmten Lagen drückt?</>,
      <>Das gehört auf den Tisch, bevor wir über Härtegrade reden. Eine Matratze ist keine Therapie – aber sie kann eine vorhandene Vorgeschichte spürbar entlasten oder verschlimmern. Wir fragen bei jedem Beratungstermin nach. Nicht, weil wir neugierig sind. Sondern, weil das Schlafsystem darauf reagieren muss.</>,
      <>
        Eine große randomisiert-kontrollierte Studie aus dem Jahr 2003 (
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/14630439/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          publiziert im Lancet
        </a>
        , n=313 Erwachsene mit chronischem unspezifischem Kreuzschmerz) hat gezeigt: Mittelfeste Matratzen schnitten deutlich besser ab als feste. Spätere Übersichtsarbeiten (
        <a
          href="https://doi.org/10.1186/s10195-021-00616-5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          Caggiari 2021
        </a>
        ,{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/29073401/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          Radwan 2015
        </a>
        ) haben das im Trend bestätigt. Das räumt einen verbreiteten Mythos auf: „Hart ist gut für den Rücken“ kann man eben nicht pauschal sagen.
      </>,
    ],
  },
  {
    title: "Wie du Wärme empfindest",
    paragraphs: [
      <>Bist du ein Frostbeutel oder schwitzt du nachts? Brauchst du das Gefühl, „eingepackt“ zu liegen, oder wird dir das schnell zu warm?</>,
      <>
        Im Klima zwischen Bett und Körper geht etwa ein Fünftel Liter Feuchtigkeit pro Nacht weg – durch dich, in die Matratze, weiter durch Lattenrost oder Federbox in den Raum. Welches System das besser ableitet, hängt weniger am Label als an den Materialien (Schaum, Federkern, Latex, Bezug, Topper) und an deinem Bettkasten. Ein offener Lattenrost lüftet besser durch – wenn der Raum unter dem Bett frei bleibt. Eine moderne Boxspring-Konstruktion kann das auch – wenn ihre Materialien atmungsaktiv sind.
      </>,
    ],
  },
  {
    title: "Mit wem du schläfst",
    paragraphs: [
      <>Schläfst du allein, mit Partner oder Partnerin, mit Kindern dazwischen? Habt ihr stark unterschiedliches Gewicht oder Körpermaße? Bewegt sich eine Person viel mehr als die andere?</>,
      <>
        Bei zwei sehr unterschiedlichen Menschen in einem Bett ist die Frage selten „Boxspring oder Lattenrost“, sondern: zwei getrennt einstellbare Liegeflächen oder eine durchgehende Matratze. Beides geht in beiden Systemen. Wer leicht aufwacht, wenn sich die andere Person bewegt, profitiert von Lösungen mit guter Bewegungsentkopplung.
      </>,
    ],
  },
  {
    title: "Wie du in den Alltag rein- und rauskommst",
    paragraphs: [
      <>
        Klingt banal, ist aber relevant. Boxspring-Konstruktionen liegen meistens deutlich höher als ein Lattenrost-System – Liegehöhen zwischen 56 und 69 Zentimetern hat Stiftung Warentest 2026 gemessen. Für jemanden mit einer Knie- oder Hüft-OP, oder einfach in seniorem Alter, kann das erleichtertes Aufstehen bedeuten. Für jemand Kleinen oder mit niedrigem Schlafzimmer kann es zu hoch sein.
      </>,
      <>Auch Pflege, Wenden, Reinigen, Bezug-Abnehmen – das gehört zur Entscheidung dazu. Wenn du allein lebst und keinen Topper alleine über Kopf bewegen kannst, sollten wir das wissen, bevor wir eins empfehlen.</>,
    ],
  },
];

interface Mythos {
  title: string;
  paragraphs: React.ReactNode[];
}

const mythen: Mythos[] = [
  {
    title: "„Boxspringbett ist automatisch ergonomischer.“",
    paragraphs: [
      <>
        Nicht belegt. Boxspring ist eine Konstruktion, kein Ergonomie-Versprechen – die RAL-Definition beschreibt nur, <em>wie</em> das System aufgebaut ist, nicht <em>was</em> es leistet. Stiftung Warentest hat 2026 neun Boxspringbetten geprüft: Nur eins war insgesamt „gut“. Im direkten Vergleich der Liegeeigenschaften schnitten Standard-Matratzen aus dem Test ein Jahr vorher im Schnitt sogar besser ab. Das heißt nicht „Boxspring ist schlecht“. Das heißt: Auch beim Boxspring kommt es darauf an, was drin steckt – und ob es zu dir passt.
      </>,
    ],
  },
  {
    title: "„Je härter, desto besser für den Rücken.“",
    paragraphs: [
      <>
        Das war einmal Volksweisheit. Inzwischen sieht man das differenzierter. Die schon erwähnte Lancet-Studie zeigte: Bei chronischem unspezifischem Kreuzschmerz schneiden mittelfeste Matratzen besser ab als feste. Übersichtsarbeiten der letzten Jahre (
        <a
          href="https://doi.org/10.1186/s10195-021-00616-5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          Caggiari 2021
        </a>
        ,{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/29073401/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          Radwan 2015
        </a>
        ) kommen zum gleichen Befund. Eine sehr harte Matratze kann genauso Probleme machen wie eine sehr weiche.
      </>,
    ],
  },
  {
    title: "„Ein Topper macht jedes Bett besser.“",
    paragraphs: [
      <>
        Vorsicht – das ist einer der häufigsten Trugschlüsse, die wir im Laden hören. Wir sehen oft Kunden, die mit einem Topper eine durchgelegene Matratze retten wollen. Funktioniert nicht. Ein Topper braucht selbst eine tragende Unterlage, sonst sinkt er einfach in die Kuhle mit ein und verstärkt das Problem, statt es zu lösen.
      </>,
      <>
        Auch in Stiftung Warentest 2026 lagen Boxspring-Modelle mit und ohne Topper bei den Liegeeigenschaften im Schnitt gleichauf. Ein Topper kann Sinn machen, wenn er gezielt etwas justiert – etwa bei einer eigentlich passenden Matratze die letzte Oberflächen-Anpassung. Pauschal löst er aber keine Probleme. Und auf einer durchgelegenen Matratze ist er nur ein teures Trostpflaster.
      </>,
    ],
  },
];

interface Rule {
  intro: React.ReactNode;
  detail: React.ReactNode;
}

const faustregeln: Rule[] = [
  {
    intro: <>Du hast eine konkrete Vorgeschichte (Bandscheibe, Hüfte, Knie):</>,
    detail: <>Die Vorgeschichte muss mit auf den Tisch. System ist sekundär, gezielte Stützung primär.</>,
  },
  {
    intro: <>Du bist Seitenschläfer mit deutlichem Schulter-Hüft-Unterschied:</>,
    detail: <>Wir achten besonders auf die Schulter-Zone und auf eine Matratze, in die die Schulter genug einsinken kann.</>,
  },
  {
    intro: <>Du schläfst zu zweit mit deutlichem Gewichtsunterschied:</>,
    detail: <>Eher zwei einzelne Liegeflächen als eine gemeinsame – egal in welchem System.</>,
  },
  {
    intro: <>Du hast bewegliche Knie und Hüfte und schon einen Bandscheiben-Vorfall hinter dir:</>,
    detail: <>Höhere Liegehöhe (oft Boxspring) kann das Aufstehen leichter machen – wenn die Matratze ergonomisch passt.</>,
  },
  {
    intro: <>Du sitzt morgens gern lang im Bett, liest, frühstückst:</>,
    detail: <>Verstellbarer Lattenrost mit Kopf- und Fußteil ist eine handfeste Erleichterung, in beiden Systemen möglich.</>,
  },
  {
    intro: <>Du brauchst ein kühles Bettklima:</>,
    detail: <>Materialien (Bezug, Schaum vs. Federkern, Topper-Material) sind wichtiger als Boxspring oder Lattenrost. Auch dein Raumklima zählt mit.</>,
  },
];

interface ChecklistItem {
  text: React.ReactNode;
}

const checklist: ChecklistItem[] = [
  { text: <>Boxspring ist kein Garant für besseren Schlaf. Lattenrost auch nicht.</> },
  { text: <>Härtegrad H3 ist nicht gleich H3 – verschiedene Hersteller, verschiedene Werte. Probeliegen ist Pflicht.</> },
  { text: <>Welches System für dich passt, hängt von sechs Faktoren ab: Schlafposition, Körperbau, Vorgeschichte, Wärme-Empfinden, Bettpartner, Alltagsfaktoren.</> },
  { text: <>Das System wirkt als Ganzes – Matratze, Unterfederung und Kissen müssen aufeinander abgestimmt sein. Eine Komponente kompensiert nicht, sie verstärkt die Wirkung der anderen.</> },
  {
    text: (
      <>
        Eine Matratze hält maximal etwa acht Jahre, eine Unterfederung acht bis zehn (
        <a
          href="https://agr-ev.de/de/tipps-zum-bett"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/30 hover:decoration-primary"
        >
          AGR-Empfehlung
        </a>
        ). Danach lohnt Probeliegen.
      </>
    ),
  },
  { text: <>Probeliegen schlägt jedes Datenblatt. Auch unseres.</> },
];

export default function BoxspringbettOderLattenrostPage() {
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

        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlafsystem-Beratung</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Boxspringbett oder Lattenrost?
            <br />
            Es kommt nicht aufs System an.
            <br />
            Sondern auf dich.
          </h1>
          <p className="mt-6 leading-relaxed text-tagline/80">
            Du gehst ins Bettenfachgeschäft, links steht ein Boxspringbett wie aus dem Hotel, rechts ein klassisches Bett mit Lattenrost. Verkäufer A schwört auf Boxspring („viel ergonomischer“), Verkäufer B schwört auf Lattenrost („viel anpassbarer“). Und du stehst dazwischen und fragst dich, wem du glauben sollst. Spoiler: beiden nicht. Wir bei Schlafnerds verkaufen beide Systeme, und wir empfehlen das eine wie das andere – je nachdem, was zu deinem Körper, deiner Schlafposition und deiner Vorgeschichte passt. Es hängt von dir ab.
          </p>
          <p className="mt-6 leading-relaxed text-tagline/80">
            Das klingt nach einer Floskel. Ist es nicht. In diesem Beitrag zeigen wir dir konkret, woran wir das festmachen – und welche der gängigen „Wahrheiten“ über Boxspring und Lattenrost dir nichts bringen.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/blog/boxspringbett-oder-lattenrost.png"
              alt="Boxspringbett und klassisches Bett mit Lattenrost nebeneinander im Schlafnerds-Showroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </section>

        {/* Konstruktion */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Erstmal: Was sind Boxspring und Lattenrost überhaupt?
          </h2>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Damit wir vom Gleichen reden – ein kurzer Blick auf die Konstruktion. Wenn du das schon weißt, scroll weiter.
          </p>

          <h3 className="mt-8 font-heading text-xl font-normal">Das Boxspring-System</h3>
          <p className="mt-3 leading-relaxed text-tagline/80">
            Ein Boxspringbett ist nach RAL-Gütedefinition (RAL-RG 441) ein Bettsystem aus mindestens zwei federnden Teilen: einer Federbox unten (das ist die „Box“) und einer Matratze oben. Ein Topper ist optional. Du liegst also auf drei Lagen, die alle Federung haben: Box, Matratze und gegebenenfalls Topper.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Funktional bedeutet das: Eine Boxspring-Konstruktion arbeitet wie eine mehrschichtige Feder-Kette. Dein Körpergewicht verformt zuerst den Topper, dann die Matratze, dann die Federbox. Wie weich oder fest das wirkt, hängt von der Abstimmung aller drei Schichten ab.
          </p>

          <h3 className="mt-8 font-heading text-xl font-normal">Das Lattenrost-System</h3>
          <p className="mt-3 leading-relaxed text-tagline/80">
            Beim klassischen Lattenrost-System liegt die Matratze auf einzelnen Federleisten – entweder fest aufgelegt oder in einem Rahmen verschraubt. Du hast also zwei Schichten: Lattenrost und Matratze.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Funktional ist das Lattenrost-System eher linienelastisch – jede Leiste federt über die ganze Breite gleichmäßig. Moderne Lattenroste haben verstellbare Zonen für Schulter, Lendenwirbelsäule und Becken. Damit kannst du gezielt einzelne Körperbereiche weicher oder härter einstellen.
          </p>
          <p className="mt-4 leading-relaxed text-tagline/80">
            Das ist der konstruktive Unterschied. Was er für dich praktisch bedeutet, klären wir gleich. Aber zuerst räumen wir mit einer Sache auf, über die zu selten geredet wird.
          </p>
        </section>

        {/* Schuh-Analogie */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Härtegrad ist wie Schuhgröße. Marken-abhängig.
            </h2>
            <p className="mt-6 leading-relaxed text-tagline/80">
              Du kaufst nicht zum ersten Mal Schuhe. Du weißt, dass Größe 42 nicht gleich Größe 42 ist. Nike fällt anders aus als Adidas. Eine 42 von Birkenstock passt anders als eine 42 von Lloyd. Du würdest nie einen Schuh allein nach der aufgedruckten Zahl kaufen, ohne ihn anzuprobieren.
            </p>
            <p className="mt-4 leading-relaxed text-tagline/80">
              Bei Matratzen tun das die meisten Leute trotzdem.
            </p>
            <p className="mt-4 leading-relaxed text-tagline/80">
              Härtegrad H3 ist nicht gleich H3. Wir sehen das jeden Tag im Laden. Eine H3-Matratze von Hersteller A liegt deutlich anders als eine H3 von Hersteller B. Und das ist kein Versehen, das ist Systemproblem: Es gibt keine verbindliche Norm, die festlegt, ab welchem Wert eine Matratze H2, H3 oder H4 ist. Jeder Hersteller misst und benennt selbst. Die offizielle europäische Prüfnorm{" "}
              <a
                href="https://www.dinmedia.de/de/norm/din-en-1957/152156673"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                DIN EN 1957
              </a>{" "}
              beschreibt, <em>wie</em> du Matratzenhärte messen kannst – aber sie schreibt nicht vor, <em>welche</em> Härte du H2 oder H3 nennen sollst. Die Norm selbst weist sogar ausdrücklich darauf hin: Eine Härtekennzahl bedeutet nicht automatisch Komfort.
            </p>
            <p className="mt-4 leading-relaxed text-tagline/80">
              Was heißt das für dich? Den Härtegrad als alleiniges Kaufkriterium kannst du vergessen. Er ist eine grobe Orientierung – kein verlässlicher Vergleich. Was zählt, ist das Probeliegen mit deinem eigenen Körper. Genau wie bei den Schuhen.
            </p>
            <p className="mt-4 leading-relaxed text-tagline/80">
              Und genau deshalb spielt es auch nicht die zentrale Rolle, ob unter deiner Matratze ein Boxspring-Federkern oder ein Lattenrost liegt. Wichtiger ist, dass die Kombination zu deinem Körper passt.
            </p>
          </div>
        </section>

        {/* 6 Faktoren */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Sechs Faktoren, die wirklich entscheiden
          </h2>
          <p className="mt-6 leading-relaxed text-tagline/80">
            Wenn du bei uns im Laden bist, schauen wir uns mit dir diese sechs Dinge an. Sie sind die echten Stellschrauben – viel relevanter als das Schild „Boxspring“ oder „Lattenrost“ am Bett.
          </p>
          <div className="mt-10 space-y-10">
            {factors.map((factor, i) => (
              <article
                key={i}
                className="rounded-xl border-2 border-gray-100 p-6 md:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {factor.title}
                  </h3>
                </div>
                <div className="mt-4 space-y-3 pl-11">
                  {factor.paragraphs.map((p, pi) => (
                    <p key={pi} className="leading-relaxed text-tagline/80">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <InlineCTA
          headline="Welcher Typ bist du?"
          subline="Im 45-Minuten-Termin gehen wir mit dir alle sechs Faktoren durch – mit Probeliegen auf beiden Systemen."
          utmSource="blog-boxspring-oder-lattenrost-inline"
        />

        {/* Mythen */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Drei Mythen, die wir geraderücken
            </h2>
            <p className="mt-6 leading-relaxed text-tagline/80">
              Wir haben uns angewöhnt, bei der Beratung diese drei Sätze direkt anzusprechen. Sie kommen oft.
            </p>
            <div className="mt-10 space-y-8">
              {mythen.map((m, i) => (
                <article key={i} className="rounded-xl border-2 border-gray-100 bg-white p-6 md:p-8">
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {m.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {m.paragraphs.map((p, pi) => (
                      <p key={pi} className="leading-relaxed text-tagline/80">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beratungs-Methodik */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Wie wir das in der Beratung herausfinden
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Wenn du bei uns vorbeikommst – meistens für einen 45-Minuten-Termin –, gehen wir mit dir genau diese sechs Faktoren durch. Dazu kommt eine konkrete Messung, die viele andere Bettenfachgeschäfte nicht machen: die Höhendifferenz zwischen Seiten- und Rückenlage am Kissen.
            </p>
            <p>
              Klingt technisch. Ist es nicht. Wir prüfen, wie weit dein Kopf in der Seitenlage hochliegen muss, damit deine Halswirbelsäule gerade ist – und wie weit er in der Rückenlage absinken darf. Der Unterschied zwischen diesen beiden Werten verrät uns, wie das Kissen, die Matratze und der Lattenrost miteinander arbeiten müssen. Es geht selten nur um eine Komponente. Es geht fast immer um die Abstimmung der drei.
            </p>
            <p>
              Ein typisches Muster, das wir oft sehen: Jemand kommt mit Nackenverspannungen – und stellt sich nach der Messung heraus, dass die Matratze zu fest ist und der Lattenrost im Becken zu weich nachgibt. Der Nacken ist nur das Symptom. Die Ursache liegt 50 Zentimeter weiter unten. Ein neues Kissen löst das nicht. Eine Anpassung an Becken-Stützung und Matratzen-Festigkeit schon.
            </p>
            <p>
              Das ist die Beratung. Keine Magie, kein Verkaufstrick – sondern systematisches Hinsehen.
            </p>
          </div>
        </section>

        {/* Faustregeln */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Faustregeln nach Situation, nicht nach System
            </h2>
            <p className="mt-6 leading-relaxed text-tagline/80">
              Wenn wir es runterbrechen müssten, würden wir dir am Ende nicht „Boxspring oder Lattenrost“ sagen. Sondern Folgendes:
            </p>
            <ul className="mt-8 space-y-4">
              {faustregeln.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed text-tagline/80">
                    {r.intro} {r.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Checkliste */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Auf einen Blick
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
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vertiefung */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Wenn das nicht reicht …
            </h2>
            <p className="mt-6 leading-relaxed text-tagline/80">
              Wenn du jetzt sagst: „OK, ich verstehe das Prinzip – aber welcher konkrete Bett-Typ käme für mich in Frage?“ – dann lohnt sich der Blick auf unsere Themenseiten:
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <a
                  href="/boxspringbetten-bocholt"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Boxspringbetten in Bocholt – Beratung und Probeliegen
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <a
                  href="/matratzen-bocholt"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Matratzen in Bocholt – Probeliegen mit Körperstatik-Check
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <a
                  href="/holzbetten-bocholt"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Holzbetten in Bocholt – Massivholz im Schlafsystem
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <a
                  href="/beratung-probeliegen"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Beratung & Probeliegen – wie ein 45-Minuten-Termin abläuft
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* Autorenbox */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <div className="flex items-center gap-4 rounded-xl bg-soft p-6">
            <div className="flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/icon.png" alt="Schlafnerds" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-tagline">Schlafnerds</p>
              <p className="text-sm leading-relaxed text-tagline/60">
                Bettenfachgeschäft an der Nordstraße 39 in Bocholt. Zertifizierte Schlafcoaches und Ergopraktiker – Bett, Lattenrost und Matratze als ein zusammenhängendes Schlafsystem, abgestimmt auf den Menschen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              45 Minuten, beide Systeme,
              <br />
              eine fundierte Empfehlung.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Wir nehmen uns Zeit für deine Schlafsituation, prüfen Liegeposition und Höhendifferenz, und stimmen Bett, Matratze, Lattenrost und Kissen aufeinander ab.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={calendlyUrl("blog-boxspring-oder-lattenrost")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin online buchen
              </a>
              <a href="/beratung-probeliegen" className="btn-outline">
                Mehr über unseren Ablauf
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
