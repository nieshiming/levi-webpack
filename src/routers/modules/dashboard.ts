import { lazy } from 'react';
import { Route } from '../interface';

export const DashBoardRoutes: Array<Route> = [
  {
    name: '主页',
    path: '/dashboard',
    component: lazy(() => import('@/pages/dashboard'))
  }
];
