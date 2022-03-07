<template>
	<view class="plan p-3">
		<view class="button flex-center p-2 mb-3 rounded" hover-class="button-hover" @click="goSimulate">
			<u-icon name="edit-pen-fill" color="#ffffff" size="28" class="mr-1"></u-icon> 新建志愿
		</view>
		<view class="login-show flex-center my-5 py-5" v-if="loginShow">
			您未登录，请先<text @click="goLogin" style="color: #2499FF; padding-left: 10rpx;">登录账号</text>
		</view>
		<view class="list">
			<view class="item flex p-2 mb-2" v-for="(item,index) in list" :key="index" @click="goInfo(item.id)">
				<view class="icon mr-2">
					<u-icon name="../../../static/planicon.png" size="100"></u-icon>
				</view>
				<view class="desc">
					<view class="title">
						<text>({{item.batch}})</text>
						{{item.volunteer_name}}
					</view>
					<view class="itext">
						保存时间：{{item.create_time}}
					</view>
				</view>
				<u-tag text="估分" type="success" mode="dark" class="tag" />
			</view>
		</view>
		<u-modal v-model="modalShow"  @confirm="confirm"  :content="content" :show-cancel-button="true" ></u-modal>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				form:{
					signature:"2121313",
					page:"1",
					number:"50",
				},
				loginShow:false,
				modalShow:false,
				content: '仅限会员使用，点击确认开通会员！',
				list:[]
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
			this.is();
		},
		created() {
			this.getList()
		},
		methods: {
			confirm(){
				uni.navigateTo({
					url:"/pages/user/userVip/userVip"
				})
			},
			is(){
				console.log(this.loginStatus)
			},
			goPhase(){
				uni.navigateTo({
					url:"/pages/phase/phase"
				})
			},
			goInfo(id){
				uni.navigateTo({
					url:"/pages/voluntaryInfo/voluntaryInfo?id="+id
				})
			},
			getList(){
				if(!this.loginStatus){
					this.loginShow=true
				}else{
					this.loginShow=false;
					let data=Object.assign(this.form,{});
					this.$api.getMyVoluntary(data).then(res=>{
						console.log(res)
						this.list=res.list;
					})
				}
				
			},
			goLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})	
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
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F4F4F5;
}
.button{
	background-color: #2979FF;
	color: #FFFFFF;
	font-size: 30rpx;
}
.button-hover{
	background-color: #0062CC;
}
.list{
	.item{
		background-color: #FFFFFF;
		border-radius: 10rpx;
		position: relative;
		align-items: center;
		.tag{
			position: absolute;
			top: 20rpx;
			right: 20rpx;
		}
		.desc{
			.title{
				text{
					color: #2979FF;
					margin-right: 5rpx;
				}
			}
			.itext{
				margin-top: 10rpx;
				font-size: 24rpx;
				color: #909399;
			}
		}
	}
}
.fill{
	position: relative;
	padding-top: 90rpx;
	.i-position{
		position: relative;
		top: -40rpx;
	}
}
</style>
