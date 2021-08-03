<template>
  <div class='nav'>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="24">
            <div class='navContent'>
              <div class='navLogo'>
                <h1>
                  <a href="#">知乎日报</a>
                </h1> 
              </div>

              <div class='navTopLink'>
                <el-button>APP 下载</el-button>
                <el-button>浏览内容</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
  </div>
    
</template>

<script>
export default {
    name:'dailyNav'
}
</script>

<style scoped>
  @import "../css/dailyNav.css";
</style>