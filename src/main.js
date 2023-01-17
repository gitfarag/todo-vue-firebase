import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#pro')
