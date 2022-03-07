<template>
	<view class="school">
		<topBar></topBar>
		<view class="school-dropdown">
			<view class="school-all flex-center" >
				<text>共{{collegeNumber}}所</text>
			</view>
			<u-dropdown ref="uDropdown" class="school-items">
				<u-dropdown-item title="类型">
					<view class="slot-content">
						<view class="item-main">
							<view class="btn-list">
								<view class="obtn ml-1 mb-1" :class="{'active':districtArr.length < 1}" @click="clearIndex1">不限</view>
								<view class="obtn ml-1 mb-1" v-for="(item,index) in districtList" :key="index" @click="selCity(index, item)" :class="item.ischeck == true ? 'active' : ''">{{item.district_name}}</view>
							</view>
							<view class="btn-list">
								<view class="obtn ml-1 mb-1" :class="{'active':typesArr.length < 1}" @click="clearIndex2">不限</view>
								<view class="obtn ml-1 mb-1" v-for="(item,index) in typesList" :key="index" @click="selTypes(index, item)" :class="item.ischeck == true ? 'active' : ''">{{item.types_name}}</view>
							</view>
							<view class="btn-list">
								<view class="obtn ml-1 mb-1" v-for="(item,index) in natureList" :key="index" @click="changeNature(index,item)"  :class="{'active':natureIndex===index}">{{item.nature_name}}</view>
							</view>
						</view>
						
					</view>
					<view class="item-btn flex-between">
						<u-button class="flex-1 mr-1"  @click="resetIndex">重置</u-button>
						<u-button class="flex-1 ml-1" type="primary" @click="confirm()">确认</u-button>
					</view>
				</u-dropdown-item>
				<u-dropdown-item title="特色">
					<view class="slot-content">
						<view class="sc-button" v-for="(item,index) in famousList" :key="index" @click="changeTrait(index,item)"  :class="{'active':traitIndex===index}">
							{{item.famous_name}}
						</view>
					</view>
					<view class="item-btn flex-between">
						<u-button class="flex-1 mr-1"  @click="resetIndex">重置</u-button>
						<u-button class="flex-1 ml-1" @click="confirm()" type="primary">确认</u-button>
					</view>
				</u-dropdown-item>
				
			</u-dropdown>
		</view>
		<view class="school-list">
			<schoolList :college="college"></schoolList>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					signature:'6aebe9ee0be119a154f81abc165ef8bd',
				},
				listFrom:{
					signature:'cc54f3be7b177bbfbf7359dce9dd917e',
					page:'1',
					number:'10',
					district_id:'',//城市id
					types_id:'',//类型id
					nature_id:0,//性质id
					famous_id:0,//著名标签ID
					
				},
				collegeNumber:0,
				college:[],//学校列表
				traitIndex:0,
				rankIndex:0,
				natureIndex:0,
				districtList:[],//城市列表
				selarr:[],
				typesList:{},//专业类型
				natureList:{},//共办，民办
				famousList:{},//特色
				districtArr:[],//城市ID
				typesArr:[],//专业类型ID
			}
		},
		onLoad() {
			
		},
		created() {
			this.getSchoolSearch();
			this.getSchool();
			
		},
		methods: {
			//获取学校查询条件
			getSchoolSearch(){
				let data2=Object.assign(this.from,{})
				this.$api.getSchoolSearch(data2).then(data=>{
					this.districtList=data.district_list;
					this.typesList=data.types_list;
					this.natureList=data.nature_list;
					this.famousList=data.famous_list;
					this.districtList.forEach((item,index)=>{
						this.$set(item,'ischeck',false)
					})
					this.typesList.forEach((item,index)=>{
						this.$set(item,'ischeck',false)
					})
					console.log(data)
				})
			},
			//获取学校列表
			getSchool(refresh=true){
				this.listFrom.page=refresh?'1':this.listFrom.page;
				let data =Object.assign(this.listFrom,{})
				this.$api.getSchool(data).then(data=>{
					data.list.forEach((item,index)=>{
						this.$set(item,'ischeck',false)
					})
					this.collegeNumber=data.count;
					this.college=refresh?[...data.list]:[...this.college,...data.list];
				})
				
			},
			//确定条件--筛选
			confirm(){
				this.getSchool();
				this.closeDropdown();
			},
			getSchoolTwo(){
				// if(this.college.length != 0){
				// 	this.college=[]
				// }
				//this.college=[]
				this.listFrom.page='1';
				let data =Object.assign(this.listFrom,{})
				console.log(data);
				this.$api.getSchool(data).then(data=>{
					
					data.list.forEach((item,index)=>{
						this.$set(item,'ischeck',false)
					})
					this.collegeNumber=data.count;
					this.college=[...data.list];
					console.log(this.college);
				})
				this.closeDropdown();
			},
			
			//关闭弹窗
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			
			selCity(index, item) {
			    if (item.ischeck == false) {
			        item.ischeck = true;
			        this.districtArr.push(item.id);
			    } else {
			        item.ischeck = false;
					if (this.districtArr.includes(item.id)) {
						this.districtArr.splice(this.districtArr.indexOf(item.id), 1)
					}
			        //this.listFrom.district_id.splice(this.listFrom.district_id.indexOf(index + 1), 1);
			    }
			    console.log('['+ this.districtArr +']');
				this.listFrom.district_id='['+ this.districtArr +']';
			},
			selTypes(index, item) {
			    if (item.ischeck == false) {
			        item.ischeck = true;
			        this.typesArr.push(item.id);
			    } else {
			        item.ischeck = false;
					if (this.typesArr.includes(item.id)) {
						this.typesArr.splice(this.typesArr.indexOf(item.id), 1)
					}
			        //this.listFrom.district_id.splice(this.listFrom.district_id.indexOf(index + 1), 1);
			    }
			    console.log('['+ this.typesArr +']');
				this.listFrom.types_id='['+ this.typesArr +']';
			},
			
			
			clearIndex1(){
				this.districtArr=[];
				this.listFrom.district_id='';
				this.districtList.forEach((item,index)=>{
					this.$set(item,'ischeck',false)
				})
			},
			clearIndex2(){
				this.typesArr=[];
				this.listFrom.types_id='';
				this.typesList.forEach((item,index)=>{
					this.$set(item,'ischeck',false)
				})
			},
			
			changeNature(index,item){
				this.listFrom.nature_id=0;
				this.natureIndex=index;
				this.listFrom.nature_id=item.id;
			},
			changeTrait(index,item){
				this.listFrom.famous_id=0;
				this.traitIndex=index;
				this.listFrom.famous_id=item.id;
			},
			changeRank(index,item){
				this.listFrom.rank_id=0;
				this.rankIndex=index;
				this.listFrom.rank_id=item.id;
			},
			
			resetIndex(){
				this.clearIndex1();
				this.clearIndex2();
				this.natureIndex=0;
				this.listFrom.nature_id=0;
				this.traitIndex=0;
				this.listFrom.famous_id=0;
				this.rankIndex=0;
				this.listFrom.rank_id=0;
				this.$forceUpdate()
			},
			
		},
		mounted() {
			
		},
		onReachBottom() {
			console.log('-----触底了-----')
			this.listFrom.page++;
			this.getSchool(false);
		}
	}
