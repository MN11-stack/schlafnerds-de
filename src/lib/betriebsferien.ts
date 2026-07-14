// Betriebsferien Sommer 2026 — eine Quelle für Banner, Hinweis-Card und JSON-LD.
// Läuft der Zeitraum ab, rendert das Banner nichts mehr und die Special-Hours
// verschwinden aus dem Schema. Danach kann dieser Block ersatzlos raus.

/** Zeitraum, in dem der Laden nicht regulär geöffnet ist. */
export const FERIEN_VON = "2026-07-25";
export const FERIEN_BIS = "2026-08-15";

/** Erster Tag mit regulären Öffnungszeiten (Di). */
export const REGULAER_AB = "2026-08-18";

/** Tage, an denen wir während der Ferien beraten — ausschließlich mit Termin. */
export type Termintag = {
  /** ISO-Datum, Basis für JSON-LD */
  iso: string;
  /** Anzeige-Label für die Datums-Chips */
  label: string;
  /** Uhrzeiten = reguläre Zeiten des jeweiligen Wochentags */
  opens: string;
  closes: string;
};

/** Nach Kalenderwoche gruppiert — die Termindichte wechselt von Woche zu Woche. */
export const TERMINTAGE: Termintag[][] = [
  [
    { iso: "2026-07-30", label: "Do 30.07.", opens: "14:00", closes: "18:00" },
    { iso: "2026-07-31", label: "Fr 31.07.", opens: "10:00", closes: "18:00" },
  ],
  [
    { iso: "2026-08-06", label: "Do 06.08.", opens: "14:00", closes: "18:00" },
    { iso: "2026-08-07", label: "Fr 07.08.", opens: "10:00", closes: "18:00" },
    { iso: "2026-08-08", label: "Sa 08.08.", opens: "10:00", closes: "14:00" },
  ],
  [
    { iso: "2026-08-14", label: "Fr 14.08.", opens: "10:00", closes: "18:00" },
    { iso: "2026-08-15", label: "Sa 15.08.", opens: "10:00", closes: "14:00" },
  ],
];

/**
 * Special-Hours für das LocalBusiness-Schema: jeder Tag des Zeitraums einzeln,
 * geschlossene Tage explizit mit 00:00–00:00. Überlappende Specs (ein
 * "geschlossen"-Bereich plus einzelne offene Tage) wären mehrdeutig — im
 * Zweifel gewinnt bei Google die Schließung, und die Termintage fielen unter
 * den Tisch.
 */
export function specialOpeningHours() {
  const offen = new Map(
    TERMINTAGE.flat().map((tag) => [tag.iso, tag] as const),
  );

  const specs = [];
  const tag = new Date(`${FERIEN_VON}T00:00:00Z`);
  const ende = new Date(`${FERIEN_BIS}T00:00:00Z`);

  while (tag <= ende) {
    const iso = tag.toISOString().slice(0, 10);
    const termintag = offen.get(iso);
    specs.push({
      "@type": "OpeningHoursSpecification",
      validFrom: iso,
      validThrough: iso,
      opens: termintag ? termintag.opens : "00:00",
      closes: termintag ? termintag.closes : "00:00",
    });
    tag.setUTCDate(tag.getUTCDate() + 1);
  }

  return specs;
}

/**
 * Läuft der Hinweis noch? Er endet mit dem letzten Ferientag: am 16.08. ist die
 * Aussage überholt, auch wenn der Laden erst am 18.08. wieder regulär öffnet.
 *
 * Wird client-seitig ausgewertet — die Site ist statisch gecacht, ein
 * serverseitiges `new Date()` würde zum Build-Zeitpunkt einfrieren.
 */
export function ferienHinweisAktiv(jetzt: Date = new Date()): boolean {
  const letzterTag = new Date(`${FERIEN_BIS}T23:59:59`);
  return jetzt <= letzterTag;
}
