import Image from "next/image";

const steps = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Sie prüfen Ihr Gefühl.",
    text: "Wie fühlt sich das Liegen an? Ihr Körper gibt Ihnen wichtige Hinweise – wir geben Ihnen die Ruhe, diese wahrzunehmen.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Wir prüfen die Körperstatik.",
    text: "Währenddessen beobachten wir Wirbelsäule, Schulter und Hüfte – und ob die Unterstützung zur Körperform passt.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Gemeinsam einordnen & entscheiden.",
    text: "Unsere Beobachtungen erklären wir offen und verständlich. Daraus entsteht – gemeinsam – eine Empfehlung, die sich für Sie richtig anfühlt.",
  },
];

const appointmentDetails = [
  "45–60 Minuten, in ruhiger Atmosphäre",
  "Ausführliches Probeliegen auf verschiedenen Systemen",
  "Körperstatik-Check mit verständlicher Einordnung",
  "Gemeinsame Empfehlung – transparent und in Ihrem Tempo",
];

export default function ConsultationSection() {
  return (
    <section id="beratung" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/team/dirk-beratung.jpg"
                alt="Dirk erklärt die Körperstatik bei der Schlafberatung"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="accent-text mb-3 text-base">
              Der Schlüssel zu einer stimmigen Empfehlung
            </p>
            <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
              Zwei Perspektiven.
              <br />
              Eine Empfehlung.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-tagline">
              Wenn Sie bei uns Probe liegen, geschehen zwei Dinge gleichzeitig:
            </p>

            {/* Stepper */}
            <div className="relative mt-8 space-y-8 pl-14">
              {/* Vertical connector line */}
              <div className="absolute top-5 bottom-5 left-5 w-px bg-primary/20" />

              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-5">
                  {/* Icon circle */}
                  <div className="absolute -left-14 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-tagline">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminablauf Block */}
        <div className="mt-16 rounded-2xl bg-soft p-8 md:p-10">
          <h3 className="font-heading text-2xl font-normal">
            So läuft Ihr Termin ab
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {appointmentDetails.map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-tagline">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
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
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Beratungstermin vereinbaren
            </a>
            <a href="#laden" className="btn-outline">
              Laden besuchen &amp; Probeliegen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
