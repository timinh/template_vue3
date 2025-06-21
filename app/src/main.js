import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
if (import.meta.hot) { 
  handleHotUpdate(router) 
} 
app.use(router)
app.use(createPinia())

app.mount('#app')
