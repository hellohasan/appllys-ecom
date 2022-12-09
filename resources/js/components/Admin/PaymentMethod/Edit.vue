<template>
	<custom-card title="Edit Payment Method" :url="'/admin/payment-method'" text="Method List">
		<form @submit.prevent="submitAction" @keydown="form.onKeydown($event)">
			<div class="form-row">
				<form-group-input col="col-md-12" :form="form" v-model="form.name" name="name" label="Method Name"></form-group-input>
				<div class="form-group col-md-12" v-if="image">
					<label for="">Previous Image</label> <br>
					<img :src="`/storage/methods/${image}`" class="img-thumbnail" alt="">
				</div>
				<form-group-image col="col-md-12" :form="form" v-model="form.image" name="image" label="Method Image"></form-group-image>
				<form-group-textarea col="col-md-12" :form="form" v-model="form.val1" name="val1" label="Method Sending Details"></form-group-textarea>
				<form-group-toggle col="col-md-12" :form="form" v-model="form.status" name="status" id="status" label="Method Status"></form-group-toggle>
				<form-group-button col="col-md-12" :form="form"><i class="fas fa-paper-plane"></i> Update Method</form-group-button>
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
				}),
				image: ''
			}
		},
		methods: {
			async submitAction() {
				await this.form.put(`/api/payment-method/${this.$route.params.id}/edit`).then((res) => {
					this.form.reset();
					this.successCreateMessage('Method Updated Successfully.');
					this.loadPaymentMethod();
				}).catch((error) => console.log(error));
			},
			loadPaymentMethod() {
				axios.get(`/api/payment-method/${this.$route.params.id}/edit`).then(({ data }) => {
					this.form.name = data.name;
					this.form.val1 = data.val1;
					this.form.status = data.status;
					this.image = data.image;
				}).catch((error) => console.log(error));
			}
		},
		created() {
			this.loadPaymentMethod();
		},
	}
</script>

<style lang="scss" scoped>
</style>
