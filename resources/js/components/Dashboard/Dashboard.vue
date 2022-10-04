<template>
	<Fragment>
		<h1>Dashbaors id goes here</h1>
	</Fragment>
</template>

<script>
	import logoutMix from '../../mixins/logout';
	export default {
		name: 'Dashboard',
		mixins: [logoutMix],
		components: {
		},
		data() {
			return {
				show: false,
				totals: '',
				fees: ''
			}
		},
		methods: {
			toggleShow() {
				this.show = this.show ? false : true
			},
		},
		created() {
			// this.loadDashboard();
		},
	}
</script>

<style>
</style>
