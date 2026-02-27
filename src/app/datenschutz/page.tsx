import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Schlafnerds Bocholt",
  description:
    "Datenschutzerklärung der Schlafnerds, Markus Niehaus, Nordstraße 39, 46395 Bocholt. Informationen zur Erhebung personenbezogener Daten.",
  alternates: {
    canonical: "https://www.schlafnerds.de/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-heading text-3xl font-normal md:text-4xl">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-gray mt-10 max-w-none text-tagline/80">
            <h2>§ 1 Information über die Erhebung personenbezogener Daten</h2>
            <p>
              (1) Im Folgenden informieren wir über die Erhebung
              personenbezogener Daten bei Nutzung unserer Website.
              Personenbezogene Daten sind alle Daten, die auf Sie persönlich
              beziehbar sind, z.&nbsp;B. Name, Adresse, E-Mail-Adressen,
              Nutzerverhalten.
            </p>
            <p>
              (2) Verantwortlicher gem. Art. 4 Abs. 7
              EU-Datenschutz-Grundverordnung (DS-GVO) ist Herr Markus
              Niehaus, Nordstraße 39, 46395 Bocholt (siehe unser{" "}
              <a href="/impressum">Impressum</a>).
            </p>
            <p>
              (3) Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder über ein
              Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre
              E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns
              gespeichert, um Ihre Fragen zu beantworten. Die in diesem
              Zusammenhang anfallenden Daten löschen wir, nachdem die
              Speicherung nicht mehr erforderlich ist, oder schränken die
              Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten
              bestehen.
            </p>
            <p>
              (4) Falls wir für einzelne Funktionen unseres Angebots auf
              beauftragte Dienstleister zurückgreifen oder Ihre Daten für
              werbliche Zwecke nutzen möchten, werden wir Sie untenstehend im
              Detail über die jeweiligen Vorgänge informieren.
            </p>

            <h2>
              § 2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten
            </h2>
            <p>
              (1) Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
              eine Einwilligung der betroffenen Person einholen, dient Art. 6
              Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
              Rechtsgrundlage für die Verarbeitung personenbezogener Daten.
            </p>
            <p>
              (2) Bei der Verarbeitung von personenbezogenen Daten, die zur
              Erfüllung eines Vertrages, dessen Vertragspartei die betroffene
              Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
              als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge,
              die zur Durchführung vorvertraglicher Maßnahmen erforderlich
              sind.
            </p>
            <p>
              (3) Soweit eine Verarbeitung personenbezogener Daten zur
              Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der
              unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO
              als Rechtsgrundlage.
            </p>
            <p>
              (4) Für den Fall, dass lebenswichtige Interessen der betroffenen
              Person oder einer anderen natürlichen Person eine Verarbeitung
              personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
              lit. d DSGVO als Rechtsgrundlage.
            </p>
            <p>
              (5) Ist die Verarbeitung zur Wahrung eines berechtigten
              Interesses unseres Unternehmens oder eines Dritten erforderlich
              und überwiegen die Interessen, Grundrechte und Grundfreiheiten
              des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
              Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
            </p>

            <h2>§ 3 Datenlöschung und Speicherdauer</h2>
            <p>
              Ihre personenbezogenen Daten werden gelöscht oder gesperrt,
              sobald der Zweck der Speicherung entfällt. Eine Speicherung kann
              darüber hinaus dann erfolgen, wenn dies durch den europäischen
              oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen,
              Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche
              unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der
              Daten erfolgt auch dann, wenn eine durch die genannten Normen
              vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
              Erforderlichkeit zur weiteren Speicherung der Daten für einen
              Vertragsabschluss oder eine Vertragserfüllung besteht.
            </p>

            <h2>§ 4 Ihre Rechte</h2>
            <p>
              (1) Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul>
              <li>Recht auf Auskunft,</li>
              <li>Recht auf Berichtigung oder Löschung,</li>
              <li>Recht auf Einschränkung der Verarbeitung,</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung,</li>
              <li>Recht auf Datenübertragbarkeit.</li>
            </ul>
            <p>
              (2) Sie haben zudem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </p>

            <h2>
              § 5 Erhebung personenbezogener Daten bei Besuch unserer Website
            </h2>
            <p>
              (1) Bei der bloß informatorischen Nutzung der Website, also wenn
              Sie sich nicht registrieren oder uns anderweitig Informationen
              übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr
              Browser an unseren Server übermittelt. Wenn Sie unsere Website
              betrachten möchten, erheben wir die folgenden Daten, die für uns
              technisch erforderlich sind, um Ihnen unsere Website anzuzeigen
              und die Stabilität und Sicherheit zu gewährleisten
              (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO):
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>
                Zeitzonendifferenz zur Greenwich Mean Time (GMT)
              </li>
              <li>Inhalt der Anforderung (konkrete Seite)</li>
              <li>Zugriffsstatus/HTTP-Statuscode</li>
              <li>jeweils übertragene Datenmenge</li>
              <li>Website, von der die Anforderung kommt</li>
              <li>Browser</li>
              <li>Betriebssystem und dessen Oberfläche</li>
              <li>Sprache und Version der Browsersoftware.</li>
            </ul>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des
              Zwecks ihrer Erhebung nicht mehr erforderlich sind. Im Falle der
              Erfassung der Daten zur Bereitstellung der Website ist dies der
              Fall, wenn die jeweilige Sitzung beendet ist.
            </p>
            <p>
              (2) Zusätzlich zu den zuvor genannten Daten werden bei Ihrer
              Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert.
              Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer
              Festplatte dem von Ihnen verwendeten Browser zugeordnet
              gespeichert werden und durch welche der Stelle, die den Cookie
              setzt (hier durch uns), bestimmte Informationen zufließen.
              Cookies können keine Programme ausführen oder Viren auf Ihren
              Computer übertragen. Sie dienen dazu, das Internetangebot
              insgesamt nutzerfreundlicher und effektiver zu machen.
            </p>
            <p>(3) Einsatz von Cookies:</p>
            <p>
              a) Diese Website nutzt folgende Arten von Cookies, deren Umfang
              und Funktionsweise im Folgenden erläutert werden:
            </p>
            <ul>
              <li>Transiente Cookies (dazu b)</li>
              <li>Persistente Cookies (dazu c).</li>
            </ul>
            <p>
              b) Transiente Cookies werden automatisiert gelöscht, wenn Sie den
              Browser schließen. Dazu zählen insbesondere die Session-Cookies.
              Diese speichern eine sogenannte Session-ID, mit welcher sich
              verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung
              zuordnen lassen. Dadurch kann Ihr Rechner wiedererkannt werden,
              wenn Sie auf unsere Website zurückkehren. Die Session-Cookies
              werden gelöscht, wenn Sie sich ausloggen oder den Browser
              schließen.
            </p>
            <p>
              c) Persistente Cookies werden automatisiert nach einer
              vorgegebenen Dauer gelöscht, die sich je nach Cookie
              unterscheiden kann. Sie können die Cookies in den
              Sicherheitseinstellungen Ihres Browsers jederzeit löschen.
            </p>
            <p>
              d) Sie können Ihre Browser-Einstellung entsprechend Ihren
              Wünschen konfigurieren und z.&nbsp;B. die Annahme von
              Third-Party-Cookies oder allen Cookies ablehnen. Wir weisen Sie
              darauf hin, dass Sie eventuell nicht alle Funktionen dieser
              Website nutzen können.
            </p>

            <h2>
              § 6 Weitere Funktionen und Angebote unserer Website
            </h2>
            <p>
              (1) Neben der rein informatorischen Nutzung unserer Website
              bieten wir verschiedene Leistungen an, die Sie bei Interesse
              nutzen können. Dazu müssen Sie in der Regel weitere
              personenbezogene Daten angeben, die wir zur Erbringung der
              jeweiligen Leistung nutzen und für die die zuvor genannten
              Grundsätze zur Datenverarbeitung gelten.
            </p>
            <p>
              (2) Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten
              externer Dienstleister. Diese wurden von uns sorgfältig
              ausgewählt und beauftragt, sind an unsere Weisungen gebunden und
              werden regelmäßig kontrolliert.
            </p>
            <p>
              (3) Weiterhin können wir Ihre personenbezogenen Daten an Dritte
              weitergeben, wenn Aktionsteilnahmen, Gewinnspiele,
              Vertragsabschlüsse oder ähnliche Leistungen von uns gemeinsam
              mit Partnern angeboten werden. Nähere Informationen hierzu
              erhalten Sie bei Angabe Ihrer personenbezogenen Daten oder
              untenstehend in der Beschreibung des Angebotes.
            </p>
            <p>
              (4) Soweit unsere Dienstleister oder Partner ihren Sitz in einem
              Staat außerhalb des Europäischen Wirtschaftsraumen (EWR) haben,
              informieren wir Sie über die Folgen dieses Umstands in der
              Beschreibung des Angebotes.
            </p>

            <h2>
              § 7 Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten
            </h2>
            <p>
              (1) Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten
              erteilt haben, können Sie diese jederzeit widerrufen. Ein
              solcher Widerruf beeinflusst die Zulässigkeit der Verarbeitung
              Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber uns
              ausgesprochen haben.
            </p>
            <p>
              (2) Soweit wir die Verarbeitung Ihrer personenbezogenen Daten
              auf die Interessenabwägung stützen, können Sie Widerspruch gegen
              die Verarbeitung einlegen. Dies ist der Fall, wenn die
              Verarbeitung insbesondere nicht zur Erfüllung eines Vertrags mit
              Ihnen erforderlich ist, was von uns jeweils bei der
              nachfolgenden Beschreibung der Funktionen dargestellt wird. Bei
              Ausübung eines solchen Widerspruchs bitten wir um Darlegung der
              Gründe, weshalb wir Ihre personenbezogenen Daten nicht wie von
              uns durchgeführt verarbeiten sollten. Im Falle Ihres begründeten
              Widerspruchs prüfen wir die Sachlage und werden entweder die
              Datenverarbeitung einstellen bzw. anpassen oder Ihnen unsere
              zwingenden schutzwürdigen Gründe aufzeigen, aufgrund derer wir
              die Verarbeitung fortführen.
            </p>
            <p>
              (3) Selbstverständlich können Sie der Verarbeitung Ihrer
              personenbezogenen Daten für Zwecke der Werbung und Datenanalyse
              jederzeit widersprechen. Über Ihren Werbewiderspruch können Sie
              uns unter den oben genannten Kontaktdaten informieren.
            </p>

            <h2>§ 8 Einbindung von Google Web Fonts</h2>
            <p>
              (1) Auf dieser Webseite nutzen wir das Angebot von Google Web
              Fonts. Dadurch wird beim Aufruf der Webseite Ihr Browser die
              jeweils benötigten Web Fonts in Ihren Browser-Cache laden, so
              dass Texte und Schriftarten korrekt angezeigt werden können.
            </p>
            <p>
              (2) Um die jeweils benötigten Daten laden zu können, muss Ihr
              Browser eine Verbindung zu den Servern von Google aufbauen.
              Dadurch erlangt Google Kenntnis davon, dass über Ihre IP-Adresse
              diese Webseite aufgerufen wurde. Sollte Ihr Browser Web Fonts
              nicht unterstützen, wird Ihnen eine Standardschrift angezeigt.
              Rechtsgrundlage für die Nutzung von Google Web Fonts ist Art. 6
              Abs. 1 S. 1 lit. f DS-GVO.
            </p>
            <p>
              (3) Weitere Informationen zu Zweck und Umfang der Datenerhebung
              und ihrer Verarbeitung durch den Plug-in-Anbieter erhalten Sie
              in den Datenschutzerklärungen des Anbieters. Dort erhalten Sie
              auch weitere Informationen zu Ihren diesbezüglichen Rechten und
              Einstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              . Google verarbeitet Ihre personenbezogenen Daten auch in den
              USA. Wir weisen darauf hin, dass es daher dazu kommen kann, dass
              Sie weder Einfluss auf die Verarbeitung oder Speicherung Ihrer
              personenbezogenen Daten nehmen, noch Ihre durch die DS-GVO
              zugesicherten Rechte durchsetzen können.
            </p>

            <h2>§ 9 Einbindung von YouTube-Videos</h2>
            <p>
              (1) Wir haben YouTube-Videos in unser Online-Angebot eingebunden,
              die auf{" "}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.YouTube.com
              </a>{" "}
              gespeichert sind und von unserer Website aus direkt abspielbar
              sind.
            </p>
            <p>
              (2) Durch den Besuch auf der Website erhält YouTube die
              Information, dass Sie die entsprechende Unterseite unserer
              Website aufgerufen haben. Zudem werden die unter § 5 dieser
              Erklärung genannten Daten übermittelt. Dies erfolgt unabhängig
              davon, ob YouTube ein Nutzerkonto bereitstellt, über das Sie
              eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn Sie bei
              Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto
              zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei YouTube
              nicht wünschen, müssen Sie sich vor Aktivierung des Buttons
              ausloggen. YouTube speichert Ihre Daten als Nutzungsprofile und
              nutzt sie für Zwecke der Werbung, Marktforschung und/oder
              bedarfsgerechten Gestaltung seiner Website. Eine solche
              Auswertung erfolgt insbesondere (selbst für nicht eingeloggte
              Nutzer) zur Erbringung von bedarfsgerechter Werbung und um
              andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf
              unserer Website zu informieren. Ihnen steht ein Widerspruchsrecht
              zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur
              Ausübung dessen an YouTube richten müssen.
            </p>
            <p>
              (3) Weitere Informationen zu Zweck und Umfang der Datenerhebung
              und ihrer Verarbeitung durch YouTube erhalten Sie in der
              Datenschutzerklärung. Dort erhalten Sie auch weitere
              Informationen zu Ihren Rechten und Einstellungsmöglichkeiten zum
              Schutze Ihrer Privatsphäre:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              . Google verarbeitet Ihre personenbezogenen Daten auch in den
              USA. Wir weisen darauf hin, dass es daher dazu kommen kann, dass
              Sie weder Einfluss auf die Verarbeitung oder Speicherung Ihrer
              personenbezogenen Daten nehmen, noch Ihre durch die DS-GVO
              zugesicherten Rechte durchsetzen können.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
