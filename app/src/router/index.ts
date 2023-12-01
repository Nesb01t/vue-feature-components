import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/vue",
    name: "Vue",
    component: () => import("../views/modules/vue.vue"),
  },
  {
    path: "/vue-use",
    name: "Vue use",
    component: () => import("../views/modules/vue-use.vue"),
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: () => import("../views/modules/pinia.vue"),
  },
  {
    path: "/element",
    name: "Element plus",
    component: () => import("../views/modules/element-plus.vue"),
  },
  {
    path: "/css",
    name: "Css",
    component: () => import("../views/modules/css.vue"),
  },
  {
    path: "/scroll",
    name: "[Infinity scroll]",
    component: () => import("../views/single-app/infinity-scroll.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
