const services = [
  {
    title: "Wer wir sind",
    videoId: "tqI10w-3VSs",
    description:
      "Markus und Dirk – zwei Menschen, die guten Schlaf persönlich nehmen. In diesem Video lernen Sie uns kennen: wie wir beraten, worauf wir achten und warum Transparenz für uns kein Schlagwort ist, sondern Arbeitsweise.",
    primaryCta: {
      label: "Beratungstermin vereinbaren",
      href: "https://calendly.com/schlafnerds/45min?back=1&month=2026-02",
      external: true,
    },
    secondaryCta: {
      label: "Direkt vorbeikommen",
      href: "#laden",
      external: false,
    },
  },
  {
    title: "Kissentaxi – Beratung bei Ihnen zu Hause",
    videoId: "PiCfRn64Dv4",
    description:
      "Manchmal ist es sinnvoll, direkt im eigenen Schlafzimmer zu beraten. Mit dem Kissentaxi kommen wir zu Ihnen – mit einer Auswahl an Kissen, abgestimmt auf Ihre Schlafsituation. Nah, praktisch und persönlich.",
    primaryCta: {
      label: "Anrufen und Kissentaxi ordern",
      href: "tel:+4928713492862",
      external: false,
    },
    secondaryCta: null,
  },
  {
    title: "Schlafnerds-Beute – besondere Einzelstücke",
    videoId: "unSCTO_rKME",
    description:
      "Immer wieder finden wir Stücke, die herausragen: besondere Betten, Matratzen oder Accessoires in begrenzter Verfügbarkeit. Wer Lust hat auf Besonderes, schaut regelmäßig bei uns vorbei.",
    primaryCta: {
      label: "Im Laden ansehen",
      href: "#laden",
      external: false,
    },
    secondaryCta: {
      label: "Anrufen",
      href: "tel:+4928713492862",
      external: false,
    },
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-soft">
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

              {/* Text + CTA */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-heading text-2xl leading-snug font-normal md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-tagline">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={service.primaryCta.href}
                    {...(service.primaryCta.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="btn-primary text-sm"
                  >
                    {service.primaryCta.label}
                  </a>
                  {service.secondaryCta && (
                    <a
                      href={service.secondaryCta.href}
                      {...(service.secondaryCta.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="btn-outline text-sm"
                    >
                      {service.secondaryCta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
