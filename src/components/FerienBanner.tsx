"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ferienHinweisAktiv } from "@/lib/betriebsferien";

const DISMISS_KEY = "ferienBannerDismissed";

export default function FerienBanner() {
  // Erst nach dem Mount sichtbar: Datum und localStorage stehen server-seitig
  // nicht zur Verfügung, und die Site wird statisch ausgeliefert.
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ferienHinweisAktiv()) return;
    if (localStorage.getItem(DISMISS_KEY) === "1") return;
    setVisible(true);
  }, []);

  // Höhe an Header und Body durchreichen (siehe DESIGN-VORGABEN-WEB.md 4.6).
  const messen = useCallback(() => {
    const hoehe = ref.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty("--banner-h", `${hoehe}px`);
  }, []);

  useLayoutEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty("--banner-h", "0px");
      return;
    }
    messen();
    window.addEventListener("resize", messen);
    return () => window.removeEventListener("resize", messen);
  }, [visible, messen]);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] bg-primary px-4 py-2.5 text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 text-center text-sm leading-snug">
        <p>
          Betriebsferien vom 25. Juli bis 15. August — Beratung an ausgewählten
          Tagen mit Termin.{" "}
          <a
            href="/beratung-probeliegen#betriebsferien"
            className="font-semibold underline decoration-white/40 underline-offset-2 hover:decoration-white"
          >
            Termintage ansehen
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Hinweis schließen"
          className="absolute right-4 shrink-0 rounded p-1 text-white/80 transition-colors hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
