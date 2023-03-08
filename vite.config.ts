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
    plugins: [vue()]
})
