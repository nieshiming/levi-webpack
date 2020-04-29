import { lazy } from 'react';
import { Route } from '../interface';

export const hooksRoutes: Array<Route> = [
  {
    name: 'ref',
    path: '/hooks/ref',
    component: lazy(() => import('@/pages/hooks/ref'))
  },
  {
    name: 'refs',
    path: '/hooks/refs',
    component: lazy(() => import('@/pages/hooks/refs'))
  },
  {
    name: 'useState',
    path: '/hooks/useState',
    component: lazy(() => import('@/pages/hooks/useState'))
  },
  {
    name: 'useEffect',
    path: '/hooks/useEffect',
    component: lazy(() => import('@/pages/hooks/useEffect'))
  },
  {
    name: 'useContext',
    path: '/hooks/useContext',
    component: lazy(() => import('@/pages/hooks/useContext'))
  },
  {
    name: 'useCallback',
    path: '/hooks/useCallback',
    component: lazy(() => import('@/pages/hooks/useCallback'))
  },
  {
    name: 'useRef',
    path: '/hooks/useRef',
    component: lazy(() => import('@/pages/hooks/useRef'))
  },
  {
    name: 'useMemo',
    path: '/hooks/useMemo',
    component: lazy(() => import('@/pages/hooks/useMemo'))
  },
  {
    name: 'demo',
    path: '/hooks/demo',
    component: lazy(() => import('@/pages/hooks/demo'))
  },
  {
    name: 'customize',
    path: '/hooks/customize',
    component: lazy(() => import('@/pages/hooks/customize'))
  }
];