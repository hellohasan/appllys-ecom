<template>
	<custom-card title="Create Payment Method" :url="'/admin/payment-method'" text="Method List">
		<form @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
			<div class="form-row">
				<form-group-input col="col-md-12" :form="form" v-model="form.name" name="name" label="Method Name"></form-group-input>
				<form-group-image col="col-md-12" :form="form" v-model="form.image" name="image" label="Method Image"></form-group-image>
				<form-group-textarea col="col-md-12" :form="form" v-model="form.val1" name="val1" label="Method Sending Details"></form-group-textarea>
				<form-group-toggle col="col-md-12" :form="form" v-model="form.status" name="status" id="status" label="Method Status"></form-group-toggle>
				<form-group-button col="col-md-12" :form="form"><i class="fas fa-plus"></i> Create Method</form-group-button>
			</div>
		</form>
	</custom-card>
</template>

<script>
	export default {
		data() {
			return {
				form: new Form({
					name: '',
					image: '',
					val1: '',
					status: true
				})
			}
		},
		methods: {
			async submitForm() {
				await this.form.post('/api/payment-method').then((res) => {
					this.form.reset();
					this.successCreateMessage('Method Created Successfully.');
				}).catch((error) => console.log(error));
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
