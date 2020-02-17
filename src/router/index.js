import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Faq from '@/components/Faq'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
       path: '/faq',
       name: 'Faq',
       component: Faq
     },
     {
        path: '/about',
        name: 'About',
        component: About
      }
  ]
})
