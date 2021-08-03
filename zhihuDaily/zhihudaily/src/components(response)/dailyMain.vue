<template>
  <div>
    <div class='mainHeader'>
      <el-row type="flex" justify="center">
        <el-col :span="18">
            <div class='mainBanner'>
              <span>浏览内容</span>
              <span>最新内容</span>
            </div>
        </el-col>
      </el-row>
    </div>
      

      <section class="mainText">
        <el-row type="flex" justify="center" >
          <el-col :span="6" >
            <div class='mainItem' v-for="item in zhihuDailyData.stories" :key="item.id">
              <div class='mainBox'>
                <a :href="item.url">
                  <img :src="item.images || item.image" >
                  <div>{{item.title}}</div>
                </a>
              </div>
            </div>  
          </el-col>
          <el-col :span="6" >
            <div class='mainItem' v-for="item in zhihuYesterday.stories" :key="item.id">
              <div class='mainBox'>
                <a :href="item.url">
                  <img :src="item.images || item.image" >
                  <div>{{item.title}}</div>
                </a>
              </div>
            </div>  
          </el-col>
          <el-col :span="6" >
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
      </section>

      <div class='mainButtomBtn'>
         <el-row type="flex" justify="center" >
          <el-col :span="18">
            <div class='mainButton'>
              <el-button type="primary" plain style="width:100%">更多精彩内容可在知乎日报应用中查看</el-button>
            </div>
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
  .mainHeader .el-row{
    min-width: 60rem;
  }
  .mainHeader .el-col{
    padding: 0 1rem;
    box-sizing: border-box;
    min-width: 60rem;
  }

  .mainBanner{
    height: 6.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.56rem;
    
  }
  .mainBanner span:last-child{
    color: #ccc;
  }

  .mainText .el-row{
    min-width: 61.875rem;
  }
  .mainText .el-col{
    width: 20.625rem !important;
    padding: 0 1rem;
    min-width: 20.625rem
  }
  .mainItem{
    margin-bottom: 1.25rem;
  }

  .mainBox{
    padding: 1.25rem;
    background-color: white;
  }

  .mainItem img {
    width: 100%;
    margin-bottom: 1rem;
  }

  .mainButton{
    display: flex;
    justify-content: center;
  }

  .mainButtomBtn{
    padding: 0 0 2rem;
  }
</style>