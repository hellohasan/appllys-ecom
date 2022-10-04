<template>
	<fragment>
		<template v-if="isLogged">
			<dashboard></dashboard>
		</template>

		<template v-else>
			<auth></auth>
		</template>
	</fragment>
</template>

<script>
	import Auth from "./Auth";
	import Dashboard from "./Dashboard";
	import { mapGetters } from 'vuex'
	export default {
		name: 'MainApp',
		components: {
			Auth,
			Dashboard
		},
		computed: {
			...mapGetters({
				isLogged: ['user/isLogged']
			})
		}
	};
</script>
