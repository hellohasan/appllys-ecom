<template>
	<custom-card title="Product List" :url="'/admin/products/create'" icon="fas fa-plus" text="Create Product">
		<div class="table-img-responsive">
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<td>SL</td>
						<td>Merchant</td>
						<td>Category</td>
						<td>Name</td>
						<td>Price</td>
						<td>Stock</td>
						<td>Status</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(product,index) in products" :key="index">
						<td>{{ ++index }}</td>
						<td>{{ product.store }}</td>
						<td>
							{{ product.category }} <br>
							- {{ product.subcategory }} <br>
							{{ product.childcategory ? `-- ${product.childcategory}` : '' }}
						</td>
						<td>{{ product.name }}</td>
						<td>
							Buy Price: (৳) {{ product.buy_price }} <br>
							Sell Price: (৳) {{ product.sell_price }} <br>
							Point able: {{ product.point }}
						</td>
						<td>{{ product.stock }} UNIT</td>
						<td>
							<status :status="product.status"></status>
						</td>
						<td>
							<router-link :to="`/admin/products/${product.custom}/edit`" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i> Edit</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</custom-card>
</template>

<script>
	export default {
		name: "Index",
		data() {
			return {
				products: []
			}
		},
		methods: {
			loadProductLists() {
				axios.get('/api/products').then((res) => {
					this.products = res.data.products;
				}).catch((error) => console.log(error))
			}
		},
		created() {
			this.loadProductLists();
		},
	}
</script>

<style scoped>
</style>
