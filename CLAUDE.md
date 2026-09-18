# CLAUDE.md — AI ka Safar Project

## Project Overview

**Project:** AI ka Safar (Urdu: "AI ka Safar" = "Journey of AI")
**What:** Roman Urdu translation of the Agent Factory book from https://agentfactory.panaversity.org/
**Framework:** Docusaurus 3.10.1 (React 19 + TypeScript)
**Deployment:** Vercel at https://ai-ka-safar.vercel.app/
**Source repo:** /home/aliraza/Desktop/ai-ka-safar

The original book is in English by Panaversity. We translate ALL content to Roman Urdu (Urdu written in English script).

---

## Current Status (as of 16 Sep 2026)

### Build: PASSING ✅

| Metric | Value |
|--------|-------|
| Total docs | **95 files** |
| Components | 5 (Flashcard, ReadingProgress, FocusMode, ReadAloud, AiTutor) |
| Pages | Homepage + Authors + Factory + Leaderboard + Notes + WhatsNew |
| Images | 145+ files in static/img/ |
| Sidebar | Hierarchical with categories |

### What's Done:
- ✅ All 7 phases complete (0-7)
- ✅ 95 docs translated (25 original + 70 new placeholder pages)
- ✅ SEO (metadata, JSON-LD, robots.txt, sitemap)
- ✅ Search functionality (docusaurus-search-local)
- ✅ Interactive features (Focus Mode, Read Aloud, AI Tutor, Leaderboard, Notes)
- ✅ Authors page, What's New, Factory Dashboard
- ✅ Reading progress bar
- ✅ Code block enhancements
- ✅ Hierarchical sidebar restructured

### What's Remaining:
- ⏳ Flashcards: Component built but **0 docs use it** — need to add `<Flashcard>` to crash course docs
- ⏳ Google Analytics: Needs GA4 Measurement ID from user
- ⏳ Per-page OG images: 70+ pages need custom OG images
- ⏳ Content completion: Placeholder pages need full translated content from original site
- ⏳ Broken anchor links: Some internal links don't match

---

## How to Work (Workflow)

When the user pastes English content from the original site followed by a URL:

1. **Translate** the pasted English content to Roman Urdu
2. **Create/update** the MDX doc file in `docs/`
3. **Compare** the translated file against the original source URL to find any missing sections
4. **Add** any missing content found during comparison
5. **Fix** any MDX/build errors
6. **Download** any images referenced in the content to `static/img/`
7. **Update** `sidebars.ts` if new docs are added

### Translation Rules

- **Language:** Roman Urdu (Urdu in English script). Example: "Agent kya hai?" not "What is an agent?"
- **Technical terms:** Keep in English. Example: "Agent", "Runner", "@function_tool", "SDK", "API"
- **Code blocks:** NEVER translate code. Keep all code exactly as-is from the original
- **Headings:** Translate to Roman Urdu
- **Tables:** Translate cell content, keep structure intact
- **Admonitions:** Use Docusaurus syntax: `:::note`, `:::tip`, `:::warning`, `:::danger`
- **Expandable blocks:** Use `<details><summary>Title</summary>Content</details>`
- **Flashcards:** Use `<Flashcard question="Sawal" answer="Jawab" />` component
- **Images:** Download to `static/img/` and reference as `/img/filename.webp`

### MDX Gotchas (Critical!)

- **Angle brackets in prose:** `<channel>` breaks JSX. Use backticks: `` `channel` ``
- **Comparison operators:** `**<2×**` breaks MDX. Use: `**under 2×**`
- **Dollar + angle:** `<$10K` breaks MDX. Use: `under $10K`
- **`<figure>` tags:** Need blank line before and after
- **`style` prop:** Must be JSX: `style={{maxWidth: '600px'}}`

---

## Project Structure

