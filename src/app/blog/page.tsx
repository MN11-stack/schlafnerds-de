import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schlafwissen – Blog & Ratgeber | Schlafnerds",
  description:
    "Schlafmythen, Schlafhygiene, Chronotypen und mehr: Fundiertes Schlafwissen von den Schlafnerds aus Bocholt – verständlich erklärt und wissenschaftlich geprüft.",
  openGraph: {
    title: "Schlafwissen – Blog & Ratgeber | Schlafnerds",
    description:
      "Fundiertes Schlafwissen von den Schlafnerds aus Bocholt – verständlich erklärt und wissenschaftlich geprüft.",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de/blog",
  },
};

interface Article {
  href: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const articles: Article[] = [
  {
    href: "/blog/schlafhygiene",
    label: "Schlafhygiene",
    title: "Besser einschlafen: 10 Schlafhygiene-Regeln, die wirklich helfen",
    description:
      "Kleine Gewohnheiten, große Wirkung: 10 wissenschaftlich fundierte Regeln für besseres Einschlafen und erholsamere Nächte.",
    image: "/images/blog/schlafhygiene.png",
    imageAlt: "Gemütliches Schlafzimmer mit warmem Licht und aufgeräumtem Nachttisch",
  },
  {
    href: "/blog/schlafmythen",
    label: "Schlafmythen",
    title: "7 Schlafmythen – was wirklich stimmt",
    description:
      "Schlaf vor Mitternacht ist der beste? 8 Stunden sind Pflicht? 7 verbreitete Überzeugungen im Faktencheck.",
    image: "/images/blog/schlafmythen.png",
    imageAlt: "Helles Schlafzimmer mit Sonnenlicht",
  },
  {
    href: "/chronotypen-test",
    label: "Chronotypen-Test",
    title: "Welcher Chronotyp bist du – Lerche oder Eule?",
    description:
      "Finde in 5 Fragen heraus, ob du ein Morgentyp, Abendtyp oder Neutraltyp bist – mit persönlicher Auswertung und Schlaftipps.",
    image: "/images/blog/chronotypen.png",
    imageAlt: "Sonnenaufgang und Abenddämmerung – Lerche oder Eule",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="accent-text mb-4 text-lg">Schlafwissen</p>
          <h1 className="font-heading text-3xl leading-tight font-normal md:text-4xl md:leading-tight">
            Besser schlafen beginnt
            <br />
            mit besserem Wissen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tagline/80">
            Fundierte Artikel rund um Schlaf, Schlafhygiene und Schlafforschung
            – verständlich erklärt und wissenschaftlich geprüft.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-100 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                    {article.label}
                  </p>
                  <h2 className="mt-2 font-heading text-lg font-normal leading-snug">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-tagline/70">
                    {article.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Weiterlesen &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-heading text-2xl font-normal md:text-3xl">
              Du hast eine Frage zu deinem Schlaf?
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-tagline/80">
              Wir beraten dich persönlich – ehrlich, strukturiert und ohne
              Verkaufsdruck.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
