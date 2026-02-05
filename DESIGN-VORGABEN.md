# Schlafnerds - Design-Vorgaben

## Unternehmensinfo

| Feld | Wert |
|------|------|
| **Firmenname** | Schlafnerds |
| **Inhaber** | Markus Niehaus |
| **Adresse** | Nordstraße 39, 46395 Bocholt |
| **Telefon** | +49 (0)2871 - 349 28 62 |
| **E-Mail Service** | service@schlafnerds.de |
| **E-Mail Info** | info@schlafnerds.de |
| **Website** | www.schlafnerds.de |
| **Slogan** | "Genial schlafen mit den Schlafnerds" |

---

## Farbpalette

### Primärfarben

| Verwendung | HEX | RGB | Vorschau |
|------------|-----|-----|----------|
| **Logo Main (Türkis)** | `#31AFB4` | rgb(49, 175, 180) | ![#31AFB4](https://via.placeholder.com/20/31AFB4/31AFB4.png) |
| **Logo Secondary (Magenta)** | `#AA407F` | rgb(170, 64, 127) | ![#AA407F](https://via.placeholder.com/20/AA407F/AA407F.png) |
| **Tagline (Dunkelgrau)** | `#474749` | rgb(71, 71, 73) | ![#474749](https://via.placeholder.com/20/474749/474749.png) |

### Textfarben

| Verwendung | HEX | RGB |
|------------|-----|-----|
| **Fließtext** | `#000000` | rgb(0, 0, 0) |
| **Weiß (auf dunklem Hintergrund)** | `#FFFFFF` | rgb(255, 255, 255) |

### Hintergrundfarben (empfohlen)

| Verwendung | HEX | Beschreibung |
|------------|-----|--------------|
| **Hell** | `#FFFFFF` | Weiß für Hauptbereiche |
| **Soft** | `#F5F5F5` | Leichtes Grau für Akzentbereiche |
| **Dunkel** | `#474749` | Dunkelgrau für Footer/Header |

---

## Typografie

### Schriftarten

| Element | Schriftart | Fallback | Stil |
|---------|------------|----------|------|
| **Überschriften (H1-H6)** | Newsreader | Georgia, serif | Normal/Italic |
| **Fließtext / Body** | Nunito | Arial, sans-serif | Normal |
| **Akzente / Zitate** | Newsreader | Georgia, serif | Italic |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=Nunito:wght@300;400;500;600;700&display=swap');
```

### CSS-Variablen

```css
:root {
  /* Farben */
  --color-primary: #31AFB4;
  --color-secondary: #AA407F;
  --color-tagline: #474749;
  --color-text: #000000;
  --color-white: #FFFFFF;
  --color-background-soft: #F5F5F5;

  /* Schriftarten */
  --font-heading: 'Newsreader', Georgia, serif;
  --font-body: 'Nunito', Arial, sans-serif;

  /* Schriftgrößen */
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-h4: 22px;
  --font-size-body: 16px;
  --font-size-small: 14px;
}
```

### Typografie-Beispiele

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-text);
}

body, p, li, span {
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.6;
}

.accent-text {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--color-tagline);
}
```

---

## Seitenstruktur

### Hauptnavigation

| Seite | URL-Pfad | Beschreibung |
|-------|----------|--------------|
| **Home** | `/` | Startseite |
| **Matratzen** | `/matratzen` | Matratzen-Beratung |
| **Kids** | `/kids` | Schlafberatung für Kinder |
| **Kids - Schlafcoaching** | `/kids/schlafcoaching` | Schlafcoaching für Kinder |
| **Senioren** | `/senioren` | Schlafberatung für Senioren |
| **Wechseljahre** | `/wechseljahre` | Schlafberatung Wechseljahre |
| **Schlafyogi** | `/schlafyogi` | Schlafyogi-Angebot |
| **Zimmerservice** | `/zimmerservice` | Zimmerservice |
| **Matratzenreinigung** | `/matratzenreinigung` | Matratzenreinigung |
| **Kissentaxi** | `/kissentaxi` | Kissentaxi-Service |
| **Genial-günstig** | `/genial-günstig` | Angebote |
| **Schlafnerds-Beute** | `/schlafnerds-beute` | Produkte |
| **Shop** | `/shop` | Online-Shop (Ecwid) |
| **Stores** | `/stores` | Standorte |

### Footer-Seiten

| Seite | URL-Pfad |
|-------|----------|
| Impressum | `/impressum` |
| Datenschutzerklärung | `/datenschutzerklärung` |
| Kontakt | `/stores#CONTACTUS` |
| Standorte | `/stores#FINDUS` |

### Sprachversionen

| Sprache | URL |
|---------|-----|
| Deutsch (Standard) | `www.schlafnerds.de` |
| Englisch | `www.schlafnerds.de/en-gb` |
| Niederländisch | `www.schlafnerds.de/nl` |

---

## UI-Komponenten

### Buttons

```css
/* Primärer Button */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2a9499; /* Dunkleres Türkis */
}

/* Sekundärer Button */
.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #8f3569; /* Dunkleres Magenta */
}

/* Outline Button */
.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  font-family: var(--font-body);
  font-weight: 500;
  padding: 12px 24px;
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}
```

### Links

```css
a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-secondary);
}
```

---

## Medien & Assets

### Logo

- **Favicon:** `Thumbail_eBay_128x128.jpg`
- **CDN-Basis:** `https://irp.cdn-website.com/1fc48303/`

### Bildnachweise

- Unsplash.com
- Hobbesshot, Stephan Wissing

---

## Technische Informationen

### Aktuelle Plattform

| Eigenschaft | Wert |
|-------------|------|
| **CMS** | Duda |
| **E-Commerce** | Ecwid Store |
| **Template** | Layout Theme (Version 500000) |
| **Responsive** | Ja (Desktop, Tablet, Mobile) |

### SEO Meta-Daten

```html
<title>Schlafen, Betten, Matratzen, Schlafberatung Bocholt</title>
<meta name="description" content="Genial schlafen mit den Schlafnerds. Fachexpertise im Thema Schlafen, Betten, Matratzen, Decken, Kissen für Menschen im Raum Bocholt, Winterswijk, Dinxperlo.">
```

---

## Kontakt & Social Media

| Kanal | Link/Adresse |
|-------|--------------|
| **E-Mail Service** | service@schlafnerds.de |
| **E-Mail Info** | info@schlafnerds.de |
| **Telefon** | +49 (0)2871 - 349 28 62 |
| **Standort** | Bocholt (Grenzregion DE/NL) |

---

## Anwendungsbeispiele

### Header-Stil

```css
.header {
  background-color: var(--color-white);
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header .logo {
  color: var(--color-primary);
}

.header .tagline {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--color-tagline);
}
```

### Footer-Stil

```css
.footer {
  background-color: var(--color-tagline);
  color: var(--color-white);
  padding: 40px 0;
}

.footer h3 {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--color-white);
}

.footer a {
  color: var(--color-white);
}

.footer a:hover {
  color: var(--color-primary);
}
```

### Hero-Section

```css
.hero {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 80px 0;
  text-align: center;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);
  margin-bottom: 20px;
}

.hero p {
  font-family: var(--font-body);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}
```

---

*Letzte Aktualisierung: Februar 2026*
