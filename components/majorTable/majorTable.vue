<template>
	<view class="major-table">
		<view class="t-head flex p-2">
			<view class="flex-3">专业名称</view>
			<view class="flex-2">最低分/位次</view>
			<view class="flex-1">录取人数</view>
		</view>
		<view class="list">
			<view class="item px-2 py-3" v-for="(item,index) in list" :key="index">
				<view class="content flex pb-2">
					<view class="flex-3">{{item.specialty_name}}</view>
					<view class="flex-2">{{item.lowest_score}}/{{item.lowest_rank}}</view>
					<view class="flex-1">{{item.number_admissions}}</view>
				</view>
				<view class="desc">
					{{item.remark}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"majorTable",
		props:{
			list:{
				type:Array,
				default:[]
			}	
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.major-table{
	.t-head{
		background-color: #efefef;
	}
	.list{
		.item{
			border-bottom: solid 1rpx #eee;
			.desc{
				font-size: 24rpx;
				color: #909399;
			}
			.content{
				view:last-child{
					text-align: center;
				}
			}
		}
	}
}
</style>
