import { RouteConfig } from 'react-router-config'

type Layout = /** 基础布局 */ 'basic' | 'default' | null | undefined | /** 空白布局 */ 'blank'

export interface Route extends RouteConfig {
  name?: string
  layout?: Layout
  exact?: boolean
  component?: any
}
