<template>
	<view class="notice flex">
		<view class="">
			公告
		</view>
		<u-notice-bar mode="vertical" type="none" :volume-icon="false" :list="list" class="flex-1"></u-notice-bar>
		<navigator url="/pages/notice/noticeList" hover-class="navigator-hover">
			更多>
		</navigator>
	</view>
</template>

<script>
	export default {
		name:"notice",
		data() {
			return {
				from:{
					signature:'6aebe9ee0be119a154f81abc165ef8bd',
					page:"1",
					number:'10'
				},
				list:[]
			};
		},
		created(){
			this.getNotice()
		},
		methods:{
			getNotice(){
				let data=Object.assign(this.from,{});
				this.$api.getNoticeList(data).then(data=>{
					console.log(data)
						//let newArr=[];
						data.list.forEach(item=>{
							this.list.push(item.post_title);
						})
						//this.list=newArr;
					console.log(this.list)
				});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.notice{
	height: 80rpx;
	display: flex;
	align-items: center;
	padding: 0 20rpx;
	background-color: #fcfcfc;
}
</style>
