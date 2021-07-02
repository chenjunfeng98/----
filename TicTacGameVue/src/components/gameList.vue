<template>
  <div>
    <div>{{listPlayer}}</div>
    <ol>
      <li><button @click="gameInit">Go to game start</button></li>
      <li v-for="(item,index) in listHistory" :key="index">
        <button @click="resetGame(index+1)">Go to move#{{ index+1 }}</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "gameList",
  props: ["listPlayer", "gameCell", "listHistory"],
  methods: {
    gameInit() {
      this.$emit("initgame");
    },
    resetGame(item) {
      let history = this.listHistory.slice(0,item);
      for (let i = 0; i < this.gameCell.length; i++) {
        let t = history.find(v=>this.gameCell[i].id==v.id)
        this.gameCell[i].content=!t?'':t.content

      };
      this.$emit('reset',item)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
