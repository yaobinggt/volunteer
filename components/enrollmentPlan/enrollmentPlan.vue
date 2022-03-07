<template>
	<view>
		<view class="h-table">
			<view class="h-tr h-tr-3 h-thead ">
				<view class="h-td" style="width: 40%;">专业名称</view>
				<view class="h-td" style="width: 20%;">批次</view>
				<view class="h-td" style="width: 15%;">计划数</view>
				<view class="h-td" style="width: 25%;">学制/学费</view>
			</view>
			<view class="h-tr h-tr-3" v-for="(item,index) in list" :key="index">
				<view class="h-td" style="width: 40%;">{{item.specialty_name}}</view>
				<view class="h-td" style="width: 20%;">{{item.batch}}</view>
				<view class="h-td" style="width: 15%;">{{item.number_of_plans}}</view>
				<view class="h-td" style="width: 25%;">{{item.school_system}}/¥{{item.tuition_fee}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"enrollmentPlan",
		props:{
			list:{
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
@import "@/common/helang-table.scss"
</style>
