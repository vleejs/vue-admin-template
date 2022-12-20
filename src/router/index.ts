import type { App } from 'vue'
import { type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const Layout = () => import('@/layout/index.vue') // 参考 shims-vue.d.ts
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          svgIcon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]

const genRouterHistory = () => {
  // if use import.meta set "module": "ESNext"
  return import.meta.env.VITE_ROUTER_HISTORY === 'hash'
    ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
    : createWebHistory(import.meta.env.VITE_PUBLIC_PATH)
}

export const router = createRouter({
  history: genRouterHistory(),
  routes: constantRoutes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
