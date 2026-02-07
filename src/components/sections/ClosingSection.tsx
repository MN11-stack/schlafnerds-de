export default function ClosingSection() {
  return (
    <section id="termin" className="bg-primary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal text-white md:text-4xl md:leading-snug">
            Ihr nächster Schritt.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Ob Sie schon wissen, was Sie suchen, oder einfach erst einmal
            schauen möchten – wir sind für Sie da.
          </p>
        </div>

        {/* Two equal cards */}
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {/* Card A: Termin */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-normal text-tagline">
                Termin vereinbaren
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-tagline">
              Auf Basis einer strukturierten Analyse empfehlen wir Schlafsysteme, die wirklich zu Ihnen passen.
            </p>
            <ul className="mt-6 space-y-3 text-tagline">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>45–60 Minuten Zeit für Sie</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Termine auch außerhalb der Geschäftszeiten möglich</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Entspannter Vergleich mehrerer Schlafsysteme</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Termin wählen
              </a>
            </div>
          </div>

          {/* Card B: Laden besuchen */}
          <div id="laden" className="scroll-mt-24 flex h-full flex-col rounded-2xl bg-white p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-normal text-tagline">
                Laden besuchen
              </h3>
            </div>

            {/* Öffnungszeiten */}
            <div className="mt-4 space-y-1 text-sm text-tagline">
              <p className="font-semibold">Öffnungszeiten</p>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
                <span>Di + Do</span>
                <span>14:00 – 18:00 Uhr</span>
                <span>Fr</span>
                <span>10:00 – 18:00 Uhr</span>
                <span>Sa</span>
                <span>10:00 – 14:00 Uhr</span>
              </div>
            </div>

            {/* Adresse */}
            <address className="mt-4 text-sm not-italic leading-relaxed text-tagline">
              Nordstraße 39, 46395 Bocholt
            </address>

            {/* Was erwartet Sie */}
            <ul className="mt-3 space-y-1 text-sm text-tagline">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Probeliegen auf verschiedenen Systemen</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Persönliche Beratung vor Ort</span>
              </li>
            </ul>

            {/* Actions */}
            <div className="mt-auto pt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Nordstra%C3%9Fe+39,+46395+Bocholt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center text-sm"
              >
                Route planen
              </a>
              <a
                href="tel:+4928713492862"
                className="btn-outline flex-1 text-center text-sm"
              >
                Anrufen
              </a>
            </div>
          </div>
        </div>

        {/* Contact Quick Info */}
        <div
          id="kontakt"
          className="mt-12 inline-flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-white/10 px-8 py-5 text-white/80 sm:flex-row sm:gap-6"
        >
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Nordstraße 39, 46395 Bocholt
          </span>
          <span className="hidden sm:inline">&middot;</span>
          <a
            href="tel:+4928713492862"
            className="flex items-center gap-2 transition-colors hover:!text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +49 (0)2871 – 349 28 62
          </a>
        </div>
      </div>
    </section>
  );
}
