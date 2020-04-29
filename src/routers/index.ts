import { Route } from './interface';

/**  基础模块(登录 && 基本布局) */
import { baseRoutes } from './modules/base'; // 登录 || 注册 || 忘记密码
import { DashBoardRoutes } from './modules/dashboard'; // 主页

/** 业务模块 */
import { commodityManagementRoutes } from './modules/commodity-management'; // 商品管理
import { typescriptRoutes } from './modules/typescript'; // typescript
import { axiosRoutes } from './modules/axios'; // axios
import { algorithmRoutes } from './modules/algorithm'; // 算法
import { hooksRoutes } from './modules/hooks'; // hooks

const routes: Array<Route> = Array.prototype.concat(
  baseRoutes,
  DashBoardRoutes,
  commodityManagementRoutes,
  typescriptRoutes,
  axiosRoutes,
  algorithmRoutes,
  hooksRoutes
);

export * from './interface';

export default routes;
