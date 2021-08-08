<template>
  <div >
    <div class='mainHeader'>
      <el-row type="flex" justify="center">
        <el-col :md="18" :sm="24">
            <div class='mainBanner'>
              <span>浏览内容</span>
              <span>最新内容</span>
            </div>
        </el-col>
      </el-row>
    </div>

      <div class="mainText">
        <el-row type="flex" justify="center">
            <el-col :md="18" :sm="24">
              <el-col :md="7" :sm="24" v-for="(item,index) in zhihuData" :key="index">
                <div class='mainItem' >
                  <div class='mainBox'>
                    <router-link :to="{path:'/story',query:{storyID:item.id}}" >
                      <img :src="item.images" >
                      <div>{{item.title}}</div>
                    </router-link>
                  </div> 
                </div>  
              </el-col>
            </el-col>
              
      </el-row>
      </div>

      <div class='mainBtn'>
        <el-row type="flex" justify="center">
          <el-col :md="8" :sm="24">
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
    computed: {
      zhihuData(){
        return this.zhihuDailyData.flat()
      },
      yesterdayData(){
        return this.formateTime()
      }
    },
    data () {
      return {
        zhihuDailyData:[],
        throttle:true,
        single:[1,3,5,7,8,10,12],
        lastDates:'',
      }
    },
    methods: {
      scroll(Val){
        window.onscroll = () =>{
          let offsetHeight = document.documentElement.offsetHeight;///一整个html的高度
          let scrollTop = document.documentElement.scrollTop;///卷去的高度
          let innerheight = window.innerHeight;//可见区域的高度
          let result = offsetHeight-scrollTop-innerheight<=100;
          if(result){
            if(!this.throttle){
              return
            };
            this.throttle = false;
            this.formateTime();
            axios.get(`http://localhost:8080/api/before/${this.lastDates.join('')}`)
            .then(response=>{Val.push(response.data.stories);
                            this.throttle = true;
                            })
            .catch(error=>console.log(error));
              }
        }
      },
      formateTime(){
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth()+1;
        month =  month < 10 ? `0${month}` : month;
        let day = t.getDate();
        day =  day < 10 ? `0${day}` : day;
        let res = [year,month,day];
        if( typeof(this.lastDates) !== 'string' ){
                let monthDay = this.single.indexOf(Number(this.lastDates[1]-1)) > -1 ? 31:30;
                let lastMonth = this.lastDates[2]-1 === 0 ? (this.lastDates[1]-1< 10 ? `0${this.lastDates[1]-1}` : this.lastDates[1]-1) : this.lastDates[1];
                let lastDay = this.lastDates[2]-1 === 0 ? String(monthDay):(this.lastDates[2]-1< 10 ? `0${this.lastDates[2]-1}` : String(this.lastDates[2]-1));               
                let lastRse = [year,lastMonth,lastDay];
                return this.lastDates = lastRse;
            }
        return this.lastDates = res; 
      },
      
      
    },
    async mounted () {
      this.scroll(this.zhihuDailyData)
      let zhihuDailyData = await axios.get('http://localhost:8080/api/latest')
      .then(response=>
        this.zhihuDailyData.push(response.data.stories)
        );
      let zhihuData1 = await axios.get(`http://localhost:8080/api/before/${this.yesterdayData.join('')}`)
      .then(response=>
        this.zhihuDailyData.push(response.data.stories)
        );
      
    },
}




</script>

<style scoped>
@import "../css/dailyMain.css"
</style>