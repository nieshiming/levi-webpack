import { lazy } from 'react';
import { Route } from '../interface';

export const typescriptRoutes: Array<Route> = [
  {
    name: '基本类型',
    path: '/typescript/base',
    component: lazy(() =>
      import(/* webpackChunkName: 'typescript/base' */ '@/pages/typescript/base')
    )
  },
  {
    name: '函数',
    path: '/typescript/function',
    component: lazy(() =>
      import(/* webpackChunkName: 'typescript/function' */ '@/pages/typescript/function')
    )
  },
  {
    name: '泛型',
    path: '/typescript/generic',
    component: lazy(() =>
      import(/* webpackChunkName: 'typescript/generic' */ '@/pages/typescript/generic')
    )
  },
  {
    name: '高级类型',
    path: '/typescript/advancedType',
    component: lazy(() =>
      import(/* webpackChunkName: 'typescript/advanced-type' */ '@/pages/typescript/advanced-type')
    )
  }
];
