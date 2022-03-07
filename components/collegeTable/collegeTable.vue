<template>
	<view class="college-table ">
		<u-table>
			<u-tr>
				<u-th>年份</u-th>
				<u-th>批次</u-th>
				<u-th>科目</u-th>
				<u-th>最低分</u-th>
				<u-th>最低位次</u-th>
			</u-tr>
			<u-tr v-for="(item,index) in list" :key="index">
				<u-td>{{item.year}}</u-td>
				<u-td>{{item.batch}}</u-td>
				<u-td>{{item.subject}}</u-td>
				<u-td>{{item.cast_file}}</u-td>
				<u-td>{{item.cast_gear}}</u-td>
			</u-tr>
			
		</u-table>
	</view>
</template>

<script>
	export default {
		name:"collegeTable",
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

</style>
