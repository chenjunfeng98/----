<template>
  <div id="app">
    <router-link to='/home'>首页</router-link>
    <!-- <router-link :to='{path:"/about" ,query:{id:1,test:"ldh"}}'>关于</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    margin: 0 auto;
  }
</style>
