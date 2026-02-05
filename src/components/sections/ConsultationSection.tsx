import Image from "next/image";

export default function ConsultationSection() {
  return (
    <section id="beratung" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">
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

            <div className="mt-8 space-y-8">
              {/* Step 1 */}
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-lg text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-medium">
                    Sie prüfen Ihr Gefühl.
                  </h3>
                  <p className="mt-2 leading-relaxed text-tagline">
                    Wie fühlt sich das Liegen an? Was spüren Sie an Schulter,
                    Rücken, Hüfte? Ihr Körper gibt Ihnen wichtige Hinweise – und
                    wir geben Ihnen die Ruhe, diese wahrzunehmen.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-lg text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-medium">
                    Wir prüfen die Körperstatik.
                  </h3>
                  <p className="mt-2 leading-relaxed text-tagline">
                    Währenddessen beobachten wir, wie Ihre Wirbelsäule liegt, ob
                    Schultern und Hüfte ausreichend einsinken und ob die
                    Unterstützung zur Körperform passt.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-lg text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-medium">
                    Dann sprechen wir darüber.
                  </h3>
                  <p className="mt-2 leading-relaxed text-tagline">
                    Unsere Beobachtungen erklären wir Ihnen offen und
                    verständlich. Daraus entsteht – gemeinsam – eine Empfehlung,
                    die sich für Sie richtig anfühlt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
