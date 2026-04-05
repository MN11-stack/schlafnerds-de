"use client";

import { useState } from "react";

// ─── Fragen ───────────────────────────────────────────────────────────────────

const questions = [
  {
    id: "position",
    question: "Wie schläfst du hauptsächlich?",
    options: [
      { label: "Seitenschläfer", value: "seite" },
      { label: "Rückenschläfer", value: "ruecken" },
      { label: "Bauchschläfer", value: "bauch" },
      { label: "Ich wechsle ständig", value: "wechsel" },
    ],
  },
  {
    id: "symptom",
    question: "Wo merkst du morgens, dass etwas nicht stimmt?",
    options: [
      { label: "Nacken, Schulter oder Kribbeln im Arm", value: "nacken" },
      { label: "Rücken oder Hüfte", value: "ruecken_hueft" },
      { label: "Ich schlafe schlecht ein oder wache nachts auf", value: "schlaf" },
      { label: "Ich fühle mich nicht erholt – ohne klare Schmerzen", value: "erschoepft" },
      { label: "Eigentlich kein Problem", value: "okay" },
    ],
  },
  {
    id: "schulterbreite",
    question: "Wie breit sind deine Schultern im Vergleich zu deinen Hüften?",
    options: [
      { label: "Schultern deutlich breiter als Hüften", value: "schulter_breiter" },
      { label: "Schultern und Hüften ungefähr gleich breit", value: "gleich" },
      { label: "Hüften breiter als Schultern", value: "hueft_breiter" },
      { label: "Ich weiß es nicht genau", value: "unbekannt" },
    ],
  },
  {
    id: "groesse",
    question: "Wie groß bist du?",
    options: [
      { label: "Unter 165 cm", value: "xs" },
      { label: "165 – 175 cm", value: "s" },
      { label: "175 – 185 cm", value: "m" },
      { label: "185 – 195 cm", value: "l" },
      { label: "Über 195 cm", value: "xl" },
    ],
  },
  {
    id: "gewicht",
    question: "Wie viel wiegst du?",
    options: [
      { label: "Unter 60 kg", value: "leicht" },
      { label: "60 – 80 kg", value: "mittel" },
      { label: "80 – 100 kg", value: "schwer" },
      { label: "Über 100 kg", value: "sehr_schwer" },
    ],
  },
  {
    id: "system",
    question: "Auf was schläfst du aktuell?",
    options: [
      { label: "Matratze auf Lattenrost (nicht einstellbar)", value: "lattenrost_fix" },
      { label: "Matratze auf einstellbarem Lattenrost", value: "lattenrost_einstellbar" },
      { label: "Boxspringbett", value: "boxspring" },
      { label: "Ich weiß es nicht genau", value: "unbekannt" },
    ],
  },
  {
    id: "alter",
    question: "Wie alt ist deine Matratze?",
    options: [
      { label: "Unter 5 Jahre", value: "neu" },
      { label: "5 – 10 Jahre", value: "mittel" },
      { label: "Über 10 Jahre", value: "alt" },
      { label: "Weiß ich nicht", value: "unbekannt" },
    ],
  },
];

// ─── Profil-Logik ─────────────────────────────────────────────────────────────

type Answers = Record<string, string>;

interface Profile {
  title: string;
  body: string;
  bullets: string[];
}

