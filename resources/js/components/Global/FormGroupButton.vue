<template>
	<div class="form-group" :class="col">
		<button :type="nativeType" :disabled="form.busy" :class="{
    [`btn-${type}`]: true,
    'btn-block': block,
    'btn-lg': large,
    'font-weight-bold': bold,
    'text-uppercase': uppercase,
  }" class="btn">
			<i v-show="icon != ''" :class="icon"></i>&nbsp;
			<slot />
		</button>
	</div>
</template>

<script>
	export default {
		name: "FormGroupButton",
		props: {
			type: {
				type: String,
				default: 'primary'
			},
			form: {
				type: Object,
				required: true
			},
			icon: {
				type: String,
				default: ''
			},
			col: {
				type: String,
				default: 'col-12'
			},
			nativeType: {
				type: String,
				default: 'submit'
			},
			block: {
				type: Boolean,
				default: true
			},
			large: {
				type: Boolean,
				default: true
			},
			bold: {
				type: Boolean,
				default: true
			},
			uppercase: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