</script>

<style lang="scss" scoped>
.school-dropdown{
	margin-top: 90rpx;
	width: 100%;
	.school-items{
		/deep/.u-dropdown__menu{
			position: fixed;
			width: 100%;
			background-color: #FFFFFF;
			border-bottom: solid 1rpx #E4E7ED;
			z-index: 9999;
			padding-left: 160rpx;
		}
		// /deep/.u-dropdown__menu[data-v-0340bb60]{
		// 	position: fixed;
		// 	width: 100%;
		// 	background-color: #FFFFFF;
		// 	border-bottom: solid 1rpx #E4E7ED;
		// 	z-index: 9999;
			
		// 	// padding-left: 160rpx;
		// }
		/deep/.u-dropdown__content{
			position: fixed;
			top: 0;
			bottom: 0;
			height: 100% !important;
			
		}
		/deep/.u-dropdown__content__popup{
			height: 80%;
			overflow-y: auto;
			background-color: #FFFFFF;
			z-index: 99;
			padding-top: 90rpx;
		}
		.item-main{
			.btn-list{
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				margin-bottom: 30rpx;
				.obtn{
					font-size: 26rpx;
					width: 100rpx;
					margin-bottom: 20rpx;
					padding: 8rpx 0;
					display: flex;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50rpx;
					border: solid 1px #E4E7ED;
				}
				.obtn.active{
					background-color: #2979ff;
					color: #FFFFFF;
					border: solid 1px #2979FF;
				}
			}
			.btn-list:after {
				content: "";
				flex: auto;
			 }
		}
		.item-btn{
			position: absolute;
			bottom: 30rpx;
			left: 30rpx;
			right: 30rpx;
			
		}
	}
	.slot-content{
		background-color: #FFFFFF;
		padding: 30rpx;
		overflow-y: auto;
		height: 100%;
		position: relative;
		padding-bottom:150rpx ;
		.sc-button{
			display: flex;
			justify-content: center;
			align-items: center;
			border: solid 1rpx #E4E7ED;
			margin-bottom: 20rpx;
			border-radius: 70rpx;
			padding: 20rpx 0;
			color: #606266;
		}
		.sc-button.active{
			background-color: #2979ff;
			border:solid 1px #2979ff;
			color: #FFFFFF;
		}
	}
	.school-all{
		position: fixed;
		z-index: 99999;
		color: #303133;
		height: 80rpx;
		width: 160rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
.school-list{
	//position: relative;
	//margin-top: 90rpx;
	//z-index: 80;
	padding-top: 90rpx;
	
}
</style>
