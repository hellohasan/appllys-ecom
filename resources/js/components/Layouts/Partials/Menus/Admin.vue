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

		<!-- Point Management -->
		<li v-permission="['point-request','point-request-create']" class="nav-header">Point Management</li>
		<li class="nav-item" v-permission="['point-request-create']">
			<router-link :to="{name:'merchant.point-request.create'}" class=" nav-link">
				<i class="nav-icon fas fa-plus cyan"></i>
				<p>Point Request</p>
			</router-link>
		</li>
		<li class="nav-item" v-permission="['point-request-list']">
			<router-link :to="{name:'merchant.point-request.list'}" class=" nav-link">
				<i class="nav-icon fas fa-history cyan"></i>
				<p>Request Log</p>
			</router-link>
		</li>

		<!-- Product Management -->
		<li v-permission="['products','products-create']" class="nav-header">Product Management</li>
		<li class="nav-item" v-permission="['products-create']">
			<router-link :to="{name:'admin.products.create'}" class=" nav-link">
				<i class="nav-icon fas fa-plus cyan"></i>
				<p>Add Product</p>
			</router-link>
		</li>
		<li class="nav-item" v-permission="['products']">
			<router-link :to="{name:'admin.products'}" class=" nav-link">
				<i class="nav-icon fas fa-th cyan"></i>
				<p>Product List</p>
			</router-link>
		</li>

		<!-- Payment Method -->
		<li v-permission="['payment-method','payment-method-create']" class="nav-header">Payment Method</li>
		<li class="nav-item" v-permission="['payment-method-create']">
			<router-link :to="{name:'admin.payment-method.create'}" class=" nav-link">
				<i class="nav-icon fas fa-plus cyan"></i>
				<p>New Method</p>
			</router-link>
		</li>
		<li class="nav-item" v-permission="['payment-method']">
			<router-link :to="{name:'admin.payment-method'}" class=" nav-link">
				<i class="nav-icon far fa-credit-card cyan"></i>
				<p>Method List</p>
			</router-link>
		</li>

		<!-- Others -->
		<li v-permission="['payment-method','payment-method-create']" class="nav-header">Order Management</li>
		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-shopping-cart"></i>
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

		<li v-permission="['payment-method','payment-method-create']" class="nav-header">Point Management</li>
		<li class="nav-item" v-role="['Super Admin']">
			<router-link :to="{name:'admin.assign-point'}" class=" nav-link">
				<i class="nav-icon fas fa-plus cyan"></i>
				<p>Assign Point</p>
			</router-link>
		</li>
		<li class="nav-item" v-role="['Super Admin']">
			<router-link :to="{name:'admin.point-requests'}" class=" nav-link">
				<i class="nav-icon fas fa-sort-numeric-up-alt cyan"></i>
				<p>Point Request</p>
			</router-link>
		</li>

		<li v-permission="['payment-method','payment-method-create']" class="nav-header">Store Management</li>
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
		<li v-permission="['payment-method','payment-method-create']" class="nav-header">Commission Management</li>
		<li v-role="['Super Admin']" class="nav-item">
			<a href="#" class="nav-link">
				<i class="nav-icon fas fa-percentage"></i>
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
