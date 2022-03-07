<template>
	<view class="advert">
		<view class="ad-item">
			<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
				<image src="../../static/ad1.png" mode="widthFix"></image>
			</navigator>
		</view>
		<view class="ad-item">
			<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
				<image src="../../static/ad2.png" mode="widthFix"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name:"advert",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.advert{
	padding: 0 30rpx;
	.ad-item{
		margin-bottom: 20rpx;
		image{
			width: 100%;
			
		}
	}
}
</style>
