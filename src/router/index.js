import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages 
import Home from '@/pages/Hom'
import NotFound from '@/pages/404'
import Shop from '@/pages/Shop'
import product from '@/pages/Product'

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/shop/:id',
      name: 'product',
      component: Product
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})
