import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

const Products = () => import('./components/Products.vue')
const Card = () => import('./components/Card.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/card',
    name: 'card',
    component: Card
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
