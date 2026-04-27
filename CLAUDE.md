# Emma Hudelson — Site Guide

Source for **emmahudelson.com** — a personal site for Emma Hudelson, a nonfiction writer whose work centers on horses, women, and wellness. Debut book *Sky Watch: Chasing an American Saddlebred Story* (University Press of Kentucky, 2024) won the 2025 Equine Media Award. A second book is in progress; Emma is a tenure-track professor at EKU and directs the Writing for Wellness program at Butler University.

## Stack

Static HTML/CSS/JS, **deployed to GitHub Pages at a custom domain (emmahudelson.com)**. No build step, no framework, no package manager, no bundler. The only technical constraint is GitHub Pages compatibility.

## Site map (clean URLs via directory-per-page)

| Route | File |
|---|---|
| `/` | `index.html` |
| `/about` | `about/index.html` |
| `/books` | `books/index.html` |
| `/books/sky-watch` | `books/sky-watch/index.html` |
| `/writing` | `writing/index.html` |
| `/press` | `press/index.html` |
| `/wellness` | `wellness/index.html` |
| `/events` | `events/index.html` |
| `/contact` | `contact/index.html` |

All asset paths absolute (`/css/tokens.css`, `/assets/images/...`). The custom domain serves from root, so absolute paths resolve correctly from any depth (including `/books/sky-watch/`).

**The homepage is not a book page.** It's Emma's name (wordmark) + one atmospheric hero image + nav — and nothing else. No book pitch, no bio paragraph, no buy links. Books live on interior pages.

## Nav

The wordmark acts as the home link, followed by seven top-level items:

> Emma Hudelson · About · Books · Writing · Press · Wellness · Events · Contact

Single-word labels. Active page gets `class="nav-link active"`. No hamburger unless strictly required at mobile.

## File structure

- `index.html` + `{route}/index.html` per page
- `css/tokens.css` — design tokens (colors, type scale, spacing, motion)
- `css/site.css` — shared components (nav, footer, button, input, rules, primitives)
- Page-specific styles live inside each page's `<head><style>` block
- `js/nav.js` — mobile nav toggle + scroll-reveal `IntersectionObserver`. Markup contract: `id="navToggle"` on the toggle button, `id="navLinks"` on the nav list, `.reveal` / `.stagger` classes on animated elements
- `assets/images/` — `sky-watch-cover.jpg`, `emma-portrait.jpg`, `saddlebred-arena.jpg`
- `design_assets/` — reference material from the previous editorial iteration. Kept for brand background; **not the current source of truth**

Preview locally: `python3 -m http.server` in the repo root.

## Design language

**Typographic-first editorial minimalism.** Four aspirational references:

- **ebbartels.com** — the primary typographic reference. The name and nav are styled with real character; type size, letter-spacing, line breaks, and weight shift deliberately across breakpoints. The lettering does the work, not the imagery.
- **kathrynscanlan.com** — radical minimalism. Just the name (large, all-caps) and a single photograph.
- **tkiramadden.com** — name broken typographically across a collage layout, feels like an art object.
- **reneebranum.com** — clean middle ground. Single atmospheric hero, name + subtitle, simple nav.

Four principles cut across all of them:

1. **Atmosphere first, information second.** The homepage sets a mood, not a pitch.
2. **The writer's name is the primary graphic element** — large, typographically deliberate.
3. **Restraint.** What's left out matters as much as what's in.
4. **Not a template.** Every choice feels deliberate; no visible platform chrome.

### Hard rules (do not violate)

- **No shadows, no rounded corners, no gradients, no icons, no frosted glass / backdrop blur.** `border-radius: 0` everywhere. Sticky nav is solid paper.
- Book and journal titles in **italic**, never quotes: `<em>Sky Watch</em>`, `<em>The Cincinnati Review</em>`.
- **Praise-first** on the Sky Watch page — blurbs precede back-cover copy.
- **Animation budget**: opacity fade-in on scroll, link-underline thicken on hover. Nothing else. No sliders, no bouncing, no carousels.
- **Social links are text** — "Instagram", "Facebook" — never icons. Typographic ornaments only (⁂ asterism, § section mark, em dashes).
- **No external placeholder images** from CDNs. Use `assets/images/` or CSS/SVG.

### Color (defined in `css/tokens.css`)

Near-black ink on warm cream paper with **one muted accent**. The mood: good paper, natural light, a barn in the morning. Nothing bright.

| Token | Role |
|---|---|
| `--paper` | Primary background (warm cream ~#FAF8F5) |
| `--ink` | Primary text (near-black ~#1A1A1A) |
| `--ink-soft` | Secondary text / body |
| `--ink-mute` | Captions, metadata, small-caps labels |
| `--rule` | Hairline dividers |
| `--accent` | The single muted accent — used for links, hover, small flourishes |

Page subagents reference tokens only; they never hard-code hex values.

### Typography

The single biggest investment in the build. A distinctive serif display (Fraunces / Cormorant / Freight Text — something that makes "Emma Hudelson" read like a book spine) paired with a refined body serif or a clean, characterful sans. Small-caps labels for eyebrows, nav, meta.

**Never use generic fonts.** No Inter, no Roboto, no Arial, no Space Grotesk, no system-ui. If it feels like a default, pick something else.

Type is **responsive-by-design**, not just proportionally scaled. At different breakpoints, size / letter-spacing / line breaks / weight shift deliberately. On a wide screen the name breathes with generous tracking; on a phone it tightens and stacks. This is what makes Bartels feel crafted.

### Imagery

- **Homepage hero**: one atmospheric image — landscape, barn detail, Kentucky light, a horse in the ring. Not a headshot. The image supports the typography, not the other way around.
- **Author portrait**: only on `/about`.
- **Book cover**: only on `/books` and `/books/sky-watch`.
- Default treatment: B&W or warm duotone. The book cover is the exception (color allowed).

### Layout

Generous margins. Content max-width ~700–800px for text-heavy pages (about, writing). Homepage can go wider / full-bleed for the hero. Mobile-first — most visitors are on phones. Responsive breakpoint `@media (max-width: 900px)`. Every new layout rule needs a mobile counterpart.

## Build workflow (orchestrator-driven)

For substantive visual/structural builds, follow the four-phase pattern:

1. **Parse & plan.** Extract pages, components, tokens, content, ambiguities. Produce a dispatch plan.
2. **Establish the design system first.** One subagent produces `css/tokens.css` + `css/site.css` + the shared nav/footer HTML partial. Downstream subagents consume these verbatim — no token invention.
3. **Dispatch page subagents in parallel.** Each handles exactly one page or one component. Each reads the `frontend-design` skill before writing code. If a needed token is missing, escalate rather than invent.
4. **Integrate & review.** Consistency pass — all pages use shared tokens, nav links resolve, shared components aren't duplicated. A final review subagent critiques against the brief. Fix what it flags.

`frontend-design` skill path (local cache):
`~/.claude/plugins/cache/claude-plugins-official/frontend-design/ee2f72662645/skills/frontend-design/SKILL.md`

For smaller edits that don't warrant the full pattern, edit directly — but preserve tokens, nav structure, and the hard rules above.

## Git

- Remote: `https://github.com/benhudelson/emmahudelson` (private)
- Default branch: `main`
- Commits: terse, descriptive, one per logical change
- GitHub Pages deploys from `main`; the site is live on push
