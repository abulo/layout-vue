import { http } from "@/utils/http";
import { SysMenu } from "@/api/interface/sysMenu";
import { baseUrlApi } from "@/api/modules/utils";

// 获取菜单列表
export const getSysMenuList = () => {
  return http.request<SysMenu.SysMenuItem[]>("get", baseUrlApi("/v1/sys/menu"));
};

// 获取菜单详情
export const getSysMenu = (id: number) => {
  return http.request<SysMenu.SysMenuItem>("get", baseUrlApi(`/v1/sys/menu/${id}/item`));
};

// 新增菜单
export const postSysMenu = (data: SysMenu.SysMenuItem) => {
  return http.request("post", baseUrlApi("/v1/sys/menu"), { data });
};

// 修改菜单
export const putSysMenu = (id: number, data: SysMenu.SysMenuItem) => {
  return http.request("put", baseUrlApi(`/v1/sys/menu/${id}/update`), { data });
};

// 删除菜单
export const deleteSysMenu = (id: number) => {
  return http.request("delete", baseUrlApi(`/v1/sys/menu/${id}/delete`));
};
