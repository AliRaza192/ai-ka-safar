# AI ka Safar — Complete Build Plan (Start to End)

**Date:** Sat Sep 12 2026
**Goal:** Full parity with https://agentfactory.panaversity.org/ — Design, Content, Features, Functionality, Everything
**Approach:** Phased — P0 (Critical Fixes) → P1 (Foundation) → P2 (Features) → P3 (Advanced) → P4 (Content Expansion)

---

## Current State Summary

| Metric | Value |
|--------|-------|
| Existing docs | 25 files (24,371 lines) |
| Original site pages | 70+ pages |
| Missing pages | ~45+ pages |
| Images | 145 files |
| Code blocks | ~176 |
| Admonitions | 83 |
| Flashcards used | 0 (component built but unused) |
| Search | None |
| SEO | None |
| Analytics | None |
| Gamification | None |
| AI Chatbot | None |

---

## PHASE 0: Critical Fixes (Day 1)

### 0.1 — Fix MDX Breaking Issues

| Task | File | Issue |
|------|------|-------|
| Fix `<10%` in prose | `build-agents-crash-course.mdx:3209` | `<10%` breaks JSX — change to `under 10%` |
| Fix `<source>`, `<deliverable>`, `<output>` placeholders | `problem-solving-crash-course.mdx:338-394` | Wrap in backticks or use `{'<source>'}` |
| Fix `{'<$200/seat/month'}` | `sales-catalog.mdx:223` | Unusual syntax, clean up |

### 0.2 — Fix Frontmatter

| Task | File |
|------|------|
| Add frontmatter (id, title, sidebar_label) | `agentic-engineering-crash-course.mdx` |
| Add frontmatter (id, title, sidebar_label) | `build-agents-crash-course.mdx` |
| Add frontmatter (id, title, sidebar_label) | `identic-ai-crash-course.mdx` |
| Add `sidebar_label` to 17 docs missing it | All other docs |

### 0.3 — Fix Broken References

| Task | Issue |
|------|-------|
| Fix OG image filename | Config references `img/social-card.jpg` but file is `img/docusaurus-social-card.jpg` — rename file or update config |
| Fix broken image paths | `getting-started.mdx` references `/assets/images/*.webp` but `static/assets/` is empty — download images or fix paths |

### 0.4 — Cleanup Dead Code

| Task | File |
|------|------|
| Delete `src/components/HomepageFeatures/` | Unused default template component |
| Delete `src/pages/markdown-page.mdx` | Boilerplate page |
| Delete `blog/` directory | Disabled, 6 boilerplate files |
| Delete `docusaurus.config.ts.backup` | Old template config |
| Delete `wget-log` | Download log |
| Delete `01-architecture-*.svg.1` | Duplicate file |

### 0.5 — Build Verification

| Task |
|------|
| Run `pnpm install` to ensure deps are installed |
| Run `npx docusaurus build` — must pass with 0 errors |
| Run `pnpm typecheck` — must pass |

---

## PHASE 1: Foundation & Design (Days 2-4)

### 1.1 — Install Dependencies

```bash
pnpm add @easyops-cn/docusaurus-search-local
pnpm add @docusaurus/plugin-sitemap
pnpm add @docusaurus/plugin-google-gtag
```

### 1.2 — Typography & Fonts

| Font | Source | Usage |
|------|--------|-------|
| Inter (400-900) | Google Fonts | Primary sans-serif |
| JetBrains Mono (400-500) | Google Fonts | Code font |
| Noto Nastaliq Urdu | Google Fonts | Urdu text support |
| Font Awesome 6.5.1 | CDN | Icons |

### 1.3 — Color Scheme & CSS Overhaul

Update `src/css/custom.css` with Inter font, Infima variables, and Tailwind CSS.

### 1.4 — Navbar Redesign

| Element | Implementation |
|---------|---------------|
| Logo | "AI" badge square + "AI ka Safar" text |
| Search bar | Ctrl+K shortcut, centered |
| Dark/Light toggle | Animated sun/moon with rotation |
| "Naya Kya Hai" link | Newspaper icon, links to `/docs/whats-new` |
| Leaderboard link | Trophy icon, links to `/leaderboard` |
| Mobile hamburger | Radix UI dialog-based |

### 1.5 — Footer Redesign

