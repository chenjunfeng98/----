<template>
  <div id="app">
    <div id="nav">
      
      <todo-views>        
      </todo-views>
      
      <!-- 师傅功能上基本上符合，样式还在整哈o(*￣▽￣*)o -->
      <!-- 路由传值问题 -->
      <!-- <div>
        <router-view></router-view>
        <component1 :to="{path:'/all',query:name1}">
        </component1>

        <component2 :to="{path:'/active',query:name2}">
        </component2>

        <component3 :to="{path:'/complete',query:name3}">
        </component3>
      </div> -->

    </div>

  </div>
</template>

<script>
const TodoViews = () => import('./views/TodoViews');
// const component1 = () => import('component1');
// const component2 = () => import('component2');
// const component3 = () => import('component3');



export default {
  name:'App',
  components: {
    // component1,
    // component2,
    // component3,
    TodoViews

    
  }
}
</script>


<style>
    #app {
      display: flex;
      justify-content: center;
    }

</style>
