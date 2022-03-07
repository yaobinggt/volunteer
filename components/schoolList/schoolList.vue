<template>
	<view>
		<view class="list-item flex p-3" v-for="(item,index) in college" :key="index">
			<view class="logo"  @click="toDetail(item.id)">
				<!-- <image src="../../static/bj.jpg" mode="widthFix"></image> -->
				<image :src="item.thumbnail" mode="widthFix"></image>
			</view>
			<view class="content px-2"  @click="toDetail(item.id)">
				<view class="title">
					<!-- {{index}}- -->{{item.school_name}}
				</view>
				<view class="tags">
					<u-tag  v-show="item.is_double == 1" text="双一流" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
					<u-tag  v-show="item.is_whether == 1" text="985" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
					<u-tag  v-show="item.is_two == 1" text="211" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
				</view>
				<view class="desc">{{item.district_name}} {{item.affiliation}} {{item.nature_name}} {{item.level_name}} 综合排名:{{item.list_order}}</view>
			</view>
			<view class="button">
				<!-- <u-button size="mini" @click="addId(item,item.id)">{{item.ischeck ? '取消' : '+ 对比'}}</u-button> -->
				<!-- <view  @click="addId(item,item.id)" :class="item.ischeck ? 'active':''">{{item.ischeck ? '取消' : '+ 对比'}}</view> -->
				<view class="more"  @click="toDetail(item.id)">
					查看
				</view>
			</view>
		</view>
		<view class="vs flex-center" v-if="vsShow">
			<text>开始对比</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"schoolList",
		props:{
			college:{
				type:Array,
				default:[]
			},
		},
		data() {
			return {
				vsShow:false,
				vsArr:{}
			};
		},
		methods:{
			toDetail(id){
				uni.navigateTo({
					url:"/pages/schoolDetail/schoolDetail?id="+id
				})
			},
			addId(item){
				if(item.ischeck==false){
					item.ischeck=true
					console.log(this.college)
				}else{
					item.ischeck=false
					console.log(this.college)
				}
			}
		},
		watch:{
			
		}
	}
</script>

<style lang="scss" scoped>
.vs{
	width: 120rpx;
	height: 120rpx;
	background-color: #2979ff;
	border-radius: 50%;
	position: fixed;
	bottom: 120rpx;
	right: 20rpx;
	z-index: 9999;
	color: #FFFFFF; 
}
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
		width: 120rpx;
		
		view{
			border: solid 1rpx #E4E7ED;
			border-radius: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
			padding: 6rpx 0;
		}
		view.active{
			background-color: #007BFF;
			color: #FFFFFF;
		}
	}
}
</style>
