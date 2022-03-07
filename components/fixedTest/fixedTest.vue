<template>
	<view class="fixed-test">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="item-box" v-show="current == 0">
			<collegeScore></collegeScore>
			
				1111
			
		</view>
		<view class="item-box" v-show="current == 1">
				2222
		</view>
		<view class="item-box" v-show="current == 2">
				333
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"fixedTest",
		data() {
			return {
				list: [{
					name: '院校分数线'
				}, {
					name: '专业分数线'
				}, {
					name: '招生计划',
				}],
				current: 0
			};
		},
		methods:{
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">

</style>
