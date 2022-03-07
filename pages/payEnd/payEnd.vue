<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					signature:"1234567890",
					orderid:""
				},
				payUrl:""
			};
		},
		onLoad(option) {
			let forms=JSON.parse(option.dataItem);
			console.log(forms);
			this.form.orderid=forms.orderid;
			this.payUrl=forms.url
		},
		created() {
			this.goAlipay()
			this.queryOrder();
		},
		methods:{
			//查询订单
			queryOrder(){
				let data=Object.assign(this.form,{});
				let timer=setInterval(()=>{
					this.$api.queryOrder(data).then(res=>{
						
					})
				},2000)
				
			},
			//跳转支付
			goAlipay(){
				this.isMobile();
			},
			isMobile() {
				// 跳转外部链接h5
				// #ifdef H5
				window.location.href = this.payUrl;
				// #endif
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.payUrl) //不需要拼接
				// plus.runtime.openURL(`http://${jumpUrl}`)//需要拼接
				// #endif
			}
		}
	}
</script>

<style lang="scss">

</style>
