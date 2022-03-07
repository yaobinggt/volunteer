<template>
	<view class="major-ranking">
		
		<view class="tab-head flex-center">
			<text>开设院校</text>
			<text>专业等级</text>
		</view>
		
		<view class="tab-body">
			<view class="item flex-center" v-for="(item,index) in majorRanking" :key="index">
				<text>{{item.school_name}}</text>
				<text>{{item.order_level}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"majorRanking",
		props:{
			majorRanking:{
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
.major-ranking{
	.tab-head{
		background-color: #efefef;
		height: 80rpx;
		text{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items:center;
		}
	}
	.tab-body{
		.item{
			height: 80rpx;
			border-bottom: solid 1rpx #E4E7ED;
			text{
				flex: 1;
				display: flex;
				justify-content: center;
				align-items:center;
			}
		}
	}
}
</style>
