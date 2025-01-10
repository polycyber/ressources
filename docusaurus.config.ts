import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ressources',
  tagline: 'Développez vos connaissances avec les ressources proposées par PolyCyber',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ressources.polycyber.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'polycyber', // Usually your GitHub org/user name.
  projectName: 'ressources', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr-ca',
    locales: ['fr-ca'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/polycyber.png',
    navbar: {
      title: 'PolyCyber',
      logo: {
        alt: 'PolyCyber Logo',
        src: 'img/polycyber.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Ressources',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Blog',
          href: 'https://polycyber.io/blog',
        },
        {
          href: 'https://github.com/polycyber/ressources',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ressources',
          items: [
            {
              label: 'Introduction',
              to: '/docs/category/introduction',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Site Web',
              href: 'https://polycyber.io',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ZcYnS3GZE6',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/polycyber',
            },
          ],
        },
        {
          title: 'Autres',
          items: [
            {
              label: 'Blog',
              href: 'https://polycyber.io/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/polycyber/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PolyCyber, Inc. Built with Docusaurus.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "GZBB0QPDEP",

      // Public API key: it is safe to commit it
      apiKey: "6eb4d78e9de05146d97c7d0c6c94b828",

      indexName: 'ressources-polycyber',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'ressources.polycyber.io',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
