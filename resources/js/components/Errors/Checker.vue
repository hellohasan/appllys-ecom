<template>
	<div>
		<div class="form-group">
			<label for="type">Select Sections</label>
			<custom-select-multiple :options="sections" multiple="true" v-model="form.academic_section_ids" name="academic_section_ids"></custom-select-multiple>
			<has-error :form="form" field="academic_section_ids"></has-error>
		</div>
	</div>
</template>

<script>
	import CustomSelectMultiple from '../../components/Global/CustomSelectMultiple'
	export default {
		name: "Checker",
		components: {
			CustomSelectMultiple,
		},
		data() {
			return {
				form: new Form({
					academic_section_ids: ''
				}),
				sections: [
					{ id: 1, text: "Hasan" }
				]
			}
		},

	}
</script>

<style lang="scss" scoped>
</style>
