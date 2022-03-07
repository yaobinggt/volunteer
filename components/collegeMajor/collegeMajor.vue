<template>
	<view class="college-major">
		<u-section title="特色专业" :show-line="false" :right="false" class="p-3 college-title"></u-section>
		<view class="major p-3">
			<view class="" v-if="collegeMajor.length == 0">
				暂无数据
			</view>
			<u-tag mode="plain" type="info" shape="circle" v-for="(item,index) in collegeMajor" :key="index" :text="item.name" class="mr-1 mb-1" />
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeMajor",
		props:{
			collegeMajor:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.college-major{
	.major{
		
	}
}
</style>
