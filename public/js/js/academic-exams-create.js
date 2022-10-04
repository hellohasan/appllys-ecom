"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/academic-exams-create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      form: new Form({
        title: '',
        daterange: '',
        lists: [{
          class_id: '',
          type: '',
          section_ids: [],
          group_id: [],
          department_id: [],
          year_ids: []
        }]
      }),
      classes: [],
      sections: [],
      groups: [],
      departments: [],
      years: [],
      errors: []
    };
  },
  methods: {
    addNewDocument: function addNewDocument() {
      this.form.lists.push({
        class_id: '',
        type: '',
        section_ids: [],
        group_id: [],
        department_id: [],
        year_ids: []
      });
    },
    deleteList: function deleteList(index) {
      if (this.form.lists.length > 1) {
        this.form.lists.splice(index, 1);
      }
    },
    classChange: function classChange(e, i) {
      var _this = this;

      axios.get('/api/load-class-type/' + e).then(function (_ref) {
        var data = _ref.data;
        var list = _this.form.lists[i];
        list.type = data;
      });
    },
    submitExam: function submitExam() {
      this.form.post('/api/academic-exams').then(function (res) {})["catch"](function (error) {
        console.log(error.response.data.errors);
        console.log(error.response.status);
      });
    },
    loadAcademicClass: function loadAcademicClass() {
      var _this2 = this;

      axios.get("/api/load-classes-sections-groups-departments-years").then(function (res) {
        _this2.classes = res.data.classes;
        _this2.departments = res.data.departments;
        _this2.groups = res.data.groups;
        _this2.sections = res.data.sections;
        _this2.years = res.data.years;
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
                  col: "col-md-6",
                  form: _vm.form,
                  name: "title",
                  label: _vm.$t("ExamTitle"),
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
              _c("form-group-date", {
                attrs: {
                  col: "col-md-6",
                  form: _vm.form,
                  range: true,
                  name: "daterange",
                  label: _vm.$t("ExamDateRange"),
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
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "alert alert-success alert-dismissible fade show",
                          attrs: { role: "alert" },
                        },
                        [
                          _c("h4", { staticClass: "alert-heading" }, [
                            _vm._v(_vm._s(_vm.$t("Instruction")) + "!"),
                          ]),
                          _vm._v(" "),
                          _c("ul", { staticClass: "list-group" }, [
                            _c(
                              "li",
                              { staticClass: "list-group-item text-success" },
                              [_vm._v(_vm._s(_vm.$t("ExamIns1")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "list-group-item text-success" },
                              [_vm._v(_vm._s(_vm.$t("ExamIns2")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "list-group-item text-success" },
                              [_vm._v(_vm._s(_vm.$t("ExamIns3")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "list-group-item text-success" },
                              [_vm._v(_vm._s(_vm.$t("ExamIns4")))]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.form.lists, function (list, i) {
                    return _c(
                      "div",
                      { key: i, staticClass: "form-row mt-2" },
                      [
                        _c("form-group-select", {
                          attrs: {
                            col: "col-md-5",
                            form: _vm.form,
                            name: "lists." + i + ".class_id",
                            options: _vm.classes,
                            label: _vm.$t("SelectAcademicClass"),
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
                        _vm._v(" "),
                        list.type === 0
                          ? [
                              _c("form-group-select-multiple", {
                                attrs: {
                                  col: "col-md-6",
                                  form: _vm.form,
                                  name: "section_ids",
                                  options: _vm.sections,
                                  label: _vm.$t("SelectAcademicSection"),
                                },
                                model: {
                                  value: list.section_ids,
                                  callback: function ($$v) {
                                    _vm.$set(list, "section_ids", $$v)
                                  },
                                  expression: "list.section_ids",
                                },
                              }),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        list.type === 1
                          ? [
                              _c("form-group-select", {
                                attrs: {
                                  col: "col-md-3",
                                  form: _vm.form,
                                  name: "group_id",
                                  options: _vm.groups,
                                  label: _vm.$t("SelectAcademicGroup"),
                                },
                                model: {
                                  value: list.group_id,
                                  callback: function ($$v) {
                                    _vm.$set(list, "group_id", $$v)
                                  },
                                  expression: "list.group_id",
                                },
                              }),
                              _vm._v(" "),
                              _c("form-group-select-multiple", {
                                attrs: {
                                  col: "col-md-3",
                                  form: _vm.form,
                                  name: "section_ids",
                                  options: _vm.sections,
                                  label: _vm.$t("SelectGroupSection"),
                                },
                                model: {
                                  value: list.section_ids,
                                  callback: function ($$v) {
                                    _vm.$set(list, "section_ids", $$v)
                                  },
                                  expression: "list.section_ids",
                                },
                              }),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        list.type === 2
                          ? [
                              _c("form-group-select", {
                                attrs: {
                                  col: "col-md-3",
                                  form: _vm.form,
                                  name: "department_id",
                                  options: _vm.departments,
                                  label: _vm.$t("SelectAcademicDepartment"),
                                },
                                model: {
                                  value: list.department_id,
                                  callback: function ($$v) {
                                    _vm.$set(list, "department_id", $$v)
                                  },
                                  expression: "list.department_id",
                                },
                              }),
                              _vm._v(" "),
                              _c("form-group-select-multiple", {
                                attrs: {
                                  col: "col-md-3",
                                  form: _vm.form,
                                  name: "year_ids",
                                  options: _vm.years,
                                  label: _vm.$t("SelectDepartmentYear"),
                                },
                                model: {
                                  value: list.year_ids,
                                  callback: function ($$v) {
                                    _vm.$set(list, "year_ids", $$v)
                                  },
                                  expression: "list.year_ids",
                                },
                              }),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-1" }, [
                          _c("label", { attrs: { for: "classes" } }, [
                            _vm._v(_vm._s(_vm.$t("Action")) + ":"),
                          ]),
                          _vm._v(" "),
                          _c("br"),
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
                              _c("i", { staticClass: "fas fa-bar fa-times" }),
                              _vm._v(" " + _vm._s(_vm.$t("Remove"))),
                            ]
                          ),
                        ]),
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
                    _c("i", { staticClass: "fas fa-paper-plane" }),
                    _vm._v(" " + _vm._s(_vm.$t("Submit"))),
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