import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/appointment/',
    component: ComponentCreator('/appointment/', 'ec7'),
    exact: true
  },
  {
    path: '/bio/',
    component: ComponentCreator('/bio/', 'c43'),
    exact: true
  },
  {
    path: '/cdm/',
    component: ComponentCreator('/cdm/', '382'),
    exact: true
  },
  {
    path: '/epilation/',
    component: ComponentCreator('/epilation/', '2e8'),
    exact: true
  },
  {
    path: '/general/',
    component: ComponentCreator('/general/', 'ba7'),
    exact: true
  },
  {
    path: '/generic-page/',
    component: ComponentCreator('/generic-page/', '0ff'),
    exact: true
  },
  {
    path: '/intro/',
    component: ComponentCreator('/intro/', 'b18'),
    exact: true
  },
  {
    path: '/ongles/',
    component: ComponentCreator('/ongles/', '6b3'),
    exact: true
  },
  {
    path: '/photo/',
    component: ComponentCreator('/photo/', 'd02'),
    exact: true
  },
  {
    path: '/team/',
    component: ComponentCreator('/team/', 'b99'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '655'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '834'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '34d'),
            routes: [
              {
                path: '/docs/test/',
                component: ComponentCreator('/docs/test/', '7fd'),
                exact: true,
                sidebar: "testSidebar"
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
