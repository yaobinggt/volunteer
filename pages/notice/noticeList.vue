<template>
	<view class="notice-list p-3">
		<view class="item p-2 mb-2" v-for="(item,index) in list" :key="index" @click="goNoticeInfo(item.id)">
			<view class="title mb-2">
				{{item.post_title}}
			</view>
			<view class="time mb-2">
				{{$u.timeFormat(item.published_time, 'yyyy年mm月dd日 hh时MM分')}}
			</view>
			<view class="excerpt">
				{{item.post_excerpt}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					page:'1',
					number:'10',
					signature:'72947e99b7ceb35436cd241443f3e70a',
				},
				list:[]
			}
		},
		onLoad() {
			this.getNoticeList()	
		},
		methods: {
			getNoticeList(){
				let d=Object.assign(this.from,{});
				this.$api.getNoticeList(d).then(data=>{
					this.list=data.list
				})
			},
			goNoticeInfo(id){
				uni.navigateTo({
					url:"/pages/notice/noticeInfo?id="+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
uni-page-body{
	height: 100%;
	background-color: #f5f6f7;
}
.notice-list{
	
	.item{
		background-color: #FFFFFF;
		border-radius: 20rpx;
		.title{
			font-size: 32rpx;
		}
		.time{
			font-size: 24rpx;
			color: #909399;
		}
		.excerpt{
			font-size: 28rpx;
			color: #606266;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}
}
</style>
