import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '12d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '096'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '65a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a08'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a3d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'eb3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '168'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b08'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b4e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '7db'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '39e'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '625'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c7f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e4d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b08'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '1cb'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '427'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '846'),
    exact: true
  },
  {
    path: '/home',
    component: ComponentCreator('/home', 'd1b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '239'),
    exact: true
  },
  {
    path: '/my-page',
    component: ComponentCreator('/my-page', 'bee'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bb1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '135'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '95c'),
            routes: [
              {
                path: '/docs/category/hello---ma-doc',
                component: ComponentCreator('/docs/category/hello---ma-doc', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mes-docs/hello',
                component: ComponentCreator('/docs/mes-docs/hello', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mes-docs/isobim',
                component: ComponentCreator('/docs/mes-docs/isobim', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mes-docs/my-interactive-page',
                component: ComponentCreator('/docs/mes-docs/my-interactive-page', 'b19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mes-docs/page2',
                component: ComponentCreator('/docs/mes-docs/page2', '0ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b9d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
