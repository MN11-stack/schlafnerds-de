import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-tagline text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Kontakt */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Schlafnerds"
              width={150}
              height={40}
              className="mb-6 brightness-0 invert"
            />
            <p className="accent-text mb-4 text-lg !text-white/80">
              &ldquo;Genial schlafen mit den Schlafnerds&rdquo;
            </p>
            <address className="not-italic leading-relaxed text-white/70">
              Nordstraße 39
              <br />
              46395 Bocholt
              <br />
              <a
                href="tel:+492871349286"
                className="mt-2 inline-block transition-colors hover:!text-primary"
              >
                +49 (0)2871 – 349 28 62
              </a>
              <br />
              <a
                href="mailto:info@schlafnerds.de"
                className="transition-colors hover:!text-primary"
              >
                info@schlafnerds.de
              </a>
            </address>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-6 font-heading text-lg italic text-white">
              Auf dieser Seite
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#beratung"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Beratung auf Augenhöhe
              </a>
              <a
                href="#loesungen"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Lösungsräume
              </a>
              <a
                href="#services"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Services
              </a>
              <a
                href="#ueber-uns"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Menschen & Region
              </a>
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Termin vereinbaren
              </a>
              <a
                href="/betten-bocholt"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Betten in Bocholt & Region
              </a>
            </nav>
          </div>

          {/* Column 3: Schlafwissen */}
          <div>
            <h3 className="mb-6 font-heading text-lg italic text-white">
              Schlafwissen
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="/blog"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Alle Artikel
              </a>
              <a
                href="/blog/schlafhygiene"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Schlafhygiene-Regeln
              </a>
              <a
                href="/blog/schlafmythen"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                7 Schlafmythen
              </a>
              <a
                href="/chronotypen-test"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Chronotypen-Test
              </a>
            </nav>
          </div>

          {/* Column 4: Rechtliches */}
          <div>
            <h3 className="mb-6 font-heading text-lg italic text-white">
              Rechtliches
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="/impressum"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-white/70 transition-colors hover:!text-primary"
              >
                Datenschutzerklärung
              </a>
            </nav>

            <div className="mt-8">
              <h3 className="mb-4 font-heading text-lg italic text-white">
                Für unsere niederländischen Gäste
              </h3>
              <a
                href="https://slaapnerds.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:!text-primary"
              >
                slaapnerds.nl besuchen
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Schlafnerds &middot; Alle Rechte
            vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
