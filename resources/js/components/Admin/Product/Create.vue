<template>
	<custom-card title="Create new product" :url="'/admin/products'" text="Product List">
		<form @submit.prevent="submitProduct">
			<div class="form-row">
				<form-group-select col="col-md-4" :form="form" v-model="form.category_id" name="category_id" :options="categories" label="Select Category"></form-group-select>
				<form-group-select col="col-md-4" :form="form" v-model="form.subcategory_id" name="subcategory_id" :options="subcategories" label="Select Category"></form-group-select>
				<form-group-select col="col-md-4" :form="form" v-model="form.childcategory_id" name="childcategory_id" :options="childcategories" label="Select Category"></form-group-select>

				<form-group-input col="col-md-12" :form="form" v-model="form.name" name="name" label="Product Name"></form-group-input>

				<form-group-input type="number" step="0.001" col="col-md-4" :form="form" v-model="form.buy_price" name="buy_price" label="Product Buy Price"></form-group-input>
				<form-group-input type="number" step="0.001" col="col-md-4" :form="form" v-model="form.sell_price" name="sell_price" label="Product Sell Price"></form-group-input>
				<form-group-input type="number" col="col-md-4" :form="form" v-model="form.stock" name="stock" label="Product Stock"></form-group-input>

				<div class="form-group col-md-6">
					<label for="colors">Enter Colors</label>
					<vue-tags-input v-model="form.colors" placeholder="Enter Colors (if have)" @tags-changed="newTags => tags = newTags" />
					<has-error :form="form" field="colors"></has-error>
				</div>
				<div class="form-group col-md-6">
					<label for="colors">Enter Size</label>
					<vue-tags-input v-model="form.seizes" placeholder="Enter Size (if have)" @tags-changed="newTags => tags = newTags" />
					<has-error :form="form" field="colors"></has-error>
				</div>

			</div>
			<div class="form-row mt-2">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>SL</th>
							<th>Input Field</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(image, i) in form.images" :key="i">
							<td>{{ ++i }}</td>
							<td>
								<custom-image-input :form="form" v-model="image.image" name="logo" label="Shop Logo"></custom-image-input>
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

		</form>
	</custom-card>
</template>

<script>
	import VueTagsInput from '@johmun/vue-tags-input';
	import CustomImageInput from "../../Global/CustomImageInput.vue";
	export default {
		components: {
			CustomImageInput, VueTagsInput
		},
		data() {
			return {
				form: new Form({
					images: [
						{ image: '' }
					]
				}),
				categories: [],
				subcategories: [],
				childcategories: [],
			}
		},
		methods: {
			submitProduct() {

			},
			addNewImage() {
				this.form.images.push({
					image: '',
				})
			},
			removeImage(index) {
				if (this.form.images.length > 1) {
					this.form.images.splice(index, 1)
				}
			},
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
