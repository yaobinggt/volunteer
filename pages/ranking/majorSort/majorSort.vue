<template>
	<view>
		<view class="sort-select flex-between px-3">
			<text>排行筛选条件</text>
			<view class="select-box">
				<view class="btn-sel flex-center" @click="levelShow = true">
					<text>{{levelName}}</text>
					<u-icon name="../../../static/icon-down.png" color="#787878" size="32"></u-icon>
				</view>
				<u-select v-model="levelShow" :default-value="levelDefault" mode="single-column" :list="levelList" @confirm="levelConfirm" class="score-select"></u-select>
			</view>
		</view>
		<rankMajor :collegeList="collegeList"></rankMajor>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					signature:'72947e99b7ceb35436cd241443f3e70a',
					level_id:0,
				},
				collegeList:[],
				levelList:[],//专科本科
				levelName:'不限',
				levelShow:false,
				levelDefault:[0],
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				let data= Object.assign(this.from,{});
				this.$api.getMajor(data).then(data=>{
					this.collegeList=data.list;
					console.log(data)

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
				this.$api.getMajor(data).then(data=>{
					this.collegeList=data.list;
					console.log(data.list)
				})
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
