import { calendlyUrl } from "@/lib/calendly";

type InlineCTAProps = {
  headline?: string;
  subline?: string;
  buttonLabel?: string;
  utmSource?: string;
};

export default function InlineCTA({
  headline = "Bereit für persönliche Schlafberatung?",
  subline = "45 Minuten Probeliegen mit Beratung – kostenlos und unverbindlich.",
  buttonLabel = "Beratungstermin vereinbaren",
  utmSource = "inline",
}: InlineCTAProps) {
  return (
    <section className="my-12 px-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-primary/5 p-8 text-center md:p-12">
        <h3 className="font-heading text-2xl leading-snug font-normal text-tagline md:text-3xl">
          {headline}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-tagline/80 md:text-lg">
          {subline}
        </p>
        <a
          href={calendlyUrl(utmSource)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
