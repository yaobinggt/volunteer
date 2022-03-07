<template>
	<view class="p-3">
		<u-form :model="form" ref="uForm" class="bind-form">
			<u-form-item  prop="card_accound">
				<u-input v-model="form.card_accound" :type="type" :border="border" placeholder="请输入会员卡号" />
			</u-form-item>
			<u-form-item  prop="card_pass">
				<u-input v-model="form.card_pass" :type="type" :border="border" placeholder="请输入卡号密码" />
			</u-form-item>
			
		</u-form>
		<u-button type="primary" @click="submit" class="mb-2">提交</u-button>
		<view class="buy-vip flex-between mt-5 px-2">
			<text>没有会员卡号和密码?</text>
			<view class="btn-buy" @click="goVip">
				购买VIP
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
					card_accound:"",
					card_pass:""
				},
				rules:{
					card_accound:[
						{ 
							required: true, 
							message: '请输入会员卡号', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						},
						{
							min: 12, 
							message: '请输入会员卡号', 
							
						}
					],
					card_pass:[
						{ 
							required: true, 
							message: '请输入正确的卡号密码', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						},
						{
							min: 10,
							message: '简介不能少于5个字', 
							
						}
						
					]
				},
				type: 'text',
				border: true,
			};
		},
		methods:{
			bindVip(){
				let data=Object.assign(this.form,{})
				this.$api.bindVip(data).then(res=>{
					// uni.showToast({
					//     title: "VIP绑定成功！",
					// 	icon:"none"
					// });
					// setInterval(function(){
					// 	uni.switchTab({
					// 		url:"/pages/tabbar/index/index"
					// 	})
					// },500)
					
					uni.navigateTo({
						url:"/pages/user/bindVip/bindVipOK"
					})
				})
			},
			goVip(){
				uni.navigateTo({
					url:"/pages/user/userVip/userVip"
				})
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.bindVip();
					} else {
						console.log('验证失败');
					}
				});
			},
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss"scoped>
.bind-form{
	/deep/.u-form-item__message{
		padding-left: 0 !important;
	}
}
	
.buy-vip{
	text{
		color: #999;
	}
	.btn-buy{
		color: #2499FF;
	}
}
</style>
