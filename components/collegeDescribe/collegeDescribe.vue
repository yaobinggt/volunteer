<template>
	<view>
		<u-section :title="name" :show-line="false" :right="false" class="p-3 college-title"></u-section>
		<view class="describe p-3">
			<view :class="[this.isShow ? 'text show':'text hide']" v-text="desc"></view>
			<view class="tag-more text-center mt-2" @click="tagShow()" >
				{{isShow?"收起全部":"展开全部"}} <u-icon name="arrow-right-double" color="#2979ff" size="26"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeDescribe",
		props:{
			name:{
				type:String,
				default:"学校概况"
			},
			desc:{
				type:String
			}
		},
		data() {
			return {
				isShow:false
			};
		},
		methods:{
			tagShow(){
				this.isShow= !this.isShow;
				console.log(this.isShow)
			}
		}
	}
</script>

<style lang="scss" scoped>
.describe{
	.text{
		line-height: 46rpx;
	}
	.hide{
		height: 138rpx;
		overflow: hidden;
	}
	.show{
		height: auto;
		overflow: auto;
	}
	.tag-more{
		color: #2979FF;
	}
}
</style>
