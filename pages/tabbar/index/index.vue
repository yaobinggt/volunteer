<template>
	<view class="main">
		<topBar></topBar>
		<banner></banner>
		<!-- <testyz></testyz> -->
		<!-- <volunteer class="mt-3"></volunteer> -->
		
		<notice></notice>
		<view class="simulation">
			<view class="box mt-2" v-if="loginStatus">
				<view class="desc mb-2">
					山东省 <text v-if="userInfo.userinfo.elective == ''">您尚未设置成绩</text>
					<text v-if="userInfo.userinfo.elective != ''">{{userInfo.userinfo.elective}}</text>
				</view>
				<view class="score" v-if="userInfo.userinfo.fraction==''">
					您尚未设置成绩
				</view>
				<view class="score" v-if="userInfo.userinfo.fraction !=''">
					{{userInfo.userinfo.fraction}} <text>分</text>
				</view>
				<view class="revise" @click="goSimulate">
					<u-icon name="edit-pen" color="#2b85e4" size="28"></u-icon>设置成绩
				</view>
			</view>
			<view class="box mt-2" v-if="!loginStatus">
				<view class="desc mb-2">
					山东省 <text>尚未选择科目</text>
				</view>
				<view class="score">
					<view>尚未设置成绩</view>
				</view>
				<view class="revise" @click="goSimulate">
					<u-icon name="edit-pen" color="#2b85e4" size="28"></u-icon>设置成绩
				</view>
			</view>
			<view class="sub-btn flex-center p-2 mt-4" @click="goSimulate">
				志愿智能模拟<u-icon name="arrow-right" color="#ffffff" size="28"></u-icon>
			</view>
			<u-modal v-model="modalShow"  @confirm="confirm"  :content="content" :show-cancel-button="true" ></u-modal>
		</view>
		<navicons></navicons>
		<advert></advert>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				form:{
					signature:"123456789"
				},
				form2:{
					signature:"123456789"
				},
				modalShow:false,
				content: '仅限会员使用，点击确认开通会员！'
			}
		},
		computed:{
			...mapState({
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo,
				isMember:state=>state.user.isMember
			})
		},
		onLoad() {
			//location.reload()
		},
		created() {
			this.is();
			this.getUserInfo();
			this.getCarousel();
		},
		methods: {
			is(){
				console.log(this.userInfo.userinfo)
			},
			goSimulate(){
				if(!this.loginStatus){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else if(this.isMember != 1){
					
					this.modalShow=true
				}else{
					uni.navigateTo({
						url:'/pages/phase/phase'
					})
				}
			},
			confirm(){
				uni.navigateTo({
					url:'/pages/user/userVip/userVip'
				})
			},
			//获取用户信息
			getUserInfo(){
				let data=Object.assign(this.form,{});
				this.$api.getUserInfo(data).then(res=>{
					
					console.log(res)
				})
			},
			//获取广告
			getCarousel(){
				let data=Object.assign(this.form2,{});
				this.$api.getCarousel(data).then(res=>{
					
					console.log(res,1111)
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F4F4F5;
}
.main{
	padding-top: 90rpx;
}
.simulation{
	border-radius: 20rpx;
	background-color: #FFFFFF;
	box-shadow: 0 0 30rpx rgba(100,100,100,.1);
	margin: 30rpx;
	padding: 30rpx;
	.box{
		position: relative;
		.revise{
			position: absolute;
			bottom:16rpx;
			right: 0;
			background-color: #ecf5ff;
			padding: 10rpx 20rpx;
			color: #2b85e4;
			border-radius: 20rpx;
		}
		.score{
			font-size: 56rpx;
			color: #ff9900;
			text{
				font-size: 26rpx;
				margin-left: 10rpx;
			}
		}
		.desc{
			text{
				margin-left: 10rpx;
			}
		}
	}
	.sub-btn{
		background-color: #2979ff;
		color: #FFFFFF;
		font-size: 30rpx;
		border-radius: 20rpx;
	}
}
</style>
