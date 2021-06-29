<template>
  <div class="box">
    <div :class="{ game: isGame }">
      <div
        v-for="item in gameCount"
        :key="item.id"
        :class="{ cell: isCell }"
        @click="gameClick(item)"
      >
        {{ item.content }}
      </div>
    </div>
    <!-- 子组件步骤列表 -->
    <gameList
      :player="players"
      :steps="initCount"
      :gameCell="gameCount"
      @initgame="initGame"
      :listHistory="gameHistory"
    ></gameList>
  </div>
</template>

<script>
import gameList from "./gameList";

export default {
  name: "Game",
  data() {
    return {
      initCount: 0, ///回合数
      gameHistory: [], ///历史记录
      isGame: true, ///盒子样式
      isCell: true, ///格子样式
      gameCount: [
        { id: "1", content: "" },
        { id: "2", content: "" },
        { id: "3", content: "" },
        { id: "4", content: "" },
        { id: "5", content: "" },
        { id: "6", content: "" },
        { id: "7", content: "" },
        { id: "8", content: "" },
        { id: "9", content: "" }
      ], ///格子记录数
      player: "", ///玩家
      begin: true,
      win: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ]
    };
  },
  computed: {
    players() {
      if (!this.begin) {
        return `Winner：${this.player}`;
      } else {
        return `Next Player :${this.initCount % 2 ? "O" : "X"}`;
      }
    }
  },
  methods: {
    gameClick(item) {
      if (item.content !== "" || this.begin == false) {
        return;
      } else {
        this.player = this.initCount % 2 ? "O" : "X";
        this.gameHistory.push(item);
        item.content = this.player;
        let gameplayer = this.gameHistory.filter(item => {
          return item.content == this.player;
        }); //获取玩家历史记录
        let step = gameplayer.map(function(item) {
          return Number(item.id);
        }); //转化成数组
        let test = this.win.some(item =>
          item.every(val => step.indexOf(val) > -1)
        ); ///判断成绩
        if (test) {
          this.begin = false;
        }
        this.initCount++;
      }
    },
    initGame() {
      this.initCount = 0;
      this.gameHistory = [];
      this.gameCount = [
        { id: "1", content: "" },
        { id: "2", content: "" },
        { id: "3", content: "" },
        { id: "4", content: "" },
        { id: "5", content: "" },
        { id: "6", content: "" },
        { id: "7", content: "" },
        { id: "8", content: "" },
        { id: "9", content: "" }
      ];
      this.begin = true;
    }
  },
  components: {
    gameList
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* list-style-type: none; */
}
.box {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.game {
  width: 90px;
  height: 90px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 30px;
}
.cell {
  width: 30px;
  height: 30px;
  border: 0.5px solid black;
  box-sizing: border-box;
  text-align: center;
  line-height: 30px;
}
</style>
