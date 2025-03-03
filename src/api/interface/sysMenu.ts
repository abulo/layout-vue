// system_menu 系统菜单
export namespace SysMenu {
  export interface SysMenuItem {
    id: number; // bigint 编号,PRI
    parentId: number; // bigint 父级
    type: number; // int 类型
    title: string; // varchar 名称
    name?: string | undefined; // varchar 路由名称
    path?: string | undefined; // varchar 路由路径
    component?: string | undefined; // varchar 组件路径
    sort?: number | undefined; // int 菜单排序
    redirect?: string | undefined; // varchar 路由重定向
    icon?: string | undefined; // varchar 菜单图标
    extraIcon?: string | undefined; // varchar 右侧图标
    enterTransition?: string | undefined; // varchar 进场动画
    leaveTransition?: string | undefined; // varchar 离场动画
    activePath?: string | undefined; // varchar 菜单激活
    auth?: string | undefined; // varchar 权限标识
    frameSrc?: string | undefined; // varchar 链接地址
    frameLoading?: string | undefined; // varchar 加载动画
    keepAlive?: number | undefined; // int 缓存页面
    hiddenTag?: number | undefined; // int 隐藏标签页
    fixedTag?: number | undefined; // int 固定标签页
    showLink?: number | undefined; // int 显示菜单
    showParent?: number | undefined; // int 显示父级菜单
    children?: SysMenuItem[]; // 子菜单
  }
}
