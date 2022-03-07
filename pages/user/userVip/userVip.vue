<template>
	<view>
		<view class="top px-3 pt-5 pb-2">
			<view class="title">
				开通查志愿VIP
			</view>
			<view class="desc">
				数据精准权威、录取变化一目了然
			</view>
		</view>
		<view class="paytile px-3 mt-3 font-md">
			请选择VIP
		</view>
		<view class="vip-list flex p-3">
			<view class="item" v-for="(item,index) in price" :key="index" @click="changebox(item,index)" :class="{active:num==index}">
				<view class="title">
					{{item.name}}
				</view>
				<view class="price">
					<text>￥</text>{{item.money}}
				</view>
				<!-- <view class="tip">
					{{item.desc}}
				</view> -->
			</view>
			
		</view>
		<view class="pay-method">
			<view class="paytile px-3 mt-3 mb-2 font-md">
				请选择支付方式
			</view>
			<view class="item flex-between p-3" v-for="(item,index) in pay" :key="index" @click="changePay(item,index)" :class="{active:paynum==index}">
				<view class="left flex">
					<u-icon size="52" :name="item.photo_url"></u-icon>
					<view class="pay-name ml-1">
						{{item.pay_name}}
					</view>
				</view>
				<view class="choose">
					<u-icon class="icon" name="checkmark-circle-fill" color="" size="32" ></u-icon>
				</view>
				
			</view>
		</view>
		<view class="pay-button p-3">
			<u-button type="primary" :disabled="disabled" shape="circle" @click="createOrder">确定购买</u-button>
		</view>
		<view class="warning p-3 text-warning">
			注：<text>VIP购买成功以后，账号和密码将以短信的方式发送到您的手机上，请注意查收！收到账号和密码请前往--绑定会员卡号，前去绑定！</text>
		</view>
		<!-- <view class="bottom">
			<view class="item flex-between" v-for="(item,index) in price" :key="index" v-show="num==index">
				<view class="left pl-3">
					价格：<text>￥{{item.money}}</text>
				</view>
				<view class="buy-btn px-5 flex-center">
					立即开通
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					signature:"1234567890"
				},
				order:{
					signature:"1234567890",
					pay_type:"",
					goods_id:""
				},
				num:null,
				paynum:null,
				price:[],
				pay:[],
				disabled:true
			};
		},
		created() {
			this.getGoods();
		},
		methods:{
			changebox(item,index){
				this.num=index;
				this.order.goods_id=item.id;
				if(this.order.pay_type && this.order.goods_id){
					this.disabled=false;
				}
				console.log(this.order)
			},
			changePay(item,index){
				this.paynum=index;
				this.order.pay_type=item.pay_type;
				if(this.order.pay_type && this.order.goods_id){
					this.disabled=false;
				}
				console.log(this.order)
			},
			//获取价格列表
			getGoods(){
				let data=Object.assign(this.form,{})
				this.$api.getGoods(data).then(res=>{
					console.log(res)
					this.price=res.list;
					this.pay=res.pay_method;
				})
			},
			//生成订单
			createOrder(){
				let data=Object.assign(this.order,{});
				this.$api.createOrder(data).then(res=>{
					let endData=res;
					
						uni.navigateTo({
							url:"/pages/payEnd/payEnd?dataItem="+JSON.stringify(endData)
						})
					
				})
			},
			//跳转最后支付界面
			goPayEnd(){
				let data={
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F4F4F5;
}
.vip-list{
	.item{
		flex: 1;
		border-radius: 20rpx;
		overflow: hidden;
		border: solid 2rpx #E4E7ED;
		margin-right:20rpx ;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 40rpx 0 80rpx 0;
		.title{
			font-size: 28rpx;
			color: #606266;
			margin-bottom: 10rpx;
		}
		.price{
			font-size: 36rpx;
			color: #ff6600;
		}
		.tip{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			text-align: center;
			font-size: 24rpx;
			background-color: #EFEFEF;
			padding: 10rpx 0;
			color: #ff9900;
		}
	}
	view.item:last-child{
		margin-right: 0;
	}
	view.item.active{
		border: solid 2rpx #2499FF;
		background-color: #ecf5ff;
		.tip{
			background-color: #2b85e4;
			color: #FFFFFF;
		}
	}
}

.pay-button{
	position: fixed;
	bottom: 0;
	width: 100%;
}
.pay-method{
	.item{
		.choose{
			.icon{
				color: #999;
			}
		}
	}
	.active{
		.choose{
			.icon{
				color: #2499FF;
			}
		}
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	.item{
		background-color: #FFFFFF;
		height: 88rpx;
		display: flex;
		.buy-btn{
			background-color: #2499FF;
			color: #FFFFFF;
			height: 88rpx;
			
		}
		.left{
			text{
				color: #ff6600;
				font-size: 32rpx;
			}
		}
	}
}
</style>
