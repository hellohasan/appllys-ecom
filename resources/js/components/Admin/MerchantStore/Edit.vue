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
				<form-group-button col="col-md-12" :form="form"><i class="fas fa-paper-plane"></i> Update Merchant Store</form-group-button>
			</div>
		</form>
	</custom-card>
</template>

<script>
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
				this.form.put(`/api/merchant-stores/${this.$route.params.id}/edit`).then((res) => {
					this.form.logo = '';
					this.form.banner = '';
					this.successUpdateMessage();
				});
			},
			loadMerchantStore() {
				axios.get(`/api/merchant-stores/${this.$route.params.id}/edit`).then((res) => {
					delete res.data.logo;
					delete res.data.banner;
					this.form.fill(res.data);
				}).catch((error) => console.log(error));
			},
			loadMerchant() {
				axios.get('/api/load-merchant-list').then(({ data }) => this.merchants = data);
			}
		},
		created() {
			this.loadMerchant();
			this.loadMerchantStore();
		},
	}
</script>

<style lang="scss" scoped>
</style>
