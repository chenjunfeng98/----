<template>
  <div id="app">
    <div id="nav">     
      <todo-views>        
      </todo-views>
    </div>

  </div>
</template>

<script>
const TodoViews = () => import('./views/TodoViews');




export default {
  name:'App',
  components: {
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
