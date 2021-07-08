<template>
  <div>
      <input type="text" v-model="name">
      <div>{{name}}</div>
      <router-link :to='{path:"/home/about" ,query:name}'>关于</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Home',
    data () {
        return {
            name:''
            
        }
    }
}
</script>

<style>

</style>