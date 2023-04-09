import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import { visualizer } from "rollup-plugin-visualizer";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteCompression from "vite-plugin-compression";
import vueSetupExtend from "vite-plugin-vue-setup-extend-plus";
import eslintPlugin from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import Pages from "vite-plugin-pages";
// import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	// 获取环境变量
	const viteEnv = wrapperEnv(loadEnv(mode, process.cwd()));
	return {
		base: "./",
		//设置别名
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
				"vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/styles/var.scss";`
				}
			}
		},
		server: {
			// 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
			host: "0.0.0.0",
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// 跨域代理配置
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
					// target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		plugins: [
			vue(),
			// Pages({
			// 	dirs: "src/views", // 需要生成路由的文件目录
			// 	exclude: ["**/components/*.vue"], // 排除在外的目录，即所有 components 目录下的 .vue 文件都不会生成路由
			// 	routeNameSeparator: "." // 路由命名分隔符
			// }),
			// Layouts({
			// 	layoutsDirs: "src/layouts", // 布局文件存放目录
			// 	defaultLayout: "index", // 默认布局，对应 src/layouts/index.vue
			// 	exclude: ["**/components/*.vue"] // 排除在外的目录
			// }),
			//替换 html 中的 title 标签
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// 使用 svg 图标
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			}),
			// EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// vite 可以使用 jsx/tsx 语法
			vueJsx(),
			// name 可以写在 script 标签上
			vueSetupExtend(),
			// 是否生成包预览(分析依赖包大小,方便做优化处理)
			viteEnv.VITE_REPORT && visualizer(),
			// gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: "gzip",
					ext: ".gz"
				}),
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			})
		],
		// 打包去除 console.log && debugger
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		clearScreen: true,
		build: {
			target: "modules",
			// polyfillDynamicImport: "", // boolean
			outDir: "dist", // path.join(__dirname, "dist/render"),
			assetsDir: "assets",
			assetsInlineLimit: 2048, // 1MB
			// 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
			cssCodeSplit: true,
			// cssTarget: true,
			sourcemap: false,
			rollupOptions: {
				output: {
					// 最小化拆分包
					manualChunks(id) {
						if (id.includes("node_modules")) {
							return id.toString().split("node_modules/.pnpm/")[1].split("/")[0].toString();
						}
					},
					// 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
					entryFileNames: "assets/js/[name]-[hash].js",
					// 用于输出静态资源的命名，[ext]表示文件扩展名
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
					chunkFileNames: "assets/js/[name]-[hash].js",
					compact: true
					// manualChunks: {
					// 	// vue: ["vue", "vue-router", "pinia"],
					// 	vue: ["vue","vue-router"],
					// 	// element:["element-plus"],
					// 	// echarts: ["echarts"],
					// },
				}
			},
			// commonjsOptions: "",
			// dynamicImportVarsOptions: "",
			// lib: "",
			// manifest: false, // manifest.json
			// ssrManifest: false,
			// ssr: false,
			minify: "esbuild", // boolean | "terser" | "esbuild"
			// write: true,
			// emptyOutDir: "", // outDiroutDir--emptyOutDir
			chunkSizeWarningLimit: 2048
			// watch: 1024,
		}
	};
});