```
/home/aliraza/Desktop/ai-ka-safar/
├── CLAUDE.md                    ← This file
├── docusaurus.config.ts         ← Site config (SEO, search, plugins)
├── sidebars.ts                  ← Sidebar navigation (95 docs)
├── docs/                        ← All translated MDX docs (95 files)
│   ├── ecosystem/               ← 9 ecosystem sub-pages
│   ├── certifications/          ← 4 certification pages
│   └── *.mdx                    ← 82 root-level docs
├── src/
│   ├── components/
│   │   ├── Flashcard/           ← Card-flip flashcard (unused)
│   │   ├── ReadingProgress/     ← Scroll progress bar
│   │   ├── FocusMode/           ← Zen reading mode
│   │   ├── ReadAloud/           ← Text-to-speech
│   │   └── AiTutor/             ← ChatKit floating button
│   ├── css/custom.css           ← Typography, colors, focus mode
│   ├── pages/                   ← Custom pages
│   │   ├── index.tsx            ← Homepage (10 sections)
│   │   ├── authors.tsx          ← Team page
│   │   ├── factory.tsx          ← Progress dashboard
│   │   ├── leaderboard.tsx      ← Gamification
│   │   ├── notes.tsx            ← Notes & highlights
│   │   └── whats-new.tsx        ← Changelog
│   └── theme/
│       ├── MDXComponents.tsx    ← Flashcard registration
│       └── Root.tsx             ← JSON-LD + global components
├── static/
│   ├── img/                     ← 145+ images
│   └── robots.txt               ← Crawler guidance
└── package.json
```

---

## Commands

```bash
# Install dependencies
pnpm install

# Start dev server
npm start

# Build for production
npx docusaurus build

# Serve built site locally
npm run serve

# Clean build cache
npm run clear
```

---

## Key Files Modified (Phase 0-7)

| File | Changes |
|------|---------|
| `docusaurus.config.ts` | SEO metadata, search, plugins, navbar, footer |
| `sidebars.ts` | Hierarchical structure with 95 docs |
| `src/css/custom.css` | Inter/JetBrains Mono fonts, colors, focus mode |
| `src/pages/index.tsx` | 10 homepage sections |
| `src/theme/Root.tsx` | JSON-LD, reading progress, focus mode, TTS, AI tutor |
| `docs/*.mdx` | 95 translated docs with frontmatter |

## Parity Audit Findings (18 Sep 2026) — Read Before Doing Any More Content Work

An audit against the **official sitemap** (`https://agentfactory.panaversity.org/sitemap.xml`) and the live site found gaps beyond the 70 known placeholder pages. Follow this section as the authoritative to-do list until it is fully checked off.

### 1. Pages missing entirely (not even a placeholder file exists)

Create these 7 files. For each, fetch the exact URL below, paste the full content into this session, and translate per the existing Translation Rules.

| # | File to create | Source URL |
|---|---|---|
| 1 | `docs/personal-agent-harnesses.mdx` | https://agentfactory.panaversity.org/docs/personal-agent-harnesses |
| 2 | `docs/founders-program.mdx` | https://agentfactory.panaversity.org/docs/founders-program |
| 3 | `docs/founders-program/first-pilot.mdx` | https://agentfactory.panaversity.org/docs/founders-program/first-pilot |
| 4 | `docs/founders-program/zia-developer-ai-requirements.mdx` | https://agentfactory.panaversity.org/docs/founders-program/zia-developer-ai-requirements |
| 5 | `docs/thesis/plain-english.mdx` | https://agentfactory.panaversity.org/docs/thesis/plain-english |
| 6 | `docs/ai-native-transformation.mdx` | https://agentfactory.panaversity.org/docs/ai-native-transformation |
| 7 | `docs/ai-native-companies/how-to-found-an-ai-native-startup.mdx` | https://agentfactory.panaversity.org/docs/ai-native-companies/how-to-found-an-ai-native-startup |

**Status:** #1 (`personal-agent-harnesses`) has already been fully translated and delivered — verify it's in the repo and matches project conventions, then check it off. #2–#7 currently exist only as structural skeletons (correct frontmatter + translated headings, no body) — a starting point, not a finished page. #4 and #5 are the longest pages in the entire book (spec-document and book-chapter length); do these last, in multiple sessions, section by section.

**Priority order for #2–#7** (do NOT do them in table order — do them in reader-journey order):

1. `personal-agent-harnesses` — verify/finish first; it sits in the main Foundations→General Agents→Mode path every reader walks.
2. `ai-native-transformation` and `how-to-found-an-ai-native-startup` — shorter of the remaining six, self-contained.
3. `founders-program` + its two sub-pages — a program/business chapter, lower reader traffic than the core curriculum.
4. `thesis/plain-english` — longest single page in the book; do last, in chunks across multiple sessions.

