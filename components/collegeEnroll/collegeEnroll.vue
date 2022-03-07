<template>
	<view class="college-enroll">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="item-box" v-show="current == 0">
			<view class="college-select px-3">
				<view class="desc-text">
					在山东的录取情况
				</view>
			</view>
			<collegeTable :list="admissionList"></collegeTable>
			
		</view>
		<view class="item-box" v-show="current == 1">
			<view class="college-select px-3 flex-between">
				<view class="desc-text">
					专业录取情况
				</view>
				<view class="btn-sel flex-center" @click="specialtyShow = true">
					<text>{{specialtyFrom.year}}</text>
					<u-icon name="../../static/icon-down.png" color="#787878" size="32"></u-icon>
				</view>
			</view>
			<majorTable :list="specialtyList"></majorTable>
			<u-select v-model="specialtyShow" :default-value="specialtyDefault" mode="single-column" :list="specialtySearch" @confirm="specialtyConfirm" class="score-select"></u-select>
		</view>
		<view class="item-box" v-show="current == 2">
			<view class="college-select px-3 flex-between">
				<view class="desc-text">
					招生计划情况
				</view>
				<view class="btn-sel flex-center" @click="planShow = true">
					<text>{{planFrom.year}}</text>
					<u-icon name="../../static/icon-down.png" color="#787878" size="32"></u-icon>
				</view>
			</view>
			<enrollmentPlan :list="planList"></enrollmentPlan>
			<u-select v-model="planShow" :default-value="planDefault" mode="single-column" :list="planSearch" @confirm="planConfirm" class="score-select"></u-select>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeEnroll",
		props:{
			schoolId:{
				type:String
			}
		},
		data() {
			return {
				from:{
					signature:'72947e99b7ceb35436cd241443f3e70a',
					school_id:0,
					district_id:'22',
					subject_id:''
				},
				planFrom:{
					signature:'72947e99b7ceb35436cd241443f3e70a',
					school_id:'',
					district_id:'22',
					year:'2020'
				},
				specialtyFrom:{
					signature:'72947e99b7ceb35436cd241443f3e70a',
					school_id:'',
					district_id:'22',
					year:'2020'
				},
				admissionFrom:{
					signature:'72947e99b7ceb35436cd241443f3e70a',
					school_id:'',
					district_id:'22',
				},
				citySelectDefault:[0],
				list: [{
					name: '院校录取'
				}, {
					name: '专业录取'
				}, {
					name: '招生计划'
				}],
				cityList:[{
					label: "北京",
					value: 2,
					index:0
				},{
					label: "山东",
					value: 22,
					index:1
				},{
					label: "安徽",
					value: 4,
					index:2
				}],
				admissionList:[],
				specialtyList:[],
				specialtySearch:[],
				specialtyShow:false,
				specialtyDefault:[],
				planList:[],
				planSearch:[],
				planShow:false,
				planDefault:[],
				cityName:'全国',
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				show: false,
			};
		},
		created() {
			this.planFrom.school_id=this.schoolId;
			this.specialtyFrom.school_id=this.schoolId;
			this.admissionFrom.school_id=this.schoolId;
			this.getAdmission();
			this.getPlan();
			this.getPlanyYear();
			this.getSpecialtyAdmission();
			this.getSpecialtyYear();
		},
		methods: {
			change(index) {
				this.current = index;
			},
			//获取招生年份
			getPlanyYear(){
				let data=Object.assign(this.planFrom,{})
				this.$api.getPlan(data).then(res=>{
					if(res.search.length>0){
						let values=res.search;
						for(var i=0;i<values.length;i++){
							var obj = {
								label: values[i].year_name,
								value: values[i].year_value
							};
							this.planSearch.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
				})
			},
			//获取招生计划数据
			getPlan(){
				let data=Object.assign(this.planFrom,{})
				this.$api.getPlan(data).then(res=>{
					this.planList=res.list
					console.log(res.list)
				})
			},
			//获取专业年份数据
			getSpecialtyYear(){
				let data=Object.assign(this.specialtyFrom,{})
				this.$api.getSpecialtyAdmission(data).then(res=>{
					if(res.search.length>0){
						let values=res.search;
						for(var i=0;i<values.length;i++){
							var obj = {
								label: values[i].year_name,
								value: values[i].year_value
							};
							this.specialtySearch.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
				})
			},
			//获取专业录取数据
			getSpecialtyAdmission(){
				let data=Object.assign(this.specialtyFrom,{})
				this.$api.getSpecialtyAdmission(data).then(res=>{
					this.specialtyList=res.list;
				})
				
			},
			//获取院校录取数据
			getAdmission(){
				let data=Object.assign(this.admissionFrom,{})
				this.$api.getAdmission(data).then(res=>{
					this.admissionList=res;
				})
			},
			specialtyConfirm(e){
				this.specialtyFrom.year=e[0].value
				this.getSpecialtyAdmission();
				let index=0;
				for(let i=0;i<this.specialtySearch.length;i++){
					if(this.specialtySearch[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.specialtyDefault[0]=index;
			},
			planConfirm(e){
				this.planFrom.year=e[0].value
				this.getPlan();
				let index=0;
				for(let i=0;i<this.planSearch.length;i++){
					if(this.planSearch[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.planDefault[0]=index;
			}
		}
	}
</script>

<style lang="scss" scoped>
.college-enroll{
	/deep/ .u-tab-bar[data-v-3b2b1a80]{
		display: none;
	}
}
.college-select{
	height: 88rpx;
	display: flex;
	align-items: center;
	background-color: #ECF5FF;
	.desc-text{
		font-size: 26rpx;
		color: #666;
	}
	.btn-sel{
		border: solid 1rpx #C0C4CC;
		border-radius: 40rpx;
		padding:6rpx 10rpx 6rpx 20rpx;
		font-size: 24rpx;
		color: #787878;
		margin-right: 10rpx;
	}
}
</style>
