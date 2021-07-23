<template>
  <div class='TodoViews'>
    <div>todos</div>
    <input type="text" 
           placeholder="What need to be done ?" 
           v-model="message"
           @keyup.enter="addByEnterKey">
    <todo-list-page :list="inputList"></todo-list-page>
    
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
            inputList:[],
            message:''
        }
    },
    methods: {
        addByEnterKey(){ 
              this.inputList.push({content:this.message,isClicked:false})
              this.message=''  
        },
    }  
}

</script>

<style>
.TodoViews{
  text-align: center;
}
</style>