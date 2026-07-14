import { calendlyUrl } from "@/lib/calendly";
import { TERMINTAGE } from "@/lib/betriebsferien";

export default function BetriebsferienSection() {
  return (
    <section id="betriebsferien" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <p className="accent-text mb-3 text-sm tracking-wide uppercase">
            Sommer 2026
          </p>
          <h2 className="font-heading text-2xl leading-snug font-normal md:text-3xl">
            Betriebsferien vom 25. Juli bis 15. August.
          </h2>
          <p className="mt-5 leading-relaxed text-tagline/80">
            An diesen Tagen sind wir für Sie im Laden — ausschließlich mit
            reserviertem Termin:
          </p>

          <div className="mt-6 space-y-3">
            {TERMINTAGE.map((woche) => (
              <div key={woche[0].iso} className="flex flex-wrap gap-2">
                {woche.map((tag) => (
                  <span
                    key={tag.iso}
                    className="rounded-lg border border-primary/30 bg-white px-3.5 py-2 text-sm font-semibold text-tagline"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-6 leading-relaxed text-tagline/80">
            Telefonisch und per E-Mail erreichen Sie uns wie gewohnt. Ab
            Dienstag, 18. August, gelten wieder unsere regulären
            Öffnungszeiten.
          </p>

          <a
            href={calendlyUrl("betriebsferien")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Termin reservieren
          </a>
        </div>
      </div>
    </section>
  );
}
