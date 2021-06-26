<template>
  <div class='box'>
      <div :class='{game:isGame}'>
      <div v-for="(item,index) in gameCount" 
            :key='item'
            :class='{cell:isCell}'
            @click.once='gameClick(index)'></div>
      </div>
      <gameList :player='players' :steps='initCount' @initgame='initGame'></gameList>
  </div>
</template>

<script>
import gameList from './gameList';

export default {
     name:'Game',
     data () {
         return {
             initCount:0,
             gameHistory:[],
             gameCount:9,
             isGame:true,
             isCell:true,
             
             
         }
     },
     computed: {
         players(){
            return  this.initCount%2?'O':'X'
         }
     },
     methods:{
         gameClick(index){
             let player = this.initCount%2?'X':'O';
                this.gameHistory.push({id:index+1,content:player});
                console.log(this.gameHistory);
                this.initCount++;
         },
         initGame(){
             this.initCount=0
         }
     },
     components: {
         gameList
     }
};

</script>

<style >
    * {
        margin: 0;
        padding: 0;
        /* list-style-type: none; */
    }
    .box {
        display: flex;
        align-items:flex-start;
        justify-content:center;
        
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
        font-weight: 600px;
    }
</style>