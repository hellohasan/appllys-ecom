<template>
	<card :title="$t('AdmissionChart')" icon="fas fas fa-chart-bar">
		<h6 class="text-center">{{ title }}</h6>
		<pie-chart :download="title" :suffix="` ${$t('Admission')}`" :data="chartData"></pie-chart>
	</card>
</template>

<script>
	export default {
		name: "LocationChart",
		data() {
			return {
				chartData: [],
				title: this.$t('AdmissionChart')
			}
		},
		methods: {
			loadLocationStatistic() {
				axios.get('/api/location-statistic').then((res) => {
					this.chartData = res.data;
				}).catch((error) => console.log(error));
			},
		},
		created() {
			this.loadLocationStatistic();
		},
	}
</script>

<style scoped>
</style>
