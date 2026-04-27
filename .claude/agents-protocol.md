# Agent loop protocol — instructions.txt → PRs

This file is the shared contract for the dev-agent / quality-agent loop that walks `CHECKLIST.md` and ships one PR per item.

## Roles

- **Dev agent** — picks the next checklist item whose status is unchecked or `FAILED-#`, implements it on a fresh branch, opens a PR, updates the checklist line.
- **Quality agent** — reviews a PR by its number, validates against the checklist item, merges or fails it, updates the checklist line.

## Checklist file

`CHECKLIST.md` at repo root. One item per line:

```
- [ ] #N — short title (page) — original instruction text
```

After dev work begins:

```
- [ ] VALIDATING-N — short title (page) — original instruction text — PR https://github.com/emmahudelson/emmahudelson/pull/N
```

After quality merges:

```
- [x] MERGED-N — short title (page) — original instruction text — PR https://github.com/emmahudelson/emmahudelson/pull/N
```

After quality fails (kept unchecked so dev picks it back up):

```
- [ ] FAILED-N — short title (page) — original instruction text — PR https://github.com/emmahudelson/emmahudelson/pull/N — reason: <one line>
```

## PR conventions

- **Branch name:** `item-N`
- **PR title:** `#N — <short title>`
- **PR body:** quote the original instruction line from `CHECKLIST.md`, then a 1-line summary of the change.
- **One PR per checklist item.** No bundling.

## Dev agent workflow

1. Read `CHECKLIST.md`, find lowest-numbered item that is `[ ] #N` or `[ ] FAILED-N`.
2. `git checkout main && git pull && git checkout -b item-N` (if `item-N` exists from a prior FAILED run, check it out and continue from there).
3. Implement the change. Honor `CLAUDE.md` hard rules unless this specific item explicitly overrides them (font swap, beige tone-down).
4. Commit, push, open PR with title `#N — <title>`.
5. Update the line in `CHECKLIST.md`: replace `#N` (or `FAILED-N`) with `VALIDATING-N`, append PR URL. Commit + push the checklist change to `main` directly (so the next dev pickup sees current state).
6. Stop. Quality agent takes over.

## Quality agent workflow

1. Given a PR number N, read the corresponding `CHECKLIST.md` line.
2. Validation: (b) verify the specific text/element change is present in the rendered HTML — for static-site changes, reading the resulting HTML/CSS files is sufficient — and (d) judge against the instruction's intent.
3. Run `python3 -m http.server` if needed for visual sanity, but for static HTML, file reads + grep against the diff is the primary check.
4. **Pass** → `gh pr merge N --squash --delete-branch`, then on `main` update the checklist line: `[ ] VALIDATING-N` → `[x] MERGED-N`. Commit + push.
5. **Fail** → `gh pr comment N --body "<reason>"`, leave PR open, on `main` update the checklist line: `VALIDATING-N` → `FAILED-N — reason: <one line>`. Commit + push. Do not close the PR; the dev agent will push more commits to the same branch on retry.

## Hard rules for both agents

- Never amend or force-push.
- Never merge without quality validation.
- Never edit `CHECKLIST.md` line numbers — they are the stable identifier across PRs and comments.
- If an item is blocked (e.g. missing asset like `horse.jpeg`), mark it `BLOCKED-N — reason: <one line>` and skip. Do not open a PR.
- The orchestrator (Claude in the main thread) owns dispatch order. Agents do one item, report back, exit.
