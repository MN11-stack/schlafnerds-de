import type { Metadata } from "next";
import { Newsreader, Nunito } from "next/font/google";
import "./globals.css";
import { aggregateRatingSchema, getGoogleReviews } from "@/lib/google-reviews";
import { specialOpeningHours } from "@/lib/betriebsferien";
import FerienBanner from "@/components/FerienBanner";

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
  title: "Betten, Matratzen & Schlafberatung Bocholt | Schlafnerds",
  description:
    "Ihr Bettengeschäft in Bocholt: individuelle Matratzen-Beratung mit Körperstatik-Check und Probeliegen. Di, Do, Fr & Sa geöffnet – Termin online buchen.",
  openGraph: {
    title: "Betten, Matratzen & Schlafberatung Bocholt | Schlafnerds",
    description:
      "Ihr Bettengeschäft in Bocholt: individuelle Matratzen-Beratung mit Körperstatik-Check und Probeliegen.",
    locale: "de_DE",
    type: "website",
    url: "https://www.schlafnerds.de",
    siteName: "Schlafnerds",
    images: [
      {
        url: "https://www.schlafnerds.de/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Schlafnerds – Persönliche Schlafberatung in Bocholt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betten, Matratzen & Schlafberatung Bocholt | Schlafnerds",
    description:
      "Ihr Bettengeschäft in Bocholt: individuelle Matratzen-Beratung mit Körperstatik-Check und Probeliegen.",
    images: ["https://www.schlafnerds.de/images/og-image.png"],
  },
  alternates: {
    canonical: "https://www.schlafnerds.de",
    languages: {
      "de-DE": "https://www.schlafnerds.de",
      "nl-NL": "https://www.slaapnerds.nl",
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
    "https://www.slaapnerds.nl",
    "https://www.instagram.com/schlafnerds/",
  ],
};

// LocalBusiness Schema (Reviews dynamisch aus Places API)
function buildLocalBusinessSchema(reviews: Awaited<ReturnType<typeof getGoogleReviews>>) {
  return {
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
    specialOpeningHoursSpecification: specialOpeningHours(),
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
      "https://www.slaapnerds.nl",
      "https://www.instagram.com/schlafnerds/",
    ],
    aggregateRating: aggregateRatingSchema(reviews),
    parentOrganization: {
      "@id": "https://www.schlafnerds.de/#organization",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reviews = await getGoogleReviews();
  const localBusinessSchema = buildLocalBusinessSchema(reviews);
  return (
    <html lang="de" suppressHydrationWarning>
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
        <FerienBanner />
        {children}
      </body>
    </html>
  );
}
