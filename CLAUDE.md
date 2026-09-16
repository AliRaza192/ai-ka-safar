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
