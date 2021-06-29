<template>
  <div>
    <div>{{ player }}</div>
    <ol>
      <li><button @click="gameInit">Go to game start</button></li>
      <li v-for="item in steps" :key="item">
        <button @click="resetGame(item)">Go to move#{{ item }}</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "gameList",
  props: ["player", "steps", "gameCell", "listHistory"],
  methods: {
    gameInit() {
      this.$emit("initgame");
    },
    resetGame(item) {
      let k = this.listHistory.slice(item);
      let c = [];
      for (let i = 0; i < k.length; i++) {
        c.push(k[i].id);
      }
      for (let i = 0; i < this.gameCell.length; i++) {
        if (c.indexOf(this.gameCell[i].id) !== -1) {
          this.gameCell[i].content = "";
        }
      }
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
