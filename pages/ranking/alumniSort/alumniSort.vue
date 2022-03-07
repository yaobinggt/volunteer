<template>
	<view>
		<view class="sort-select flex-between px-3">
			<text>排行筛选条件</text>
			<view class="select-box">
				<view class="btn-sel flex-center" @click="districtShow = true">
					<text>{{districtName}}</text>
					<u-icon name="../../../static/icon-down.png" color="#787878" size="32"></u-icon>
				</view>
				<view class="btn-sel flex-center" @click="levelShow = true">
					<text>{{levelName}}</text>
					<u-icon name="../../../static/icon-down.png" color="#787878" size="32"></u-icon>
				</view>
				<u-select v-model="districtShow" :default-value="districtDefault" mode="single-column" :list="districtList" @confirm="districtConfirm" class="score-select"></u-select>
				<u-select v-model="levelShow" :default-value="levelDefault" mode="single-column" :list="levelList" @confirm="levelConfirm" class="score-select"></u-select>
			</view>
		</view>
		<rankScore :collegeList="collegeList" type="alumni"></rankScore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					signature:'72947e99b7ceb35436cd241443f3e70a',
					district_id:0,
					level_id:0,
				},
				collegeList:[],
				districtList:[],//地区
				levelList:[],//专科本科
				districtName:'全国',
				levelName:'不限',
				districtShow:false,
				levelShow:false,
				districtDefault:[0],
				levelDefault:[0],
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				let data= Object.assign(this.from,{});
				this.$api.getAlumni(data).then(data=>{
					//this.collegeList=data.list;
					
					if(data.list.length>1){
						let values =data.list;
						for(var i=0;i<data.list.length;i++){
							var obj={
								score:values[i].alumni_score,
								school_level:values[i].school_level,
								school_name:values[i].school_name,
								sort:values[i].sort,
								thumbnail:values[i].thumbnail
							}
							this.collegeList.push(obj);
						}
					}else{
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}

					//转换地区数据
					if (data.search.district_list.length > 1) {
						let values = data.search.district_list
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].district_name,
								value: values[i].district_id
							};
							this.districtList.push(obj);
						}
					} else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
					
					//转换本科专科 数据
					if (data.search.level_list.length > 1) {
						let values = data.search.level_list
						for (var i = 0; i < values.length; i++) {
							var obj = {
								label: values[i].label_name,
								value: values[i].label_id
							};
							this.levelList.push(obj);
						}
					} else {
						uni.showToast({
							icon: "none",
							title: '暂无数据'
						})
					}
				})
			},
			getListTwo(){
				let data= Object.assign(this.from,{});
				this.$api.getAlumni(data).then(data=>{
					this.collegeList=data.list;
					console.log(data.list)
				})
			},
			districtConfirm(e) {
				console.log(e)
				this.districtName=e[0].label
				this.from.district_id=e[0].value
				let index=0;
				for(let i=0;i<this.districtList.length;i++){
					if(this.districtList[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.districtDefault[0]=index;
				console.log(this.from)
				this.getListTwo()
			},
			levelConfirm(e) {
				this.levelName=e[0].label
				this.from.level_id=e[0].value
				let index=0;
				for(let i=0;i<this.levelList.length;i++){
					if(this.levelList[i].label == e[0].label){
						index=i;
						break
					}
				}
				this.levelDefault[0]=index;
				this.getListTwo()
			}
		}
	}
</script>

<style lang="scss">
.select-box{
	height: 88rpx;
	display: flex;
	align-items: center;
	.btn-sel{
		border: solid 1rpx #C0C4CC;
		border-radius: 40rpx;
		padding:6rpx 5rpx 6rpx 15rpx;
		font-size: 24rpx;
		color: #787878;
		margin-left: 10rpx;
	}
}
</style>
