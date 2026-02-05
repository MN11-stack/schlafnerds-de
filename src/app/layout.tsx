import type { Metadata } from "next";
import { Newsreader, Nunito } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Schlafnerds – Fachgeschäft für Schlaflösungen in Bocholt",
  description:
    "Persönliche Schlafberatung & Probeliegen in Bocholt. Matratzen, Boxspringbetten und Holzbetten – Di, Do, Fr & Sa geöffnet. Schlafnerds.",
  openGraph: {
    title: "Schlafnerds – Fachgeschäft für Schlaflösungen in Bocholt",
    description:
      "Persönliche Schlafberatung & Probeliegen in Bocholt. Matratzen, Boxspringbetten und Holzbetten für die Region.",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FurnitureStore"],
  name: "Schlafnerds",
  description:
    "Fachgeschäft für Schlaflösungen in Bocholt. Persönliche Beratung für Matratzen, Boxspringbetten und Holzbetten.",
  url: "https://schlafnerds.de",
  telephone: "+4928713492862",
  email: "info@schlafnerds.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nordstraße 39",
    addressLocality: "Bocholt",
    postalCode: "46395",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.8386,
    longitude: 6.6161,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Bocholt" },
    { "@type": "AdministrativeArea", name: "Kreis Borken" },
    { "@type": "City", name: "Wesel" },
    { "@type": "City", name: "Hamminkeln" },
    { "@type": "City", name: "Dorsten" },
    { "@type": "City", name: "Schermbeck" },
  ],
  sameAs: ["https://slaapnerds.nl"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${newsreader.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
