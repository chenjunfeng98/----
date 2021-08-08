<template>
  <div>
    
    <daily-nav/>
    <daily-header/>
    <daily-main/>
    <daily-footer/>
    
  </div>
</template>

<script>
import dailyNav from '../components/dailyNav.vue';
import dailyHeader from '../components/dailyHeader.vue';
import dailyMain from '../components/dailyMain.vue';
import dailyFooter from '../components/dailyFooter.vue'

export default {
  name:'home',

  components: {
    dailyNav,
    dailyHeader,
    dailyMain,
    dailyFooter  
    },
    
}

</script>


<style lang='less'>
@import "../css/common.less";
</style>