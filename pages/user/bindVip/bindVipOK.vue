<template>
	<view class="flex-column flex-center mt-5 pt-5">
		<u-icon name="checkmark-circle" color="#18b566" size="56"></u-icon>
		<view class="font-md mt-2 mb-5">
			恭喜您！会员绑定成功!请重新登录系统！
		</view>
		<view class="text-primary" @click="relist">
			重新登录
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations(['loginOut']),
			goHome(){
				uni.switchTab({
					url:"/pages/tabbar/index/index"
				})
			},
			relist(){
				this.loginOut();
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
