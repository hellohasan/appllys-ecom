<template>
	<card title="Point Request Log">
		<div class="table-responsive">
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<td>SL</td>
						<td>Merchant</td>
						<td>Method</td>
						<td>Point</td>
						<td>Amount</td>
						<td>Status</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					<template v-if="Object.keys(logs).length">
						<tr v-for="(log,i) in logs.data" :key="i">
							<td>{{ i + logs.current_page }}</td>
							<td>{{ log.merchant.name }}</td>
							<td>{{ log.method.name }}</td>
							<td>{{ log.point }} Point</td>
							<td>{{ log.amount }} BDT</td>
							<td>
								<template v-if="log.status == 2">
									<span class="badge badge-danger"><i class="fas fa-times"></i> Refunded</span>
								</template>
								<template v-else-if="log.status == 1">
									<span class="badge badge-success"><i class="fas fa-check"></i> Approved</span>
								</template>
								<template v-else>
									<span class="badge badge-warning"><i class="fas fa-spinner"></i> Pending</span>
								</template>
							</td>
							<td>
								<router-link :to="{ name: 'admin.point-requests.view', params: { custom: log.custom } }" class="btn btn-primary btn-sm"><i class="fas fa-eye"></i> View</router-link>
							</td>
						</tr>
					</template>
					<template v-else>
						<tr>
							<td colspan="6" class="text-center">No log found</td>
						</tr>
					</template>
				</tbody>
			</table>
			<pagination align="center" :data="logs" @pagination-change-page="pagination">
				<span slot="prev-nav">Previous</span>
				<span slot="next-nav">Next</span>
			</pagination>
		</div>
	</card>
</template>

<script>
	import pagination from 'laravel-vue-pagination'
	export default {
		components: {
			pagination
		},
		data() {
			return {
				logs: {}
			}
		},
		methods: {
			loadLogs() {
				axios.get('/api/point-requests').then((res) => {
					this.logs = res.data;
				}).catch((error => console.log(error)));
			},
			async pagination(page = 1) {
				await axios.get(`/api/point-requests?page=${page}`).then((res) => {
					this.logs = res.data;
				}).catch((error) => console.log(error))
			}
		},
		created() {
			this.loadLogs();
		},
	}
</script>

<style scoped>
</style>
