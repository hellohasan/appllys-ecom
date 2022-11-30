<template>
	<custom-card title="Merchant Store List" :url="'/admin/merchant-stores/create'" icon="fas fa-plus" text="Create Merchant Store">
		<div class="table-responsive">
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th>SL</th>
						<th>Logo</th>
						<th>Merchant Details</th>
						<th>Shop Details</th>
						<th>Point</th>
						<th>Can Upload</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(list, index) in lists.data" :key="index">
						<td>{{ ++index }}</td>
						<td>
							<img :src="list.logo" alt="">
						</td>
						<td>
							{{ list.merchant.name }} <br>
							{{ list.merchant.email }} <br>
							{{ list.merchant.phone }} <br>
						</td>
						<td>
							{{ list.name }} <br>
							{{ list.address }}
						</td>
						<td>{{ list.point }} Point</td>
						<td>
							<status :status="list.product"></status>
						</td>
						<td>
							<status :status="list.product"></status>
						</td>
						<td>
							<router-link :to="{name:'admin.merchant-stores.edit',params:{id:list.id}}" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i> Edit</router-link>
						</td>
					</tr>
				</tbody>
			</table>
			<pagination align="center" :data="lists" @pagination-change-page="pagination">
				<span slot="prev-nav">Previous</span>
				<span slot="next-nav">Next</span>
			</pagination>
		</div>
	</custom-card>
</template>

<script>
	import pagination from 'laravel-vue-pagination'
	export default {
		components: {
			pagination
		},
		data() {
			return {
				lists: {}
			}
		},
		methods: {
			loadLists() {
				axios.get('/api/merchant-stores').then((res) => {
					this.lists = res.data;
				}).catch((error) => console.log(error))
			},
			async pagination(page = 1) {
				await axios.get(`/api/merchant-stores?page=${page}`).then((res) => {
					this.lists = res.data;
				}).catch((error) => console.log(error))
			}
		},
		created() {
			this.loadLists();
		},

	}
</script>

<style scoped>
</style>
