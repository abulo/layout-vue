import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.join(__dirname, './src')
        }
    },
    plugins: [vue()],
    // 运行时检查eslint规范
    eslintPlugin: {
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    },
    server: {
        port: 8080 //启动端口
    }
})
