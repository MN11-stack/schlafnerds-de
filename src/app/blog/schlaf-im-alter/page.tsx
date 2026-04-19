import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schlaf im Alter: Wie sich unser Schlaf verändert | Schlafnerds",
  description:
    "Warum schläft man im Alter schlechter? Wissenschaftlich erklärt: Tiefschlaf, Schlafeffizienz, innere Uhr – und was wirklich hilft.",
  openGraph: {
    title: "Schlaf im Alter: Wie sich unser Schlaf verändert | Schlafnerds",
    description:
      "Warum schläft man im Alter schlechter? Tiefschlaf, Schlafeffizienz, innere Uhr – wissenschaftlich erklärt von den Schlafnerds.",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.schlafnerds.de/images/blog/schlaf-im-alter.png",
        width: 1200,
        height: 630,
        alt: "Älteres Paar schläft in einem gemütlichen Bett mit warmem Licht",
      },
    ],
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/schlaf-im-alter",
    languages: {
      "de-DE": "https://www.schlafnerds.de/blog/schlaf-im-alter",
      "nl-NL": "https://www.slaapnerds.nl/blog/slaap-en-ouder-worden",
    },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Schlaf im Alter: Wie sich unser Schlaf verändert",
  description:
    "Warum schläft man im Alter schlechter? Wissenschaftlich erklärt: Tiefschlaf, Schlafeffizienz, innere Uhr – und was wirklich hilft.",
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
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.schlafnerds.de/blog/schlaf-im-alter",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist es normal, im Alter schlechter zu schlafen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, bis zu einem gewissen Grad. Die Schlafstruktur verändert sich biologisch: weniger Tiefschlaf, mehr Leichtschlaf, häufigere kurze Wachphasen. Das Gesamtschlafbedürfnis bleibt mit 7–9 Stunden aber weitgehend gleich.",
      },
    },
    {
      "@type": "Question",
      name: "Warum wache ich im Alter so früh auf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Schlaf-Wach-Rhythmus verschiebt sich mit dem Alter nach vorne – abends früher müde, morgens früher wach. Das ist ein biologischer Prozess, keine Schlafstörung.",
      },
    },
    {
      "@type": "Question",
      name: "Ab wann verändern sich Schlaf und Schlafeffizienz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bereits ab dem 30. Lebensjahr beginnt die Schlafeffizienz langsam zu sinken – um etwa 3 % pro Lebensdekade. Nach dem 70. Lebensjahr stabilisieren sich die meisten Parameter.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert im Schlaf mit dem Gehirn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im Tiefschlaf reinigt das glymphatische System das Gehirn von Stoffwechselabbauprodukten. Das ist einer der Gründe, warum erholsamer Schlaf auch im Alter aktiv unterstützt werden sollte.",
      },
    },
    {
      "@type": "Question",
      name: "Wann sollte ich wegen meines Schlafs zum Arzt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Schnarchen mit Atemaussetzern, Kribbeln in den Beinen beim Einschlafen, starker Tagesmüdigkeit oder Schlafproblemen, die über mehrere Wochen die Lebensqualität beeinträchtigen.",
      },
    },
    {
      "@type": "Question",
      name: "Hilft ein Mittagsschlaf im Alter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein kurzes Nickerchen (max. 20 Minuten, nicht am späten Nachmittag) kann sinnvoll sein. Längere oder späte Nickerchen schwächen den Schlafdruck für die Nacht.",
      },
    },
  ],
};

interface Section {
  title: string;
  paragraphs: string[];
}

const changes: Section[] = [
  {
    title: "Weniger Tiefschlaf – und was das bedeutet",
    paragraphs: [
      "Der Tiefschlaf ist die erholsamste Phase der Nacht. Hier lädt der Körper seine Energiespeicher auf, das Immunsystem arbeitet auf Hochtouren. Mit zunehmendem Alter schwindet dieser Tiefschlafanteil. Das erklärt, warum sich viele ältere Menschen weniger erholt fühlen, obwohl sie ausreichend lange schlafen.",
    ],
  },
  {
    title: "Häufigeres nächtliches Aufwachen",
    paragraphs: [
      "Weil der Leichtschlaf zunimmt, sinkt die Weckschwelle. Geräusche, Licht, der Gang zur Toilette – was früher problemlos überschalten wurde, reißt jetzt aus dem Schlaf. Diese kurzen Wachphasen zwischen den Schlafzyklen werden plötzlich bewusst erlebt.",
    ],
  },
  {
    title: "Der Schlaf-Wach-Rhythmus verschiebt sich nach vorne",
    paragraphs: [
      "Ältere Menschen neigen dazu, abends früher müde zu werden und morgens früher aufzuwachen. Wer um 21 Uhr einschläft und um 5 Uhr aufwacht, hat 8 Stunden geschlafen – auch wenn es sich anders anfühlt. Das ist kein Problem, sondern ein biologischer Rhythmus.",
    ],
  },
  {
    title: "Mehr Napping am Tag",
    paragraphs: [
      "Als natürliche Reaktion auf die veränderte Nachtstruktur nehmen kurze Schlafperioden am Tag zu. Ein kurzes Nickerchen ist dabei kein Zeichen von Schwäche – sondern der Körper, der sich nimmt, was er braucht.",
    ],
  },
  {
    title: "Die Einschlaflatenz verändert sich kaum",
    paragraphs: [
      "Das Einschlafen selbst verändert sich im Alter weniger stark als oft angenommen. 20-Jährige schlafen nur etwa 5\u00A0% schneller ein als über 70-Jährige (Ohayon et\u00A0al., 2004). Wer das Gefühl hat, ewig nicht einschlafen zu können, sollte nach anderen Ursachen schauen.",
    ],
  },
];