### 2. Files that exist in the repo but should NOT (stale / wrong slug)

| File | Action | Why |
|---|---|---|
| `docs/ecosystem/concept.mdx` | Delete | Duplicate of `docs/ecosystem/ecosystem-concept.mdx` (which is correct and already in the sidebar). This one is an orphan under the wrong slug. |
| `docs/production-worker-crash-course.mdx` | Keep, but verify | Does not appear anywhere in the current official sitemap. Either check whether it was renamed/merged into another page on the live site, or leave it as bonus content — just don't treat it as required parity work. |

### 3. `sidebars.ts` fixes required

The array is currently missing three things and has one broken reference. Apply all of these:

```ts
// A) INSERT after the "Certifications" category, BEFORE "how-to-get-paid-agentic-ai-era":
{
  type: "category",
  label: "FTE Startup Founders Program",
  items: [
    "founders-program",
    "founders-program/first-pilot",
    "founders-program/zia-developer-ai-requirements",
  ],
},

// B) REPLACE the existing "Personal Agent Harnesses" category (currently has no
//    landing page — its own doc file didn't exist until now) with:
{
  type: "category",
  label: "Personal Agent Harnesses",
  link: { type: "doc", id: "personal-agent-harnesses" },
  items: ["openclaw-with-general-agents", "hermes-with-general-agents"],
},

// C) INSERT as a sibling right after the "thesis" doc entry:
{ type: "doc", id: "thesis/plain-english", label: "Thesis (Plain-English)" },

// D) REPLACE the existing "AI Workers" / "AI-Native Companies" entries at the
//    bottom with (note: AI-Native Companies becomes a category, not a single doc):
{
  type: "category",
  label: "AI-Native Companies",
  link: { type: "doc", id: "ai-native-companies" },
  items: [
    "ai-native-transformation",
    "ai-native-companies/how-to-found-an-ai-native-startup",
  ],
},

// E) ALSO FIX: "ecosystem/concept" reference inside the existing "The Ecosystem"
//    category must point to "ecosystem/ecosystem-concept" instead (see §2 above).
```

### 4. Strategic flag — check before investing more translation hours

The live site already serves its own locale variants at `/roman/docs/...` (Roman Urdu), `/urdu/docs/...`, `/arabic/`, `/chinese/`, `/spanish/`, and `/hindi/`. Before continuing heavy translation work, open `https://agentfactory.panaversity.org/roman/docs/about` and compare its quality against this project's translation. If Panaversity's own Roman Urdu locale is high quality, this project's differentiation needs to shift toward things the official locale won't have (extra features already built — Flashcards, AI Tutor, Focus Mode, Read Aloud — plus better design and being community-maintained). If their locale is thin or machine-translated, this project's higher-quality manual translation remains the clear value-add as-is. Note this finding in the project status once checked; don't skip re-verifying it periodically since the official locale can improve over time.

### 5. Update the status table at the top of this file once work lands

After completing any item above, update:
- `Total docs` count (currently 95 → should become 102 once all 7 new pages exist, minus 1 if `ecosystem/concept.mdx` is deleted → net 101)
- The "What's Remaining" list — add a line item for "Sidebar fixes (§3 above)" and "Locale-strategy check (§4 above)" until each is resolved

## Translation Quality Guidelines — Add to Existing "Translation Rules" Section

The existing rules cover *mechanics* (what to translate vs keep in English, MDX syntax). These cover *quality* — the difference between a page that technically exists and a page that reads like a professionally edited book. Apply these to every page, including re-checking the 25 already-translated pages against them over time.

### 1. Completeness Is Non-Negotiable

A translated page must have **1:1 section parity** with the source — same headings, same number of sections, same tables with the same row counts, same asides/notes/tips, same cross-links. Before marking any page "done":

- Open the original URL and the translated file side by side.
- Walk section by section. If a section exists in the source and not in the translation, the page is **not done** — it's a partial draft, even if it looks complete at a glance.
- A translated page that is dramatically shorter than the original (rough rule of thumb: less than ~70% of the original word count, accounting for Roman Urdu often being slightly more compact than English) is a red flag — go back and check what was skipped.
- Summarizing or "getting the gist across" is not translation. If the original has 5 worked examples, the translation has 5 worked examples, not 2.

