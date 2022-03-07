<template>
	<view class="school-top flex">
		<view class="logo">
			<image src="../../static/bj.jpg" mode="widthFix"></image>
		</view>
		<view class="content px-2">
			<view class="title">
				{{schoolTop.school_name}}
			</view>
			<view class="tags">
				<u-tag  v-show="schoolTop.is_double == 1" text="双一流" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
				<u-tag  v-show="schoolTop.is_whether == 1" text="985" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
				<u-tag  v-show="schoolTop.is_two == 1" text="211" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
			</view>
			<view class="desc">{{schoolTop.district_name}} {{schoolTop.affiliation}} {{schoolTop.nature_id}} {{schoolTop.level_id}} 排名: {{schoolTop.list_order}}</view>
		</view>
		<!-- <view class="button">
			<u-button shape="circle" size="mini">+ 关注</u-button>
		</view> -->
	</view>
</template>

<script>
	export default {
		name:"schoolTop",
		props:{
			schoolTop:{
				type:Object,
				default:{}
			}
		},
		created() {
				console.log(this.schoolTop)
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.school-top{
	align-items: center;
	border-bottom: solid 1rpx #EEE;
	padding: 20rpx;
	.logo{
		width: 110rpx;
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
