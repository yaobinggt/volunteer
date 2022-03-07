<template>
	<view class="voluntaryInfo">
		<u-navbar :is-back="false" title="">
			<view class="flex-1 slot-wrap flex-between px-3">
				<u-icon name="arrow-left" color="#666" size="32" @click="goBack"></u-icon>
				
				<view class="title">
					模拟志愿表详情
				</view>
				<view class="vicon"></view>
			</view>
		</u-navbar>
		<view class="top p-2 mt-2">
			<view class="title mb-1">
				{{info.volunteer_name}}
			</view>
			<text>科目：{{info.elective}}</text><br>
			<text>总分：{{info.fraction}}分</text>
		</view>
		<view class="list p-2">
			<view class="item title flex-between">
				<view class="flex-2">序列</view>
				<view class="flex-5">院校</view>
				<view class="flex-5">专业</view>
			</view>
			<view class="item flex-between" v-for="(item,index) in list" :key="index">
				<view class="flex-2">{{index+1}}</view>
				<view class="flex-5">[{{item.school_code}}]{{item.school_name}}</view>
				<view class="flex-5">[{{item.school_specialty_code}}]{{item.specialty_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					signature:"1234567890",
					id:""
				},
				list:[],
				info:[],
			};
		},
		onLoad(options) {
			this.form.id=options.id
		},
		created() {
			this.getVoluntaryInfo();
		},
		methods:{
			getVoluntaryInfo(){
				let data=Object.assign(this.form,{})
				this.$api.getVoluntaryInfo(data).then(res=>{
					console.log(res)
					this.list=res.list;
					this.info=res.info;	
				})
			},
			goBack(){
				uni.switchTab({
					url:"/pages/tabbar/fill/fill",
					success(res) {
						let page = getCurrentPages().pop();
						if (!page) return;
						page.onLoad(location.reload());
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.slot-wrap{
	.vicon{
		width: 34rpx;
		height: 34rpx;
		display: flex;
		justify-items: center;
		align-items: center;
	}
	.title{
		font-size: 32rpx;
	}
}
.voluntaryInfo{
	.top{
		text{
			font-size: 26rpx;
			color: #606266;
		}
	}
	.list{
		.title{
			color: #212529 !important;
			view{
				padding: 20rpx 0 !important;
			}
		}
		.item{
			color: #606266;
			view{
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 10rpx 0;
				border-right: solid 1rpx #FFFFFF;
			}
			view:nth-child(2){
				padding-left:10rpx ;
				padding-right: 10rpx;
			}
			view:nth-child(3){
				padding-left:10rpx ;
				padding-right: 10rpx;
			}
			//view:nth-of-type(even){ background:#ffcc00;}
		}
		view.item:nth-of-type(odd){
			background-color: #ecf5ff;
		}
	}
}
</style>
