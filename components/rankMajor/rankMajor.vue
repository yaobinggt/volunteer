<template>
	<view class="rank-major">
		<view class="top flex p-2">
			<view class="text-rank">
				排名
			</view>
			<view class="text-name flex-1">
				专业
			</view>
			<view class="text-score">
				薪资
			</view>
		</view>
		<view class="list">
			<view class="item flex py-3" v-for="(item,index) in collegeList" :key="index">
				<view class="sort flex-center">
					{{item.sort}}
				</view>
				<view class="box flex flex-1">
					<view class="desc">
						<view class="name pl-2">
							{{item.specialty_name}}
						</view>
					</view>
				</view>
				<view class="score flex">
					{{item.salary}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"rankMajor",
		props:{
			collegeList:{
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
.rank-major{
	.top{
		background-color: #eee;
		.text-rank{
			width: 100rpx;
		}
	}
	.list{
		.item{
			border-bottom: solid 1rpx #e3e3e3;
			.sort{
				width: 100rpx;
			}
			.box{
				align-items: center;
				image{
					width: 100rpx;
					height: 100rpx;
					margin-right: 10rpx;
				}
				.desc{
					.name{
						font-size: 32rpx;
					}
					.level{
						font-size: 26rpx;
						color: #909399;
					}
				}
			}
			.score{
				width: 120rpx;
				align-items: center;
				text-align: right;
				justify-content:flex-end;
				padding-right: 20rpx;
			}
		}
	}
}
</style>
