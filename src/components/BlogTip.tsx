type Props = {
  headline: string;
  subline: string;
  href: string;
  cta?: string;
};

export default function BlogTip({
  headline,
  subline,
  href,
  cta = "Artikel lesen",
}: Props) {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
          <p className="accent-text mb-3 text-sm tracking-wide uppercase">
            Lesetipp
          </p>
          <h3 className="font-heading text-xl font-normal leading-snug md:text-2xl">
            {headline}
          </h3>
          <p className="mt-3 leading-relaxed text-tagline/80">{subline}</p>
          <a
            href={href}
            className="mt-5 inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            {cta} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
