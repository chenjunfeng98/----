<template>
  <div class="header">
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <div class='headerContent'>
                <div class='headerImg comeImg'>
                  <img src="../assets/phone_sample.png" alt="">
                </div>
                <div class='headerText comeButton'>
                    <h2>每天三次  每次七分钟</h2>
                    <span>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</span>
                    <div class='download'>
                      <div class='downloadImg'>
                        <img src="../assets/qr_top2.png" >
                      </div>

                      <section class='downloadButton'>
                          <el-button :underline="false" icon="el-icon-mobile-phone" class="IOSbutton">IOS版</el-button>
                          <el-dropdown :hide-on-click="false" >
                              <el-button :underline="false" icon="el-icon-mobile-phone" class="Androidbutton">Android版</el-button>
                            <el-dropdown-menu >
                              <el-dropdown-item icon="el-icon-mobile-phone">豌豆荚</el-dropdown-item>
                              <el-dropdown-item icon="el-icon-mobile-phone">91市场</el-dropdown-item>
                              <el-dropdown-item icon="el-icon-mobile-phone">360市场</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                        </section>                  
                    </div>
                </div>
            </div>

          
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:'dailyHeader'
}
</script>

<style scoped>
@import "../css/dailyHeader.css"
</style>