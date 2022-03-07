<template>
	<view class="wrap">
			<u-navbar :is-back="false" title="绑定考生信息"></u-navbar>
			<view class="loading-box" v-show="loading">
				<u-loading :show="loading" ></u-loading>
				数据加载中...
			</view>
			<view class="bindmain" v-show="!loading">
				<u-form :model="form" :rules="rules" ref="uForm" :errorType="errorType" >
					
					<u-form-item label-width="160"  :label-position="labelPosition" label="所在地区"  prop="provincename">
						<u-input :border="border" type="select" :select-open="provinceShow" v-model="form.provincename" placeholder="请选所在省份" @click="provinceShow = true"></u-input>
						
					</u-form-item>
					<u-form-item label-width="160"  :label-position="labelPosition" label="学校名称" prop="schoolname">
						<u-input :border="border" type="select" :select-open="schoolShow" v-model="form.schoolname" placeholder="请选择所在学校" @click="schoolShowbox"></u-input>
						
					</u-form-item>
					<u-form-item label-width="160"  :label-position="labelPosition" label="高考年份" prop="yearname">
						<u-input :border="border" type="select" :select-open="selectYearShow" v-model="form.yearname" placeholder="请选高考年份" @click="selectYearShow = true"></u-input>
					</u-form-item>
					<u-form-item label-width="160" :label-position="labelPosition" label="考生姓名" prop="name">
						<u-input :border="border" placeholder="请输入姓名" v-model="form.name" type="text" @input="copyname"></u-input>
					</u-form-item>
					<u-form-item label-width="160" :label-position="labelPosition" label="身份证号" prop="idcard">
						<u-input :border="border" placeholder="请输入身份证号" v-model="form.idcard" type="text" @input="copyid"></u-input>
					</u-form-item>
					<u-form-item label-width="160" :label-position="labelPosition" label="性别" prop="gendername">
						<u-input :border="border" type="select" :select-open="actionSheetShow" v-model="form.gendername" placeholder="请选择性别" @click="actionSheetShow = true"></u-input>
					</u-form-item>
				</u-form>
				
				<u-button @click="submit" type="primary" class="mt-5">确定</u-button>
			</view>
			<!-- 城市绑定 -->
			<u-select mode="mutil-column-auto" :list="cityList" v-model="provinceShow" @confirm="cityConfirm"></u-select>
			<!-- 学校选择 -->
			<u-select mode="single-column" :list="schoolList" v-model="schoolShow"  @confirm="schoolConfirm"></u-select>
			<!-- 高考年份 -->
			<u-select mode="single-column" :list="yearList" v-model="selectYearShow" @confirm="selectYearConfirm"></u-select>
			<!-- 性别 -->
			<u-select mode="single-column"  :list="genderList" v-model="actionSheetShow" @confirm="genderConfirm"></u-select>
		
		
	</view>
</template>

<script>

