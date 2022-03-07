<template>
	<view>
		<view class="search-input p-3">
			<u-search placeholder="请输入您要查询的学校" v-model="form.school_name" :show-action="false" @search="search"></u-search>
		</view>
		<view class="list">
			<schoolList :college="college"></schoolList>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					signature:"72947e99b7ceb35436cd241443f3e70a",
					school_name: ""
				},
				college:[],
			};
		},
		methods:{
			search(){
				
				if(this.form.school_name==""){
					uni.showToast({
						title:'请输入正确的学校名字',
						icon:'none'
					})
				}else{
					this.getSearch()
				}
			},
			//获取搜索数据
			getSearch(){
				let data=Object.assign(this.form,{});
				this.$api.getSearch(data).then(res=>{
					console.log(res)
					this.college=res.school_list
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	
}
</style>
