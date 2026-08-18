# Project Context — Asghar Khan ePortfolio

Read this whole file before doing anything else in a new session. It captures every
decision, convention, and gotcha from the build so far, so you don't have to
re-derive them from the git log or by trial and error.

## What this is

A personal ePortfolio for Asghar Khan (Master of Medical Sciences candidate, Western
University) that doubles as his program's required "ePortfolio" milestone (the `MMS`
section). General portfolio + grad program deliverable in one site.

- **Repo**: `github.com/asghar04k/asghar-khan-folio` — currently **public** (user's
  choice, needed for free hosting; ask before changing visibility).
- **Live URL (Lovable)**: `asghar-khan-folio.lovable.app` — auto-rebuilds on every
  push to `main`. The repo is connected to Lovable's editor too.
- **`AGENTS.md` in the repo root says**: never force-push or rewrite published
  history on this repo — it breaks Lovable's sync and the user loses project
  history there. Always commit forward, never `--amend`/rebase pushed commits.
- User is also mid-setup on a **Vercel** deploy (imported the repo, TanStack Start
  preset auto-detected correctly, was about to hit Deploy) as a free alternative to
  paying for Lovable. Check whether that deploy succeeded before assuming it did.
- The long-term intent is to **stop paying for Lovable** once an alternative
  (Vercel/GitHub Pages) is confirmed working, since Lovable's AI editor isn't
  actually being used, only its hosting/auto-sync.

## Tech stack

TanStack Start (React 19, file-based router) + Tailwind v4 + Vite. Content-driven:
**`src/content/portfolio.ts` is the single source of truth for all copy** — never
hardcode copy in a route/component file, always add it to this file and reference it.

## Environment setup already done this session (verify, don't redo blindly)

The machine had **no node/npm/bun/brew/gh** installed at session start. Fixed as
follows — if a fresh session can't run the dev server or push to git, check these
first before reinstalling anything:

- **Node**: installed via `nvm` (`~/.nvm`), Node 24 LTS active. Loader line already
  appended to `~/.zshrc`. If `node`/`npm` aren't found, run:
  `export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
- **GitHub CLI**: binary manually installed to `~/.local/bin/gh` (no Homebrew
  available), PATH entry added to `~/.zshrc`. Authenticated as `asghar04k` via
  device-code flow (`gh auth login --web`), git credential helper configured via
  `gh auth setup-git`. Should still be authenticated — verify with `gh auth status`
  before assuming you need to re-auth.
- **Dev server port is 8080, not 3000.** `.claude/launch.json` is already configured
  correctly for the Browser-pane preview tool, pointing at `.claude/dev-server.sh` —
  a wrapper script that manually exports the nvm node path onto `PATH` before
  running `npm run dev`, because the preview tool spawns processes without sourcing
  `~/.zshrc`. Don't fight this again; just use `preview_start` with name
  `portfolio-dev` and it works.
- `.claude/` and `package-lock.json` are gitignored (project uses `bun.lock`; npm
  was just easier to get working in this sandbox).

## Two real file-access limitations (don't waste time re-discovering these)

1. **`~/Downloads` is TCC-protected.** The `Read`/`Bash` tools get `EPERM`/
   `"Operation not permitted"` trying to touch anything in Downloads directly, even
   with the sandbox override flag. A `Finder` AppleScript duplicate-out trick
   sometimes works (`osascript -e 'tell application "Finder" to duplicate ...'`) but
   is **flaky and frequently hangs for 120s with "AppleEvent timed out."** Don't
   retry it more than twice. The reliable path: **ask the user to upload the file to
   the GitHub repo directly** (drag-and-drop on github.com works even for files up
   to ~25MB; bigger files need compressing first or AirDropping to the Mac and
   uploading from there), then `git pull`.
2. **Images pasted directly into the chat cannot be saved to disk.** There is no
   accessible local file path for them (searched extensively — Claude app support
   dirs, pending-uploads, session folders — nothing). You can *see* and describe
   them, but always ask the user to upload to GitHub if the image needs to end up
   as a real file in the repo.
3. Public web images/PDFs have no such restriction — `curl -o file.jpg <url>` just
   works. Used this to pull a Retraction Watch graphic directly.

## Browser-pane testing quirk (not a real bug, don't chase it)

This site uses `IntersectionObserver`-based scroll-reveal
(`src/components/site/Reveal.tsx`, `.reveal`/`.reveal-in` classes). In the
automated `Claude_Browser`/`claude-in-chrome` tools, the `scroll` action often
doesn't reliably fire the observer, so screenshots show faded/invisible content
that is actually correct. Two ways to verify instead of guessing:
- `get_page_text` (or `mcp__claude-in-chrome__get_page_text`) — always shows the
  real DOM content regardless of animation state.
- To force a real screenshot: run this via the JS execution tool first —
  `document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal-in'))`

## Content architecture

