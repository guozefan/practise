import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import router from '@/router/index'
import VueTypedJs from 'vue-typed-js'
//animate动画库引入
import 'animate.css';



createApp(App).use(router).use(VueTypedJs).mount('#app')
