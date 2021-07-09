<template>
  <div>
    <input type="checkbox" 
          :v-model="Checked" 
          @click="changeAllChecked()"
          v-if="this.AllList.length">


        <div v-for='(item,index) in ShowList' :key="`${index}${index}`">
          <input type="checkbox"
                 @click="removeListItem(index)"
                 v-model="CompleteLists"
                 :value="item"
                 >
          <span >{{item.content}}</span>
          <button @click="DelListitem(item)">×</button>
        </div>

      <!-- <div v-else-if="CompletePage">
        <div v-for='(item,index) in CompleteList' :key="item">
          <input type="checkbox" @click="RemoveCompleteListsItem(index)">
          <span >{{item}}</span>
          <button @click="DelListitem(item)">×</button>
        </div>
      </div>

      <div v-else>
        <div v-for='(item,index) in AllList' :key="item">
          <input type="checkbox" 
          v-model="CompleteLists" 
          :value="item">
          {{item}}
          <button @click="RemoveAllListItem(index)">×</button>
        </div>
      </div> -->

      <todo-list-btn @isShow="ShowPage" 
                     :CompleteItem="CompleteLists"
                     :AllItem="AllList"
                     v-bind="$attrs"
                     v-if="this.AllList.length">
      </todo-list-btn>
  </div>
  
</template>

<script>
const TodoListBtn = () => import('./TodoListBtn');

export default {
    name:'TodoListPage',
    components: {
        TodoListBtn
    },
    props: {
        list:Array,
    },
    computed: {
      ///创建(Active、Complete)Page的List
      ActiveList(){
        return this.AllList.filter(item=>this.CompleteList.indexOf(item)==-1)
      },
      CompleteList(){
        return this.AllList.filter(item=>this.CompleteLists.indexOf(item)>=0)
      },

    },
    data () {
        return {
            AllList:this.list,
            ShowList:this.list,
            CompleteLists:[],
            Checked:false
        }
    },
    methods: {
        ///显示点击Page
        ShowPage(value){
            if(value=='All'){
              this.ShowList=this.AllList
            }
            else if(value=='Active'){
              this.ShowList=this.ActiveList
            }else{
              this.ShowList=this.CompleteList
            }
            
            
        },
        // ///移除AllList任务
        // RemoveAllListItem(index){
        //   this.AllList.splice(index,1)
        // },
        // ///移除CompleteListsList任务
        // RemoveCompleteListsItem(index){
        //   this.CompleteLists.splice(index,1)
        // },
        removeListItem(index){
          let list=this.ShowList==this.AllList?this.AllList:this.CompleteLists
          this.list.splice(index,1)
        },
        ///移除ActivePage、CompletePage任务
        DelListitem(value){
          let index=this.AllList.indexOf(value);
          this.AllList.splice(index,1)
        },
        ///全选按钮点击
        changeAllChecked() {
        this.CompleteLists=this.Checked?[]:this.AllList
		    }
    },
    ///全选按钮的切换
    watch: {
		    "CompleteLists": function() {
				    this.Checked = this.CompleteLists.length == this.AllList.length ? true:false
			
		}
	}

    
}
</script>

<style>

</style>