<template>
	<view class="phase">
		<view class="filling">
			<view class="warp p-3">
				<u-form :model="simulation" ref="uForm">
					<u-form-item label="成绩总分" :label-width="150" prop="fraction"><u-input v-model="simulation.fraction" type="number" placeholder="请输入总分数" /></u-form-item>
					<u-form-item label="选考科目" :label-width="150">
						<u-checkbox-group @change="checkboxGroupChange" >
							<u-checkbox class="check-item" v-for="(item, index) in checkboxList" @change="checkboxChange(item)" v-model="item.checked" :key="index" :name="item.name" :disabled="item.disabled" >
								{{item.name}}
							</u-checkbox>
						</u-checkbox-group>
					</u-form-item>
				</u-form> 
				<view class="sub-btn flex-center mt-3">
					<view class="button" @click="submit">
						保存成绩
					</view>
				</view>
			</view>
			<view class="bg"></view>
		</view>
		<view class="tuijian">
			<text class="text flex-center py-2">为您推荐志愿选择</text>
		</view>
		
		<u-popup v-model="popupShow" mode="center" width="94%" :mask-close-able="false" border-radius="20" :closeable="true" >
			<view class="popTitle flex-center p-3 font-md">
				为您推荐志愿选择
			</view>
			<view class="uloding flex-center" v-if="isLoding">
				<u-loading mode="circle" class="mr-1" color="#2499FF"></u-loading>
				<text>志愿数据加载中</text>
			</view>
			
			<view class="stage mt-2" v-if="">
				<view class="item flex-between p-3" v-for="(item,index) in scoreLine" :key="index">
					<view class="left flex-1">
						<view class="name">{{item.batch}}</view>
						<text>{{item.year}}年控制线：{{item.score_line}}分</text>
					</view>
					<view class="right">
						<view class="button" @click="goRecommend(item)">查看</view>
					</view>
					<view class="import" v-if="item.status"><image src="../../static/important.png" mode="" class="imagee"></image></view>
				</view>
				
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				electiveFrom:{
					signature:"12345321321367890",
					district_id:"22"
				},
				simulation:{
					signature:"12345678213213190",
					fraction:'',
					subject_id:''
				},
				
				rules: {
					fraction:[
						{
							required: true,
							message: '请填写分数',
							// blur和change事件触发检验
							trigger: ['blur', 'change'],
						},
						{
							pattern:/^([1-9]\d*|0)$/,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: '请输入正确的数字',
							trigger: ['blur', 'change'],
						},
					],
					subject_id:[]
				},
				checkboxList: [],
				checkArr:[],
				scoreLine:[],
				volunteerScoreId:null,
				popupShow:false,
				isLoding:true
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		created() {
			this.getElective();
		},
		methods:{
			// 选中某个复选框时，由checkbox时触发
			checkboxChange(item) {
				if(item.checked == false){
					item.checked=true;
					this.checkArr.push(item.value)
				}else {
				    item.checked = false;
					if (this.checkArr.includes(item.value)) {
						this.checkArr.splice(this.checkArr.indexOf(item.value), 1)
					}
				}
				if(this.checkArr.length>=3){
					this.checkboxList.forEach((item,index,checkboxList)=>{
						if(item.checked==false){
							item.disabled=true
						}
					})
				}else{
					this.checkboxList.forEach((item,index,checkboxList)=>{
						if(item.checked==false){
							item.disabled=false
						}
					})
				}
				this.simulation.subject_id='['+this.checkArr+']';
				console.log(this.simulation)
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				console.log(e);
				this.result=e;
			},
			//获取选科目数据
			getElective(){
				let data=Object.assign(this.electiveFrom,{})
				console.log(data)
				this.$api.getElective(data).then(res=>{
					this.checkboxList=res.subject;
					this.checkboxList.forEach((item,index)=>{
						this.$set(item,'checked',false);
						this.$set(item,'disabled',false);
					})
					console.log(this.checkboxList)
					this.$forceUpdate()
				});
				
			},
			goRecommend(item){
				let data={
					fraction:this.simulation.fraction,
					subject_id:this.simulation.subject_id,
					score_id:item.id,
					volunteer_score_id:this.volunteerScoreId
				}
				uni.navigateTo({
					url:"/pages/recommend/recommend?dataItem="+JSON.stringify(data)
				})
			},
			//模拟数据提交
			getSimulation(){
				this.scoreLine=[];
				this.isLoding=true;
				let data=Object.assign(this.simulation,{});
				this.$api.getSimulation(data).then(res=>{
					//console.log(res)
					this.scoreLine=res.score_line;
					this.volunteerScoreId=res.volunteer_score_id;
					this.isLoding=false;
				})
			},
			//提交
			submit() {
				if(this.simulation.fraction<0 || this.simulation.fraction>750){
					uni.showToast({
					    title: "请填写0-750之间的分数",
						icon:"none"
					});
					return;
				}
				
				if(this.checkArr.length<3){
					uni.showToast({
					    title: "最少选择三科",
						icon:"none"
					});
					return;
				}
				
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.getSimulation();
						this.popupShow=true;
					} else {
						console.log('验证失败');
					}
				});
			}
		},
	}
