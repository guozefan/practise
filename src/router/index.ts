import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/home' },
    { path: '/myUser', name: 'myUser', component: () => import('@/views/my-user/index.vue'), },
    { path: '/website', name: 'website', component: () => import('@/views/website/index.vue'), },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/describes/index.vue'),
            },
            {
                path: 'js-fun',
                name: 'js-fun',
                component: () => import('@/views/js-fun/index.vue'),
            },
            {
                path: 'mdPreview',
                name: 'mdPreview',
                component: () => import('@/views/mdPreview/index.vue'),
            }
        ]
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;