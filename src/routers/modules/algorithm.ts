import { lazy } from 'react';
import { Route } from '../interface';

export const algorithmRoutes: Array<Route> = [
  {
    name: 'array',
    path: '/algorithm/array/base',
    component: lazy(() => import('@/pages/algorithm/basic/array'))
  }
];
