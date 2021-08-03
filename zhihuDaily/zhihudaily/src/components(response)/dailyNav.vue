<template>
  <div class='nav'>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="18">
            <div class='navContent'>
              <div class='navLogo'>
                  <a href="#">知乎日报</a>
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
  .nav{
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;

  }
  .el-row{
    width: 100%;
    height: 4.875rem;
    background-color: white;
    min-width: 60rem;
  }

  .el-col{
    background-color: white;
    min-width: 60rem;
  }

  .navContent{
    display: flex;
    justify-content: space-between
  }

  .navLogo{
    width: 30%;
    font-size: 1.5rem;
    font-weight: bold
  }

  .navTopLink{
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
  }

  .el-button{
    width: 17%;
    height: 100%;
    line-height: 100%;
    font-size: 1.1rem;
    padding: 0.4rem 0;
    box-sizing: border-box;
    border:none;
  }
</style>