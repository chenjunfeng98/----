<template>
    <div>
      <div v-for="(item,index) in showPage" 
           :key="`${item}${index}`">

          <input type="checkbox" 
                 :checked='item.isClicked'
                 @click="handleChange(item)"
                 :key="item">

          <span>{{item.content}}</span>

          <button @click="delItem(item)">×</button>
      </div>

      <todo-list-btn @isShow="onShow" @clear="clearComplete">
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
    data () {
        return {
            showPage:this.list,
            showType: 'All',
        }
    },
    methods: {
        handleChange(item){
            item.isClicked = !item.isClicked;
            this.getDisplayData()
        },

        onShow(value){
            this.showType=value;
            this.getDisplayData()
        },
        delItem(value){
            let index = this.list.indexOf(value);
            this.list.splice(index,1);
            this.getDisplayData()
        },
        clearComplete(){
            let isClick = this.list.filter(v=>v.isClicked==1);
            isClick.forEach(item=>this.list.splice(this.list.indexOf(item),1))
            this.getDisplayData()
        },
        getDisplayData(){
        this.showPage =
        this.showType == 'All'
          ? this.list
          : this.list.filter(
              v => v.isClicked ==(this.showType=='Complete'))

        }
    }
}
</script>

<style>

</style>