import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
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
        port: 8080 //启动端口
    }
})
