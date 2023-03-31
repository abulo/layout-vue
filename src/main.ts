import { createApp } from "vue";
import App from "@/App.vue";
// reset css
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
// 导入element
import ElementPlus from "element-plus";
// 导入element icons
import * as Icons from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/styles/theme/element-dark.scss";
// custom element css
import "@/styles/element.scss";

// 导入路由
import router from "@/routers";

// 导入国际化
import i18n from "@/languages";

// 导入全局错误捕捉
import errorHandler from "@/utils/errorHandler";

// 导入pinia
import pinia from "@/stores";

// 导入svg icons
import "virtual:svg-icons-register";
// 创建应用
const app = createApp(App);

// 设置全局错误捕捉
app.config.errorHandler = errorHandler;

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

// 挂载应用
app.use(router).use(i18n).use(pinia).use(ElementPlus).mount("#app");
