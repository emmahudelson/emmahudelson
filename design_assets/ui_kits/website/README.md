# Website UI Kit — Emma Hudelson

A full, click-through recreation of the author website.

## Pages

| Page | File | Notes |
|---|---|---|
| Landing | `Landing.jsx` | Masthead-style text intro (inspired by EB Bartels), latest/workshops/essay grid |
| Sky Watch | `SkyWatch.jsx` | Book page — praise first, then copy, then media |
| Publications | `Publications.jsx` | Editorial table: year / kind / title / venue |
| Writing for Wellness | `Wellness.jsx` | Program overview, seasonal series, CTAs |
| Bio & contact | `Bio.jsx` | Three-paragraph bio + contact form |
| Events | `Events.jsx` | Built with "draft" banner — do not link in public nav |

## Shared

- `Chrome.jsx` — top nav + footer
- `styles.css` — component-local styles (tokens come from `../../colors_and_type.css`)
- `index.html` — click-through app with localStorage-persistent page state

## How to read it

Open `index.html`. Every nav item works. The current page persists on reload. Form submission on the Bio page is faked (no backend).
