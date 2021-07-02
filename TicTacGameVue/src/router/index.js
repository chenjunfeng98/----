import Vue from 'vue'
import Router from 'vue-router'
import Game from '../components/Game'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect: '/Game'
    },
    {
      path: '/Game',
      component: Game
    }
      

  ],
  mode:'history'
    
})
