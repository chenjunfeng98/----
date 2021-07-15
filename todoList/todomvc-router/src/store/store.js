import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        todoList:[],
        ischeckedAll:true,
    },
    mutations: {
        addMessage(state,Val){
            state.todoList.push({content:Val,isChecked:false})
        },
        changeChecked(state,Val){
            let index = state.todoList.indexOf(Val);
            state.todoList[index].isChecked = !state.todoList[index].isChecked
        },
        reomveMessage(state,Val){
            let index = state.todoList.indexOf(Val);
            state.todoList.splice(index,1)
        },
        checkAllMessage(state){
            state.todoList.forEach(item=>item.isChecked = state.ischeckedAll);
            state.ischeckedAll = !state.ischeckedAll
        },
        clearCompleteMessage(state){
            let completeList = state.todoList.filter(v=>v.isChecked);
            completeList.forEach(item=>state.todoList.splice(state.todoList.indexOf(item),1))
        
        }
    },
    getters: {
        activeList(state){
            return state.todoList.filter(item=>!item.isChecked)
        },
        completeList(state){
            return state.todoList.filter(item=>item.isChecked)
        }
    }
})

export default store