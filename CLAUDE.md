# CLAUDE.md — AI ka Safar Project

## Project Overview

**Project:** AI ka Safar (Urdu: "AI ka Safar" = "Journey of AI")
**What:** Roman Urdu translation of the Agent Factory book from https://agentfactory.panaversity.org/
**Framework:** Docusaurus (React-based static site generator)
**Deployment:** Vercel at https://ai-ka-safar.vercel.app/
**Source repo:** /home/aliraza/Desktop/ai-ka-safar

The original book is in English by Panaversity. We translate ALL content to Roman Urdu (Urdu written in English script). The translation must be complete — nothing should be missed.

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
- **Headings:** Translate to Roman Urdu. Example: "## Concept 1: What an agent actually is" → "## Concept 1: Agent Actually Kya Hota Hai"
- **Tables:** Translate cell content, keep structure intact
- **Admonitions:** Use Docusaurus syntax: `:::note`, `:::tip`, `:::warning`, `:::danger`
- **Expandable blocks:** Use `<details><summary>Title</summary>Content</details>`
- **PRIMM blocks:** Keep as "PRIMM — Predict" or "PRIMM — Run + Investigate" etc.
- **Flashcards:** Use `<Flashcard question="Sawal" answer="Jawab" />` component
- **Images:** Download to `static/img/` and reference as `/img/filename.webp`
- **Links to other docs:** Use relative paths like `/docs/other-doc`

### MDX Gotchas (Critical!)

- **Angle brackets in prose:** `<channel>` gets parsed as JSX. Always wrap in backticks: `` `channel` ``
- **Comparison operators:** `**<2×**` breaks MDX. Use word form: `**under 2×**`
- **Dollar + angle:** `<$10K` breaks MDX. Use: `under $10K`
- **`<figure>` tags:** Need blank line before and after. If `</figure>` merges with next paragraph, MDX fails
- **`style` prop in MDX:** Must be JSX object syntax: `style={{maxWidth: '600px'}}` NOT `style="max-width:600px"`

---

## Project Structure

```
/home/aliraza/Desktop/ai-ka-safar/
├── CLAUDE.md                    ← This file (auto-loaded by OpenClaude)
├── docusaurus.config.ts         ← Site config
├── sidebars.ts                  ← Sidebar navigation
├── docs/                        ← All translated MDX docs (19 files)
│   ├── about.mdx
│   ├── preface-agent-native.mdx
│   ├── thesis.mdx
│   ├── why-ai-is-non-negotiable.mdx
│   ├── how-to-think-ai-era.mdx
│   ├── ai-prompting-2026.mdx
│   ├── agentic-coding-crash-course.mdx
│   ├── agentic-engineering-crash-course.mdx
│   ├── cowork-crash-course.mdx
│   ├── openclaw-with-general-agents.mdx
│   ├── problem-solving-crash-course.mdx
│   ├── ai-workers.mdx
│   ├── build-agents-crash-course.mdx
│   ├── worker-catalog.mdx
│   ├── sales-catalog.mdx
│   ├── finance-catalog.mdx
│   ├── marketing-catalog.mdx
│   ├── glossary.mdx
│   └── getting-started.mdx
├── src/
│   ├── components/
│   │   ├── Flashcard/           ← Custom flashcard component
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── HomepageFeatures/
│   ├── css/
│   │   └── custom.css
│   └── theme/
│       └── MDXComponents.tsx    ← Registers Flashcard globally
├── static/
│   ├── img/                     ← All images go here
│   └── assets/
└── package.json
```

---

## Current Status (as of 2026-05-22)

### ALL 19 DOCS — COMPLETE ✅

All docs have been translated and verified against the original source. Missing sections have been added.

| Doc | Status | Notes |
|-----|--------|-------|
| about.mdx | ✅ Complete | 4 sections added |
| preface-agent-native.mdx | ✅ Complete | 2 sections added |
| thesis.mdx | ✅ Complete | 9 sections + 2 images added |
| why-ai-is-non-negotiable.mdx | ✅ Complete | 9 quiz questions added |
| how-to-think-ai-era.mdx | ✅ Complete | 516→950 lines |
| ai-prompting-2026.mdx | ✅ Complete | 466→595 lines |
| agentic-coding-crash-course.mdx | ✅ Complete | 2 sections added |
| agentic-engineering-crash-course.mdx | ✅ Complete | Already was complete |
| cowork-crash-course.mdx | ✅ Complete | Artifacts cleaned |
| openclaw-with-general-agents.mdx | ✅ Complete | Already was complete |
| problem-solving-crash-course.mdx | ✅ Complete | 656→813 lines |
| ai-workers.mdx | ✅ Complete | Already was complete |
| build-agents-crash-course.mdx | ✅ Complete | 3393 lines, 5 sections added |
| worker-catalog.mdx | ✅ Complete | 9 sections + SVGs added |
| sales-catalog.mdx | ✅ Complete | 285→706 lines |
| finance-catalog.mdx | ✅ Complete | 250→692 lines |
| marketing-catalog.mdx | ✅ Complete | 373→681 lines |
| glossary.mdx | ✅ Complete | 57 terms + Maturity Model |
| getting-started.mdx | ✅ Complete | 179→323 lines |

### Build Status

- **Build:** PASSING (`npx docusaurus build` → SUCCESS)
- **Config:** `onBrokenLinks: 'warn'` (planned-but-unwritten Parts 0-10 pages have broken links — this is expected)
- **Known broken links:** `/docs/the-primm-framework`, `/docs/Thinking-is-the-Curriculum/*`, `/docs/General-Agents-Foundations/*`, `/docs/Agent-Workflow-Primitives/*`, `/docs/Building-OpenClaw-Apps/*` — these are planned but unwritten pages

### Flashcard Component

Custom React component at `src/components/Flashcard/`:
- Usage in MDX: `<Flashcard question="Sawal" answer="Jawab" />`
- Registered globally in `src/theme/MDXComponents.tsx`
- Card-flip animation, dark/light mode support
- Grid layout for multiple cards: wrap in `<div className="flashcard-grid">`

### Images

- Source images: `https://agentfactory.panaversity.org/assets/images/{name}-{hash}.{ext}`
- Download to: `static/img/`
- Reference in MDX: `/img/filename.webp`
- Some images already downloaded, some may still need downloading

---

## Parts 0-10 (Planned but Unwritten)

The original site has planned pages that don't exist yet:
- Part 0: Thinking is the Curriculum
- Part 1: General Agents Foundations
- Part 2: Agent Workflow Primitives
- Part 5: Building OpenClaw Apps
- Various other sub-pages

These are linked from our docs but don't exist on the original site either. The `onBrokenLinks: 'warn'` config handles this gracefully.

---

## Commands

```bash
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

## How to Continue Work

When user pastes new English content + URL:

1. Read this CLAUDE.md first (auto-loaded)
2. Find or create the corresponding MDX file in `docs/`
3. Translate the content to Roman Urdu
4. Fetch the original URL and compare section headings
5. Add any missing sections
6. Fix MDX gotchas (angle brackets, comparison operators)
7. Download any new images to `static/img/`
8. Run `npx docusaurus build` to verify
9. Report what was done
