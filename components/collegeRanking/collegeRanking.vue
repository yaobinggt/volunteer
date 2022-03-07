<template>
	<view class="college-ranking">
		<u-section title="大学排名" :show-line="false" :right="false" class="p-3 college-title"></u-section>
		<view class="ranking p-2">
			<view class="item py-2 pl-4">
				<u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon>
				<view class="content ml-1">
					<view>综合排名</view>
					<text>第{{collegeRanking.list_order}}名</text>
				</view>
			</view>
			<view class="item py-2 pl-4">
				<u-icon name="/static/navicons/navicons1.png" :size="90"></u-icon>
				<view class="content ml-1">
					<view>校友会排名</view>
					<text>第1{{collegeRanking.alumni_order}}名</text>
				</view>
			</view>
			<view class="item py-2 pl-4">
				<u-icon name="/static/navicons/navicons2.png" :size="90"></u-icon>
				<view class="content ml-1">
					<view>武书连排名</view>
					<text>第{{collegeRanking.wushu_order}}名</text>
				</view>
			</view>
			<view class="item py-2 pl-4">
				<u-icon name="/static/navicons/navicons6.png" :size="90"></u-icon>
				<view class="content ml-1">
					<view>软科排名</view>
					<text>第{{collegeRanking.ruanke_order}}名</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeRanking",
		props:{
			collegeRanking:{
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
.college-ranking{
	.ranking{
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		.item{
			width: 50%;
			display: flex;
			align-items: center;
			text{
				color: #999;
			}
		}
	}
}
</style>
