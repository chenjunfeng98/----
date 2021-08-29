<template>
	<view>
		<view v-html="zhihuStory.body"></view>
	</view>
</template>

<script>
	
	export default {
		components:{
			ZhihuDailyFooter
		},
		data() {
			return {
				zhihuStory: ''
			}
		},
		async onLoad(res) {
			const storyData = await this.$historyRequest({
				url:`${res.storyid}`
			})
			this.zhihuStory = storyData.data
		}
		
	}
</script>

<style>
</style>
