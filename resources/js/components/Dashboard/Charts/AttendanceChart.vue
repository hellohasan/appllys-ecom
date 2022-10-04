<template>
	<Fragment>
		<form @submit.prevent="changeAttendanceStatistic">
			<div class="form-row">
				<form-group-select col="col-md-4" :form="form" v-model="form.academic_session_id" name="academic_session_id" :options="sessions" :label="$t('AcademicSession')"></form-group-select>
				<div class="form-group col-md-4">
					<label for="date_range">{{$t('DateRange')}}:</label> <br>
					<date-picker v-model="form.date_range" :range="true" :placeholder="$t('DateRange')" :shortcuts="dateRangeShortcut()" format="YYYY-MM-DD" value-type="format" :editable="false" clearable :input-class="form.errors.has('date_range') ? 'form-control is-invalid' : 'form-control'"></date-picker>
					<has-error :form="form" field="date_range"></has-error>
				</div>
				<div class="form-group col-md-4" style="margin-top: 32px;">
					<button type="submit" class="btn btn-primary btn-block"><i class="fas fa-filter"></i> {{ $t('LoadStatistics') }}</button>
				</div>
			</div>
		</form>
		<hr>
		<h6 class="text-center">{{ title }}</h6>
		<line-chart :download="title" :data="chartData"></line-chart>
	</Fragment>
</template>

<script>
	import dateRangeShortcut from "../../../helpers/daterange-shortcut";
	import DatePicker from 'vue2-datepicker';
	export default {
		name: 'AttendanceChart',
		components: {
			DatePicker,
		},
		data() {
			return {
				form: new Form({
					academic_session_id: '',
					date_range: ''
				}),
				sessions: [],
				chartData: [],
				title: ''
			}
		},
		methods: {
			dateRangeShortcut() {
				return dateRangeShortcut;
			},
			async changeAttendanceStatistic() {
				await this.form.post('/api/attendance-statistic').then((res) => {
					this.chartData = res.data.data;
					this.title = res.data.title;
				}).catch((error) => console.log(error));
			},
			loadAttendanceStatistic() {
				axios.get('/api/attendance-statistic').then((res) => {
					this.sessions = res.data.sessions;
					this.title = res.data.title;
					this.chartData = res.data.data;
					this.form.academic_session_id = res.data.academic_session_id;
					this.form.date_range = res.data.daterange;
				}).catch((error) => console.log(error));
			},
		},
		created() {
			this.loadAttendanceStatistic();
		},
	}
</script>

<style lang="scss" scoped>
</style>
