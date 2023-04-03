import { RouteRecordRaw } from "vue-router";
import { HOME_URL } from "@/config/config";

/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: HOME_URL
	}
];

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
	// 解决刷新页面，路由警告
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/views/error/404.vue")
	}
];
