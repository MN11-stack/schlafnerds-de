interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-heading text-center text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
          Häufig gestellte Fragen.
        </h2>

        <div className="mt-12 divide-y divide-gray-100">
          {faqs.map((faq, i) => (
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
            mainEntity: faqs.map((faq) => ({
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
