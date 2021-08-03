<template>
  <div >
    <div class='mainHeader'>
      <el-row type="flex" justify="center">
        <el-col :span="24">
            <div class='mainBanner'>
              <span>浏览内容</span>
              <span>最新内容</span>
            </div>
        </el-col>
      </el-row>
    </div>
      

      <div class="mainText">
        <el-row type="flex" justify="center" >
          <el-col :span="8" >
            <div class='mainItem' v-for="item in zhihuDailyData.stories" :key="item.id">
              <div class='mainBox'>
                <a :href="item.url">
                  <img :src="item.images || item.image" >
                  <div>{{item.title}}</div>
                </a>
              </div>
            </div>  
          </el-col>
          <el-col :span="8" >
            <div class='mainItem' v-for="item in zhihuYesterday.stories" :key="item.id">
              <div class='mainBox'>
                <a :href="item.url">
                  <img :src="item.images || item.image" >
                  <div>{{item.title}}</div>
                </a>
              </div>
            </div>  
          </el-col>
          <el-col :span="8" >
            <div class='mainItem' v-for="item in zhihuBeforeYesterday.stories" :key="item.id">
              <div class='mainBox'>
                <a :href="item.url">
                  <img :src="item.images || item.image" >
                  <div>{{item.title}}</div>
                </a>
              </div>
            </div>  
          </el-col>
      </el-row>
      </div>

      <div class='mainBtn'>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" plain >更多精彩内容可在知乎日报应用中查看</el-button>
          </el-col>
        </el-row>
      </div>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
    name:'dailyMain',

    data () {
      return {
        zhihuDailyData:'',
        zhihuYesterday:'',
        zhihuBeforeYesterday:''
      }
    },
    mounted () {
      axios.get('http://localhost:8080/zhihudaily')
      .then(response=>
        this.zhihuDailyData=response.data
        );
      axios.get('http://localhost:8080/zhihuyesterday')
      .then(response=>
        this.zhihuYesterday=response.data
        );
      axios.get('http://localhost:8080/zhihubeforeyesterday')
      .then(response=>
        this.zhihuBeforeYesterday=response.data
        );
    }
}
</script>

<style scoped>
@import "../css/dailyMain.css"
</style>