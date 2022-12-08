<template>
	<fragment>
		<div class="input-group image-preview" :class="imagePreview">
			<input type="text" class="form-control image-preview-filename" :class="imagePreviewFilename" disabled="disabled"> <!-- don't give a name === doesn't send on POST/GET -->
			<div class="input-group-append">
				<!-- image-preview-clear button -->
				<button type="button" class="btn btn-outline-secondary image-preview-clear" :class="imagePreviewClear" @click="previewClear" style="display:none;">
					<i class="fas fa-times"></i> Clear
				</button>
				<div class="btn btn btn-outline-secondary image-preview-input" :class="imagePreviewInput">
					<i class="far fa-folder-open"></i>
					<span class="image-preview-input-title" :class="imagePreviewInputTitle">Browse</span>
					<input type="file" ref="fileInput" accept="image/*" :name="name" @input="onSelectFile" /> <!-- rename it -->
				</div>
			</div>
		</div>
		<has-error :form="form" :field="name"></has-error>
	</fragment>
</template>

<script>
	import Swal from "sweetalert2";

	export default {
		name: "CustomImageInput",
		props: {
			value: {
				default: null
			},
			name: {
				type: String,
				required: true
			},
			form: {
				type: Object,
				required: true
			},
			required: {
				required: false,
				type: Boolean,
				default: false
			},
			size: {
				required: false,
				default: 500,
			},
		},
		watch: {
			value: function (value) {
				if (value == null || value == '') {
					this.previewClear();
				}
			},
		},
		mounted() {
			this.$nextTick(() => {
				$("." + this.imagePreviewFilename).val('No file chosen');
				// Set the popover default content
				$('.' + this.imagePreview).popover({
					trigger: 'hover',
					html: true,
					title: 'Uploaded Image Preview',
					content: "There's no image",
					placement: 'bottom',
					boundary: 'scrollParent'
				});
			});
		},
		data() {
			return {
				setImage: null,
			}
		},
		computed: {
			imagePreviewFilename() {
				return "image-preview-filename_" + Math.random().toString(36).substring(7);
			},
			imagePreview() {
				return "image-preview_" + Math.random().toString(36).substring(7);
			},
			dynamic() {
				return "dynamic_" + Math.random().toString(36).substring(7);
			},
			imagePreviewInput() {
				return "image-preview-input_" + Math.random().toString(36).substring(7);
			},
			imagePreviewInputTitle() {
				return "image-preview-input-title_" + Math.random().toString(36).substring(7);
			},
			imagePreviewClear() {
				return "image-preview-clear_" + Math.random().toString(36).substring(7);
			},
		},
		methods: {
			onSelectFile(e) {
				var img = $('<img/>', {
					id: 'dynamic',
					class: this.dynamic
				});
				let file = e.target.files[0];
				let reader = new FileReader();
				if (this.size) {
					if (file['size'] < (this.size * 1000)) {
						reader.onloadend = (e) => {
							$("." + this.imagePreviewInputTitle).text("Change");
							$("." + this.imagePreviewClear).show();
							$("." + this.imagePreviewFilename).val(file.name);
							img.attr('src', reader.result);
							img.attr('style', 'width:100% !important');
							$("." + this.imagePreview).attr("data-content", $(img)[0].outerHTML).popover("show");
							this.setImage = reader.result
							this.$emit('input', reader.result)
						}
						reader.readAsDataURL(file)
					} else {
						Swal.fire({
							icon: 'error',
							title: 'Warning.!',
							text: 'Please select a image which size less then ' + this.size + 'kb.'
						})
					}
				} else {
					reader.onloadend = (e) => {
						$("." + this.imagePreviewInputTitle).text("Change");
						$("." + this.imagePreviewClear).show();
						$("." + this.imagePreviewFilename).val(file.name);
						img.attr('src', reader.result);
						img.attr('style', 'width:100% !important');
						$("." + this.imagePreview).attr("data-content", $(img)[0].outerHTML).popover("show");
						this.setImage = reader.result
						this.$emit('input', reader.result)
					}
					reader.readAsDataURL(file)
				}
			},
			previewClear() {
				$('.' + this.imagePreview).attr("data-content", "").popover('hide');
				$('.' + this.imagePreviewFilename).val('No file chosen');
				$('.' + this.imagePreviewClear).hide();
				$('.' + this.imagePreviewInput + 'input:file').val("");
				$("." + this.imagePreviewInputTitle).text("Browse");
				this.setImage = ''
				this.$emit('input', "")
			},
		}
	}
</script>

<style>
	.image-preview-input {
		position: relative;
		overflow: hidden;
		margin: 0px;
		color: #333;
		background-color: #fff;
		border-color: #ccc;
	}

	.image-preview-input input[type='file'] {
		position: absolute;
		top: 0;
		right: 0;
		margin: 0;
		padding: 0;
		font-size: 20px;
		cursor: pointer;
		opacity: 0;
		filter: alpha(opacity=0);
	}

	.image-preview-input-title {
		margin-left: 2px;
	}
	#dynamic {
		width: 220px !important;
	}
</style>