2-section footer with social icons (YouTube, LinkedIn, Instagram, Facebook).

### 1.6 — Homepage Enhancement (7 → 16 sections)

Add: Our Mission, AI Maturity Levels, Traditional vs AI-Native, Monetize Expertise, Terminal animation, Flashcards showcase, Zia Tutor AI promo.

### 1.7 — Theme Toggle Enhancement

Animated sun/moon with localStorage persistence and `prefers-color-scheme` detection.

---

## PHASE 2: Core Features (Days 5-8)

### 2.1 — Search: `@easyops-cn/docusaurus-search-local` with Ctrl+K
### 2.2 — SEO: OG tags, Twitter cards, JSON-LD, sitemap, robots.txt, canonical URLs
### 2.3 — Google Analytics: GA4 with privacy settings
### 2.4 — Breadcrumbs: With JSON-LD BreadcrumbList schema
### 2.5 — Reading Progress Bar: Scroll-based indicator
### 2.6 — Copy as Markdown: Ctrl+Shift+C shortcut
### 2.7 — Back to Top Button: Docusaurus default
### 2.8 — Code Block Enhancements: Line numbers, word wrap, additional languages

---

## PHASE 3: Interactive Features (Days 9-14)

### 3.1 — OpenAI ChatKit: Floating "AI Tutor" button with ChatKit widget
### 3.2 — Read Aloud: Web Speech API with Roman Urdu voice
### 3.3 — Zen/Focus Mode: Distraction-free reading
### 3.4 — Leaderboard Page: Quiz scores, flashcard stats, course completion (localStorage)
### 3.5 — Factory Dashboard: Portfolio checkpoints, hackathons, progress tracking
### 3.6 — Notes & Highlights: localStorage-based annotations with tags
### 3.7 — Authors Page: Zia Khan, Wania Kazmi, Muhammad Junaid, M Rehan ul Haq
### 3.8 — What's New: Reverse chronological changelog
### 3.9 — Flashcard System: Spaced repetition (SM-2), review schedules, statistics

---

## PHASE 4: Content Expansion (Days 15-25)

### 4.1 — Missing Top-Level Pages (10 pages)

| # | Doc ID | Roman Urdu Title |
|---|--------|------------------|
| 1 | `how-to-learn-from-this-book` | Yeh Kitaab Kaise Parhein? |
| 2 | `roles-this-book-trains` | Yeh Kya Roles Seekhati Hai? |
| 3 | `ai-operating-layer` | Operating Layer |
| 4 | `what-you-carry-in` | Aap Kya Le Ke Aate Hain? |
| 5 | `how-to-get-paid-agentic-ai-era` | Paisa Kamaana |
| 6 | `how-to-sell-agentic-ai-era` | Bechna |
| 7 | `whats-new` | Naya Kya Hai? |
| 8 | `ai-native-companies` | AI-Native Companies |
| 9 | `certifications` | Certifications |
| 10 | `ecosystem` | The Ecosystem |

### 4.2 — Ecosystem Sub-Pages (8 pages)

`ecosystem-concept`, `system-of-record`, `zia-tutor-ai`, `zia-developer-ai`, `fde-af-model`, `choosing-your-vertical`, `designing-the-vertical-sor`, `system-of-context`

### 4.3 — Certifications Sub-Pages (4 pages)

`pcao-f`, `pcar-f`, `pcdv-f`, `pcar-p`

### 4.4 — Foundations Crash Courses (10 pages)

`just-delegate-it-crash-course`, `what-ai-actually-is-crash-course`, `ai-fluency-crash-course`, `markdown-html-crash-course`, `code-you-never-write-crash-course`, `skills-connectors-crash-course`, `workflow-design-diagnosis-crash-course`, `governance-risk-responsible-use-crash-course`, `foundations`

### 4.5 — General Agents Crash Courses (15 pages)

`general-agents-web-crash-course`, `using-open-source-llms`, `claude-code-teams-crash-course`, `claude-code-ci-crash-course`, `claude-code-routines-crash-course`, `website-design-crash-course`, `spec-driven-development-crash-course`, `four-layers-crash-course`, `loop-engineering-crash-course`, `harness-engineering-crash-course`, `graph-engineering-crash-course`, `trusting-the-checker-crash-course`, `leaving-the-laptop-crash-course`, `general-agents`

