import { lazy } from 'react'
import { Route } from '../interface'

export const algorithmRoutes: Array<Route> = [
  {
    name: 'array',
    path: '/algorithm/base/array',
    component: lazy(() => import(/* webpackChunkName: 'algorithm-array' */ '@/pages/algorithm/basic/array')),
  },
  {
    name: 'array',
    path: '/algorithm/base/string',
    component: lazy(() => import(/* webpackChunkName: 'algorithm-string' */ '@/pages/algorithm/basic/string')),
  },
  {
    name: 'array',
    path: '/algorithm/base/linkedList',
    component: lazy(() => import(/* webpackChunkName: 'algorithm-linkedList' */ '@/pages/algorithm/basic/lind-list')),
  },
  {
    name: 'array',
    path: '/algorithm/base/tree',
    component: lazy(() => import(/* webpackChunkName: 'algorithm-tree' */ '@/pages/algorithm/basic/tree')),
  },
]
