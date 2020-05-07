import { lazy } from 'react';
import { Route } from '../interface';

export const baseRoutes: Array<Route> = [
  {
    name: '登录',
    path: '/login',
    layout: 'blank',
    component: lazy(() => import(/* webpackChunkName: 'components/login' */ '@/components/login'))
  },
  {
    name: '404',
    path: '/404',
    component: lazy(() =>
      import(/* webpackChunkName: 'components/404' */ '@/components/common/404')
    )
  }
];
