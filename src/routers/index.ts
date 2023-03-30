import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

let routes = [];
generatedRoutes.forEach(v => {
	routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v);
});

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

console.log(routes);

export default router;
