<template>
	<view>
		<u-section :title="name" :show-line="false" sub-title="更多" class="p-3 college-title"></u-section>
		<view class="introduce px-3">
			<view class="item flex-between py-2">
				<view class="left">
					<u-icon name="clock" color="#2979ff" size="26"></u-icon>
					<text>创办时间</text>
				</view>
				<view class="right">
					<text>{{collegeIntroduce.create_time}}年</text>
				</view>
			</view>
			<view class="item flex-between py-2">
				<view class="left">
					<u-icon name="integral" color="#2979ff" size="26"></u-icon>
					<text>硕博数量</text>
				</view>
				<view class="right">
					<text>硕士点：{{collegeIntroduce.master_number}}，博士点：{{collegeIntroduce.phd_number}}</text>
				</view>
			</view>
			<view class="item flex-between py-2">
				<view class="left">
					<u-icon name="phone" color="#2979ff" size="26"></u-icon>
					<text>联系电话</text>
				</view>
				<view class="right">
					<text>{{collegeIntroduce.recruitment_phone}}</text>
				</view>
			</view>
			<view class="item flex-between py-2">
				<view class="left">
					<u-icon name="tags" color="#2979ff" size="26"></u-icon>
					<text>院校归属</text>
				</view>
				<view class="right">
					<text>{{collegeIntroduce.affiliation}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeIntroduce",
		props:{
			collegeIntroduce:{
				type:Object,
				default:()=>{}
			},
			name:{
				type:String,
				default:"sss"
			},
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.introduce{
	.item{
		border-bottom: solid 1rpx #eeeeee;
		.left{
			text{
				margin-left: 5rpx;
			}
		}
	}
}
</style>
