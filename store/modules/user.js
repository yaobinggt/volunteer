export default{
	state:{
		//登录状态
		loginStatus:false,
		//是否会员
		isMember:null,
		//token
		token:null,
		//用户信息
		userInfo:{
			
		}
	},
	mutations:{
		//初始化登录状态
		initUser(state){
			let userInfo=uni.getStorageSync('userInfo');
			let token=uni.getStorageSync('token');
			let isMember=uni.getStorageSync('isMember');
			if(userInfo){
				console.log(userInfo)
				userInfo=JSON.parse(userInfo);
				state.userInfo=userInfo;
				state.token=userInfo.token;
				state.loginStatus=true;
				state.isMember=userInfo.userinfo.is_member;
			}
		},
		//登录
		login(state,user){
			console.log(user)
			state.userInfo=user.userinfo;
			state.loginStatus=true;
			state.token=user.token;
			state.isMember=user.userinfo.is_member;
			//持久存储token
			uni.setStorageSync('userInfo',JSON.stringify(user))
			uni.setStorageSync('token',JSON.stringify(user.token))
			uni.setStorageSync('isMember',JSON.stringify(user.userinfo.is_member))
		},
		//退出登录
		loginOut(state){
			state.userInfo={};
			state.loginStatus=false;
			state.token=null;
			uni.removeStorageSync('userInfo');
			uni.removeStorageSync('token');
		}
	}
}