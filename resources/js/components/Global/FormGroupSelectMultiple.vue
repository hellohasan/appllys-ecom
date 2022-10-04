<template>
	<div class="form-group" :class="col">
		<label :for="id">{{label}}:</label>
		<select :name="name" :id="id" class="form-control is-invalid" multiple>
			<option disabled></option>
		</select>
		<has-error :form="form" :field="name"></has-error>
	</div>
</template>

<script>
	export default {
		name: "FormGroupSelectMultiple",
		twoWay: true,
		priority: 1000,
		props: {
			options: {
				required: true
			},
			name: {
				required: true
			},
			value: {
				default: ''
			},
			placeholder: {
				type: String,
				default: function () {
					return this.$t("SelectMultiple")
				}
			},
			form: {
				type: Object,
				required: true
			},
			col: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				required: true,
			}

		},
		computed: {
			id() {
				return "select_" + Math.random().toString(36).substring(7);
			}
		},
		mounted: function () {
			var vm = this
			$("#" + this.id)
				.select2({
					data: this.options,
					placeholder: this.label,
					width: '100%',
					allowClear: true,
				})
				.val(this.value)
				.trigger('change')
				.on('change', function () {
					vm.$emit('input', $(this).val())
				});
		},
		watch: {
			value: function (value) {
				if ([...value].sort().join(",") !== [...$("#" + this.id).val()].sort().join(",")) {
					$("#" + this.id).val(value).trigger('change');
					this.$emit('change', value);
				}
			},
			options: function (options) {
				$("#" + this.id).empty().select2({
					data: options,
					placeholder: this.label,
					width: '100%',
					allowClear: true,
				}).val('').trigger('change');
			}
		},
		destroyed: function () {
			$("#" + this.id).off().select2('destroy');
		}
	}
</script>

<style scoped>
</style>
