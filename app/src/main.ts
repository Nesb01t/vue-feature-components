import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {createPinia} from 'pinia'

const app = createApp(App)

// styles
app.use(ElementPlus)

// states controller
const pinia = createPinia()
app.use(pinia)

// mount
app.mount('#app')