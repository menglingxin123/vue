import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/Apple'
import Bananer from '@/components/Bananer'
import Oranage from '@/components/Oranage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/apple',
      name: 'apple',
      component:Apple,
      children: [
        {
          path: 'oranage',
          component: Oranage
        }
      ]
    },
    {
      path: '/bananer',
      name: 'bananer',
      component: Bananer,
      alias: '/b' 
    }
  ]
})
