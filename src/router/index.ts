import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from "@/utils/progress";
const Layout = () => import('@/layout/index.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/myUser', name: 'myUser', component: () => import('@/views/my-user/index.vue') },

  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/js-fun',
    children: [
      {
        path: '',
        component: () => import('@/views/describes/index.vue')
      },
      {
        path: '/js-fun',
        name: 'js-fun',
        component: () => import('@/views/js-fun/index.vue')
      },
      {
        path: '/mdPreview',
        name: 'mdPreview',
        component: () => import('@/views/mdPreview/index.vue')
      },
      { path: '/website', name: 'website', component: () => import('@/views/website/index.vue') }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(() => {
  NProgress.done();
});


export default router
