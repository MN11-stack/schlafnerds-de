import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Schlafnerds Bocholt",
  description:
    "Impressum der Schlafnerds, Markus Niehaus, Nordstraße 39, 46395 Bocholt.",
  alternates: {
    canonical: "https://www.schlafnerds.de/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-heading text-3xl font-normal md:text-4xl">
            Impressum
          </h1>

          <div className="prose prose-gray mt-10 max-w-none text-tagline/80">
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>
              Markus Niehaus
              <br />
              Nordstraße 39
              <br />
              46395 Bocholt
            </p>

            <h2>Verantwortlicher:</h2>
            <p>
              Markus Niehaus
              <br />
              Nordstraße 39
              <br />
              46395 Bocholt
            </p>

            <h2>Kontakt: Schlafnerds Bocholt</h2>
            <p>
              Telefon:{" "}
              <a href="tel:+492871349286">+49 (0)2871 – 349 28 62</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:service@schlafnerds.de">service@schlafnerds.de</a>
              <br />
              Internet:{" "}
              <a
                href="https://www.schlafnerds.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.schlafnerds.de
              </a>
            </p>

            <h2>Information zur Online-Streitbeilegung:</h2>
            <p>
              Die EU-Kommission hat eine Internetplattform zur
              Online-Beilegung von Streitigkeiten (sog. „OS-Plattform")
              geschaffen. Die OS-Plattform dient als Anlaufstelle zur
              außergerichtlichen Beilegung von Streitigkeiten, die aus
              Online-Dienstverträgen erwachsen. Die OS-Plattform wird unter
              dem folgenden Link erreicht:{" "}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://ec.europa.eu/consumers/odr/
              </a>
            </p>

            <h2>Außergerichtliche Streitbeilegung:</h2>
            <p>
              Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle nach dem Gesetz über die
              alternative Streitbeilegung in Verbrauchersachen (VSBG) sind wir
              nicht bereit und nicht verpflichtet.
            </p>

            <h2>Bildnachweise:</h2>
            <p>
              © Unsplash.com
              <br />© Hobbesshot, Stephan Wissing
            </p>

            <h2>Haftungsausschluss:</h2>

            <h3>Haftung für Inhalte:</h3>
            <p>
              Alle Inhalte dieser Internetseite werden mit der höchsten
              Sorgfalt erstellt, jedoch können wir für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte keine Gewähr
              übernehmen. Alle auf unserer Internetseite vorhandenen Angebote
              sind demnach freibleibend und unverbindlich. Darüber hinaus
              behalten wir uns vor, Teile der Internetseite oder auch das
              gesamte Angebot ohne vorherige Ankündigung jederzeit zu
              verändern, zu ergänzen, zu löschen oder die Veröffentlichung
              einzustellen.
            </p>
            <p>
              Wir sind gemäß § 7 Abs. 1 TMG für eigene Inhalte auf dieser
              Website verantwortlich. Wir sind als Dienstanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen; vgl. hierzu §§ 8 – 10 TMG.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen bleiben hiervon unberührt. Eine Haftung
              unsererseits ist jedoch erst ab dem Zeitpunkt der Kenntnis der
              entsprechenden Rechtsverletzung und bei nachweislich
              vorsätzlichem oder grob fahrlässigem Verschulden möglich.
              Ansonsten ist eine Haftung, bezogen auf Schäden materieller oder
              ideeller Art, die durch die Nutzung oder Nichtnutzung der auf
              der Internetseite veröffentlichten Informationen oder durch die
              Nutzung fehlerhafter oder unvollständiger Informationen
              verursacht wurden, ausgeschlossen. Bei Bekanntwerden
              entsprechender Rechtsverletzungen werden diese Inhalte umgehend
              entfernt.
            </p>

            <h3>Haftung für Links:</h3>
            <p>
              Diese Internetseite enthält Links zu externen Internetseiten
              Dritter, auf deren Inhalt wir keinen Einfluss haben. Aus diesem
              Grund können wir auch keine Gewähr für entsprechende fremde
              Inhalte übernehmen. Vielmehr ist für diese Inhalte stets der
              jeweilige Anbieter bzw. Betreiber der Internetseite
              verantwortlich. Die verlinkten Internetseiten werden durch uns
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft und nur dann verlinkt, wenn für uns keine
              Rechtsverstöße erkennbar sind. Eine dauerhafte oder wiederholte
              Prüfung erfolgt hingegen nicht und kann aufgrund des enormen
              Aufwands, den eine kontinuierliche Überprüfung zufolge hätte,
              nicht erwartet werden. Sollten uns Rechtsverletzungen auf
              verlinkten Internetseiten bekannt werden, werden die
              entsprechenden Verlinkungen umgehend entfernt.
            </p>

            <h3>Urheberrecht:</h3>
            <p>
              Die durch uns als Internetseitenbetreiber erstellten Inhalte und
              Werke auf dieser Internetseite unterliegen den deutschen
              Urheberrechtsbestimmungen. Jedwede Vervielfältigung, Bearbeitung,
              Verbreitung und Verwertung außerhalb der Grenzen des
              Urheberrechts sind nicht gestattet. Sie bedürfen der
              ausdrücklichen, schriftlichen Genehmigung durch uns. Downloads
              und Kopien dieser Internetseite dürfen lediglich für private,
              nicht jedoch für kommerzielle Zwecke genutzt werden. Insofern
              Inhalte auf dieser Internetseite nicht von uns erstellt wurden,
              beachten wir die Urheberrechte Dritter und kennzeichnen fremde
              Werke entsprechend. Wir bitten um Hinweise, falls Sie auf
              Urheberrechtsverletzungen aufmerksam werden. Wir werden den
              Sachverhalt prüfen und im Fall einer Rechtsverletzung die
              entsprechenden Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
