<template>
	<view>
		<view class="majorflod" v-for="(item,index) in majorList" :key="index">
			<u-gap height="20" bg-color="#eee"></u-gap>
			<view class="title px-3 pt-2 pb-1">
				{{item.major_name}}
			</view>
			<view class="collapse px-3 py-2" v-for="(ite,inde) in item.son_major" :key="inde">
				<view class="top flex-between"  @click="ite.status = !ite.status">
					<view class="name">{{ite.major_name}}</view>
					<view class="">
						<text>{{ite.count}}个专业</text>
						<u-icon name="arrow-right" color="#666" size="28"></u-icon>
					</view>
				</view>
				<view class="list pt-2" v-show="ite.status" >
					<view class="item flex-between py-2" @click="goMajorDetail(it.id)" v-for="(it,ind) in ite.grand_son" :key="ind">
						<view class="item-title">{{it.specialty_name}}</view>
						<view class="item-code">
							<text>{{it.code}}</text><u-icon name="arrow-right" color="#666" size="28"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"majorCollapse",
		props:{
			majorList:Array,
		},
		data() {
			return {
				show:false
			};
		},
		methods:{
			goMajorDetail(id){
				uni.navigateTo({
					url:'/pages/majorDetail/majorDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.majorflod{
	.title{
		font-size: 32rpx;
		color: #212529;
	}
	.collapse{
		.top{
			color: #343A40;
			font-size: 28rpx;
		}
		.list{
			.item{
				color: #606266;
				font-size: 26rpx;
				border-top: solid 1rpx #eee;
			}
		}
	}
}
</style>