export default {
	data() {
		let that = this;
		return {
			infoData:{
				signature:'123456789',
			},
			model: {
				signature:'123456789',
				district_id:'',
				city_id:'',
				conty_id:'',
				year:'',
				name:'',
				gender: '',
				school_name	:'',
				id_card:''
			},
			csForm:{
				signature:'123456789',
			},
			form:{
				name:'',
				yearname:'',
				gendername:'',
				provincename:'',
				schoolname:'',
				idcard:''
			},
			provinceList: [],
			provinceList2:[],
			schoolList:[],
			yearList: [],
			genderList: [
				{
					value: '1',
					label: '男'
				},
				{
					value: '2',
					label: '女'
				},
			],
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur' ,
					},
					{
						min: 2,
						max: 5,
						message: '姓名长度在3到5个字符',
						trigger: ['change','blur'],
					},
					{
						// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.chinese(value);
						},
						message: '姓名必须为中文',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					},
					
				],
				idcard:[
					{
						required: true,
						message: '请输入身份证号',
						trigger: 'blur' ,
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.idCard(value);
						},
						message: '请输入正确的身份证号',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				],
				gendername: [
					{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					},
				],
				provincename: [
					{
						required: true,
						message: '请选择所在地区',
						trigger: 'change',
					}
				],
				schoolname: [
					{
						required: true,
						message: '请选择学校名称',
						trigger: 'change',
					}
				],
				yearname:[
					{
						required: true,
						message: '请选择所高考年份',
						trigger: 'change',
					}
				],
				
				
			},
			border: false,
			check: false,
			selectStatus: 'close',
			provinceShow:false,//省份选着显示
			selectYearShow:false,//年份显示
			actionSheetShow: false,
			schoolShow:false,
			loading:true,
			labelPosition: 'left',
			codeTips: '',
			errorType: ['message'],
			genderDefault:[],
			provinceDefault:[],
			yearDefault:[],
			cityList:null,
			schoolListRes:[],
		};
	},
	onLoad() {
		this.getInfo();
		this.getCitySchool();
	},
	created() {
		// location.reload()
		//this.$forceUpdate()
	},
	computed: {
		
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
					this.bindUserinfo()
				} else {
					console.log('验证失败');
				}
			});
		},
		schoolShowbox(){
			if(this.form.provincename==''){
				uni.showToast({
					icon: "none",
					title: '请先选择所在地区'
				})
			}else{
				this.schoolShow=true;
			}
		},
		schoolConfirm(e){
			console.log(e)
			this.form.schoolname=e[0].label;
			this.model.school_name=e[0].label;
		},
		async cityConfirm(e){
			this.form.provincename=e[0].label+'-'+e[1].label+'-'+e[2].label;
			this.model.district_id=e[0].value;
			this.model.city_id=e[1].value;
			this.model.conty_id=e[2].value;
			let schoolA=this.schoolListRes.find(await function (item){
				return item.province_id === e[0].value
			});
			let schoolB=schoolA.city_list.find(await function (item){
				return item.city_id === e[1].value
			});
			let schoolC=schoolB.area_list.find(await function (item){
				return item.area_id === e[2].value
			});
			
			this.schoolList=schoolC.school_list;
		},
		// 性别选择
		genderConfirm(e) {	
			this.form.gendername=e[0].label
			this.model.gender=e[0].value+""
			let index=0;
			for(let i=0;i<this.genderList.length;i++){
				if(this.genderList[i].label == e[0].label){
					index=i;
					break
				}
			}
			this.genderDefault[0]=index;
		},

		// 选择省份回调
		provinceConfirm(e) {
			// this.model.district_id = '';
			// e.map((val, index) => {
			// 	this.model.district_id += this.model.district_id == '' ? val.label : '-' + val.label;
			// })
			this.form.provincename=e[0].label
			this.model.district_id=e[0].value+""
			let index=0;
			for(let i=0;i<this.provinceList.length;i++){
				if(this.provinceList[i].label == e[0].label){
					index=i;
					break
				}
			}
			this.provinceDefault[0]=index;
		},
		// 选择年份回调
		selectYearConfirm(e) {
			this.form.yearname=e[0].label
			this.model.year=e[0].value+""
			let index=0;
			for(let i=0;i<this.yearList.length;i++){
				if(this.yearList[i].label == e[0].label){
					index=i;
					break
				}
			}
			this.yearDefault[0]=index;
		},
		copyname(e){
			// console.log(this.model)
			this.model.name=e;
		},
		copyid(e){
			// console.log(this.model)
			this.model.id_card=e;
		},
		//绑定用户信息
		bindUserinfo(){
			let data=Object.assign(this.model,{});
			console.log(data);
			this.$api.bindUserinfo(data).then(res=>{
				setTimeout(()=>{
					uni.switchTab({
						url:'/pages/tabbar/index/index',
						success(res) {
							let page = getCurrentPages().pop();
							if (!page) return;
							page.onLoad(location.reload());
						}
					})
				},350)
			})
		},
		//获取城市学校信息
		getCitySchool(){
			this.loading=true;
			let data=Object.assign(this.csForm,{});
			this.$api.getCitySchool(data).then(res=>{
				console.log(res)
				this.loading=false;
				let res1 = JSON.parse(JSON.stringify(res).replace(/province/g,"label"));
				let res2 = JSON.parse(JSON.stringify(res1).replace(/city/g,"label"));
				let res3 = JSON.parse(JSON.stringify(res2).replace(/label_list/g,"children"));
				let res4 = JSON.parse(JSON.stringify(res3).replace(/area_list/g,"children"));
				let res5 = JSON.parse(JSON.stringify(res4).replace(/label_id/g,"value"));
				let res6 = JSON.parse(JSON.stringify(res5).replace(/area_id/g,"value"));
				this.cityList = JSON.parse(JSON.stringify(res6).replace(/area_name/g,"label"));
				
				let scRes1=JSON.parse(JSON.stringify(res).replace(/school_name/g,"label"));
				this.schoolListRes=JSON.parse(JSON.stringify(scRes1).replace(/school_id/g,"value"));
								
				console.log(this.schoolListRes)
			})
		},
		//获取绑定信息
		getInfo(){
			let data=Object.assign(this.infoData,{});
			this.$api.getInfo(data).then(res=>{
				console.log(res)
				//转换地区数据
				if (res.district_list.length > 1) {
					let values = res.district_list
					for (var i = 0; i < values.length; i++) {
						var obj = {
							label: values[i].district_name,
							value: values[i].district_id
						};
						this.provinceList.push(obj);
					}
				} else {
					uni.showToast({
						icon: "none",
						title: '暂无数据'
					})
				}
				//转换高考年份
				if (res.year_list.length > 1) {
					let values = res.year_list
					for (var i = 0; i < values.length; i++) {
						var obj = {
							label: values[i].year_name,
							value: values[i].year_value
						};
						this.yearList.push(obj);
					}
				} else {
					uni.showToast({
						icon: "none",
						title: '暂无数据'
					})
				}
			})
		}
		
	}
};
</script>

<style scoped lang="scss">
page{
	background-color: #F6f6f6;
}
.wrap {
	padding: 30rpx;
}

.agreement {
	display: flex;
	align-items: center;
	margin: 40rpx 0;

	.agreement-text {
		padding-left: 8rpx;
		color: $u-tips-color;
	}
}
</style>
