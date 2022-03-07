<template>
	<view>
		<u-section :title="name" :show-line="false" :right="false" class="p-3 college-title"></u-section>
		<view class="survey">
			<view class="item">
				<!-- <u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon> -->
				<view class="content">
					<view>{{majorSurvey.education_level}}</view>
					<text>学历层次</text>
				</view>				
			</view>
			<view class="item">
				<!-- <u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon> -->
				<view class="content">
					<view>{{majorSurvey.years_study}}</view>
					<text>学业年限</text>
				</view>				
			</view>
			<view class="item">
				<!-- <u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon> -->
				<view class="content">
					<view>{{majorSurvey.degree_awarded}}</view>
					<text>授予学位</text>
				</view>				
			</view>
			<view class="item">
				<!-- <u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon> -->
				<view class="content ">
					<view>{{majorSurvey.male_ratio}}</view>
					<text>男女比例</text>
				</view>				
			</view>
			<view class="item">
				<!-- <u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon> -->
				<view class="content ">
					<view>{{majorSurvey.liberal_arts_ratio}}</view>
					<text>文理比例</text>
				</view>				
			</view>
			<view class="item">
				<!-- <u-icon name="/static/navicons/navicons3.png" :size="90"></u-icon> -->
				<view class="content ">
					<view>{{majorSurvey.five_salary}}</view>
					<text>五年月薪</text>
				</view>				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"majorSurvey",
		props:{
			name:{
				type:String
			},
			majorSurvey:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.survey{
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	.item{
		width: 33.333%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20rpx;
		text-align: center;
		text{
			font-size: 24rpx;
			color: #606266;
		}
	}
}
</style>
