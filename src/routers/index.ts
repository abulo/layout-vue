import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { staticRouter, errorRouter } from "@/routers/modules/staticRouter";

let routes: RouteRecordRaw[] = [];
generatedRoutes.forEach(v => {
	routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v);
});
routes.push(...staticRouter, ...errorRouter);

console.log(routes);

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
