<template>
  <div>
      <div>Next Player :{{player}}</div>
      <ol>
          <li><button @click="gameInit">Go to game start</button></li>
          <li v-for='item in steps' :key='item'><button >Go to move#{{item}}</button></li>
      </ol>
  </div>
</template>

<script>
export default {
    name:'gameList',
    props: ['player','steps'],
    methods: {
        gameInit(){
            this.$emit('initgame')
        }
    }

}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    
</style>