function getProfile(answers: Answers): Profile {
  const { position, symptom, schulterbreite, alter } = answers;

  // Profil 4: System veraltet
  if (
    alter === "alt" &&
    (symptom === "nacken" || symptom === "ruecken_hueft" || symptom === "schlaf" || symptom === "erschoepft")
  ) {
    return {
      title: "Dein Schlafsystem hat seine Grenzen erreicht.",
      body: "Eine Matratze verliert mit der Zeit ihre punktelastischen Eigenschaften – sie kann sich nicht mehr individuell an deine Körperproportionen anpassen. Was sich parallel verändert: Körpergewicht, Muskeltonus, Liegegewohnheiten. Das System, das vor zehn Jahren gepasst hat, war auf einen anderen Körper ausgerichtet. Wir schauen gemeinsam, was heute passt.",
      bullets: [
        "Körperstatik-Check mit verständlicher Einordnung",
        "Probeliegen auf verschiedenen Systemen – ohne Zeitdruck",
        "Gemeinsame Empfehlung, die wir gemeinsam entwickeln",
      ],
    };
  }

  // Profil 1: Schulterstaueffekt
  if (
    (position === "seite" || position === "wechsel") &&
    symptom === "nacken" &&
    (schulterbreite === "schulter_breiter" || schulterbreite === "gleich" || schulterbreite === "unbekannt")
  ) {
    return {
      title: "Die Schulter bekommt zu wenig Raum.",
      body: "Die Schulter muss in Seitenlage tief genug in das Schlafsystem einsinken können – in die Matratze, aber auch durch den Lattenrost hindurch. Wenn Matratze oder Lattenrost in der Schulterzone zu wenig nachgeben, staut sich Druck auf (Schulterstaueffekt). Das Kissen kann das nicht ausgleichen – es sitzt dann schlicht zu hoch, egal wie gut es eigentlich ist. Wir schauen uns das gemeinsam an: Schulterbreite, Liegeposition, aktuelles System.",
      bullets: [
        "Schulterbreite und Liegeposition konkret prüfen",
        "Lattenrosteinstellung und Matratzenzonierung abgleichen",
        "Kissenempfehlung passend zur Seitenlage",
      ],
    };
  }

  // Profil 2: Becken & LWS
  if (
    (position === "seite" || position === "bauch" || position === "wechsel") &&
    symptom === "ruecken_hueft"
  ) {
    return {
      title: "Das Becken findet keine stabile Lage.",
      body: "Das Becken ist das Fundament der Wirbelsäule. Wenn es im Liegen kippt, zu stark einsinkt oder zu wenig Unterstützung bekommt, zieht das die gesamte Wirbelsäule aus der Linie. Zu feste Matratze oder zu weicher Lattenrost im Beckenbereich können beide zur Fehlstellung führen – einmal sinkt das Becken nicht genug ein, einmal zu tief. Das lässt sich mit einem Körperstatik-Check und gezieltem Probeliegen sehr präzise eingrenzen.",
      bullets: [
        "Körperstatik-Check: Beckenachse und LWS-Lage prüfen",
        "Lattenrosteinstellung im Beckenbereich abstimmen",
        "Matratze und System gemeinsam bewerten",
      ],
    };
  }

  // Profil 3: Rückenschläfer
  if (position === "ruecken" && (symptom === "nacken" || symptom === "ruecken_hueft")) {
    return {
      title: "Rückenlage hat eigene Anforderungen – ans System und ans Kissen.",
      body: "In Rückenlage braucht die Lendenwirbelsäule aktive Unterstützung – die Matratze darf im LWS-Bereich nicht zu weich nachgeben. Gleichzeitig gehört in Rückenlage ein deutlich flacheres Kissen als in Seitenlage: Ein zu hohes Kissen drückt den Kopf nach vorne und belastet die Halswirbelsäule. Beides zusammen ist eine häufige Kombination, die sich gut lösen lässt.",
      bullets: [
        "LWS-Unterstützung im aktuellen System prüfen",
        "Kissenhöhe für Rückenlage konkret ermitteln",
        "Körperstatik-Check als Grundlage",
      ],
    };
  }

  // Profil 5: Kein Schmerz, aber kein erholsamer Schlaf
  if (symptom === "erschoepft" || symptom === "schlaf") {
    return {
      title: "Der Körper sendet kein Schmerzsignal – aber der Schlaf fehlt.",
      body: "Fehlende Erholung ohne klare Schmerzen kann viele Ursachen haben. Manche davon – wie Schlafapnoe, Restless Legs oder andere organische Ursachen – sollten ärztlich abgeklärt werden. Andere liegen an Stellschrauben, die man selbst beeinflussen kann: Schlafrhythmus, Raumtemperatur, Verdunkelung, Stresslevel. Und manchmal steckt eine subtile Fehlanpassung im Schlafsystem dahinter, die sich erst beim Probeliegen zeigt. Wir helfen dir, das einzugrenzen.",
      bullets: [
        "Schlafsituation gemeinsam einordnen",
        "Schlafsystem auf versteckte Fehlanpassungen prüfen",
        "Klare Empfehlung: Was wir lösen können, was zum Arzt gehört",
      ],
    };
  }

  // Fallback: alles okay oder unklares Bild
  return {
    title: "Dein System klingt solide – ein genauerer Blick lohnt sich trotzdem.",
    body: "Nicht jede Fehlanpassung äußert sich in Schmerzen. Manchmal sind es subtile Signale: leichte Steifheit morgens, Wärme-Kälte-Schwankungen, das Gefühl, nicht ganz angekommen zu sein. Wir schauen uns das gemeinsam an – ohne Druck, ohne Zeitlimit.",
    bullets: [
      "Ist-Analyse deines aktuellen Schlafsystems",
      "Probeliegen auf verschiedenen Systemen",
      "Gemeinsame Einschätzung – ob Handlungsbedarf besteht oder nicht",
    ],
  };
}

