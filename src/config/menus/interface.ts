export type MenuItem = {
  name: string;
  icon?: string;
  path: string | RegExp;
  auth?: string | string[] /** 页面权限 */;
  children?: MenuItem[];
};
