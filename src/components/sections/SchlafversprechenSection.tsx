export default function SchlafversprechenSection() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
          <p className="accent-text mb-3 text-sm tracking-wide uppercase">
            Unser Versprechen
          </p>
          <h2 className="font-heading text-2xl leading-snug font-normal md:text-3xl">
            Unsere Beratung endet nicht mit dem Verkauf,
            <br />
            sondern wenn du gut schläfst.
          </h2>
          <p className="mt-5 leading-relaxed text-tagline/80">
            In 98 von 100 Beratungen liegen wir mit unserer Empfehlung
            richtig. Bei den anderen 2 % bleiben wir dran und arbeiten nach.
          </p>
          <p className="mt-8 font-semibold text-tagline">
            Was das konkret heißt:
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
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
                Wenn nach ein paar Wochen etwas nicht passt: melde dich.
                Wir kommen vorbei und schauen, woran es liegt.
              </span>
            </li>
            <li className="flex items-start gap-3">
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
                Wenn die Stützung an Schulter oder Becken noch nicht optimal
                ist, arbeiten wir gezielt nach — Matratze, Lattenrostzone
                oder Topper, je nachdem wo der Punkt liegt.
              </span>
            </li>
            <li className="flex items-start gap-3">
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
                Du gehst nicht allein raus mit deinem Schlafsystem. Auch
                nach dem Kauf bleiben wir erreichbar.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
