<template>
	<view class="topwarp">
		<view class="topbar bg-main px-2 flex justify-between align-center">
			<view class="city flex justify-between align-center">
				<u-icon name="map" size="22" color="#ffffff"></u-icon>
				<text>山东省</text>
			</view>
			<view class="search flex-center flex-1 ml-3" @click="goSearch">
				<u-icon name="seach" color="#ffffff" size="28"></u-icon>
				<text class="ml-1">请输入大学</text>
			</view>
			<!-- <view class="icon">
				<u-icon name="list" color="#ffffff" size="28" @click="show = true;"></u-icon>
			</view> -->
		</view>
		<u-popup mode="right" width="80%" v-model="show" class="top-drawer">
			<scroll-view style="height: 100%;" scroll-y="true">
				<view class="drawer-warp p-3">
					<view class="top-user flex-between">
						<view class="user-btn">登录/注册</view>
						<u-icon name="close-circle" size="28" color="#999999" @click="show=false"></u-icon>
					</view>
					<view class="nav-list">
						<view hover-class="hover-view">
							<text class="iconfont icon-shouye"></text>
							<text>首页</text>
						</view>
					</view>
					<view class="nav-list">
						<view hover-class="hover-view">
							<text class="iconfont icon-xuexiao"></text>
							<text>院校库</text>
						</view>
						<view hover-class="hover-view">
							<text class="iconfont icon-zhuanye"></text>
							<text>专业库</text>
						</view>
					</view>
					<view class="nav-list">
						<view hover-class="hover-view">
							<text class="iconfont icon-luqupicixian"></text>
							<text>批次线</text>
						</view>
						<view hover-class="hover-view">
							<text class="iconfont icon-ziyuan"></text>
							<text>一分一段</text>
						</view>
						<view hover-class="hover-view">
							<text class="iconfont icon-jihua"></text>
							<text>招生计划</text>
						</view>
					</view>
					<view class="nav-list">
						<view hover-class="hover-view">
							<text class="iconfont icon-fuhefenxi"></text>
							<text>投档线</text>
						</view>
						<view hover-class="hover-view">
							<text class="iconfont icon-wenzhang1"></text>
							<text>招生简章</text>
						</view>
						<view hover-class="hover-view">
							<text class="iconfont icon-wenti"></text>
							<text>问题反馈</text>
						</view>
					</view>
					<view class="nav-list">
						<view hover-class="hover-view">
							<text class="iconfont icon-xuexiao1"></text>
							<text>知分选大学</text>
						</view>
					</view>
					<view class="nav-list">
						<view hover-class="hover-view">
							<text class="iconfont icon-vip-card-o"></text>
							<text>开通vip</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</u-popup>
	</view>
	
</template>

<script>
	export default {
		name:"topBar",
		data() {
			return {
				show:false
			};
		},
		methods: {
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			},
			goSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.topbar{
	height: 90rpx;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	color: #FFFFFF;
	.search{
		background-color: #FFFFFF;
		height: 60rpx;
		border-radius: 90rpx;
		color: #666;
	}
	.icon{
		
	}
	
}
.top-drawer{
	color: #333333;
	.drawer-warp{
		.nav-list{
			height: 90rpx;
			display: flex;align-items: center;
			view{
				width: 100%;
				.iconfont{
					margin-right: 6rpx;
				}
			}
			.hover-view{
				color: #0056B3;
			}
		}
		.nav-list:nth-child(3){
			view{
				display: inline-block;
				width:33.333%;
			}
		}
		.nav-list:nth-child(4){
			view{
				display: inline-block;
				width:33.333%;
			}
		}
		.nav-list:nth-child(5){
			view{
				display: inline-block;
				width:33.333%;
			}
		}
		.top-user{
			margin-bottom: 40rpx;
			.user-btn{
				padding: 20rpx 30rpx;
				color: #FFFFFF;
				background-color: #ff6600;
				border-radius: 100rpx;
			}
			uni-icons{
				font-size: 24rpx;
				color: #999999;
			}
		}
		
	}
}
</style>
