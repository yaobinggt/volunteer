<template>
	<view class="recommend">
		<view class="top">
			<!-- <view class="search px-3 pt-3 pb-1">
				<u-search placeholder="请输入您要填报的专业名称" v-model="keyword" :show-action="false" @blur="mohu"></u-search>
			</view> -->
			
			<u-dropdown ref="uDropdown" class="selected">
					<u-dropdown-item title="志愿梯度">
						<view class="slot-content">
							<view class="scontent order px-3">
								<scroll-view scroll-y="true" style="height: 700rpx;" class="">
									<view class="item flex my-3" v-for="(item,index) in order" :key="index" :class="{'active':orderNum==index}" @click="orderTag(item,index)">
										<view class="checked flex-center mr-1">
											<u-icon name="checkbox-mark" color="#fff" size="22"></u-icon>
										</view>
										<text>{{item.name}}</text>
									</view>
								</scroll-view>
							</view>
							<view class="sbutton flex">
								<!-- <view class="btn-c btn flex-1 flex-center mx-3 py-2" @click="resetAll()">重置</view> -->
								<view class="btn-s btn flex-1 flex-center mx-3 py-2" @click="confirm()">确定</view>
							</view>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="专业筛选">
						<view class="slot-content">
							<view class="scontent flex">
								<view class="left">
									<scroll-view scroll-y="true" style="height: 700rpx;width: 260rpx;" class="left-scroll">
										<view class="left-menu p-2" v-for="(item,index) in major" :key="index" @click="swichMenu(index)" :class="[current==index?'active':'']"><text>{{item.major_name}}</text></view>
									</scroll-view>
								</view>
								<view class="right flex-1">
									<scroll-view scroll-y="true" style="height: 700rpx;" class="right-scroll px-3 pt-2">
										<view class="item" v-for="(item,index) in major" :key="index" v-show="current==index">
											<view class="item-title mb-1">
												<u-checkbox @change="itemAll(item)" v-model="item.ischeck" class="mb-2">全选 {{item.major_name}}</u-checkbox>
												<!-- <text @click="itemAll(item)">全选{{item.major_name}}</text> -->
											</view>
											<view class="item-container" v-for="(ite,index) in item.list" :key="index">
												<u-checkbox-group>
													<u-checkbox @change="checkboxChange(item,ite)" v-model="ite.ischeck" class="mb-2">{{ite.major_name}}</u-checkbox>
												</u-checkbox-group>
											</view>
										</view>
										
									</scroll-view>
								</view>
							</view>
							<view class="sbutton flex">
								<view class="btn-c btn flex-1 flex-center mx-3 py-2" @click="resetAll()">重置</view>
								<view class="btn-s btn flex-1 flex-center mx-3 py-2" @click="confirm()">确定</view>
							</view>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="院校类别">
						<view class="slot-content types">
							<scroll-view scroll-y="true" style="height: 700rpx;" class="">
								<view class="items px-3">
									<view class="item p-1" v-for="(item,index) in types" :key="index" @click="typesTag(item.types_id)" :class="{'active':typesArr.includes(item.types_id)}">
										<view class="px-2 py-2 name flex-between">
											<view>{{item.types_name}}</view>
											<view class="checked flex-center">
												<u-icon name="checkbox-mark" color="#fff" size="22"></u-icon>
											</view>
										</view>
									</view>
								</view>
							</scroll-view>
							<view class="sbutton flex">
								<view class="btn-c btn flex-1 flex-center mx-3 py-2" @click="resetAll()">重置</view>
								<view class="btn-s btn flex-1 flex-center mx-3 py-2" @click="confirm()">确定</view>
							</view>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="院校地域">
						<view class="slot-content types">
							<scroll-view scroll-y="true" style="height: 700rpx;" class="">
								<view class="items px-3">
									<view class="item p-1" v-for="(item,index) in district" :key="index" @click="districtTag(item.district_id)" :class="{'active':districtArr.includes(item.district_id)}">
										<view class="px-2 py-1 name flex-between">
											<view>{{item.district_name}}</view>
											<view class="checked flex-center">
												<u-icon name="checkbox-mark" color="#fff" size="22"></u-icon>
											</view>
										</view>
									</view>
								</view>
							</scroll-view>
							<view class="sbutton flex">
								<view class="btn-c btn flex-1 flex-center mx-3 py-2" @click="resetAll()">重置</view>
								<view class="btn-s btn flex-1 flex-center mx-3 py-2" @click="confirm()">确定</view>
							</view>
						</view>
					</u-dropdown-item>
			</u-dropdown>
			
		</view>
		<view class="list">
			<view class="uLoding flex-center flex-column py-4" v-if="isLoding">
				<u-loading mode="circle" color="#2499FF" size="46"></u-loading>
				<view>数据加载中</view>
			</view>
			<view class="item p-2" v-for="(item,index) in list" :key="index">
				<view class="title mb-1">
					[{{item.school_code}}]{{item.school_name}} <text></text>
				</view>
				<view class="title  mb-1">
					[{{item.school_specialty_code}}]{{item.specialty_name}} <text></text>
				</view>
				<view class="desc mb-2">
					{{item.remark}}
				</view>
				<view class="bottom flex">
					<view class="left flex-1">
						<view class="txt">选考要求：{{item.elective}}</view>
						<view class="txt">所在地：{{item.district_name}}</view>
						<view class="txt">{{item.year}}投档分数：{{item.lowest_score}}</view>
						<view class="txt">{{item.year}}投档位次：{{item.lowest_rank}}</view>
						<view class="txt">录取批次：{{item.batch}}</view>
						<view class="txt">投档概率预估：{{item.probability}}</view>
					</view>
					<view class="button">
						<view class="choose-btn" @click="admissionTag(item.id)" :class="{'active':admissionId.includes(item.id)}">{{admissionId.includes(item.id)?"取消选择":"选为志愿"}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="choose flex-between p-2" v-show="admissionId.length>0">
			<view class="left">
				<view>已选志愿</view>
				<text>{{admissionId.length}}个</text>
			</view>
			<view class="right" @click="openPopup">
				保存已选志愿
			</view>
		</view>
		<u-popup v-model="savePopup" mode="center" width="90%">
			<view class="save-popup p-3">
				<view class="title flex-center font-md mb-3">保存志愿表</view>
				<u-input v-model="save.volunteer_name" :type="type" :border="border" />
				<view class="save-btn mt-3 flex-between">
					<view class="left flex-1 flex-center py-2 mx-3" @click="savePopup = false">取消</view>
					<view class="right flex-1 flex-center py-2  mx-3" @click="saveVoluntary">确认</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				form:{},
				filter:{
					signature:"1234567890",
					score_id:"",
					volunteer_score_id:""
				},
				order:[],//排序类型
				orderNum:null,
				major:[],//专业
				district:[],//城市
				districtArr:[],
				types:[],//院校类型
				typesArr:[],
				result:{
					signature:"1234567890",
					fraction:"",
					subject_id:"",
					score_id:"",
					order_type_value:"2",
					page:"1",
					number:"10",
					rank:"",
					major_id:"",
					district_id:"",
					types_id:"",
				},
				save:{
					signature:"123458765",
					volunteer_score_id:"",
					admission_id:"",
					volunteer_name:"",
				},
				list:[],
				isLoding:true,
				savePopup:false,
				current:0,
				majorArr:[],
				typesId:[],
				admissionId:[],//选择专业ID
				infoId:null,//详情跳转ID
				nowDate:"",//当前时间
				type: 'text',
				border: true
			}
		},
		onLoad(option) {
			this.form = JSON.parse(option.dataItem);
			let forms=JSON.parse(option.dataItem);
			console.log(forms);
			this.filter.score_id=forms.score_id;
			this.filter.volunteer_score_id=forms.volunteer_score_id;
			
			this.result.fraction=forms.fraction;
			this.result.score_id=forms.score_id;
			this.result.subject_id=forms.subject_id;
			
			this.save.volunteer_score_id=forms.volunteer_score_id;
			this.infoId=forms.volunteer_score_id;
			
		},
		created() {
			this.getFilter();
			this.getFilterResult();
		},
		methods: {
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			//排序选中
			orderTag(item,index){
				this.orderNum=index;
				this.result.order_type_value=item.order_type_value;
				//console.log(this.result.order_type_value)
			},
			//院校类型选中
			typesTag(id){
				if(this.typesArr.includes(id)){
					this.typesArr=this.typesArr.filter(function(ele){
						return ele != id;
					})
				}else{
					this.typesArr.push(id);
				}
				this.result.types_id='['+ this.typesArr+']';
				// console.log(this.result.types_id);
			},
			//院校地域选择
			districtTag(id){
				if(this.districtArr.includes(id)){
					this.districtArr=this.districtArr.filter(function(ele){
						return ele != id;
					})
				}else{
					this.districtArr.push(id);
				}
				this.result.district_id='['+ this.districtArr+']';
				console.log(this.result.district_id);
			},
			
			//专业选中
			checkboxChange(item,ite){
				console.log(item)
				if(!ite.ischeck){
					ite.ischeck=true;
					this.majorArr.push(ite.id);
					var bool=item.list.every(function(element){
						return element.ischeck == true
					})
					if(bool){
						item.ischeck = true;
					}else{
						item.ischeck = false;
					}
					
				}else{
					ite.ischeck=false;
					item.ischeck=false;
					if (this.majorArr.includes(ite.id)) {
						this.majorArr.splice(this.majorArr.indexOf(ite.id), 1)
					}
				}
				this.result.major_id='['+ this.majorArr +']';
				//console.log(this.result.major_id);
			},
			//专业分类全选
			itemAll(item){
				if(!item.ischeck){
					item.ischeck=true;
					for(var i=0;i<item.list.length;i++){
						if(item.list[i].ischeck==false){
							item.list[i].ischeck=true;
							this.majorArr.push(item.list[i].id)
						}
					}
				}else{
					item.ischeck=false
					for(var i=0;i<item.list.length;i++){
						item.list[i].ischeck=false;
						
							if (this.majorArr.includes(item.list[i].id)) {
								this.majorArr.splice(this.majorArr.indexOf(item.list[i].id), 1)
							}
						
					}
				}
				this.result.major_id='['+ this.majorArr +']';
				//console.log(this.result.major_id);
			},
			//切换左边菜单
			swichMenu(index){
				if(index==this.current) return;
				this.current=index;
			},
			//选中志愿专业
			admissionTag(id){
				if(this.admissionId.includes(id)){
					this.admissionId=this.admissionId.filter(function(ele){
						return ele != id;
					})
				}else{
					this.admissionId.push(id);
				}
				console.log(this.admissionId)
				this.save.admission_id="["+ this.admissionId +"]"
			},
			//获取筛选信息
			getFilter(){
				let data=Object.assign(this.filter,{});
				this.$api.getFilter(data).then(res=>{
					res.major.forEach((item,index)=>{
						this.$set(item,'ischeck',false)
						item.list.forEach((item,index)=>{
							this.$set(item,'ischeck',false)
						})
					})
					this.major=res.major;
					this.order=res.order_type;
					this.types=res.label_types;
					this.district=res.district_list;
					console.log(res)
				})
			},
			//获取学校结果
			getFilterResult(refresh=true){
				this.result.page=refresh?'1':this.result.page;
				let data=Object.assign(this.result,{});
				console.log(data);
				this.$api.getFilterResult(data).then(res=>{
					res.list.forEach((item,index)=>{
						this.$set(item,'ischeck',false)
					})
					//this.list=res.list;
					this.list=refresh?[...res.list]:[...this.list,...res.list];
					this.isLoding=false
				})
			},
			//筛选条件确定
			confirm(){
				this.getFilterResult();
				this.closeDropdown();
			},
			getFilterResult2(){
				this.list=[];
				this.isLoding=true;
				let data=Object.assign(this.result,{});
				console.log(data)
				this.$api.getFilterResult(data).then(res=>{
					this.list=[...res.list];
					this.isLoding=false
				})
				this.closeDropdown();
			},
			//重置
			resetAll(){
				// this.result.order_type_value="[2]";
				this.result.major_id="";
				this.result.district_id="";
				this.result.types_id="";
				this.typesArr=[];
				this.districtArr=[];
				this.majorArr=[];
				if(this.major.length>0){
					for (var i=0;i<this.major.length;i++) {
						this.major[i].ischeck=false;
						var child=this.major[i];
						for(var j=0;j<child.list.length;j++){
							child.list[j].ischeck=false;
						}
					}
				}
				console.log(this.result)
				this.$forceUpdate();
			},
			//进入志愿选择详情
			goVoluntaryInfo(){
				uni.navigateTo({
					url:"/pages/voluntaryInfo/voluntaryInfo?id="+this.infoId
				})
			},
			//获取当前时间
			getNowDate(){
				let mydate=new Date();
				console.log(mydate.getYear() + mydate.getMonth() + mydate.getDate())
			},
			//打开保存弹窗
			openPopup(){
				let mydate=new Date();
				this.save.volunteer_name=mydate.getMonth()+1 + "月" + mydate.getDate() + "日的模拟志愿表"
				this.savePopup=true;
			},
			//保存志愿表
			async saveVoluntary(){
				console.log(this.infoId)
				let data=Object.assign(this.save,{});
				await this.$api.saveVoluntary(data).then(res=>{
					
						uni.navigateTo({
							url:"/pages/voluntaryInfo/voluntaryInfo?id="+this.infoId
						})
					
				})
			}
		},
		onReachBottom() {
			console.log('-----触底了-----')
			this.result.page++;
			this.getFilterResult(false);
		}
	}
