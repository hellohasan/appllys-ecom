<template>
	<Fragment>
		<form @submit.prevent="changeAdmissionStatistic">
			<div class="form-row">
				<form-group-select col="col-md-8" :form="form" v-model="form.academic_session_id" name="academic_session_id" :options="sessions" :label="$t('AcademicSession')"></form-group-select>
				<div class="form-group col-md-4" style="margin-top: 32px;">
					<button type="submit" class="btn btn-primary btn-block"><i class="fas fa-filter"></i> {{ $t('LoadStatistics') }}</button>
				</div>
			</div>
		</form>
		<hr>
		<h6 class="text-center">{{ title }}</h6>
		<line-chart :download="title" :suffix="` ${$t('Student')}`" :data="chartData"></line-chart>
	</Fragment>
</template>

<script>
	export default {
		name: 'AdmissionStatistic',
		data() {
			return {
				form: new Form({
					academic_session_id: '',
				}),
				sessions: [],
				chartData: [],
				title: ''
			}
		},
		methods: {
			async changeAdmissionStatistic() {
				await this.form.post('/api/admission-statistic').then((res) => {
					this.chartData = res.data.data;
					this.title = res.data.title;
				}).catch((error) => console.log(error));
			},
			loadAdmissionStatistic() {
				axios.get('/api/admission-statistic').then((res) => {
					this.sessions = res.data.sessions;
					this.title = res.data.title;
					this.chartData = res.data.data;
					this.form.academic_session_id = res.data.academic_session_id;
				}).catch((error) => console.log(error));
			},
		},
		created() {
			this.loadAdmissionStatistic();
		},
	}
</script>

<style lang="scss" scoped>
</style>
