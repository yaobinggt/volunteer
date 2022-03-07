<template>
	<view>
		<!--测试 -->
		<view class="top" style="height: 200rpx; background-color: #0056B3;">
			xsaxsasaxsa
		</view>
		<view class="fied-tabs">
			<u-sticky offset-top="0">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</u-sticky>
			<view class="fied-box" v-show="current == 0">
				111
			</view>
			<view class="fied-box" v-show="current == 1">
				222
			</view>
			<view class="fied-box" v-show="current == 2">
				<fixedTest></fixedTest>
			</view>
			<view class="fied-box" v-show="current == 3">
				333
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '主页'
				}, {
					name: '介绍'
				}, {
					name: '录取',
				},{
					name: '资讯',
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style>

</style>
