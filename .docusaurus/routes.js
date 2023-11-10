import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/appointment/',
    component: ComponentCreator('/appointment/', 'ec7'),
    exact: true
  },
  {
    path: '/team/',
    component: ComponentCreator('/team/', 'b99'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'e78'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'caa'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'f4c'),
            routes: [
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', '669'),
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
