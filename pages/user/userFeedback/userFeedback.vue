<template>
	<view>
		<view class="question p-3">
			<u-section title="问题描述" :right="false" class="mb-3"></u-section>
			<u-input v-model="value" :type="type" :border="border" class="mb-3" :placeholder="desc" />
			<u-input v-model="value2" :type="type2" :auto-height="autoHeight" :border="border" :height="height"  class="mb-3"  />
			<u-section title="上传图片" :right="false" class="mb-3"></u-section>
			<u-upload ref="uUpload" :action="action" :auto-upload="false" class="mb-3" ></u-upload>
			<u-button type="primary">确认提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				value2:'',
				type: 'text',
				type2: 'textarea',
				border: true,
				height: 200,
				autoHeight: true,
				desc:'请输入问题描述',
				desc2:'请详细描述一下您遇到的问题',
				action: 'http://www.example.com/upload',
			};
		},
		methods: {
			submit() {
				this.$refs.uUpload.upload();
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
