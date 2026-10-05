# AI ka Safar — Platform Completion Plan

**Project:** AI ka Safar (Roman Urdu translation of Agent Factory book)
**Status:** ~85% complete — 95 docs translated, 7 critical pages missing
**Target:** Production-ready platform with full parity to original sitemap

---

## Phase 1: Critical Content & Structure (Week 1-2)

### 1.1 Create 7 Missing Pages (Priority Order)
| # | File | Source URL | Est. Effort |
|---|------|-----------|-------------|
| 1 | `docs/personal-agent-harnesses.mdx` | agentfactory.panaversity.org/docs/personal-agent-harnesses | 4-6 hrs |
| 2 | `docs/ai-native-transformation.mdx` | agentfactory.panaversity.org/docs/ai-native-transformation | 3-4 hrs |
| 3 | `docs/ai-native-companies/how-to-found-an-ai-native-startup.mdx` | agentfactory.panaversity.org/docs/ai-native-companies/how-to-found-an-ai-native-startup | 3-4 hrs |
| 4 | `docs/founders-program.mdx` | agentfactory.panaversity.org/docs/founders-program | 4-5 hrs |
| 5 | `docs/founders-program/first-pilot.mdx` | agentfactory.panaversity.org/docs/founders-program/first-pilot | 2-3 hrs |
| 6 | `docs/founders-program/zia-developer-ai-requirements.mdx` | agentfactory.panaversity.org/docs/founders-program/zia-developer-ai-requirements | 8-10 hrs (longest) |
| 7 | `docs/thesis/plain-english.mdx` | agentfactory.panaversity.org/docs/thesis/plain-english | 8-10 hrs (longest) |

**Method per page:**
1. Fetch source URL content
2. Translate to Roman Urdu (per CLAUDE.md Translation Rules)
3. Download all images to `static/img/`
4. Add proper frontmatter with `status: "reviewed"`
5. Run `npx docusaurus build` to verify

### 1.2 Fix Sidebar Navigation (`sidebars.ts`)
Apply 5 changes from CLAUDE.md §3:

```typescript
// A) INSERT after Certifications, BEFORE how-to-get-paid-agentic-ai-era
{
  type: "category",
  label: "FTE Startup Founders Program",
  items: [
    "founders-program",
    "founders-program/first-pilot",
    "founders-program/zia-developer-ai-requirements",
  ],
},

// B) REPLACE Personal Agent Harnesses category
{
  type: "category",
  label: "Personal Agent Harnesses",
  link: { type: "doc", id: "personal-agent-harnesses" },
  items: ["openclaw-with-general-agents", "hermes-with-general-agents"],
},

// C) INSERT after thesis doc entry
{ type: "doc", id: "thesis/plain-english", label: "Thesis (Plain-English)" },

// D) REPLACE AI Workers / AI-Native Companies entries
{
  type: "category",
  label: "AI-Native Companies",
  link: { type: "doc", id: "ai-native-companies" },
  items: [
    "ai-native-transformation",
    "ai-native-companies/how-to-found-an-ai-native-startup",
  ],
},

// E) FIX: ecosystem/concept → ecosystem/ecosystem-concept
```

### 1.3 Delete Duplicate File
```bash
rm docs/ecosystem/concept.mdx
```
(Duplicate of `docs/ecosystem/ecosystem-concept.mdx`)

---

## Phase 2: Configuration & Quality Foundations (Week 2)

### 2.1 Configure Google Analytics
- Add GA4 Measurement ID to `docusaurus.config.ts`:
```typescript
plugins: [
  ['@docusaurus/plugin-google-gtag', {
    trackingID: 'G-XXXXXXXXXX', // Get from user
    anonymizeIP: true,
  }],
],
```

### 2.2 Create Style Glossary
Create `docs/_internal/style-glossary.md`:
```markdown
# Style & Terminology Glossary

## Fixed Spellings (Roman Urdu)
| English | Roman Urdu | Notes |
|---------|-----------|-------|
| is | `hai` | never `h` |
| what | `kya` | never `kia` |
| to do | `karna` | never `krna` |
| can do | `kar sakte hain` | never `kr skte h` |

## Terminology Definitions
| Term | Definition | First Used In |
|------|-----------|---------------|
| Agent Harness | "wo software jo ek model ko aik aisay worker mein badalta hai jo tumhare bina chal sakta hai" | personal-agent-harnesses.mdx |
```

### 2.3 Add Status Frontmatter to All Docs
Add `status: "draft" | "translated" | "reviewed"` to all 95+ doc frontmatters for tracking.

---

