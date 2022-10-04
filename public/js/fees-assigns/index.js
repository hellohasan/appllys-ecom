"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fees-assigns/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Index',
  methods: {
    loadFeesAssignList: function loadFeesAssignList() {
      this.myServerDataTable('api/fees-assigns', [{
        data: 'DT_RowIndex',
        orderable: false,
        searchable: false,
        className: 'details-control',
        defaultContent: ''
      }, {
        data: 'created_at',
        name: 'created_at'
      }, {
        data: 'custom',
        name: 'custom'
      }, {
        data: 'session.custom_session',
        name: 'session'
      }, {
        data: 'academic_class.custom_class',
        name: 'academicClass'
      }, {
        data: 'academic_details',
        name: 'academic_details',
        searchable: false,
        orderable: false
      }, {
        data: 'fee_type',
        name: 'fee_type',
        searchable: false,
        orderable: false
      }, {
        data: 'logs_count',
        name: 'logs_count',
        searchable: false,
        orderable: false
      }, {
        data: 'action',
        name: 'action'
      }]);
    }
  },
  created: function created() {
    this.loadFeesAssignList();
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('click', function (event) {
      var target = event.target;

      if (target && target.localName === 'button' && target.dataset.id) {
        event.preventDefault();
        event.stopPropagation();
        var id = target.dataset.id;
        var action = target.dataset.action;

        if (id && action == 'view') {
          _this.$router.push("/fees-assigns/".concat(id, "/show"));
        } else if (id && action == 'delete') {
          _this.deleteConfirm().then(function () {
            axios["delete"]("/api/fees-assigns/".concat(id)).then(function (res) {
              _this.successDeleteMessage();

              _this.loadFeesAssignList();
            })["catch"](function (error) {
              console.log(error);
            });
          });
        }
      }
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/Index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/Index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_c936e48e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c936e48e&scoped=true& */ "./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=template&id=c936e48e&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c936e48e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_c936e48e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c936e48e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Accountant/FeesAssign/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=template&id=c936e48e&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=template&id=c936e48e&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c936e48e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c936e48e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c936e48e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=c936e48e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=template&id=c936e48e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=template&id=c936e48e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Index.vue?vue&type=template&id=c936e48e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "custom-card",
    {
      attrs: {
        title: _vm.$t("FeesAssignList"),
        ticon: "fas fa-table",
        url: "/fees-assigns/create",
        icon: "fas fa-plus",
        text: _vm.$t("NewFeesAssign"),
      },
    },
    [
      _c(
        "table",
        {
          staticClass:
            "table table-bordered table-striped display dt-responsive nowrap",
          staticStyle: { width: "100%" },
          attrs: { id: "sampleTable" },
        },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v(_vm._s(_vm.$t("SL")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("CreatedAt")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("Custom")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("AcademicSession")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("AcademicClass")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("AcademicDetails")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("FeeType")))]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(_vm.$t("TotalStudent")))]),
              _vm._v(" "),
              _c("th", { staticClass: "not-export-col" }, [
                _vm._v(_vm._s(_vm.$t("Action"))),
              ]),
            ]),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);