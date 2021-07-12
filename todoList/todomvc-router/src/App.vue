<template>
  <div id="app">
    <input type="checkbox" @click="checkAllItem">
    <input type="text" placeholder="What need to be done ?" @keyup.enter="addMessage">

    <router-view></router-view>

    <div v-if="todoList.length">
      <router-link :to="{name:'all',params:{content:this.todoList}}" tag="button">All</router-link>
      <router-link :to="{name:'active',params:{content:this.todoList}}" tag="button">Active</router-link>
      <router-link :to="{name:'complete',params:{content:this.todoList}}" tag="button">Complete</router-link>
      <button @click="clearCompleteList">Clear Complete</button>
    </div>
  </div>
</template>



<script>
export default {
  name:'App',
  data () {
    return {
      todoList:[],
      checkedAll:true,
    }
  },
  methods: {
    addMessage(event){
      this.todoList.push({content:event.target.value,isChecked:false});
      event.target.value=''
    },
    checkAllItem(){
      this.todoList.forEach(item=>item.isChecked = this.checkedAll);
      this.checkedAll = !this.checkedAll
    },
    clearCompleteList(){
      this.todoList.forEach(item=>{
        let completeList = this.todoList.filter(v=>v.isChecked);
        completeList.forEach(item=>this.todoList.splice(this.todoList.indexOf(item),1))
      })
    }
  }
}
</script>

<style>

</style>
