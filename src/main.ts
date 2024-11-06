import router from '@/router/index'
import { createApp } from 'vue'
import App from './App.vue'
//animate动画库引入
import 'animate.css'

import '@/styles/index.scss'
import '@/styles/reset.scss'

createApp(App).use(router).mount('#app')
