import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "7 Schlafmythen – was wirklich stimmt | Schlafnerds",
  description:
    "Schlaf vor Mitternacht ist der beste? 8 Stunden sind Pflicht? Wir prüfen 7 verbreitete Schlafmythen – wissenschaftlich fundiert und verständlich erklärt.",
  openGraph: {
    title: "7 Schlafmythen – was wirklich stimmt | Schlafnerds",
    description:
      "7 verbreitete Schlafmythen im Faktencheck. Wissenschaftlich fundiert, verständlich erklärt – von den Schlafnerds aus Bocholt.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog/schlafmythen",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Schlafmythen – was wirklich stimmt",
  description:
    "Schlaf vor Mitternacht ist der beste? 8 Stunden sind Pflicht? Wir prüfen 7 verbreitete Schlafmythen – wissenschaftlich fundiert und verständlich erklärt.",
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
    "@id": "https://www.schlafnerds.de/blog/schlafmythen",
  },
};

interface Myth {
  title: string;
  verdict: string;
  paragraphs: string[];
}

const myths: Myth[] = [
  {
    title: `„Wer sich abends auspowert, schläft besser"`,
    verdict: "Stimmt nicht.",
    paragraphs: [
      "Körper und Geist brauchen etwa zwei Stunden Ruhe vor dem Einschlafen. Sport am Abend erhöht die Körpertemperatur und den Cortisol-Spiegel, der nur langsam wieder abfällt – beides verhindert das Einschlafen. Denn erst mit dem Absinken der Körpertemperatur wird Einschlafen möglich.",
      "Sport am Nachmittag hingegen fördert das Einschlafen, erhöht die Schlafeffizienz und steigert den Tiefschlafanteil.",
    ],
  },
  {
    title: `„Ein Schlummertrunk am Abend hilft beim Einschlafen"`,
    verdict: "Nur auf den ersten Blick.",
    paragraphs: [
      "Alkohol fördert zwar das Einschlafen – in der zweiten Nachthälfte stört er jedoch massiv den Schlafablauf: häufigeres Aufwachen, fragmentierte Schlafstruktur und reduzierter REM-Schlaf sind die Folge. Der vermeintliche Schlummertrunk ist daher trügerisch.",
      "Besser: Leichte, gut verdauliche Mahlzeiten am Abend. Schwere Speisen führen dazu, dass das Verdauungssystem die ganze Nacht mit Prozessen beschäftigt ist, die sonst tagsüber ablaufen – Völlegefühl und Blähungen stören die Schlafqualität massiv.",
    ],
  },
  {
    title: `„Schlaf vor Mitternacht ist der beste Schlaf"`,
    verdict: "So pauschal stimmt das nicht.",
    paragraphs: [
      "Die ersten 3–4 Stunden nach dem Einschlafen sind am erholsamsten – unabhängig vom Zeitpunkt. In dieser Phase durchläuft der Körper die meisten Tiefschlafphasen.",
      "Allerdings hat jeder Mensch seine eigene biologische Mitternacht: Sie liegt etwa 4 Stunden nach dem Einschlafen. Wer um 22 Uhr einschläft, erreicht sie gegen 2 Uhr. Beim Bäcker, der schon um 20 Uhr schläft, liegt der erholsamste Schlaf tatsächlich vor Mitternacht.",
    ],
  },
  {
    title: `„8 Stunden Schlaf sind der Goldstandard"`,
    verdict: "Die Schlafdauer ist individuell.",
    paragraphs: [
      "Die meisten Menschen brauchen zwischen 7 und 8 Stunden – manche kommen mit 5 Stunden aus, andere benötigen bis zu 9. Aber Vorsicht: Während kurze Ausnahmen kein Problem darstellen, führt chronisches Schlafdefizit zu erheblichen Gesundheitsrisiken.",
      "Mehrere Studien belegen einen signifikanten Anstieg des Krebs- und Alzheimer-Risikos durch dauerhaft zu wenig Schlaf. Hinzu kommt: Schlafmangel führt zu Hormonveränderungen, die den Appetit steigern und das Gewichtsmanagement erschweren.",
      "Die innere Uhr bestimmt, ob jemand Kurz- oder Langschläfer ist – ein individuelles Merkmal, das ein Leben lang bestehen bleibt.",
    ],
  },
  {
    title: `„Wer durchschläft, schläft gut"`,
    verdict: "Kurzes Aufwachen in der Nacht ist völlig normal.",
    paragraphs: [
      "Pro Stunde Schlaf gibt es 10–20 innere Weckreaktionen, sogenannte Arousals. Etwa fünfmal pro Nacht wachen wir tatsächlich kurz auf. Wir erinnern uns aber nur daran, wenn die Wachphase länger als 3 Minuten dauert. Die meisten Aufwachreaktionen bleiben am nächsten Morgen also unbemerkt.",
      "Wenn du nachts aufwachst: Einfach umdrehen – das ist der beste Weg, wieder einzuschlafen.",
    ],
  },
  {
    title: `„Schlaf ist Ruhe für Körper und Geist"`,
    verdict: `Schlaf ist tatsächlich Ruhe – aber eine Ruhe voller Aktivität.`,
    paragraphs: [
      "Während wir schlafen, läuft der Organismus auf Hochtouren: Das Gehirn sortiert und konsolidiert Erinnerungen, das Immunsystem regeneriert sich, Hormone werden neu kalibriert, und Zellschäden werden repariert.",
      `Im REM-Schlaf ist das Gehirn teilweise sogar aktiver als im Wachzustand und verbraucht dort mehr Energie. Etwa ein Drittel des täglichen Energiebedarfs wird in der Nacht verbraucht – Schlaf ist also alles andere als passiv. Es ist die produktivste „Ruhe", die unser Körper kennt.`,
    ],
  },
  {
    title: `„Bei Vollmond schläft man schlechter"`,
    verdict: "Wissenschaftlich nicht belegt.",
    paragraphs: [
      "Von vielen Studien konnte nur eine einzige (Cajochen et al., 2013, Schweiz) einen Zusammenhang finden – eine direkte Folgestudie (Cordi et al., 2014) kam wie viele Studien zuvor zum gegenteiligen Ergebnis.",
      "Es gibt auch keinen statistisch nachweisbaren Zusammenhang zwischen Vollmond und der Zahl von Verkehrsunfällen, Gewaltverbrechen oder Schlafwandeln. Dem Mythos liegen nach bisheriger Datenlage nur subjektive Faktoren zugrunde.",
    ],
  },
];

