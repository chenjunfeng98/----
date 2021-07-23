<template>
<div>
    <div >
      <ul>
        <li v-for="(item,index) in todoList"
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
    
  </div>
  <!-- <div v-for="(item,index) in content" :key="`${item}${index}`">
      <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
      <span>{{item.content}}</span>
      <button @click="delItem(item)">×</button>
  </div> -->
<!-- </div> -->
</template>

<script>
export default {
    name:'todoMvcAllPage',
    // props: {
    //   content:Array
    // },
    data () {
      return {
        todoList:this.$store.state.todoList,
        check:''
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

<style scope>
  *{
    list-style-type:none;
  }
  li {
    margin: 5px ;
    display: flex;
    justify-content: space-between;
    
  }
  
</style>