// ─── Komponente ───────────────────────────────────────────────────────────────

export default function SchlafCheckSection() {
  const [answers, setAnswers] = useState<Answers>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[currentStep];
  const total = questions.length;

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (currentStep < total - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setDone(true);
      setTimeout(() => {
        document.getElementById("schlaf-check-result")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  function handleReset() {
    setAnswers({});
    setCurrentStep(0);
    setDone(false);
    document.getElementById("schlaf-check")?.scrollIntoView({ behavior: "smooth" });
  }

  const profile = done ? getProfile(answers) : null;

  return (
    <section id="schlaf-check" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">

        {/* Header */}
        <div className="text-center">
          <p className="accent-text mb-4 text-lg">Schlaf-Check</p>
          <h2 className="font-heading text-3xl leading-snug font-normal md:text-4xl md:leading-snug">
            Was steht Ihrem Schlaf im Weg?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tagline">
            7 Fragen. Persönliche Einschätzung. Kein Verkauf.
          </p>
        </div>

        {/* Quiz */}
        {!done && (
          <div className="mt-14">
            {/* Schritt-Anzeige */}
            <p className="mb-6 text-center text-sm text-tagline/50">
              Frage {currentStep + 1} von {total}
            </p>

            {/* Frage-Karte */}
            <div className="rounded-2xl bg-soft p-8 md:p-10">
              <h3 className="font-heading text-xl font-normal leading-snug md:text-2xl">
                {q.question}
              </h3>
              <div className="mt-6 space-y-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="group w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-4 text-left font-[inherit] text-base text-tagline transition-all hover:border-primary hover:bg-primary hover:text-white active:scale-[0.99]"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span>{opt.label}</span>
                      <svg className="h-4 w-4 shrink-0 text-primary transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Zurück */}
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-4 flex items-center gap-1 text-sm text-tagline/40 transition-colors hover:text-tagline"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zurück
              </button>
            )}
          </div>
        )}

        {/* Ergebnis */}
        {done && profile && (
          <div id="schlaf-check-result" className="mt-14 scroll-mt-32">
            <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 md:p-10">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                Ihre Einschätzung
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal leading-snug md:text-3xl">
                {profile.title}
              </h3>
              <p className="mt-5 leading-relaxed text-tagline/80">
                {profile.body}
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold text-tagline">Was wir beim Termin gemeinsam machen:</p>
                <ul className="mt-3 space-y-2">
                  {profile.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-tagline/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col items-center gap-4 border-t border-primary/20 pt-8 sm:flex-row sm:justify-center">
                <a
                  href="https://calendly.com/schlafnerds/45min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Das besprechen wir in 45 Minuten
                </a>
                <a href="/beratung-probeliegen" className="btn-outline">
                  Mehr zum Beratungsprozess
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleReset}
                className="text-sm text-tagline/40 transition-colors hover:text-tagline"
              >
                Check wiederholen
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
