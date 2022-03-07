<template>
	<view>
		<view class="title flex-center font-lg mt-5 font-weight-bolder">
			{{title}}
		</view>
		<view class="info p-3" style="white-space: pre-line;">
			<view v-html="info">
				
			</view>
			
			<!-- <rich-text :nodes="info"></rich-text> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					signature:"0d80333b1f095ee90639c8646c4d4086",
					notice_id:""
				},
				title:"",
				time:"",
				info:'',
				content:''
			}
		},
		onLoad(options){
			this.from.notice_id=options.id
		},
		created() {
			this.getNoticeInfo();
		},
		
		methods: {
			getNoticeInfo(){
				let data=Object.assign(this.from,{})
				this.$api.getNoticeInfo(data).then(data=>{
					console.log(data)
					this.title=data.post_title;
					this.time=data.published_tim;
					let message =decodeURIComponent(data.post_content).replace(/\\n/g,"");
					
				    let message2=this.escapeHtml(message);
					
					this.info = message2
			
				})
				
			},
			unescape(msg) {
				var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
				msg = msg.replace(/[|]*\n/, ''); //去除行尾空格
				msg = msg.replace(/&npsp;/gi, ''); //去掉npsp
				return msg;
			},
			// 处理方法
			escapeHtml(str) {
				var arrEntities = {
					'lt': '<',
					'gt': '>',
					'nbsp': ' ',
					'amp': '&',
					'quot': '"'
				};
				return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) {
					return arrEntities[t];
				});
			},
		},
		filters:{
			// unescape(msg) {
			// 	var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
			// 	msg = msg.replace(/[|]*\n/, ''); //去除行尾空格
			// 	msg = msg.replace(/&npsp;/gi, ''); //去掉npsp
			// 	return msg;
			// }
		},
		computed: {
			handledCont(){
			let _cont = this.info;
			return _cont
			.replace(_cont ? /&(?!#?\w+;)/g : /&/g, "&")
			.replace(/</g, "<")
			.replace(/>/g, ">")
			.replace(/"/g, '"')
			.replace(/'/g, "'")
			}
		},
	}
</script>

<style lang="scss" scoped>
.title{
	text-align: center;
}
</style>
