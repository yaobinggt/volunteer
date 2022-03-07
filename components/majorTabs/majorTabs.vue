<template>
	<view class="majorTabs">
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
			 swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" class="majorSwiper">
			<swiper-item class="swiper-item" >
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
					<majorCollapse :majorList="undergraduateMajor"></majorCollapse>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item" >
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
					<majorCollapse :majorList="specialistMajor"></majorCollapse>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"majorTabs",
		data() {
			return {
				from:{
					signature:'72947e99b7ceb35436cd241443f3e70a'
				},
				list: [{
					name: '本科专业'
				}, {
					name: '专科专业'
				},],
				specialistMajor:[],//专科专业
				undergraduateMajor:[],//本科专业
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			};
		},
		created() {
			this.getSpecialty();
		},
		methods: {
			
			//获取所有专业列表
			getSpecialty(){
				let data=Object.assign(this.from,{});
				this.$api.getSpecialty(data).then(data=>{
					console.log(data)
					this.specialistMajor=data.specialist_major;
					this.undergraduateMajor=data.undergraduate_major;
				})
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.majorTabs{
	padding-top: 90rpx;
	height: 100%;
}
.majorSwiper{
	height: 100%;
}
</style>
