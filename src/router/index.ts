import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 先引入createRouter, createWebHistory, RouteRecordRaw，引入需要的组件（这里使用懒加载引入，提高前端性能），创建routes数组，创建router实例，抛出router
const HelloWorld = () => import('@/components/HelloWorld.vue')
const Hello = () => import('@/components/Hello.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/hello-w',
        component: HelloWorld
    },
    {
        path: '/',
        redirect: '/hello'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
