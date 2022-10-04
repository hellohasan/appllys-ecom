<template>
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title text-bold">{{ $t('Manage User') }}</h3>
					<div class="card-tools">
						<button class="btn btn-success" @click="openUserModal"><i class="fas fa-user-plus fa-w"></i>
							{{ $t('Add') }}
						</button>
					</div>
				</div>
				<!-- /.card-header -->
				<div class="card-body table-responsive p-0">
					<table class="table table-hover table-bordered">
						<thead>
							<tr>
								<th>{{ $t('SL') }}</th>
								<th>{{ $t('Name') }}</th>
								<th>{{ $t('Email') }}</th>
								<th>{{ $t('Role') }}</th>
								<th>{{ $t('RegisterAt') }}</th>
								<th>{{ $t('Action') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(user, index ) in users" :key="user.id">
								<td>{{ ++index }}</td>
								<td>{{ user.name }}</td>
								<td>{{ user.email }}</td>
								<td>
									<template v-if="user.roles.length">
										<span class="badge badge-success" v-for="role in user.roles" :key="role.id">{{role.name | capitalize }}</span>
									</template>
								</td>
								<td>{{ user.created_at | myDate }}</td>
								<td>
									<button class="btn btn-primary btn-sm" @click="editUser(user)"><i class="far fa-edit"></i></button>
									<button v-if="user.id != 1" class="btn btn-danger btn-sm" @click="deleteUser(user.id)"><i class="fas fa-trash"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- /.card -->
		</div>
		<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="userModalLabel">{{ editMode ? $t('Update') : $t('Add New') }} {{$t('User') }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="editMode ? updateUser() : createUser()" @keydown="form.onKeydown($event)">
						<div class="modal-body">
							<form-group-input :form="form" v-model="form.name" name="name" :label="$t('Name')"></form-group-input>
							<form-group-input :form="form" v-model="form.email" name="email" :label="$t('Email')"></form-group-input>
							<form-group-select :options="roleList" :label="$t('SelectRoles')" name="role" v-model="form.role" :form="form"></form-group-select>
							<form-group-input type="password" :form="form" v-model="form.password" name="password" :label="$t('password')"></form-group-input>
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
	import { mapActions, mapGetters } from 'vuex';
	export default {
		name: "Users",
		data() {
			return {
				form: new Form({
					name: '',
					email: '',
					password: '',
					role: '',
				}),
				editMode: false,
				editId: null
			}
		},
		methods: {
			openUserModal() {
				this.form.reset();
				this.form.clear();
				this.editMode = false;
				this.editId = null;
				$('#userModal').modal('show');
			},
			createUser() {
				this.form.post('/api/user-store')
					.then(() => {
						this.loadUsers();
						$('#userModal').modal('hide');
						Toast.fire({
							icon: 'success',
							title: this.$t('success_message')
						})
					})
			},
			editUser(user) {
				this.openUserModal();
				this.editMode = true;
				this.editId = user.id;
				this.form.fill(user);
				this.form.role = user.roles.length ? user.roles[0].id : '';
			},
			updateUser() {
				this.form.put('/api/user-update/' + this.editId)
					.then(() => {
						this.loadUsers();
						$('#userModal').modal('hide');
						Toast.fire({
							icon: 'success',
							title: this.$t('success_message')
						})
					})
			},

			deleteUser(id) {
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
						axios.delete('/api/user-delete/' + id)
							.then(() => {
								this.loadUsers();
								Swal.fire({
									title: this.$t('delete_title'),
									text: this.$t('delete_message'),
									icon: 'success'
								})
							}).catch(() => {
								Swal.fire({
									icon: 'error',
									title: this.$t('error_alert_title'),
									text: this.$t('error_alert_text')
								})
							});
					}
				})
			},
			...mapActions({
				loadUsers: 'dashboard/userAction',
				loadRoles: 'dashboard/roleAction'
			})
		},
		computed: {
			...mapGetters({
				users: 'dashboard/getUsers',
				roleList: 'dashboard/getRoles'
			})
		},
		created() {
			this.loadUsers();
			this.loadRoles();
		},
	}
</script>

<style lang="scss" scoped>
</style>
