<template>
	<view>
		<view class="list-item flex p-3" v-for="(item,index) in 23" :key="index" @click="toDetail(item.id)">
			<view class="logo" >
				<image src="../../../static/bj.jpg" mode="widthFix"></image>
				<!-- <image :src="item.thumbnail" mode="widthFix"></image> -->
			</view>
			<view class="content px-2">
				<view class="title">
					大学名称添加中<!-- {{item.school_name}} -->
				</view>
				<view class="tags">
					<!-- <u-tag  v-show="item.is_double == 1" text="双一流" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
					<u-tag  v-show="item.is_whether == 1" text="985" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
					<u-tag  v-show="item.is_two == 1" text="211" type="info" mode="plain" size="mini" shape="circle" class="isTag"/> -->
					<u-tag text="双一流" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
					<u-tag text="985" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
					<u-tag text="211" type="info" mode="plain" size="mini" shape="circle" class="isTag"/>
				</view>
				<view class="desc"><!-- {{item.district_name}} {{item.affiliation}} {{item.nature_name}} {{item.level_name}} 综合排名:{{item.list_order}} --></view>
			</view>
			<view class="button">
				<u-button shape="circle" size="mini">已关注</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.list-item{
	align-items: center;
	border-bottom: solid 1rpx #E4E7ED;
	.logo{
		width: 110rpx;
		height: 110rpx;
		image{
			width: 100%;
		}
	}
	.content{
		flex: 1;
		.title{
			font-size:32rpx;
			margin-bottom: 10rpx;
		}
		.tags{
			margin-bottom: 10rpx;
			.isTag{margin-right: 10rpx;}
		}
		.desc{
			font-size: 24rpx;
			color: #909399;
		}
	}
	.button{
		width: 100rpx;
	}
}
</style>
