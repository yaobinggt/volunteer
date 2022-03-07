<template>
	<view class="major-top flex">
		<view class="content px-2">
			<view class="title">
				{{majorTop.specialty_name}}
			</view>
			<view class="desc">{{majorTop.one_name}}>{{majorTop.two_name}} {{majorTop.nature_id}} 国标代码:{{majorTop.national_code}}</view>
		</view>
		<!-- <view class="button">
			<u-button shape="circle" size="mini">+ 关注</u-button>
		</view> -->
	</view>
</template>

<script>
	export default {
		name:"majorTop",
		props:{
			majorTop:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.major-top{
	align-items: center;
	border-bottom: solid 1rpx #EEE;
	padding: 40rpx 20rpx;
	.content{
		flex: 1;
		.title{
			font-size:32rpx;
			margin-bottom: 30rpx;
		}
		.tags{
			margin-bottom: 10rpx;
			.isTag{margin-right: 10rpx;}
		}
		.desc{
			font-size: 24rpx;
			color: #909399;
		}
	}
	.button{
		width: 100rpx;
	}
}
</style>
