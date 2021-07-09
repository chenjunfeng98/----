<template>
    <div>
      <div v-for="(item,index) in showPage" 
           :key="`${item}${index}`">
          <input type="checkbox" 
                 v-model="complete" 
                 :value="item.content">
          <span>{{item.content}}</span>
          <button @click="delItem(item)">×</button>
      </div>

      <todo-list-btn @isShow="onShow">
      </todo-list-btn>
    </div>
</template>

<script>
const TodoListBtn = () => import('./TodoListBtn');

export default {
    name:'TodoListPage20',
    components: {
        TodoListBtn
    },
    props: {
        list:Array,
    },
    computed: {
        activeList(){
            return this.allList.filter(item=>this.complete.indexOf(item.content)==-1)
        },
        completeList(){
            return this.allList.filter(item=>this.complete.indexOf(item.content)>=0)
        },
    },
    data () {
        return {
            showPage:this.list,
            allList:this.list,
            complete:[],
        }
    },
    methods: {
        onShow(value){
            if(value=='All'){
                this.$nextTick(()=>this.showPage=this.allList);
            }
            else if(value=='Active'){
                
                this.$nextTick(()=>this.showPage=this.activeList);
            }else{
                this.$nextTick(()=>this.showPage=this.completeList);
                
            }
        },
        delItem(value){
            let index = this.allList.indexOf(value);
            this.allList.splice(index,1)
        }

    }
}
</script>

<style>

</style>