<template>
	<view>
		<u-section title="院系专业" :show-line="false" :right="false" class="p-3 college-title"></u-section>
		<view class="subject">
			<view class="items" v-for="(item,index) in collegeSubject" :key="index">
				<view class="title flex flex-center px-3 mt-3 mb-2" @click="item.status = !item.status">
					<view class="flex-1">{{item.branch_name}}</view>
					<view class="right">
						<text>{{item.branch_specialty.length}}个</text>
						<u-icon name="arrow-right" color="#999" size="26" class=""></u-icon>
					</view>
				</view>
				<view class="list" v-show="item.status">
					<view class="item flex flex-center px-3 py-2" v-for="(ite,index) in item.branch_specialty" :key="index">
						<view class="name flex-1">
							{{ite.specialty_name}}
						</view>
						<view class="right">
							<text>本科</text>
							<u-icon name="arrow-right" color="#999" size="24"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collegeSubject",
		props:{
			collegeSubject:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				major:[
					{
						name:"哲学类",
						id:10,
						status:false,
						list:[
							{
								id:100,
								title:"哲学",
								code:"010101"
							},
							{
								id:101,
								title:"逻辑学",
								code:"010102"
							},
							{
								id:102,
								title:"宗教学",
								code:"010103"
							},
							{
								id:103,
								title:"伦理学",
								code:"010104"
							},
						]
					},
					{
						name:"哲学类22",
						id:10,
						status:false,
						list:[
							{
								id:100,
								title:"哲学22",
								code:"010101"
							},
							{
								id:101,
								title:"逻辑学22",
								code:"010102"
							},
							{
								id:102,
								title:"宗教学",
								code:"010103"
							},
							{
								id:103,
								title:"伦理学",
								code:"010104"
							},
						]
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.subject{
	.items{
		margin-bottom: 30rpx;
		.title{
			
		}
		.list{
			.item{
				color: #666;
				font-size: 26rpx;
			}
		}
	}
}
</style>
