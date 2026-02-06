"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Schlafnerds"
            width={180}
            height={48}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/beratung-probeliegen"
            className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Beratung
          </a>
          <a
            href="#loesungen"
            className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Lösungen
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
            href="#services"
            className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Services
          </a>
          <a
            href="#ueber-uns"
            className="font-body text-sm font-medium text-tagline transition-colors hover:text-primary"
          >
            Über uns
          </a>
          <a
            href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Beratungstermin
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span
            className={`block h-0.5 w-6 bg-tagline transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-tagline transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-tagline transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="/beratung-probeliegen"
              className="font-body text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Beratung
            </a>
            <a
              href="#loesungen"
              className="font-body text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Lösungen
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
              href="#services"
              className="font-body text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#ueber-uns"
              className="font-body text-base text-tagline"
              onClick={() => setMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="https://calendly.com/schlafnerds/45min?back=1&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 text-center text-base"
              onClick={() => setMenuOpen(false)}
            >
              Beratungstermin
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
