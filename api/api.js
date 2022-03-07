import  api from './request.js'
export default {
	//获取首页广告
	getCarousel(data){
		return api.post('/Notlogged/carousel',data)
	},
	//登录
	doLogin(data){
		return api.post('/Notlogged/dologin',data)
	},
	//获取验证码
	getCaptach(data){
		return api.post('/Notlogged/getcaptach',data)
	},
	//获取学校查询条件
	getSchoolSearch(data){
		return api.post('/Notlogged/get_school_search',data)
	},
	//获取学校列表
	getSchool(data){
		return api.post('/Notlogged/get_school',data)
	},
	//获取学校详情
	getSchoolDetail(data){
		return api.post('/Notlogged/school_detail',data)
	},
	//获取专业列表
	getSpecialty(data){
		return api.post('/Notlogged/specialty',data)
	},
	//获取专业详情
	getSpecialtyDetail(data){
		return api.post('/Notlogged/specialtydetail',data)
	},
	//获取开设学校
	getCollege(data){
		return api.post('/Notlogged/school_specialty',data)
	},
	//获取公告列表
	getNoticeList(data){
		return api.post('/Notlogged/notice',data)
	},
	//获取公告详情
	getNoticeInfo(data){
		return api.post('/Notlogged/noticeinfo',data)
	},
	//获取竞争力排行
	getCompete(data){
		return api.post('/Notlogged/compete_sort',data)
	},
	//大学薪酬排名
	getSalary(data){
		return api.post('/Notlogged/salary_sort',data)
	},
	//软科排名
	getRuanke(data){
		return api.post('/Notlogged/ruanke_sort',data)
	},
	//校友会得分排名
	getAlumni(data){
		return api.post('/Notlogged/alumni_sort',data)
	},
	//U.S.News排行榜
	getUs(data){
		return api.post('/Notlogged/us_sort',data)
	},
	//泰晤士得分排行
	getThs(data){
		return api.post('/Notlogged/ths_sort',data)
	},
	//QS世界大学排行
	getQs(data){
		return api.post('/Notlogged/qs_sort',data)
	},
	//武书连得分排行
	getWushu(data){
		return api.post('/Notlogged/wushu_sort',data)
	},
	//专业薪酬排行
	getMajor(data){
		return api.post('/Notlogged/major_sort',data)
	},
	//招生计划
	getPlan(data){
		return api.post('/Notlogged/enrollment_plan',data)
	},
	//院校专业录取数据
	getSpecialtyAdmission(data){
		return api.post('/Notlogged/specialty_admission',data)
	},
	//院校录取数据
	getAdmission(data){
		return api.post('/Notlogged/admission',data)
	},
	//模拟志愿获取选考科目
	getElective(data){
		return api.post('/Logged/elective',data)
	},
	//模拟志愿提交
	getSimulation(data){
		return api.post('/Notlogged/simulation',data)
	},
	//筛选信息
	getFilter(data){
		return api.post('/Notlogged/filter',data)
	},
	//筛选结果
	getFilterResult(data){
		return api.post('/Notlogged/filter_result',data)
	},
	//志愿保存
	saveVoluntary(data){
		return api.post('/Notlogged/voluntary',data)
	},
	//我的志愿
	getMyVoluntary(data){
		return api.post('/Logged/my_voluntary',data)
	},
	//我的志愿详情
	getVoluntaryInfo(data){
		return api.post('/Logged/my_voluntary_info',data)
	},
	//搜索学校
	getSearch(data){
		return api.post('/Notlogged/search',data)
	},
	//----------------------------------------------
	//绑定用户信息
	bindUserinfo(data){
		return api.post('/Logged/upuser',data)
	},
	//获取绑定信息
	getInfo(data){
		return api.post('/Logged/getinfo',data)
	},
	//获取用户信息
	getUserInfo(data){
		return api.post('/Logged/userinfo',data)
	},
	//获取城市学校信息
	getCitySchool(data){
		return api.post('/Logged/district',data)
	},
	//获取商品信息
	getGoods(data){
		return api.post('/Logged/goods',data)
	},
	//生成订单
	createOrder(data){
		return api.post('/Logged/order',data)
	},
	//查询订单
	queryOrder(data){
		return api.post('/Logged/queryorder',data)
	},
	//绑定会员卡号
	bindVip(data){
		return api.post('/Logged/bind',data)
	},
}