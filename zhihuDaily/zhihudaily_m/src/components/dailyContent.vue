<template>
  <div>
      <div v-html="storyHtml.body" :style="storyHtml.css">
      </div>
      
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'content1',
    // computed: {
    //   storyCss(){
    //       return this.storyHtml.css
    //   }  
    // },
    data () {
        return {
            storyHtml:'',
            storyId: this.$route.query.storyID,
            
        }
    },
    async mounted () {
        let zhihuDaily = await axios.get(`http://localhost:8080/api/${this.storyId}`)
        .then(response=>
        this.storyHtml=response.data
        );
    }
}
</script>

<style  scoped>
/* @import 'http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3'; */
</style>