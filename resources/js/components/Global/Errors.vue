<template>
	<fragment>
		<div class="alert alert-success" v-if="success">{{ message }}</div>
		<div class="alert alert-danger" v-if="failure">{{ message }}</div>
		<div class="alert alert-info" v-if="loading">
			<div class="spinner-border text-light small" role="status" style="height: 1rem; width: 1rem;">
				<span class="visually-hidden"></span>
			</div>
			<span>{{ loadingMessage || 'Please wait' }}</span>
		</div>
	</fragment>
</template>

<script>
	export default {
		name: "Errors",

		props: {
			loading: {
				type: Boolean,
				default: false,
			},
			success: {
				type: Boolean,
				default: false
			},
			failure: {
				type: Boolean,
				default: false
			},
			message: {
				type: String,
				default: ''
			},
			loadingMessage: {
				type: String,
				default: ''
			}
		}
	}
</script>
