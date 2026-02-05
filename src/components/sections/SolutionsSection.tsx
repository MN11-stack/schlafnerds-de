import Image from "next/image";

const solutions = [
  {
    title: "Boxspringbetten",
    image: "/images/products/boxspringbett.png",
    alt: "Boxspringbett – komfortables Schlafsystem",
    description:
      "Komfortabler Einstieg, angenehme Liegehöhe, vielseitig in Gestaltung und Härtegrad. Für Menschen, die Wert auf Alltagstauglichkeit und spürbaren Komfort legen.",
    bullets: [
      "Komfortabler Einstieg & spürbare Liegehöhe",
      "Vielseitig in Härtegrad & Design",
      "Gut für den Alltag – leicht zu pflegen",
    ],
    linkText: "Mehr erfahren",
    linkHref: "/boxspringbetten-bocholt",
  },
  {
    title: "Matratzen",
    image: "/images/products/matratze.png",
    alt: "Hochwertige Matratze mit Taschenfederkern",
    description:
      "Naturlatex, Kaltschaum, Taschenfederkern – jedes Material hat eigene Eigenschaften bei Druckentlastung, Schlafklima und Körperanpassung. Wir helfen Ihnen, die Unterschiede zu verstehen.",
    bullets: [
      "Verschiedene Materialien mit eigener Logik",
      "Druckentlastung & Schlafklima verstehen",
      "Passt zu vielen Bettsystemen",
    ],
    linkText: "Mehr erfahren",
    linkHref: "/matratzen-bocholt",
  },
  {
    title: "Holzbetten",
    image: "/images/products/holzbett.png",
    alt: "Massives Eichenbett – langlebig und stilvoll",
    description:
      "Langlebig, stabil, gestalterisch eigenständig. Massivholzbetten bringen Ruhe ins Schlafzimmer – und halten über Jahre, was sie versprechen.",
    bullets: [
      "Langlebig & formstabil",
      "Natürliches Material, ruhige Ästhetik",
      "Konstruktion, die über Jahre hält",
    ],
    linkText: "Konstruktion & Material ansehen",
    linkHref: "#laden",
  },
];

export default function SolutionsSection() {
  return (
    <section id="loesungen" className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Orientierung statt Überangebot.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Drei Bereiche, die den Unterschied machen – mit jeweils eigener
            Logik und eigenen Stärken.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-2xl font-normal">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-tagline">
                  {item.description}
                </p>

                {/* Micro-Bullets */}
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-tagline"
                    >
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
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Category Link */}
                <a
                  href={item.linkHref}
                  className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  {item.linkText}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Visual + CTA */}
        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/team/dirk-stoffmuster.jpeg"
              alt="Dirk zeigt Stoffmuster – persönliche Materialberatung"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="accent-text text-xl">
              Lassen Sie sich beraten – wir finden gemeinsam heraus, was zu
              Ihnen passt.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Beratungstermin vereinbaren
              </a>
              <a href="#laden" className="btn-outline">
                Laden besuchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
