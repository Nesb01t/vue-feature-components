import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from "./router";

const app = createApp(App)

// styles
app.use(ElementPlus)

// states controller
const pinia = createPinia()
app.use(pinia)

// router
app.use(router)

// mount
app.mount('#app')