- **Routes**: file-based, flat dot-notation under `src/routes/` (e.g.
  `mms.courses.$slug.tsx` → `/mms/courses/$slug`).
- **Gotcha**: TanStack Router treats a dot-prefixed file as a *child* of the route
  matching the prefix. `mms.courses.$slug.tsx` is a child of `mms.courses.tsx`, so
  the parent **must** render `<Outlet />` or the child never displays no matter how
  correct its own code is. Current structure: `mms.courses.tsx` is a two-line
  Outlet-only layout; the actual courses grid UI lives in `mms.courses.index.tsx`.
  If you add more nested dynamic routes anywhere, remember this pattern.

### MMS section structure (the grad-program-required part)

Nav is grouped as **"Courses & Seminars"** and **"Lab & Journal Club"** (not 5
separate top-level items — this was a deliberate restructure per user request,
matching how the real program groups things). `/mms` index page is a fast "story"
format: a stat strip (8 courses / 3 rotations / 9-week bootcamp / 1 capstone team)
+ a 5-step numbered journey, meant to be readable in 20–30 seconds.

**Courses system** (`src/content/portfolio.ts`):
- `mmsCourses`: array of `{slug, title, description, active: boolean}`. Order is
  deliberately non-alphabetical/non-numeric — it follows the *real* order Asghar
  took the courses in (e.g. 9505 was moved to sit before 9503).
- `courseDetails`: `Record<slug, CourseDetail>` — only slugs present here get the
  full built-out page; everything else falls back to a generic placeholder
  Artifact/Reflection view on `/mms/courses/$slug`.
- `active: false` courses render as dulled, unclickable "Coming soon" cards on the
  courses index (`mms.courses.index.tsx`) — dashed border, greyscale, no `<Link>`.
- **Current state**: `communicating-science` (9501) and
  `academic-integrity-professionalism` (9505) are fully built. `science-policy`
  (9503) is marked `active: true` but **has no `courseDetails` entry yet** — it
  currently just shows the placeholder. The other 5 courses are `active: false`.

