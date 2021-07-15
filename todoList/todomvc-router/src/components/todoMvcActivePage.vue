<template>
<div>
  <div v-for="(item,index) in activeList" 
        :key="`${item}${index}`">
    <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
    <span>{{item.content}}</span>
    <button @click="reomveMessage(item)">×</button>
  </div>
  <!-- <div v-for="(item,index) in activeList" :key="`${item}${index}`">
      <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
      <span>{{item.content}}</span>
      <button @click="delItem(item)">×</button>
  </div> -->
</div>
</template>


<script>
export default {
    name:'todoMvcActivePage',
    // props: {
    //   content:Array
    // },
    // computed: {
    //   activeList(){
    //     return this.content.filter(item=>!item.isChecked)
    //   }
    // },
    computed:{
      activeList(){
        return this.$store.getters.activeList
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