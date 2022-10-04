<template>
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="myModalLabel" v-if="editMode">{{title }} {{ $t('UpdateModal')}}</h5>
					<h5 class="modal-title" id="myModalLabel" v-else>{{title }} {{ $t('AddModal')}}</h5>

					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form @submit.prevent="editMode ? updateModal() : createModal()" @keydown="form.onKeydown($event)">
					<div class="modal-body">
						<slot />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('Close') }}
						</button>
						<button :disabled="form.busy" type="submit" class="btn btn-primary">
							{{ editMode ? $t('Update') : $t('Create') }}
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
