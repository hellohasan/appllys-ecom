<template>
	<div class="login-page">
		<div class="login-box">
			<div class="login-logo">
				<a href="#">
					<img src="/img/logo.png" alt="">
				</a>
			</div>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(2em);
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s ease;
	}
</style>
