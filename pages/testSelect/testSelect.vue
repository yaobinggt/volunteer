<template>
	<view >


			
				<u-dropdown ref="uDropdown"  class="slelect">
					<u-dropdown-item title="属性">
						<view class="slot-content">
							<view class="u-text-center u-content-color u-m-t-20 u-m-b-20">其他自定义内容</view>
							<u-button type="primary" @click="closeDropdown">确定</u-button>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="属性">
						<view class="slot-content">
							<view class="u-text-center u-content-color u-m-t-20 u-m-b-20">其他自定义内容</view>
							<u-button type="primary" @click="closeDropdown">确定</u-button>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="属性">
						<view class="slot-content">
							<view class="u-text-center u-content-color u-m-t-20 u-m-b-20">其他自定义内容</view>
							<u-button type="primary" @click="closeDropdown">确定</u-button>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="属性">
						<view class="slot-content">
							<view class="u-text-center u-content-color u-m-t-20 u-m-b-20">其他自定义内容</view>
							<u-button type="primary" @click="closeDropdown">确定</u-button>
						</view>
					</u-dropdown-item>
				</u-dropdown>

		<view class="list">
			<view class="item p-3" v-for="(item,index) in 50" :key="index">
				<view class="button" @click="dj">
					点击
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			dj(){
				console.log(111)
			},
			closeDropdown() {
				this.$refs.uDropdown.close();
			}
		}
	}
</script>

<style lang="scss" scoped>
.slelect{
	/deep/.u-dropdown__menu[data-v-0340bb60]{
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		border-bottom: solid 1rpx #E4E7ED;
		z-index: 9999;
	}
	/deep/.u-dropdown__content[data-v-0340bb60]{
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100% !important;
		
	}
	/deep/.u-dropdown__content__popup[data-v-0340bb60]{
		height: 80%;
		overflow-y: auto;
		background-color: #FFFFFF;
		z-index: 99;
		padding-top: 90rpx;
	}
}
</style>
