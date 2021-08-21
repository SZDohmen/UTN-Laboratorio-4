import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Detalle from '../components/Detalle.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home},
  { path: '/detalle/:id', component: Detalle},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router