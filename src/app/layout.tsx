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
    "Persönliche Beratung auf Augenhöhe für Matratzen, Boxspringbetten und Holzbetten in Bocholt und der Region. Genial schlafen mit den Schlafnerds.",
  openGraph: {
    title: "Schlafnerds – Fachgeschäft für Schlaflösungen in Bocholt",
    description:
      "Persönliche Beratung auf Augenhöhe für Matratzen, Boxspringbetten und Holzbetten in Bocholt und der Region.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${newsreader.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
