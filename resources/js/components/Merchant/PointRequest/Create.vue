<template>
	<custom-card title="Open New Point Request" :url="'/merchant/point-request/list'" icon="fas fa-history" text="Request List">
		<form @submit.prevent="submitRequest" @keydown="form.onKeydown($event)">
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th width="30%" class="text-right">Title</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="text-right">Request Point</td>
						<td>
							<custom-input-group text="Point" type="number" v-on:input="inputPoint" step="0.001" :form="form" v-model="form.point" name="point" label="Enter point you want"></custom-input-group>
						</td>
					</tr>
					<tr>
						<td class="text-right">Conversion</td>
						<td>1 Point = {{ point }} BDT</td>
					</tr>
					<tr>
						<td class="text-right">Payable Amount</td>
						<td>
							<custom-input-group text="BDT" type="number" step="0.001" :form="form" :readonly="true" v-model="form.amount" name="amount" label="Point Amount"></custom-input-group>
						</td>
					</tr>
					<tr>
						<td class="text-right">Instruction</td>
						<td class="send-detail">
							<ol>
								<li>First Select a payment gateway.</li>
								<li>Copy exactly the payable amount.</li>
								<li>Send payable amount shown Payment Details.</li>
								<li>After send enter your transaction id or essential info.</li>
							</ol>
						</td>
					</tr>
					<tr>
						<td class="text-right">Payment Method</td>
						<td>
							<label class="radio-img" v-for="(method,i) in methods" :key="i">
								<input type="radio" name="layout" :value="method.id" v-model="form.method_id" />
								<div class="image" :style="{'background-image': `url(/storage/methods/${method.image})`}"></div>
							</label>
							<div class="text-danger" v-if="form.errors.has('method_id')" v-html="form.errors.get('method_id')"></div>
						</td>
					</tr>
					<tr>
						<td class="text-right">Payment Details</td>
						<td class="send-detail">
							<p v-for="(method,i) in this.methods" :key="i">
								<span class="text-italic" v-show="method.id == form.method_id" v-html="method.val1"></span>
							</p>
						</td>
					</tr>
					<tr>
						<td class="text-right">Transaction ID</td>
						<td class="send-detail">
							<textarea v-model="form.transaction" cols="30" rows="3" class="form-control" placeholder="Enter your transaction Id"></textarea>
							<div class="text-danger" v-if="form.errors.has('transaction')" v-html="form.errors.get('transaction')"></div>
						</td>
					</tr>
					<tr>
						<td class="text-right">Action</td>
						<td>
							<button type="submit" class="btn btn-primary" :disabled="form.busy"><i class="fas fa-paper-plane"></i> Submit Point Request</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	</custom-card>
</template>

<script>
	import CustomInput from '../../Global/CustomInput.vue'
	import CustomInputGroup from '../../Global/CustomInputGroup.vue'
	export default {
		components: { CustomInput, CustomInputGroup },
		data() {
			return {
				form: new Form({
					point: '',
					amount: '',
					method_id: '',
					transaction: ''
				}),
				point: '',
				methods: []
			}
		},
		methods: {
			async submitRequest() {
				await this.form.post('/api/point-request-submit').then((res) => {
					this.successCreateMessage('Point Request submitted successfully.');
					this.$router.push({ name: 'merchant.point-request.view', params: { custom: res.data.custom } });
				}).catch((error) => console.log(error));
			},
			inputPoint() {
				let pointValue = this.form.point;
				this.form.amount = (this.point * pointValue).toFixed(2);
			},
			loadPaymentMethod() {
				axios.get('/api/get-payment-method-list').then((res) => {
					this.methods = res.data;
				}).catch((error) => console.log(error));
			}
		},
		created() {
			this.loadPaymentMethod();
			this.point = this.$store.getters['getBasic'].point;
		},
	}
</script>

<style lang="scss" scoped>
	td {
		vertical-align: middle;
	}
	.send-detail {
		vertical-align: middle;
	}
	$image-bg: gray;
	$image-border: white;
	$image-border-current: aqua;

	.image {
		opacity: 0.8;
		width: 200px;
		height: 160px;
		background-position: center center;
		background-size: cover;
		background-color: $image-bg;
		display: inline-block;
		margin: 10px;
		border-radius: 10px;

		&:hover {
			opacity: 1;
		}
	}

	.radio-img {
		> input {
			display: none;
		}
		> .image {
			cursor: pointer;
			border: 2px solid black;
		}
		> input:checked + .image {
			border: 2px solid orange;
		}
	}
</style>
