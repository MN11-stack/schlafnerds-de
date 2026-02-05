import Image from "next/image";

const solutions = [
  {
    title: "Boxspringbetten",
    image: "/images/products/boxspringbett.png",
    alt: "Boxspringbett – komfortables Schlafsystem",
    description:
      "Komfortabler Einstieg, angenehme Liegehöhe, vielseitig in Gestaltung und Härtegrad. Für Menschen, die Wert auf Alltagstauglichkeit und spürbaren Komfort legen.",
  },
  {
    title: "Matratzen",
    image: "/images/products/matratze.png",
    alt: "Hochwertige Matratze mit Taschenfederkern",
    description:
      "Naturlatex, Kaltschaum, Taschenfederkern – jedes Material hat eigene Eigenschaften bei Druckentlastung, Schlafklima und Körperanpassung. Wir helfen Ihnen, die Unterschiede zu verstehen.",
  },
  {
    title: "Holzbetten",
    image: "/images/products/holzbett.png",
    alt: "Massives Eichenbett – langlebig und stilvoll",
    description:
      "Langlebig, stabil, gestalterisch eigenständig. Massivholzbetten bringen Ruhe ins Schlafzimmer – und halten über Jahre, was sie versprechen.",
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
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-normal">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-tagline">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="accent-text text-lg">
            Lassen Sie sich beraten – wir finden gemeinsam heraus, was zu Ihnen
            passt.
          </p>
          <a href="#termin" className="btn-primary mt-6 inline-block">
            Beratungstermin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
