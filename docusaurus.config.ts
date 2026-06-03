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

  url: 'https://ai-ka-safar.vercel.app',
  baseUrl: '/',

  organizationName: 'ai-ka-safar',
  projectName: 'ai-ka-safar',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
    image: 'img/social-card.jpg',
    colorMode: {
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
          ],
        },
        {
          title: 'Panaversity',
          items: [
            {
              label: 'Original Book (English)',
              href: 'https://agentfactory.panaversity.org/',
            },
            {
              label: 'Panaversity',
              href: 'https://panaversity.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI ka Safar. Panaversity ki kitaab ka Roman Urdu tarjuma.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;