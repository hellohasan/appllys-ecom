<template>
	<div class="row">
		<div class="col-md-3">

			<div class="card card-primary card-outline">
				<div class="card-body box-profile">
					<div class="text-center">
						<img class="profile-user-img img-fluid img-circle" :src="userDetails.photo" alt="User profile picture">
					</div>
					<h3 class="profile-username text-center">{{ userDetails.name }}</h3>
					<p class="text-muted text-center" v-if="roles.length"> {{ roles[0] | removeDash | upperText}}</p>
					<ul class="list-group list-group-unbordered mb-3">
						<li class="list-group-item">
							<b>{{ $t('name') }}:</b> <a class="float-right">{{ userDetails.name }}</a>
						</li>
						<li class="list-group-item">
							<b>{{ $t('email') }}:</b> <a class="float-right">{{ userDetails.email }}</a>
						</li>
						<li class="list-group-item">
							<b>{{ $t('Phone') }}:</b> <a class="float-right">{{ userDetails.phone }}</a>
						</li>
						<li class="list-group-item">
							<b>{{ $t('Role') }}:</b> <a class="float-right">{{ roles.length ? roles[0] : 'N/A' }}</a>
						</li>
						<li class="list-group-item">
							<b>{{ $t('RegisterAt') }}:</b> <a class="float-right">{{  userDetails.created_at | date }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="col-md-9">
			<div class="card card-primary card-outline">
				<div class="card-header p-2">
					<ul class="nav nav-pills nav-justified">
						<li class="nav-item"><a class="nav-link active" href="#profile" data-toggle="tab">{{ $t('UpdateProfile') }}</a></li>
						<li class="nav-item"><a class="nav-link" href="#password" data-toggle="tab">{{ $t('UpdatePassword') }}</a></li>
					</ul>
				</div>
				<div class="card-body">
					<div class="tab-content">
						<div class="tab-pane active" id="profile">
							<form class="form-horizontal" @submit.prevent="updateProfile" @keydown="form.onKeydown($event)" enctype="multipart">
								<div class="form-row">
									<form-group-input :form="form" v-model="form.name" col="col-12" name="name" :label="$t('Name')"></form-group-input>
									<form-group-input type="email" :form="form" v-model="form.email" col="col-12" name="email" :label="$t('Email')"></form-group-input>
									<form-group-input type="text" :form="form" v-model="form.phone" col="col-12" name="phone" :label="$t('Phone')"></form-group-input>
									<form-group-image ref="imageUpload" :form="form" size="200" v-model="form.photo" col="col-12" name="photo" :label="$t('Image')"></form-group-image>
								</div>
								<v-button type="success" :loading="form.busy">{{ $t('Update') }}</v-button>
							</form>
						</div>

						<div class="tab-pane" id="password">
							<form class="form-horizontal" @submit.prevent="updatePassword" @keydown="form.onKeydown($event)">
								<div class="form-row">
									<form-group-input type="password" :form="pForm" v-model="pForm.current_password" col="col-12" name="current_password" :label="$t('CurrentPassword')"></form-group-input>
									<form-group-input type="password" :form="pForm" v-model="pForm.password" col="col-12" name="password" :label="$t('NewPassword')"></form-group-input>
									<form-group-input type="password" :form="pForm" v-model="pForm.password_confirmation" col="col-12" name="password_confirmation" :label="$t('ConfirmPassword')"></form-group-input>
								</div>
								<v-button type="success" :loading="pForm.busy">{{ $t('Update') }}</v-button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: new Form({
					name: '',
					email: '',
					phone: '',
					photo: '',
				}),

				pForm: new Form({
					current_password: '',
					password: '',
					password_confirmation: '',
				}),
			}
		},
		methods: {

			updateProfile() {
				this.form.post('/api/update-profile')
					.then((res) => {
						this.form.photo = '';
						this.$store.dispatch('user/refreshCurrentUser', res.data);
						this.$refs.imageUpload.previewClear();
						Toast.fire({
							icon: 'success',
							title: 'Profile successfully Updated.'
						})
					})
			},

			updatePassword() {
				this.pForm.post('/api/update-password')
					.then(() => {
						this.pForm.reset();
						Toast.fire({
							icon: 'success',
							title: 'Password successfully Updated.'
						})
					}).catch((error) => {
						if (error.response.status === 400) {
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: error.response.data.message,
							})
						}
					})
			},
			fillProfileForm() {
				this.form.fill({
					name: this.userDetails.name,
					email: this.userDetails.email,
					phone: this.userDetails.phone
				});
			}
		},
		computed: {
			userDetails() {
				return this.$store.getters['user/getUser'];
			},
			roles() {
				return this.$store.getters['user/getRoles'];
			}
		},
		created() {
			this.fillProfileForm();
		},
	}
</script>

<style scoped>
</style>
