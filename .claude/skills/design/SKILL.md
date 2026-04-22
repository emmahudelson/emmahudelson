---
name: design
description: Dispatch a design update to Emma Hudelson's site via the `design-pm` subagent. Use when the user asks for any visual, layout, typographic, aesthetic, editorial, or copy-tone change to emmahudelson.com (e.g. "redesign the hero", "try a few treatments for the wellness page", "tighten the nav", "swap in the new portrait").
---

The user is requesting a design update to emmahudelson.com. Delegate the work to the `design-pm` subagent rather than editing files yourself. The PM handles brief decomposition, parallel-vs-serial strategy, designer dispatch, and review.

## What to do

1. **Read the user's request carefully.** Capture:
   - The stated goal (what should feel different)
   - Which page(s) or section(s) are in scope
   - Any new assets the user mentions (paths inside `assets/` or new files to add)
   - Whether the user wants one direction or to compare several
2. **If critical info is missing**, ask the user one or two focused questions before dispatching. Don't over-interrogate — the PM can ask its own follow-ups.
3. **Dispatch the PM** with a self-contained brief:

   ```
   Agent(
     subagent_type="design-pm",
     description="<short task summary>",
     prompt=<full user brief, plus any asset paths, plus any constraints the user mentioned earlier in conversation>
   )
   ```

   Include in the prompt:
   - Verbatim user ask
   - Relevant prior context from this conversation (e.g. "user said last turn they want this to feel more like Granta than The New Yorker")
   - Asset paths the PM should know about
   - Any explicit non-goals

4. **When the PM reports back**, relay its summary to the user concisely. If the PM ran parallel variants, make sure the user knows which one was picked and how to see the alternatives if they want.

## When NOT to use this skill

- Pure copy edits with no visual component (just use `Edit` directly)
- Bug fixes in `js/nav.js` or broken links
- Git / deploy tasks
- Questions about the site (read `CLAUDE.md` and answer inline)

## Notes

- `design-pm` and `designer` subagents live in `.claude/agents/` in this repo and are scoped to this project only.
- The aesthetic anchor is "literary magazine editorial" — this is non-negotiable unless the user explicitly says otherwise.
- Emma is the site owner; Ben (the user) is acting as her technical collaborator and will typically relay her feedback.
