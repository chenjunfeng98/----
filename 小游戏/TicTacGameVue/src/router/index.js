import Vue from 'vue'
import Router from 'vue-router'
import Game from '../components/Game'
import Home from '../components/Home'
import About from '../components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect: '/game'
    },
    {
      path: '/game',
      component: Game
    },
    {
      path:'/home',
      component :Home,
      children:[{
        path:'about',
        component:About
      }]
    },

      

  ],
  
    
})
