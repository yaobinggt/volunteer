<template>
	<view class="navicons px-3">
		<u-grid :col="4" :border="false">
			<u-grid-item  @click="goTab1" class="navitem">
				<u-icon name="/static/navicons/navicons1.png" :size="100"></u-icon>
				<view class="grid-text">查大学</view>
			</u-grid-item>
			<u-grid-item  @click="goTab2" class="navitem">
				<u-icon name="/static/navicons/navicons2.png" :size="100"></u-icon>
				<view class="grid-text">查专业</view>
			</u-grid-item>
			<u-grid-item  @click="goPage" class="navitem">
				<u-icon name="/static/navicons/navicons5.png" :size="100"></u-icon>
				<view class="grid-text">院校排名</view>
			</u-grid-item>
			<u-grid-item  @click="goTab3" class="navitem">
				<u-icon name="/static/navicons/navicons6.png" :size="100"></u-icon>
				<view class="grid-text">一键填报</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		name:"navicons",
		data() {
			return {
				navicons:[
					{
						name:"查大学",
						src:"/static/navicons/navicons1.png",
						url:"/pages/tabbar/school/school"
					},
					{
						name:"查专业",
						src:"/static/navicons/navicons2.png",
						url:"pages/tabbar/major/major"
					},
					// {
					// 	name:"招生计划",
					// 	src:"/static/navicons/navicons3.png"
					// },
					// {
					// 	name:"查录取分",
					// 	src:"/static/navicons/navicons4.png"
					// },
					{
						name:"院校排名",
						src:"/static/navicons/navicons5.png",
						url:"/pages/ranking/ranking/ranking"
					},
					{
						name:"一键填报",
						src:"/static/navicons/navicons6.png",
						url:"/pages/tabbar/fill/fill"
					},
					// {
					// 	name:"批次线",
					// 	src:"/static/navicons/navicons7.png"
					// },
					// {
					// 	name:"院校对比",
					// 	src:"/static/navicons/navicons8.png"
					// },
				]
			};
		},
		methods:{
			goPage(){
				uni.navigateTo({
					url:"/pages/ranking/ranking/ranking"
				})
			},
			goTab1(){
				uni.switchTab({
					url:"/pages/tabbar/school/school"
				})
			},
			goTab2(){
				uni.switchTab({
					url:"/pages/tabbar/major/major"
				})
			},
			goTab3(){
				uni.switchTab({
					url:"/pages/tabbar/fill/fill"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.navitem{
	background-color: #F4F4F5 !important;
}
</style>
