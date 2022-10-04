<template>
	<div class="card card-outline card-primary">
		<div class="card-body">
			<p class="login-box-msg">Create a new account</p>
			<errors :success="success" :failure="failure" :message="message" :loading="loading" />
			<form @submit.prevent="submitRegistration" method="post" @keydown="form.onKeydown($event)">
				<div class="input-group mb-3">
					<input type="text" v-model="form.name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Full name">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-user"></span>
						</div>
					</div>
					<has-error :form="form" field="name"></has-error>
				</div>
				<div class="input-group mb-3">
					<input type="email" v-model="form.email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Email">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-envelope"></span>
						</div>
					</div>
					<has-error :form="form" field="email"></has-error>
				</div>
				<div class="input-group mb-3">
					<input type="password" v-model="form.password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Password">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-lock"></span>
						</div>
					</div>
					<has-error :form="form" field="password"></has-error>
				</div>
				<div class="input-group mb-3">
					<input type="password" v-model="form.password_confirmation" class="form-control" placeholder="Retype password">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-lock"></span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 mb-3">
						<vue-recaptcha class="g-recaptcha" size="normal" :sitekey="recapchaKey" :loadRecaptchaScript="true" ref="recaptcha" type="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"></vue-recaptcha>
						<has-error :form="form" field="recaptcha"></has-error>
					</div>
				</div>
				<div class="row">
					<div class="col-8">
						<div class="icheck-primary">
							<input type="checkbox" id="agreeTerms" v-model="form.agree" name="terms" value="agree">
							<label for="agreeTerms"> I agree to the <a href="#">terms</a></label>
						</div>
						<has-error :form="form" field="agree"></has-error>
					</div>
					<!-- /.col -->
					<div class="col-4">
						<button type="submit" :disabled="form.busy" class="btn btn-primary btn-block">Register</button>
					</div>
					<!-- /.col -->
				</div>
			</form>
			<router-link :to="{name:'login'}" class="text-center">I already have an account</router-link>
		</div>
		<!-- /.form-box -->
	</div><!-- /.card -->
</template>

<script>
	import { setAuthorization } from "../../helpers/general";
	import VueRecaptcha from 'vue-recaptcha';
	export default {
		name: "Register",
		components: {
			VueRecaptcha,
		},
		data() {
			return {
				form: new Form({
					name: '',
					email: '',
					password: '',
					password_confirmation: '',
					agree: '',
					recaptcha: ''
				}),
				success: false,
				failure: false,
				loading: false,
				message: '',
			}
		},
		methods: {
			async submitRegistration() {
				this.loading = true;
				await this.form.post('/api/auth/register')
					.then((response) => {
						this.loading = false;
						this.success = true;
						this.failure = false;
						setAuthorization(response.data.token);
						this.onCaptchaExpired();
						this.$store.dispatch("user/loginAction", response.data);
						this.$router.push({ name: 'dashboard' })
					}).catch((error) => {
						this.loading = false;
						this.success = false;
						this.failure = true;
						this.onCaptchaExpired();
						this.message = error.response.data.message
					})
			},
			onCaptchaVerified: function (recaptchaToken) {
				this.form.recaptcha = recaptchaToken;
				this.validateCaptcha = true;
			},
			onCaptchaExpired: function () {
				this.$refs.recaptcha.reset();
			}
		},
		created() {
			this.recapchaKey = process.env.MIX_RECAPTCHA_SITE_KEY;
		},
	}
</script>

<style>
</style>
