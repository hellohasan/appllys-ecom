<template>
	<card :title="$t('MonthlyAccountChart')" icon="fas fas fa-chart-bar">
		<h6 class="text-center">{{ title }}</h6>
		<line-chart :download="title" :data="chartData" />
	</card>
</template>

<script>
	export default {
		name: 'MonthlyAccountChart',
		data() {
			return {
				chartData: [],
				title: this.$t('MonthlyAccountChart')
			}
		},
		methods: {
			loadMonthlyAccountChart() {
				axios.get('/api/monthly-account-statistic').then((res) => {
					this.chartData = res.data;
				});
			}
		},
		created() {
			this.loadMonthlyAccountChart();
		},
	}
</script>

<style scoped>
</style>
