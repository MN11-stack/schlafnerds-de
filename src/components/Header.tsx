"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const deToNlMapping: Record<string, string> = {
  "/": "https://slaapnerds.nl/",
  "/boxspringbetten-bocholt": "https://slaapnerds.nl/boxspringbedden",
  "/matratzen-bocholt": "https://slaapnerds.nl/matrassen",
  "/holzbetten-bocholt": "https://slaapnerds.nl/houten-bedden",
  "/beratung-probeliegen": "https://slaapnerds.nl/service-en-advies",
  "/betten-bocholt": "https://slaapnerds.nl/",
};

function NlFlag() {
  return (
    <svg className="h-[13px] w-[18px] shrink-0 rounded-[2px]" viewBox="0 0 640 480">
      <rect width="640" height="160" fill="#AE1C28" />
      <rect y="160" width="640" height="160" fill="#FFF" />
      <rect y="320" width="640" height="160" fill="#21468B" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const nlUrl = deToNlMapping[pathname] || "https://slaapnerds.nl/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      {/* Main Header Bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Schlafnerds"
            width={180}
            height={48}
            className="h-auto w-[120px] sm:w-[140px] md:w-[180px]"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 justify-center gap-8 lg:flex">
          <a
            href="/beratung-probeliegen"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Beratung
          </a>
          <a
            href="/boxspringbetten-bocholt"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Boxspringbetten
          </a>
          <a
            href="/matratzen-bocholt"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Matratzen
          </a>
          <a
            href="/holzbetten-bocholt"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Holzbetten
          </a>
        </nav>

        {/* Desktop CTA - only visible on lg screens */}
        <a
          href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !hidden shrink-0 text-sm lg:!inline-flex"
        >
          Beratungstermin
        </a>

        {/* Desktop Language Switcher */}
        <a
          href={nlUrl}
          className="hidden items-center gap-1.5 border-l border-gray-200 pl-4 ml-3 text-sm font-medium text-tagline transition-colors hover:text-primary lg:inline-flex"
          aria-label="Naar de Nederlandse versie"
        >
          <NlFlag />
          Nederlands
        </a>

        {/* Mobile/Tablet CTA - compact version */}
        <a
          href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium !text-white lg:hidden"
        >
          Termin
        </a>

        {/* Mobile/Tablet Burger Button - visible below lg */}
        <button
          className="flex h-12 w-12 flex-col items-center justify-center gap-[6px] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[3px] w-7 rounded-full bg-gray-700 transition-all duration-200 ${
              menuOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-7 rounded-full bg-gray-700 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-7 rounded-full bg-gray-700 transition-all duration-200 ${
              menuOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="/beratung-probeliegen"
              className="text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Beratung
            </a>
            <a
              href="/boxspringbetten-bocholt"
              className="text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Boxspringbetten
            </a>
            <a
              href="/matratzen-bocholt"
              className="text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Matratzen
            </a>
            <a
              href="/holzbetten-bocholt"
              className="text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Holzbetten
            </a>
            <a
              href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 text-center !text-white"
              onClick={() => setMenuOpen(false)}
            >
              Beratungstermin vereinbaren
            </a>
            <a
              href={nlUrl}
              className="mt-3 flex items-center justify-center gap-2 border-t border-gray-100 pt-4 text-base text-tagline"
              onClick={() => setMenuOpen(false)}
              aria-label="Naar de Nederlandse versie"
            >
              <NlFlag />
              Nederlands
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
