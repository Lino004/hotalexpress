import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/error-404'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/error-404',
    name: 'Error404',
    component: () => import('../views/Error404.vue')
  },
  {
    path: '/signup-login',
    component: () => import('../views/signupLogin/index.vue'),
    children: [
      {
        path: '',
        name: 'SignupLogin',
        component: () => import('../views/signupLogin/SignupLogin.vue')
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('../views/signupLogin/Signup.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/signupLogin/Login.vue')
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: () => import('../views/signupLogin/ResetPassword.vue')
      },
      {
        path: 'set-new-password',
        name: 'SetNewPassword',
        component: () => import('../views/signupLogin/SetNewPassword.vue')
      }
    ]
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
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/account',
    component: () => import('../views/account/index.vue'),
    children: [
      {
        path: '',
        name: 'Profile',
        component: () => import('../views/account/Profile.vue')
      },
      {
        path: 'addresses',
        name: 'Addresses',
        component: () => import('../views/account/Addresses.vue')
      },
      {
        path: 'wallet',
        name: 'Wallet',
        component: () => import('../views/account/Wallet.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/account/Order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
