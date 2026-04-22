# Emma Hudelson — Design System

A design system for the author website of **Emma Hudelson** — literary nonfiction writer, teacher, and author of *Sky Watch: Chasing an American Saddlebred Story* (University Press of Kentucky, 2024).

The direction is **magazine editorial** — think *Harper's*, *The Paris Review*, *Aperture*, *The Believer*. Confident serif display, generous white space, small caps, rules and ornaments, one quiet accent color. Not a Wix theme. Not a template. A literary object.

---

## Sources

- **Live site (content source of truth):** https://www.emmahudelson.com
- **Reference sites admired by the author:**
  - https://www.ebbartels.com/ — *favorite landing text treatment*
  - https://www.tkiramadden.com/
  - https://www.kathrynscanlan.com/
  - https://www.reneebranum.com/
- **Publisher page:** https://www.kentuckypress.com/9780813199108/sky-watch/
- **Companion GitHub repo:** `benhudelson/emmahudelson` *(not imported — GitHub not connected during build; the live site and publisher page provided all necessary content)*

## Pages in scope

1. **Landing** — author name, book blurb, praise-led
2. **Sky Watch** — book page (merges book + reviews/media)
3. **Publications** — essays, journalism, selected work
4. **Writing for Wellness** — workshops + program
5. **Bio / Contact** — about + contact
6. **Events** *(build but do not publish)*

---

## Content fundamentals

**Voice.** Literary, plainspoken, mildly formal. Third-person on bio pages, first-person in essays and workshop copy. No marketing exclamation, no emoji, no sales pressure. The tone is a writer who also happens to be a teacher — warm but unhurried.

**Examples from the live site / publisher materials**

> "Emma Hudelson is a literary nonfiction writer and teacher and is the author of *Sky Watch*, an equine biography and memoir."

> "Writing in this way releases stress, reduces chronic illness symptoms, and improves physical and emotional health."

> "In my writing for wellness workshops, the focus is on process, not product."

**Casing.** Book and journal titles set in italic (editorial convention, not quotes). Section labels in small caps. Sentence case headlines, never Title Case buttons. Page names in the nav set lowercase or small caps.

**Pronouns.** *I* in workshop and teaching copy (direct invitation). *She / Emma / Hudelson* in bio and press copy. Never "we" for the site itself.

**Punctuation.** Em dashes — spaced or unspaced — are fine; prefer unspaced in body copy. Oxford commas. Proper curly quotes.

**Praise first.** Following the author's instruction and the convention of literary sites like E.B. Bartels, book pages lead with praise blurbs *before* the publisher's back-cover copy. This is the rhetorical move she wants.

**No filler.** If a page has three sentences of real content, it gets three sentences and lots of white space. Editorial design earns its restraint.

---

## Visual foundations

### Typography

- **Display serif (headlines, author name, book title):** *GT Sectra* in spirit — we use **Fraunces** as the closest open-source match, weights 300–500, with slight optical-size expressiveness on the largest sizes. High contrast, literary, slightly idiosyncratic.
- **Body serif (running text, blurbs, essays):** **Source Serif 4** — neutral, readable, long-form-friendly.
- **Sans (metadata, nav, labels, small caps):** **Inter** at tight tracking, used almost exclusively at small sizes for nav, captions, and section labels. Never for headlines.

> **⚠ Font substitution flag.** The author's current Wix site uses Wix defaults. We have no licensed fonts in hand. **Fraunces + Source Serif 4 + Inter** are our editorial-minded substitutions pulled from Google Fonts. If you have preferred licensed faces (e.g. GT Sectra, Tiempos, Söhne, ABC Diatype), drop the files into `fonts/` and we'll swap.

### Scale

- Designed for wide reading measures (max ~620px text column) and full-bleed hero type.
- Display H1 can run **72–120 px** on desktop. Body runs **18–20 px**. Never smaller than 14 px except for captions (13 px) and meta labels (11 px letter-spaced).

### Color

A bone-paper neutral ground, deep ink for type, a single dusty-sage accent pulled from the book's cover palette (sky, pasture, dusk). Restraint is the point.

