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
  "/nackenstuetzkissen-bocholt": "https://slaapnerds.nl/",
  "/betten-bocholt": "https://slaapnerds.nl/",
  "/erdungsspanntuecher-bocholt": "https://slaapnerds.nl/",
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

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo + Brand Text */}
        <div className="flex items-center shrink-0">
          <a href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Schlafnerds"
              width={180}
              height={48}
              className="h-auto w-[100px] sm:w-[120px] md:w-[140px]"
              priority
            />
          </a>
          <a href="https://slaapnerds.nl/" className="ml-2 no-underline">
            <span className="font-heading text-lg font-bold text-tagline sm:text-xl">Slaap</span>
            <span className="font-heading text-lg font-bold text-primary sm:text-xl">nerds</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-evenly lg:flex">
          <a
            href="/beratung-probeliegen"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Beratung
          </a>

          {/* Betten Dropdown */}
          <div className="group relative">
            <button
              className="flex items-center gap-1 font-[inherit] text-sm font-medium text-tagline transition-colors hover:text-primary"
            >
              Betten
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[180px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                <a
                  href="/boxspringbetten-bocholt"
                  className="block px-4 py-2 text-sm text-tagline transition-colors hover:bg-soft hover:text-primary"
                >
                  Boxspringbetten
                </a>
                <a
                  href="/holzbetten-bocholt"
                  className="block px-4 py-2 text-sm text-tagline transition-colors hover:bg-soft hover:text-primary"
                >
                  Holzbetten
                </a>
              </div>
            </div>
          </div>

          <a
            href="/matratzen-bocholt"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Matratzen
          </a>
          <a
            href="/nackenstuetzkissen-bocholt"
            className="text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Nackenstützkissen
          </a>

          {/* Zubehör Dropdown */}
          <div className="group relative">
            <button
              className="flex items-center gap-1 font-[inherit] text-sm font-medium text-tagline transition-colors hover:text-primary"
            >
              Zubehör
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                <a
                  href="/erdungsspanntuecher-bocholt"
                  className="block px-4 py-2 text-sm text-tagline transition-colors hover:bg-soft hover:text-primary"
                >
                  Erdungsspanntücher
                </a>
              </div>
            </div>
          </div>
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

            {/* Betten group */}
            <div>
              <p className="text-xs font-semibold tracking-wide text-tagline/50 uppercase">
                Betten
              </p>
              <div className="mt-2 flex flex-col gap-3 pl-3">
                <a
                  href="/boxspringbetten-bocholt"
                  className="text-base text-tagline"
                  onClick={() => setMenuOpen(false)}
                >
                  Boxspringbetten
                </a>
                <a
                  href="/holzbetten-bocholt"
                  className="text-base text-tagline"
                  onClick={() => setMenuOpen(false)}
                >
                  Holzbetten
                </a>
              </div>
            </div>

            <a
              href="/matratzen-bocholt"
              className="text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Matratzen
            </a>
            <a
              href="/nackenstuetzkissen-bocholt"
              className="text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Nackenstützkissen
            </a>

            {/* Zubehör group */}
            <div>
              <p className="text-xs font-semibold tracking-wide text-tagline/50 uppercase">
                Zubehör
              </p>
              <div className="mt-2 flex flex-col gap-3 pl-3">
                <a
                  href="/erdungsspanntuecher-bocholt"
                  className="text-base text-tagline"
                  onClick={() => setMenuOpen(false)}
                >
                  Erdungsspanntücher
                </a>
              </div>
            </div>

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
