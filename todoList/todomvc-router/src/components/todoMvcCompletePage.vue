<template>
  <div>
    <div >
      <ul>
        <li v-for="(item,index) in completeList"
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
    
    <!-- <div v-for="(item,index) in completeList" :key="`${item}${index}`">
      <input type="checkbox" @click="handleChecked(item)" v-model="item.isChecked">
      <span>{{item.content}}</span>
      <button @click="delItem(item)">×</button>
  </div> -->
  </div>
</template>

<script>
export default {
  name: "todoMvcCompletePage",
  // props: {
  //   content:Array
  // },
  // computed: {
  //   completeList(){
  //     return this.content.filter(item=>item.isChecked)
  //   }
  // },

  computed: {
    completeList() {
      return this.$store.getters.completeList;
    },
  },
  methods: {
    handleChecked(item) {
      this.$store.commit("changeChecked", item);
    },
    reomveMessage(item) {
      this.$store.commit("reomveMessage", item);
    },
  },
};
</script>

<style></style>
