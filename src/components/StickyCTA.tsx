"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "stickyCTADismissedUntil";
const DISMISS_DAYS = 7;
const SCROLL_THRESHOLD = 400;
const CALENDLY_URL = "https://calendly.com/schlafnerds/45min?back=1";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissedUntil = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedUntil > Date.now()) return;

    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    localStorage.setItem(
      DISMISS_KEY,
      String(Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 bg-primary px-4 py-3 text-white shadow-lg md:hidden">
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center font-medium"
      >
        Beratungstermin
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Schließen"
        className="shrink-0 rounded p-1 text-white/80 hover:text-white"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
