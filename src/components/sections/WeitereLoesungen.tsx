import Image from "next/image";

const allProducts = [
  {
    title: "Matratzen",
    href: "/matratzen-bocholt",
    image: "/images/products/matratze.png",
    alt: "Hochwertige Matratze",
    text: "Naturlatex, Kaltschaum, Taschenfederkern – jedes Material reagiert anders.",
  },
  {
    title: "Boxspringbetten",
    href: "/boxspringbetten-bocholt",
    image: "/images/products/boxspringbett.png",
    alt: "Boxspringbett – komfortables Schlafsystem",
    text: "Komfortabler Einstieg, angenehme Liegehöhe und vielseitig in Härtegrad.",
  },
  {
    title: "Holzbetten",
    href: "/holzbetten-bocholt",
    image: "/images/products/holzbett.png",
    alt: "Massives Holzbett aus Eiche",
    text: "Langlebig, formstabil und gestalterisch eigenständig.",
  },
  {
    title: "Nackenstützkissen",
    href: "/nackenstuetzkissen-bocholt",
    image: "/images/products/nackenstuetzkissen-hero.png",
    alt: "Ergonomisches Nackenstützkissen",
    text: "Zentimetergenaue Anpassung an Ihre Körperstatik und Schlafsituation.",
  },
  {
    title: "Erdungsspanntücher",
    href: "/erdungsspanntuecher-bocholt",
    image: "/images/products/erdungsspanntuch.jpg",
    alt: "Erdungsspanntuch mit Silberfäden",
    text: "Ein Schlaf-Ritual mit Erdverbindung – physikalisch nachweisbar, persönlich beraten.",
  },
];

export default function WeitereLoesungen({
  currentPath,
}: {
  currentPath: string;
}) {
  const others = allProducts.filter((p) => p.href !== currentPath);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Weitere Schlaflösungen bei Schlafnerds.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-gray-100 bg-soft p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-32 items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={200}
                  height={120}
                  className="h-auto max-h-28 w-auto object-contain"
                />
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-tagline group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tagline/70">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
