"use client";

import { useState } from "react";

const questions = [
  {
    question: "Eher warm oder eher kalt im Schlaf?",
    answer:
      "Manche Menschen schwitzen nachts schnell, andere frieren eher. Das beeinflusst, welches Material und welche Matratzenkonstruktion sich für Sie eignet – etwa offenporiger Kaltschaum für bessere Belüftung oder Naturlatex für angenehme Wärmespeicherung.",
  },
  {
    question: "Schulter und Hüfte: eher druckempfindlich?",
    answer:
      "Wenn Sie morgens mit tauben Armen aufwachen oder Druckstellen spüren, ist das ein wichtiger Hinweis. Die richtige Zonierung und Materialwahl kann hier einen deutlichen Unterschied machen – das schauen wir uns gemeinsam an.",
  },
  {
    question: "Liegegefühl: eher hart, stabil oder weich?",
    answer:
      "Es gibt kein objektiv richtiges Liegegefühl. Manche bevorzugen festen Halt, andere mögen ein weiches Einsinken. Ihre persönliche Präferenz ist ein guter Ausgangspunkt – zusammen mit der Körperstatik ergibt sich daraus eine fundierte Empfehlung.",
  },
];

export default function OrientationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            3 Fragen zur Orientierung
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Nehmen Sie sich einen Moment – diese Eindrücke helfen uns, schneller
            zur passenden Lösung zu kommen.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-lg font-medium">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
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
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-tagline">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing line + CTA */}
        <div className="mt-10 text-center">
          <p className="accent-text text-lg">
            Bringen Sie diese Eindrücke mit – wir ordnen das gemeinsam ein.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Beratungstermin vereinbaren
            </a>
            <a href="#laden" className="btn-outline">
              Laden besuchen &amp; Probeliegen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
