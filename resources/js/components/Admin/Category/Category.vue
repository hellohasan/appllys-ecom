<template>
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title font-weight-bold">Category List</h3>
					<div class="card-tools">
						<button v-permission="['categories-create']" class="btn btn-success btn-sm" @click="openModal"><i class="fas fa-plus fa-w"></i>Add New</button>
					</div>
				</div>
				<div class="card-body">
					<vue-element-loading :active="!categories.length" spinner="bar-fade-scale" />
					<table class="table table-hover table-bordered">
						<thead>
							<tr>
								<th>SL</th>
								<th>Image</th>
								<th>Name</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(category, index ) in categories" :key="category.id">
								<td>{{ ++index }}</td>
								<td>
									<img :src="`/storage/categories/${category.image}`" alt="">
								</td>
								<td>{{ category.name }}</td>
								<td>
									<status :status="category.status"></status>
								</td>
								<td>
									<button v-permission="['categories-edit']" class="btn btn-primary btn-sm" @click="editModal(category)"><i class="far fa-edit"></i> {{$t('Edit')}}</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<form-modal-create-edit ref="modalRef" title="Category" :form="form">
					<form-group-input :form="form" v-model="form.name" name="name" label="Name"></form-group-input>
					<form-group-image :form="form" label="Image" v-model="form.image" name="image"></form-group-image>
					<form-group-toggle :form="form" v-model="form.status" id="status" label="Status"></form-group-toggle>
				</form-modal-create-edit>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: new Form({
					name: '',
					image: '',
					status: false
				}),
				editId: '',
				categories: []
			}
		},
		methods: {
			openModal() {
				this.$refs.modalRef.openMyModal();
			},
			storeForm() {
				this.form.post('/api/categories').then((res) => {
					this.form.reset();
					this.$refs.modalRef.hideMyModal();
					this.loadList();
					Toast.fire({
						icon: 'success',
						title: this.$t('success_message_create')
					})
				});
			},
			editModal(type) {
				this.$refs.modalRef.openMyModal(true);
				this.editId = type.id;
				this.form.name = type.name;
				this.form.status = type.status;
			},
			updateForm() {
				this.form.put(`/api/categories/${this.editId}`).then((res) => {
					this.form.reset();
					this.$refs.modalRef.hideMyModal();
					this.loadList();
					Toast.fire({
						icon: 'success',
						title: this.$t('success_message_update')
					})
				});
			},
			loadList() {
				axios.get('/api/categories').then(({ data }) => {
					this.categories = data;
				});
			}
		},
		created() {
			this.loadList();
		},
	}
</script>

<style scoped>
</style>
