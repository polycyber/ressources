import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
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
      '@docusaurus/preset-classic',
      {
        pages: {
          editUrl: 'https://gitlab.com/polycyber/ressources/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogTitle: 'Blog de PolyCyber',
          blogDescription: 'Retrouvez les publications techniques des membres de PolyCyber',
          path: 'blog/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Publications',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
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
    algolia: {
      // The application ID provided by Algolia
      appId: 'GZBB0QPDEP',
      // Public API key: it is safe to commit it
      apiKey: '2d0bec01987c9ba894c3a77f49f42295',
      indexName: 'ressources-polycyber',
      contextualSearch: false
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
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
          position: 'left',
          label: 'Blog',
          to: 'blog'
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
              label: 'PolyCyber',
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
              label: 'GitHub',
              href: 'https://github.com/polycyber/',
            },
          ],
        },
      ],
      copyright: `Tous droits réservés © ${new Date().getFullYear()} PolyCyber. Conçu avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    announcementBar: {
      content: 'Ce site web évolue encore. Vous pouvez y contribuer sur Github!',
      backgroundColor: '#ffb72c',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