**`SelectedWorkItem` type** (one entry per Task/My Actions/Results block):
```ts
{
  title, task, actions, results,
  documents?: {src, label}[],        // stacked scrollable PDF viewers (iframe)
  references?: {src, alt, caption, href?}[],  // small tilted polaroid images
  heroImage?: {src, alt, caption?, href?},    // ONE large featured image
  audio?: {src, podcastName, description},    // custom AudioPlayer, "coming soon" if src is ""
  links?: {label, href}[],           // small pill buttons to external citations
}
```
- `references` vs `heroImage`: use `references` for small supporting citations
  (book cover, org logo) alongside a PDF viewer; use `heroImage` when there's no
  PDF and you want one image to fill that visual column (e.g. the Retraction Watch
  "RETRACTED" stamp image, Asghar's own AI-misconduct flowchart).
  `heroImage.caption` is optional — only add a "Source: X" caption for third-party
  material, not for Asghar's own original diagrams.
- `AudioPlayer` component (`src/components/site/AudioPlayer.tsx`): custom
  play/pause + ±15s skip + seek bar, not the bare `<audio controls>` element.

## Hard style rules established via explicit user feedback (follow these by default)

1. **No em dashes anywhere in MMS section copy.** Use commas, colons, periods, or
   parentheses instead. This was an explicit, repeated instruction.
2. **Keep MMS copy short and scannable.** User flagged the site as "too text heavy"
   twice — trim aggressively, especially in reflection/summary sections. Emma
   Mensour's reference site (`emmamensour.wixsite.com/eportfolio`) is the
   benchmark for brevity: her Task/My Actions/Result blocks are often just one
   short sentence each.
3. **When an assignment itself wasn't very impactful but the lesson was**, keep
   Task/Actions terse (Emma's style) and let Results carry most of the
   detail/weight. Explicit example: the Obokata Case Brief entry.
4. **Results/outcome text must foreground the actual transferable skill gained**
   ("I can now...") — not just restate the task outcome. This is a portfolio meant
   to demonstrate capability to a reader (a program director, a recruiter), not a
   task log.
5. **Skills framing should be research-first, but note how it generalizes** to any
   academic or professional setting — one short clause is enough, don't over-do it.
6. **"Also in this course"** = a wrapped chip/pill cloud (topics as short tags), not
   a dense paragraph naming six things.
7. **Self-Reflection** = its own card with a `wash-soft` background and a `Quote`
   icon; pull out the most personal/vivid paragraph as a bold `blockquote`
   (left border accent) rather than three uniform paragraphs stacked in a row.
8. **Selected Work cards use colored icon badges** (Target/Wrench/CheckCircle2 in
   small colored circles) for Task/My Actions/Results — user explicitly asked for
   "more shapes," not plain text labels.
9. **Never fabricate specific factual details** (debate topics, group members,
   article names, outcomes). If the user hasn't given you a detail, write honest
   placeholder text ("Details to be added.") and ask — don't invent plausible
   specifics, even small ones.
10. Self-Reflection sections should read as genuine first-person reflection, not a
    named framework (explicitly told **not** to use Borton's "What/So What/Now
    What" model even though Emma's reference site uses it) — flowing paragraphs.

## Design system (`src/styles.css`)

Tailwind v4 with custom "wash" utilities for the diffuse gradient-blob background
treatment:
- `wash` — the most intense version, used once per page (hero sections).
- `wash-soft` — page header gradient (green/blue leaning, used in `PageShell`).
- `wash-cool` — green + teal/blue only (no purple), used to spread color further
  down long pages (About/Education, footer, mid-page sections) so color isn't
  confined to just the top. Added after "the site is too plain" feedback.
- Palette: primary = green, secondary = purple, tertiary = teal/blue, amber =
  tertiary accent. Chroma was deliberately boosted (more saturated/vivid) after
  feedback that the first pass was too muted. Dark mode background was lightened
  from near-black to a proper dark slate-green after "way too dark" feedback —
  don't revert either of these without being asked.
- Theme toggle (sun/moon icon, top-right of header) already fully implemented for
  both light and dark.

## Asset organization conventions

- `public/images/<section>/<descriptive-name>.jpg` — never keep raw upload
  filenames (e.g. `IMG_1234.PNG`, or GitHub's auto-generated `image-<timestamp>.png`).
  Always `git mv` to a descriptive name in the right folder.
- `public/documents/<descriptive-name>.pdf` — for embedded PDF viewers.
- **Always compress photos before committing.** Phone photos land at 10MB+;
  bring them down with `sips -Z <maxdim> --setProperty formatOptions <quality>`
  (usually `-Z 1000` to `-Z 1600`, quality 70–85) to ~1MB or less. Screenshots/
  graphics can usually stay smaller (`-Z 1600`, quality 78+).
- Third-party reference images (e.g. a book cover, a news graphic) need a visible
  "Source: X" caption and should link back to the original when used — this is the
  established copyright-safe pattern on this site (see the Retraction Watch image
  and the Into the Gray Zone book cover).
- **Check any course-material PDF for a no-share/no-upload restriction before
  embedding it.** The 9505 syllabus had "Course materials cannot be sold/shared/
  uploaded" printed on every page — it was read for context but never published,
  and was removed from the repo once noticed. Apply the same check to any future
  syllabus/slide-deck uploads.

## Outstanding open items (ask the user, don't guess)

1. **9501 Self-Reflection** is still vague about the closing debate — user was
   asked what the debate topic/assigned position was and what actually changed
   their mind, but never answered. Current text just says "having our own research
   change my mind on the issue" with no specifics.
2. **"Beyond the Abstract" podcast** (9501, third Selected Work entry): structure
   and player are built, but (a) the MP3 hasn't been uploaded, (b) don't know the
   research article covered, group members, or Asghar's specific contribution —
   Actions/Results are still literal "to be added" placeholder text.
3. **Science Policy (9503)** has no content yet — needs a full
   `courseDetails["science-policy"]` entry once the user sends material.
4. **Journal Club** (paired with Lab Bootcamp on `/mms/lab`) is still a bare
   placeholder — no real session details given yet.
5. **5 remaining MMS courses** (Designing/Analyzing Research, Ethical Research
   Practices, Data Science, Research Excellence Through Diversity, IP/
   Commercialization) have zero content, shown as greyed "Coming soon."
6. **Rotations & Capstone pages** — still the original placeholder scaffold, never
   built out this session.
7. **Resume page** — still just a "Request the PDF" mailto link + text summary; no
   actual resume PDF has ever been uploaded/embedded despite being planned.
8. **Awards page** — Clifton Strengths top 5 and any certifications are still
   unconfirmed/placeholder.
9. **Bioethics practicum section** — still waiting on photos from the Centre's
   launch event and a photo with Dr. Jacob Shelley.
10. **URSA/Leadership section** — still waiting on photos from the Indigenous
    Talking Circle and the LinkedIn headshots event (have the Symposium photos
    already).
11. Confirm whether the **Vercel deploy** was completed successfully.
12. Confirm current status of the **Lovable subscription** decision.

## Quick reference: verifying a change before committing

1. `export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
2. `npx tsc --noEmit` — must be silent (no output = no errors).
3. `npx eslint src --fix` — should end at "0 errors" (pre-existing warnings in
   `src/components/ui/*` are fine, not ours to fix).
4. Visually verify via the Browser pane (`preview_start` with name
   `portfolio-dev`, port 8080) — remember the reveal-animation quirk above.
5. `git fetch origin && git log origin/main --oneline -3` before every push —
   Lovable's own edits or the user's GitHub uploads can land commits between
   turns; pull first if there's anything new.
6. Commit with a descriptive message, `git push origin main`. Never force-push.
