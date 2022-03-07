<template>
	<view>
		<view class="text px-3 pt-3">
			全国大学排名查询，数据与考试院同步更新。
		</view>
		<view class="list p-3">
			<view class="item mb-3 p-2 flex-between" v-for="(item,index) in rankList" :key="index" @click="goRank(item.url)">
				<view class="left">
					<view class="name">
						{{item.name}}
					</view>
					<view class="desc">
						{{item.desc}}
					</view>
				</view>
				<view class="right">
					<u-icon :name="item.icon" color="#2979ff" size="110"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rankList:[
					{
						name:"竞争力",
						desc:"大学竞争力排行榜",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/competeSort/competeSort"
					},
					{
						name:"大学薪酬",
						desc:"中国大学薪酬排行榜",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/salarySort/salarySort"
					},
					{
						name:"专业薪酬",
						desc:"专业薪酬排行榜",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/majorSort/majorSort"
					},
					{
						name:"软科",
						desc:"中国最好大学排名",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/ruankeSort/ruankeSort"
					},
					{
						name:"校友会",
						desc:"大学校友会排行榜",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/alumniSort/alumniSort"
					},
					{
						name:"U.S.News排行榜",
						desc:"世界大学排名",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/usSort/usSort"
					},
					{
						name:"泰晤士",
						desc:"泰晤士世界大学排名",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/twsSort/twsSort"
					},
					{
						name:"QS",
						desc:"QS世界大学排名",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/qsSort/qsSort"
					},
					{
						name:"武书连",
						desc:"武书连中国大学排名",
						icon:"/static/navicons/navicons5.png",
						url:"/pages/ranking/wushuSort/wushuSort"
					}
				]
			}
		},
		methods: {
			goRank(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F3F4F6;
}
.list{
	.item{
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 0 10rpx rgba(130,130,130,.1);
		.name{
			font-size: 32rpx;
			margin-bottom: 10rpx;
		}
		.desc{
			color: #999;
		}
	}
}
</style>
