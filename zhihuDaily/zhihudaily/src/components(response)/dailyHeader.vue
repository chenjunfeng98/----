<template>
  <div>
      <el-row type="flex" justify="center">
        <el-col :span="18">
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
                    <div class='iosButton'>
                    <el-button :underline="false" icon="el-icon-mobile-phone">IOS版</el-button>
                  </div>
                  <div class='androidButton' >
                    <el-dropdown :hide-on-click="false" >
                      <el-button :underline="false" icon="el-icon-mobile-phone">Android版</el-button>
                    <el-dropdown-menu >
                      <el-dropdown-item icon="el-icon-mobile-phone">豌豆荚</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-mobile-phone">91市场</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-mobile-phone">360市场</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  </div>
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
  .el-row{
    width: 100%;
    height: 28.75rem;
    background-color: #008bed;
    margin-top: 4.875rem;
    min-width: 60rem;
  }

  .headerContent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .headerImg {
    width: 50%;
    height: 100%;
    margin-bottom: -1.5rem;
    
  }
  
  .headerText{
    width: 60%;
    padding-left: 100px;
  }

  .headerText h2{
    font-size: 2.5rem;
    color: white;
    font-weight: normal;
  }

  .headerText span{
    display: block;
    width: 24.5rem;
    color:#99d1f8;
    height: 4.6rem;
    
  }

  .download{
    display: flex;
    justify-content: space-between;
  }


  .downloadButton .el-button {
    width: 12.125rem !important;
    height: 4rem !important;
    font-size: 1.375rem;
    
  }

  .iosButton{
    margin-bottom: 1.5rem;
  }

  .el-dropdown-menu__item{
    width: 9.5rem !important;
    height: 4rem !important;
    line-height: 4rem !important;
    font-size: 1.375rem;
    text-align: center;
  }

  .downloadImg{
    width: 9.0625rem;
    height: 9.5rem;
    background-color: white;
    text-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;      
  }
  
  .comeImg{
    animation: img 1s linear;
  }
  @keyframes img{
    from{
      transform: translateY(10px);
    }
    
  }
  .comeButton{
    animation: button 1s linear;
  }
  @keyframes button {
    from{
      transform: translateX(100px);
    }
  }
</style>