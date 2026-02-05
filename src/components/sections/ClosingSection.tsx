export default function ClosingSection() {
  return (
    <section id="termin" className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-heading text-3xl leading-snug font-normal text-white md:text-4xl md:leading-snug">
          Ihr nächster Schritt.
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-white/90">
          Ob Sie schon wissen, was Sie suchen, oder einfach erst einmal schauen
          möchten – wir sind für Sie da.
        </p>

        <div className="mt-10">
          <a
            href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-body text-base font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Beratungstermin vereinbaren
          </a>
        </div>

        {/* Contact Quick Info */}
        <div
          id="kontakt"
          className="mt-12 inline-flex flex-col items-center gap-2 rounded-xl bg-white/10 px-8 py-5 text-white/80 sm:flex-row sm:gap-6"
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
