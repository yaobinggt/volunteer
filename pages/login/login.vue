<template>
	<view class="alogin">
		<view class="top p-3">
			<view class="title mb-1">
				手机快捷登录
			</view>
			<text class="atext">未注册的手机号将自动创建账号</text>
		</view>
		<view class="main p-3">
			<u-form :rules="rules" ref="uForm" :errorType="errorType">
				<u-form-item :label-position="labelPosition" label="手机号码" prop="phone" label-width="150">
					<u-input placeholder="请输入手机号" v-model="loginFrom.phone" type="text"></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="150">
					<u-input placeholder="请输入验证码" v-model="loginFrom.captache" type="text"></u-input>
					<u-button slot="right" :disabled="disabled" type="success" size="mini" @click="sendCode">{{time>0?(time+'秒后重新获取'):'发送验证码'}}</u-button>
				</u-form-item>
				<u-button type="primary" @click="goLogin" class="mt-5">立即登录</u-button>
			</u-form>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	let timer=null;
	export default {
		data() {
			let that = this;
			return {
				model: {
					phone: '',
					code: '',
				},
				loginFrom:{
					signature:'327435fda0037d603e3f3db81171f13c',
					phone:'',
					captache:''
				},
				captachFrom:{
					signature:'d1d548a6b9e11c22b7128e7ead985c2a',
					type:'1',
				},
				rules: {
					phone: [
						{
							required: true,
							message: '请输入手机号',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						}
					],
					code: [
						{
							required: true,
							message: '请输入验证码',
							trigger: ['change','blur'],
						},
						{
							type: 'number',
							message: '验证码只能为数字',
							trigger: ['change','blur'],
						}
					],
				},
				labelPosition: 'left',
				codeTips: '',
				time:'',
				disabled:false,
				errorType: ['message'],
			}
		},
		
		methods: {
			...mapMutations(['login']),
			codeChange(text) {
				this.codeTips = text;
			},
			
			sendCode(){
				//获取短信验证码
				let data=Object.assign(this.captachFrom,{phone:this.loginFrom.phone});
				this.$api.getCaptach(data).then(data=>{
					uni.showToast({
						title:data,
						icon:"none"
					})
				});
				if(!this.timer){
					this.time=60;
					this.disabled=true;
					this.timer=setInterval(()=>{
						if (this.time > 0 && this.time <= 60) {
						  this.time--;
						} else {
						  this.disabled = false;
						  clearInterval(this.timer);
						  this.timer = null;
						}
					},1000)
				}
			},
			//登录
			goLogin(){
				uni.showLoading({
					title:'登录中…',
					mask:false
				})
				let data=Object.assign(this.loginFrom,{});
				//console.log(data)
				this.$api.doLogin(data).then(res=>{
					console.log(res)
					//状态存储
					this.login(res);
					uni.showToast({
						title:'登录成功',
						icon:'none'
					})
					if(res.userinfo.is_bind){
						uni.switchTab({
						      url: '/pages/tabbar/index/index',
							  success(res) {
								let page = getCurrentPages().pop();
								if (!page) return;
								page.onLoad(location.reload());
							  }
						});
					}else{
						this.goBind()	
					}
				}).finally(()=>{
					uni.hideLoading();
				})
			},
			goBind(){
			 uni.navigateTo({
			 	url:"/pages/login/binding"
			 })	
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.alogin{
	.top{
		.title{
			font-size: 46rpx;
		}
		.atext{
			font-size: 26rpx;
			color: #666;
		}
	}
}
</style>
