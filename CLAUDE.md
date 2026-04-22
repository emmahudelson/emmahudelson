# Emma Hudelson — Site Guide

This is the source for **emmahudelson.com** — a personal site for Emma Hudelson, a nonfiction writer whose work centers on horses, women, and wellness. Her debut book *Sky Watch: Chasing an American Saddlebred Story* (University Press of Kentucky, 2024) won the 2025 Equine Media Award.

## Stack

Static site. No build step, no framework, no package manager.

- **HTML**: one file per page at repo root (`index.html`, `about.html`, `work.html`, `events.html`, `wellness.html`)
- **CSS**: shared tokens and base styles in `css/style.css`; per-page styles live in a `<style>` block inside each page's `<head>`
- **JS**: a single shared file `js/nav.js` (mobile nav toggle + scroll-reveal `IntersectionObserver`)
- **Fonts**: Google Fonts — `Cormorant Garamond` (body) and `Cormorant SC` (small caps for eyebrows, labels, buttons)
- **Assets**: `assets/images/` for imagery. Everything under the repo root is deployed as-is.

Preview locally by opening any HTML file in a browser, or by serving the directory (e.g. `python3 -m http.server`).

## Design language

Literary magazine editorial — think *The Paris Review*, *Granta*, *Harper's*, *Aperture*, *n+1*. Type-forward, generous whitespace, hairline rules, restrained color, italic accents for emphasis.

### Design tokens (from `css/style.css`)

Always use these CSS variables rather than hard-coded hex values. Never reinvent the palette.

| Token | Role |
|---|---|
| `--cream` `#f5f0e8` | Default page background |
| `--parchment` `#ede7d9` | Lifted surfaces, quiet sections |
| `--warm-white` `#faf8f4` | Brightest tier |
| `--ink` `#1c1810` | Primary text, dark hero bg |
| `--ink-mid` `#3a3228` | Body copy on light |
| `--ink-light` `#6b5f4e` | Secondary text |
| `--chestnut` `#7a4a2e` | Accent: italic emphasis, active nav |
| `--moss` `#3d5240` | Accent: dark editorial blocks |
| `--gold` `#b8922a` | Accent: eyebrows, labels, rules |
| `--gold-light` `#d4aa5a` | Accent on dark backgrounds |
| `--rule` | Hairline borders |
| `--nav-h` | Fixed nav height |

### Type system

- **Body**: `Cormorant Garamond`, weights 300/400; italic used semantically for emphasis and book titles
- **Small caps / eyebrows / buttons**: `Cormorant SC`, wide letter-spacing (`0.2em`–`0.3em`), uppercase, small sizes (`0.6rem`–`0.72rem`)
- **Display**: clamped sizing, e.g. `clamp(3rem, 5vw, 5.5rem)`; weight `300`; tight line-height (`1.02`–`1.12`)
- Italic `<em>` inside display type is almost always colored `--chestnut` (light bg) or `--gold-light` (dark bg)

### Reusable classes (in `style.css`)

- Layout: `.page-body`, `.page-hero`, `section` (90px 80px padding)
- Type: `.section-label`, `.section-title`, `.lead`
- Buttons: `.btn-dark`, `.btn-outline`, `.btn-gold`, `.text-link`
- Motion: `.reveal` (fades in on scroll), `.stagger > *` (staggered children; delays up to 8 items)

### Cross-page conventions

- Nav + footer are duplicated in every page and should stay in sync
- `©` year is currently 2026 — bump in all five pages together
- Page-specific styles are locally scoped inside that page's `<style>` block; if a pattern becomes reused across pages, promote it to `style.css`
- Responsive breakpoint is `@media (max-width: 900px)`; every new layout rule should include a mobile counterpart

## Design workflow (agents)

For any visual, layout, typographic, or aesthetic change, **do not edit directly** — delegate to the `design-pm` subagent. The PM analyzes the brief, decides whether the work splits into parallel explorations or a single sequential pass, and spawns one or more `designer` subagents. It reviews their output against the design language above and reports back.

Invoke via:

- The `/design` skill (preferred — user-facing)
- Or directly: `Agent(subagent_type="design-pm", prompt=<brief>)`

When the user hands over new assets (photos, cover art, press materials), tell the PM where they live so it can route them to the designer.

## Git

- Remote: `https://github.com/benhudelson/emmahudelson` (private)
- Default branch: `main`
- Keep commit messages descriptive and terse; one commit per logical design change is ideal
