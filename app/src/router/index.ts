import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'demo',
        meta: {
            title: "views/demo",
        },
        component: () => import('../views/demo.vue')
    },
    {
        path: '/scroll',
        name: 'scroll',
        meta: {
            title: "views/scroll",
        },
        component: () => import('../views/infinity-scroll.vue')
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;