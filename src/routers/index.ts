import { Route } from './interface'

/**  基础模块(登录 && 基本布局) */
import { baseRoutes } from './modules/base'
import { DashBoardRoutes } from './modules/dashboard'

/** 业务模块 */
import { typescriptRoutes } from './modules/typescript' // typescript
import { axiosRoutes } from './modules/axios' // axios
import { algorithmRoutes } from './modules/algorithm' // 算法
import { hooksRoutes } from './modules/hooks' // hooks

const routes: Array<Route> = Array.prototype.concat(
  baseRoutes,
  DashBoardRoutes,
  typescriptRoutes,
  axiosRoutes,
  algorithmRoutes,
  hooksRoutes,
)

export * from './interface'

export default routes
