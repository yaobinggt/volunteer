<template>
	<view class="topwarp">
		<view class="topbar bg-main px-2 flex justify-between align-center">
			<view class="city flex justify-between align-center">
				<u-icon name="map" size="22" color="#ffffff"></u-icon>
				<text>山东省</text>
			</view>
			<view class="search flex-center flex-1 ml-3"  @click="goSearch">
				<u-icon name="seach" color="#ffffff" size="28"></u-icon>
				<text class="ml-1">输入要搜索的专业</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"topBarTwo",
		data() {
			return {
				
			};
		},
		methods:{
			goSearch(){
				uni.navigateTo({
					url:"/pages/searchMajor/searchMajor"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.topbar{
	height: 90rpx;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	color: #FFFFFF;
	.search{
		background-color: #FFFFFF;
		height: 60rpx;
		border-radius: 90rpx;
		color: #666;
	}
	.icon{
		
	}
	
}

</style>
