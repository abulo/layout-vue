import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

let routes: RouteRecordRaw[] = [];
generatedRoutes.forEach(v => {
	routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v);
});

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
