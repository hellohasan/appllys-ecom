<template>
	<fragment>
		<!-- Navbar -->
		<navbar></navbar>
		<!-- /.navbar -->
		<!-- Main Sidebar Container -->
		<sidebar></sidebar>
		<!-- End Main Sidebar Container -->

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper py-2">
			<!-- Content Header (Page header) -->
			<div class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1 class="m-0">{{ pageTitle }}</h1>
						</div>
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#!">{{ $t('home') }}</a></li>
								<li class="breadcrumb-item active">{{ pageTitle }}</li>
							</ol>
						</div>
					</div><!-- /.container-fluid -->
				</div>
				<!-- /.content-header -->
			</div>
			<!-- Main content -->
			<div class="content">
				<div class="container-fluid">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</div><!-- /.container-fluid -->
			</div>
		</div>
		<!-- Main Footer -->
		<copyright></copyright>
	</fragment>
</template>

<script>
	import Navbar from './Partials/Navbar'
	import Sidebar from './Partials/Sidebar'
	import Copyright from './Partials/Copyright'
	export default {
		components: {
			Navbar, Sidebar, Copyright
		},
		computed: {
			pageTitle() {
				return this.$route.meta.title
			}
		},
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

