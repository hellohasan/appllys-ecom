<template>
	<custom-card title="Point Request Detail" :url="'/merchant/point-request/list'" icon="fas fa-history" text="Request List">
		<table class="table table-bordered table-striped">
			<thead>
				<tr>
					<th width="30%" class="text-right">Title</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody v-if="log">
				<tr>
					<td class="text-right">Custom</td>
					<td>{{ log.custom }}</td>
				</tr>
				<tr>
					<td class="text-right">Request Point</td>
					<td>{{ log.point }} Point</td>
				</tr>
				<tr>
					<td class="text-right">Conversion</td>
					<td>1 Point = {{ log.rate }} BDT</td>
				</tr>
				<tr>
					<td class="text-right">Payable amount</td>
					<td>{{ log.amount }} BDT</td>
				</tr>
				<tr>
					<td class="text-right">Selected Payment Method</td>
					<td>{{ log.method.name }}</td>
				</tr>
				<tr>
					<td class="text-right">Method Detail</td>
					<td>{{ log.method.val1 }}</td>
				</tr>
				<tr>
					<td class="text-right">Transaction Detail</td>
					<td>{{ log.transaction }}</td>
				</tr>
				<tr>
					<td class="text-right">Status</td>
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
				</tr>
			</tbody>
		</table>
	</custom-card>
</template>

<script>
	export default {
		data() {
			return {
				log: ''
			}
		},
		methods: {
			showPointRequestLog() {
				axios.get(`/api/point-request/${this.$route.params.custom}/view`).then((res) => {
					this.log = res.data;
				}).catch((error) => console.log(error));
			}
		},
		created() {
			this.showPointRequestLog();
		},
	}
</script>

<style scoped>
</style>
