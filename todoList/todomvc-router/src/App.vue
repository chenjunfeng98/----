<template>
  <div id="app">
    <div class='title'>
      TODOLIST
    </div>
    <div class='header'>
      <el-row>
          <el-col :span='2'>
            <div style="text-align:center">
              <el-button  @click="checkAllMessage" icon="el-icon-check"></el-button>
            </div>
          </el-col>
          <!-- <input type="checkbox" @click="checkAllMessage" :checked="$store.getters.checkAll"> -->
          <el-col :span='22'>
            <div>
             <el-input placeholder="What need to be done ?" @change="addMessage" v-model="message"></el-input>
            </div>
          </el-col>
      </el-row>
    </div>
    <!-- <input type="text" placeholder="What need to be done ?" @keyup.enter="addMessage" v-model="message"> -->
    <router-view></router-view>

    <div v-if="this.$store.state.todoList.length" >
      <el-row type='flex' justify="space-between">
      <div>
        <!-- <router-link :to="{name:'all'}" >All</router-link>
        <router-link :to="{name:'active'}" >Active</router-link>
        <router-link :to="{name:'complete'}" >Complete</router-link> -->
        <!-- <button  @click="clearCompleteMessage">Clear Complete</button> -->
        <el-radio-group v-model="test" @change="changRouter">
          <el-radio-button v-for="(item,index) in routerList" 
                          :label="item.name"
                          :key="`${item}${index}`">{{item.content}}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <el-button @click="clearCompleteMessage" type="danger">Clear Complete</el-button>
      </div>
      <!-- <router-link :to="{name:'all',params:{content:this.todoList}}" tag="button">All</router-link>
      <router-link :to="{name:'active',params:{content:this.todoList}}" tag="button">Active</router-link>
      <router-link :to="{name:'complete',params:{content:this.todoList}}" tag="button">Complete</router-link> -->
      </el-row>
        
    </div>

  </div>
</template>



<script>

export default {
  name:'App',

  data () {
    return {
      // todoList:[],
      message:'',
      routerList:[
        {name:'all',content:'All'},
        {name:'active',content:'Active'},
        {name:'complete',content:'Complete'},
      ],
      test:''
    }
  },
  methods: {
    addMessage(){
      this.$store.commit('addMessage',this.message)
      // this.todoList.push({content:event.target.value,isChecked:false});
      this.message=''
    },
    checkAllMessage(){
      this.$store.commit('checkAllMessage')
    },
    clearCompleteMessage(){
      this.$store.commit('clearCompleteMessage')
    },
    changRouter(Val){
      this.$router.push({name:Val})
     
      
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body{
    display: flex;
    justify-content: center;
  }

  .title{
    font-size: 100px;
    

  }
</style>
