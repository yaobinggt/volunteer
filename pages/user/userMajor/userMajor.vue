<template>
	<view>
		<view class="list-item flex p-3" v-for="(item,index) in 23" :key="index" @click="toDetail(item.id)">
			<view class="content px-2">
				<view class="title">
					专业名称添加中
				</view>
				
				<view class="desc">国标代码：12345</view>
			</view>
			<view class="button">
				<u-button shape="circle" size="mini">已关注</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.list-item{
	align-items: center;
	border-bottom: solid 1rpx #E4E7ED;
	.logo{
		width: 110rpx;
		height: 110rpx;
		image{
			width: 100%;
		}
	}
	.content{
		flex: 1;
		.title{
			font-size:32rpx;
			margin-bottom: 10rpx;
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
