const services = [
  {
    title: "Wer wir sind",
    videoId: "tqI10w-3VSs",
    description:
      "Ein kurzer Blick hinter die Kulissen: Wer sind die Schlafnerds, was treibt uns an – und warum machen wir das, was wir tun?",
  },
  {
    title: "Kissentaxi – Beratung bei Ihnen zu Hause",
    videoId: "PiCfRn64Dv4",
    description:
      "Manchmal ist es sinnvoll, direkt im eigenen Schlafzimmer zu beraten. Mit dem Kissentaxi kommen wir zu Ihnen – mit einer Auswahl an Kissen, abgestimmt auf Ihre Schlafsituation.",
  },
  {
    title: "Schlafnerds-Beute – besondere Einzelstücke",
    videoId: "tqI10w-3VSs",
    description:
      "Immer wieder finden wir Stücke, die herausragen: besondere Betten, Matratzen oder Accessoires in begrenzter Stückzahl. Wer Lust hat auf Besonderes, schaut regelmäßig vorbei.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Was uns ausmacht.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            Es gibt Dinge, die erklären sich leichter, wenn man sie sieht. Drei
            Einblicke zeigen, wie wir arbeiten – und woran wir glauben.
          </p>
        </div>

        {/* Video Cards */}
        <div className="mt-14 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Video */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${service.videoId}`}
                    title={service.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-heading text-2xl leading-snug font-normal md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-tagline">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
