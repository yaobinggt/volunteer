<template>
	<view>
		<u-select v-model="show" mode="single-column" :list="list" @confirm="confirm" class="score-select"></u-select>
		<u-button @click="show = true">打开</u-button>
		<view class="fiedd">
			sasas
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeScore",
		data() {
			return {
				show: false,
				list: [
					{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
				selectDefault:[]
			}
		},
		methods:{
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">

</style>
