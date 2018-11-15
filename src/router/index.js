import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/Apple'
import Bananer from '@/components/Bananer'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      },
      {
          path: '/bananer/:id',
          name: 'bananer',
          component: Bananer
      },
      {
          path: '/apple/:id',
          name: 'apple',
          component: Apple
      }
  ]
})
