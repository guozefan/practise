import router from '@/router/index'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
//animate动画库引入
import 'animate.css'

import '@/styles/index.scss'
import '@/styles/reset.scss'



const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
