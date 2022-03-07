<template>
	<view class="school-detail">
		<schoolTop :schoolTop="schoolTop"></schoolTop>
		<view class="school-tab">
			<u-sticky offset-top="0">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" class="tab-title"></u-tabs>
			</u-sticky>
			<view class="item-box" v-show="current == 0">
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeIntroduce name="大学介绍" :collegeIntroduce="collegeIntroduce"></collegeIntroduce>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeRanking  :collegeRanking="collegeRanking"></collegeRanking>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeNews :news="news"></collegeNews>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeMajor :collegeMajor="collegeMajor"></collegeMajor>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeSubject :collegeSubject="collegeSubject"></collegeSubject>
			</view>
			<view class="item-box"  v-show="current == 1">
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeRanking :collegeRanking="collegeRanking"></collegeRanking>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeIntroduce name="大学概况" :collegeIntroduce="collegeIntroduce"></collegeIntroduce>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeDescribe name="大学简介" :desc="introduce"></collegeDescribe>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeDescribe name="宿舍条件" :desc="dormitory"></collegeDescribe>
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeDescribe name="食堂条件" :desc="canteen"></collegeDescribe>
			</view>
			<view class="item-box"  v-show="current == 2">
				<collegeEnroll :schoolId="from.school_id"></collegeEnroll>
			</view>
			<view class="item-box"  v-show="current == 3">
				<u-gap height="10" bg-color="#eee"></u-gap>
				<collegeNews :news="news"></collegeNews>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					signature:'dd93ce355c7e91168f4e33795d533bcd',
					school_id:''
				},
				list: [{
					name: '主页'
				}, {
					name: '介绍'
				}, {
					name: '录取'
				},{
					name: '资讯'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				enable: true,//
				schoolTop:{
					school_name:'',
					is_double:2,//是否双一流
					is_two:2,//是否211
					is_whether:2,//是否985
					thumbnail:'',//学校logo
					district_name:'',//所在城市
					affiliation:'',//院校归属
					nature_id: "",//公办私立
					level_id: "",//本科专科
					list_order:0//综合排名
				},
				collegeIntroduce:{
					create_time:'',//创办时间
					master_number:'',//硕士点
					phd_number:'',//博士点
					recruitment_phone:'',//联系电话
					affiliation:'',//院校归属
				},
				collegeRanking:{
					list_order: 1, //排名
					alumni_order: 1, //校友会排名
					wushu_order: 1, //武书连排名
					ruanke_order: 1, //软科排名
				},
				news:[],
				collegeMajor:[],//特色专业
				collegeSubject:[],//院系专业
				detailData:{},
				introduce:"",//大学简介
				canteen:"",//食堂条件
				dormitory:"",//宿舍条件
			}
		},
		// 在对应的show和hide页面生命周期中打开或关闭监听
		
		onLoad(options) {
			this.from.school_id=options.id
		},
		created() {
			this.getSchoolDetail();
		},
		methods: {
			//获取学校详情
			getSchoolDetail(){
				let data= Object.assign(this.from,{});
				this.$api.getSchoolDetail(data).then(data=>{
					console.log(data)
					this.detailData=data;
					this.introduce=data.introduce;//大学简介
					this.canteen=data.canteen;//食堂条件
					this.dormitory=data.dormitory;//宿舍条件
					
					//schooltop
					this.schoolTop.school_name=data.school_name
					this.schoolTop.is_double=data.is_double//是否双一流
					this.schoolTop.is_two=data.is_two//是否211
					this.schoolTop.is_whether=data.is_whether//是否985
					this.schoolTop.thumbnail=data.thumbnail//学校logo
					this.schoolTop.district_name=data.district_name//所在城市
					this.schoolTop.affiliation=data.affiliation//院校归属
					this.schoolTop.nature_id=data.nature_id//公办私立
					this.schoolTop.level_id=data.level_id//本科专科
					this.schoolTop.list_order=data.list_order//综合排名
					
					//collegeIntroduce
					this.collegeIntroduce.create_time=data.create_time//创办时间
					this.collegeIntroduce.master_number=data.master_number//硕士点
					this.collegeIntroduce.phd_number=data.phd_number//博士点
					this.collegeIntroduce.recruitment_phone=data.recruitment_phone//联系电话
					this.collegeIntroduce.affiliation=data.affiliation//院校归属
					
					//collegeRanking
					this.collegeRanking.list_order=data.list_order //排名
					this.collegeRanking.alumni_order=data.alumni_order //校友会排名
					this.collegeRanking.wushu_order=data.wushu_order //武书连排名
					this.collegeRanking.ruanke_order=data.ruanke_order//软科排名
					
					//news
					this.news=data.news
					
					//特色专业
					this.collegeMajor=data.popular_specialty
					
					//院系专业
					this.collegeSubject=data.branch_list
					
					//
				})	
			},
			change(index) {
				this.current = index;
				if(index==2){
					console.log('录取被选中')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.tab-title{
	border-bottom: solid 1rpx #E4E7ED;
}

</style>
