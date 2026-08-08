# Asghar Khan — ePortfolio Rebuild

A professional portfolio site that doubles as the MMS program requirement, built on this project's React/TanStack stack (not plain HTML/JS), keeping the "one content file is the source of truth" principle.

## Look and feel

- Light default with a working light/dark toggle that flips smoothly and remembers your choice.
- Palette: warm off-white `#faf9f6`, soft surface `#eef2ec`, green `#4f8265` primary, purple `#7c6bb8` secondary, with a teal/amber tertiary. Colour arrives as diffuse gradient washes behind sections, never flat blocks.
- Type: clean humanist sans (Inter) for headings/body, monospace for dates, tags, and the right-aligned "year / org / role" ledger.
- Motion: scroll-reveal on section entry, hover life on every card, tile, and nav item.
- Header: name, nav, theme toggle, and real icon buttons for LinkedIn and email.

## Sitemap

Home · Awards · Work Experience · Research · Volunteering · MMS (dropdown) · Ventures/Archive · Hobbies · Resume

- **Home** — short intro (name, tagline, location, one-line bio), then a panel of clickable tiles: Awards, Resume, Work Experience, Research, Volunteering, Ventures, Hobbies, MMS. Tiles are hover-reactive with mchiu-style motion.
- **Awards** — award cards, certifications, Clifton Strengths, BHSc Award of Recognition, graduation.
- **Work Experience** — three subsections in one tab: Employment (6 roles as compact rows expanding into bubble cards), Practicums (bioethics practicum with photos, Dr. Shelley, and a link/preview to the official practicum page incl. the space ethics project), Leadership (URSA as a rich subsection plus the other exec roles).
- **Research** — SickKids DS QI study, AI in Geriatrics scoping review (WUHRC + T-CAIREM, cross-linked to the North York General role), AI Fall Detection / STEM fellowship, Space Medicine review, and the Independent Study thesis with land acknowledgement, objectives, SOAHAC grounding, acknowledgements, and the "Why I Care" story.
- **Volunteering** — SOAHAC (cross-linked to the thesis), LHSC clinic/patient visiting, plus the shorter roles list.
- **MMS ▾** — Courses, Rotations, Capstone, Seminars & Bootcamp, Reflections. Program-only, nothing general-portfolio-worthy here.
- **Ventures/Archive** — "garden and graveyard": active ventures as the garden, Luxe Detailing / Drip Apparel / Safety Stuff Plus as the graveyard, playful copy with short epitaph lines.
- **Hobbies** — ball hockey & basketball (captain, championships), hunting, plus anything you add.
- **Resume** — embedded PDF viewer plus download button.

## Build order

1. Design system, theme toggle, header/footer, scroll-reveal and hover primitives, content file scaffold.
2. Home tile panel + Resume + Awards.
3. Work Experience (employment, practicum, leadership) and Volunteering.
4. Research, including the full thesis page.
5. MMS section with per-item placeholder slots you fill each term.
6. Ventures/Archive and Hobbies once you send details.

All copy already in your brief goes in verbatim. Sections whose content you're still gathering are built structurally but left out of navigation until you send material, so nothing empty ships.

## What I still need from you

- Graduation photo; photo with Dr. Jacob Shelley; Bioethics Centre launch event photos.
- URSA photos: Research & Innovation Symposium, Indigenous Talking Circle, LinkedIn headshots event.
- STEM fellowship: what it refers to, team, paper link, abstract link, oral presentation photos, and whether it's the same as the Fallyx fall-detection work.
- Ventures: what Luxe Detailing, Drip Apparel, and Safety Stuff Plus were, dates, outcomes; and how much of the investing activity to show.
- Clifton Strengths top 5, any certifications, confirmed city for the hero.
- Any extra hobbies; intramural sports photos and where they belong.
- Existing assets (headshot, ursa-preview, independent-study images, why-i-care, resume.pdf) — upload them here; higher-res originals preferred where they exist.

## Technical notes

- All content lives in a single typed content module (`src/content/portfolio.ts`) so future updates never touch layout code.
- One route file per top-level tab under `src/routes/`, each with its own SEO metadata; MMS subpages are child routes under `/mms`.
- Theme toggle uses a `dark` class on the document root with a localStorage preference and no flash on load.
- Dropdown nav is built with a keyboard-accessible menu component, flush with the trigger and spacing done as internal padding — the hover dead-zone flicker bug cannot recur.
- Scroll-reveal uses an IntersectionObserver hook, respecting reduced-motion preferences.
- Resume PDF and images are stored as CDN-hosted assets rather than committed binaries.
- Deployment is handled by Lovable's hosting (publish to a `.lovable.app` URL, custom domain optional) — no GitHub Pages/Netlify setup needed.