const tips: Section[] = [
  {
    title: "Den eigenen Rhythmus akzeptieren – nicht bekämpfen",
    paragraphs: [
      "Wenn der Körper abends früher müde wird, sollte man darauf hören. Gegen die innere Uhr anzukämpfen verschlechtert den Schlaf.",
    ],
  },
  {
    title: "Morgens ans Tageslicht",
    paragraphs: [
      "Helles Tageslicht am Morgen ist der stärkste Zeitgeber für die innere Uhr. Ein kurzer Spaziergang nach dem Aufstehen verbessert nachts das Einschlafen.",
    ],
  },
  {
    title: "Napping richtig dosieren",
    paragraphs: [
      "Ein Mittagsschlaf bis max. 20 Minuten kann gut tun. Wer länger oder am späten Nachmittag schläft, baut den Schlafdruck für die Nacht ab.",
    ],
  },
  {
    title: "Alkohol konsequent meiden",
    paragraphs: [
      "Im Alter verstärken sich die schlafstörenden Effekte von Alkohol: weniger Tiefschlaf, häufigeres Aufwachen, weniger REM-Schlaf. Was einschläfernd wirkt, sabotiert die Schlafqualität.",
    ],
  },
  {
    title: "Schlafzimmer kühl, dunkel, ruhig",
    paragraphs: [
      "Weil ältere Menschen leichter schlafen, reagieren sie empfindlicher auf Störreize. 16–18\u00A0°C, Verdunkelung und Stille machen einen spürbaren Unterschied.",
    ],
  },
];

