"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/academic-exam-create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../globals/CustomSelect.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue2-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue2-datepicker/index.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../globals/CustomSelectEmpty.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../globals/CustomSelectMultiple.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_1__);
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
  name: 'Create',
  components: {
    DatePicker: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue2-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    CustomSelect: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../globals/CustomSelect.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    CustomSelectEmpty: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../globals/CustomSelectEmpty.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    CustomSelectMultiple: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../globals/CustomSelectMultiple.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      form: new Form({
        title: '',
        daterange: [],
        lists: [{
          class_id: '',
          type: '',
          sections: [],
          groups: [],
          group_sections: [],
          departments: [],
          department_years: [],
          section_ids: [],
          group_id: '',
          group_section_ids: [],
          department_id: '',
          department_year_ids: []
        }]
      }),
      classes: [],
      errors: []
    };
  },
  methods: {
    addNewDocument: function addNewDocument() {
      this.form.lists.push({
        class_id: '',
        type: '',
        section_ids: [],
        group_id: '',
        group_section_ids: [],
        department_id: '',
        department_year_ids: [],
        sections: [],
        groups: [],
        group_sections: [],
        departments: [],
        department_years: []
      });
    },
    deleteList: function deleteList(index) {
      if (this.form.lists.length > 1) {
        this.form.lists.splice(index, 1);
      }
    },
    classChange: function classChange(e, i) {
      var _this = this;

      if (e) {
        axios.get("/api/load-only-class-sections-groups-departments/".concat(e)).then(function (res) {
          var list = _this.form.lists[i];

          if (res.data.type === 0) {
            list.type = res.data.type;
            list.sections = res.data.sections;
            list.groups = [];
            list.group_sections = [];
            list.departments = [];
            list.department_years = [];
          } else if (res.data.type === 1) {
            list.type = res.data.type;
            list.sections = [];
            list.groups = res.data.academic_groups;
            list.group_sections = [];
            list.departments = [];
            list.department_years = [];
          } else {
            list.type = res.data.type;
            list.sections = [];
            list.groups = [];
            list.group_sections = [];
            list.departments = res.data.academic_departments;
            list.department_years = [];
          }
        });
      }
    },
    groupChange: function groupChange(e, i) {
      var _this2 = this;

      if (e) {
        axios.get('/api/load-only-group-section', {
          params: {
            id: e
          }
        }).then(function (res) {
          _this2.form.lists[i].group_sections = res.data.sections;
        });
      }
    },
    departmentChange: function departmentChange(e, i) {
      var _this3 = this;

      if (e) {
        axios.get('/api/load-only-department-year', {
          params: {
            id: e
          }
        }).then(function (res) {
          _this3.form.lists[i].department_years = res.data.sections;
        });
      }
    },
    submitExam: function submitExam() {
      var _this4 = this;

      Swal.fire({
        title: this.$t("confirm_title"),
        text: this.$t("confirm_message"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(function (result) {
        if (result.isConfirmed) {
          /* FIXME: take decision for this comment lines */
          var validation = new validatorjs__WEBPACK_IMPORTED_MODULE_1__(_this4.form, {
            'title': ['required'],
            'daterange': ['required'],
            'lists': ['required', 'array'],
            'lists.*.class_id': ['required'],
            'lists.*.type': ['required']
            /* 'lists.*.section_ids': [{ required_if: ['lists.*.type', 0] }],
            'lists.*.group_id': [{ required_if: ['lists.*.type', 1] }],
            'lists.*.group_section_ids': [{ required_if: ['lists.*.type', 1] }],
            'lists.*.department_id': [{ required_if: ['lists.*.type', 2] }],
            'lists.*.department_year_ids': [{ required_if: ['lists.*.type', 2] }], */

          });
          _this4.errors = [];

          if (validation.passes()) {
            _this4.form.post("/api/academic-exam").then(function (res) {
              Toast.fire({
                icon: "success",
                text: _this4.$t("success_message_create")
              });

              _this4.$router.push("/academic-exam/".concat(res.data.custom, "/show"));
            });
          } else {
            _this4.errors = validation.errors.all();
          }
        }
      });
    },
    loadAcademicClass: function loadAcademicClass() {
      var _this5 = this;

      axios.get("/api/load-academic-class-list").then(function (res) {
        _this5.classes = res.data;
      });
    }
  },
  created: function created() {
    this.loadAcademicClass();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mx-datepicker[data-v-d1451a62] {\n  display: block;\n  width: 100%;\n}\n.mx-input[data-v-d1451a62] {\n  height: 38px;\n  font-size: 16px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d1451a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d1451a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d1451a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Academic/Exam/Create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Create.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_d1451a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=d1451a62&scoped=true& */ "./resources/js/components/Academic/Exam/Create.vue?vue&type=template&id=d1451a62&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_d1451a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true& */ "./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_d1451a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_d1451a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d1451a62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Academic/Exam/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d1451a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=style&index=0&id=d1451a62&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Academic/Exam/Create.vue?vue&type=template&id=d1451a62&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Create.vue?vue&type=template&id=d1451a62&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d1451a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d1451a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d1451a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=d1451a62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=template&id=d1451a62&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=template&id=d1451a62&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=template&id=d1451a62&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        title: _vm.$t("NewExam"),
        url: "/academic-exam-create",
        text: _vm.$t("ExamList"),
      },
    },
    [
      Object.keys(this.errors).length
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                {
                  staticClass:
                    "alert alert-warning alert-dismissible fade show",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading" }, [
                    _vm._v("Warning!"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "list-group" },
                    _vm._l(_vm.errors, function (error, e) {
                      return _c(
                        "li",
                        { key: e, staticClass: "list-group-item" },
                        [_vm._v(_vm._s(error[0]))]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "alert",
                        "aria-label": "Close",
                      },
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.submitExam.apply(null, arguments)
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "form-row" },
            [
              _c("form-group-input", {
                attrs: {
                  form: _vm.form,
                  col: "col-md-6",
                  name: "title",
                  label: _vm.$t("Title"),
                },
                model: {
                  value: _vm.form.title,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "title", $$v)
                  },
                  expression: "form.title",
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group col-md-6" },
                [
                  _c("label", { attrs: { for: "daterange" } }, [
                    _vm._v(_vm._s(_vm.$t("DateRange"))),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("date-picker", {
                    attrs: {
                      range: "",
                      format: "YYYY-MM-DD",
                      type: "date",
                      placeholder: _vm.$t("DateRange"),
                    },
                    model: {
                      value: _vm.form.daterange,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "daterange", $$v)
                      },
                      expression: "form.daterange",
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "daterange" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c("div", { staticClass: "form-row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-between border-bottom col-md-12",
                      },
                      [_c("h5", [_vm._v(_vm._s(_vm.$t("SelectOneByOne")))])]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.form.lists, function (list, i) {
                    return _c(
                      "div",
                      { key: i, staticClass: "form-row mt-2" },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group col-md-5" },
                          [
                            _c("label", { attrs: { for: "classes" } }, [
                              _vm._v(_vm._s(_vm.$t("Academic_Class"))),
                            ]),
                            _vm._v(" "),
                            _c("custom-select", {
                              attrs: {
                                options: _vm.classes,
                                placeholder: _vm.$t("Select_One"),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.classChange($event, i)
                                },
                              },
                              model: {
                                value: list.class_id,
                                callback: function ($$v) {
                                  _vm.$set(list, "class_id", $$v)
                                },
                                expression: "list.class_id",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        list.type === 0
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  class: "col-md-6",
                                },
                                [
                                  _c("label", { attrs: { for: "classes" } }, [
                                    _vm._v(_vm._s(_vm.$t("Section"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("custom-select-multiple", {
                                    attrs: {
                                      options: list.sections,
                                      placeholder: _vm.$t("SelectMultiple"),
                                    },
                                    model: {
                                      value: list.section_ids,
                                      callback: function ($$v) {
                                        _vm.$set(list, "section_ids", $$v)
                                      },
                                      expression: "list.section_ids",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        list.type == 1
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  class: "col-md-3",
                                },
                                [
                                  _c("label", { attrs: { for: "classes" } }, [
                                    _vm._v(_vm._s(_vm.$t("Academic_Group"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("custom-select-empty", {
                                    attrs: {
                                      options: list.groups,
                                      placeholder: _vm.$t("Select_One"),
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.groupChange($event, i)
                                      },
                                    },
                                    model: {
                                      value: list.group_id,
                                      callback: function ($$v) {
                                        _vm.$set(list, "group_id", $$v)
                                      },
                                      expression: "list.group_id",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  class: "col-md-3",
                                },
                                [
                                  _c("label", { attrs: { for: "classes" } }, [
                                    _vm._v(_vm._s(_vm.$t("Group_section"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("custom-select-multiple", {
                                    attrs: {
                                      options: list.group_sections,
                                      placeholder: _vm.$t("SelectMultiple"),
                                    },
                                    model: {
                                      value: list.group_section_ids,
                                      callback: function ($$v) {
                                        _vm.$set(list, "group_section_ids", $$v)
                                      },
                                      expression: "list.group_section_ids",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        list.type == 2
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  class: "col-md-3",
                                },
                                [
                                  _c("label", { attrs: { for: "classes" } }, [
                                    _vm._v(
                                      _vm._s(_vm.$t("Academic_Department"))
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("custom-select-empty", {
                                    attrs: {
                                      options: list.departments,
                                      placeholder: _vm.$t("Select_One"),
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.departmentChange($event, i)
                                      },
                                    },
                                    model: {
                                      value: list.department_id,
                                      callback: function ($$v) {
                                        _vm.$set(list, "department_id", $$v)
                                      },
                                      expression: "list.department_id",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  class: "col-md-3",
                                },
                                [
                                  _c("label", { attrs: { for: "classes" } }, [
                                    _vm._v(_vm._s(_vm.$t("Department_year"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("custom-select-multiple", {
                                    attrs: {
                                      options: list.department_years,
                                      placeholder: _vm.$t("SelectMultiple"),
                                    },
                                    model: {
                                      value: list.department_year_ids,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          list,
                                          "department_year_ids",
                                          $$v
                                        )
                                      },
                                      expression: "list.department_year_ids",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group", class: "col-md-1" },
                          [
                            _c("label", { attrs: { for: "classes" } }, [
                              _vm._v(_vm._s(_vm.$t("Action"))),
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteList(i)
                                  },
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-far fa-trash-alt",
                                }),
                                _vm._v(" " + _vm._s(_vm.$t("Delete"))),
                              ]
                            ),
                          ]
                        ),
                      ],
                      2
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-end border-top col-md-12",
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: { type: "button" },
                            on: { click: _vm.addNewDocument },
                          },
                          [
                            _c("i", { staticClass: "fas fa-plus" }),
                            _vm._v(
                              " " + _vm._s(_vm.$t("AddMore")) + "\n\t\t\t\t\t\t"
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group col-md-12 mt-2" },
                [
                  _c("v-button", { attrs: { loading: _vm.form.busy } }, [
                    _vm._v(_vm._s(_vm.$t("Submit"))),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);