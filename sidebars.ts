import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // Layer 1: Introductions
    { type: "doc", id: "about", label: "About — Yeh Kya Hai?" },
    { type: "doc", id: "how-to-learn-from-this-book", label: "Yeh Kitaab Kaise Parhein?" },
    { type: "doc", id: "roles-this-book-trains", label: "Yeh Kya Roles Seekhati Hai?" },
    {
      type: "category",
      label: "The Ecosystem",
      items: [
        "ecosystem/concept",
        "ecosystem/system-of-record",
        "ecosystem/zia-tutor-ai",
        "ecosystem/zia-developer-ai",
        "ecosystem/fde-af-model",
        "ecosystem/choosing-your-vertical",
        "ecosystem/designing-the-vertical-sor",
        "ecosystem/system-of-context",
      ],
    },
    { type: "doc", id: "preface-agent-native", label: "Preface — Kyun Ab?" },
    { type: "doc", id: "why-ai-is-non-negotiable", label: "AI Zaroori Kyun Hai?" },
    { type: "doc", id: "thesis", label: "Thesis" },
    { type: "doc", id: "ai-operating-layer", label: "Operating Layer" },
    { type: "doc", id: "what-you-carry-in", label: "Aap Kya Le Ke Aate Hain?" },
    {
      type: "category",
      label: "Certifications",
      items: [
        "certifications/pcao-f",
        "certifications/pcar-f",
        "certifications/pcdv-f",
        "certifications/pcar-p",
      ],
    },
    { type: "doc", id: "how-to-get-paid-agentic-ai-era", label: "Paisa Kamaana" },
    { type: "doc", id: "how-to-sell-agentic-ai-era", label: "Bechna" },

    // Layer 2: Crash Courses
    {
      type: "category",
      label: "Crash Courses",
      link: { type: "doc", id: "getting-started" },
      items: [
        // Foundations
        {
          type: "category",
          label: "Foundations (Sab ke liye)",
          items: [
            { type: "doc", id: "just-delegate-it-crash-course", label: "Just Delegate It" },
            { type: "doc", id: "what-ai-actually-is-crash-course", label: "What AI Actually Is" },
            { type: "doc", id: "ai-fluency-crash-course", label: "AI Fluency (The 4Ds)" },
            { type: "doc", id: "ai-prompting-2026", label: "AI Prompting 2026" },
            { type: "doc", id: "markdown-html-crash-course", label: "Markdown In, HTML Out" },
            { type: "doc", id: "code-you-never-write-crash-course", label: "Code You Never Write" },
            { type: "doc", id: "skills-connectors-crash-course", label: "Skills & Connectors" },
            { type: "doc", id: "how-to-think-ai-era", label: "AI Era Mein Sochna" },
            { type: "doc", id: "workflow-design-diagnosis-crash-course", label: "Workflow Design" },
            { type: "doc", id: "governance-risk-responsible-use-crash-course", label: "Governance" },
          ],
        },
        // General Agents
        {
          type: "category",
          label: "General Agents",
          items: [
            { type: "doc", id: "general-agents-web-crash-course", label: "General Agents Web" },
            { type: "doc", id: "cowork-crash-course", label: "Cowork & OpenWork" },
            { type: "doc", id: "using-open-source-llms", label: "Open Source LLMs" },
            { type: "doc", id: "agentic-coding-crash-course", label: "Agentic Coding" },
            { type: "doc", id: "claude-code-teams-crash-course", label: "Claude Code Teams" },
            { type: "doc", id: "claude-code-ci-crash-course", label: "Claude Code CI" },
            { type: "doc", id: "claude-code-routines-crash-course", label: "Claude Code Routines" },
            { type: "doc", id: "website-design-crash-course", label: "Website Design" },
            { type: "doc", id: "spec-driven-development-crash-course", label: "Spec-Driven Dev" },
            { type: "doc", id: "four-layers-crash-course", label: "Four Layers" },
            { type: "doc", id: "loop-engineering-crash-course", label: "Loop Engineering" },
            { type: "doc", id: "harness-engineering-crash-course", label: "Harness Engineering" },
            { type: "doc", id: "graph-engineering-crash-course", label: "Graph Engineering" },
            { type: "doc", id: "trusting-the-checker-crash-course", label: "Trusting Checker" },
            { type: "doc", id: "leaving-the-laptop-crash-course", label: "Leaving Laptop" },
          ],
        },
        // Personal Agent Harnesses
        {
          type: "category",
          label: "Personal Agent Harnesses",
          items: [
            { type: "doc", id: "openclaw-with-general-agents", label: "OpenClaw" },
            { type: "doc", id: "hermes-with-general-agents", label: "Hermes" },
          ],
        },
        // Mode 1
        {
          type: "category",
          label: "Mode 1 — Problem Solving",
          items: [
            { type: "doc", id: "is-this-an-agent-problem", label: "Is This an Agent Problem?" },
            { type: "doc", id: "problem-solving-crash-course", label: "Problem Solving" },
            { type: "doc", id: "from-one-off-to-worker", label: "From One-Off to Worker" },
          ],
        },
        // Mode 2
        {
          type: "category",
          label: "Mode 2 — Manufacturing",
          items: [
            // Phase 1
            {
              type: "category",
              label: "Phase 1 · Building Blocks",
              items: [
                { type: "doc", id: "python-crash-course", label: "Python AI Era" },
                { type: "doc", id: "loop-by-hand-crash-course", label: "Loop by Hand" },
                { type: "doc", id: "structured-extraction-crash-course", label: "Structured Extraction" },
                { type: "doc", id: "connector-native-apps", label: "Connector-Native Apps" },
                { type: "doc", id: "postgres-ai-crash-course", label: "AI Searchable Context" },
                { type: "doc", id: "context-layer-crash-course", label: "Context Layer" },
                { type: "doc", id: "plugins-crash-course", label: "Plugins" },
                { type: "doc", id: "ai-identity-crash-course", label: "AI Identity" },
              ],
            },
            // Phase 2
            {
              type: "category",
              label: "Phase 2 · Build Workers",
              items: [
                { type: "doc", id: "build-agents-crash-course", label: "Build Agents (OpenAI SDK)" },
                { type: "doc", id: "claude-agent-sdk-crash-course", label: "Build Agents (Claude)" },
                { type: "doc", id: "claude-managed-agents-crash-course", label: "Claude Managed Agents" },
                { type: "doc", id: "digital-fte-crash-course", label: "Digital FTE" },
                { type: "doc", id: "ai-agent-nervous-system-crash-course", label: "AI Agent Nervous System" },
              ],
            },
            // Phase 3
            {
              type: "category",
              label: "Phase 3 · Scale the Workforce",
              items: [
                { type: "doc", id: "human-agent-teams-crash-course", label: "Human-Agent Teams" },
                { type: "doc", id: "designing-agent-experiences-crash-course", label: "Agent Experiences" },
                { type: "doc", id: "workforce-with-paperclip-crash-course", label: "Paperclip Workforce" },
                { type: "doc", id: "dynamic-workforce-crash-course", label: "Dynamic Workforce" },
                { type: "doc", id: "identic-ai-crash-course", label: "Identic AI" },
                { type: "doc", id: "eval-driven-development-crash-course", label: "Eval-Driven Dev" },
                { type: "doc", id: "deploying-agents-crash-course", label: "Deploy Agents" },
                { type: "doc", id: "choosing-agentic-architectures-crash-course", label: "Agentic Architectures" },
                { type: "doc", id: "payment-enabled-agents-crash-course", label: "Payment Agents" },
              ],
            },
          ],
        },
        // References
        {
          type: "category",
          label: "References & Companions",
          items: [
            { type: "doc", id: "claude-chatgpt-101-crash-course", label: "ChatGPT & Claude 101" },
            { type: "doc", id: "which-agents-2026", label: "AI Employees 2026" },
            { type: "doc", id: "cheatsheets", label: "Cheatsheets" },
            { type: "doc", id: "agentic-engineering-crash-course", label: "Agentic Engineering" },
          ],
        },
      ],
    },

    // Layer 3: References
    { type: "doc", id: "glossary", label: "Glossary" },
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
    { type: "doc", id: "ai-native-companies", label: "AI-Native Companies" },
  ],
};

export default sidebars;