## Phase 3: Interactive Features Enhancement (Week 2-3)

### 3.1 Wire Up AiTutor Component
Current state: UI only, no actual AI response.

**Option A: Integrate with AI API**
- Add environment variable for API key
- Implement streaming response in `AiTutor/index.tsx`
- Add error handling and rate limiting

**Option B: Remove until ready**
- Remove `<AiTutor />` from `RootWrapper.tsx`
- Keep component code for future

**Recommendation:** Option A with a simple proxy endpoint or direct API call.

### 3.2 Add Flashcards to Crash Course Docs
Target docs: `getting-started.mdx`, `ai-prompting-2026.mdx`, `agentic-coding-crash-course.mdx`, `problem-solving-crash-course.mdx`, `spec-driven-development-crash-course.mdx`

Add `<Flashcard question="..." answer="..." />` components at end of key sections.

### 3.3 Verify All Internal Links
```bash
# Grep all internal links and verify targets exist
grep -r "href=\"/docs/" docs/ --include="*.mdx" | \
  sed -E 's/.*href="\/docs\/([^"]+)".*/\1/' | \
  sort -u | while read link; do
    if [ ! -f "docs/${link}.mdx" ] && [ ! -f "docs/${link}/index.mdx" ]; then
      echo "BROKEN: $link"
    fi
  done
```

---

## Phase 4: SEO & Performance Polish (Week 3-4)

### 4.1 Generate Per-Page OG Images
- Create template in `static/img/og-template.png` (1200x630)
- Script to generate OG images for all 95+ pages:
  - Title from frontmatter
  - Category badge
  - Consistent branding
- Update `docusaurus.config.ts` to use per-page OG images

### 4.2 Enhanced Structured Data
Add Article/BlogPosting JSON-LD to each doc page via `Root.tsx`:
```typescript
{
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: frontmatter.title,
  description: frontmatter.description,
  image: `/img/og/${slug}.png`,
  author: { '@type': 'Organization', name: 'Panaversity' },
  publisher: { '@type': 'Organization', name: 'AI ka Safar' },
  inLanguage: 'ur',
  datePublished: frontmatter.date,
  dateModified: frontmatter.lastUpdated,
}
```

### 4.3 Performance Audit
Run Lighthouse CI and optimize:
- Image compression (WebP, proper sizing)
- Code splitting for heavy components
- Preload critical fonts
- Reduce unused CSS

---

## Phase 5: Verification & Launch (Week 4)

### 5.1 Full Build & Test
```bash
npx docusaurus build
npm run serve
# Test all pages, navigation, components
```

### 5.2 Content Quality Check
For each of the 7 new pages + 5 existing core pages:
- [ ] Every section from source present
- [ ] Tables match row/column count
- [ ] All images downloaded and resolve
- [ ] All internal links work
- [ ] `tum` register consistent
- [ ] Terminology matches glossary
- [ ] No leftover English sentences
- [ ] Build passes

### 5.3 Deploy to Vercel
- Push to main branch
- Verify production build
- Test live site functionality

---

## Resource Requirements

### From User
1. **GA4 Measurement ID** (for analytics)
2. **Source content** for 7 missing pages (or I can fetch from live URLs)
3. **Approval** for AiTutor integration approach

### From Team
- Translation time: ~35-50 hours total
- Development time: ~15-20 hours

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Total docs | 102 (95 current + 7 new - 1 duplicate) |
| Build status | ✅ Passing |
| Sidebar completeness | 100% (all pages linked) |
| GA4 tracking | ✅ Active |
| Flashcard usage | 5+ crash course docs |
| AiTutor | ✅ Functional |
| OG images | 100% pages covered |
| Internal links | 0 broken |
| Style glossary | ✅ Created |
| Doc status frontmatter | 100% coverage |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Source content changes during translation | Freeze source URLs at start; use cached versions |
| Translation quality drift | Use style-glossary.md; peer review new pages |
| Sidebar changes break navigation | Test build after each sidebar edit |
| Vercel deploy fails | Test `npm run build` locally first |
| 7th page (thesis/plain-english) is very long | Split into multiple sessions; use existing thesis.mdx as reference |

---

## Timeline Summary

| Week | Focus | Deliverables |
|------|-------|--------------|
| 1 | Content creation | 7 new pages, sidebar fixes, duplicate removed |
| 2 | Configuration | GA4, style glossary, status frontmatter |
| 3 | Interactivity | AiTutor wired, flashcards added, links verified |
| 4 | SEO/Performance | OG images, structured data, Lighthouse pass, deploy |

**Total estimated effort:** 50-70 hours over 4 weeks