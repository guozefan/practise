import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import router from '@/router/index'
//animate动画库引入
import 'animate.css';



createApp(App).use(router).mount('#app')
