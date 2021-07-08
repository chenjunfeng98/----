import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoViews from '../views/TodoViews'


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
};
const TodoListStatusAll = () => import('../components/todoListItem/TodoListStatusAll');
const TodoListStatusActive = () => import('../components/todoListItem/TodoListStatusActive');
const TodoListStatusComplete = () => import('../components/todoListItem/TodoListStatusComplete');
const routes = [

  {
    path: '/',
    component: TodoViews
  },
  // {
  //   path:'/all',
  //   component:TodoListStatusAll
  // },
  // {
  //   path:'/active',
  //   component:TodoListStatusActive
  // },
  // {
  //   path:'/complete',
  //   component:TodoListStatusComplete
  // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
