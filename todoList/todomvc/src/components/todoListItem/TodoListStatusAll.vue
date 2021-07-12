<template>
    <div>
        <div v-for="item in list" :key="item">
        <button>√</button>
        <span>{{item}}</span>
        <button>×</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'TodoListStatusAll',
    data () {
        return {
            list:this.$route.query
        }
    }
}
</script>

<style>

</style>