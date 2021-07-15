<template>
<div>
  <div v-for="(item,index) in todoList" 
        :key="`${item}${index}`">
    <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
    <span>{{item.content}}</span>
    <button @click="reomveMessage(item)">×</button>
  </div>
  <!-- <div v-for="(item,index) in content" :key="`${item}${index}`">
      <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
      <span>{{item.content}}</span>
      <button @click="delItem(item)">×</button>
  </div> -->
</div>
</template>

<script>
export default {
    name:'todoMvcAllPage',
    // props: {
    //   content:Array
    // },
    data () {
      return {
        todoList:this.$store.state.todoList
      }
    },
    methods: {
      handleChecked(item){
        this.$store.commit('changeChecked',item);
      },
      reomveMessage(item){
        this.$store.commit('reomveMessage',item);
      }
    }

}
</script>

<style>

</style>