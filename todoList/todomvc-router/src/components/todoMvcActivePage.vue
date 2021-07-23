<template>
<div>
  <div >
      <ul>
        <li v-for="(item,index) in activeList"
            :key="`${item}${index}`">
            <div class='checkBotton'>
                <el-checkbox @click="handleChecked(item)"
                          v-model="item.isChecked">{{item.content}}
                </el-checkbox>
            </div>
            <div class='deleteBotton'>
              <el-button type="danger" @click="reomveMessage(item)" size="mini">删除</el-button>
            </div>
        </li>
      </ul>
    </div>

  <!-- <div v-for="(item,index) in activeList" :key="`${item}${index}`">
      <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
      <span>{{item.content}}</span>
      <button @click="delItem(item)">×</button>
  </div> -->
</div>
</template>


<script>
export default {
    name:'todoMvcActivePage',
    // props: {
    //   content:Array
    // },
    // computed: {
    //   activeList(){
    //     return this.content.filter(item=>!item.isChecked)
    //   }
    // },
    computed:{
      activeList(){
        return this.$store.getters.activeList
      }
    },
    methods: {
     handleChecked(item){
        this.$store.commit('changeChecked',item);
      },
      reomveMessage(item){
        this.$store.commit('reomveMessage',item);
      }
    }
}

</script>

<style>

</style>