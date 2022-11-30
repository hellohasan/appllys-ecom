<template>
	<span class="badge" :class="status ? activatedClass : deactivatedClass">{{status ? activatedText : deactivatedText}}</span>
</template>

<script>
	export default {
		name: "Status",
		props: {
			status: {
				type: Boolean,
				default: false,
			},
			activatedText: {
				type: String,
				default: function () {
					return this.$t('Activated')
				}
			},
			deactivatedText: {
				type: String,
				default: function () {
					return this.$t('Deactivated')
				}
			},
			activatedClass: {
				type: String,
				default: 'badge-success'
			},
			deactivatedClass: {
				type: String,
				default: 'badge-warning'
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
