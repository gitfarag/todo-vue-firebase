import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
const pinia = createPinia()

library.add(faTrash)
app.use(pinia)
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#pro')