### 4.6 — Personal Agent Harnesses (1 page)

`hermes-with-general-agents`

### 4.7 — Mode 1 — Problem-Solving (3 pages)

`is-this-an-agent-problem`, `from-one-off-to-worker`, `mode-1-problem-solving`

### 4.8 — Mode 2 Phase 1 · Building Blocks (8 pages)

`python-crash-course`, `loop-by-hand-crash-course`, `structured-extraction-crash-course`, `connector-native-apps`, `postgres-ai-crash-course`, `context-layer-crash-course`, `plugins-crash-course`, `ai-identity-crash-course`

### 4.9 — Mode 2 Phase 2 · Build Workers (3 pages)

`claude-agent-sdk-crash-course`, `claude-managed-agents-crash-course`, `mode-2-manufacturing`

### 4.10 — Mode 2 Phase 3 · Scale the Workforce (6 pages)

`human-agent-teams-crash-course`, `designing-agent-experiences-crash-course`, `eval-driven-development-crash-course`, `deploying-agents-crash-course`, `choosing-agentic-architectures-crash-course`, `payment-enabled-agents-crash-course`

### 4.11 — References & Companions (3 pages)

`claude-chatgpt-101-crash-course`, `which-agents-2026`, `cheatsheets`

### 4.12 — Content Requirements Per Page

Each new page must have: frontmatter, images downloaded to `static/img/`, flashcards, code blocks, admonitions, internal links, tables, Google Slides embeds, quizzes.

### 4.13 — Image Download

Download ~200-300 additional images from original site.

---

## PHASE 5: Sidebar Restructure (Day 26)

Complete restructure with 4-level nesting matching original site structure. See full sidebar code in the plan file.

---

## PHASE 6: Polish & Quality (Days 27-30)

### 6.1 — Add ~180-250 flashcards across all crash courses
### 6.2 — Add Google Slides embeds for Teaching Aids
### 6.3 — Content review against original (find missing sections)
### 6.4 — Performance optimization (image optimization, font loading, code splitting)
### 6.5 — Accessibility audit (ARIA, keyboard, screen reader, contrast)
### 6.6 — Mobile responsiveness testing

---

## PHASE 7: Deployment & Launch (Days 31-32)

### 7.1 — Environment variables (GA4, OpenAI)
### 7.2 — Vercel configuration
### 7.3 — Pre-launch checklist (14 items)
### 7.4 — Post-launch (update docs, commit, push, verify)

---

## Timeline Summary

| Phase | Days | Focus |
|-------|------|-------|
| Phase 0 | Day 1 | Critical fixes |
| Phase 1 | Days 2-4 | Design foundation |
| Phase 2 | Days 5-8 | Core features |
| Phase 3 | Days 9-14 | Interactive features |
| Phase 4 | Days 15-25 | Content expansion |
| Phase 5 | Day 26 | Sidebar restructure |
| Phase 6 | Days 27-30 | Polish & quality |
| Phase 7 | Days 31-32 | Deployment & launch |
| **Total** | **~32 days** | **Full parity** |

---

## Dependencies to Install

```bash
pnpm add @easyops-cn/docusaurus-search-local
pnpm add @docusaurus/plugin-sitemap
pnpm add @docusaurus/plugin-google-gtag
pnpm add tailwindcss @tailwindcss/postcss postcss
pnpm add @radix-ui/react-dialog
pnpm add @radix-ui/react-dropdown-menu
```

---

## Files to Create (~55+ new files)

- 10 components (AiTutor, ReadAloud, FocusMode, ReadingProgress, CopyAsMarkdown, etc.)
- 5 pages (leaderboard, factory, notes, authors, whats-new)
- Theme overrides (Root.tsx, Navbar/Logo.tsx, ColorModeToggle.tsx)
- Static files (robots.txt, ~70 OG images)
- 45+ MDX doc files

## Files to Modify (~30+ files)

- docusaurus.config.ts, sidebars.ts, custom.css
- src/pages/index.tsx, index.module.css
- Flashcard component (spaced repetition)
- All 25 existing MDX files
- CLAUDE.md, package.json

## Files to Delete (6 files)

- HomepageFeatures/, markdown-page.mdx, blog/, config backup, wget-log, duplicate SVG

---

*Plan ready. Switch to build mode to begin execution.*
