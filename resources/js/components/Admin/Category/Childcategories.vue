<template>
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title font-weight-bold">Child Category List</h3>
					<div class="card-tools">
						<button v-permission="['childcategories-create']" class="btn btn-success btn-sm" @click="openModal"><i class="fas fa-plus fa-w"></i> Add New</button>
					</div>
				</div>
				<div class="card-body">
					<vue-element-loading :active="!childcategories.length" spinner="bar-fade-scale" />
					<table class="table table-hover table-bordered">
						<thead>
							<tr>
								<th>SL</th>
								<th>Name</th>
								<th>Category</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(category, index ) in childcategories" :key="category.id">
								<td>{{ ++index }}</td>
								<td>{{ category.name }}</td>
								<td>
									{{ category.category.name }} <br>
									-- {{ category.subcategory.name }}
								</td>
								<td>
									<status :status="category.status"></status>
								</td>
								<td>
									<button v-permission="['childcategories-edit']" class="btn btn-primary btn-sm" @click="editModal(category)"><i class="far fa-edit"></i> {{$t('Edit')}}</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<form-modal-create-edit ref="modalRef" title="Child Category" :form="form">
					<form-group-select :form="form" v-model="form.category_id" :options="categories" @change="changeCategory" label="Select Category" name="category_id"></form-group-select>
					<form-group-select :form="form" v-model="form.subcategory_id" :options="subcategories" label="Select Sub Category" name="subcategory_id"></form-group-select>
					<form-group-input :form="form" v-model="form.name" name="name" label="Name">
					</form-group-input>
					<form-group-toggle :form="form" v-model="form.status" id="status" label="Status"></form-group-toggle>
				</form-modal-create-edit>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				form: new Form({
					category_id: '',
					subcategory_id: '',
					name: '',
					status: true
				}),
				editId: '',
				categories: [],
				subcategories: [],
				childcategories: [],
				tempSubcat: ''
			}
		},
		methods: {
			async changeCategory(id) {
				await axios.get(`/api/load-category-subcategories-dropdown/${id}`).then(({ data }) => {
					this.subcategories = data;
				});
			},
			openModal() {
				this.$refs.modalRef.openMyModal();
			},
			storeForm() {
				this.form.post('/api/childcategories').then((res) => {
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
				this.form.fill(type);
				setInterval(() => {
					this.form.subcategory_id = type.subcategory_id;
				}, 2000);
			},
			updateForm() {
				this.form.put(`/api/childcategories/${this.editId}`).then((res) => {
					this.form.reset();
					this.$refs.modalRef.hideMyModal();
					this.loadList();
					Toast.fire({
						icon: 'success',
						title: this.$t('success_message_update')
					})
				});
			},
			loadCategorySelect() {
				axios.get('/api/load-category-dropdown').then(({ data }) => this.categories = data);
			},
			loadList() {
				axios.get('/api/childcategories').then(({ data }) => {
					this.childcategories = data;
				});
			}
		},
		created() {
			this.loadList();
			this.loadCategorySelect();
		},
	}
</script>

<style scoped>
</style>
