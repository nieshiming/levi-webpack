import { MenuItem } from './interface'

/** 菜单 */
import { dashboardMenu } from './modules/dashboard' // 工作台
import { typescriptMenu } from './modules/typescript' // typescript
import { axiosMenu } from './modules/axios' // axios
import { algorithmMenu } from './modules/algorithm' // 算法
import { hooksMenu } from './modules/hooks' // hooks

const menu: MenuItem[] = [dashboardMenu, typescriptMenu, axiosMenu, algorithmMenu, hooksMenu]

export default menu
