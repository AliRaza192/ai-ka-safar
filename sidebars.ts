import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    { type: "doc", id: "about", label: "About — Yeh Kya Hai?" },
    { type: "doc", id: "preface-agent-native", label: "Preface — Kyun Ab?" },
    {
      type: "doc",
      id: "why-ai-is-non-negotiable",
      label: "AI Zaroori Kyun Hai?",
    },
    { type: "doc", id: "thesis", label: "Thesis — Architectural Argument" },
    {
      type: "category",
      label: "AI Workers",
      link: { type: "doc", id: "ai-workers" },
      items: [
        { type: "doc", id: "worker-catalog", label: "Worker Catalog" },
        { type: "doc", id: "sales-catalog", label: "Sales Catalog" },
        { type: "doc", id: "finance-catalog", label: "Finance Catalog" },
        { type: "doc", id: "marketing-catalog", label: "Marketing Catalog" },
      ],
    },
    { type: "doc", id: "glossary", label: "Glossary — Zaroori Alfaaz" },
    {
      type: "category",
      label: "Quick Start — Crash Courses",
      link: { type: "doc", id: "getting-started" },
      items: [
        { type: "doc", id: "ai-prompting-2026", label: "AI Prompting 2026" },
        { type: "doc", id: "how-to-think-ai-era", label: "AI Era Mein Sochna" },
        { type: "doc", id: "agentic-coding-crash-course", label: "Agentic Coding Crash Course" },
        { type: "doc", id: "agentic-engineering-crash-course", label: "Agentic Engineering Fundamentals" },
        { type: "doc", id: "cowork-crash-course", label: "Cowork & OpenWork Crash Course" },
        { type: "doc", id: "build-agents-crash-course", label: "Build Agents Crash Course" },
        { type: "doc", id: "digital-fte-crash-course", label: "Digital FTE Crash Course" },
        { type: "doc", id: "ai-agent-nervous-system-crash-course", label: "AI Agent Nervous System" },
        { type: "doc", id: "production-worker-crash-course", label: "Production Workers with Inngest" },
        { type: "doc", id: "problem-solving-crash-course", label: "Problem Solving Principles" },
        { type: "doc", id: "openclaw-with-general-agents", label: "OpenClaw with General Agents" },
        { type: "doc", id: "workforce-with-paperclip-crash-course", label: "Paperclip Workforce Crash Course" },
        { type: "doc", id: "dynamic-workforce-crash-course", label: "Dynamic Workforce Crash Course" },
        { type: "doc", id: "identic-ai-crash-course", label: "Owner Delegation with Identic AI" },
      ],
    },
  ],
};

export default sidebars;
