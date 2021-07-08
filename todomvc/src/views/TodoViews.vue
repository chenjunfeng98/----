<template>
  <div class='TodoViews'>
    <div>todos</div>
    <input type="text" 
           placeholder="What need to be done ?" 
           @keydown="addByEnterKey">
    
    <todo-list-page :list="inputlist"></todo-list-page>
    
  </div>
</template>

<script>
// @ is an alias to /src
const TodoListPage = () => import('../components/TodoListPage');

export default {
  name: 'TodoViews',
  components: {
    TodoListPage
  },
  data () {
        return {
            inputlist:[],
        }
    },
    methods: {
        addByEnterKey(event){           
            if (event.keyCode == 13) {
              this.inputlist.push(event.target.value);
              event.target.value=''
            }
        },

    }
  
}

</script>

<style>
.TodoViews{
  text-align: center;
}
</style>