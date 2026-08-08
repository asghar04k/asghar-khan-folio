# Asghar Khan Portfolio

Prompt for Claude Code — Asghar Khan ePortfolio Rebuild

Paste everything below into Claude Code to continue this project. It's a personal ePortfolio site: general job-application portfolio + a Master of Medical Sciences (MMS) program requirement in one. There's an existing working version (plain HTML/CSS/JS, multi-page) with real content already gathered — described in full below so you don't have to re-derive it. This prompt is asking for a redesign + restructure, reusing that content.

1. Goal

Rebuild my ePortfolio as a general, job-application-ready personal site that ALSO satisfies a grad program milestone (an "ePortfolio" that must be presented to my program director each term). Everything specific to the Master's program should be tucked under one dropdown tab; everything else should read as a normal professional portfolio a recruiter or grad school could land on.

2. Design direction

Two reference sites I like:

mayalekhi.ca — dark background, huge bold name, monospace-flavoured right-aligned "year / company / role" ledger, minimal navigation, confident whitespace.
mchiu.co.uk (https://mchiu.co.uk/?ref=productdesignportfolios) — light/dark mode toggle that actually flips smoothly, everything interactive on hover, social links rendered as real icon buttons (LinkedIn, email, etc.) that take you straight out to the profile.
I also referenced a site by "Alex" for the home page layout (a navigation-panel style homepage where each section is a clickable tile/panel) — I have not actually provided this URL/screenshot yet. Ask me for it before building the home page, or proceed with your own interpretation of "clickable navigation panel homepage" and I'll redirect if it's wrong.

Direction to build toward:

Colour: not black-and-white minimal — add real colour, but diffuse/soft (gradient washes, not flat blocks), so it stays "modern minimalist" rather than loud. Healthcare-appropriate palette: I'd lean toward green + purple as primary accents with a teal/amber as tertiary (this is what the current version uses — feel free to refine). "Healthcare but modern" is the vibe — trustworthy, clean, not sterile/corporate, not neon/startup-y.
Typography: I like Maya's monospace look. My instinct is monospace for labels/ dates/tags (like her year column) paired with a clean humanist sans (e.g. Inter, what the current build uses) for headings and body copy — full monospace felt too engineering-coded for a healthcare-adjacent portfolio, but use your judgment.
Dark/light toggle: build a working light/dark mode toggle (mchiu-style), default to whichever you think reads best on first load — confirm with me early rather than guessing all the way through.
Motion: scroll-reveal (sections fade/slide in as you scroll — I already had this partially built via IntersectionObserver, keep that pattern), and hover interactivity throughout (buttons, cards, nav — everything should feel alive, not static).
Social icons as real buttons: LinkedIn, email, (GitHub if relevant) rendered as icon buttons in the header, mchiu-style, opening the actual profile/mailto.
3. Sitemap (confirmed — use exactly this)

Top-level tabs, in this order:

Home — NOT just a bio page. Build it as a navigation panel: a set of clickable tiles/cards, each one being a fun, interactive entry point into a section of the site (Awards, Resume, Work Experience, Research, Volunteering, Ventures/Archive, Hobbies, MMS). Awards and Resume specifically should be reachable straight from Home as clickable tiles, not buried — I want a visitor to see "Awards" and "Resume" as immediate options on landing. Still include a short intro (name, tagline, location, one-line bio) at the top, similar to Maya's landing, before the panel of tiles.
Awards — Awards, certifications, Clifton Strengths, my BHSc Award of Recognition, and graduation. (See content inventory below + missing-photos list — I need to send you a graduation photo.)
Work Experience — NOT a plain resume list. Make it interactive: for each role, show a compact entry (title, org, dates) that on hover/click expands into a rectangular "bubble" card with the full description — modern, tactile, not just a wall of resume text. Subcategorize within this tab (don't add more top-level tabs) into:
Employment (the 6 jobs — see inventory)
Practicums (Clinical Ethics Practicum at LHSC/Western Centre for Bioethics — this needs its own rich treatment: photos of the Bioethics Centre launch event, a picture of me with Dr. Jacob Shelley, and a live embedded preview + link to my official practicum profile page — https://bioethics.uwo.ca/initiatives/practicum.html — which also covers the space/exploration ethics project I did alongside the hospital-based work)
Leadership (Founder & President of Western Undergraduate Research Students' Association/URSA — treat this as a rich subsection with photos from the Research & Innovation Symposium I hosted at the Morrissette Entrepreneurship Building, the Indigenous Talking Circle I hosted, and a LinkedIn headshots event I ran — plus the other exec/VP roles listed in the inventory below)
Research — all research projects (see inventory: SickKids DS QI study, AI Geriatrics scoping review presented at both WUHRC and T-CAIREM/Temerty Centre — tie the T-CAIREM oral + poster presentation directly to the North York General Hospital research position, since it's the same scoping review; AI Fall Detection/STEM fellowship work — I need to give you more detail on the STEM fellowship: I led a team, want to link our paper + conference abstract, and show photos from the oral presentation — ask me for these details/links/photos before building this out; Space Medicine scoping review; and the Independent Study / 4th-year thesis on informed consent for Indigenous peoples living with disabilities — full detail already gathered below, including land acknowledgement, objectives, SOAHAC community grounding, acknowledgements, and a personal "Why I Care" story + photo).
Volunteering — SOAHAC (Southwest Ontario Aboriginal Health Access Centre — also the site of my thesis fieldwork/immersion, so cross-reference it with the Research section) and LHSC clinic/patient-visiting volunteering, plus the shorter list of other volunteer roles (see inventory). Ask me for intramural sports photos if you want to include those here or under Hobbies — your call where they fit best.
MMS ▾ — dropdown, program-only content: Courses, Rotations, Capstone, Seminars & Bootcamp, Reflections. (Nothing general-portfolio-worthy goes here — this tab exists only because my program requires it.)
Ventures/Archive — frame this as a "garden and graveyard": active ventures (investing — ask me what kind and how much detail I want shown) as the "garden," and shelved/past projects as the "graveyard" — Luxe Detailing (car detailing company), Drip Apparel (clothing company), and "Safety Stuff Plus" — I haven't given you details on any of these three yet, ask me what they were, when, and what happened before writing copy for them. Tone: playful-but-tasteful is my instinct (light, a little witty — "epitaphs" for the graveyard entries) rather than dry and factual, but confirm with me.
Hobbies — ball hockey & basketball (team captain, multiple seasons/ championships), hunting (I have a real photo of this from a slide deck, ask if I've uploaded it already before requesting again), and ask me for anything else I want added (travel, music, etc. — not yet confirmed).
Resume — viewable inline (embedded PDF) + downloadable, same as before.
4. Full content inventory (already gathered — reuse, don't re-derive)
Profile
Name: Asghar Khan
Tagline: Master of Medical Sciences Candidate, Western University
Location: (not yet specified — likely London, Ontario; confirm)
Bio: Asghar Khan is a Master of Medical Sciences candidate at Western University's Schulich School of Medicine & Dentistry, following an Honours Specialization in Health Sciences (final two-year GPA of 3.97/4.0) and the 2026 recipient of the BHSc Award of Recognition. His work sits at the intersection of clinical ethics, patient support, and health services research — spanning a clinical ethics practicum at the Western Centre for Bioethics and London Health Sciences Centre, a research assistantship in the Down Syndrome Clinic at The Hospital for Sick Children, and applied AI research in geriatric medicine. He is also the founder and president of the Western Undergraduate Research Students' Association (URSA), which he grew into a 2,000+ member research community in its first year.
Email: akha228@uwo.ca
LinkedIn: https://www.linkedin.com/in/asghark/
Education
MSc, Master of Medical Sciences (Candidate) — Western University, Schulich School of Medicine & Dentistry — May 2026 – May 2027
BHSc, Honours Specialization in Health Sciences — University of Western Ontario — Sep 2022 – Apr 2026 — Final two-year GPA: 3.97/4.0 · 2026 BHSc Award of Recognition
Work Experience — Employment (most recent first)
Patient Support — Clinical Ethics Practicum, London Health Sciences Centre & Western Centre for Bioethics, London, ON — Dec 2025–Apr 2026. Coordinated hospital-based ethics consultations across multiple units, managing case discussions and supporting real-time clinical decision-making involving patient care, discharge planning, and LTC/Rehab decision-making.
Founder & President, Western Undergraduate Research Students' Association, London, ON — Oct 2025–Apr 2026. Coordinated operations, planning, scheduling, and communications across a 30+ member team, managing event logistics and ensuring efficient program delivery for a student community of over 2,000 students.
Summer Research Student (SSuRe), Division of Paediatric Medicine, The Hospital for Sick Children (SickKids), Toronto, ON — May 2025–Aug 2025. Worked within the Down Syndrome Clinic to support families following a new diagnosis through patient support initiatives, and evaluated and improved patient education and resource materials, increasing understandability by 55% and actionability by 40%. Participated in outpatient clinics. Collaborated with physicians and staff.
Patient/Customer Support Clerk, Macomb Pain Management Clinic, Shelby Township, MI — May 2024–Aug 2024. Managed patient intake workflows in a high-volume clinic. Supported consultations and procedural preparation, facilitated patient communication, including with high-profile patients and professional athletes.
Customer Service Representative (Part-time, Remote), Call Centre Guys, Toronto, ON — May 2023–May 2025. Managed high-volume inbound calls and digital communications across multiple service areas, including healthcare-related clients.
AI Research Assistant (Project-based), North York General Hospital, Toronto, ON — May 2023–Aug 2025. Managed large-scale screening and data organization for AI-focused research, collaborated with interdisciplinary healthcare teams.
Work Experience — Practicum (needs rich treatment, see Sitemap §3)
Undergraduate Practicum, Western Centre for Bioethics — Winter 2026. First Undergraduate Practicum Student at the Centre. Hospital-based ethics work in partnership with London Health Sciences Centre: clinical ethics discussions on patient autonomy, capacity, consent, and institutional decision-making across long-term care, adult mental health, and child/adolescent mental health units — alongside a research component exploring ethics of healthcare delivery in space environments, informed by Western's Institute for Earth & Space Exploration and the Canadian Space Agency.
Official profile (has my photo + the space project): https://bioethics.uwo.ca/initiatives/practicum.html
Missing: photo of me with Dr. Jacob Shelley; photos from the Western Centre for Bioethics launch event.
Work Experience — Leadership
Western URSA — Founder & President (full narrative from a real LinkedIn post): "I founded the Western Undergraduate Research Students' Association because I saw a gap. A lot of students were interested in research, but didn't know where to start, who to reach out to, or how to actually get involved... We built a team of 30+ executives, received 90+ applications in our first recruitment cycle, and grew a community of over 2,000 students across disciplines and faculties... Our Discovering Research & Networking Symposium was a big moment... We also hosted an Indigenous Health & Research Talking Circle, which was one of the most meaningful experiences for me personally... Special shoutout to my Vice Presidents - Anita Severin, Sofia Tomassini, Fiona Zhou, Lily Carson, Jenna Pavlovic, Porousha Shokoofeh, Jibraan Dhirani, and Ali Ajwani and all the directors."
Website: https://www.westernursa.ca/ (screenshot already captured)
Instagram: https://www.instagram.com/westernursa/
Missing: photos from the Research & Innovation Symposium at the Morrissette Entrepreneurship Building, the Indigenous Talking Circle, and the LinkedIn headshots event.
Other leadership roles:
Executive Director, Western Student Research Conference
Executive Director, Health Occupations Students of America (HOSA)
Director, Events — Dan Management Students' Association
Vice President — Thaqalayn Muslim Association (TMA) at Western
Vice President — Butterfly Effect UWO
Team Captain — Intramural Ball Hockey & Basketball (4+ seasons, multiple championships) — could live here or under Hobbies
Volunteering
Client Support Volunteer, Southwest Ontario Aboriginal Health Access Centre (SOAHAC), London, ON — Sep 2025–Present. Direct client support: check-in, resource prep/distribution, coordinating weekly nutritious food boxes for 100+ families. This is also the site of my thesis fieldwork/community immersion — cross-link with the Research section's Independent Study entry.
Clinic & Patient-Visiting Volunteer, London Health Sciences Centre, London, ON — Apr 2025–Present. Patient navigation/clinic flow in orthopaedic outpatient and lab units; patient support in inpatient/palliative care via regular visits.
Other (dates/details not yet filled in): Volunteer Notetaker (Accessibility Services, Western University); Youth Volunteer (Jaffari Community Centre); Volunteer (Babul Hawaij Relief Foundation); Student Volunteer (Mississauga Food Bank).
Research Projects
Applying a QI Framework to Improve Developmental Service Navigation in Down Syndrome Care — SickKids. Conference abstract + poster, SSuRe Summer Research Symposium.
Practical Applications of Artificial Intelligence in Geriatric Medicine: A Scoping Review — North York General Hospital. Presented at WUHRC 2025 AND at T-CAIREM (Temerty Centre for AI Research and Education in Medicine, University of Toronto) 2025 — oral talk + poster, co-presented with Sai-Amrit Maharaj, MHSc, CSPHP, B.Sc(hon). Supervised/mentored by Dr. Nihal Haque, MD FRCPC (Geriatrician, North York General Hospital) and Dr. Kelly Kay (Executive Director, Provincial Geriatrics Leadership Ontario).
AI Fall Detection — Systematic/Literature Review — connected to Fallyx, an AI fall-detection startup. This may be the "STEM fellowship" project — ask me to confirm and provide: team members, paper link, conference abstract link, and photos from the oral presentation.
Space Medicine Scoping Review — healthcare delivery and ethical responsibility in space environments (part of the Bioethics practicum, see above).
Independent Study / 4th-year thesis: "Informed Consent & Decision-Making for Indigenous Peoples Living with Disabilities in Canada — A Scoping Review." Supervised by Dr. Jacob Shelley, Faculty of Health Sciences, Western University. Presented December 2025.
Land acknowledgement (read verbatim at the start of the presentation): "Presented on the traditional lands of the Anishinaabe, Haudenosaunee, and Lūnaapéewak peoples — including the Chippewas of the Thames First Nation, the Oneida Nation of the Thames, and the Munsee-Delaware Nation — with respectful acknowledgement of Walpole Island First Nation (Bkejwanong Territory) for welcoming participation in traditional food and hunting practices."
Overview: A scoping review examining consent as a structural barrier at the intersection of disability and Indigeneity in Canada. Maps existing literature, identifies legal/ethical/policy frameworks, examines Indigenous perspectives on health, healing, and relational care, and highlights systemic gaps — family burden in navigating services, transition gaps between childhood and adult care systems.
Research objectives: map existing literature; identify legal, ethical, and policy frameworks; examine Indigenous perspectives on health, healing, and relational care; highlight systemic gaps including service navigation and childhood-to-adult transitions.
Community grounding: rooted in ongoing volunteering with SOAHAC's Indigenous Food Sovereignty Program; informed by conversations with SOAHAC's team, plus insight from SickKids' ABILITY Program and Developmental Services Ontario.
Acknowledgements: Dr. Jacob Shelley (supervisor); SOAHAC's Indigenous Food Sovereignty Program Coordinator, Indigenous Dietitian, Indigenous Chef, Developmental Services Worker, and Social Worker; Liz Wemigwans, Traditional Healer; Western Libraries (search strategy support).
"Why I Care" personal story (already written, based on a slide titled "Why I Care" in the presentation — edit for more specificity if you want): "This research started from personal experience, not just academic interest. Watching a family member navigate the healthcare system while in hospital made it clear that barriers to care are rarely just medical — they're rooted in language, culture, power, and assumptions about whose needs are treated as straightforward and whose aren't. Being present for that, and seeing how much depended on who happened to be advocating in the room, became the foundation for my interest in disability, consent, and advocacy-focused research." A cropped photo for this story already exists (see Assets below) — ask if a better-quality original exists before reusing the cropped version.
Awards
BHSc Award of Recognition — 2026, awarded annually to one BHSc student for academic achievement, leadership, character, and community commitment (ask for a graduation photo to pair with this)
Western Scholarship of Distinction — $3,500
Health Innovation Award
Dean's Honour List
Top Student Recognition — Physics I (99%) & Physics II (103%)
Department of Physics/Astronomy In-Course Distinction
Youth Excellence Award
Certifications: none confirmed yet — ask
Clifton Strengths: top 5 not yet provided — ask
Hobbies
Ball hockey & basketball (team captain, 4+ seasons, multiple championships)
Hunting (real photo already exists, cropped from a video — see Assets)
Ask for anything else (travel, music, etc.)
Featured LinkedIn posts (real, own words — can reuse as-is or as source

material for other sections)

MMS acceptance (June 2026): "I'm excited to share that I have accepted my offer to Western University's Master of Medical Sciences (MSc) program through the Schulich School of Medicine & Dentistry... I'm grateful for the opportunity to continue my education at Western and to build on the foundation that my undergraduate experience has given me."
BHSc Award of Recognition (July 2026): "As I reflect on convocation and the completion of my BHSc at Western University, I'm grateful to have been selected as the 2026 recipient of the BHSc Award of Recognition — presented annually to a single BHSc student who demonstrates academic achievement, leadership, character, and a commitment to the School of Health Studies."
Bioethics practicum (May 2026): "I engaged in hospital-based clinical ethics work in partnership with London Health Sciences Centre... One of my biggest takeaways is that ethics in healthcare is not merely abstract or theoretical. It is constant, dynamic, and embedded in everyday clinical decisions."
Founding URSA (May 2026): full text under Leadership above.
MMS program content (goes under the MMS ▾ dropdown only)
Courses (real titles/descriptions, paraphrased — no course codes per program guidance): Communicating Science in the 21st Century; Designing, Analyzing & Interpreting Medical Science Research; Science Policy; Ethical Research Practices; Academic Integrity and Professionalism; Data Science; Research Excellence Through Diversity; Intellectual Property, Implementation & Commercialization. Each needs a per-course artifact + reflection written by Asghar as the program progresses — currently placeholders.
Capstone: working title "Improving Resource & Support Access for Marginalized Populations" (from his own tracker — confirm once the team locks it in). Team-based, addresses a "wicked problem," built across an environmental scan, systematic literature review, and final report/presentation. Task/action/ result/reflection fields still placeholders.
Rotations: Basic Science Rotation (lab placement), Clinical Science Rotation, Community Engaged Learning Rotation — reflections still placeholders.
Seminars & Lab Bootcamp: weekly Friday seminar series; intensive hands-on lab bootcamp early in the program — still mostly placeholders.
Reflections: ongoing journal log, seeded with one real entry about starting the program.
Program logistics/reference (won't necessarily appear on the public site but useful context): 3 end-of-term meetings per year (Aug/Dec/Apr), 7-minute portfolio walkthrough presentations, no grade assigned — must "meet expectations" to pass, write for a stranger audience (no course codes, no instructor names), balance clicking vs. scrolling in the UI, avoid a giant "everything under one tab" catch-all (this was explicitly critiqued in the program's own guidance about a prior student's site).
5. Assets already available (ask the user before re-generating any of these —

they may already have better originals)

headshot.jpg — cropped from an official Western Centre for Bioethics practicum page photo (low-res source, ~470×527). Ask for a proper high-res headshot.
ursa-preview.jpg — real screenshot of westernursa.ca homepage.
independent-study-sickkids.jpg, independent-study-wuhrc.jpg, independent-study-soahac.jpg — cropped from a 1080p video recording of the independent study presentation (capped around ~700×750px). Ask for higher-res originals if available.
why-i-care.jpg — cropped from the same video, the personal hospital photo referenced in the "Why I Care" story above.
resume.pdf — converted from the user's Word resume, already accurate.
6. Missing content to ask the user for (don't guess/invent any of this)
The "Alex" homepage reference (URL or screenshot)
Graduation photo
Photo of Asghar with Dr. Jacob Shelley
Photos from the Western Centre for Bioethics launch event
Photos from: URSA's Research & Innovation Symposium (Morrissette Entrepreneurship Building), the Indigenous Talking Circle, and the LinkedIn headshots event
STEM fellowship details: what "STEM" stands for/refers to, team members, link to the paper, link to the conference abstract, photos from the oral presentation (may be the same project as the AI Fall Detection/Fallyx work — confirm)
Ventures/Archive details: what Luxe Detailing, Drip Apparel, and "Safety Stuff Plus" actually were, rough dates, and what happened to each
Investing: what kind (angel/public markets/etc.), which companies/sectors if shareable, how much detail to show publicly
Clifton Strengths top 5, any certifications
Confirm location (city) for the header/hero
Any additional hobbies beyond ball hockey/basketball and hunting
Intramural sports photos, if any exist, and whether they go under Volunteering, Leadership, or Hobbies
7. Technical implementation notes (lessons from the previous build — worth

reading before you start)

Previous version was plain HTML/CSS/JS: one data.js file as the single source of truth (a const portfolioData = {...} object), a shared app.js renderer that populates the DOM from it, and one styles.css. You have full local tooling now (unlike the sandboxed environment this was originally built in), so feel free to move to a proper framework (Astro, Next.js static export, etc.) if that serves the interactivity/animation requirements better — just preserve the "one file holds all the content" principle so future updates don't require touching layout code.
Known bug already fixed once, don't reintroduce it: CSS dropdown menus that use .dropdown:hover .dropdown-menu { display: block } will flicker/close if there's a positioning gap (e.g. top: 130%) between the toggle and the menu — the cursor passes through a dead zone with nothing hoverable underneath it. Keep dropdown menus flush (top: 100%) with any visual spacing implemented as padding inside the hoverable box, not as a margin/gap outside it.
const portfolioData = {...} in a classic (non-module) script does not attach to window. Guard with typeof portfolioData !== "undefined", never window.portfolioData.
Every render function should guard on the container actually existing (if (!el) return) so a page missing a given section doesn't throw — this let one shared JS file serve every page safely.
For headless testing without a real browser: jsdom repeatedly failed to install cleanly in the sandbox this was built in (corrupted downloads mid- install under a slow proxy). linkedom + Node's built-in vm module (vm.createContext(window) + vm.runInContext(script, window)) worked well as a lightweight alternative — much smaller dependency tree, same practical result for DOM assertions. You likely won't hit the same install issue locally, but it's a good lightweight option regardless.
Test coverage worth replicating: every page actually renders real content (not an empty shell — check that container elements have children after scripts run), every internal <a href> resolves to a file that exists, and the active- nav-highlighting logic correctly marks both the matching link and its parent dropdown toggle.
8. Deployment

Static site — GitHub Pages or Netlify both work fine and are free. If password- protection ends up mattering (some programs require it, this one doesn't strictly need it), Netlify supports that on its free tier and GitHub Pages doesn't.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://asghar-khan-folio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f049bbc4-9603-4520-952a-721fddf9d4df).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
