import Vue from 'vue'
import VueRouter from 'vue-router'


const todoMvcAllPage = () => import('../components/todoMvcAllPage');
const todoMvcActivePage = () => import('../components/todoMvcActivePage');
const todoMvcCompletePage = () => import('../components/todoMvcCompletePage')

Vue.use(VueRouter)

const routes = [
  {
    path:'/all/:content',
    name:'all',
    component:todoMvcAllPage,
    props: true
  },
  {
    path:'/active/:content',
    name:'active',
    component:todoMvcActivePage,
    props: true
  },
  {
    path:'/complete/:content',
    name:'complete',
    component:todoMvcCompletePage,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
