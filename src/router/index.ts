import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: () => import( '@/views/home/index.vue'),
        children:[
            {
                path: '',
                component: () => import( '@/views/describes/index.vue'),
            },
            {
                path: 'js-fun',
                name: 'js-fun',
                component: () => import( '@/views/js-fun/index.vue'),
            }
        ]
      },
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router;