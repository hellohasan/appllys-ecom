<template>
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">{{ $t('Manage Permission') }}</h3>
					<div class="card-tools" v-permission="['permission-create']">
						<button class="btn btn-success" @click="openPermissionsModal"><i class="fas fa-plus fa-w"></i>
							{{ $t('Add New') }}
						</button>
					</div>
				</div>
				<!-- /.card-header -->
				<div class="card-body table-responsive p-0">
					<vue-element-loading :active="!permissions.length" spinner="bar-fade-scale" />

					<table class="table table-hover table-bordered">
						<thead>
							<tr>
								<th>{{ $t('SL') }}</th>
								<th>{{ $t('name') }}</th>
								<th>{{ $t('Role') }}</th>
								<th>{{ $t('Modify') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(permission, index) in permissions" :key="permission.id">
								<td>{{ ++index }}</td>
								<td>{{ permission.name }}</td>
								<td>
									<span class="badge badge-success mr-1" v-for="r in permission.roles" :key="r.id">{{ r.name }}</span>
								</td>
								<td>
									<button v-permission="['permission-edit']" class="btn btn-primary btn-sm" @click="editPermissions(permission)"><i class="far fa-edit"></i>
										{{ $t('Edit') }}
									</button>
									<button v-permission="['permission-delete']" class="btn btn-danger btn-sm" v-if="index" @click="deletePermission(permission.id)"><i class="fas fa-trash"></i> {{ $t('Delete') }}</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- /.card -->
		</div>

		<!-- Modal -->
		<div class="modal fade" id="crudModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="userModalLabel">{{ editMode ? $t('Update') : $t('Add New') }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="editMode ? updatePermissions() : createPermissions()" @keydown="form.onKeydown($event)">
						<div class="modal-body">
							<div class="form-group">
								<label for="type">{{ $t('Name') }}</label>
								<input v-model="form.name" type="text" name="name" :placeholder="$t('Name')" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
								<has-error :form="form" field="name"></has-error>
							</div>
							<div class="form-group">
								<label for="type">{{ $t('SelectRoles') }}</label>
								<custom-select-multiple :options="roleList" multiple="true" v-model="form.roleIds" placeholder="SelectMultiple" name="roleIds"></custom-select-multiple>
								<has-error :form="form" field="roleIds"></has-error>
							</div>
							<div class="form-check">
								<input type="checkbox" class="form-check-input" v-model="form.crud" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">Check me out for ( *-create *-store *-edit *-update *-destroy )</label>
							</div>
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
	</div>
</template>

<script>
	import CustomSelectMultiple from '../../components/Global/CustomSelectMultiple'
	export default {
		components: {
			CustomSelectMultiple,
		},
		data() {
			return {
				permissions: [],
				roleList: [],
				form: new Form({
					name: '',
					roleIds: [],
					crud: ''
				}),
				editMode: false,
				editId: null
			}
		},
		methods: {
			openPermissionsModal() {
				this.form.reset();
				this.form.clear();
				this.editMode = false;
				this.editId = null;
				this.form.roleIds = [];
				$('#crudModal').modal('show');
			},
			editPermissions(permissions) {
				this.openPermissionsModal();
				this.editMode = true;
				this.editId = permissions.id;
				this.form.name = permissions.name;
				let ids = [];
				_.forEach(permissions.roles, function (value, key) {
					ids.push(value.id);
				});
				this.form.roleIds = ids;
			},
			createPermissions() {
				this.form.post('/api/permissions')
					.then(({ data }) => {
						$('#crudModal').modal('hide');
						this.form.roleIds = [];
						this.$store.dispatch('user/loadPermissions', data.permissions);
						this.loadPermissions();
						Toast.fire({
							icon: 'success',
							title: 'Permissions successfully created.'
						});
					})
			},
			updatePermissions() {
				this.form.put('/api/permissions/' + this.editId)
					.then(({ data }) => {
						$('#crudModal').modal('hide');
						this.form.roleIds = [];
						this.$store.dispatch('user/loadPermissions', data.permissions);
						this.loadPermissions();
						Toast.fire({
							icon: 'success',
							title: 'Permissions successfully Updated.'
						})
					})
			},
			deletePermission(id) {
				Swal.fire({
					title: this.$t('confirm_title'),
					text: this.$t('confirm_message'),
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: this.$t('confirm'),
					cancelButtonText: this.$t('cancel'),
				}).then((result) => {
					if (result.isConfirmed) {
						axios.delete('/api/permissions/' + id)
							.then(({ data }) => {
								this.form.roleIds = [];
								this.loadPermissions();
								this.$store.dispatch('user/loadPermissions', data.permissions);
								Swal.fire({
									title: this.$t('delete_title'),
									text: this.$t('delete_message'),
									icon: 'success',
									confirmButtonText: this.$t('ok')
								})
							}).catch(() => {
								Swal.fire({
									icon: 'error',
									title: this.$t('error_alert_title'),
									text: this.$t('error_alert_text'),
									confirmButtonText: this.$t('ok'),
								})
							});
					}
				})
			},
			loadPermissions() {
				axios.get('api/permissions').then(({ data }) => {
					this.permissions = data
				})
			},
			loadRoleList() {
				axios.get('api/roles').then(({ data }) => {
					let roles = [];
					_.forEach(data, function (value, key) {
						let rr = {
							id: value.id,
							text: value.name
						}
						roles.push(rr);
					});
					this.roleList = roles;
				})
			},
		},
		created() {
			this.loadPermissions();
			this.loadRoleList();
		}
	}
</script>

<style>
</style>
