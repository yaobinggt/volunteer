<template>
	<view class="user">
		<view class="user-header flex py-3 mx-3" v-if="loginStatus">
			<view class="left flex flex-1">
				<u-avatar :src="bsrc" size="120" mode="circle"></u-avatar>
				<view class="info pl-2">
					<text>{{userInfo.userinfo.phone}}</text>
					<view class="desc" v-if="userInfo.userinfo.elective==''">
						您尚未设置成绩
					</view>
					<view class="desc" v-if="userInfo.userinfo.elective !=''">
						山东 {{userInfo.userinfo.elective}} {{userInfo.userinfo.fraction}}分
					</view>
				</view>
			</view>
			<view class="right flex">
				<u-icon name="arrow-right" color="#999999" size="22"></u-icon>
			</view>
		</view>
		
		<view class="user-header flex py-3 mx-3" v-if="!loginStatus" @click="goLogin()">
			<view class="left flex flex-1">
				<u-avatar size="120" mode="circle"></u-avatar>
				<view class="info pl-2">
					<text>登录/注册</text>
					<view class="desc">
						点击登录 享受更多精彩信息
					</view>
				</view>
			</view>
			<view class="right flex">
				<u-icon name="arrow-right" color="#999999" size="22"></u-icon>
			</view>
		</view>
		<view class="vip flex-between p-3 mx-3" @click="goVip">
			<view class="left flex">
				<view class="vip-icon mr-1">
					<u-icon name="integral-fill" color="#ff9900" size="28"></u-icon>
				</view>
				高考志愿VIP
			</view>
			<view class="right">
				立即开通
				<u-icon name="arrow-right" color="#ff9900" size="22"></u-icon>
			</view>
		</view>
		<view class="group mx-1 mt-2">
			<u-cell-group :border="false">
				<u-cell-item :border-bottom="false" icon="integral-fill" title="绑定会员卡号" @click="vipBind"></u-cell-item>
				<u-cell-item :border-bottom="false" v-for="(item,index) in userGroup" :key="index" :icon="item.icon" :title="item.title" @click="goPage(item.url)"></u-cell-item>
			</u-cell-group>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				gsrc:"/static/gril-header.png",
				bsrc:"/static/boy-header.png",
				userGroup:[
					// {
					// 	icon:"file-text-fill",
					// 	title:"我的成绩",
					// 	url:"/pages/user/userSuccess/userSuccess"
					// },
					// {
					// 	icon:"edit-pen-fill",
					// 	title:"我的志愿",
					// 	url:"/pages/user/userVolunter/userVolunter"
					// },
					// {
					// 	icon:"home-fill",
					// 	title:"关注院校",
					// 	url:"/pages/user/userCollege/userCollege"
					// },
					// {
					// 	icon:"bookmark-fill",
					// 	title:"关注专业",
					// 	url:"/pages/user/userMajor/userMajor"
					// },
					
					// {
					// 	icon:"integral-fill",
					// 	title:"绑定会员卡号",
					// 	url:"/pages/user/bindVip/bindVip"
					// },
					{
						icon:"info-circle-fill",
						title:"用户反馈",
						url:"/pages/user/userFeedback/userFeedback"
					},
					{
						icon:"setting-fill",
						title:"系统设置",
						url:"/pages/user/userSetting/userSetting"
					}
				],
				
			}
		},
		onLoad() {
			
		},
		computed:{
			...mapState({
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo
			})
		},
		created() {
			this.conso();
		}, 
		methods: {
			conso(){
				console.log(this.userInfo)
			},
			goLogin(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			goVip(){
				if(this.loginStatus){
					uni.navigateTo({
						url:'/pages/user/userVip/userVip'
					})
				}else{
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
				
			},
			goPage(url){
				uni.navigateTo({
					url:url
				})
			},
			vipBind(){
				if(this.loginStatus){
					uni.navigateTo({
						url:"/pages/user/bindVip/bindVip"
					})
				}else{
					// uni.showToast({
					//     title: "您未登录，请先登录！",
					// 	icon:"none"
					// });
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.user{
	.user-header{
		.left{
			align-items: center;
		}
		.right{
			width: 30rpx;
			align-items: center;
		}
	}
	.vip{
		background-color: #fdf6ec;
		border-radius: 20rpx;
		.right{
			color: #ff9900;
			
		}
	}
}
</style>