### 2. One Voice for the Whole Book

Pick **one** register and use it on every single page, front to back:

- **Tum vs Aap:** The original addresses the reader directly and informally ("you"). Decide once — either `tum` (peer, casual crash-course tone) or `aap` (respectful, textbook tone) — and never mix them within a page or across pages. Do a project-wide find pass periodically to catch drift.
- **Sentence rhythm:** Match the source's tone per section (a casual crash-course page should read casually; a formal spec document like `zia-developer-ai-requirements` should read more formally) — but the *underlying voice* (word choices, spelling conventions below) stays one consistent house style across the whole book, not page-by-page improvisation.

### 3. Fixed Spelling for Recurring Words (Avoid SMS-Shorthand Drift)

Roman Urdu has no single standard spelling, which is exactly why drift happens across 95 files translated over many sessions. Pick one spelling per word and reuse it everywhere — do not accept shortcuts like `h` for `hai`, `k` for `ke`, `kr` for `kar`. Maintain a running list in `docs/_internal/style-glossary.md` (create this file if it doesn't exist) of decisions already made, and consult it before translating a new page. Add to it whenever a new recurring word shows up. Example format:

| English / concept | Fixed Roman Urdu spelling | Notes |
|---|---|---|
| hai (is) | `hai` | never `h` |
| kya (what) | `kya` | never `kia` |
| karna (to do) | `karna` | never `krna` |
| kar sakte hain | `kar sakte hain` | never `kr skte h` |

### 4. Terminology Glossary — Keep Technical Explanations Consistent

Beyond spelling, track how *concepts* get explained. If "harness" is described a certain way the first time it's introduced, every later page that mentions "harness" should describe it the same way — not a different paraphrase each time. Add a second table to the same style-glossary file for this:

| Term | How it's introduced/explained in Roman Urdu | First used in |
|---|---|---|
| Agent Harness | "wo software jo ek model ko aik aisay worker mein badalta hai jo tumhare bina chal sakta hai" | personal-agent-harnesses.mdx |

Before translating a page that uses a term already in this table, reuse the established phrasing rather than inventing a new one.

### 5. Internal Links Must Resolve, Not Just Look Translated

When the source links to `/docs/from-one-off-to-worker`, the translation's link text gets translated but the `href` must point at the **actual translated slug** in this repo — not a guess, not the English slug if the Roman Urdu file uses a different id. After translating a page, click (or grep-check) every internal link it contains against the actual `docs/` file tree to confirm the target file exists.

### 6. Definition of Done — Per-Page Checklist

A page is only complete when all of these are true. Add a `status:` field to frontmatter (`draft`, `translated`, `reviewed`) so progress is trackable at a glance across 95+ files, not just "file exists or doesn't":

- [ ] Every section from the source is present, in the same order
- [ ] Every table has the same number of rows/columns as the source
- [ ] Every image referenced is downloaded into `static/img/` and the reference resolves (no broken paths)
- [ ] Every internal link points to a file that actually exists in this repo
- [ ] Tum/aap register matches the rest of the book
- [ ] Recurring terms match the style-glossary and terminology-glossary
- [ ] No leftover English sentences (a stray un-translated paragraph is a common copy-paste miss — re-read the full page once, ignoring the source, purely for "does this read as one continuous Roman Urdu document")
- [ ] `npx docusaurus build` passes with no errors caused by this file
- [ ] Frontmatter `status:` updated to `reviewed`

### 7. What "Professional" Means Here (vs. Literal/Machine Translation)

- Translate meaning and intent, not word-for-word. If a literal translation would read awkwardly in Roman Urdu, rephrase it naturally while keeping the technical meaning exact — precision on technical facts is not negotiable, but sentence construction should sound like a person wrote it, not a converter.
- Idioms and figures of speech in the source (the book uses a lot of them — "two bets," "the ceiling," etc.) should be translated as the *concept*, with the English term kept alongside in parentheses on first use if the Roman Urdu phrasing alone would lose clarity, not translated literally word-by-word.
- Do a second read-through of the finished Roman Urdu page with the English source closed — if any sentence feels clunky or unclear on its own, rewrite it.