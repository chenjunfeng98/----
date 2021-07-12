<template>
<div>
  <div v-for="(item,index) in content" :key="`${item}${index}`">
      <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
      <span>{{item.content}}</span>
      <button @click="delItem(item)">×</button>
  </div>
</div>
</template>

<script>
export default {
    name:'todoMvcAllPage',
    props: {
      content:Array
    },
    methods: {
      handleChecked(item){
        item.isChecked = !item.isChecked;
      },
      delItem(value){
        let index = this.content.indexOf(value);
        this.content.splice(index,1)
      }
    }

}
</script>

<style>

</style>