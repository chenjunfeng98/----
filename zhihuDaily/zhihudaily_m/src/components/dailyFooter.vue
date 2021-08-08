<template>
  <div class="Footer">
      <el-row type="flex" justify="center" >
        <el-col :md="18" :sm="24">
          <div class='footText'>
            <div>
            <p>知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。</p>
            <p>主题日报包括动漫、设计、大公司、游戏、财经、电影、电子音乐、互联网安全等丰富内容，为业内人和资深爱好<br>者推荐各领域最精彩文章，满足高质量阅读需求。</p>
            <p>在知乎日报，告别浮躁，重获阅读的愉悦。</p>
            </div>
            
            <div class="footImg">
              <img src="../assets/qr_top2.png" alt="">
              <div>扫码下载客户端</div>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
  
</template>

<script>
export default {
    name:'dailyFooter'
}
</script>

<style scoped>
@import "../css/dailyFooter.css"
</style>