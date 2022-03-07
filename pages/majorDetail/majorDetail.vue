<template>
	<view class="major-detail">
		<majorTop :majorTop="majorTop"></majorTop>
		<view class="major-tab">
			<view class="tab-title">
				<u-sticky offset-top="0">
					<view>
						<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" class="tab-title"></u-tabs>
					</view>
				</u-sticky>
			</view>
			<view class="item-box" v-show="current == 0">
				<u-gap height="10" bg-color="#eee"></u-gap>
				<majorSurvey name="专业概况" :majorSurvey="majorSurvey"></majorSurvey>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeDescribe name="专业介绍" :desc="majorDescribe"></collegeDescribe>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeDescribe name="专业课程" :desc="courses"></collegeDescribe>
				
			</view>
			<view class="item-box" v-show="current == 1">	
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeDescribe name="就业方向" :desc="direction"></collegeDescribe>
			</view>
			<view class="item-box" v-show="current == 2">
				<view class="choose flex-between px-3">
					<text>共{{collegeNumber}}所</text>
					<view class="right flex">
						<view class="btn-sel flex-center" @click="districtShow = true">
							<text>{{districtName}}</text>
							<u-icon name="../../static/icon-down.png" color="#787878" size="32"></u-icon>
						</view>
						<view class="btn-sel flex-center" @click="famousShow = true ">
							<text>{{famousName}}</text>
							<u-icon name="../../static/icon-down.png" color="#787878" size="32"></u-icon>
						</view>
						<view class="btn-sel flex-center" @click="levelShow = true">
							<text>{{levelName}}</text>
							<u-icon name="../../static/icon-down.png" color="#787878" size="32"></u-icon>
						</view>
					</view>
				</view>
				<schoolList :college="collegeList"></schoolList>
			</view>
			<u-select v-model="districtShow" :default-value="districtDefault" mode="single-column" :list="districtList" @confirm="districtConfirm" class="score-select"></u-select>
			<u-select v-model="famousShow" :default-value="famousDefault" mode="single-column" :list="famousList" @confirm="famousConfirm" class="score-select"></u-select>
			<u-select v-model="levelShow" :default-value="levelDefault" mode="single-column" :list="levelList" @confirm="levelConfirm" class="score-select"></u-select>
			<view class="item-box" v-show="current == 3">
				<majorRanking :majorRanking="majorRanking"></majorRanking>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					signature:'72947e996cd241443f3e70a',
					specialty_id:'1'
				},
				collegeData:{
					signature:'cc54f3be7b177bbfbf7359dce9dd917e',
					specialty_id:'',//专业ID
					page:'1',
					number:'10',
					district_id:'',
					types_id:'',
					level_id:''
				},
				districtList:[],
				famousList:[],
				levelList:[],
				districtName:'所在地区',
				famousName:'院校特色',
				levelName:'学历层次',
				districtShow:false,
				famousShow:false,
				levelShow:false,
				districtDefault:[0],
				famousDefault:[0],
				levelDefault:[0],
				collegeNumber:null,
				list: [{
					name: '专业介绍'
				}, {
					name: '就业前景'
				}, {
					name: '开设学院'
				},{
					name: '专业排名'
				}],
				
				majorTop:{
					specialty_name:'',//专业名称
					one_name:'',//第一个名字
					two_name:'',//第二个名字
					national_code:'',//国标代码
				},
				majorSurvey:{
					education_level:'',//学历层次
					years_study:'',//学业年限
					degree_awarded:'',//授予学位
					male_ratio:'',//男女比例
					liberal_arts_ratio:'',//文理比例
					five_salary:'',//五年月薪
				},
				collegeList:[],//学校列表
				majorDescribe:'',//专业介绍
				courses:'',//专业课程
				prospect:'',//就业前景
				direction:'',//就业方向
				majorRanking:[],//专业排名
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			}
		},
		onLoad(options) {
			this.from.specialty_id=options.id
			this.collegeData.specialty_id=options.id
		},
		created() {
			this.getMajorDetail();
			//this.getCollege();
			this.getSchool();
		},
		methods: {
			//获取专业详情
			getMajorDetail(){
				let data=Object.assign(this.from,{});
				this.$api.getSpecialtyDetail(data).then(data=>{
					console.log(data)
					
					this.majorTop.specialty_name=data.specialty_name//专业名称
					this.majorTop.one_name=data.one_name//第一个名字
					this.majorTop.two_name=data.two_name//第二个名字
					this.majorTop.national_code=data.national_code//国标代码
					
					this.majorSurvey.education_level=data.education_level//学历层次
					this.majorSurvey.years_study=data.years_study//学业年限
					this.majorSurvey.degree_awarded=data.degree_awarded//授予学位
					this.majorSurvey.male_ratio=data.male_ratio//男女比例
					this.majorSurvey.liberal_arts_ratio=data.liberal_arts_ratio//文理比例
					this.majorSurvey.five_salary=data.five_salary//五年月薪
					
					this.majorDescribe=data.professional_presentation//专业介绍
					this.courses=data.professional_courses//专业课程
					//this.prospect=data.//就业前景
					this.direction=data.employment_direction//就业方向
					this.majorRanking=data.order//排行
				})
			},
			//获取开设院校
			getCollege(){
				let data=Object.assign(this.collegeData,{});
				this.$api.getCollege(data).then(res=>{
					console.log(res)
					this.collegeList=res.list;
					//转换地区数据
					if(res.district_list.length>1){
						let values=res.district_list;
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].district_name,
								value: values[i].id
							};
							this.districtList.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
					if(res.famous_list.length>1){
						let values=res.famous_list;
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].famous_name,
								value: values[i].id
							};
							this.famousList.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
					if(res.level_list.length>1){
						let values=res.level_list;
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].level_name,
								value: values[i].id
							};
							this.levelList.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
				})
				
			},
			//获取学校列表
			getSchool(refresh=true){
				this.collegeData.page=refresh?'1':this.collegeData.page;
				let data =Object.assign(this.collegeData,{})
				console.log(data)
				this.$api.getCollege(data).then(res=>{
					this.collegeNumber=res.count;
					this.collegeList=refresh?[...res.list]:[...this.collegeList,...res.list];
					//转换地区数据
					if(res.district_list.length>1){
						let values=res.district_list;
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].district_name,
								value: values[i].id
							};
							this.districtList.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
					if(res.famous_list.length>1){
						let values=res.famous_list;
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].famous_name,
								value: values[i].id
							};
							this.famousList.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
					if(res.level_list.length>1){
						let values=res.level_list;
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].level_name,
								value: values[i].id
							};
							this.levelList.push(obj);
						}
					}else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
				})
				
			},
			districtConfirm(e) {
				console.log(e)
				this.districtName=e[0].label
				this.collegeData.district_id='['+ e[0].value+ ']'
				let index=0;
				for(let i=0;i<this.districtList.length;i++){
					if(this.districtList[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.districtDefault[0]=index;
				console.log(this.from)
				this.getSchool()
			},
			famousConfirm(e) {
				this.famousName=e[0].label
				this.collegeData.famous_id=e[0].value+""
				let index=0;
				for(let i=0;i<this.famousList.length;i++){
					if(this.famousList[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.famousDefault[0]=index;
				this.getSchool()
			},
			levelConfirm(e) {
				this.levelName=e[0].label
				this.collegeData.level_id=e[0].value
				let index=0;
				for(let i=0;i<this.levelList.length;i++){
					if(this.levelList[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.levelDefault[0]=index;
				this.getSchool()
			},
			change(index) {
				this.current = index;
			}
		},
		onReachBottom() {
			console.log('-----触底了-----')
			this.collegeData.page++;
			this.getSchool(false);
		}
	}
</script>

<style lang="scss" scoped>
.major-tab{
	uni-swiper{
		height: auto;
		/deep/.uni-swiper-wrapper{
			overflow: visible;
			uni-swiper-item{
				overflow: visible;
			}
		}
	}
}
.choose{
	height: 88rpx;
	display: flex;
	align-items: center;
	background-color: #ECF5FF;
	.btn-sel{
		border: solid 1rpx #C0C4CC;
		border-radius: 40rpx;
		padding:8rpx 5rpx 8rpx 15rpx;
		font-size: 24rpx;
		color: #787878;
		margin-left: 10rpx;
	}
}
</style>
