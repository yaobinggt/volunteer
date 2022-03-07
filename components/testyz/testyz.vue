<template>
	<view class="">
		<u-form :model="form" ref="uForm">
			<u-form-item label="姓名" prop="name">
				<u-input v-model="form.name" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		name:"volunteer",
		data() {
			return {
				form: {
					name: '',
				},
				rules: {
					name: [
						{
							required: true,
							message: '请输入姓名',
							trigger: ['blur', 'change']
						}
					]
				}
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},


		methods:{

			
			submit() {
				console.log(this.simulation)
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
