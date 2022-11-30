<template>
	<fragment>
		<!-- Settings Section -->
		<li v-role="['Super Admin','Admin']" class="nav-header">Admin Section</li>
		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-th-large"></i>
				<p>Manage Category<i class="right fas fa-angle-left"></i></p>
			</a>
			<ul class="nav nav-treeview">
				<li class="nav-item">
					<router-link :to="{name:'admin.categories'}" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Category List</p>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{name:'admin.subcategories'}" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Subcategory List</p>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{name:'admin.childcategories'}" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Child Category List</p>
					</router-link>
				</li>
			</ul>
		</li>

		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-home"></i>
				<p>Product Management<i class="right fas fa-angle-left"></i></p>
			</a>
			<ul class="nav nav-treeview">
				<li class="nav-item">
					<router-link :to="{name:'admin.products.create'}" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Create Product</p>
					</router-link>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Product List</p>
					</a>
				</li>
			</ul>
		</li>

		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-home"></i>
				<p>Order Management<i class="right fas fa-angle-left"></i></p>
			</a>
			<ul class="nav nav-treeview">
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Order List</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Pending Order</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Confirm Order</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Cancel Order</p>
					</a>
				</li>
			</ul>
		</li>

		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-home"></i>
				<p>Point Management<i class="right fas fa-angle-left"></i></p>
			</a>
			<ul class="nav nav-treeview">
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Assign Point</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Point Exchange</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Point Request</p>
					</a>
				</li>
			</ul>
		</li>

		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-home"></i>
				<p>Merchant Store<i class="right fas fa-angle-left"></i></p>
			</a>
			<ul class="nav nav-treeview">
				<li class="nav-item">
					<router-link :to="{name:'admin.merchant-stores.create'}" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Create Store</p>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{name:'admin.merchant-stores'}" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Store List</p>
					</router-link>
				</li>
			</ul>
		</li>

		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-home"></i>
				<p>Manage Commission<i class="right fas fa-angle-left"></i></p>
			</a>
			<ul class="nav nav-treeview">
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Basic</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Generation</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="far fa-circle nav-icon"></i>
						<p>Incentive</p>
					</a>
				</li>
			</ul>
		</li>

	</fragment>
</template>

<script>
	export default {
		name: 'Admin'
	}
</script>

<style scoped>
</style>
