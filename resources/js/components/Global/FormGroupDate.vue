<template>
	<div class="form-group" :class="col">
		<label :for="name">{{label}}:</label> <br>
		<date-picker :default-value="value" :range="range" :format="format" :value-type="dateFormat" @clear="clearValue" :type="type" :placeholder="label" clearable :input-class="form.errors.has(name) ? 'form-control is-invalid' : 'form-control'" :value="value" :required="required" :editable="!readonly" @input="updateValue($event)"></date-picker>
		<has-error :form="form" :field="name"></has-error>
	</div>
</template>

<script>
	import DatePicker from 'vue2-datepicker';
	export default {
		name: "FormGroupDate",
		components: {
			DatePicker,
		},
		props: {
			value: {
				default: null
			},
			type: {
				type: String,
				default: 'date'
			},
			format: {
				type: String,
				default: 'YYYY-MM-DD'
			},
			dateFormat: {
				type: String,
				default: 'format'
			},
			range: {
				type: Boolean,
				default: false
			},
			name: {
				type: String,
				required: true
			},
			label: {
				type: String,
				required: true
			},
			form: {
				type: Object,
				required: true
			},
			col: {
				type: String,
				default: null
			},
			required: {
				required: false,
				type: Boolean,
				default: false
			},
			readonly: {
				required: false,
				type: Boolean,
				default: false
			}
		},
		methods: {
			updateValue: function (value) {
				this.$emit('input', value)
			},
			clearValue: function () {
				this.$emit('input', '');
			}
		}
	}
</script>

<style scoped>
</style>
