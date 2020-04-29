import { lazy } from 'react';
import { Route } from '../interface';

export const commodityManagementRoutes: Array<Route> = [
  {
    name: '品牌管理',
    path: '/commodity-management/brand',
    component: lazy(() => import('@/pages/commodity-management/brand'))
  },
  {
    name: '类别管理',
    path: '/commodity-management/category',
    component: lazy(() => import('@/pages/commodity-management/category'))
  },
  {
    name: '型号管理',
    path: '/commodity-management/model',
    component: lazy(() => import('@/pages/commodity-management/model'))
  }
];
