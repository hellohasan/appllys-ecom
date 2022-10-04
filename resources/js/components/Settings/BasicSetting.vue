<template>
	<card :title="$t('basic_setting')">
		<form @submit.prevent="handelForm" role="form" method="post" @keydown="form.onKeydown($event)">
			<div class="form-row">
				<form-group-input col="col-md-12" :form="form" v-model="form.title" name="title" :label="$t('app_title')"></form-group-input>
				<form-group-input col="col-md-6" :form="form" v-model="form.phone" name="phone" :label="$t('Phone')"></form-group-input>
				<form-group-input col="col-md-6" type="email" :form="form" v-model="form.email" name="email" :label="$t('Email')"></form-group-input>
				<form-group-input col="col-md-6" :form="form" v-model="form.address" name="address" :label="$t('Address')"></form-group-input>
				<form-group-input col="col-md-6" :form="form" v-model="form.copy_text" name="copy_text" :label="$t('Copy_text')"></form-group-input>
				<form-group-button :form="form" icon="fas fa-cog">{{ $t("Update") }}</form-group-button>
			</div>
		</form>
	</card>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: "BasicSetting",
		data() {
			return {
				form: new Form({
					title: '',
					name: '',
					est: '',
					phone: '',
					email: '',
					address: '',
					copy_text: ''
				})
			}
		},
		methods: {
			async handelForm() {
				await this.form.post('/api/basic-setting-submit').then((res) => {
					this.getBasicData();
					Toast.fire({
						icon: 'success',
						title: this.$t('success_message_create')
					})
				})
			},
			setBasicDataForm() {
				this.form.fill(this.$store.getters.getBasic);
			},
			...mapActions({
				getBasicData: 'basicAction'
			})
		},
		created() {
			this.getBasicData();
			this.setBasicDataForm();
		}
	}
</script>

<style scoped>
</style>
