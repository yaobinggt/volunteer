<template>
	<view class="volunteer">
		<view class="vol-warp p-3">
			<view class="col-title flex-center mb-3">
				<text>2021届模拟志愿填报</text>
			</view>
			<u-form :model="form" :rules="rules" ref="uForm" :errorType="errorType">
				
				<u-form-item label-width="160" :label-position="labelPosition" label="考生姓名" prop="name">
					<u-input placeholder="请输入姓名" v-model="form.name" type="text" @blur="copyname"></u-input>
				</u-form-item>
				
			</u-form>
			<u-button @click="submit">提交</u-button>
		</view>
		<u-popup v-model="popup" mode="bottom" :closeable="true" height="330rpx">
			<view class="popwarp px-3">
				<view class="title">
					选择高考科目
				</view>
				<u-checkbox-group @change="checkboxGroupChange" class="flex mt-2">
					<u-checkbox class="check-item" v-for="(item, index) in checkboxList" @change="checkboxChange(item)" v-model="item.checked" :key="index" :name="item.name" :disabled="item.disabled" >
						{{item.name}}
					</u-checkbox>
				</u-checkbox-group>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"volunteer",
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
				form: {
					name: '',
				},
				rules: {
					name: [
						{ 
							required: true,
							min:3,
							message: '请输入姓名', 
							trigger: ['change','blur'],
						}
					],
				},
				popup:false,
				labelPosition: 'left',
				errorType: ['message'],
				checkboxList:[],
				checkArr:[],
				result: [],
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		created() {
			this.getElective();
		},
		computed: {
			getResult() {
				return this.result.join(",");
			}
		},
		methods:{
			copyname(e){
				this.model.name=e;
			},
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
				//console.log(this.simulation.subject_id)
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
				})
			},
			//模拟志愿提交
			submitSimulation(){
				let data=Object.assign(this.simulation,{});
				this.$api.getSimulation(data).then(res=>{
					console.log(res)
				})
			},
			submit() {
				console.log(this.simulation)
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.popwarp{
	.title{
		height: 100rpx;
		display: flex;
		align-items: center;
		font-size: 32rpx;
	}
	.check-item{
		width: 33% !important;
		display: flex;
		justify-content: center;
		margin-bottom: 30rpx;
	}
}
.volunteer{
	position: relative;
	padding: 0 30rpx 30rpx;
	.vol-warp{
		min-height: 300rpx;
		background-color: #FFFFFF;
		border-radius: 30rpx;
		box-shadow: 0 0 10rpx rgba(0,0,0,.2);
		.col-title{
			font-size: 38rpx;
			color: #333333;
			font-weight: bolder;
			height: 50rpx;	
		}
		.vol-form{
			.vol-group{
				height: 88rpx;
				border-radius: 20rpx;
				box-shadow: 0 0 20rpx rgba(0,0,0,.2);
				width: 100%;
				font-size: 30rpx;
				.form-title{
					width: 200rpx;
					border-right: solid 1px #EEEEEE;
					text-align: center;
				}
				.vol-input{
					display: flex;
					align-items: center;
					padding: 0 20rpx 0 10rpx;
					input{
						text-align: right;
					}
					view{
						text-align: right;
						display: inline-block;
					}
					text{
						padding-left: 20rpx;
					}
					
				}
				
			}
			.vol-button{
				background-color: #2499ff;
				height: 88rpx;
				margin-top: 30rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				border-radius: 20rpx;
			}
		}
	}
}
</style>
