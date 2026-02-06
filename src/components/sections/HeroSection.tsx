import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 md:pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <p className="accent-text mb-4 text-lg">
              Fachgeschäft für Schlaflösungen in Bocholt
            </p>
            <h1 className="font-heading text-4xl leading-tight font-normal md:text-5xl md:leading-tight">
              Schlafen ist persönlich.
              <br />
              Unsere Beratung auch.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tagline">
              Wir nehmen uns Zeit, um gemeinsam mit Ihnen die Lösung zu finden,
              die zu Ihrem Körper und Ihrem Alltag passt. Persönlich, vor Ort,
              auf Augenhöhe.
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

            {/* Regional Trust Signal */}
            <div className="mt-10 flex items-center gap-3 text-sm text-tagline/70">
              <svg
                className="h-5 w-5 shrink-0 text-primary"
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
              <span>
                Ihr Fachgeschäft in Bocholt – für die Region Borken, Wesel,
                Dorsten und das NL-Grenzgebiet
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/store/dirk-markus.jpeg"
                alt="Dirk und Markus – das Team von Schlafnerds in Bocholt"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Name Labels */}
            <div className="mt-3 flex justify-around px-4 text-sm text-tagline">
              <span className="text-center">
                Markus
                <br />
                <span className="text-xs text-tagline/70">(Schlafcoach IST)</span>
              </span>
              <span className="text-center">
                Dirk
                <br />
                <span className="text-xs text-tagline/70">(Ergopraktiker)</span>
              </span>
            </div>
            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
