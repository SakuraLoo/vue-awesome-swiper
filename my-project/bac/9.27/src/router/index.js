import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/'
import cart from '@/pages/cart/'
import category from '@/pages/category/'
import personal from '@/pages/personal/'
import product from '@/pages/product/'
import search from '@/pages/search/'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/home'), //路由的懒加载：访问此页面的时候再加载
    // component: home,
    children: [
      {
        name: 'product',
        path: 'product/:id',
        component: () => import('pages/product')
        // component: product
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('pages/cart')
    // component: cart
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('pages/category')
    // component: category
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('pages/personal')
    // component: personal
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('pages/product')
    // component: product
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('pages/search')
    // component: search
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default new Router({
  routes
})
