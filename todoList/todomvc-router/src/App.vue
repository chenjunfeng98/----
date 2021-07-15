<template>
  <div id="app">
    
    <input type="checkbox" @click="checkAllMessage">
    <input type="text" placeholder="What need to be done ?" @keyup.enter="addMessage" v-model="message">
    <router-view></router-view>

    <div>
      <router-link :to="{name:'all'}" tag="button">All</router-link>
      <router-link :to="{name:'active'}" tag="button">Active</router-link>
      <router-link :to="{name:'complete'}" tag="button">Complete</router-link>
      <!-- <router-link :to="{name:'all',params:{content:this.todoList}}" tag="button">All</router-link>
      <router-link :to="{name:'active',params:{content:this.todoList}}" tag="button">Active</router-link>
      <router-link :to="{name:'complete',params:{content:this.todoList}}" tag="button">Complete</router-link> -->
      <button @click="clearCompleteMessage">Clear Complete</button>
      
    </div>
    
  </div>
</template>



<script>
export default {
  name:'App',
  data () {
    return {
      // todoList:[],
      message:'',
      
    }
  },
  methods: {
    addMessage(){
      this.$store.commit('addMessage',this.message)
      // this.todoList.push({content:event.target.value,isChecked:false});
      this.message=''
    },
    checkAllMessage(){
      this.$store.commit('checkAllMessage')
    },
    clearCompleteMessage(){
      this.$store.commit('clearCompleteMessage')
    }
  }
}
</script>

<style>

</style>
