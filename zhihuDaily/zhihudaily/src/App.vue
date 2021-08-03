<template>
  <div>
        <daily-nav/>
        <daily-header/>
        <daily-main/>
        <daily-footer/>
        
  </div>
</template>


<script>
import dailyHeader from './components(response)/dailyHeader.vue';
import dailyNav from './components(response)/dailyNav.vue';
import dailyMain from './components(response)/dailyMain.vue';
import dailyFooter from './components(response)/dailyFooter.vue';

export default {
  components: {
    dailyHeader,
    dailyNav,
    dailyMain,
    dailyFooter
  }
}
</script>

<style>
  
  
  *{
    padding: 0 ;
    margin: 0 ;
    text-decoration: none;
    color: black;
  }

  body{
    background-color: #f9f9f9;
  }
</style>
