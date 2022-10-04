<template>
	<card :title="$t('AccountChart')" icon="fas fas fa-chart-bar">
		<h6 class="text-center">{{ title }}</h6>
		<pie-chart :download="title" :suffix="` ${$t('BDT')}`" :data="chartData"></pie-chart>
	</card>
</template>

<script>
	export default {
		name: "AccountantStatistic",
		data() {
			return {
				chartData: [],
				title: this.$t('AccountChart')
			}
		},
		methods: {
			loadAccountStatistic() {
				axios.get('/api/account-statistic').then((res) => {
					this.chartData = res.data;
				}).catch((error) => console.log(error));
			},
		},
		created() {
			this.loadAccountStatistic();
		},
	}
</script>

<style lang="scss" scoped>
</style>
