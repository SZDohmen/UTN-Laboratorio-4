import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instrumentos',
    name: 'Instrumentos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Instrumentos.vue')
  },
  {
    path: '/instrumentos/:id',
    name: 'Instrumento',
    component: () => import('../views/Instrumento.vue')
  },
  {
    path: '/donde',
    name: 'Donde',
    component: () => import('../views/Donde.vue')
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import('../views/Editar.vue'),
  },
  {
    path: '/crear',
    name: 'Crear',
    component: () => import('../views/Crear.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
