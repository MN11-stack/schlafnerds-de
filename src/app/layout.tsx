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
  title: "Bettengeschäft Bocholt | Persönliche Schlafberatung bei Schlafnerds",
  description:
    "Ihr Bettengeschäft in Bocholt: Individuelle Matratzen-Beratung mit Körperstatik-Check & Probeliegen. Kostenlos & unverbindlich – Di, Do, Fr & Sa geöffnet. Jetzt Termin buchen!",
  openGraph: {
    title: "Bettengeschäft Bocholt | Persönliche Schlafberatung bei Schlafnerds",
    description:
      "Ihr Bettengeschäft in Bocholt: Individuelle Matratzen-Beratung mit Körperstatik-Check & Probeliegen. Kostenlos & unverbindlich.",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schlafnerds.de",
    languages: {
      "de-DE": "https://www.schlafnerds.de",
      "nl-NL": "https://slaapnerds.nl",
    },
  },
};

// Organization Schema (global)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.schlafnerds.de/#organization",
  name: "Schlafnerds",
  url: "https://www.schlafnerds.de",
  logo: {
    "@type": "ImageObject",
    url: "https://www.schlafnerds.de/images/logo.svg",
    width: 180,
    height: 48,
  },
  sameAs: [
    "https://slaapnerds.nl",
    "https://www.instagram.com/schlafnerds/",
  ],
};

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.schlafnerds.de/#localbusiness",
  name: "Schlafnerds",
  description:
    "Fachgeschäft für Schlaflösungen in Bocholt. Persönliche Beratung für Matratzen, Boxspringbetten und Holzbetten.",
  url: "https://www.schlafnerds.de",
  telephone: "+4928713492862",
  email: "info@schlafnerds.de",
  image: "https://www.schlafnerds.de/images/store/ladenlokal-betten.jpeg",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nordstraße 39",
    addressLocality: "Bocholt",
    postalCode: "46395",
    addressRegion: "Nordrhein-Westfalen",
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
    {
      "@type": "State",
      name: "Nordrhein-Westfalen",
      containedInPlace: {
        "@type": "Country",
        name: "Germany",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Kreis Borken",
    },
    {
      "@type": "AdministrativeArea",
      name: "Achterhoek",
      containedInPlace: {
        "@type": "Country",
        name: "Netherlands",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Twente",
      containedInPlace: {
        "@type": "Country",
        name: "Netherlands",
      },
    },
  ],
  sameAs: [
    "https://slaapnerds.nl",
    "https://www.instagram.com/schlafnerds/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  parentOrganization: {
    "@id": "https://www.schlafnerds.de/#organization",
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
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
