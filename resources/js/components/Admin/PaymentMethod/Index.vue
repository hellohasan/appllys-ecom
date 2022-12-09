<template>
	<custom-card title="Payment Method List" :url="'/admin/payment-method/create'" icon="fas fa-plus" text="Create Method">
		<div class="table-responsive">
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th>SL</th>
						<th>Image</th>
						<th>Name</th>
						<th>Detail</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(method,index) in methods" :key="index">
						<td>{{ ++index }}</td>
						<td>
							<img :src="`/storage/methods/${method.image}`" alt="">
						</td>
						<td>{{ method.name }}</td>
						<td v-html="method.val1"></td>
						<td>
							<status :status="method.status"></status>
						</td>
						<td>
							<router-link :to="`/admin/payment-method/${method.id}/edit`" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i> Edit</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

	</custom-card>
</template>

<script>
	export default {
		data() {
			return {
				methods: []
			}
		},
		methods: {
			loadMethodList() {
				axios.get('/api/payment-method').then((res) => {
					this.methods = res.data;
				}).catch((error) => console.log(error));
			}
		},
		created() {
			this.loadMethodList();
		},
	}
</script>

<style lang="scss" scoped>
</style>