</script>

<style lang="scss">
page{
	background-color: #F4F4F5;
}
.filling{
	position: relative;
	padding: 30rpx;
	.warp{
		background-color: #FFFFFF;
		min-height: 300rpx;
		position: relative;
		z-index: 10;
		border-radius: 20rpx;
		box-shadow: 0 10rpx 10rpx rgba(100,100,100,.1);
		.sub-btn{
			.button{
				display: inline-block;
				background-color: #FFFFFF;
				border: solid 1px #2499FF;
				border-radius: 100rpx;
				padding: 16rpx 50rpx;
				color: #2979ff;
			}
		}
	}
	.bg{
		position: absolute;
		left: 0;
		right: 0;
		z-index: 1;
		top: 0;
		background-color: #2499FF;
		width: 100%;
		height: 200rpx;
		border-radius: 0 0 40rpx 40rpx; 
	}
}
.p-title{
	height: 100rpx;
	text-align: left;
	align-items: center;
	font-size: 32rpx;
	padding-left: 30rpx;
	background-color: #F2F2F2;
}
.phase{
	
	.tuijian{
		.text{
			text-align: center;
			display: flex;
			flex: 1;
		}
		.list{
			.item{
				text-align: center;
				background-color: #FFFFFF;
				margin-right:20rpx;
				padding: 20rpx 0;
				border-radius: 20rpx;
				.title{
					font-size: 24rpx;
					color: #999;
				}
				.num{
					font-size: 32rpx;
					margin-bottom: 5rpx;
					color:#2499FF;
					text{
						font-size: 24rpx;
						color: #909399;
						margin-left: 5rpx;
					}
				}
			}
			view.item:last-child{
				margin-right: 0;
			}
		}
	}
	.stage{
		margin-bottom: 30rpx;
		view.item:last-child{
			border: none;
		}
		.item{
			background-color: #FFFFFF;
			border-radius: 20rpx;
			
			position: relative;
			border-bottom: solid 1px #E4E7ED;
			.left{
				font-size: 26rpx;
				color: #909399;
				.name{
					font-size: 32rpx;
					color: #212529;
				}
			}
			.import{
				width: 90rpx;
				height: 90rpx;
				//background-color: #ff2200;
				position: absolute;
				right: 230rpx;
				top: 20rpx;
				transform: rotate(-15deg);
				.imagee{
					width: 90rpx;
					height: 90rpx;
				}
			}
			.right{
				.button{
					background-color: #2499FF;
					color: #FFFFFF;
					padding: 10rpx 30rpx;
					border-radius: 40rpx;
				}
			}
		}
	}
}
.uloding{
	text{
		color: #2499FF;
	}
}
</style>
