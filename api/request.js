import store from '@/store/index.js';
export default{
	config:{
		baseURL:'https://api.zhiyuanlinghang.com',

		//请求拦截器
		beforeRequest(options={}){
			return new Promise((resolve,reject)=>{
				//console.log('请求拦截器')
				//console.log(store.state.user.token)
				options.url= this.baseURL + options.url
				options.method=options.method || 'POST'
				options.header={
					Authorization:store.state.user.token
				}
				resolve(options)
			})
		},
		//响应拦截器
		handleResquest([error,res]){
			
			return new Promise((resolve,reject)=>{
				//错误提示处理
				console.log(res.data)
				if(res.data.code==500){

					uni.navigateTo({
						url:"/pages/user/bindVip/bindVip"
					})
					
				}else if(res.data.code==400){
					
					uni.navigateTo({
						url:"/pages/login/login"
					})
					
				}else if(res.data.code != 1 || res.data.code == 0){
					let msg = res.data.msg || '请求失败'
					uni.showToast({
					    title: msg,
						icon:"none"
					});
					return reject(msg)
				}

				resolve(res.data.data)
			})
		}
	},
	request(options={}){
		return this.config.beforeRequest(options).then(opt=>uni.request(opt)).then(this.config.handleResquest)
	},
	//GET请求
	get(url,params={},options={}){
		options.url=url;
		options.url += params ? ('?'+ Object.keys(params).map(key=>key+'='+ params[key]).join('&')):'';
		options.method='GET';
		return this.request(options);
	},
	//POST请求
	post(url,data = {},options = {}){
		options.url = url;
		options.method = 'POST';
		
		let commonData={
			version:"1.0.0",
			timestamp:parseInt(new Date()/1000).toString(),
			system:'3',
		};
		let copyData=Object.assign({},commonData,data)
		options.data = copyData
		return this.request(options)
	},
}