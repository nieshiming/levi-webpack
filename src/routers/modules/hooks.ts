import { lazy } from 'react';
import { Route } from '../interface';

export const hooksRoutes: Array<Route> = [
  {
    name: 'ref',
    path: '/hooks/ref',
    component: lazy(() => import(/* webpackChunkName: 'hooks-ref' */ '@/pages/hooks/ref'))
  },
  {
    name: 'refs',
    path: '/hooks/refs',
    component: lazy(() => import(/* webpackChunkName: 'hook-refs' */ '@/pages/hooks/refs'))
  },
  {
    name: 'useState',
    path: '/hooks/useState',
    component: lazy(() => import(/* webpackChunkName: 'hooks-useState' */ '@/pages/hooks/useState'))
  },
  {
    name: 'useEffect',
    path: '/hooks/useEffect',
    component: lazy(() =>
      import(/* webpackChunkName: 'hooks-useEffect' */ '@/pages/hooks/useEffect')
    )
  },
  {
    name: 'useContext',
    path: '/hooks/useContext',
    component: lazy(() =>
      import(/* webpackChunkName: 'hooks-useContext' */ '@/pages/hooks/useContext')
    )
  },
  {
    name: 'useCallback',
    path: '/hooks/useCallback',
    component: lazy(() =>
      import(/* webpackChunkName: 'hooks-useCallback' */ '@/pages/hooks/useCallback')
    )
  },
  {
    name: 'useRef',
    path: '/hooks/useRef',
    component: lazy(() => import(/* webpackChunkName: 'hooks-useRef' */ '@/pages/hooks/useRef'))
  },
  {
    name: 'useMemo',
    path: '/hooks/useMemo',
    component: lazy(() => import(/* webpackChunkName: 'hooks-useMemo' */ '@/pages/hooks/useMemo'))
  },
  {
    name: 'demo',
    path: '/hooks/demo',
    component: lazy(() => import(/* webpackChunkName: 'hooks-demo' */ '@/pages/hooks/demo'))
  },
  {
    name: 'customize',
    path: '/hooks/customize',
    component: lazy(() =>
      import(/* webpackChunkName: 'hooks-customize' */ '@/pages/hooks/customize')
    )
  }
];
