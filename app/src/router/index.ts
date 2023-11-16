import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/auth',
        name: 'auth',
        meta: {
            title: "登录",
            keepAlive: true,
            requireAuth: false
        },
        // component: () => import('@/pages/auth.vue')
    } as any
    // TODO fix any script
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;