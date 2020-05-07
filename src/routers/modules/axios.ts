import { lazy } from 'react';
import { Route } from '../interface';

export const axiosRoutes: Array<Route> = [
  {
    name: 'mock',
    path: '/axios/mock',
    component: lazy(() => import(/* webpackChunkName: 'axios/mock' */ '@/pages/axios/mock'))
  },
  {
    name: 'proxy',
    path: '/axios/proxy',
    component: lazy(() => import(/* webpackChunkName: 'axios/proxy' */ '@/pages/axios/proxy'))
  }
];
