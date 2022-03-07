<template>
	<view>
		<view class="list px-3">
			<view class="item flex-between py-3" @click="goAbout">
				<text>关于我们</text>
				<u-icon name="arrow-right" color="#999" size="28"></u-icon>
			</view>
			<view class="item flex-between py-3" @click="goAgreement">
				<text>用户协议</text>
				<u-icon name="arrow-right" color="#999" size="28"></u-icon>
			</view>
			<view class="item flex-between py-3" @click="goPrivacy">
				<text>隐私声明</text>
				<u-icon name="arrow-right" color="#999" size="28"></u-icon>
			</view>
			<view class="item flex-between py-3" @click="goDisclaimer">
				<text>免责声明</text>
				<u-icon name="arrow-right" color="#999" size="28"></u-icon>
			</view>
		</view>
		<view class="quit mt-3 p-3 flex-center" v-if="loginStatus" @click="loginOutEvent">
			<text>退出登录</text>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState({
				loginStatus:state=>state.user.loginStatus
			})
		},
		methods:{
			...mapMutations(['loginOut']),
			loginOutEvent(){
				this.loginOut()
				uni.showToast({
					title:'退出成功',
					icon:'none'
				})
				uni.navigateBack({
					delta:1
				})
			},
			goAbout(){
				uni.navigateTo({
					url:"/pages/user/userSetting/about"
				})
			},
			goAgreement(){
				uni.navigateTo({
					url:"/pages/user/userSetting/agreement"
				})
			},
			goDisclaimer(){
				uni.navigateTo({
					url:"/pages/user/userSetting/disclaimer"
				})
			},
			goPrivacy(){
				uni.navigateTo({
					url:"/pages/user/userSetting/privacy"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F4F4F5;
}
.list{
	background-color: #FFFFFF;
	.item{
		border-bottom: solid 1rpx #E4E7ED;
	}
	view.item:last-child{
		border-bottom: none;
	}
}
.quit{
	background-color: #FFFFFF;
}
</style>
