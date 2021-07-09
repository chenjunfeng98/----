<template>
    <div class='btn'>
        <button @click="click('All')" >All</button>
        <button @click="click('Active')" >Active</button>
        <button @click="click('Complete')" >Complete</button>
        <button @click="click('Clear Completed')">Clear Completed</button>
    </div>
</template>

<script>
export default {
    name:'TodoListBtn',
    methods: {
        click(value){
            this.$emit('isShow',value);
        }
    },


}
</script>

<style>
    .btn {
        display: flex;
    }
</style>