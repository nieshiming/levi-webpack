import { lazy } from 'react';
import { Route } from '../interface';

export const baseRoutes: Array<Route> = [
  {
    name: '登录',
    path: '/login',
    layout: 'blank',
    component: lazy(() => import('@/components/login'))
  },
  {
    name: '404',
    path: '/404',
    component: lazy(() => import('@/components/common/404'))
  }
];
