// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Macrogiciel',
  tagline: 'vous aide à créer des macros pour Windows et à les lancer sur vos claviers.',
  url: 'https://macrogiciel.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon_512x512.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TaiStudio', // Usually your GitHub org/user name.
  projectName: 'Macrogiciel', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MacroGiciel/MacroGiciel',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MacroGiciel/MacroGiciel',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Macrogiciel',
        logo: {
          alt: 'Macrogiciel logo',
          src: 'img/icon_512x512.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutoriel',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/MacroGiciel/MacroGiciel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Début',
                to: '/docs/intro',
              },
              {
                label: 'Publié',
                to: '/docs/basics/deploy-your-module',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Help',
                href: 'https://github.com/MacroGiciel/MacroGiciel/discussions',
              },
              {
                label: 'Lang',
                href: 'https://github.com/MacroGiciel/Langs',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/NAh5ZFpwB9',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/macrogiciel',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MacroGiciel/MacroGiciel',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Macrogiciel, Tai Studio Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
