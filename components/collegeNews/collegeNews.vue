<template>
	<view class="college-news">
		<u-section title="招生简章" :show-line="false" sub-title="更多" class="p-3 college-title"></u-section>
		<view class="news">
			<view class="item p-3 flex-between" v-for="(item,index) in news" :key="index" @click="goNewsDetail(item.id)">
				<text>{{item.post_title}}</text>
				<u-icon name="arrow-right" color="#999" size="26"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeNews",
		props:{
			news:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			goNewsDetail(id){
				uni.navigateTo({
					url:"/pages/notice/noticeInfo?id="+id
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.news{
	.item{
		border-bottom: solid 1px #EFEFEF;
	}
}
</style>
