<template>
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="myModalLabel" v-if="editMode">Update {{title }}</h5>
					<h5 class="modal-title" id="myModalLabel" v-else>Add New {{title }}</h5>

					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form @submit.prevent="editMode ? updateModal() : createModal()" @keydown="form.onKeydown($event)">
					<div class="modal-body">
						<slot />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button :disabled="form.busy" type="submit" class="btn btn-primary">
							{{ editMode ? 'Update' : 'Create' }}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FormModalCreateEdit",
		data() {
			return {
				editMode: false,
			}
		},
		props: {
			form: {
				type: Object,
				require: true,
			},
			title: {
				type: String,
				require: true
			}
		},
		methods: {
			openMyModal(mode = false) {
				this.form.reset();
				this.form.clear();
				this.editMode = mode;
				$('#myModal').modal('show');
			},
			hideMyModal() {
				$('#myModal').modal('hide');
			},
			createModal() {
				this.$parent.storeForm();
			},
			updateModal() {
				this.$parent.updateForm();
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
