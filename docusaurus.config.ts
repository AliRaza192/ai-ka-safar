import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI ka Safar',
  tagline: 'Aasan Roman Urdu mein AI Agents seekhein — Pakistani beginners ke liye',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  headTags: [],

  url: 'https://ai-ka-safar.vercel.app',
  baseUrl: '/',

  organizationName: 'ai-ka-safar',
  projectName: 'ai-ka-safar',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  themes: [
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true,
      language: ['en'],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
    }],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'description', content: 'Aasan Roman Urdu mein AI Agents seekhein — Agent Factory book ka complete Urdu tarjuma. Digital FTEs, AI Workers, aur AI-Native Companies banana seekhein.'},
      {name: 'keywords', content: 'AI agents, digital FTE, AI workers, agent factory, Roman Urdu, AI course, agentic AI, OpenAI agents SDK, Claude Code'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'AI ka Safar'},
      {property: 'og:title', content: 'AI ka Safar — AI Agents Roman Urdu Mein'},
      {property: 'og:description', content: 'Aasan Roman Urdu mein AI Agents seekhein. Digital FTEs banao aur AI-Native Companies chalao.'},
      {property: 'og:image', content: 'https://ai-ka-safar.vercel.app/img/docusaurus-social-card.jpg'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'AI ka Safar'},
      {name: 'twitter:description', content: 'Aasan Roman Urdu mein AI Agents seekhein.'},
      {name: 'twitter:image', content: 'https://ai-ka-safar.vercel.app/img/docusaurus-social-card.jpg'},
      {name: 'robots', content: 'index, follow'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI ka Safar',
      logo: {
        alt: 'AI ka Safar Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Kitaab Parhein',
        },
        {
          to: '/authors',
          label: 'Authors',
          position: 'left',
        },
        {
          to: '/factory',
          label: 'Factory',
          position: 'left',
        },
        {
          to: '/leaderboard',
          label: 'Leaderboard',
          position: 'left',
        },
        {
          to: '/notes',
          label: 'Notes',
          position: 'left',
        },
        {
          to: '/whats-new',
          label: 'Naya Kya Hai',
          position: 'left',
        },
        {
          href: 'https://github.com/AliRaza192/ai-ka-safar',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Seekhein',
          items: [
            {
              label: 'Kitaab Shuru Karein',
              to: '/docs/about',
            },
            {
              label: 'Glossary',
              to: '/docs/glossary',
            },
            {
              label: 'Crash Courses',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AliRaza192/ai-ka-safar',
            },
            {
              label: 'Original Book (English)',
              href: 'https://agentfactory.panaversity.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Panaversity',
              href: 'https://panaversity.org/',
            },
            {
              label: 'AI Workers',
              to: '/docs/ai-workers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI ka Safar. Panaversity ki kitaab ka Roman Urdu tarjuma.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml', 'markdown'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
