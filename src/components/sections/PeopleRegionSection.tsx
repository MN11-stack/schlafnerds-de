import Image from "next/image";

export default function PeopleRegionSection() {
  return (
    <section id="ueber-uns" className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Aus der Region.
              <br />
              Für die Region.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tagline">
              <p>
                Markus und Dirk – das sind die Schlafnerds. Zwei Menschen mit
                Leidenschaft für guten Schlaf, verwurzelt in Bocholt und
                erreichbar für die gesamte Region: Kreis Borken, Wesel, Dorsten,
                Schermbeck und das niederländische Grenzgebiet.
              </p>
              <p>
                Unser Fachgeschäft in Bocholt ist der Ort, an dem Beratung,
                Probeliegen und ehrliche Gespräche zusammenkommen.
              </p>
            </div>

            {/* Teamfoto */}
            <div className="mt-10 overflow-hidden rounded-2xl">
              <Image
                src="/images/team/dirk-markus-teamfoto.jpeg"
                alt="Dirk und Markus – die Schlafnerds"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* NL Redirect */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-heading text-lg italic text-tagline">
                Voor onze Nederlandse gasten
              </p>
              <p className="mt-2 leading-relaxed text-tagline">
                Schlafnerds adviseert in Bocholt – in het Duits, ter plaatse.
                Voor onze Nederlandse gasten hebben we{" "}
                <a
                  href="https://slaapnerds.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold !text-primary underline underline-offset-2 transition-colors hover:!text-primary-dark"
                >
                  slaapnerds.nl
                </a>{" "}
                ingericht: informatie in uw taal, als voorbereiding op uw
                bezoek.
              </p>
            </div>
          </div>

          {/* Region Map / Store Image */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/region/karte-bocholt.jpg"
                alt="Karte der Region Bocholt – Einzugsgebiet der Schlafnerds"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-normal">
                Schlafnerds Bocholt
              </h3>
              <address className="mt-3 not-italic leading-relaxed text-tagline">
                Nordstraße 39
                <br />
                46395 Bocholt
              </address>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href="tel:+4928713492862"
                  className="flex items-center gap-2 !text-primary transition-colors hover:!text-primary-dark"
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
                <a
                  href="mailto:info@schlafnerds.de"
                  className="flex items-center gap-2 !text-primary transition-colors hover:!text-primary-dark"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@schlafnerds.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
