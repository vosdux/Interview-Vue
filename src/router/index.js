import Vue from 'vue'
import Router from 'vue-router'
import Red from '@/components/Red'
import Yellow from '@/components/Yellow'
import Green from '@/components/Green'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/1'
    },
    {
      path: '/1',
      name: 'red',
      component: Red
    },
    {
      path: '/2',
      name: 'yellow',
      component: Yellow
    },
    {
      path: '/3',
      name: 'green',
      component: Green
    }
  ]
})