export default function SchlafImAlterPage() {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlafwissen</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Schlaf im Alter: Wie sich unser
            <br />
            Schlaf verändert.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            Schlechter schlafen im Alter – das hören wir bei der Schlafberatung
            häufig. Viele Menschen wundern sich, warum sie früher problemlos
            durchgeschlafen haben und heute schon um halb fünf wach liegen. Oder
            warum acht Stunden im Bett sich anfühlen wie fünf. Im Alter muss das
            nicht zwingend mit einer Schlafstörung zusammenhängen – oft steckt
            schlicht die Biologie dahinter.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/blog/schlaf-im-alter.png"
              alt="Älteres Paar schläft in einem gemütlichen Bett mit warmem Licht"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </section>

        {/* Was passiert */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Was passiert mit dem Schlaf, wenn wir älter werden?
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Der Schlaf verändert sich im Laufe des Lebens kontinuierlich. Was
              viele nicht wissen: Diese Veränderungen beginnen nicht erst mit dem
              Rentenalter, sondern bereits ab dem 30. Lebensjahr.
            </p>
            <p>
              Laut einer umfassenden Studie zur Schlafentwicklung im
              Altersverlauf (Ohayon et&nbsp;al., 2004) steigt die nächtliche
              Wachzeit vom 30. bis zum 70. Lebensjahr um etwa{" "}
              <strong>10 Minuten pro Lebensdekade</strong> an.
            </p>
            <p>Gleichzeitig nimmt pro Lebensdekade ab:</p>
            <ul className="ml-4 list-disc space-y-1 pl-2">
              <li>
                <strong>Schlafeffizienz</strong> und{" "}
                <strong>Tiefschlafanteil (N3)</strong> je um etwa 2–3&nbsp;%
              </li>
              <li>
                der <strong>REM-Schlaf</strong> geht ebenfalls zurück
              </li>
              <li>
                der <strong>Leichtschlaf</strong> nimmt zu
              </li>
            </ul>
            <p>
              Die Gesamtschlafdauer sinkt vom 40. bis zum 70. Lebensjahr um rund
              10 Minuten pro Dekade – danach stabilisieren sich die meisten
              Parameter (Frohnhofen &amp; Netzer, 2019).
            </p>
          </div>
        </section>

        {/* Typische Veränderungen */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Typische Veränderungen: Was ist normal?
          </h2>
          <div className="mt-10 space-y-10">
            {changes.map((item, i) => (
              <article
                key={i}
                className="rounded-xl border-2 border-gray-100 p-6 md:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-normal leading-snug md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 space-y-3 pl-11">
                  {item.paragraphs.map((p, pi) => (
                    <p key={pi} className="leading-relaxed text-tagline/80">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Glymphatisches System */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Warum es sich lohnt, den Schlaf im Alter ernst zu nehmen
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
              <p>
                Viele dieser Veränderungen sind normal – und trotzdem lohnt es
                sich, aktiv auf guten Schlaf zu achten. Denn im Schlaf passiert
                mehr als nur Erholen.
              </p>
              <p>
                Das Gehirn reinigt sich nachts aktiv – und das besonders im
                Tiefschlaf. Die sogenannten Liquorräume, also die Hirnbereiche,
                in denen sich die Gehirnflüssigkeit befindet, sind im Schlaf
                erweitert. Über dieses{" "}
                <strong>glymphatische System</strong> werden
                Stoffwechselabbauprodukte abtransportiert, die sich tagsüber im
                Gehirn ansammeln (Iliff et&nbsp;al., 2013). Guter Schlaf ist also
                mehr als Erholung – er ist aktive Hirnpflege.
              </p>
              <p>
                Das ist ein weiterer Grund, die typischen Störfaktoren im Schlaf
                älterer Menschen – häufiges Aufwachen, unpassendes Schlafsystem,
                ungünstige Schlafumgebung – aktiv anzugehen. Die folgenden Tipps
                helfen dabei.
              </p>
            </div>
          </div>
        </section>

        {/* Warnsignale */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Wann ist es mehr als nur Alterserscheinung?
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
            <p>
              Nicht jede Schlafveränderung im Alter ist normal. Ärztliche
              Abklärung ist sinnvoll bei:
            </p>
            <ul className="ml-4 list-disc space-y-2 pl-2">
              <li>
                Lautem Schnarchen mit Atemaussetzern → Hinweis auf Schlafapnoe
              </li>
              <li>
                Kribbeln oder Unruhe in den Beinen beim Einschlafen →
                mögliches Restless-Legs-Syndrom
              </li>
              <li>Starker Tagesmüdigkeit trotz ausreichend langer Nacht</li>
              <li>
                Schlafproblemen, die über mehrere Wochen die Lebensqualität
                deutlich beeinträchtigen
              </li>
            </ul>
            <p>
              Diese Zustände sind behandelbar – und sollten nicht als
              unvermeidliches Altersschicksal abgetan werden.
            </p>
          </div>
        </section>

        {/* Tipps */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            5 Tipps für besseren Schlaf im Alter
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

        {/* Schlafsystem */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Wenn das Schlafsystem nicht mehr passt
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-tagline/80">
              <p>
                Veränderte Schlafmuster bedeuten oft auch veränderte Ansprüche
                ans Schlafsystem. Körpergewicht, Schulterbreite und Liegedruck
                verändern sich – und mit ihnen, was{" "}
                <a
                  href="/matratzen-bocholt"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Matratze
                </a>{" "}
                und{" "}
                <a
                  href="/nackenstuetzkissen-bocholt"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  Kissen
                </a>{" "}
                leisten müssen.
              </p>
              <p>
                Weil ältere Menschen leichter schlafen und empfindlicher auf
                körperliche Spannungen reagieren, spielt das Schlafsystem eine
                größere Rolle als in jüngeren Jahren. Nackenspannungen,
                Taubheitsgefühle in den Armen oder das Gefühl, morgens steif
                aufzuwachen, sind oft klare Signale.
              </p>
              <p>
                Wir schauen uns das gerne gemeinsam an – mit einem echten Blick
                auf deine Schlafsituation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-2xl font-normal md:text-3xl">
            Häufige Fragen zum Schlaf im Alter
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
              )
            )}
          </div>
        </section>

        {/* Autorenbox */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
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
              Gut schlafen bleibt in jedem
              <br />
              Alter möglich.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Du merkst, dass sich dein Schlaf verändert? Wir helfen dir,
              Störfaktoren zu minimieren – ob es die Schlafumgebung, das
              Schlafsystem oder der Rhythmus ist. In einer persönlichen Beratung
              schauen wir gemeinsam, was bei dir im Weg steht.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schlafsystem beraten lassen
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
