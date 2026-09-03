"use client";

import { useEffect } from "react";

/**
 * Reicht die Google Click ID an Calendly weiter — Grundlage für Offline-Conversions.
 *
 * Google hängt an jeden Anzeigenklick eine `gclid` an die Ziel-URL (auf iOS teils `gbraid`
 * oder `wbraid`). Damit wir später melden können, welcher Klick zu einer Buchung geführt hat,
 * muss diese Kennung bis in den Calendly-Webhook durchlaufen.
 *
 * Calendly reicht beliebige URL-Parameter NICHT durch — nur die utm_*-Felder landen im
 * `tracking`-Objekt des Webhooks. Die Kennung fährt deshalb als `utm_content` mit.
 * `utm_source` bleibt unangetastet, dort steht weiterhin die Herkunftsseite.
 *
 * Bewusst ohne localStorage, sessionStorage oder Cookies: Der Wert lebt nur im Arbeitsspeicher
 * dieser Seitensitzung. Damit wird nichts auf dem Endgerät gespeichert und die Einwilligungs-
 * pflicht nach § 25 TDDDG greift nicht — deshalb braucht die Seite weiterhin keinen Cookie-Banner.
 * Preis dieser Entscheidung: Nach einem echten Seiten-Neuladen ist die Kennung weg. Für
 * Anzeigenklicks ist das unkritisch, weil die Buchung fast immer auf der Landingpage beginnt.
 */

let gclid: string | null = null;

export default function GclidForwarder() {
  useEffect(() => {
    // 1 · Kennung aus der Einstiegs-URL lesen und im Speicher halten.
    const params = new URLSearchParams(window.location.search);
    const found =
      params.get("gclid") || params.get("gbraid") || params.get("wbraid");
    if (found) gclid = found;

    // 2 · Bei jedem Klick auf einen Calendly-Link die Kennung anhängen.
    //     Als Capture-Listener am Dokument, damit auch Links greifen, die erst
    //     durch clientseitige Navigation in den DOM kommen.
    const onClick = (event: MouseEvent) => {
      if (!gclid) return;
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link?.href.includes("calendly.com")) return;

      try {
        const url = new URL(link.href);
        if (url.searchParams.has("utm_content")) return; // nichts überschreiben
        url.searchParams.set("utm_content", gclid);
        link.href = url.toString();
      } catch {
        // Kaputte href — dann eben ohne Kennung, der Termin ist wichtiger.
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
