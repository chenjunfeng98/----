<template>
    <div class='btn'>
        <button @click="click" value='All'>All</button>
        <button @click="click" value='Active'>Active</button>
        <button @click="click" value='Complete'>Complete</button>
        <button @click="clear">Clear Completed</button>
    </div>
</template>

<script>
export default {
    name:'TodoListBtn',
    props:{
        CompleteItem:Array,
        AllItem:Array
    },
 
    methods: {
        click(event){
            this.$emit('isShow',event.target.value);
        },
        clear(){
            this.CompleteItem.forEach(item=>{
                var index=this.AllItem.indexOf(item);
                this.AllItem.splice(index,1)
            })
            
          
        }
    },


}
</script>

<style>
    .btn {
        display: flex;
    }
</style>