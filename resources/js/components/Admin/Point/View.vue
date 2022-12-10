<template>
	<card title="Point Request Detail">
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
					<td class="text-right">Merchant</td>
					<td>{{ log.merchant.name }}</td>
				</tr>
				<tr>
					<td class="text-right">Merchant Contact</td>
					<td>
						{{ log.merchant.merchant.name }} <br>
						{{ log.merchant.merchant.phone }} <br>
						{{ log.merchant.merchant.email }}
					</td>
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
				<tr v-if="log.status == 0">
					<td class="text-right">Request Status</td>
					<td>
						<form @submit.prevent="statusUpdate" @keydown="form.onKeydown($event)">
							<div class="form-group">
								<select v-model="form.status" class="form-control">
									<option value="0">Pending</option>
									<option value="1">Approve</option>
									<option value="2">Refund</option>
								</select>
								<has-error :form="form" field="status"></has-error>
							</div>
							<button type="submit" :disabled="form.busy" class="btn btn-primary"> <i class="fas fa-paper-plane"></i> Update Status</button>
						</form>
					</td>
				</tr>
			</tbody>
		</table>
	</card>
</template>

<script>
	export default {
		data() {
			return {
				log: '',
				form: new Form({
					status: ''
				})
			}
		},
		methods: {
			async statusUpdate() {
				this.form.put(`/api/point-requests/${this.$route.params.custom}/update`).then((res) => {
					this.successUpdateMessage("Payment Status Updated");
				}).catch((error) => console.log(error));
			},
			showPointRequestLog() {
				axios.get(`/api/point-requests/${this.$route.params.custom}/view`).then((res) => {
					this.log = res.data;
					this.form.status = res.data.status;
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