export default function SchlafmythenPage() {
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
          <p className="accent-text mb-4 text-lg">Schlafwissen</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            7 Schlafmythen –<br />
            was wirklich stimmt.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tagline/80">
            Schlaf vor Mitternacht ist der beste? 8 Stunden sind Pflicht? Und
            ein Schlummertrunk hilft beim Einschlafen? Rund um den Schlaf
            kursieren viele Überzeugungen – einige davon stimmen, andere führen
            in die Irre. Wir räumen auf.
          </p>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl md:h-80">
            <Image
              src="/images/blog/schlafmythen.png"
              alt="Helles Schlafzimmer mit Sonnenlicht"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </section>

        {/* Myths */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <div className="space-y-12">
            {myths.map((myth, i) => (
              <article
                key={i}
                className="rounded-xl border-2 border-gray-100 p-6 md:p-8"
              >
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                  Mythos {i + 1}
                </p>
                <h2 className="mt-2 font-heading text-xl leading-snug font-normal md:text-2xl">
                  {myth.title}
                </h2>
                <p className="mt-4 font-semibold text-primary">
                  {myth.verdict}
                </p>
                <div className="mt-3 space-y-3">
                  {myth.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="leading-relaxed text-tagline/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Author */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
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
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Besser schlafen beginnt oft damit,
              <br />
              alte Überzeugungen loszulassen.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Wenn du mehr über deinen persönlichen Schlaftyp erfahren möchtest,
              mach unseren Chronotypen-Test. Und wenn du das Gefühl hast, dass
              dein Schlafsystem nicht zu dir passt – wir beraten dich gerne
              persönlich.
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
