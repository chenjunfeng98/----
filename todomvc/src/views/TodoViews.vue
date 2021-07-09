<template>
  <div class='TodoViews'>
    <div>todos</div>
    <input type="text" 
           placeholder="What need to be done ?" 
           @keyup.enter="addByEnterKey">

    
    <todo-list-page-2-0 :list="inputList"></todo-list-page-2-0>
    
  </div>
</template>

<script>

// @ is an alias to /src
const TodoListPage20 = () => import('../components/TodoListPage2.0');


export default {
  name: 'TodoViews',
  components: {
    TodoListPage20,

    
  },
  data () {
        return {
            inputList:[],

        }
    },
    methods: {
        addByEnterKey(event){ 
              this.inputList.push({content:event.target.value,status:'All'})
              event.target.value=''  
        },
        change(value){
          value.status=value.status=='All'?'Complete':'All'
        }

    }
  
}

</script>

<style>
.TodoViews{
  text-align: center;
}
</style>