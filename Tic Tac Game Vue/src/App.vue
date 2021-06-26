<template>
  <div id="app">
    <!-- <a href="#/user">用户界面</a>
    <a href="#/">主界面</a> -->
    <!-- <img src="./assets/logo.png"> -->
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
