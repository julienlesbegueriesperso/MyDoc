import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



const config: Config = {
  title: 'Centre de Dermatologie des Minimes',
  // tagline: 'Centre de Dermatologie des Minimes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'julienlesbegueriesperso', // Usually your GitHub org/user name.
  projectName: 'MyDoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // remarkPlugins: [remarkMath],
          // rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  stylesheets: [
    // {
    //   href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    //   type: 'text/css',
    //   integrity:
    //     'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    //   crossorigin: 'anonymous',
    // },
  ],
  trailingSlash: true,
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Dermatologie des Minimes',
      logo: {
        alt: 'Logo des dermatologues des minimes',
        src: 'img/logo.svg',
      },
      
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'Informations générales',
          items: [
            {to: '/team', label: 'L\' Équipe'},
            {to: '/appointment', label: 'Avis Dermatologique / Rendez-vous'},
            {to: '/general', label: "Sites d'information patients"},
            {to: '/cabinet-pictures', label: "Galerie"}
            
          ]
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Spécialités',
          items: [
            {to: '/photo', label: 'Photothérapie'},
        {to: '/epilation', label: 'Épilation laser et tarifs'},
        {to: '/bio', label: 'Biothérapies'},
        {to: '/ongles', label: 'Maladie des ongles'},
          ]
        },
        
        // {to: '/team', label: 'L\' Équipe', position: 'left'},
        // {to: '/appointment', label: 'Prendre RDV', position: 'left'},
        // {to: '/photo', label: 'Photothérapie', position: 'left'},
        // {to: '/epilation', label: 'Épilation laser et tarifs', position: 'left'},
        // {to: '/bio', label: 'Biothérapies', position: 'left'},
        // {to: '/ongles', label: 'Maladie des ongles', position: 'left'},
        {to: '/cdm', label: 'Clinique des Minimes', position: 'left'},
        
        {type: 'html', value:'<a href="https://www.doctolib.fr/dermatologue/toulouse-minimes" target=\'_blank\' rel="noreferrer" >Doctolib.fr</a>', position: 'right'},
        {to: 'tel:0162150816', label: '01 62 15 08 16 (télé secrétariat)', position: 'right'},
        {to: 'mailto:dermatologieminimes@gmx.fr', label: 'dermatologieminimes@gmx.fr', position: 'right'}

        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      
      links: [
        {
          title: 'CGV',
          items: [
            {
              label: 'Conditions générales de vente TODO',
              to: "#"
            },
            {
              label: 'Tarif des services esthétiques TODO',
              to: "#"
            }
          ]
        },
        {
          title: 'Proriétaires du site',
          items: [
            {
              label: 'Identification des professionnels',
              to: "#"
            },
            {
              label: 'Hébergeur',
              to: '#'
            },
            {
              label: 'Autorité',
              to: '#'
            }
          ]
        }
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Hello',
        //       to: '/docs/mes-docs/hello',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     // {
        //     //   label: 'GitHub',
        //     //   href: 'https://github.com/facebook/docusaurus',
        //     // },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TODO société, adresse, numéro immatriculation ou RCS,\n
      09 00 00 00 00, dermatologieminimes@gmx.fr, numéro d'identification à la TVA, identité hébergeur (vercel ou ionos ?)\n
      autorité ? (ordre des médecins ?)
      `,
      
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'java']
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', '@docusaurus/theme-live-codeblock'],
};

export default config;
