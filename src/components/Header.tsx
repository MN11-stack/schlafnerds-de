"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.svg"
              alt="Schlafnerds"
              width={180}
              height={48}
              className="h-auto w-[140px] md:w-[180px]"
              priority
            />
          </a>

          {/* Desktop Navigation - centered links */}
          <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
            <a
              href="/beratung-probeliegen"
              className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
            >
              Beratung
            </a>
            <a
              href="/boxspringbetten-bocholt"
              className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
            >
              Boxspringbetten
            </a>
            <a
              href="/matratzen-bocholt"
              className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
            >
              Matratzen
            </a>
            <a
              href="/holzbetten-bocholt"
              className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
            >
              Holzbetten
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden shrink-0 text-sm md:inline-flex"
          >
            Beratungstermin
          </a>

          {/* Mobile Menu Button (Burger) */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <span
              className={`block h-[3px] w-6 rounded-full bg-tagline transition-all duration-300 ${
                menuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-6 rounded-full bg-tagline transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-6 rounded-full bg-tagline transition-all duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96" : "max-h-0 border-t-0"
          }`}
        >
          <nav className="px-6 pb-6">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="/beratung-probeliegen"
                className="font-body text-base text-tagline"
                onClick={() => setMenuOpen(false)}
              >
                Beratung
              </a>
              <a
                href="/boxspringbetten-bocholt"
                className="font-body text-base text-tagline"
                onClick={() => setMenuOpen(false)}
              >
                Boxspringbetten
              </a>
              <a
                href="/matratzen-bocholt"
                className="font-body text-base text-tagline"
                onClick={() => setMenuOpen(false)}
              >
                Matratzen
              </a>
              <a
                href="/holzbetten-bocholt"
                className="font-body text-base text-tagline"
                onClick={() => setMenuOpen(false)}
              >
                Holzbetten
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile CTA Bar - fixed below header */}
      <div className="fixed top-[72px] left-0 right-0 z-40 border-b border-gray-100 bg-white px-6 py-3 md:hidden">
        <a
          href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary block w-full text-center text-sm"
        >
          Beratungstermin vereinbaren
        </a>
      </div>
    </>
  );
}