</script>

<style lang="scss" scoped>
.recommend{
	position: relative;
}
.save-popup{
	.save-btn{
		.left{
			background-color: #FFFFFF;
			color: #606266;
			border: solid 1rpx #E4E7ED;
			border-radius: 100rpx;
		}
		.right{
			background-color: #2499FF;
			color: #FFFFFF;
			border-radius: 100rpx;
		}
	}
}
.selected{
	/deep/.u-dropdown__menu{
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		border-bottom: solid 1rpx #E4E7ED;
		z-index: 9999;
	}
	/deep/.u-dropdown__content{
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100% !important;
	}
	/deep/.u-dropdown__content__popup{
		overflow-y: auto;
		background-color: #FFFFFF;
		z-index: 99;
		padding-top: 90rpx;
	}
}
.choose{
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 8;
	background-color: #FFFFFF;
	box-shadow: 0 0 20rpx rgba(100,100,100,.2);
	
	.left{
		font-size: 26rpx;
		color: #606266;
		text{
			font-size: 32rpx;
			color: #2499FF;
		}
	}
	.right{
		background-color: #2499FF;
		color: #FFFFFF;
		padding:15rpx 20rpx;
		border-radius: 100rpx;
	}
}
.list{
	padding-top: 80rpx;
	.item{
		border-top: solid 2rpx #E4E7ED;
		.title{
			font-weight: bolder;
			font-size: 28rpx;
			text{
				font-weight: normal;
				font-size: 24rpx;
				margin-left: 10rpx;
				color: #909399;
			}
		}
		.desc{
			font-size: 26rpx;
			color: #606266;
		}
		.bottom{
			.left{
				font-size: 24rpx;
				display: flex;
				flex-wrap:wrap;
				color: #909399;
				.txt{
					width: 50%;
					margin-bottom: 8rpx;
				}
			}
			.button{
				display: flex;
				width: 160rpx;
				justify-content: right;
				align-items: flex-start;
				.choose-btn{
					background-color: #FFFFFF;
					color: #2499FF;
					font-size: 26rpx;
					padding: 8rpx 20rpx;
					border-radius: 50rpx;
					border: solid 1rpx #2499FF;
				}
				.choose-btn.active{
					background-color: #2499FF;
					color: #FFFFFF;
					font-size: 26rpx;
					padding: 8rpx 20rpx;
					border-radius: 50rpx;
				}
			}
		}
	}
	.uLoding{
		padding-top: 100rpx;
		view{
			margin-top: 10rpx;
			color: #007BFF;
		}
	}
}
.selected{
	/deep/.u-dropdown__menu{
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		//border-bottom: solid 1rpx #E4E7ED;
		z-index: 9999;
	}
	/deep/.u-dropdown__content[data-v-0340bb60]{
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100% !important;
	}
	/deep/.u-dropdown__content__popup[data-v-0340bb60]{
		
		overflow-y: auto;
		background-color: #FFFFFF;
		z-index: 99;
		padding-top: 90rpx;
	}
	.slot-content{
		background-color: #FFFFFF;
		height: 850rpx;
		width: 100%;
		position: relative;
		.scontent{
			width: 100%;
			.left{
				.left-scroll{
					background-color: #f3f3f3;
					border-top: solid 1rpx #f3f3f3;
					border-bottom: solid 1rpx #f3f3f3;
					.active{
						background-color: #FFFFFF;
						border-left: solid 6rpx #2499FF;
					}
				}
			}
			.right{
				.right-scroll{
				}
			}
		}
		.sbutton{
			position: absolute;
			bottom: 30rpx;
			width: 100%;
			.btn-s{
				background-color: #2499FF;
				color: #FFFFFF;
				border-radius: 20rpx;
			}
			.btn-c{
				background-color: #FFFFFF;
				color: #2499FF;
				border: solid 1px #2499FF;
				border-radius: 20rpx;
			}
		}
	}
}
.order{
	.item{
		align-items: center;
		.checked{
			width: 30rpx;
			height: 30rpx;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			border: solid 1rpx #E4E7ED;
		}
	}
	.item.active{
		align-items: center;
		color: #2499FF;
		.checked{
			width: 30rpx;
			height: 30rpx;
			border-radius: 10rpx;
			background-color: #2499FF;
			border: none;
		}
		
	}
}
.types{
	.items{
		display: flex;
		flex-wrap: wrap;
		.item{
			width: 33.333%;
			.name{
				background-color: #FFFFFF;
				border: solid 1rpx #E4E7ED;
				border-radius: 100rpx;
			}
			.checked{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				background-color: #E4E7ED;
			}
		}
		.item.active{
			.name{
				border: solid 1rpx #2499FF;
				color: #2499FF;
			}
			.checked{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				background-color: #2499FF;
			}
		}
	}
}

</style>
