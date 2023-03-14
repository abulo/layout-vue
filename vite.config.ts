import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
    // lintOnSave: false,
    resolve: {
        //设置别名
        alias: {
            '@': path.join(__dirname, './src')
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    // 运行时检查eslint规范
    eslintPlugin: {
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    },
    server: {
        // 是否开启https
        https: false,
        // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
        host: true,
        // 开发环境预览服务器端口
        port: 3000,
        // 启动后是否自动打开浏览器
        open: false,
        // 是否开启CORS跨域
        cors: true,
        // 代理服务器
        // 帮助我们开发时解决跨域问题
        proxy: {
            // 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:3000
            '/api': {
                target: 'http://xxx:3000',
                // 改变 Host Header
                changeOrigin: true,
                // 发起请求时将 '/api' 替换为 ''
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    // 打包配置
    build: {
        // 关闭 sorcemap 报错不会映射到源码
        sourcemap: false,
        // 打包大小超出 4000kb 提示警告
        chunkSizeWarningLimit: 4000,
        rollupOptions: {
            // 打包入口文件 根目录下的 index.html
            // 也就是项目从哪个文件开始打包
            // 静态资源分类打包
            output: {
                format: 'esm',
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            }
        }
    }
})
