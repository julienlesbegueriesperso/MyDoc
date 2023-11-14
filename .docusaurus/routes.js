import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/appointment/',
    component: ComponentCreator('/appointment/', '5af'),
    exact: true
  },
  {
    path: '/bio/',
    component: ComponentCreator('/bio/', 'a41'),
    exact: true
  },
  {
    path: '/cabinet-pictures/',
    component: ComponentCreator('/cabinet-pictures/', '539'),
    exact: true
  },
  {
    path: '/cdm/',
    component: ComponentCreator('/cdm/', '9ab'),
    exact: true
  },
  {
    path: '/epilation/',
    component: ComponentCreator('/epilation/', '33a'),
    exact: true
  },
  {
    path: '/general/',
    component: ComponentCreator('/general/', '21a'),
    exact: true
  },
  {
    path: '/generic-page/',
    component: ComponentCreator('/generic-page/', 'c7a'),
    exact: true
  },
  {
    path: '/intro/',
    component: ComponentCreator('/intro/', 'dc2'),
    exact: true
  },
  {
    path: '/ongles/',
    component: ComponentCreator('/ongles/', '4ed'),
    exact: true
  },
  {
    path: '/photo/',
    component: ComponentCreator('/photo/', 'f05'),
    exact: true
  },
  {
    path: '/team/',
    component: ComponentCreator('/team/', '3cd'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'c5d'),
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
    component: ComponentCreator('/', '900'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
