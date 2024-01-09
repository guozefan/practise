import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        meta: {
                title: "首页"
            },
        component: () => import( '@/views/home/index.vue')
      },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router;