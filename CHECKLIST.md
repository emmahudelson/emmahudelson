# Site update checklist

Source: instructions.txt. Protocol: .claude/agents-protocol.md.
Status markers per item: #N (pending) → VALIDATING-N → MERGED-N (done) or FAILED-N (retry).
BLOCKED-N items are paused on missing assets or external decisions.

## General

- [x] MERGED-1 — Add "literary" before "nonfiction" (site-wide) — Add "literary" in front of nonfiction in every instance where it describes Emma as a writer. — PR https://github.com/emmahudelson/emmahudelson/pull/1
- [x] MERGED-2 — Cut commentary about Emma's writing not from a linked review/media piece (site-wide) — Remove all editorial commentary about her writing unless it comes from a linked review or media outlet. — PR https://github.com/emmahudelson/emmahudelson/pull/2
- [x] MERGED-3 — Swap serif display for characterful sans serif (site-wide) — Replace the current serif (with the wiggly letter quirks) with a characterful sans serif used site-wide. NOT a default like Inter, Arial, Roboto, or system-ui — pick a deliberate, distinctive sans (e.g. National 2, GT America, Söhne, Neue Haas Grotesk, Söhne Breit, etc.). — PR https://github.com/emmahudelson/emmahudelson/pull/3
- [ ] #4 — Tone down beige in tokens.css (site-wide) — Adjust `--paper` and any warm-cream values in css/tokens.css to a cleaner, less warm, less sepia-toned background. Cooler/closer-to-white cream, not "old timey King's Island photo."
- [ ] #5 — Delete "Indianapolis, IN" from footer (footer) — Remove the Indianapolis, IN line from the global footer.
- [ ] #6 — Delete "elsewhere" footer block (footer) — Remove the "elsewhere" heading and everything beneath it from the global footer.
- [ ] #7 — Delete "the book" footer block (footer) — Remove the "the book" heading and everything beneath it from the global footer.
- [ ] #8 — Footer: hide on landing page, add (c)2026 elsewhere (footer + landing) — No footer on the homepage. On every other page, add "(c)2026" beneath the three-asterisk pyramid.

## Landing page

- [ ] #9 — Replace homepage hero with horse.jpeg (/) — Move /horse.jpeg → /assets/images/horse.jpeg and use it as the homepage hero. Source file is at repo root; it's a 3024×4032 portrait-orientation JPEG.
- [ ] #10 — Strip homepage to photo + name only (/) — Make the landing page clean and crisp: just the hero photo and Emma's name. Remove anything else.
- [ ] #11 — Delete "nonfiction indianapolis kentucky" tagline (/) — Remove the "nonfiction indianapolis kentucky" line from the homepage.

## About

- [ ] #12 — Replace About content with portrait + new bio (/about) — Delete everything except the author photo and bio. Replace bio with: "Emma Hudelson is a writer and Assistant Professor of Creative Writing at Eastern Kentucky University, where she is core faculty in the Bluegrass Writers Studio. *Sky Watch: Chasing an American Saddlebred Story* is her first book, and it received the 2025 Equine Media Award and was a finalist for the Foreword Indies Book of the Year. Her work can also be found in *the Cincinnati Review*, *the Chattahoochee Review*, and *the Rumpus*. Emma holds a PhD in creative writing from the University of Cincinnati and an MFA in creative writing from Butler University, where she directed the Creative Writing for Wellness program. She has two daughters, one husband, three dogs, one cat, and one horse."
- [ ] #13 — Remove "emma hudelson" / "portrait" caption under About photo (/about) — Delete the "emma hudelson" label and "portrait" caption beneath the author photo.
- [ ] #14 — Add "social: @efhudelson" to footer (footer or /about) — Add "social: @efhudelson" to the global footer (or to the about-page footer if the global footer is too crowded).

## Books

- [ ] #15 — Delete site-wide mentions of hello@emmahudelson.com (site-wide) — The address does not receive mail. Remove every instance of hello@emmahudelson.com across the site (no obfuscated form, no contact-link version).
- [ ] #16 — Delete forthcoming book content (/books) — Remove everything tied to the forthcoming/second book. Nothing should appear for it.
- [ ] #17 — Delete "a braided memoir" header (/books) — Remove "a braided memoir" from the books-page header.

## Books → Sky Watch detail

