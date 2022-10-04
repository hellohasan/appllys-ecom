"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["teacher/mark-input-show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'Show',
  data: function data() {
    return {
      basic: {},
      mark: ''
    };
  },
  methods: {
    printToPaper: function printToPaper() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var printContents, originalContents;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                printContents = document.getElementById('printMe').innerHTML;
                originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
                window.print();
                document.body.innerHTML = originalContents;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadExamMarkShow: function loadExamMarkShow() {
      var _this = this;

      var custom = this.$route.params.custom;
      axios.get("/api/exam-mark-show/".concat(custom)).then(function (_ref) {
        var data = _ref.data;
        _this.mark = data;
      });
    }
  },
  created: function created() {
    this.basic = this.$store.getters.getBasic;
    this.loadExamMarkShow();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".basicTable td[data-v-651e8337],\n.basicTable th[data-v-651e8337] {\n  vertical-align: middle;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_651e8337_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_651e8337_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_651e8337_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Teacher/Mark/Show.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Show.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_651e8337_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=651e8337&scoped=true& */ "./resources/js/components/Teacher/Mark/Show.vue?vue&type=template&id=651e8337&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/Teacher/Mark/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _Show_vue_vue_type_style_index_0_id_651e8337_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true& */ "./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_651e8337_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_651e8337_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "651e8337",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Teacher/Mark/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Teacher/Mark/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_651e8337_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=style&index=0&id=651e8337&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Teacher/Mark/Show.vue?vue&type=template&id=651e8337&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Show.vue?vue&type=template&id=651e8337&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_651e8337_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_651e8337_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_651e8337_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=651e8337&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=template&id=651e8337&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=template&id=651e8337&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Show.vue?vue&type=template&id=651e8337&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        title: _vm.$t("MarkShow"),
        url: "/exam-mark-list",
        text: _vm.$t("ExamMarkList"),
      },
    },
    [
      _c("div", { attrs: { id: "printMe" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "text-center" }, [
              _c("h3", [_vm._v(_vm._s(_vm.basic.name))]),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.basic.address))]),
              _vm._v(" "),
              _c("h5", [
                _vm._v(
                  _vm._s(_vm.$t("Phone")) + ": " + _vm._s(_vm.basic.phone)
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("hr"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mt-1" }, [
            _c("table", { staticClass: "table table-striped table-bordered" }, [
              _c("tr", [
                _c(
                  "th",
                  { staticClass: "text-right", attrs: { width: "50%" } },
                  [_vm._v(_vm._s(_vm.$t("Title")))]
                ),
                _vm._v(" "),
                _c("th", { attrs: { width: "50%" } }, [
                  _vm._v(_vm._s(_vm.$t("Details"))),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  _vm._v(_vm._s(_vm.$t("Academic_Session"))),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.mark.session))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  _vm._v(_vm._s(_vm.$t("ExamTitle"))),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.mark.examTitle))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  _vm._v(_vm._s(_vm.$t("AcademicDetails"))),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.mark.examDetail))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  _vm._v(_vm._s(_vm.$t("AcademicSubject"))),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.mark.subject))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  _vm._v(_vm._s(_vm.$t("CreateBy"))),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.mark.creator))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  _vm._v(_vm._s(_vm.$t("CreatedAt"))),
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("myDate")(_vm.mark.created_at))),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "table",
              { staticClass: "table table-bordered table-striped basicTable" },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v(_vm._s(_vm.$t("SL")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("IDNumber")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("StudentName")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("Status")))]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("Mark"))),
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("Grade"))),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.mark.logs, function (student, index) {
                    return _c(
                      "tr",
                      {
                        key: index,
                        class: !student.attendance ? "bg-warning" : "",
                      },
                      [
                        _c("td", [_vm._v(_vm._s(++index))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(student.custom))]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: {
                            innerHTML: _vm._s(student.studentDetail),
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            student.attendance
                              ? [_vm._v(_vm._s(_vm.$t("Present")))]
                              : [_vm._v(_vm._s(_vm.$t("Absent")))],
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            student.attendance
                              ? [
                                  _c("table", { staticClass: "table" }, [
                                    _c("tr", [
                                      _c("th", [
                                        _vm._v(_vm._s(_vm.$t("Written"))),
                                      ]),
                                      _vm._v(" "),
                                      student.mark_type == 1 ||
                                      student.mark_type == 2
                                        ? _c("th", [
                                            _vm._v(_vm._s(_vm.$t("MCQ"))),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      student.mark_type == 2 ||
                                      student.mark_type == 3
                                        ? _c("th", [
                                            _vm._v(_vm._s(_vm.$t("Practical"))),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("th", [
                                        _vm._v(_vm._s(_vm.$t("TotalGain"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", [
                                        _vm._v(_vm._s(_vm.$t("FullMark"))),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(student.written)),
                                      ]),
                                      _vm._v(" "),
                                      student.mark_type == 1 ||
                                      student.mark_type == 2
                                        ? _c("td", [
                                            _vm._v(_vm._s(student.mcq)),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      student.mark_type == 2 ||
                                      student.mark_type == 3
                                        ? _c("td", [
                                            _vm._v(_vm._s(student.practical)),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(student.total))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.mark.full_mark)),
                                      ]),
                                    ]),
                                  ]),
                                ]
                              : [_vm._v(_vm._s(_vm.$t("NA")))],
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [
                            student.attendance
                              ? [_vm._v(_vm._s(student.grade))]
                              : [_vm._v(_vm._s(_vm.$t("NA")))],
                          ],
                          2
                        ),
                      ]
                    )
                  }),
                  0
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-success",
          attrs: { type: "button" },
          on: { click: _vm.printToPaper },
        },
        [
          _c("i", { staticClass: "fas fa-print" }),
          _vm._v(" " + _vm._s(_vm.$t("Print"))),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);