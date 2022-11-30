<template>
	<nav class="main-header navbar navbar-expand navbar-white navbar-light">
		<!-- Left navbar links -->
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
			</li>
		</ul>

		<!-- Right navbar links -->
		<ul class="navbar-nav ml-auto">
			<!-- <li v-if="Object.keys(locales).length > 1" class="nav-item dropdown">
				<a class="nav-link dropdown-toggle font-weight-bold" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="fas fa-globe"></i> {{ locales[locale] }}
				</a>
				<div class="dropdown-menu" style="right: 0;left: auto">
					<a v-for="(value, key) in locales" :key="key" class="dropdown-item" href="#" @click.prevent="setLocale(key)">
						{{ value }}
					</a>
				</div>
			</li> -->
			<li class="nav-item">
				<a class="nav-link" data-widget="fullscreen" href="#" role="button">
					<i class="fas fa-expand-arrows-alt"></i>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	import { setDocumentLang, setDocumentDirectionPerLocale } from '../../../helpers/language'
	export default {
		name: 'Navbar',
		methods: {
			setLocale(locale) {
				if (this.$i18n.locale !== locale) {
					this.$i18n.locale = locale;
					let lang = this.$i18n.locale
					setDocumentLang(lang)
					setDocumentDirectionPerLocale(lang)
					this.$store.dispatch('langAction', locale)
					axios.get('/api/change-language', { params: { lang: lang } }).then((res) => {
						Toast.fire({
							icon: 'success',
							title: this.$t('language_update')
						});
						location.reload(true);
					})
				}
			}
		},
		computed: {
			locale() {
				return this.$store.getters.getLang;
			},
			locales() {
				return this.$store.getters.getLocals;
			}
		},
	}
</script>

<style>
</style>
