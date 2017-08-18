import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Perrito from '@/components/Perrito'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/perrito',
      name: 'Perrito',
      component: Perrito
    },
    {
      path: '/test/:id',
      name: 'Test',
      component: Test
    }
  ]
})