- [ ] #18 — Delete "a memoir" eyebrow above title (/books/sky-watch) — Remove the "a memoir" header above the title.
- [ ] #19 — Delete "—Emma Hudelson" byline under subtitle (/books/sky-watch) — Remove the "—Emma Hudelson" line beneath the title and subtitle.
- [ ] #20 — Praise: show three 1–2 sentence pull quotes with read-more (/books/sky-watch) — Under "Praise for Sky Watch," show only the first three blurbs as 1–2 sentence pull quotes (in the source order: Courtney Maum, Sarah Maslin Nir, Susanna Forrest). Add a "read more" link that expands the remaining blurbs and shows full text for all of them. Order, blurbs, and pull-quote selections per instructions.txt.
- [ ] #21 — Reviews and Media: three reviews with title, author, pull quote, link (/books/sky-watch) — Under "Reviews and Media," show these three reviews with the review title and author displayed plus a one-sentence pull quote and link: sagecigarettes.com/?p=4266; sportstoriespress.com/notebook/book-notes-sky-watch-chasing-an-american-saddlebred-reviewed-by-caroline-grass; thegoodlifereview.com/2024/07/27/rory-gould-review-of-sky-watch-by-emma-hudelson/.
- [ ] #22 — Shrink Sky Watch photo, delete caption text (/books/sky-watch) — Make the Sky Watch (horse) photo smaller and remove the text beneath it.
- [ ] #23 — Delete "ask your local bookseller" link (/books/sky-watch) — Remove "ask your local bookseller" from under the Buy links (it currently links to Contact).
- [ ] #24 — Remove email line from Sky Watch page (/books/sky-watch) — Delete the hello@emmahudelson.com line entirely from this page (address does not receive mail).
- [ ] #25 — Delete "Indianapolis, Indiana — available for readings…" line (/books/sky-watch) — Remove the "INDIANAPOLIS, INDIANA Available for readings, workshops, and press nationwide & virtually" text.

## Writing for Wellness

- [ ] #26 — Replace Wellness page with two text blocks (/wellness) — Delete everything on the page and replace with two text blocks. Block 1 (intro): "Writing for Wellness harnesses the therapeutic power of creative writing, turning the blank page into a site of exploration, revelation, and even healing. In my writing for wellness workshops, the focus is on process, not product. We write from a generative prompt that invites sensory and memory work, reflection, and integration, then share our experiences and, if it feels right, share what we've written. Writing in this way releases stress, reduces chronic illness symptoms, and improves physical and emotional health. Check out the science behind it here! I directed the Writing for Wellness initiative with the Butler University Master of Fine Arts in Creative Writing program in 2023-2024 and I've led workshops both virtually and in various communities." Block 2 (Writing Your Wilderness): "Writing Your Wilderness is a seasonal, nature-based approach to writing for wellness, offered in partnership with Bailey Sims of Mind Body Nature Counseling—you can learn more and find the interactive workbook here. For as long as humans have been writing, we've written about and through the natural world. Of course we have! Humans are, at our center, natural beings, with our own cycles and seasons. Our digital, indoor lifestyle disconnects us from nature, which can lead to dissociation and dysregulation. When we find ourselves in this state, our thoughts become stuck or catastrophic. This is when we look to our body and the natural world as raw and real resources that can help us process emotions, untangle thoughts, and lead us toward whole-body wellness. Weaving a creative writing practice into these nature-based and body-based therapeutic practices can reconnect us to the natural world, to ourselves, and to the wilderness that lives inside us all." Preserve the "science behind it" and "interactive workbook" link placements.

## Writing

- [ ] #27 — Delete all-caps "WRITING" page header (/writing) — Remove the "WRITING" heading at the top of the page.
- [ ] #28 — Delete intro blurb about running list / Instagram (/writing) — Remove "A running list of books, essays, reviews, and columns. For the most current bylines, follow along on Instagram."
- [ ] #29 — Delete back-issues note (/writing) — Remove "Looking for a specific piece that isn't listed? Send a note — most back-issue journals will dig out a copy on request."
- [ ] #30 — Rebuild Selected Work list per instructions.txt (/writing) — Under "Selected Work," show only the titles listed in instructions.txt with publication and date below each. Left-align (not centered). Keep links for: Writing to Heal or Writing to Share, Bridled Joy, Damline, Taste, Aspirin, Nail Polish, Sometimes Smoothies and Yoga Aren't Enough. Remove links (keep titles + cite) for: Horse/Wild, Horse/Crazy, Horse/Woman, Conception. For Swallow: keep both the print citation and the audio podcast link/text (The Nasiona Podcast, Episode 9: Daughterhood). Order matches instructions.txt.

## Contact

- [ ] #31 — Strip Contact page to form only (/contact) — Delete everything on the contact page except the form. Do not include the hello@emmahudelson.com address (it does not work — address is being removed site-wide).

## Page deletions

- [ ] #32 — Delete /press and /events pages entirely (site-wide) — Remove the press and events pages: delete their directories and remove the links from the global nav.
