<template>
	<view>
		<view class="search-input p-3">
			<u-search placeholder="请输入您要查询的专业" v-model="form.specialty_name" :show-action="false" @search="search"></u-search>
		</view>
		<view class="list px-3">
			<view class="item flex-between py-2" v-for="(item,index) in major" :key="index" @click="goMajorDetail(item.id)">
				<view class="name font-md">
					<text>{{item.major_name}}</text>
				</view>
				<u-icon name="arrow-right" color="#999" size="28"></u-icon>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					signature:"72947e99b7ceb35436cd241443f3e70a",
					specialty_name: ""
				},
				major:[],
			};
		},
		methods:{
			search(){
				
				if(this.form.specialty_name==""){
					uni.showToast({
						title:'请输入正确的专业名字',
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
					this.major=res.specialty_list
				})
			},
			goMajorDetail(id){
				uni.navigateTo({
					url:'/pages/majorDetail/majorDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	
}
</style>
