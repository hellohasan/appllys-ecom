<template>
	<custom-card title="Edit Product" :url="'/admin/products'" text="Product List">
		<form @submit.prevent="updateProduct" @keydown="form.onKeydown($event)">
			<div class="form-row">
				<form-group-select col="col-md-4" :form="form" v-model="form.category_id" name="category_id" :options="categories" @change="changeCategory" label="Select Category"></form-group-select>
				<form-group-select col="col-md-4" :form="form" v-model="form.subcategory_id" name="subcategory_id" :options="subcategories" @change="changeSubCategory" label="Select Category"></form-group-select>
				<form-group-select col="col-md-4" :form="form" v-model="form.childcategory_id" name="childcategory_id" :options="childcategories" label="Select Category"></form-group-select>

				<form-group-input col="col-md-12" :form="form" v-model="form.name" name="name" label="Product Name"></form-group-input>

				<form-group-input-group text="BDT" type="number" step="0.001" col="col-md-6" :form="form" v-model="form.buy_price" name="buy_price" label="Product Buy Price"></form-group-input-group>
				<form-group-input-group text="UNIT" type="number" col="col-md-6" :form="form" v-model="form.stock" name="stock" label="Product Stock"></form-group-input-group>

				<form-group-input-group type="number" step="0.001" col="col-md-4" :form="form" v-model="form.old_sell_price" text="BDT" name="old_sell_price" label="Previous Sell Price"></form-group-input-group>
				<form-group-input-group type="number" step="0.001" col="col-md-4" :form="form" v-model="form.sell_price" text="BDT" name="sell_price" label="Present Sell Price"></form-group-input-group>

				<div class="form-group col-md-4">
					<label for="point">Product Point</label>
					<input type="text" v-model="calculatePoint" readonly :class="{ 'is-invalid': form.errors.has('point') }" id="point" placeholder="Product Point" class="form-control">
					<has-error :form="form" field="point"></has-error>
				</div>

				<div class="form-group col-md-6">
					<label for="colors">Enter Colors</label>
					<vue-tags-input v-model="color" placeholder="Enter Colors (if have)" :tags="form.colors" @tags-changed="newColors => form.colors = newColors" />
					<has-error :form="form" field="colors"></has-error>
				</div>
				<div class="form-group col-md-6">
					<label for="colors">Enter Sizes</label>
					<vue-tags-input v-model="size" placeholder="Enter Size (if have)" :tags="form.sizes" @tags-changed="newTSizes => form.sizes = newTSizes" />
					<has-error :form="form" field="colors"></has-error>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-12">
					<label for="colors">Product Description</label>
					<vue-editor v-model="form.description"></vue-editor>
					<has-error :form="form" field="description"></has-error>
				</div>
			</div>
			<div class="form-row mt-2">
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<th>SL</th>
							<th>Image</th>
							<th>Change Image</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(image, i) in form.images" :key="i">
							<td>{{ i }}</td>
							<td>
								<img :src="`/storage/products/${image.name}_107X107.webp`" alt="">
							</td>
							<td>
								<custom-image-input :form="form" v-model="image.image" :name="`images.${i}.image`"></custom-image-input>
							</td>
							<td>
								<button type="button" class="btn btn-danger" @click.prevent="removeImage(i)"><i class="fas fa-bar fa-times"></i> Remove</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="form-row">
				<div class="d-flex justify-content-end border-top col-md-12">
					<button type="button" class="btn btn-success btn-sm" @click="addNewImage">
						<i class="fas fa-plus"></i> Add More Image
					</button>
				</div>
			</div>

			<button type="submit" :disabled="form.busy" class="btn btn-primary btn-block btn-lg mt-3 font-bold">
				<i class="fas fa-paper-plane"></i> Update Product
			</button>

		</form>
	</custom-card>
</template>

<script>
	import VueTagsInput from '@johmun/vue-tags-input';
	import CustomImageInput from "../../Global/CustomImageInput.vue";
	import Swal from 'sweetalert2';
	import axios from 'axios';
	export default {
		components: {
			CustomImageInput, VueTagsInput
		},
		data() {
			return {
				form: new Form({
					category_id: '',
					subcategory_id: '',
					childcategory_id: '',
					name: '',
					buy_price: '',
					old_sell_price: '',
					sell_price: '',
					point_conversion: '',
					stock: '',
					colors: [],
					sizes: [],
					description: '',
					images: [
						{
							id: '',
							name: '',
							product_id: '',
							image: '',
						}
					]
				}),
				color: '',
				size: '',
				categories: [],
				subcategories: [],
				childcategories: [],
				product: ''
			}
		},
		computed: {
			calculatePoint() {
				return this.form.sell_price - this.form.buy_price;
			}
		},
		methods: {
			async updateProduct() {
				let custom = this.$route.params.id;
				await this.form.put(`/api/products/${custom}/edit`).then((res) => {
					this.form.images = [];
					this.form.images = res.data;
					this.successCreateMessage('Product Updated Successfully.');
				}).catch((error) => {
					if (error.response) {
						Swal.fire(
							'Oops..!', error.response.data.message, 'error'
						)
					}
				})
			},
			addNewImage() {
				this.form.images.push({
					id: '',
					name: '',
					product_id: '',
					image: '',
				})
			},
			removeImage(index) {
				if (this.form.images.length > 1) {
					this.form.images.splice(index, 1)
				}
			},
			async changeCategory(e) {
				if (e) {
					this.subcategories = [];
					this.childcategories = [];
					await axios.get(`/api/load-category-subcategories-dropdown/${e}`).then((res) => {
						this.subcategories = res.data;
						setTimeout(() => {
							this.form.subcategory_id = this.product.subcategory_id;
						}, 1000);
					});
				}
			},
			changeSubCategory(e) {
				if (e) {
					this.childcategories = [];
					axios.get(`/api/load-subcategory-childcategories-dropdown/${e}`).then((res) => {
						this.childcategories = res.data;
						setTimeout(() => {
							this.form.childcategory_id = this.product.childcategory_id;
						}, 2000);
					});
				}
			},
			loadEditProduct() {
				let custom = this.$route.params.id;
				axios.get(`/api/products/${custom}/edit`).then((res) => {
					this.form.fill(res.data);
					this.product = res.data;
				}).catch((error) => console.log(error));
			},
			loadCategories() {
				axios.get('/api/load-category-dropdown').then((res) => {
					this.categories = res.data;
				});
			}
		},
		created() {
			this.loadCategories();
			this.loadEditProduct();
		},
	}
</script>

<style scoped>
	.vue-tags-input {
		max-width: 100% !important;
	}
	.ti-new-tag-input {
		border-radius: 4px !important;
	}
</style>
