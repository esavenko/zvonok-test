import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
