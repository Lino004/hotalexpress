import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/singin-login',
    name: 'SinginLogin',
    component: () => import('../views/SinginLogin.vue')
  },
  {
    path: '/store-list',
    name: 'StoreList',
    component: () => import('../views/StoreList.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import('../views/Basket.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