- `--paper` **#F6F2EA** — warm off-white, the primary background
- `--paper-alt` **#EFE8DB** — a slightly deeper tone for alternating sections
- `--ink` **#1A1A1A** — primary text; not pure black
- `--ink-soft` **#3C3A36** — secondary text
- `--ink-mute` **#8A857C** — captions, metadata
- `--rule` **#D9D1C2** — hairlines and dividers
- `--sage` **#6B7A5A** — accent: links, small flourishes, section labels
- `--sage-deep` **#4C5A3F** — hover/active for accent
- `--oxblood` **#7A2E28** — secondary accent, used sparingly on book covers / drop caps

### Spacing & layout

- Generous vertical rhythm. Sections separated by **120–160 px** on desktop.
- Single-column reading for essays (max 620 px). Two- and three-column mastheads for landing and book pages, editorial-style.
- Baseline grid where possible: 8 px system, 28 px body leading, 40 px display leading tight.
- **Hairline rules** (1px `--rule`) are used as editorial dividers — never boxes. No cards with borders. No rounded rectangles.

### Backgrounds & imagery

- Background is **solid paper** — no gradients, no textures, no patterns.
- Imagery is **B&W or warm duotone** at defaults. Color photos allowed on book page only.
- Full-bleed imagery used sparingly — one hero image per page maximum.
- **No stock illustrations.** No icons-as-decoration.

### Animation

- **None aggressive.** Subtle: opacity fade-in on scroll (400 ms), `ease-out`. Link underlines animate via `background-size` transition (200 ms). That's it.
- Page transitions: not needed. The site is small.

### Hover / press

- Links: underline thickens from 1 px to 2 px, color deepens `--sage → --sage-deep`. No color flash.
- Buttons (used sparingly): invert (paper on ink) on hover, no shadow.
- Press: 150 ms opacity 0.7.

### Borders, shadows, cards

- **No shadows.** No elevation system. This is print-inspired.
- **No cards.** Content is separated by rule lines and whitespace, not containers.
- **No border-radius.** Everything is square. One exception: the book cover image has its own printed edge, no added radius.
- **Corner radii:** `0`. Period.

### Transparency & blur

- Not used. The aesthetic is opaque, ink-on-paper. If we ever need a sticky header, it is **solid paper**, not frosted glass.

### Layout rules

- Wide canvas: `max-width: 1320px` for mastheads, `max-width: 620px` for reading.
- Sticky minimal top nav on scroll — small caps, hairline-ruled bottom.
- Footer is a single ruled line with three columns: name + year, nav, socials as text.

---

## Iconography

- **No icon set.** The system deliberately uses **no icons**. Social links are set as **text** ("Instagram", "Facebook") in the footer — matching EB Bartels / Kathryn Scanlan conventions.
- **Typographic ornaments** (⁂ asterism, § section, — em dashes, small-cap labels) substitute for decorative icons.
- **Emoji:** never.
- **Unicode ornaments** OK where they read as editorial furniture (asterism, section mark, mid-dot).
- If an icon is absolutely required later (e.g. an external-link glyph in the CMS admin), use **Lucide** at 1.5px stroke, inline SVG, `currentColor`. Not on the public site.

---

## File index

| Path | Purpose |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Agent Skill manifest for downstream use |
| `colors_and_type.css` | CSS variables for colors, type scale, spacing, semantic aliases |
| `fonts/` | Webfonts (loaded via Google Fonts at present — flagged for swap) |
| `assets/` | Book cover, author photo placeholder, ornaments |
| `preview/` | Design system cards (registered for the Design System tab) |
| `ui_kits/website/` | Full website UI kit — index.html + JSX components |

---

## Open questions / caveats

- **Fonts are substitutions.** We used Fraunces / Source Serif 4 / Inter from Google Fonts. Swap in licensed faces if you have them.
- **Photography.** The site currently only has the book cover. We use a portrait placeholder — please send a real author photo (B&W or warm-toned preferred).
- **Events page** is built but marked draft — do not link in nav until populated.
- **Praise blurbs** are pulled from the University Press of Kentucky listing; please confirm which ones Emma wants featured and in what order.
