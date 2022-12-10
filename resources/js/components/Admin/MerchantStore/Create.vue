<template>
	<custom-card title="Create Merchant Store" :url="'/admin/merchant-stores'" text="Store List">
		<form @submit.prevent="submitMerchantStore">
			<div class="form-row">
				<form-group-select col="col-md-12" :form="form" v-model="form.merchant_id" name="merchant_id" :options="merchants" label="Select Merchant"></form-group-select>
				<form-group-input col="col-md-6" :form="form" v-model="form.name" name="name" label="Shop Name"></form-group-input>
				<form-group-input col="col-md-6" :form="form" v-model="form.address" name="address" label="Shop Address"></form-group-input>
				<form-group-image col="col-md-6" :form="form" v-model="form.logo" name="logo" label="Shop Logo"></form-group-image>
				<form-group-image col="col-md-6" :form="form" v-model="form.banner" :size="3000" name="banner" label="Shop banner"></form-group-image>
				<form-group-toggle col="col-md-6" :form="form" v-model="form.product" id="product" label="Upload Product"></form-group-toggle>
				<form-group-toggle col="col-md-6" :form="form" v-model="form.status" id="status" label="Merchant status"></form-group-toggle>
				<form-group-button col="col-md-12" :form="form"><i class="fas fa-paper-plane"></i> Create Merchant Store</form-group-button>
			</div>
		</form>
	</custom-card>
</template>

<script>
	import Swal from 'sweetalert2';
	export default {
		data() {
			return {
				form: new Form({
					merchant_id: '',
					name: '',
					address: '',
					logo: '',
					banner: '',
					product: true,
					status: true,
				}),
				merchants: []
			}
		},
		methods: {
			submitMerchantStore() {
				this.form.post('/api/merchant-stores').then((res) => {
					this.form.reset();
					this.successCreateMessage();
				}).catch((error) => {
					Swal.fire(
						'Oops..!',
						error.response.data.message,
						'error'
					);
				});
			},
			loadMerchant() {
				axios.get('/api/load-merchant-list').then(({ data }) => this.merchants = data);
			}
		},
		created() {
			this.loadMerchant();
		},
	}
</script>

<style lang="scss" scoped>
</style>
