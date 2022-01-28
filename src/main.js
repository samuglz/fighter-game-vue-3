import { createApp } from 'vue'
import store from "./store"
import router from "./router"
import App from './App.vue'
import './assets/styles/tailwind.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')