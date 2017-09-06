import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home'
import Cart from '@/container/Cart'
import Order from '@/container/Order'
import Profile from '@/container/Profile'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/cart/:xx',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
